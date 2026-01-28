import { Mail, Phone } from "lucide-react";

export default function Contacts(){
    return(
        <section id="contact" className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Email Card */}
                <a 
                href="mailto:teacher@example.com"
                className="group relative block"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-10 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 bg-indigo-500/20 rounded-2xl group-hover:bg-indigo-500/30 transition-colors">
                        <Mail className="text-indigo-400" size={36} />
                    </div>
                    <div>
                        <div className="text-slate-400 text-sm mb-1">Email Address</div>
                        <div className="text-xl font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                            nrpanditnr@gmail.com
                        </div>
                    </div>
                    </div>
                    <p className="text-slate-400 mt-4">
                    Send me an email for academic inquiries, collaboration opportunities, or any questions about my courses.
                    </p>
                </div>
                </a>

                {/* Phone Card */}
                <a 
                href="tel:+1234567890"
                className="group relative block"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
                        <Phone className="text-purple-400" size={36} />
                    </div>
                    <div>
                        <div className="text-slate-400 text-sm mb-1">Mobile Number</div>
                        <div className="text-xl font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">
                        +977 9818075090
                        </div>
                    </div>
                    </div>
                    <p className="text-slate-400 mt-4">
                    Feel free to call me during business hours for immediate assistance or to schedule a consultation.
                    </p>
                </div>
                </a>
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl px-10 py-8">
                <p className="text-slate-300 text-lg mb-4">
                    <span className="text-2xl">🎓</span> Available for:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Guest Lectures', 'Workshops', 'Curriculum Development', 'Educational Consulting'].map((service) => (
                    <span key={service} className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-indigo-300 border border-indigo-500/20">
                        {service}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}