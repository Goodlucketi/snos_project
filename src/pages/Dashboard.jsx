import DashView from "../components/DashView";
import Footer from "../components/Footer";

DashView
const Dashboard = () => {
    return ( 
        <main className="mx-auto">
            <nav className="py-4 px-10 bg-slate-200">
                <h2 className="font-bold text-xl text-primary p-4">Security Network Operating System (SNOS) User Dashboard</h2>
            </nav>
            <DashView />
            <Footer />
        </main>
     );
}
 
export default Dashboard;