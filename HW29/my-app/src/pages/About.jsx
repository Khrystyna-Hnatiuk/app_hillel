import { useTheme } from "../components/Theme";
import { act, useReducer } from "react";





const About = () => {
    const { theme } = useTheme();

   
    return (
        <div className={`text-center p-8 ${theme === 'dark' ? 'text-white' : 'text-black'} flex flex-col items-center`}>
          
            </div>
          
 
    )
}
export default About;