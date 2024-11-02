import { useState } from "react";
import { NavLink, Outlet ,Link} from "react-router-dom";

const ListedBooks = () => {
  const [active, setActive] = useState("");
  const [active2, setActive2] = useState("");
  const tabActiveHandler = () => {
    setActive("tab-active");
    setActive2("");
  };
  const readBtnHandler = () => {
    setActive2("tab-active");
    setActive("");
  };
  return (
    <div className="mt-2 min-h-screen">
      <h3 className="font-bold text-3xl text-center bg-gray-100 py-5 rounded-md">
        Books
      </h3>
      <div className="text-center my-5 ">
        <div className=" h-10 flex justify-center">
        <div className="dropdown">
         <div tabIndex={0} role="button" className="btn btn-accent m-1">
         <details >
         <summary>Sort by</summary>
         </details>
         </div>
            <ul tabIndex={0} className="dropdown-content menu bg-accent rounded-box z-[1] p-2 shadow">
                <li><Link to={""}>Item 1</Link></li>
                <li><>Item 2</></li>
            </ul>
            </div>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted flex w-full">
        <NavLink
          role="tab"
          onClick={readBtnHandler}
          className={`tab ${active2} w-48`}
          to="/listedbooks/read"
        >
          <button>Read Books</button>
        </NavLink>
        <NavLink
          role="tab"
          onClick={tabActiveHandler}
          className={`tab ${active} w-48`}
          to="/listedbooks/wishlist"
        >
          <button>Wishlist Books</button>
        </NavLink>
        <NavLink aria-disabled role="tab" className={`tab w-full`}></NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
