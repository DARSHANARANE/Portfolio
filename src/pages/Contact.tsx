import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
};

export default function Contact() {
    return (
        <section className="min-h-screen px-4 md:px-20 py-10 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Get In{" "}
                        <span className="text-purple-600">Touch</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        I'm open to new opportunities, freelance projects, and collaborations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">

                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md">
                            <Mail className="text-purple-600" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-gray-600 text-sm">darshana.3434@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md">
                            <Phone className="text-purple-600" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p className="text-gray-600 text-sm">+91 9588645153</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md">
                            <MapPin className="text-purple-600" />
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-gray-600 text-sm">Pune, India</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 pt-4">
                            <a href="https://www.linkedin.com/in/darshana-rane-0528b419a/" target="_blank" rel="noopener noreferrer"
                                className="text-purple-600 hover:scale-110 transition">
                                <Linkedin size={28} />
                            </a>
                            <a href="https://github.com/DarshanaRane" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:scale-110 transition">
                                <Github size={28} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
