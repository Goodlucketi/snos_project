import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post("https://app.snosfortress.com/api/users/login.php", data);
            
            if(response.data.success){
                toast.success(response.data.message)
                
                localStorage.setItem('user', JSON.stringify(response.data.user))     

                navigate('/dashboard')
            }
            else{
                toast.error(`Login Failed: ${response.data.message || 'Unknown Error'}` )
            }

            // console.log(data);
            
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            toast.error("An error occurred during Login. Try again Later");

        }finally{
            setLoading(false)
        }
    };
    return ( 
        <header className="py-2">
            <main className="p-3 relative">  
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} className='userInfo border md:w-4/12 mx-auto p-4 md:p-6 shadow-lg mx-auto'>
                        <h2 className="text-center mb-5 font-bold text-2xl">Client Login </h2>
                        
                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="text" 
                                name="identifier" 
                                { ...register('identifier', {required: "User Email or Gateway ID is Required"}) }
                                placeholder='User Gateway ID' 
                            />
                            {errors.user_id && <p className="text-red-500">{errors.user_id.message}</p>}
                        </div>

                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="password" 
                                name="user_pass" 
                                { ...register('user_pass', {required: "Password is required"})} 
                                placeholder='Password' 
                            />
                            {errors.user_pass && <p className="text-red-500">{errors.user_pass.message}</p>}

                        </div>

                        <div className="p-2">
                            <button
                                className='p-3 shadow-md w-full rounded-md bg-blue-700 text-white'
                                type="submit"
                                disabled = {loading}
                            >
                                {loading ? (
                                    <div className="flex justify-center items-center">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white mr-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                        Logging In...
                                    </div>
                                    ) : (
                                    'Login'
                                    )}
                            </button>
                        </div>
                        <p className="p-2 font-lg text-center">Alreay have account? <Link className="text-blue-700" to="/register">Sign Up</Link></p>
                    </form>
                </div>
            </main>
        </header>
     );
}
 
export default Login;