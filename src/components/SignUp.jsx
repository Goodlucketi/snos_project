import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <header className="py-2">
            <main className="p-3 relative">  
                <div className="form">
                    <form className='userInfo border md:w-4/12 mx-auto p-4 md:p-6 shadow-lg mx-auto'>
                        <h2 className="text-center mb-5 font-bold text-2xl">Client Registration </h2>

                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="text" name="client_name" id="client_name" placeholder='Surname, Other Names' />
                        </div>
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="email" name="client_email" id="client_email" placeholder='Email' />
                        </div>
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="text" name="client_phone" id="client_phone" placeholder='Phone' />
                        </div>
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md border' type="password" name="client_pwd" id="client_pwd" placeholder='Password' />
                        </div>
                        <div className="p-2">
                            <textarea className='p-3 shadow-md w-full rounded-md border' name="client_address" id="client_address" placeholder='Address'></textarea>
                        </div>
                        <div className="p-2">
                            <input className='p-3 shadow-md w-full rounded-md bg-blue-700 text-white' type="submit" value="Submit" />
                        </div>
                        <p className="p-2 font-lg text-center">Alreay have account? <Link className="text-blue-700" to="/login">Login</Link></p>
                    </form>
                </div>
            </main>
        </header>
     );
}
 
export default SignUp;