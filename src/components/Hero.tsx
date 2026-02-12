import { TypeAnimation } from "react-type-animation";
import { useState } from "react"
import CustomButton from "@/components/CustomButton";
import { NavLink, useNavigate } from "react-router-dom"

export default function Hero() {

  const navigate = useNavigate()
  const handleProjects = () => navigate("/projects");
  const handleHireMe = () => navigate("/contact");

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-background px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={["Darshana Rane"]}
                speed={70}
                cursor={true}
                repeat={0}
              />
            </span>
          </h1>

          <p className="mt-4 text-xl text-muted-foreground">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-purple-500 font-semibold"
            />
          </p>

          <p className="mt-6 text-muted-foreground max-w-lg">
            I build fast, scalable, and beautiful web applications
            with a strong focus on performance and user experience.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-8 flex flex-wrap gap-4">

            <CustomButton onClick={handleProjects}>
              View Projects
            </CustomButton>

            <CustomButton variantType="secondary" onClick={handleHireMe}>
              Contact Me
            </CustomButton>

            <a href="/Darshana Rane.pdf" download>
              <CustomButton variantType="secondary">
                Download Resume
              </CustomButton>
            </a>

          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 transition-transform duration-500 hover:scale-105">

            {/* Blob Background */}
            <div className="absolute -inset-6 animate-pulse">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#8A3FFC"
                  d="M50.1,-57.4C65.4,-46.9,78.5,-31.5,79.1,-15.7C79.8,0,68,16.2,55.8,27.4C43.6,38.6,31.1,44.9,16.8,53.2C2.4,61.5,-13.7,71.8,-30.3,71C-46.8,70.3,-63.7,58.4,-72.6,42.3C-81.4,26.1,-82.3,5.7,-78,-13C-73.8,-31.7,-64.5,-48.8,-50.7,-59.6C-36.8,-70.4,-18.4,-74.9,-0.5,-74.3C17.4,-73.7,34.8,-68,50.1,-57.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Profile Image */}
            <img
              src="/ProfileImg.png"
              alt="Darshana Rane"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
