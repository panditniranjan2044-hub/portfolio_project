import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    

    return(
        <div>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-700 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-[fadeIn_1s_ease-out]">
                Niranjan Pandit
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                {['home', 'skills', 'books', 'contact'].map((section, idx) => (
                <button
                    onClick={() => setActiveSection(section)}
                    className={`capitalize transition-all font-bold duration-300 hover:text-indigo-400 ${
                    activeSection === section ? 'text-indigo-400' : 'text-slate-300'
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    <Link to={`/${section =="home" ? "" : section}`}>{section}</Link>
                </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-slate-300 hover:text-indigo-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/50 animate-[slideDown_0.3s_ease-out]">
                {['home', 'skills', 'books', 'contact'].map((section) => (
                <button
                    onClick={() => setActiveSection(section)}
                    key={section}
                    className="block w-full text-left px-6 py-4 capitalize text-slate-300 hover:text-indigo-400 hover:bg-slate-800/30 transition-all"
                >
                    <Link to={`/${section =="home" ? "" : section}`}>{section}</Link>
                </button>
                ))}
            </div>
            )}
        </nav>
      </div>
    )
}
