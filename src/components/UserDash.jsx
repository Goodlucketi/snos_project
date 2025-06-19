/* eslint-disable react/prop-types */
import { FaBell } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const UserDash = () => {
    const { alerts: alertList = [], user: currentUser = {} } = useOutletContext();
    
    const unreadCount = alertList.filter(alert => alert.status === 'unread').length;
    const inProgressCount = alertList.filter(alert => alert.status === 'in-progress').length;
    const completedCount = alertList.filter(alert => alert.status === 'complete').length;

  return (
    <div className="info w-11/12 mx-auto md:w-full">
      <p className="text-xl">Welcome <span className="font-bold text-2xl">{currentUser?.name}</span></p>
      <h2 className="text-3xl font-bold p-2">Dashboard</h2>
      <p className="p-2 mb-3 text-slate-400">Overview of your security alerts</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        <div className="p-4 bg-slate-700 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <FaBell className="text-red-500 text-2xl" />
            <h3 className="text-lg font-semibold">Unread Alerts</h3>
          </div>
          <p className="text-3xl font-bold mt-2">{unreadCount}</p>
        </div>
        <div className="p-4 bg-slate-700 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <FaBell className="text-yellow-500 text-2xl" />
            <h3 className="text-lg font-semibold">In Progress</h3>
          </div>
          <p className="text-3xl font-bold mt-2">{inProgressCount}</p>
        </div>
        <div className="p-4 bg-slate-700 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <FaBell className="text-green-500 text-2xl" />
            <h3 className="text-lg font-semibold">Completed</h3>
          </div>
          <p className="text-3xl font-bold mt-2">{completedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDash;