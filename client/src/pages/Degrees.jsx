import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const Degrees = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover opacity-30"
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="University campus"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Earn Your Degree Online
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                        Advance your career with 100% online degrees from top universities. Flexible, affordable, and respected worldwide.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/signup"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 md:text-lg"
                        >
                            Find Your Program
                        </Link>
                    </div>
                </div>
            </div>

            {/* Degree Categories */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Explore</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Browse by Field of Study
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Business', icon: TrendingUp, count: '15+ Programs' },
                            { name: 'Computer Science', icon: Globe, count: '10+ Programs' },
                            { name: 'Health', icon: Award, count: '8+ Programs' },
                            { name: 'Data Science', icon: BookOpen, count: '12+ Programs' },
                        ].map((category) => (
                            <div key={category.name} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-primary mb-4">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{category.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Programs */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Degrees</h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80" alt="Business meeting" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        Master's Degree
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            Master of Business Administration (MBA)
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Gain the leadership skills to accelerate your career in business.
                                        </p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">University of London</span>
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">UL</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            University of London
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Coding" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        Bachelor's Degree
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            Bachelor of Science in Computer Science
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Build a strong foundation in computer science and software engineering.
                                        </p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">University of London</span>
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">UL</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            University of London
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Not sure where to start?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-100">
                        Explore all our degree programs and find the right fit for you.
                    </p>
                    <Link
                        to="/signup"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 sm:w-auto"
                    >
                        Explore All Degrees <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Degrees;
