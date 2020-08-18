import React from 'react'

import { useSetData } from '../../hooks/useSetData'
import { usePagination } from '../../hooks/usePagination'
import { StyledApp } from '../../styledComponents/styledComponents'
import { PostList } from '../PostList/PostList'
import { Pagination } from '../Pagination/Pagination'

const App = () => {
  const [{ posts, users, isLoading, isError }] = useSetData()
  const [{ idxFirstPost, idxLastPost, totalPages }, setPage] = usePagination(
    posts
  )

  let usersList

  if (users && users.length) {
    usersList = users.reduce((result, user) => {
      if (!result[user.id]) {
        result[user.id] = user
      }

      return result
    }, {})
  }

  let currentPosts

  if (posts && posts.length) {
    currentPosts = posts.slice(idxFirstPost, idxLastPost)
  }

  const switchPage = (numPage) => {
    setPage(numPage)
  }

  return (
    <StyledApp>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PostList posts={currentPosts} users={usersList} />
          <Pagination totalPages={totalPages} switchPage={switchPage} />
        </>
      )}
    </StyledApp>
  )
}

export default App
