import { Building2, Users, TrendingUp, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Business = () => {
    const features = [
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Upskill Your Team",
            description: "Access thousands of courses to help your employees develop new skills and stay competitive in today's market."
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-primary" />,
            title: "Track Progress",
            description: "Monitor your team's learning journey with detailed analytics and insights to measure ROI."
        },
        {
            icon: <Award className="h-8 w-8 text-primary" />,
            title: "Certifications",
            description: "Provide industry-recognized certifications that validate your team's expertise and boost credibility."
        }
    ];

    const benefits = [
        "Flexible learning paths tailored to your business needs",
        "Expert instructors with real-world industry experience",
        "Scalable solutions for teams of any size",
        "24/7 access to learning materials",
        "Dedicated account management and support",
        "Custom content creation available"
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <Building2 className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            GlobalSeed for Business
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Empower your workforce with world-class learning solutions. Build skills, drive innovation, and achieve business goals.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                            Get Started <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose GlobalSeed for Your Business</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Enterprise Learning Benefits</h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Team?</h3>
                            <p className="text-gray-700 mb-6">
                                Join thousands of companies worldwide that trust GlobalSeed to develop their workforce.
                            </p>
                            <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                        <div className="text-gray-600">Companies Trust Us</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                        <div className="text-gray-600">Employees Trained</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                        <div className="text-gray-600">Courses Available</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">95%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
