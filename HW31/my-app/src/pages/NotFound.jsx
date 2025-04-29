import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleBackMain = () => {
        navigate('/', { replace: true })
    }

    return (
        <div className="p-8 text-center flex flex-col">
            <h2 className="font-bold text-4xl text-[#de8266] ">404</h2>
            <p className="mt-2 text-gray-400">Page is not found</p>

            <button className="text-blue-400 hover:underline mt-4 block" onClick={handleBackMain}>Back to Main</button>
        </div>

    )

}
export default NotFound;