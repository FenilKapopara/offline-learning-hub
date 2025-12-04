import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, DollarSign, Calendar, ArrowRight } from 'lucide-react';

const BecomeTutor = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-primary overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Share your knowledge</span>{' '}
                                    <span className="block text-blue-200">inspire the future</span>
                                </h1>
                                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Join our global community of tutors and help students achieve their goals. Earn money doing what you love, on your own schedule.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/signup?role=tutor"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            to="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Teacher with students"
                    />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Benefits</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Why teach with GlobalSeed?
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We provide the tools and platform you need to succeed as a tutor.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <DollarSign className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Earn on your terms</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Set your own rates and get paid securely. The more you teach, the more you earn.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <Calendar className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Flexible Schedule</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Be your own boss. Teach whenever and wherever you want.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <Users className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Reach Global Students</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Connect with students from all over the world and make a real impact.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* How it Works Section */}
            <div className="py-16 bg-white overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="relative">
                        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">
                            How it works
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary text-2xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Sign up</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Create your profile and highlight your expertise.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary text-2xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Get Approved</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Our team will review your application to ensure quality.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary text-2xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Start Teaching</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Launch your courses and start earning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to start your journey?</span>
                        <span className="block">Become a tutor today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-100">
                        Join thousands of tutors who are already sharing their passion with the world.
                    </p>
                    <Link
                        to="/signup?role=tutor"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 sm:w-auto"
                    >
                        Sign up now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BecomeTutor;
