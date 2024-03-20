import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The time to say Goodbye', author: 'Brain yu', id:uuidv4() },
        {title: 'Domain expansion', author: 'Silivain jus', id:uuidv4() },
        {title: 'Great Warrior', author: 'Agatha prime', id:uuidv4() },
        {title: 'Looking for Luck', author: 'Stefen gain', id:uuidv4() },
    ])

    function addBook (title, author){
        setBooks([...books, {title, author}])
    }
    function removeBook (id){
        setBooks(books.filter(book => book.id !== id))
    }
    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;