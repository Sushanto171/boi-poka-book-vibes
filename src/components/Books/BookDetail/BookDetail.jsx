import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const bid = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((b) => b.bookId === bid);
  const {
    image,
    author,
    bookId: id,
    bookName,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const detail = (title, value) => {
    return (
      <div className="grid grid-cols-3">
        <p className="">{title}</p>
        <p className="col-span-2 pl-20 font-semibold">{value}</p>
      </div>
    );
  };
  console.log(detail);
  return (
    <div className="space-y-5 my-10">
      <div className="text-center">
        <button onClick={() => navigate(-1)} className="btn btn-accent">
          Go back
        </button>
      </div>
      <div className="hero min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-20 rounded-lg">
            <img
              src={image}
              className="w-[425px] md:h-[564px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p>By: {author}</p>
            <p className="border-y-2">Fiction</p>
            <p> {review}</p>
            <div className="flex justify-start mb-4 gap-7 items-center">
              Tags:
              {tags.map((tag, i) => (
                <div key={i} className="badge bg-gray-100  text-green-600">
                  {tag}
                </div>
              ))}
            </div>
            <div className="border-t-2"></div>
            {detail("Number Of Pages:", totalPages)}
            {detail("Publisher:", publisher)}
            {detail("Year of Publishing:", yearOfPublishing)}
            {detail("Rating:", rating)}
            <div>
              <button className="btn btn-outline btn-success mr-10">
                Read
              </button>
              <button className="btn btn-success">Wish List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
