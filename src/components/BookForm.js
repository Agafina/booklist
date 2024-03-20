import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form className="book-form" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Enter Title of Book" value={title} onChange={(e) => setTitle(e.target.value)}  />
            <input type="text" required placeholder="Enter Book's Author" value={author} onChange={(e) => setAuthor(e.target.value)}  />
            <input type="submit" value='add book' />
        </form>
     );
}
 
export default BookForm;