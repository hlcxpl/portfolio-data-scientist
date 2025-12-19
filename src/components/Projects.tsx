import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import antofagastaImg from "@/assets/antofagasta-minerals.png";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t.projects.projects.dpyml1.title,
      description: t.projects.projects.dpyml1.description,
      tags: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-1",
      demo: null
    },
    {
      title: t.projects.projects.dpyml2.title,
      description: t.projects.projects.dpyml2.description,
      tags: ["Python", "Feature Engineering", "ML", "Optimization"],
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-2",
      demo: null
    },
    {
      title: t.projects.projects.dpyml3.title,
      description: t.projects.projects.dpyml3.description,
      tags: ["Classification", "Regression", "Cross-Validation", "Metrics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-3",
      demo: null
    },
    {
      title: t.projects.projects.dpyml4.title,
      description: t.projects.projects.dpyml4.description,
      tags: ["Clustering", "PCA", "Unsupervised Learning", "Segmentation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-4",
      demo: null
    },
    {
      title: t.projects.projects.dpyml5.title,
      description: t.projects.projects.dpyml5.description,
      tags: ["Time Series", "ARIMA", "Forecasting", "Python"],
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-5",
      demo: null
    },
    {
      title: t.projects.projects.dpyml6.title,
      description: t.projects.projects.dpyml6.description,
      tags: ["Deep Learning", "TensorFlow", "Keras", "Neural Networks"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-6",
      demo: null
    },
    {
      title: t.projects.projects.dpyml7.title,
      description: t.projects.projects.dpyml7.description,
      tags: ["ML Pipeline", "End-to-End", "Deployment", "Python"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-7",
      demo: null
    },
    {
      title: t.projects.projects.dpymlprueba.title,
      description: t.projects.projects.dpymlprueba.description,
      tags: ["Machine Learning", "Business Problem", "Python", "End-to-End"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/DpyML-Prueba",
      demo: null
    },
    {
      title: t.projects.projects.tableau1.title,
      description: t.projects.projects.tableau1.description,
      tags: ["Tableau", "Data Visualization", "KPIs", "Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: null,
      demo: "https://public.tableau.com/app/profile/luis.sanchez2290/viz/Desafo_Analizando_las_Ventas_Luis_Sanchez/PorcentajedeVentaporRegin"
    },
    {
      title: t.projects.projects.tableau2.title,
      description: t.projects.projects.tableau2.description,
      tags: ["Tableau", "Interactive Dashboards", "Filters", "Metrics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: null,
      demo: "https://public.tableau.com/app/profile/luis.sanchez2290/viz/PruebaDesafioLatam-LuisSanchez/4_1"
    },
    {
      title: t.projects.projects.tableau3.title,
      description: t.projects.projects.tableau3.description,
      tags: ["Tableau", "Multi-Source Data", "Storytelling", "Dashboards"],
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=500&fit=crop",
      github: null,
      demo: "https://public.tableau.com/app/profile/luis.sanchez2290/viz/Luis_Sanchez_Desafio_Latam/Pregunta4"
    },
    {
      title: t.projects.projects.mining.title,
      description: t.projects.projects.mining.description,
      tags: ["Python", "Dash", "Plotly", "Azure", "Data Analytics"],
      image: antofagastaImg,
      github: null,
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
