import  { useState, useEffect } from 'react';
import { Mail, Phone, BookOpen, GraduationCap, Briefcase, Award, ChevronRight, Menu, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 relative overflow-hidden">

      {/* Home Section */}
      

      {/* Skills Section */}
      

      {/* Books Section */}
      

      {/* Contact Section */}
      

      {/* Footer */}
      

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}