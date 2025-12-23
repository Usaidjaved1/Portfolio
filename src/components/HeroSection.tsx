import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
              Hello, World! I'm
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up">
              <span className="text-foreground">Usaid </span>
              <span className="gradient-text">Javed</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-up">
              <span className="font-mono text-muted-foreground">{'<'}</span>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                      Front End Developer
              </h2>
              <span className="font-mono text-muted-foreground">{'/>'}</span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 animate-fade-up">
              I craft modern, responsive web applications using cutting-edge
              JavaScript technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-up">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#skills">View My Skills</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up">
              <a
                href="https://github.com/Usaidjaved1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/usaid-javed-5b3aa9341/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:uccucoral@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl transition-all duration-500 group-hover:blur-2xl" />

              {/* Image */}
              <img
                src={profileImg}
                alt="Usaid Javed"
                className="
                  relative
                  w-52 h-52
                  md:w-64 md:h-64
                  lg:w-80 lg:h-80
                  rounded-full
                  object-cover
                  border-4 border-primary/50
                  shadow-2xl
                  transition-all duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;