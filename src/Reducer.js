export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((currPostId) => currPostId.objectID !== action.payload
                )
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "NEXT_PAGE":
            let nextPageNum = state.page + 1
            if (nextPageNum >= state.nbPages) {
                nextPageNum = 0
            }
            return {
                ...state,
                page: nextPageNum
            }
        case "PREV_PAGES":
            let pageNum = state.page

            if (pageNum <= 0) {
                pageNum = 0
            } else {
                pageNum = pageNum - 1

            }
            return {
                ...state,
                page: pageNum
            }
        default:
            break;
    }
    return state
}