import { motion } from "framer-motion";
import { useState } from "react";
import WomappLogo from "../Header/WomappLogo";
import ThemeToggle from "../ThemeToggle/ThemeToggole";
const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" min-h-screen ">
      {/* Desktop Navbar */}
      <div className="flex justify-center items-center">
        <nav className="hidden md:flex min-w-3xl  bg-[#2E4B5B] rounded-4xl p-1 mt-5 items-center justify-between ">
          {/* Left - Logo and Brand */}
          <WomappLogo />

          {/* Center - Navigation Icons */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg  flex items-center justify-center transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00F6FF"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>

            <button className="w-10 h-10 rounded-lg  flex items-center justify-center hover:bg-[#225566] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00F6FF"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Right - Theme Toggle and Auth Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Sign Up Button */}
            <button className="px-5 py-2 bg-transparent border border-[#3A6270] rounded-full text-white text-sm font-medium hover:text-[#3afeff] transition-colors">
              Sign up
            </button>

            {/* Sign In Button */}
            <button className="px-5 py-2 bg-[#1A4A5C] rounded-full text-white text-sm font-medium hover:text-[#3afeff] transition-colors">
              Sign in
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <nav className="md:hidden w-full p-3">
        <div
          className="w-full bg-[#2e4b5a]  rounded-4xl border border-[#496F7A]
             shadow-[ -4px_-4px_6px_rgba(255,255,255,0.3), 4px_4px_6px_rgba(0,0,0,0.3) ] flex items-center justify-between shadow-lg"
        >
          {/* Left Logo */}
          <div className="py-3.5 pl-6">
            <WomappLogo />
          </div>

          <div className="flex justify-evenly items-center gap-2 py-2 pr-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Sign In Button */}
            <button className="px-6 py-2 cursor bg-[#2b4957] border border-[#496F7A] shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.2),inset_2px_2px_3px_rgba(0,0,0,0.2)] rounded-full text-white text-lg font-medium hover:text-[#3afeff]">
              Sign in
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 hover:text-[#3afeff] active:scale-95 rounded-full bg-[#2b4957] border border-[#496F7A] flex items-center justify-center shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.2),inset_2px_2px_3px_rgba(0,0,0,0.2)] transition-all"
            >
              <div className="space-y-1">
                <div className="w-6 h-1 bg-white rounded"></div>
                <div className="w-6 h-1 bg-white rounded"></div>
                <div className="w-6 h-1 bg-white rounded"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 bg-[#103A49] rounded-3xl p-6 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <button className="w-full px-6 py-3 bg-[#0B2B35] border border-[#496F7A] rounded-full text-white text-lg font-medium text-left flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00F6FF">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.67C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                </svg>
                Shopping
              </button>

              <button className="w-full px-6 py-3 bg-[#0B2B35] border border-[#496F7A] rounded-full text-white text-lg font-medium text-left flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00F6FF">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                Search
              </button>

              <button className="w-full px-6 py-3 bg-[#7cdbdb] rounded-full text-[#0D3B48] text-lg font-semibold">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Demo Content */}
      <div className="flex items-center justify-center h-[calc(100vh-100px)] text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-400">
            Welcome to Womapp
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Resize your browser to see the responsive navbar in action
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
