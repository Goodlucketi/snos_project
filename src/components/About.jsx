import { Link } from "react-router-dom";
import Button from "./Button";

const About = () => {
    return ( 
        <main className="p-4">
            <div className="about md:w-10/12 mx-auto md:my-10 p-4 md:p-8 shadow-md">
                <h2 className="font-bold text-3xl mb-5 text-blue-700">About SNOS</h2>
                <p className="font-lg">
                    SNOS is a real-time monitoring and surveillance system, with realtime SMS and e-mail alerts of your treasures wherever they may be located from wherever you are in Nigeria and in the world, whenever you want.You may need a second or third person or your security company or guard or the nearest Police post/station/patrol team or whoever you designate to also receive the alerts for rapid response intervention. These designated persons must necessarily be physically close to your Location of Treasure (LoT) for the purpose of rapid response intervention. 
                </p>
                <p className="font-lg">
                    Your LoT may be your home where you live or your country/village home where you visit infrequently or office or factory or bank or warehouse or event centre/place or project/construction site or plot of land or restaurant or shop. It can be your Church or Mosque compound. Your Object of Treasure (OoT) can be your car or truck or yacht or ship or aircraft.
                </p>
                <p className="font-lg mb-5">
                    In your home or office building, your Point of Treasure (PoT) may be your cash/gold/diamond/certificates/landed property document vault or a particular room or garage or main gate or parking lot or sitting room or kitchen or corridor or veranda or balcony or lobby or particular doors or windows or cupboards or lockers or drawers or shelves or any of the 4 segments of your home/ building perimeter fence, etc. You can designate wherever you want as your point of treasure! ……"had I known" or "had we known" is always too late and it has cost implications: the cost may be financial or material or tragic loss of human life or lives……
                </p>
                <Link to="/about"><Button text="Learn More" /></Link>
            </div>
        </main>
     );
}
 
export default About;