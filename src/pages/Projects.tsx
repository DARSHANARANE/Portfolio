import { Github, ExternalLink, Lock } from "lucide-react"
import CustomButton from "@/components/CustomButton"

export default function Projects() {
    return (
        <section className="min-h-screen py-10 px-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-purple-600">Projects</span>
                </h2>

                {/* ================= PERSONAL PROJECTS ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">

                    {/* Eatap */}
                    <div className="p-5 sm:p-8 bg-white rounded-3xl shadow-lg 
hover:shadow-purple-300/40 hover:-translate-y-2 
transition-all duration-500">

                        <h3 className="text-xl font-semibold text-purple-700">
                            Eatap – Mess Food Ordering Platform
                        </h3>

                        <p className="text-gray-600 mt-4">
                            Full-stack application connecting college students with nearby
                            mess providers. Built with scalable architecture using
                            React, Node.js, and MongoDB.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {[
                                "React",
                                "TypeScript",
                                "Redux",
                                "Tailwind",
                                "Node.js",
                                "MongoDB",
                            ].map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            Frontend: Netlify | Backend: Render | DB: MongoDB Atlas
                        </p>

                        {/* Buttons */}
                        <div  className="flex flex-col sm:flex-row gap-4 mt-6">

                            {/* Disabled Live Button */}
                            <CustomButton
                                variantType="primary"
                                disabled
                                className="opacity-60 cursor-not-allowed"
                            >
                                Live (Coming Soon)
                            </CustomButton>

                            {/* GitHub Button */}
                            <a
                                href="https://github.com/DARSHANARANE/Eatap_Phase-2"
                                target="_blank"
                            >
                                <CustomButton variantType="secondary" className="w-full sm:w-auto">
                                    <Github size={16} className="mr-2" />
                                    Code
                                </CustomButton>
                            </a>

                        </div>
                    </div>


                    {/* Search UI */}
                    <div className="p-8 bg-white rounded-3xl shadow-lg 
                          hover:shadow-purple-300/40 hover:-translate-y-3 
                          transition-all duration-500">

                        <h3 className="text-xl font-semibold text-purple-700">
                            Search UI – React Interface Demo
                        </h3>

                        <p className="text-gray-600 mt-4">
                            A responsive search interface built with React to demonstrate
                            component structure, routing, and modern UI patterns.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {["React", "JavaScript", "Tailwind", "React Router"].map(
                                (tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            Frontend: Netlify
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a
                                href="https://search-ui-darshana-rane.netlify.app/"
                                target="_blank"
                            >
                                <CustomButton variantType="primary"className="w-full sm:w-auto">
                                    <ExternalLink size={16} className="mr-2" />
                                    Live
                                </CustomButton>
                            </a>

                            <a
                                href="https://github.com/DARSHANARANE/search-ui"
                                target="_blank"
                            >
                                <CustomButton variantType="secondary"className="w-full sm:w-auto">
                                    <Github size={16} className="mr-2" />
                                    Code
                                </CustomButton>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ================= PROFESSIONAL EXPERIENCE ================= */}
                <h3 className="text-2xl font-semibold text-purple-600 mb-10 text-center">
                    Professional Experience (Confidential Projects)
                </h3>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        {
                            title: "EasyChat – AI Support Dashboard",
                            desc: "Built real-time chat UI and integrated OpenAI API for smart message suggestions. Improved response time by 30%.",
                            tech: ["HTML", "CSS", "JavaScript", "jQuery", "OpenAI API", "Postman", "Bootstraps"],
                        },
                        {
                            title: "Campaign Management System",
                            desc: "Developed campaign creation & tracking modules using React, Redux Toolkit & REST APIs.",
                            tech: ["React", "Redux Toolkit", "REST APIs", "BrowserStack"],
                        },
                        {
                            title: "AI–Human Harmony",
                            desc: "Built dynamic call-center web application enabling AI & human collaboration in real-time.",
                            tech: ["React", "Redux", "HTML", "CSS", "Tailwind", "material-ui"],
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-2xl shadow-md 
      hover:shadow-purple-300/40 hover:-translate-y-2 
      transition-all duration-500"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Lock size={16} className="text-gray-500" />
                                <h4 className="font-semibold text-gray-800">
                                    {project.title}
                                </h4>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">
                                {project.desc}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-md 
            bg-gray-100 text-gray-600 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
