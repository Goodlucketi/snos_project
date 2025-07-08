import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const SignUp = () => {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post("https://snos.teledominternational.net/users/create.php", data);
            
            if(response.data.success){
                toast.success(response.data.message)
            }
            else{
                toast.error(`Registration Failed: ${response.data.message || 'Unknown Error'}` )
            }

            // console.log(data);
            
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
            toast.error("An error occurred during registration. Try again Later");

        }finally{
            setLoading(false)
        }
    };
    return ( 
        <header className="py-2">
            <main className="p-3 relative">  
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} className='userInfo border md:w-4/12 mx-auto p-4 md:p-6 shadow-lg mx-auto'>
                        <h2 className="text-center mb-5 font-bold text-2xl">Client Registration </h2>
                        
                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="text" 
                                name="user_id" 
                                { ...register('user_id', {required: "User ID is Required"}) }
                                placeholder='User Gateway ID' 
                            />
                            {errors.user_id && <p className="text-red-500">{errors.user_id.message}</p>}
                        </div>

                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="text" 
                                name="user_name" 
                                { ...register('user_name', {required: "Name is required"}) } 
                                placeholder='Surname, Other Names' 
                            />
                            {errors.user_name && <p className="text-red-500">{errors.user_name.message}</p>}

                        </div>

                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="email" 
                                name="user_email" 
                                { ...register('user_email', {required: "Email is required"})}
                                placeholder='Email' 
                            />
                            {errors.user_email && <p className="text-red-500">{errors.user_email.message}</p>}

                        </div>

                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="text" 
                                name="user_phone" 
                                { ...register('user_phone', {required: "Phone Number is required" })}
                                placeholder='Phone Number'
                            />
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
                            <textarea 
                                className='p-3 shadow-md w-full rounded-md border' 
                                name="user_address" 
                                { ...register('user_address', {required: "Address is required"})}
                                placeholder='Address'>

                            </textarea>
                            {errors.user_address && <p className="text-red-500">{errors.user_address.message}</p>}

                        </div>

                        <div className="p-2">
                            <input 
                                className='p-3 shadow-md w-full rounded-md border' 
                                type="text" 
                                name="user_location" 
                                { ...register('user_location', {required: "Location is required" })}
                                placeholder='State, L.G.A'
                            />
                            {errors.user_location && <p className="text-red-500">{errors.user_location.message}</p>}

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
                                        Registering...
                                    </div>
                                    ) : (
                                    'Register'
                                    )}
                            </button>
                        </div>
                        <p className="p-2 font-lg text-center">Alreay have account? <Link className="text-blue-700" to="/login">Login</Link></p>
                    </form>
                </div>
            </main>
        </header>
     );
}
 
export default SignUp;