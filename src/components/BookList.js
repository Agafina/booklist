import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length? ( 
        <div className="book-list">
            <ul>
                {
                    books.map(book => {
                        return(
                            <BookDetails book ={book} key={book.id} />
                        )
                    })
                }
            </ul>
        </div>
     ): (
        <div className="empty">
                <h3>You have no books to Read!!! Free time </h3>
        </div>
     )
}
 
export default BookList;