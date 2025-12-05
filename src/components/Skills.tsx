import BackgroundParticles from "./BackgroundParticles";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  slug?: string; // for skillicons.dev
  customUrl?: string; // for other sources
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  // Match particle colors: dark for light mode, light for dark mode
  const pixelColors = theme === 'dark'
    ? ["#e2e8f0", "#f8fafc", "#cbd5e1"] // Light grays for dark mode
    : ["#94a3b8", "#64748b", "#475569"]; // Darker grays for light mode

  const skillCategories: SkillCategory[] = [
    {
      title: t.skills.categories.frontend,
      skills: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextjs" },
        { name: "HTML5", slug: "html" },
        { name: "CSS3", slug: "css" },
        { name: "Sass", customUrl: "https://cdn.simpleicons.org/sass" },
        { name: "Less", slug: "less" },
        { name: "Bootstrap", slug: "bootstrap" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Material UI", slug: "materialui" },
        { name: "TypeScript", slug: "ts" },
        { name: "JavaScript", slug: "js" },
      ]
    },
    {
      title: t.skills.categories.backend,
      skills: [
        { name: "Node.js", slug: "nodejs" },
        { name: "Express", slug: "express" },
        { name: "NestJS", slug: "nestjs" },
        { name: "Java", slug: "java" },
        { name: "Spring Boot", slug: "spring" },
        { name: "Python", slug: "python" },
        { name: "Flask", slug: "flask" },
        { name: "Django", slug: "django" },
        { name: "Kafka", slug: "kafka" },
      ]
    },
    {
      title: t.skills.categories.cloudInfra,
      skills: [
        { name: "AWS", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Azure", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Heroku", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
        { name: "Netlify", slug: "netlify" },
        { name: "Railway", customUrl: "https://cdn.simpleicons.org/railway" },
      ]
    },
    {
      title: t.skills.categories.databases,
      skills: [
        { name: "MySQL", slug: "mysql" },
        { name: "PostgreSQL", slug: "postgres" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "SQLite", slug: "sqlite" },
        { name: "Oracle", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "MariaDB", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
        { name: "Sequelize", slug: "sequelize" },
        { name: "Prisma", slug: "prisma" },
        { name: "SQLAlchemy", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
        { name: "Hibernate", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg" },
      ]
    },
    {
      title: t.skills.categories.devops,
      skills: [
        { name: "Docker", slug: "docker" },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Terraform", slug: "terraform" },
        { name: "Ansible", slug: "ansible" },
        { name: "Linux", slug: "linux" },
        { name: "Git", slug: "git" },
        { name: "Bash", slug: "bash" },
        { name: "Helm", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
        { name: "ArgoCD", customUrl: "https://cdn.simpleicons.org/argo/EF7B4D" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "Jenkins", slug: "jenkins" },
        { name: "GitLab", slug: "gitlab" },
        { name: "JMeter", customUrl: "https://cdn.simpleicons.org/apachejmeter" },
      ]
    },
    {
      title: t.skills.categories.dataScience,
      skills: [
        { name: "Pandas", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Numpy", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "TensorFlow", slug: "tensorflow" },
        { name: "OpenCV", slug: "opencv" },
      ]
    },
    {
      title: t.skills.categories.monitoring,
      skills: [
        { name: "Grafana", slug: "grafana" },
        { name: "Prometheus", slug: "prometheus" },
        { name: "Elasticsearch", slug: "elasticsearch" },
        { name: "Splunk", customUrl: "https://cdn.simpleicons.org/splunk/000000" },
        { name: "Instana", customUrl: "https://static.cdnlogo.com/logos/i/55/instana-inc.svg" },
      ]
    },
    {
      title: t.skills.categories.tools,
      skills: [
        { name: "VS Code", slug: "vscode" },
        { name: "Eclipse", slug: "eclipse" },
        { name: "Sublime", slug: "sublime" },
        { name: "IntelliJ IDEA", slug: "idea" },
        { name: "PyCharm", slug: "pycharm" },
        { name: "NPM", slug: "npm" },
        { name: "Yarn", slug: "yarn" },
        { name: "PNPM", slug: "pnpm" },
      ]
    }
  ];

  return (
    <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up text-center md:text-left">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            {t.skills.sectionTitle}
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8 mx-auto md:mx-0"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            {t.skills.heading}
          </h3>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h4 className="text-xl md:text-2xl font-display font-bold mb-8 text-center md:text-left border-b border-border/50 pb-2 inline-block">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-foreground/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={skill.customUrl || `https://skillicons.dev/icons?i=${skill.slug}`}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-all duration-300 opacity-90 group-hover:opacity-100"
                          onError={(e) => {
                            // Fallback if icon fails
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
