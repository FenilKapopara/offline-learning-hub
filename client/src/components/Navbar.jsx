import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, BookOpen, User, LogOut } from "lucide-react";

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <span className="font-bold text-xl tracking-tight text-primary">GlobalSeed</span>
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
                            <Link to="/" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Explore</Link>
                            <Link to="/degrees" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Degrees</Link>
                            <Link to="/become-tutor" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Find Careers</Link>
                            <Link to="/business" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">For Business</Link>
                            <Link to="/sponsors" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sponsors</Link>
                            <Link to="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700">Hi, {user.name}</span>
                                <Link to="/dashboard" className="text-sm font-medium text-primary hover:text-blue-700">Dashboard</Link>
                                <button onClick={handleLogout} className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-primary font-medium hover:text-blue-700 px-4 py-2">Log In</Link>
                                <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Join for Free</Link>
                            </>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Explore</Link>
                        <Link to="/degrees" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Degrees</Link>
                        <Link to="/find-careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Find Careers</Link>
                        <Link to="/business" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For Business</Link>
                        <Link to="/sponsors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sponsors</Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>

                        {user ? (
                            <div className="border-t border-gray-100 pt-2 mt-2">
                                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Dashboard</Link>
                                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Log Out</button>
                            </div>
                        ) : (
                            <div className="border-t border-gray-100 pt-2 mt-2">
                                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Log In</Link>
                                <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-50">Join for Free</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
