import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../components/Theme";
import { clearFavorite } from "../store/features/favoritesSlice";

const Favorites = () => {


    const { theme } = useTheme()
    const dispatch = useDispatch();
    const favorites = useSelector(({ favorites }) => favorites.items);
    if (!favorites.length) {
        return (
            <div className=" text-white max-w-md mx-auto mt-10 p-6 bg-gray-700 rounded-2xl shadow-lg flex flex-col gap-4 text-center items-center">No products available</div>
        )
    }
    console.log('fav', favorites)
    return (
        <div className="flex items-center justify-center mt-5">

            <div className="w-full max-w-[600px] mt-3 flex items-center justify-center flex-col">
                <ul className="w-full text-white flex gap-4 flex-col">
                    {favorites.map((item) => (
                        <li
                            key={item.id}
                            className={`flex w-full max-w-[600px] gap-10 p-4 bg-gray-800 hover:bg-gray-600  rounded-md justify-between`}>
                            <span className="font-semibold">{item.name}</span>
                        </li>
                    ))}
                </ul>
                {!!favorites.length && (
                    <button
                        className="mt-4 w-full max-w-[600px] bg-yellow-400  hover:bg-yellow-500 text-black font semibold py-2 rounded-md"
                        onClick={() => dispatch(clearFavorite())}> Clear Favorites</button>
                )}
            </div>
        </div>)

}

export default Favorites