import { motion, type Variants } from "framer-motion";

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

// Animation Variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const SkillsSection = () => {
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const toolsSkills = skills.filter(s => s.category === 'Tools');

  const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
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
    </motion.div>
  );

  const SkillCategory = ({ title, skills: categorySkills, indexOffset }: { title: string; skills: typeof skills; indexOffset: number }) => (
    <motion.div
      variants={fadeUp}
      custom={indexOffset}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-6 rounded-xl card-elevated border border-border hover:border-primary/50 transition-all duration-300 bg-secondary/20 backdrop-blur-md"
    >
      <h3 className="text-xl font-semibold mb-6 gradient-text">{title}</h3>
      <div className="space-y-5">
        {categorySkills.map((skill, idx) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-sm mb-2">// Front-End Skills</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Tech Stack</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
              My front-end focused technologies and tools
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCategory title="Frontend" skills={frontendSkills} indexOffset={0} />
            <SkillCategory title="Tools & Others" skills={toolsSkills} indexOffset={3} />
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 text-center"
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
