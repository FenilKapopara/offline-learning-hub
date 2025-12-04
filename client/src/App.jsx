import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BecomeTutor from "./pages/BecomeTutor";
import Degrees from "./pages/Degrees";
import FindCareers from "./pages/FindCareers";
import Business from "./pages/Business";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

function App() {
    const { user } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (!user) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/degrees" element={<Degrees />} />
                <Route path="/find-careers" element={<FindCareers />} />
                <Route path="/business" element={<Business />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/become-tutor" element={<BecomeTutor />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
