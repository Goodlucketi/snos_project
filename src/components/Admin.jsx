/* eslint-disable react/prop-types */
import Avatar from "../assets/images/shield_8777895.png"

const Admin = ({ users, onSelectUser, userStatusMap, filter, loading }) => {
 
  const getBorderColor = (userId) => {
    const status = userStatusMap[userId]
    if (status === 'in-progress') return 'border-yellow-500';
    if (status === 'completed') return 'border-green-500';
    if (status === 'unread') return 'border-red-800';
    return 'border-transparent';
  };

  const filteredUsers = users.filter(user => {
    const status = userStatusMap[user.user_id]
    return filter === 'all' || status === filter;
  });

  return (
    <div className="p-4 bg-slate-800 md:w-11/12 mx-auto my-5">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      
      {loading ? (
        <p className='text-white'>Loading Users ....</p>
      ): filteredUsers.length=== 0 ? (
        <p className='text-gray-500'>No Users Found</p>

      ):(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
          {filteredUsers.map((user) =>(
            <div
              key={user.user_id}
              onClick={() => onSelectUser(user.user_id)}
              className={`cursor-pointer p-4 border-4 rounded-lg shadow hover:shadow-md transition
                bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-400 hover:from-cyan-300 hover:text-slate-200
                ${getBorderColor(user.user_id)}`}
            >
              <div className="avatar p-2 mb-5 bg-white rounded-md">
                <img src={Avatar} alt="User Avatar"  className="p-8"/>
              </div>
              <h3 className="font-semibold text-lg">Name: {user.name}</h3>
              <p className="text-sm text-slate-200">Location: {user.location}</p>
              <p className="text-sm text-slate-200">Address: {user.address}</p>
              <p className="text-sm text-slate-200">Phone: {user.phone}</p>

            </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Admin;
