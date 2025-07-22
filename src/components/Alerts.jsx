/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const Alerts = () => {
  const { alerts: alertList = [], user: currentUser = {} } = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");
  
  // const adjustTime = (timestamp) => {
  //   const date = new Date(timestamp);
  //   date.setHours(date.getHours());
  //   return date.toLocaleString();
  // };

  const filteredAlerts = [...alertList]
    .filter(alert => alert.message_text.toLowerCase().includes(searchQuery))
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="info w-11/12 mx-auto md:w-full">
      <p>Welcome <span className="font-bold text-lg">{currentUser?.name}</span></p>
      <h2 className="text-3xl font-bold p-2">Alerts</h2>
      <p className="p-2 mb-3 text-slate-400">View your Alerts</p>
      <div className="search relative mb-3">
        <FaSearch className="absolute top-4 left-5" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Alerts"
          className="py-2 pl-12 bg-transparent border rounded-md w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-4 my-10">
        {filteredAlerts.length === 0 ? (
          <p className="text-gray-500">No Alerts Found</p>
        ) : (
          filteredAlerts.map((alert) => (
            <div key={alert.id} className="w-11/12 mx-auto md:w-full rounded-lg p-4 shadow-xl border">
              <img
                src={alert.media_url}
                alt="Alert"
                className="w-full object-cover rounded relative object-top bg-slate-200 p-3"
              />
              <p className="my-3 font-semibold">
                Message: <span className="font-thin">{alert?.message_text}</span>
              </p>
              <p className="text-sm text-slate-400 font-semibold">
                Time: <span className="font-normal">{(alert?.timestamp)}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alerts;