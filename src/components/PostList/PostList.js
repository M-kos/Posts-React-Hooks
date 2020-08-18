import React from 'react'

import { StyledPostList } from '../../styledComponents/styledComponents'
import { Post } from '../Post/Post'

export const PostList = ({ posts, users }) => {
  let postListMap

  if (Array.isArray(posts) && Array.isArray(users)) {
    postListMap = posts.map(({ id, userId, title, body }) => {
      const [user] = users.filter(({ id }) => id === userId)

      return <Post key={id} user={user} title={title} body={body} />
    })
  }

  return <StyledPostList>{postListMap}</StyledPostList>
}
