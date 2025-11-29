import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, Database, Wrench, Cpu, 
  Boxes, Cloud, Container, GitBranch, 
  Layers, Server, Terminal, Zap,
  Brain, CircuitBoard, FileCode2, Package,
  Globe, Lock, Workflow, Activity
} from "lucide-react";

const Skills = () => {
  const skills = [
    // Frontend
    { name: "React", icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: FileCode2, color: "from-yellow-500 to-amber-500" },
    { name: "TypeScript", icon: FileCode2, color: "from-blue-600 to-blue-700" },
    { name: "HTML5", icon: Globe, color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: Layers, color: "from-blue-400 to-blue-600" },
    { name: "Dash (Plotly)", icon: Activity, color: "from-purple-500 to-pink-500" },
    { name: "WordPress", icon: Globe, color: "from-blue-500 to-indigo-500" },
    { name: "Elementor", icon: Boxes, color: "from-pink-500 to-rose-500" },
    
    // Backend & Frameworks
    { name: "Node.js", icon: Server, color: "from-green-600 to-green-700" },
    { name: "Java", icon: Code2, color: "from-red-600 to-orange-600" },
    { name: "Spring Boot", icon: Zap, color: "from-green-500 to-emerald-600" },
    { name: "Python", icon: Code2, color: "from-blue-500 to-yellow-500" },
    { name: "Django", icon: Server, color: "from-green-700 to-teal-700" },
    { name: "Flask", icon: Server, color: "from-gray-600 to-gray-700" },
    { name: "Express.js", icon: Zap, color: "from-gray-700 to-gray-800" },
    { name: "Laravel", icon: Code2, color: "from-red-500 to-orange-500" },
    
    // Bases de Datos & Cloud
    { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-blue-800" },
    { name: "MySQL", icon: Database, color: "from-blue-500 to-cyan-600" },
    { name: "SQL Server", icon: Database, color: "from-red-600 to-red-700" },
    { name: "Prisma", icon: Database, color: "from-indigo-500 to-purple-600" },
    { name: "Azure", icon: Cloud, color: "from-blue-500 to-blue-600" },
    { name: "Azure Data Lake", icon: Database, color: "from-blue-400 to-cyan-500" },
    { name: "Azure Functions", icon: Zap, color: "from-blue-600 to-indigo-600" },
    
    // DevOps & Herramientas
    { name: "Docker", icon: Container, color: "from-blue-500 to-blue-600" },
    { name: "Kubernetes", icon: Boxes, color: "from-blue-600 to-indigo-600" },
    { name: "ArgoCD", icon: GitBranch, color: "from-orange-500 to-red-500" },
    { name: "GitHub Actions", icon: Workflow, color: "from-gray-700 to-gray-900" },
    { name: "PM2", icon: Terminal, color: "from-blue-600 to-purple-600" },
    { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600" },
    { name: "Apache Kafka", icon: Activity, color: "from-gray-800 to-black" },
    { name: "Elasticsearch", icon: Database, color: "from-cyan-500 to-teal-600" },
    { name: "Kibana", icon: Activity, color: "from-pink-500 to-rose-600" },
    { name: "Logstash", icon: Workflow, color: "from-yellow-500 to-amber-600" },
    
    // IA & Data Science
    { name: "OpenAI API", icon: Brain, color: "from-green-500 to-emerald-600" },
    { name: "IBM Watson", icon: Brain, color: "from-blue-600 to-indigo-700" },
    { name: "Rasa NLU", icon: Brain, color: "from-purple-500 to-pink-600" },
    { name: "Pandas", icon: Database, color: "from-blue-700 to-indigo-800" },
    { name: "Data Analysis", icon: Activity, color: "from-purple-600 to-pink-600" },
    { name: "Machine Learning", icon: CircuitBoard, color: "from-indigo-600 to-purple-700" },
    
    // Otros
    { name: "REST APIs", icon: Globe, color: "from-green-500 to-teal-600" },
    { name: "IoT", icon: CircuitBoard, color: "from-blue-500 to-cyan-600" },
    { name: "Telemetría", icon: Activity, color: "from-orange-500 to-red-600" },
    { name: "Agile (Scrum)", icon: Workflow, color: "from-blue-600 to-indigo-600" },
    { name: "GitOps", icon: GitBranch, color: "from-purple-600 to-pink-600" },
    { name: "CI/CD", icon: Workflow, color: "from-green-600 to-emerald-700" }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 glow-effect`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-card to-secondary border-primary/30 inline-block animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-bold gradient-text text-xl">7+ años</span> de experiencia profesional
            </p>
            <p className="text-muted-foreground">
              Desarrollando soluciones fullstack, DevOps y data science en industrias minera, bancaria y tecnológica
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;