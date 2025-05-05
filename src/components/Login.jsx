import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <header className="py-16">
            <main className="p-4 relative">  
                <div className="form">
                    <form className='userInfo border md:w-4/12 mx-auto p-4 md:p-8 shadow-lg mx-auto'>
                        <h2 className="text-center mb-5 font-bold text-2xl">Client Login </h2>

                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="email" name="client_email" id="client_email" placeholder='Email' />
                        </div>
                       
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="password" name="client_pwd" id="client_pwd" placeholder='Password' />
                        </div>
                        
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md bg-blue-700 text-white' type="submit" value="Login" />
                        </div>
                        <p className="p-2 font-lg text-center">Don't have an account? <Link className="text-blue-700" to="/register">Register</Link></p>
                    </form>
                </div>
            </main>
        </header>
     );
}
 
export default Login;