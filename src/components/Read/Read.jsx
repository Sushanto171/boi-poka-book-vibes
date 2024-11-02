import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Books/Book/Book";
import CheckLocalStorage from "../Utility/CheckLocalStorage";


const Read = () => {
    const [books, setBook] = useState([])
    const data = useLoaderData()
    useEffect(()=>{
      const ids =  CheckLocalStorage("read-List")
           const books = data.filter(book => ids.includes(book.bookId));
            setBook(books)      
    },[])
    return (
        <div className="mt-5">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
    
        </div>
    );
};

export default Read;