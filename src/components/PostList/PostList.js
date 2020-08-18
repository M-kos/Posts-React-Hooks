import React from 'react'

import { StyledPostList } from '../../styledComponents/styledComponents'
import { Post } from '../Post/Post'

export const PostList = ({ posts, users }) => {
  let postListMap
  let usersList

  if (Array.isArray(posts) && Array.isArray(users)) {
    usersList = users.reduce((result, user) => {
      if (!result[user.id]) {
        result[user.id] = user
      }

      return result
    }, {})

    postListMap = posts.map(({ id, userId, title = '', body = '' }) => {
      return (
        <Post key={id} user={usersList[userId]} title={title} body={body} />
      )
    })
  }

  return <StyledPostList>{postListMap}</StyledPostList>
}
