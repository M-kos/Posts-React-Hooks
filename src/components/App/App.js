import React, { useState } from 'react'

import { useSetData } from '../../hooks/useSetData'
import { StyledApp } from '../../styledComponents/styledComponents'
import { PostList } from '../PostList/PostList'

const App = () => {
  const [currentPage, setPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [state] = useSetData()

  const { posts, users, isLoading, isError } = state

  let usersList

  if (Array.isArray(users)) {
    usersList = users.reduce((result, user) => {
      if (!result[user.id]) {
        result[user.id] = user
      }

      return result
    }, {})
  }

  return (
    <StyledApp>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} users={usersList} />
      )}
    </StyledApp>
  )
}

export default App
