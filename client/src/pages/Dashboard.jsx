import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import StudentDashboard from "../components/StudentDashboard";
import TutorDashboard from "../components/TutorDashboard";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
                    <p className="text-gray-600">Welcome back, {user?.name}</p>
                </div>

                {user?.role === "tutor" ? <TutorDashboard /> : <StudentDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;
