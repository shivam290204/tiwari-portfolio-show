import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import shivamPhoto from "@/assets/shivam-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-30 animate-pulse-slow"></div>
              <img
                src={shivamPhoto}
                alt="Shivam Tiwari"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-glow hover-glow"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 slide-up">
            Hi, I'm{" "}
            <span className="gradient-text">Shivam Tiwari</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto slide-up" style={{ animationDelay: "0.2s" }}>
            B.Tech Computer Science Student | Full-Stack Developer | AI Enthusiast
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed slide-up" style={{ animationDelay: "0.4s" }}>
            Passionate about creating innovative solutions through code. Specialized in web development, 
            machine learning, and building user-centric applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 hover-glow px-8 py-4 text-lg font-medium"
              onClick={scrollToAbout}
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-medium"
              onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1qohosyaosnV8gNQNieuL3YAZvyDrqrFW/view?usp=drive_link",
                "_blank"
              )
              }
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center slide-up" style={{ animationDelay: "0.8s" }}>
            <button
              onClick={scrollToAbout}
              className="text-text-secondary hover:text-primary transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;