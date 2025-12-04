import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            details: "support@globalseed.com",
            link: "mailto:support@globalseed.com"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Address",
            details: "123 Learning Street, Education City, EC 12345",
            link: null
        }
    ];

    const faqs = [
        {
            question: "How quickly will I receive a response?",
            answer: "We typically respond to all inquiries within 24-48 hours during business days."
        },
        {
            question: "Can I schedule a demo for my organization?",
            answer: "Yes! Please mention 'Demo Request' in your subject line, and our team will arrange a personalized demonstration."
        },
        {
            question: "Do you offer technical support?",
            answer: "Absolutely. Our technical support team is available to help with any platform-related issues."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <MessageSquare className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Contact Information Cards */}
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center text-primary mb-4">
                                {info.icon}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                            {info.link ? (
                                <a href={info.link} className="text-gray-600 hover:text-primary transition-colors">
                                    {info.details}
                                </a>
                            ) : (
                                <p className="text-gray-600">{info.details}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4">
                                <p className="font-semibold">Thank you for contacting us!</p>
                                <p className="text-sm">We'll get back to you shortly.</p>
                            </div>
                        ) : null}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                            <div className="flex items-center gap-2 mb-6">
                                <HelpCircle className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                            <div className="space-y-2 text-gray-700">
                                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                                <p><span className="font-semibold">Sunday:</span> Closed</p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-teal-200">
                                <p className="text-sm text-gray-600">
                                    For urgent technical issues outside office hours, please email us at{" "}
                                    <a href="mailto:urgent@globalseed.com" className="text-primary font-semibold hover:underline">
                                        urgent@globalseed.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
