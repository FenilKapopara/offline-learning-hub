
import { useState, useEffect, useContext } from "react";
import api from "../config/axios";
import CourseCard from "./CourseCard";
import CoursePlayer from "./CoursePlayer";
import { Search, BookOpen, Download, Compass } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({ subject: "All", level: "All", search: "" });
    const [activeTab, setActiveTab] = useState("explore"); // explore, mylearning, downloads
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [downloadedCourseIds, setDownloadedCourseIds] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchCourses = async () => {
        try {
            const res = await api.get("/api/courses");
            setCourses(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
        // Load downloaded courses from local storage
        const savedDownloads = JSON.parse(localStorage.getItem("downloadedCourses")) || [];
        setDownloadedCourseIds(savedDownloads);
    }, []);

    const handleDownload = (course) => {
        if (!downloadedCourseIds.includes(course._id)) {
            const newDownloads = [...downloadedCourseIds, course._id];
            setDownloadedCourseIds(newDownloads);
            localStorage.setItem("downloadedCourses", JSON.stringify(newDownloads));
            alert("Course downloaded for offline access!");
        }
    };

    const filteredCourses = courses.filter(c => {
        // 1. Filter by Tab
        if (activeTab === "mylearning") {
            if (!c.enrolledStudents?.includes(user._id)) return false;
        } else if (activeTab === "downloads") {
            if (!downloadedCourseIds.includes(c._id)) return false;
        }

        // 2. Filter by Search/Dropdowns (apply to all tabs)
        const matchSubject = filter.subject === "All" || c.subject === filter.subject;
        const matchLevel = filter.level === "All" || c.level === filter.level;
        const matchSearch = c.title.toLowerCase().includes(filter.search.toLowerCase());
        return matchSubject && matchLevel && matchSearch;
    });

    const subjects = [
        "All", "Science", "Math", "History", "Geography", "Physics", "Chemistry",
        "Biology", "Literature", "Art", "Music", "Computer Science", "Economics",
        "Psychology", "Philosophy", "Sociology", "Health", "Life Skills"
    ];

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 w-fit">
                <button
                    onClick={() => setActiveTab("explore")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "explore" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Compass className="h-4 w-4" /> Explore
                </button>
                <button
                    onClick={() => setActiveTab("mylearning")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "mylearning" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <BookOpen className="h-4 w-4" /> My Learning
                </button>
                <button
                    onClick={() => setActiveTab("downloads")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "downloads" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Download className="h-4 w-4" /> Downloads
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-grow w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            value={filter.search}
                            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                        />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                            value={filter.subject}
                            onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
                        >
                            {subjects.map(sub => <option key={sub} value={sub}>{sub === "All" ? "All Subjects" : sub}</option>)}
                        </select>
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                            value={filter.level}
                            onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                        >
                            <option value="All">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid */}
            {loading ? (
                <div className="text-center py-20 text-gray-500">Loading courses...</div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                        <CourseCard
                            key={course._id}
                            course={course}
                            onPlay={setSelectedCourse}
                            onDownload={handleDownload}
                            isDownloaded={downloadedCourseIds.includes(course._id)}
                            refreshCourses={fetchCourses}
                        />
                    ))}
                    {filteredCourses.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            {activeTab === "mylearning"
                                ? "You haven't enrolled in any courses yet."
                                : activeTab === "downloads"
                                    ? "You haven't downloaded any courses yet."
                                    : "No courses found matching your criteria."}
                        </div>
                    )}
                </div>
            )}

            {/* Player Modal */}
            {selectedCourse && (
                <CoursePlayer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
            )}
        </div>
    );
};

export default StudentDashboard;
