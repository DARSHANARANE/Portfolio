import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
};

export default function Experience() {
    return (
        <section className="min-h-screen px-4 md:px-20 py-10 bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Professional{" "}
                        <span className="text-purple-600">Experience</span>
                    </h2>
                </motion.div>

                {/* Center Timeline Line */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>

                    <div className="space-y-24">

                        {/* EXOTEL */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="relative flex flex-col md:flex-row items-center"
                        >
                            {/* Left Side */}
                            <div className="md:w-1/2 md:pr-12">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">

                                    <div className="flex items-center gap-3 mb-3 justify-between">

                                        <h3 className="text-2xl font-semibold text-purple-700">
                                            Software Engineer – Frontend
                                        </h3>
                                        <img src="/exotel.png" className="w-30 h-10 object-contain" />
                                    </div>

                                    <span className="inline-block px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full mb-4">
                                        Feb 2022 – Sep 2025 | 3.7 Years
                                    </span>

                                    <ul className="space-y-2 text-gray-700 text-sm list-disc ml-5">
                                        <li>Led development of AI-powered chatbot platform used by 100+ enterprise clients.</li>
                                        <li>Built scalable dashboards improving operational efficiency by 30%.</li>
                                        <li>Reduced UI load time by 40% through performance optimization.</li>
                                        <li>Integrated REST APIs across multiple campaign and EasyChat modules.</li>
                                    </ul>

                                    <div className="flex flex-wrap gap-2  mt-4">
                                        {["React", "Redux", "HTML", "CSS", "JavaScript", "REST API", "Tailwind", "Gen-AI", "Tailwind CSS", "Material UI"].map(
                                            (tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white"></div>

                            {/* Empty Right Side */}
                            <div className="md:w-1/2"></div>
                        </motion.div>

                        {/* INTERNSHIP */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="relative flex flex-col md:flex-row items-center"
                        >
                            <div className="md:w-1/2"></div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white"></div>

                            <div className="md:w-1/2 md:pl-12">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">

                                    <div className="flex items-center gap-3 mb-3 justify-between">

                                        <h3 className="text-2xl font-semibold text-purple-700">
                                            Web Developer Intern
                                        </h3>
                                        <img src="/icodex.png" className="w-30 h-10 object-contain" />
                                    </div>

                                    <span className="inline-block px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full mb-4">
                                        Aug 2021 - Dec 2021 | 4 Months
                                    </span>

                                    <ul className="space-y-2 text-gray-700 text-sm list-disc ml-5">
                                        <li>Developed responsive UI components for publishing platforms.</li>
                                        <li>Improved website usability and reduced UI bugs by 25%.</li>
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQL"].map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
