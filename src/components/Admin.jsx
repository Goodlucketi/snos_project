/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from "../assets/images/security_icon.png"
import { FaSearch } from 'react-icons/fa';

const Admin = ({ onSelectUser, userStatusMap }) => {
  const [userLists, setUserLists] = useState([]);
  const [alert, setAlerts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://app.snosfortress.com/api/users/read.php");
        const alertRes = await axios.get("https://app.snosfortress.com/api/alerts/read.php");
        setUserLists(res.data);
        setAlerts(alertRes.data)

      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers()
  }, []);

  const getBorderColor = (userId) => {
    const status = userStatusMap[userId];
    if (status === 'in-progress') return 'border-yellow-500';
    if (status === 'completed') return 'border-green-500';
    if (status === 'unread') return 'border-red-800';
    return 'border-transparent';
  };

  return (
    <div className="p-4 bg-slate-800 w-11/12 mx-auto my-5">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <div className="seach relative mb-3">
          <FaSearch className="absolute top-4 left-5" />
          <input type="search" name="search" id="search" placeholder="Search Users" className="py-2 pl-12 bg-transparent border rounded-md w-full" />
      </div>
      {userLists.length===0 ? (
        <p className='text-gray-500'>No Users Found</p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
        {userLists.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`cursor-pointer p-4 border-4 rounded-lg shadow hover:shadow-md transition
              bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-400 hover:from-cyan-300 hover:text-slate-200
              ${getBorderColor(user.id)}`}
          >
            <div className="avatar p-2 mb-5 bg-white rounded-md">
              <img src={Avatar} alt="User Avatar" />
            </div>
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-slate-200">{user.location}</p>
            <p className="text-sm text-slate-200">{user.address}</p>
            <p className="text-sm text-slate-200">{user.status}</p>

          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Admin;
