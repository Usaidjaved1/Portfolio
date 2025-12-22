import { Code2, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile development with quick iterations and rapid prototyping',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset with excellent communication skills',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Who I Am</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-medium">Full Stack JavaScript Developer</span> with 
                  a love for creating elegant solutions to complex problems. With expertise in modern 
                  web technologies, I specialize in building responsive and performant applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in web development started with curiosity about how websites work, 
                  and has evolved into a deep passion for crafting user-centric digital experiences. 
                  I believe in continuous learning and staying updated with the latest industry trends.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <p className="text-2xl md:text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years Exp.</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <p className="text-2xl md:text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </div>

            {/* Right Side - Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl card-elevated border border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
