import React from 'react'
import { useGlobalContext } from '../Context'

const Pagination = () => {
    const { page, nbPages, getPrevData, getNextData } = useGlobalContext()
    return (
        <>
            <div className="pagination">
                <button onClick={() => getPrevData()}>PREV</button>
                <p>{page + 1} of {nbPages}</p>
                <button onClick={() => getNextData()}>NEXT</button>
            </div>
        </>
    )
}

export default Pagination