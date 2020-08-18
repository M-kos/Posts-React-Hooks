export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
      }
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        posts: payload.posts,
        users: payload.users,
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}
