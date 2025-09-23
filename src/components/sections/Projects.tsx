import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Energy Shield Smart Grid AI",
      description: "An AI-powered electricity theft detection system that identifies suspicious consumption patterns and alerts authorities to potential theft or unauthorized usage. Enhances energy distribution security and minimizes revenue losses.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Machine Learning"],
      features: [
        "Real-time monitoring of electricity consumption",
        "AI-based pattern recognition for theft detection",
        "Automated alert system for authorities",
        "Revenue loss minimization through smart detection"
      ],
      link: "#",
      github: "#",
      category: "Web Development"
    },
    {
      title: "Emotion-Driven Interactive Storyteller",
      description: "An innovative Python application that uses real-time facial emotion recognition to generate and narrate personalized short stories. Creates dynamic storytelling experiences based on user emotions.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Streamlit", "DeepFace"],
      features: [
        "Real-time facial emotion recognition via webcam",
        "Dynamic story generation based on detected emotions",
        "Interactive UI built with Streamlit",
        "Personalized storytelling experience"
      ],
      link: "#",
      github: "#",
      category: "Python Application"
    },
    {
      title: "AI Health Chatbot",
      description: "An intelligent healthcare assistant chatbot that provides medical information, symptom analysis, and health recommendations. Built with natural language processing to understand user queries and provide accurate health guidance.",
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "Healthcare APIs"],
      features: [
        "Symptom analysis and health recommendations",
        "Medical information database integration",
        "Natural language understanding",
        "User-friendly conversational interface"
      ],
      link: "#",
      github: "#",
      category: "Healthcare"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of my development work spanning AI, web applications, and innovative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Project Card */}
          <Card className="p-8 md:p-12 bg-gradient-card border-border/20 hover-glow min-h-[600px]">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/40 text-text-secondary hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    className="bg-gradient-primary hover:opacity-90 text-white border-0"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground">Key Features</h4>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-primary rounded-full mt-2"></div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentProject
                      ? "bg-primary shadow-glow"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-text-secondary">
              {currentProject + 1} of {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;