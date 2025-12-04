import { Heart, Target, Globe, Lightbulb, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Sponsors = () => {
    const sponsorshipTiers = [
        {
            name: "Bronze Partner",
            price: "$5,000/year",
            benefits: [
                "Logo on website footer",
                "Mention in quarterly newsletter",
                "Access to learner demographics",
                "Certificate of partnership"
            ]
        },
        {
            name: "Silver Partner",
            price: "$15,000/year",
            benefits: [
                "All Bronze benefits",
                "Featured on sponsors page",
                "Social media recognition",
                "Co-branded course opportunity",
                "Quarterly impact reports"
            ],
            featured: true
        },
        {
            name: "Gold Partner",
            price: "$50,000/year",
            benefits: [
                "All Silver benefits",
                "Homepage logo placement",
                "Dedicated landing page",
                "Speaking opportunities at events",
                "Custom scholarship program",
                "Priority support and consultation"
            ]
        }
    ];

    const impact = [
        {
            icon: <Globe className="h-10 w-10 text-primary" />,
            title: "Global Reach",
            description: "Support learners from over 150 countries accessing quality education."
        },
        {
            icon: <Users className="h-10 w-10 text-primary" />,
            title: "Community Impact",
            description: "Help build a skilled workforce and empower individuals to change their lives."
        },
        {
            icon: <Lightbulb className="h-10 w-10 text-primary" />,
            title: "Innovation",
            description: "Partner with us to develop cutting-edge educational content and technology."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <Heart className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Become a Sponsor
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Partner with GlobalSeed to make quality education accessible to millions worldwide. Your support transforms lives.
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Your Sponsorship Impact</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {impact.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sponsorship Tiers */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Sponsorship Opportunities</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Choose a partnership level that aligns with your goals and budget. All sponsorships directly support learner scholarships and platform development.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sponsorshipTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-8 ${tier.featured
                                        ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary shadow-xl transform scale-105'
                                        : 'bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {tier.featured && (
                                    <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="text-3xl font-bold text-primary mb-6">{tier.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {tier.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Target className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${tier.featured
                                            ? 'bg-primary text-white hover:bg-blue-700'
                                            : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Stories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors Make a Difference</h2>
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <TrendingUp className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Together, We've Achieved:</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">50,000+</span> scholarships awarded
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">$2M+</span> in educational support
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">100+</span> new courses developed
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">85%</span> of sponsored learners completed their programs
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
                            <h4 className="text-xl font-bold mb-4">Ready to Make an Impact?</h4>
                            <p className="text-gray-700 mb-6">
                                Join our community of forward-thinking organizations committed to democratizing education.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all inline-block"
                            >
                                Contact Our Partnership Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
