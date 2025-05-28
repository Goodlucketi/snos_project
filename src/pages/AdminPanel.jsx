import { useState } from 'react';
import Admin from '../components/Admin';
import UserDetails from '../components/userData';
import { FaBell, FaCog, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import Footer from "../components/Footer"

function AdminPanel() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userStatusMap, setUserStatusMap] = useState({});

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const updateUserStatus = (userId, status) => {
    setUserStatusMap(prev => ({
      ...prev,
      [userId]: status
    }));
  };

  return (
    <main className="pt-10 px-20 bg-slate-800 text-white">
      <nav className="py-4 px-8 sticky top-0 z-50 flex justify-between bg-slate-800 shadow-md">
        <h2 className="font-bold text-2xl">SNOS || Admin Console</h2>
        <div className="links hidden md:flex justify-between gap-x-10 items-center list-none">
          <li className='flex items-center gap-x-1'><FaTachometerAlt /> Dashboard</li>
          <li className='flex items-center gap-x-1'><FaBell /> Alerts</li>
          <li className='flex items-center gap-x-1'><FaRepeat /> Reports</li>
          <li className='flex items-center gap-x-1'><FaUser /> Users</li>
          <li className='flex items-center gap-x-1'><FaCog /> Settings</li>

        </div>
      </nav>

      <Admin
        onSelectUser={handleUserSelect}
        userStatusMap={userStatusMap}
      />

      {selectedUserId && (
        <UserDetails
          userId={selectedUserId}
          onClose={() => setSelectedUserId(null)}
          onUpdateStatus={updateUserStatus}
        />
      )}

      <Footer />
    </main>
  );
}

export default AdminPanel;
