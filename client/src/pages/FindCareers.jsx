import { Briefcase, Search, TrendingUp, Code, Palette, BarChart, Stethoscope, Wrench, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const FindCareers = () => {
    const careerPaths = [
        {
            icon: <Code className="h-10 w-10" />,
            title: "Technology & IT",
            description: "Software development, cybersecurity, data science, and more",
            courses: 1200,
            avgSalary: "$95,000"
        },
        {
            icon: <Palette className="h-10 w-10" />,
            title: "Design & Creative",
            description: "UX/UI design, graphic design, video production",
            courses: 450,
            avgSalary: "$65,000"
        },
        {
            icon: <BarChart className="h-10 w-10" />,
            title: "Business & Finance",
            description: "Marketing, accounting, project management, entrepreneurship",
            courses: 800,
            avgSalary: "$75,000"
        },
        {
            icon: <Stethoscope className="h-10 w-10" />,
            title: "Healthcare",
            description: "Nursing, medical coding, healthcare administration",
            courses: 350,
            avgSalary: "$70,000"
        },
        {
            icon: <Wrench className="h-10 w-10" />,
            title: "Skilled Trades",
            description: "Electrical, plumbing, HVAC, construction management",
            courses: 280,
            avgSalary: "$55,000"
        },
        {
            icon: <BookOpen className="h-10 w-10" />,
            title: "Education",
            description: "Teaching, curriculum development, educational technology",
            courses: 420,
            avgSalary: "$50,000"
        }
    ];

    const resources = [
        {
            title: "Career Assessment Quiz",
            description: "Discover careers that match your skills and interests",
            cta: "Take Quiz"
        },
        {
            title: "Resume Builder",
            description: "Create a professional resume in minutes",
            cta: "Build Resume"
        },
        {
            title: "Interview Prep",
            description: "Practice common interview questions and techniques",
            cta: "Start Practicing"
        },
        {
            title: "Salary Calculator",
            description: "Research salary ranges for your desired career",
            cta: "Check Salaries"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <Briefcase className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Find Your Dream Career
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Explore career paths, develop in-demand skills, and launch your professional journey with GlobalSeed.
                        </p>
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for careers, skills, or industries..."
                                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Paths Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-4">Explore Career Paths</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Browse popular career fields and find the perfect path for your future
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {careerPaths.map((career, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                        >
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                {career.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{career.description}</p>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">{career.courses} courses</span>
                                <span className="font-semibold text-green-600">{career.avgSalary}</span>
                            </div>
                            <Link
                                to="/"
                                className="mt-4 block text-center bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-md font-medium transition-colors"
                            >
                                Explore Courses
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Career Resources */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Career Development Tools</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Access free resources to help you plan and advance your career
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                                <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                                <button className="text-primary font-semibold hover:underline">
                                    {resource.cta} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Stories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Career Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                            <div>
                                <h4 className="font-semibold">Sarah Johnson</h4>
                                <p className="text-sm text-gray-600">Software Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "GlobalSeed helped me transition from retail to tech. I completed the Full Stack Developer program and landed my dream job in 6 months!"
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                            <div>
                                <h4 className="font-semibold">Michael Chen</h4>
                                <p className="text-sm text-gray-600">UX Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "The design courses were practical and industry-relevant. I built a portfolio that impressed employers and got hired within weeks of completing my certification."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                            <div>
                                <h4 className="font-semibold">Emily Rodriguez</h4>
                                <p className="text-sm text-gray-600">Data Analyst</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "As a career changer, I was nervous about learning data science. The supportive community and hands-on projects made all the difference."
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
                    <p className="text-xl mb-8">
                        Join thousands of learners who have transformed their careers with GlobalSeed
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            to="/signup"
                            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            to="/"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindCareers;
