export const paginationReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_INDEX':
      return {
        ...state,
        idxLastPost: payload.idxLastPost,
        idxFirstPost: payload.idxFirstPost,
      }
    case 'SET_TOTAL':
      return {
        ...state,
        totalPages: payload.totalPages,
      }
    default:
      throw new Error()
  }
}
