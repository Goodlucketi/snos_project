/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";


const Profile = ({ setUser }) => {
  const { user: currentUser = {} } = useOutletContext();
  
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    location: currentUser?.location || "",
    address: currentUser?.address || "",
    phone: currentUser?.phone || "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://app.snosfortress.com/api/users/read_single.php?user_id=${currentUser?.user_id}`);
        console.log(response.data);
        
        if (response.data) {
          setFormData({
            name: response.data.user.name,
            email:response.data.user.email,
            location: response.data.user.location,
            address: response.data.user.address,
            phone: response.data.user.phone,
          });
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
      }
    };
    if(currentUser?.user_id){
        fetchUserData();
    }
  }, [currentUser?.user_id, setUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://app.snosfortress.com/api/users/update.php`, {
        user_id: currentUser.user_id,
        ...formData,
      });
      if (response.status === 200) {
        setUser({ ...currentUser, ...formData });
        localStorage.setItem('user', JSON.stringify({ ...currentUser, ...formData }));
        setSuccess("Profile updated successfully");
        setIsEditing(false);
        setError(null);
      }
    } catch (err) {
      setError("Failed to update profile", err);
      setSuccess(null);
    }
  };

  return (
    <main className="info w-11/12 mx-auto md:w-full">
     
      <h2 className="text-3xl font-bold p-2">Profile</h2>
      <p className="p-2 mb-3 text-slate-400">Manage your account details</p>
      {error && <p className="p-2 bg-red-500 text-white rounded">{error}</p>}
      {success && <p className="p-2 bg-green-500 text-white rounded">{success}</p>}
      
      <div className="bg-slate-700 p-6 rounded-lg shadow">
            {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-800 border rounded text-white"
                    required
                />
                </div>
                <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                    type="text"
                    name="name"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-800 border rounded text-white"
                    required
                />
                </div>
                <div>
                <label className="block text-sm font-semibold">Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-800 border rounded text-white"
                />
                </div>
                <div>
                <label className="block text-sm font-semibold">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-800 border rounded text-white"
                />
                </div>
                <div>
                <label className="block text-sm font-semibold">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-800 border rounded text-white"
                />
                </div>
                <div className="flex gap-2">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Cancel
                </button>
                </div>
            </form>
            ) : (
            <div className="">
                <p className="mb-5 border-b py-2 px-2"><span className="font-semibold">Name:</span> {formData.name}</p>
                <p className="mb-5 border-b py-2 px-2"><span className="font-semibold">Email:</span> {formData.email}</p>
                <p className="mb-5 border-b py-2 px-2"><span className="font-semibold">Location:</span> {formData.location}</p>
                <p className="mb-5 border-b py-2 px-2"><span className="font-semibold">Address:</span> {formData.address}</p>
                <p className="mb-5 border-b py-2 px-2"><span className="font-semibold">Phone:</span> {formData.phone}</p>
                <button
                onClick={() => setIsEditing(true)}
                className="my-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Edit Profile
                </button>
            </div>
            )}
        </div>

    </main>
  );
};
export default Profile;