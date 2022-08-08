import { useGlobalContext } from "../Context"
import "./Stories.css"

const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext()
    if (isLoading) {
        return (
            <h1>Loading.....</h1>
        )
    }

    return (
        <div>
            <h2>
                {
                    hits.map((item) => {
                        const { title, author, url, num_comments, objectID } = item
                        return <div key={objectID} className="card">
                            <h3>{title}</h3>
                            <p>By  {author} | <span> {num_comments}</span>
                            </p>
                            <div className="button">
                                <a href={url} target="_blank" className="readmore"> Read more</a>
                                <a href="#" className="remove" onClick={() => removePost(objectID)}> remove</a>
                            </div>
                        </div>
                    })
                }
            </h2>
        </div>
    )

}


export default Stories