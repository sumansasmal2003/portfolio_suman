import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://portfolio-rovg.onrender.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(data.error || 'Something went wrong!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form!');
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-600 to-purple-900 blur-3xl opacity-50 animate-pulse"></div>

            <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl max-w-lg w-full border-t-4 border-red-600">
                <p className="text-2xl text-orange-100 font-extrabold text-center mb-6">
                    Contact Me
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-white font-semibold">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-3 rounded-md bg-white/20 text-black border border-orange-500 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            placeholder="Enter your name..."
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white font-semibold">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 p-3 rounded-md bg-white/20 text-black border border-orange-500 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            placeholder="Enter your email..."
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-white font-semibold">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-2 p-3 rounded-md bg-white/20 text-gray-800 font-semibold border border-orange-500 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            placeholder="Enter your message..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-95 transition-transform duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
