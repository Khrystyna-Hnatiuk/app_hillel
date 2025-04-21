import { useTheme } from "../components/Theme";
import { act, useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
            case 'decrement':
                return{
                    ...state,
                    count:state.count-1
                }
                default:
                    return state

    }
}
const Counter=()=>{
    const {theme} = useTheme()

    const [state, dispatch] = useReducer(reducer, { count: 0, name: 'about' });

    return (
        <div className={`text-center p-8 ${theme === 'dark' ? 'text-white' : 'text-black'} flex flex-col items-center`}>
            <h2 className="text-3xl font-bold mb-4"> Counter</h2>
             <div className={` h-[100px] rounded-md p-2 w-[20%] ${theme==='dark' ? 'bg-gray-600': 'bg-gray-400'} `}>
            <p>Count: {state.count}</p>
            <div className=" flex flex-row gap-2 mt-3 items-center justify-center mt-2">
              <button className={` w-[60px] h-[30px] text-center rounded-md ${theme==='dark' ? 'bg-gray-100 text-black': 'bg-black text-white'}`} onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className={` w-[60px] h-[30px] text-center rounded-md ${theme==='dark' ? 'bg-gray-100 text-black': 'bg-black text-white'}`} onClick={() => dispatch({ type: 'decrement' })}>-</button>
    
            </div>
            </div>
          
        </div>)
}
export default Counter