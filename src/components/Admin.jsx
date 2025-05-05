import { useState, useEffect } from 'react';
import { users } from '../sampleAdminData';

const Admin = ({ onSelectUser }) => {
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    setUserLists(users);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userLists.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className="bg-gradient-to-r from-cyan-300 to-blue-300 cursor-pointer p-10 border rounded-lg shadow hover:shadow-md hover:border-green-500 hover:border-1 transition-all duration-500 text-center"
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
