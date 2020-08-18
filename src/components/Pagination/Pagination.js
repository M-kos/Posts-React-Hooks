import React from 'react'

import {
  StyledPagination,
  PaginationList,
  PaginationElement,
} from '../../styledComponents/styledComponents'

export const Pagination = ({ totalPages = [], switchPage }) => {
  const total = totalPages.map((numPage) => {
    return (
      <PaginationElement key={numPage} onClick={() => switchPage(numPage)}>
        {numPage}
      </PaginationElement>
    )
  })

  return (
    <StyledPagination>
      <PaginationList>{total}</PaginationList>
    </StyledPagination>
  )
}
