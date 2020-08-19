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
    background-color: #EDEDED;
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

export const StyledInput = styled.input`
  max-width: 300px;
  height: 24px;
  border: 1px solid #454444;
  border-radius: 2px;
  outline: none;
  padding: 4px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
`

export const StyledPostList = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const StyledPost = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 1);
  margin-bottom: 12px;
  border-radius: 2px;
`

export const PostTitle = styled.div`
  border-radius: 2px 2px 0 0;
  background-color: #5c25a6;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 1.2em;
  padding: 4px;
`

export const PostBody = styled.div`
  background-color: #d2b1ff;
  padding: 4px;
`

export const PostFooter = styled.div`
  text-align: end;
  padding: 4px;
  background-color: #c294ff;
  border-radius: 0 0 2px 2px;
`

export const StyledPagination = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
`

export const PaginationElement = styled.li`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 2px;
  border: 2px solid #8f22a6;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#F0ACFF' : '#ffffff')};
`
