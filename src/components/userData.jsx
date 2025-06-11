/* eslint-disable react/prop-types */
import { useState } from 'react'

const UserDetails = ({ userId, userAlerts, onClose, onUpdateStatus }) => {
  const [updatingId, setUpdatingId] = useState(null);
  const [inProgressloading, setInProgressLoading] = useState(false)
  const [onCompleteLoading, setOnCompleteLoading] = useState(false)

  const handleStatusUpdate = async(alertId, updatedStatus) =>{
    setUpdatingId(alertId)

    if(updatedStatus == 'in-progress'){
      setInProgressLoading(true)
    }
    else if(updatedStatus == 'complete'){
      setOnCompleteLoading(true)
    }

    await onUpdateStatus(userId, alertId, updatedStatus)
    setUpdatingId(null) 
    setInProgressLoading(false)
    setOnCompleteLoading(false)
  }

  const sortAlerts = [...userAlerts].sort((a, b)=> new Date(b.timestamp) - new Date(a.timestamp)
  )
  // console.log(userAlerts);
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm text-black">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-10 py-1 px-3 text-slate-100 hover:text-red-500 text-2xl bg-red-500 hover:bg-slate-100 rounded-md"
        >
          &times;
        </button>
       
        <h3 className="text-xl my-4 font-semibold">Sensor Alerts</h3>
       
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-4">
          {sortAlerts.length === 0 ? (
              <p className=''>No Alerts for this User</p>
          ):(
            sortAlerts.map((userAlert) => (
              <div key={userAlert.id} className="border rounded-lg p-3 bg-gray-50 shadow">
                <img
                  src={userAlert.media_url}
                  alt="Alert"
                  className="w-full h-48 object-cover rounded"
                />
                <div className="my-3 message border p-3 rounded-md">
                  <p><span className="font-semibold">Message:</span> {userAlert.message_text}</p>
                  <p className="text-sm text-gray-700 my-2">
                    <span className="font-bold">Time:</span> {new Date(userAlert.timestamp).toLocaleString()}
                  </p>
                </div>

                <div className="actions p-2 mx-auto text-center my-3">
                  <button
                    onClick={() => handleStatusUpdate(userAlert.id, 'in-progress')}
                    className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700 rounded-md mx-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={updatingId===userAlert.id || userAlert.status !== 'unread'}
                  >
                    {inProgressloading && updatingId === userAlert.id ? "Updating..." : "Take Action"}
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(userAlert.id, 'complete')}
                    className="p-2 bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 rounded-md mx-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={updatingId === userAlert.id || userAlert.status !== 'in-progress'}
                  >
                    {onCompleteLoading && updatingId === userAlert.id ? 'Updating...' :  "Completed"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
