import { useEffect, useReducer } from 'react'
import { Http } from '../services/http'
import { dataReducer } from '../reducers/dataReducer'

export const useSetData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    posts: {},
    users: {},
    isLoading: false,
    isError: false,
  })

  useEffect(() => {
    dispatch({ type: 'INIT' })

    const getData = async () => {
      try {
        const posts = await Http.getData('posts')
        const users = await Http.getData('users')

        if (posts && users) {
          dispatch({
            type: 'SUCCESS',
            payload: {
              posts,
              users,
            },
          })
        }
      } catch (error) {
        dispatch({ type: 'ERROR' })
      }
    }

    getData()
  }, [])

  return [state]
}
