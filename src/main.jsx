import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Error/Dashboard/Dashboard';
import BookDetail from './components/Books/BookDetail/BookDetail';

import ListedBooks from './components/ListedBooks/ListedBooks';
import Read from './components/Read/Read';
import WishList from './components/Wishlist/WishList';


const router = createBrowserRouter([
  {
    path : "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/book/:bookId",
        loader : ()=> fetch("/books.json"),
        element: <BookDetail />
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        children:  [
          {
            path: "/listedbooks/read",
           loader : ()=> fetch("/books.json"),
            element: <Read />
          },
          {
            path: "/listedbooks/wishlist",
            loader : ()=> fetch("/books.json"),
            element: <WishList />
          }
        ]
      },
  
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
