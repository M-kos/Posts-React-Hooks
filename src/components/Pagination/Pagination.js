import React from 'react'

import {
  StyledPagination,
  PaginationList,
  PaginationElement,
} from '../../styledComponents/styledComponents'

export const Pagination = ({ totalPages = [], switchPage, currentPage }) => {
  const total = totalPages.map((numPage) => {
    return (
      <PaginationElement
        key={numPage}
        onClick={() => switchPage(numPage)}
        active={currentPage === numPage}
      >
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
