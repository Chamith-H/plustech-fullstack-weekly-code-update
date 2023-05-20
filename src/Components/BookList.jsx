import SingleBook from "./SingleBook"

function BookList() {

    const books = [
        {title:"Modol duwa", content:"abcd123"},
        {title:"Sherlock holms", content:"22/B baker street"},
        {title:"Book A", content:"pqrs456"}
    ]

    return (
        <div className="BookList">
           {books.map((book) => (
                <SingleBook Title={book.title} Content={book.content}/>
           ))}
        </div>
    )
}

export default BookList