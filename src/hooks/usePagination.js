import { useState, useEffect, useReducer } from 'react'

import { paginationReducer } from '../reducers/paginationReducer'

export const usePagination = (length) => {
  const [currentPage, setPage] = useState(1)
  const [postsPerPage] = useState(10)

  const [paginationState, dispatch] = useReducer(paginationReducer, {
    totalPages: [],
    idxFirstPost: 0,
    idxLastPost: 0,
  })

  useEffect(() => {
    const idxLastPost = currentPage * postsPerPage
    const idxFirstPost = idxLastPost - postsPerPage

    dispatch({
      type: 'SET_INDEX',
      payload: {
        idxLastPost,
        idxFirstPost,
      },
    })

    const totalPages = []

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      totalPages.push(i)
    }

    dispatch({
      type: 'SET_TOTAL',
      payload: {
        totalPages,
      },
    })
  }, [currentPage, postsPerPage, length])

  return [paginationState, currentPage, setPage]
}
