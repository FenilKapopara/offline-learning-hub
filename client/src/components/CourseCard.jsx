import { Play, FileText, Music, Star, Download, BookOpen } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../config/axios";

const CourseCard = ({ course, onPlay, onDownload, isDownloaded, refreshCourses }) => {
    const { user } = useContext(AuthContext);
    const isEnrolled = course.enrolledStudents?.includes(user?._id);

    const handleEnroll = async (e) => {
        e.stopPropagation();
        try {
            await api.post(`/api/courses/${course._id}/enroll`);
            alert("Enrolled successfully!");
            if (refreshCourses) refreshCourses();
        } catch (err) {
            alert(err.response?.data || "Enrollment failed");
        }
    };

    const handlePlayClick = (e) => {
        e.stopPropagation();
        onPlay(course);
    };

    const handleDownloadClick = (e) => {
        e.stopPropagation();
        onDownload(course);
    };

    return (
        <div
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer group"
            onClick={() => isEnrolled && onPlay(course)}
        >
            <div className="h-40 bg-gray-100 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                    <div className="text-gray-400 flex flex-col items-center">
                        <BookOpen className="h-10 w-10 mb-2 opacity-50" />
                        <span>{course.subject}</span>
                    </div>
                )}
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                    {course.contentType}
                </div>
                {isEnrolled && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/90 p-3 rounded-full shadow-lg">
                            <Play className="h-6 w-6 text-primary fill-current" />
                        </div>
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">{course.subject}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">{course.level}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-4">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{course.rating || "New"}</span>
                    <span className="text-gray-400 ml-1">({course.reviews?.length || 0} reviews)</span>
                </div>

                <div className="mt-auto pt-4 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">By {course.tutor?.name || "Unknown"}</span>
                    </div>

                    <div className="flex gap-2">
                        {isEnrolled ? (
                            <>
                                {isDownloaded ? (
                                    <span className="flex items-center gap-1 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded border border-green-100">
                                        <Download className="h-3 w-3" /> Saved
                                    </span>
                                ) : (
                                    <button
                                        onClick={handleDownloadClick}
                                        className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-full transition-colors"
                                        title="Download for offline"
                                    >
                                        <Download className="h-5 w-5" />
                                    </button>
                                )}
                                <button
                                    onClick={handlePlayClick}
                                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
                                >
                                    <Play className="h-4 w-4 fill-current" />
                                    <span>Start</span>
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEnroll}
                                className="bg-white text-primary border border-primary px-4 py-2 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                            >
                                Enroll
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
