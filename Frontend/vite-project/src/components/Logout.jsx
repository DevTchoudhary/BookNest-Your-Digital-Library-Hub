import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'; // Ensure this path is correct

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser(null); // Set authUser to null to clear the authentication state
            localStorage.removeItem('Users'); // Remove user data from localStorage
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    };

    return (
        <div>
            <button
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;
