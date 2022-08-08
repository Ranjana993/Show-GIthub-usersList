import React from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
    const { query, SearchPost } = useGlobalContext()
    return (
        <>
            <h1>Search What You Want</h1>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className='inputField'>
                    <input type="text" placeholder='Search...' value={query} onChange={(e) => SearchPost(e.target.value)} />
                </div>
            </form>
        </>
    )
}

export default Search