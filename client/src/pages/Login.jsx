import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../config/axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch, error } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await api.post("/api/auth/login", { email, password });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/dashboard");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data || "Login failed" });
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex">
            {/* Left Side - Image */}
            <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80")' }}>
                <div className="h-full w-full bg-primary/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="text-white text-center p-12">
                        <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                        <p className="text-xl">Continue your learning journey today.</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Log In</h2>
                    <p className="text-gray-600 mb-8">Don't have an account? <Link to="/signup" className="text-primary font-semibold hover:underline">Sign up</Link></p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <span className="text-red-500 text-sm">{error.message || "Something went wrong!"}</span>}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
