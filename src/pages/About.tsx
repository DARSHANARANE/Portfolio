export default function About() {
    return (
        <section className="min-h-screen px-4 md:px-20 py-16 bg-gradient-to-b from-white to-purple-50">

            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About{" "}
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Frontend Developer with 3.7 years of experience building scalable dashboards,
                        AI-powered applications, and high-performance web interfaces.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="relative">
                        <div className="absolute -inset-6 bg-purple-200 rounded-3xl blur-2xl opacity-40"></div>
                        <img
                            src="/ProfileImg.png"
                            alt="Profile"
                            className="relative rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6 text-gray-700">

                        <p>
                            I am a <span className="font-semibold text-purple-600">Software Engineer – Frontend </span>
                            with nearly 4 years of experience at Exotel, specializing in building
                            scalable dashboards, chatbot platforms, and AI-driven communication systems.
                        </p>

                        <p>
                            My expertise lies in React.js, JavaScript, Redux, and modern UI frameworks.
                            I focus on creating responsive, intuitive, and performance-optimized
                            user interfaces that enhance user engagement.
                        </p>

                        <p>
                            I have worked closely with backend teams to integrate REST APIs,
                            optimize workflows, and deliver production-ready applications
                            used by enterprise clients.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-lg transition">
                                <h3 className="text-3xl font-bold text-purple-600">3.7+</h3>
                                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
                            </div>

                            <div className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-lg transition">
                                <h3 className="text-3xl font-bold text-purple-600">20+</h3>
                                <p className="text-sm text-gray-500 mt-1">Projects Delivered</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
