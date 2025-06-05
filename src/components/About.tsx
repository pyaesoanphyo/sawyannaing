
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a mobile developer with 1 year of experience building modern, user-friendly applications 
                using Kotlin, Dart, Jetpack Compose, and Flutter. I've worked on and maintained several 
                projects, particularly in the e-commerce space, using both Flutter and Jetpack Compose to 
                create smooth and responsive user experiences.
              </p>
              
              <p className="text-lg">
                I studied Mathematics at Yangon University, but due to the crisis, I had to step away from my 
                academic path. Despite that, my passion for technology and development has continued to 
                grow. I'm now focused on expanding my skills and working toward becoming a well-rounded 
                software developer.
              </p>
              
              <p className="text-lg">
                Outside of coding, I enjoy staying active by playing sports like basketball, volleyball, and 
                badminton. When I'm indoors, I like to relax by reading manga and watching anime — it helps 
                me unwind and stay inspired.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Adaptability'].map((trait) => (
                <span
                  key={trait}
                  className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl transform rotate-3"></div>
              <img
                src="/lovable-uploads/e440d287-28de-4883-bd42-7116e089b99c.png"
                alt="Saw Yan Naing"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
