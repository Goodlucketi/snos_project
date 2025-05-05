import { useState } from 'react';
import Admin from '../components/Admin';
import UserDetails from '../components/userData';
import Footer from '../components/Footer'

function AdminPanel() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [viewedUsers, setViewedUsers] = useState([])

  const handleUserSelect = (userId) =>{
    setSelectedUserId(userId)

    if(!viewedUsers.includes(userId)){
      setViewedUsers((prev)=>[...prev, userId])
    }
  }

  return (
    <main className='w-11/12 mx-auto py-10'>
      <nav className='p-4 bg-slate-200 sticky top-0'>
        <h2 className='font-bold'>Admin Navbar</h2>
      </nav>

      <div className="py-4">
        <Admin onSelectUser={handleUserSelect}  viewedUsers={viewedUsers}/>
      </div>

      {selectedUserId && (
        <UserDetails userId={selectedUserId} onClose={() => setSelectedUserId(null)} />
      )}

      <Footer />
    </main>
  );
}

export default AdminPanel;
