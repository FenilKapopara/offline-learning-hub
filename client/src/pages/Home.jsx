import { Link } from "react-router-dom";
import { CheckCircle, Download, WifiOff, Award } from "lucide-react";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#F5F7FA] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                            Learn without limits
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/signup" className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                                Join for Free
                            </Link>
                            <Link to="/login" className="bg-white text-primary border border-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-all">
                                Try for Business
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                            alt="Students learning"
                            className="rounded-2xl shadow-2xl z-10 relative"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle className="text-green-600 h-6 w-6" />
                                </div>
                                <span className="font-bold text-gray-800">Job-ready skills</span>
                            </div>
                            <p className="text-sm text-gray-500">Get the skills you need to launch a new career.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Why choose GlobalSeed?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: WifiOff, title: "Learn Offline", desc: "Download courses and learn anywhere, even without internet access." },
                            { icon: Award, title: "Earn Certificates", desc: "Gain recognized certificates to boost your LinkedIn profile and resume." },
                            { icon: Download, title: "Resource Library", desc: "Access thousands of PDFs, videos, and audio lessons from expert tutors." }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <feature.icon className="h-12 w-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Take the next step toward your personal and professional goals with GlobalSeed.</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join now to receive personalized recommendations from the full Coursera catalog.</p>
                    <Link to="/signup" className="bg-white text-primary px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
                        Join for Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-12 border-t">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
                    <p>&copy; 2024 GlobalSeed Offline Learning Hub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
