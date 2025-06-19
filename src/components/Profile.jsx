import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 
import { toast } from "react-toastify";

const Profile = () => {
  const { login: setUser } = useAuth(); //  Get setUser from AuthContext
  const { user: currentUser = {} } = useOutletContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    address: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://app.snosfortress.com/api/users/read_single.php?user_id=${currentUser?.user_id}`);
        if (response.data?.user) {
          const { name, email, location, address, phone } = response.data.user;
          setFormData({ name, email, location, address, phone });
          localStorage.setItem("user", JSON.stringify(response.data.user)); // Correct value
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
      }
    };

    if (currentUser?.user_id) {
      fetchUserData();
    }
  }, [currentUser?.user_id]);

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
        const updatedUser = { ...currentUser, ...formData };
        setUser(updatedUser); // Reflect in global state
        localStorage.setItem('user', JSON.stringify(updatedUser));
        toast.success("Profile updated successfully");
        setIsEditing(false);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
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
            {["name", "email", "location", "address", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 bg-slate-800 border rounded text-white"
                  required={field === "name" || field === "email"}
                />
              </div>
            ))}
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Save
              </button>
              <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            {Object.entries(formData).map(([key, value]) => (
              <p key={key} className="mb-5 border-b py-2 px-2">
                <span className="font-semibold capitalize">{key}:</span> {value}
              </p>
            ))}
            <button onClick={() => setIsEditing(true)} className="my-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Profile;
