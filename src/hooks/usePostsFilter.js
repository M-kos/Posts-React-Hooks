import { useState, useEffect } from 'react'

export const usePostsFilter = (posts, value) => {
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    if (posts && posts.length) {
      setFilteredPosts(posts.filter((post) => post.title.includes(value)))
    }
  }, [posts, value])

  return [filteredPosts]
}
