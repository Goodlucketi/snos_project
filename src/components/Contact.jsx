import Button from "./Button";
const Contact = () => {
    return ( 
        <main className="my-10">
            <div className="contact md:w-10/12 mx-auto">
                <h2 className="font-bold text-3xl mb-5 text-blue-700 px-6 md:text-center">Contact Us</h2>
                <div className="md:flex md:justify-between md:gap-5 items-center">
                    <div className="address text-lg md:w-6/12 px-6">
                        <p className="my-2">6A & 6B, Sule Abuka crescent Off Opebi Road, Ikeja, Lagos.</p>
                        <p className="my-2">+234 815-2625-809, +234 906-5731-338</p>
                        <p className="my-2">admin@snosfortress.com</p>
                    </div>
                    <div className="contact-form md:w-6/12 p-4">
                        <form className="md:w-10/12 mx-auto shadow-md rounded-md p-4 md:px-6 md:py-10">
                            <h3 className="font-bold text-xl mb-5 text-blue-700">Send Us a Message</h3>
                            <div className="my-3">
                                <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="p-3 w-full shadow-md border" />
                            </div>
                            <div className="my-3">
                                <input type="email" name="email" id="email" placeholder="Email" className="p-3 w-full shadow-md border" />
                            </div>
                            <div className="my-3">
                                <input type="text" name="phone" id="phone" placeholder="Phone Number" className="p-3 w-full shadow-md border" />
                            </div>
                            <div className="my-3">
                                <textarea name="message" id="message" placeholder="Type Message" className="p-3 w-full shadow-md border"></textarea>
                            </div>
                            <Button text = "Send Message" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
           
        </main>
     );
}
 
export default Contact;