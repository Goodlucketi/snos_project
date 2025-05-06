import { useState } from 'react';
import Admin from '../components/Admin';
import UserDetails from '../components/userData';

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
    <main className="w-11/12 mx-auto py-10">
      <nav className="p-4 bg-slate-200 sticky top-0 z-50">
        <h2 className="font-bold text-lg text-center">Security Network Operating System (SNOS) || Admin Console</h2>
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
    </main>
  );
}

export default AdminPanel;
