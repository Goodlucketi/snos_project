import { useState } from 'react';
import Admin from '../components/Admin';
import UserData from '../components/userData';

function AdminPanel() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <main className='w-11/12 mx-auto py-10'> 
      <nav className='p-4 bg-slate-200 sticky top-0'>
        <h2 className='font-bold'>Admin Navbar</h2>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <Admin onSelectUser={setSelectedUserId} />
        <div className='fixed right-10 top-[60px] overflow-y-scroll h-full w-6/12 py-10'>
          <UserData userId={selectedUserId} />  
        </div>
      
      </div>

    </main>
  );
}

export default AdminPanel;
