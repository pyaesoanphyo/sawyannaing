
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-purple-600 text-lg font-medium">Hello, my name is</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Saw Yan Naing
              </h1>
              <p className="text-2xl lg:text-3xl text-purple-600 font-light">
                I build cross-platform app
              </p>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              I'm an application developer specializing in building exceptional digital experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Code Block */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-2xl border border-slate-700">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="font-mono text-sm leading-relaxed">
                <div className="text-purple-400">final</div>
                <div className="text-gray-300 ml-4">
                  developer = {"{"}
                </div>
                <div className="text-gray-300 ml-8">
                  name : <span className="text-emerald-400">"Saw Yan Naing"</span>,
                </div>
                <div className="text-gray-300 ml-8">
                  skills : [<span className="text-emerald-400">"Jetpack compose"</span>, <span className="text-emerald-400">"KMP"</span>, <span className="text-emerald-400">"Flutter"</span>, <span className="text-emerald-400">"Dart"</span>, <span className="text-emerald-400">"Kotlin"</span>],
                </div>
                <div className="text-gray-300 ml-8">
                  loves : <span className="text-emerald-400">"Coding"</span>,
                </div>
                <div className="text-gray-300 ml-4">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
