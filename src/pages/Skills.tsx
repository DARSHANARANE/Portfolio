import {
    Code2,
    Database,
    Brain,
    GitBranch,
    Rocket,
    Palette,
    Settings,
    Users,
    MessageCircle,
    Clock,
} from "lucide-react"

export default function Skills() {
    const technicalSkills = [
        {
            title: "Languages & Frameworks",
            icon: Code2,
            items:
                "React JS, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), PHP, SQL",
        },
        {
            title: "State Management",
            icon: Settings,
            items: "Redux Toolkit, Context API",
        },
        {
            title: "API & Data",
            icon: Database,
            items: "REST APIs, GraphQL",
        },
        {
            title: "AI Tools & Technologies",
            icon: Brain,
            items:
                "Generative AI (ChatGPT), OpenAI API Integration, AI Prompt Engineering",
        },
        {
            title: "Development Tools",
            icon: Code2,
            items: "VS Code, Git, XAMPP, Postman, BrowserStack",
        },
        {
            title: "Deployment & CI/CD",
            icon: Rocket,
            items: "Netlify, Render, CI/CD Pipelines",
        },
        {
            title: "Design",
            icon: Palette,
            items: "Adobe XD, Figma",
        },
        {
            title: "Version Control & Collaboration",
            icon: GitBranch,
            items: "GitHub, Jira, ClickUp",
        },
    ]

    const softSkills = [
        { title: "Time Management & Teamwork", icon: Clock },
        { title: "Communication & Leadership", icon: MessageCircle },
    ]

    return (
        <section className="min-h-screen py-10 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-purple-600">Skills</span>
                </h2>

                {/* ================= SOFT SKILLS ================= */}
                <div className="mb-14">
                    <h3 className="text-2xl font-semibold mb-8 text-purple-600">
                        Soft Skills
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {softSkills.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md 
                  hover:shadow-purple-300/40 hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="p-3 bg-purple-100 rounded-full">
                                        <Icon className="text-purple-600" size={20} />
                                    </div>

                                    <p className="text-gray-700 font-medium">
                                        {skill.title}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ================= TECHNICAL SKILLS ================= */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-purple-600">
                        Technical Skills
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {technicalSkills.map((category, index) => {
                            const Icon = category.icon

                            return (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-2xl shadow-lg 
                  hover:shadow-purple-300/40 hover:shadow-2xl 
                  transition-all duration-500 hover:-translate-y-3"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-purple-100 rounded-full">
                                            <Icon className="text-purple-600" size={22} />
                                        </div>

                                        <h4 className="text-lg font-semibold text-purple-700">
                                            {category.title}
                                        </h4>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        {category.items}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
