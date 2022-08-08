import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState = {
    isLoading: false,
    nbPages: 0,
    query: "",
    page: 0,
    hits: []

}
export const AppContext = createContext()
const API = "https://hn.algolia.com/api/v1/search?"



export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchApiData = async (url) => {
        dispatch({
            type: "SET_LOADING"
        })
        try {
            const data = await fetch(url)
            const originalData = await data.json()
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: originalData.hits,
                    nbPages: originalData.nbPages
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removePost = (id) => {
        dispatch({
            type: "REMOVE_POST",
            payload: id
        })
    }

    const SearchPost = (querySearch) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: querySearch
        })
    }

    const getPrevData = () => {
        dispatch({
            type: "PREV_PAGES"
        })
    }

    const getNextData = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query , state.page])


    return (
        <AppContext.Provider value={{ ...state, removePost, SearchPost, getPrevData, getNextData }}>
            {children}
        </AppContext.Provider>
    )
}
// custom Hook ....
export const useGlobalContext = () => useContext(AppContext)