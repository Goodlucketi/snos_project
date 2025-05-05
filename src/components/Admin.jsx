import { useState, useEffect } from 'react';
import { users } from '../sampleAdminData';

  
const Admin = ({ onSelectUser }) => {
    const [userLists, setUserLists] = useState([]);

    useEffect(() => {
        setUserLists(userLists);
    }, []);

    return ( 
        <main>
            <div className="p-4">
            <h2 className="text-xl font-bold mb-4">All Users</h2>
            <ul className="divide-y">
                {users.map(user => (
                <li
                    key={user.id}
                    onClick={() => onSelectUser(user.id)}
                    className="cursor-pointer p-3 hover:bg-gray-100"
                >
                    {user.name} — {user.location}
                </li>
                ))}
            </ul>
            </div>

        </main>
     );
}
 
export default Admin;