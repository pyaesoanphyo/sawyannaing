
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Dart"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      skills: ["Android (Jetpack Compose)", "Flutter"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      skills: ["Git", "Android Studio", "IntelliJ"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const proficiencyData = [
    { skill: "Android & KMP", percentage: 65 },
    { skill: "Mobile Application Development", percentage: 65 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-6 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency</h3>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {proficiencyData.map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">{item.skill}</span>
                  <span className="text-lg font-bold text-purple-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.percentage}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
