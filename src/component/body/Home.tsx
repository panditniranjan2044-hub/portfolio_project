import profilePic from "../../assets/niranjan.jpeg";
export default function Home(){
    return(
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-6 animate-[fadeInUp_1s_ease-out]">
            <div className="inline-block ">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 animate-[pulse_3s_ease-in-out_infinite]">
                <div className="overflow-hidden cover w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <img src={profilePic} alt="niranjan_profile" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Empowering Minds Through Education
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '200ms' }}>
              Dedicated educator with a passion for technology and innovation, 
              transforming complex concepts into engaging learning experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8" style={{ animationDelay: '400ms' }}>
              <div className="px-6 py-3 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm hover:bg-indigo-500/30 transition-all duration-300 transform hover:scale-105">
                <span className="text-indigo-300">8+ Years Experience</span>
              </div>
              <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-105">
                <span className="text-purple-300">IT Specialist</span>
              </div>
              <div className="px-6 py-3 bg-pink-500/20 border border-pink-500/30 rounded-full backdrop-blur-sm hover:bg-pink-500/30 transition-all duration-300 transform hover:scale-105">
                <span className="text-pink-300">Computer Science Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}