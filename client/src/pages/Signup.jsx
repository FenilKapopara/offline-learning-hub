import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import api from "../config/axios";

const Signup = () => {
    const [searchParams] = useSearchParams();
    const roleParam = searchParams.get("role");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: roleParam === "tutor" ? "tutor" : "student" // Default role based on param
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("DEBUG: Attempting signup with data:", formData);
        try {
            await api.post("/api/auth/register", formData);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data || "Registration failed");
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex">
            {/* Left Side - Image */}
            <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")' }}>
                <div className="h-full w-full bg-primary/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="text-white text-center p-12">
                        <h2 className="text-4xl font-bold mb-4">Join GlobalSeed</h2>
                        <p className="text-xl">Unlock your potential with free online courses.</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
                    <p className="text-gray-600 mb-8">Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Log in</Link></p>

                    <form onSubmit={handleSignup} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                            <select
                                name="role"
                                value={formData.role}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                onChange={handleChange}
                            >
                                <option value="student">Student</option>
                                <option value="tutor">Tutor (Instructor)</option>
                            </select>
                        </div>

                        {error && <span className="text-red-500 text-sm">{JSON.stringify(error)}</span>}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md"
                        >
                            Join for Free
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
