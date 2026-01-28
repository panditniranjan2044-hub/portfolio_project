import { Award, Briefcase } from "lucide-react";

export default function Skills(){
    return(
        <section id="skills" className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                Qualifications & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Education */}
                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-500/20 rounded-xl">
                        <Award className="text-indigo-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200">Education</h3>
                    </div>
                    
                    <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-indigo-500/50 hover:border-indigo-400 transition-colors">
                        <div className="text-indigo-400 font-semibold text-lg">Master's Degree</div>
                        <div className="text-slate-400">MSc. IT & MBA IT</div>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-purple-500/50 hover:border-purple-400 transition-colors">
                        <div className="text-purple-400 font-semibold text-lg">Bachelor's Degree</div>
                        <div className="text-slate-400">Bachelor in Computer</div>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-pink-500/50 hover:border-pink-400 transition-colors">
                        <div className="text-pink-400 font-semibold text-lg">Higher Secondary (+2)</div>
                        <div className="text-slate-400">Science Stream</div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Experience */}
                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                        <Briefcase className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200">Experience</h3>
                    </div>
                    
                    <div className="space-y-6">
                    <div>
                        <div className="flex items-baseline gap-3 mb-2">
                        <div className="text-4xl font-bold text-purple-400">8+</div>
                        <div className="text-xl text-slate-400">Years</div>
                        </div>
                        <div className="text-slate-300 text-lg">Professional Teaching Experience</div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-800/50">
                        <div className="text-slate-400 leading-relaxed">
                        Specialized in teaching computer science and IT subjects, 
                        mentoring students to achieve academic excellence and 
                        develop practical technical skills.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Expertise Areas */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                { icon: '💻', label: 'Programming' },
                { icon: '🌐', label: 'Web Development' },
                { icon: '📊', label: 'Data Structures' },
                { icon: '💻', label: 'C# .NET' },
                ].map((item, idx) => (
                <div 
                    key={idx}
                    className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="text-slate-300 font-medium">{item.label}</div>
                </div>
                ))}
            </div>
            </div>
        </section>
        )
}