import { X } from "lucide-react";

const CoursePlayer = ({ course, onClose }) => {
    if (!course) return null;

    const renderContent = () => {
        if (course.contentType === "video") {
            // Extract video ID for YouTube
            let videoId = "";
            if (course.content.includes("youtube.com") || course.content.includes("youtu.be")) {
                const url = new URL(course.content);
                if (url.hostname === "youtu.be") {
                    videoId = url.pathname.slice(1);
                } else {
                    videoId = url.searchParams.get("v");
                }
            }

            if (videoId) {
                return (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={course.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                );
            } else {
                return (
                    <div className="flex items-center justify-center h-full bg-black text-white">
                        <p>Video format not supported or invalid URL.</p>
                    </div>
                );
            }
        } else if (course.contentType === "pdf") {
            return (
                <iframe
                    src={course.content}
                    className="w-full h-full"
                    title={course.title}
                ></iframe>
            );
        } else if (course.contentType === "audio") {
            return (
                <div className="flex items-center justify-center h-full bg-gray-900 text-white">
                    <audio controls src={course.content} className="w-full max-w-md">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            );
        }
        return <div className="p-10">Content type not supported.</div>;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-black relative">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default CoursePlayer;
