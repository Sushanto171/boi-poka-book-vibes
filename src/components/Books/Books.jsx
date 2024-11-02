import { useEffect, useState } from "react";
import Book from "./Book/Book";
const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("/books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className="my-10">
            <h3 className="text-center text-3xl font-bold">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {
                books.map((book)=> <Book key={book.bookId} book={book}/>)
            }
            </div>
        </div>
    );
};

export default Books;