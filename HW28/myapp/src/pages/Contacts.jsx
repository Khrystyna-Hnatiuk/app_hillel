import { Link } from "react-router-dom";
import { useTheme } from "../components/Theme";
const Contacts = () => {
    const { theme } = useTheme()
    return (

      
            <div className={`p-8 ${theme === 'dark' ? 'text-white' : 'text-black'} text-center`}>
                <h2 className="text-3xl font-bold mb-4 mt-8">Contacts</h2>
                <p className="text-lg mb-8">
                    Here are the contacts you can use to reach us.
                </p>
    
                <div className={`mt-10 w-[340px] ${theme==='dark'? 'bg-gray-600':'bg-gray-400'}  p-6 rounded-lg mx-auto flex flex-col items-center`}>
                    <h3 className="text-xl font-semibold mb-2">Our Details:</h3>
                    <ul>
                        <li className="mb-2">
                            <strong>Email:</strong> support@example.com
                        </li>
                        <li className="mb-2">
                            <strong>Phone:</strong> +1 (800) 123-4567
                        </li>
                        <li className="mb-2">
                            <strong>Address:</strong> 1234 Some St, City, Country
                        </li>
                    </ul>
                </div>
            </div>
        );
}
export default Contacts;