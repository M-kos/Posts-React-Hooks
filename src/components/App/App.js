import React from 'react'

import { useSetData } from '../../hooks/useSetData'
import { StyledApp } from '../../styledComponents/styledComponents'
import { PostList } from '../PostList/PostList'

const App = () => {
  const [state] = useSetData()
  const { posts, users, isLoading, isError } = state

  return (
    <StyledApp>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} users={users} />
      )}
    </StyledApp>
  )
}

export default App
