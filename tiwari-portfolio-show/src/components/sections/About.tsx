import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Trophy } from "lucide-react";

const About = () => {
  const skills = {
    languages: ["C++", "Python", "JavaScript"],
    webDev: ["HTML", "CSS", "JavaScript", "Node.js", "React.js"],
    datascience: ["Data Science", "Machine Learning", "Data Analysis"],
    databases: ["MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Canva"]
  };

  const achievements = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "100+ Problems Solved",
      description: "Strong foundation in data structures and algorithms"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart India Hackathon",
      description: "Failed screening first time, reached finals the next year"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "CGPA 8.5+",
      description: "Consistent academic excellence in Computer Science"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A motivated Computer Science student with a passion for innovation and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Introduction */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/20 hover-glow">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-semibold">Education & Background</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-primary">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-foreground">Computer Science & Engineering</p>
                  <p className="text-text-secondary">HMR Institute of Technology and Management, GGSIPU, Delhi</p>
                  <p className="text-sm text-muted-foreground">2023 - 2027 | CGPA: 8.5+</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-text-secondary leading-relaxed">
                  Aspiring Software & AI Engineer skilled in Full-Stack Development, AI/ML, and DSA. Experienced in building innovative web and AI projects using React.js, Python, and modern technologies. Passionate about learning, problem-solving, and teamwork.
                </p>
              </div>
            </Card>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/20 hover-glow">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-text-secondary">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="p-8 bg-gradient-card border-border/20 hover-glow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Code className="h-8 w-8 text-primary mr-4" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Data Science</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.datascience.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-muted/10 text-muted-foreground border-muted/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-border/40 text-text-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-8 bg-gradient-card border-border/20 hover-glow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Brain className="h-8 w-8 text-primary mr-4" />
                Experience
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-primary">AI Intern</h4>
                    <span className="text-sm text-text-secondary">Jul 2025 - Aug 2025</span>
                  </div>
                  <p className="text-foreground font-medium mb-2">IBM</p>
                  <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
                    <li>Developed AI-powered healthcare assistant using Google Gemini API</li>
                    <li>Built responsive UI with HTML, JavaScript, and Tailwind CSS</li>
                    <li>Created multi-feature health application with chatbot and analysis tools</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
