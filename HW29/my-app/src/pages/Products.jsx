import { useTheme } from "../components/Theme";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/features/favoritesSlice";
import Favorites from "./Favorites";
const products = [
    { id: 1, name: 'Macbook pro' },
    { id: 2, name: 'Iphone 16' },
    { id: 3, name: 'Air max' }
]

const Products = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();
    const favorites = useSelector(({ favorites }) => favorites.items);
    const isFavorite =(product)=>{
        return favorites.find((item) => item.id === product.id);
    } 

    const toggleFavorite=(product)=>{
        if(isFavorite(product)){
            dispatch(removeFavorite(product.id))
        }
        else{
            dispatch(addFavorite(product))
        }
    }
    return (
        <>
        <div className=" flex flex-col justify-center  items-center">
            <h1 className="text-[30px] pt-7">Products</h1>
   
        <div className="w-full mt-3 flex justify-center">    
        <ul className="w-full text-white max-w-[600px]  flex gap-4 flex-col ">
                {products.map((product) => {
                    const isFav = isFavorite (product)
                    return(
                        <li
                        key={product.id}
                        className='flex w-full max-w-[600px] gap-10 p-4 bg-gray-800  hover:bg-gray-600 rounded-md justify-between'>
                            <span className="font-semibold">{product.name}</span>
                            <button
                            onClick={()=>toggleFavorite(product)}
                            className={`px-3 py-1 rounded-md text-sm transitions-colors ${isFav ? 'bg-red-400':'bg-blue-500'}`}>{isFav? 'Remove': 'Favorite'}</button>
                        </li>
                    )
                })}
            </ul>         </div></div></>
    )
}
export default Products