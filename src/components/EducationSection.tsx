import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Sir Adamjee Institute',
    year: '2024 - 2026',
    description: 'Focused on front-end development, UI/UX design, and responsive web applications.',
    achievements: ["Dean's List", 'Top Projects in Web Dev'],
  },
  {
    degree: 'Front-End Web Development Bootcamp',
    institution: 'Tech Academy',
    year: '2025',
    description: 'Intensive 6-month program covering HTML, CSS, JavaScript, React, and modern front-end practices.',
    achievements: ['Top Graduate', 'Built 10+ Front-End Projects'],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Education</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Front-End Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My front-end focused education and professional development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto md:w-1/2'
                    : 'md:pl-12 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-primary left-0 transform -translate-x-1.5 md:left-auto ${
                    index % 2 === 0 ? 'md:right-0 md:translate-x-2' : 'md:left-0 md:-translate-x-2'
                  }`}
                />

                {/* Card */}
                <div className="p-6 rounded-xl card-elevated border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground font-mono flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h3>
                  <p className="text-primary font-medium mb-3">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                  {/* Achievements */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        <Award className="w-3 h-3" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
