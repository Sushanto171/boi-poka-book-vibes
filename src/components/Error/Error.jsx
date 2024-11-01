import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h3 className="font-bold text-3xl text-red-500">Page not found!</h3>
            <p className="text-2xl my-3">Status: {error.message || error.status} 🤐</p>
            <button onClick={()=> navigate(-1)} className="px-4 py-2 border font-semibold rounded-lg bg-gray-800 shadow-md">Go back</button>
        </div>
    );
};

export default Error;