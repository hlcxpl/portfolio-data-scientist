import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import culliganImg from "@/assets/culligan.png";
import globalConexusImg from "@/assets/global-conexus.png";
import antofagastaImg from "@/assets/antofagasta-minerals.png";
import cognitivaImg from "@/assets/cognitiva.png";
import wiseVisionImg from "@/assets/wise-vision.png";
import parkfacilImg from "@/assets/parkfacil.png";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t.projects.projects.parkfacil.title,
      description: t.projects.projects.parkfacil.description,
      tags: ["Node.js", "SQL Server", "GitHub Actions", "PM2"],
      image: parkfacilImg,
      github: null,
      demo: null
    },
    {
      title: t.projects.projects.culligan.title,
      description: t.projects.projects.culligan.description,
      tags: ["React", "Node.js", "Prisma", "SQL", "Agile"],
      image: culliganImg,
      github: null,
      demo: null
    },
    {
      title: t.projects.projects.iot.title,
      description: t.projects.projects.iot.description,
      tags: ["Java", "Apache Kafka", "React", "Azure", "IoT"],
      image: globalConexusImg,
      github: null,
      demo: null
    },
    {
      title: t.projects.projects.mining.title,
      description: t.projects.projects.mining.description,
      tags: ["Python", "Dash", "Flask", "Azure", "Data Analytics"],
      image: antofagastaImg,
      github: null,
      demo: null
    },
    {
      title: t.projects.projects.cognitiva.title,
      description: t.projects.projects.cognitiva.description,
      tags: ["Node.js", "React", "Python", "IBM Watson", "OpenAI"],
      image: cognitivaImg,
      github: null,
      demo: null
    },
    {
      title: t.projects.projects.elk.title,
      description: t.projects.projects.elk.description,
      tags: ["Elasticsearch", "Logstash", "Kibana", "DevOps"],
      image: wiseVisionImg,
      github: "https://github.com/hlcxpl/elk-template",
      demo: null
    },
    {
      title: t.projects.projects.devops.title,
      description: t.projects.projects.devops.description,
      tags: ["Kubernetes", "ArgoCD", "Docker", "GitOps", "CI/CD"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/mastering_devops_g1",
      demo: null
    },
    {
      title: t.projects.projects.telefruver.title,
      description: t.projects.projects.telefruver.description,
      tags: ["TypeScript", "React", "Node.js", "Logistics"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/telefruver-fruitflow",
      demo: null
    },
    {
      title: t.projects.projects.django.title,
      description: t.projects.projects.django.description,
      tags: ["Python", "Django", "PostgreSQL", "API REST"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/django-auto-motor-app",
      demo: null
    }
  ];

  return (
    <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up text-center md:text-left">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            {t.projects.sectionTitle}
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8 mx-auto md:mx-0"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            {t.projects.heading}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.codeButton}
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="rounded-full"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.demoButton}
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold mb-2 text-foreground line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
