import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
    return ( 
        <main>
            <Navbar/>
            <Hero />
            <About />
            <div className="features p-8 my-10">
                <h2 className="font-bold text-3xl mb-7 text-slate-50 text-center">SNOS Features</h2>
                <div className="grid gap-10 md:grid-cols-3 md:w-10/12 mx-auto">

                    <Features title="Smart Monitoring" text="SNOS senses and monitors wherever and whatever you want" />

                    <Features title="Real time SMS and Alerts" text="SNOS sends you real time update on the current state of your Treasure or properties by SMS and e-mail" />

                    <Features title="Security" text="Incase of emergencies, closest security personnel registered in your SNOS account are reached for prompt response" />

                    {/* <Features title="Smart Monitoring" text="SNOS senses and monitors wherever and whatever you want" /> */}
                </div> 
            </div>
            <Contact />
            <Footer />
        </main>
     );
}
 
export default Landing;