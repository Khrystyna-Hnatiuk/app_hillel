import { Link } from "react-router-dom";
import { useTheme } from "../components/Theme";
const About = () => {
    const { theme } = useTheme()
    return (
        <div className={`text-center p-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">

                This is the About section where you can provide information about your app or company.
            </p>
            <h3 className="mt-20 text-[30px] text-gray-300">Soon .....⌛️</h3>
        </div>
    )
}
export default About;