import { useEffect, useState } from 'react';
import Admin from '../components/Admin';
import UserDetails from '../components/userData';
import { FaBell, FaCog, FaSearch, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import Footer from "../components/Footer"
import axios from 'axios';
import { toast } from 'react-toastify';


function AdminPanel() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userStatusMap, setUserStatusMap] = useState({});
  const [users, setUsers] = useState([]);
  const [userAlerts, setUserAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get("https://snos.teledominternational.net/users/read.php")
        const alertRes = await  axios.get("https://snos.teledominternational.net/alerts/read.php")
        
        setUsers(userRes.data)
        setUserAlerts(alertRes.data)
        
        const statusMap = {}
        alertRes.data.forEach(userAlert => {
          const currentStatus = statusMap[userAlert.user_id]
          const newStatus = userAlert.status

          if(
            !currentStatus || 
            (newStatus === 'unread') || 
            (newStatus === 'in-progress' && currentStatus !== 'unread')||
            (newStatus === 'complete' && !['unread', 'in-progress'].includes(currentStatus)) 
          ){
            statusMap[userAlert.user_id] = newStatus
          } 
        });

        setUserStatusMap(statusMap)
      } catch (error) {
        toast.error("Error fetching Data", error);
        
      }
      finally{
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const handleSearch = (e)=>{
    setSearchQuery(e.target.value.toLowerCase())
  }

  // const updateUserStatus = async (userId, alertId, updatedStatus) => {
  //   try {
  //     const response = await axios.patch("https://snos.teledominternational.net/alerts/updatestatus.php", {
  //       id:alertId,
  //       status:updatedStatus
  //     })

  //     if(response.status=== 200){
  //       const updatedAlerts = userAlerts.map(alert =>
  //         alert.id === alertId ? { ...alert, status:updatedStatus} : alert
  //       )
  //       setUserAlerts(updatedAlerts)

  //       setUserStatusMap(prev => ({
  //         ...prev,
  //         [userId]:updatedStatus
  //       }))

  //     }
  //     else{
  //       console.error("Unexpected Server Response", response.status)
  //     }
  //     console.log(alertId, updatedStatus);
      

  //   } catch (error) {
  //     console.error("Failed to Update Status", error);
      
  // }

  const updateUserStatus = async (userId, alertId, updatedStatus) => {
    try {
      const response = await axios.patch("https://snos.teledominternational.net/alerts/updatestatus.php", {
        id: alertId,
        status: updatedStatus
      });
      // console.log(alertId, updatedStatus);
      
      if (response.status === 200) {
        // Refetch alerts to ensure consistency
        const alertRes = await axios.get("https://snos.teledominternational.net/alerts/read.php");

        if(updatedStatus === "in-progress"){
          toast.warn("Status Updated - In Progress")
        }
         if(updatedStatus === "complete"){
          toast.success("Status Updated - Completed")
        }
        
        setUserAlerts(alertRes.data);

        const statusMap = {};
        alertRes.data.forEach(userAlert => {
          const currentStatus = statusMap[userAlert.user_id];
          const newStatus = userAlert.status;
          if (
            !currentStatus ||
            (newStatus === 'unread') ||
            (newStatus === 'in-progress' && currentStatus !== 'unread') ||
            (newStatus === 'completed' && !['unread', 'in-progress'].includes(currentStatus))
          ) {
            statusMap[userAlert.user_id] = newStatus;
          }
        });
        setUserStatusMap(statusMap);
      }
    } catch (error) {
      toast.error("Failed to Update Status", error);
    }

};

  return (
    <main className="pt-10 px-5 md:px-20 bg-slate-800 text-white">
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
      <div className='md:flex items-center mt-5 p-4 justify-between'>
        <div className="my-4 w-full md:w-5/12 text-white">
          <label className="mr-2">Filter by Status:</label>
          <select
            className="text-white py-2 px-4 bg-slate-800 border rounded w-full my-2 md:w-9/12"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="seach relative mb-3 w-full md:w-5/12">
            <FaSearch className="absolute top-4 left-5" />
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder="Search Users" 
              className="py-2 pl-12 bg-transparent border rounded-md w-full"
              value={searchQuery}
              onChange={handleSearch}
            />
        </div>
      </div>
      
      <Admin
        users={users}
        onSelectUser={handleUserSelect}
        userStatusMap={userStatusMap}
        filter={statusFilter}
        loading={loading}
        searchQuery={searchQuery}
      />

      {selectedUserId && (
        <UserDetails
          userId={selectedUserId}
          onClose={() => setSelectedUserId(null)}
          onUpdateStatus={updateUserStatus}
          userAlerts = {userAlerts.filter(userAlert => userAlert.user_id === selectedUserId)}
          users={users}

        />
      )}

      <Footer />
    </main>
  );
}

export default AdminPanel;
