import { useEffect, useState } from "react";
import CheckLocalStorage from "../Utility/CheckLocalStorage";
import { useLoaderData } from "react-router-dom";
import Book from "../Books/Book/Book";

const WishList = () => {
    const data = useLoaderData();
    const [wishList, setWishlist] = useState([])
    useEffect (()=>{
        const ids = CheckLocalStorage("wish-List")
        const books = data.filter((book)=> ids.includes(book.bookId));
        setWishlist(books)
    },[])
    return (
        <div className="mt-5">
            {
                wishList.map(list => <Book  book={list} key={list.bookId}/>)
            }
        </div>
    );
};

export default WishList;