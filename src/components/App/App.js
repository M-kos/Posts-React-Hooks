import React, { useState } from 'react'

import { useSetData } from '../../hooks/useSetData'
import { usePagination } from '../../hooks/usePagination'
import { usePostsFilter } from '../../hooks/usePostsFilter'
import { StyledApp, StyledInput } from '../../styledComponents/styledComponents'
import { PostList } from '../PostList/PostList'
import { Pagination } from '../Pagination/Pagination'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [{ posts, users, isLoading, isError }] = useSetData()
  const [filteredPosts] = usePostsFilter(posts, searchValue)
  const [
    { idxFirstPost, idxLastPost, totalPages },
    currentPage,
    setPage,
  ] = usePagination(filteredPosts.length)

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

  if (filteredPosts && filteredPosts.length) {
    currentPosts = filteredPosts.slice(idxFirstPost, idxLastPost)
  }

  const switchPage = (numPage) => {
    setPage(numPage)
  }

  const searchHandler = (event) => {
    setSearchValue(event.target.value)
    setPage(1)
  }

  return (
    <StyledApp>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <StyledInput
            value={searchValue}
            onChange={searchHandler}
            placeholder="Search"
          />
          <PostList posts={currentPosts} users={usersList} />
          <Pagination
            totalPages={totalPages}
            switchPage={switchPage}
            currentPage={currentPage}
          />
        </>
      )}
    </StyledApp>
  )
}

export default App
