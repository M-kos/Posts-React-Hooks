import React from 'react'

import {
  StyledPost,
  PostTitle,
  PostBody,
  PostFooter,
} from '../../styledComponents/styledComponents'

export const Post = ({ title, body, user }) => {
  const { name = '', username = '' } = user

  return (
    <StyledPost>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      <PostFooter>{`${name} (${username})`}</PostFooter>
    </StyledPost>
  )
}
