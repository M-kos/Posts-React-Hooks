import React from 'react'

import { StyledPostList } from '../../styledComponents/styledComponents'
import { Post } from '../Post/Post'

export const PostList = ({ posts, users }) => {
  let postListMap

  if (Array.isArray(posts)) {
    postListMap = posts.map(({ id, userId, title = '', body = '' }) => {
      return <Post key={id} user={users[userId]} title={title} body={body} />
    })
  }

  return <StyledPostList>{postListMap}</StyledPostList>
}
