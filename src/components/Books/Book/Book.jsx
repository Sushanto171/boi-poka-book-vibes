import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, rating } = book;
  const bookDetailHandler = ()=>{
}
  return (
<Link to={`/book/${bookId}`} >
    <div onClick={bookDetailHandler} className="card bg-base-100 shadow-xl p-8 border h-full flex flex-col justify-between gap-6">
      <figure className="bg-gray-100 py-8 rounded-lg flex justify-center">
        <img className="w-36 h-44 rounded-sm" src={image} alt={bookName} />
      </figure>
      <div className="flex flex-col justify-around ">
        <div className="flex-grow">
        <div className="flex justify-start mb-4 gap-7">
          {tags.map((tag, i) => (
            <div key={i} className="badge bg-gray-100  text-green-600">{tag}</div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        </div>
 
        <div className="border border-dashed my-5"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Faction</div>
          <div className="rating">{rating}
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-gray-200"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
