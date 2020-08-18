import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #C0C0C0;
    font-family: 'Roboto', 'Ubuntu', sans-serif;
  }
`

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 64px;

  @media screen and (max-width: 768px) {
    padding: 16px;
    justify-content: center;
  }
`

export const StyledTitle = styled.div``

export const StyledPostList = styled.div``

export const StyledPost = styled.div``

export const PostTitle = styled.div``

export const PostBody = styled.div``

export const PostFooter = styled.div``
