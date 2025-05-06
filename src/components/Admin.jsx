/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { users } from '../sampleAdminData';

const Admin = ({ onSelectUser, userStatusMap }) => {
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    setUserLists(users);
  }, []);

  const getBorderColor = (userId) => {
    const status = userStatusMap[userId];
    if (status === 'in-progress') return 'border-yellow-500';
    if (status === 'completed') return 'border-green-500';
    if (status === 'unread') return 'border-red-800';
    return 'border-transparent';
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userLists.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`cursor-pointer p-8 border-4 rounded-lg shadow hover:shadow-md transition
              bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-400 hover:from-cyan-300
              ${getBorderColor(user.id)}`}
          >
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
