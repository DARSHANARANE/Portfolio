// src/components/Navbar.tsx
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import CustomButton from "@/components/CustomButton"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  const handleHireMe = () => {
    navigate("/contact")
    setOpen(false)
  }

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          Darshana.dev
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-colors duration-300 ${isActive ? "text-purple-600 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <CustomButton onClick={handleHireMe}>
            Hire Me
          </CustomButton>
          <a href="/Darshana Rane.pdf" download>
            <CustomButton variantType="secondary" className="ml-4">
              Resume
            </CustomButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white/95 backdrop-blur-md shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive ? "text-purple-600" : "hover:text-purple-500"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
            <a href="/Darshana Rane.pdf" download>
            <CustomButton variantType="secondary" className="mt-4">
              Resume
            </CustomButton>
          </a>
        </div>
      )}
    </header>
  )
}
