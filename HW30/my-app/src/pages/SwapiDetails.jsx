import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../components/Theme";
import { clearCurrentItem } from "../store/features/swapi/swapiSlice";
import { fetchSwapiByUd } from "../store/features/swapi/swapiThunks";

const SwapiDetails = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const { currentItem, loading, error } = useSelector((state) => state.swapi)

    const handleInputChange = (e) => {
        setValue(e.target.value);

    };

    const handleSubmit = () => {
        if (value) {
            dispatch(clearCurrentItem());
            dispatch(fetchSwapiByUd(value));
            setValue('')

        }
    };
    const handleClear = () => {
        dispatch(clearCurrentItem());
        setValue('')
    }

    if (loading) {
        return <p className="p-8 text-gray-400 text-center">Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[30px]">Swapi</h1>
            <div className="flex w-full items-center">
                <input
                    value={value}
                    onChange={handleInputChange}
                    className="text-black w-full pl-[10px] bg-gray-200 h-[50px] border border-solid border-gray-800"
                    type="text"
                    placeholder="https://www.swapi.tech/api/people/"
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-gray-600 text-white w-[10%] h-[50px] rounded"
                >
                    Get info
                </button>
            </div>

            <div className={`${theme === 'dark' ? 'bg-white' : 'text-black'} w-full mt-10 bg-white-900 border border-gray-600 rounded`}>
                <div className={`w-[100%]  p-4 rounded text-black`}>

                    {currentItem ? (
                        <pre>{JSON.stringify(currentItem, null, 2)}</pre>
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
            {error && (
                <p className="text-red-500 mt-4">{error}</p>
            )}

            <div className="flex  flex-start">
                <button
                    onClick={handleClear}
                    className="bg-yellow-600 ml-0 text-black w-[100px] text-center h-[40px] rounded mt-4">Clear</button>
            </div>
        </div>
    );
}

export default SwapiDetails;
