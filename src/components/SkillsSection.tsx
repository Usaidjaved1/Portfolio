const skills = [
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'Vue.js', level: 80, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' },
];

const SkillsSection = () => {
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const toolsSkills = skills.filter(s => s.category === 'Tools');

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-primary font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
          }}
        />
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills: categorySkills }: { title: string; skills: typeof skills }) => (
    <div className="p-6 rounded-xl card-elevated border border-border hover:border-primary/50 transition-all duration-300 bg-secondary/20 backdrop-blur-md">
      <h3 className="text-xl font-semibold mb-6 gradient-text">{title}</h3>
      <div className="space-y-5">
        {categorySkills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Front-End Skills</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My front-end focused technologies and tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCategory title="Frontend" skills={frontendSkills} />
            <SkillCategory title="Tools & Others" skills={toolsSkills} />
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Also familiar with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Redux', 'Next.js', 'GraphQL', 'REST API', 'Jest', 'Webpack', 'Firebase', 'AWS'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary/20 text-muted-foreground text-sm font-medium hover:text-primary hover:border-primary border border-transparent transition-all duration-300 backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
