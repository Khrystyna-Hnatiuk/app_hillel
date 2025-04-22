import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../components/Theme";
import { increment } from "../store/features/counterSlice";
import { decrement } from "../store/features/counterSlice";
const Counter = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch();
    const counter = useSelector(({ counter }) => counter.count)

    return (
        <div className={`text-center p-8 ${theme === 'dark' ? 'text-white' : 'text-black'} flex flex-col items-center`}>
            <h2 className="text-3xl font-bold mb-4"> Counter</h2>
            <div className={` h-[100px] rounded-md p-2 w-[20%] ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'} `}>
                <p>Count: {counter}</p>
                <div className=" flex flex-row gap-2 mt-3 items-center justify-center mt-2">
                    <button className={` w-[60px] h-[30px] text-center rounded-md ${theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-black text-white'}`} onClick={() => dispatch(increment())}>+</button>
                    <button className={` w-[60px] h-[30px] text-center rounded-md ${theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-black text-white'}`} onClick={() => dispatch(decrement())}>-</button>

                </div>
            </div>
            

        </div>)
}
export default Counter