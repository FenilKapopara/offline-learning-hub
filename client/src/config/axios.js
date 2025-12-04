import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log("DEBUG: VITE_API_URL is:", import.meta.env.VITE_API_URL);
console.log("DEBUG: Axios baseURL is:", api.defaults.baseURL);

// Add a request interceptor to include the token if it exists
(config) => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            if (user && user.token) {
                config.headers.token = `Bearer ${user.token}`;
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            // Optionally clear invalid data
            // localStorage.removeItem('user'); 
        }
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
