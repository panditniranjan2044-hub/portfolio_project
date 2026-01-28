import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Books(){
    const navigate=useNavigate();

    return(
        <section id="books" className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                Published Textbooks
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Class 11 Book */}
                <div onClick={()=>navigate("class11_notes")} className="cursor-pointer group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                    <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-20 h-28 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg shadow-2xl flex items-center justify-center border-2 border-indigo-400/30 transform group-hover:rotate-3 transition-transform duration-500">
                        <BookOpen className="text-white" size={32} />
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold mb-3">
                        Higher Secondary
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">Class 11 Computer Science</h3>
                        <p className="text-slate-400 leading-relaxed">
                        Comprehensive guide covering fundamental programming concepts, 
                        algorithms, and practical applications designed for grade 11 students.
                        </p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Class 12 Book */}
                <div onClick={()=>navigate("class12_notes")} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                    <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-20 h-28 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl flex items-center justify-center border-2 border-purple-400/30 transform group-hover:rotate-3 transition-transform duration-500">
                        <BookOpen className="text-white" size={32} />
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-3">
                        Higher Secondary
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">Class 12 Computer Science</h3>
                        <p className="text-slate-400 leading-relaxed">
                        Advanced topics in computer science including data structures, 
                        object-oriented programming, and web technologies for grade 12 students.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl px-8 py-6">
                <p className="text-slate-300 text-lg">
                    📚 Both textbooks follow the latest curriculum guidelines and include 
                    <span className="text-indigo-400 font-semibold"> practical exercises</span>, 
                    <span className="text-purple-400 font-semibold"> real-world examples</span>, and 
                    <span className="text-pink-400 font-semibold"> hands-on projects</span>
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}