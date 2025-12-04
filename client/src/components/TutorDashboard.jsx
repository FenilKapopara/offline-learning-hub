import { useState, useContext, useEffect } from "react";
import api from "../config/axios";
import { AuthContext } from "../context/AuthContext";
import { Upload, Plus, X, Video, Users } from "lucide-react";
import CourseCard from "./CourseCard";

const TutorDashboard = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        subject: "Literacy",
        level: "Beginner",
        contentType: "pdf",
        file: null
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        // Fetch courses uploaded by this tutor
        // Note: Ideally backend should have an endpoint for 'my-courses' or filter by tutor ID
        // For now fetching all and filtering client side or assuming backend returns all
        const fetchCourses = async () => {
            const res = await api.get("/api/courses");
            // Filter for current tutor (assuming backend populates tutor object or id)
            const myCourses = res.data.filter(c => c.tutor?._id === user._id || c.tutor === user._id);
            setCourses(myCourses);
        };
        fetchCourses();
    }, [user._id, showModal]); // Refresh when modal closes (after upload)

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.file) return alert("Please select a file");

        setUploading(true);
        const data = new FormData();
        data.append("title", formData.title);
        data.append("subject", formData.subject);
        data.append("level", formData.level);
        data.append("contentType", formData.contentType);
        data.append("file", formData.file);

        try {
            await api.post("/api/courses", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setShowModal(false);
            setFormData({ title: "", subject: "Literacy", level: "Beginner", contentType: "pdf", file: null });
            alert("Course uploaded successfully!");
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-800">Your Uploaded Courses</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <Plus className="h-5 w-5" />
                    Upload New Course
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <CourseCard key={course._id} course={course} onPlay={() => window.open(course.content, "_blank")} />
                ))}
                {courses.length === 0 && (
                    <div className="col-span-full text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <Upload className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">You haven't uploaded any courses yet.</p>
                    </div>
                )}
            </div>

            {/* Live Class Section */}
            <div className="mt-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Live Classes</h2>
                    <button
                        onClick={() => window.open(`https://meet.jit.si/GlobalSeed-${user._id}`, "_blank")}
                        className="bg-green-600 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-green-700 transition-colors"
                    >
                        <Video className="h-5 w-5" />
                        Start Live Class
                    </button>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <p className="text-gray-500">Start a live session to interact with your students in real-time.</p>
                </div>
            </div>

            {/* Collaboration Section */}
            <div className="mt-12 mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Collaborate with Tutors</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                T{i}
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Tutor {i}</h3>
                                <p className="text-sm text-gray-500">Science Expert</p>
                                <button className="text-primary text-sm font-medium mt-1 hover:underline">Connect</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upload Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-2xl">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X className="h-6 w-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-6">Upload Course Material</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    required
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <select
                                        className="w-full px-3 py-2 border rounded-md"
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option>Literacy</option><option>Math</option><option>Health</option><option>Life Skills</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                                    <select
                                        className="w-full px-3 py-2 border rounded-md"
                                        value={formData.level}
                                        onChange={e => setFormData({ ...formData, level: e.target.value })}
                                    >
                                        <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
                                <select
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.contentType}
                                    onChange={e => setFormData({ ...formData, contentType: e.target.value })}
                                >
                                    <option value="pdf">PDF Document</option>
                                    <option value="video">Video Lesson</option>
                                    <option value="audio">Audio Clip</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                                <input
                                    type="file"
                                    required
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 mt-4"
                            >
                                {uploading ? "Uploading..." : "Upload Course"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TutorDashboard;
