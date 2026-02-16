import { Code2, Rocket, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development with quick iterations and rapid prototyping",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with excellent communication skills",
  },
];

// Animation variants
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary font-mono text-sm mb-2"
            >
              // About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              <span className="gradient-text">Who I Am</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[1, 2, 3].map((i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {i === 1 &&
                    <>I'm a passionate <span className="text-primary font-medium">Front-End Developer</span> with a love for crafting interactive, responsive, and visually appealing web experiences. I specialize in modern JavaScript frameworks like React and Vue, and design clean, user-centric interfaces.</>
                  }
                  {i === 2 &&
                    <>My journey in front-end development began with curiosity about how websites are built, and has grown into a passion for turning designs into performant, elegant applications. I constantly explore the latest web technologies and best practices to enhance user experiences.</>
                  }
                  {i === 3 &&
                    <>When I'm not coding, you'll find me experimenting with new UI/UX ideas, contributing to open-source front-end projects, or learning about emerging technologies in the web ecosystem.</>
                  }
                </motion.p>
              ))}

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                {[
                  { value: "1+", label: "Years Exp." },
                  { value: "15+", label: "Projects" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-secondary"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CARDS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={index + 1}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="p-6 rounded-xl card-elevated border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
