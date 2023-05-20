import "../Styles/SingleBook.css"

function SingleBook( props ) {
    return (
        <div className="SingleBook">
            <h3>{props.Title}</h3>
            <p>{props.Content}</p>
        </div>
    )
}

export default SingleBook