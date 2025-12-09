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
        { name: "React", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Sass", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Less", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" },
        { name: "Bootstrap", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Material UI", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "TypeScript", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      title: t.skills.categories.backend,
      skills: [
        { name: "Node.js", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "NestJS", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { name: "Java", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Python", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Django", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Kafka", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      ]
    },
    {
      title: t.skills.categories.cloudInfra,
      skills: [
        { name: "AWS", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Azure", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Heroku", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
        { name: "Netlify", customUrl: "https://cdn.simpleicons.org/netlify" },
        { name: "Railway", customUrl: "https://cdn.simpleicons.org/railway" },
      ]
    },
    {
      title: t.skills.categories.databases,
      skills: [
        { name: "MySQL", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQLite", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Oracle", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "MariaDB", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
        { name: "Sequelize", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
        { name: "Prisma", customUrl: "https://cdn.simpleicons.org/prisma" },
        { name: "SQLAlchemy", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
        { name: "Hibernate", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg" },
      ]
    },
    {
      title: t.skills.categories.devops,
      skills: [
        { name: "Docker", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Terraform", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Ansible", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
        { name: "Linux", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Bash", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "Helm", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
        { name: "ArgoCD", customUrl: "https://cdn.simpleicons.org/argo/EF7B4D" },
        { name: "GitHub Actions", customUrl: "https://cdn.simpleicons.org/githubactions" },
        { name: "Jenkins", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "GitLab", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "JMeter", customUrl: "https://cdn.simpleicons.org/apachejmeter" },
      ]
    },
    {
      title: t.skills.categories.dataScience,
      skills: [
        { name: "Pandas", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Numpy", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "TensorFlow", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "OpenCV", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      ]
    },
    {
      title: t.skills.categories.monitoring,
      skills: [
        { name: "Grafana", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
        { name: "Prometheus", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
        { name: "Elasticsearch", customUrl: "https://cdn.simpleicons.org/elasticsearch" },
        { name: "Splunk", customUrl: "https://cdn.simpleicons.org/splunk" },
        { name: "Instana", customUrl: "https://static.cdnlogo.com/logos/i/55/instana-inc.svg" },
      ]
    },
    {
      title: t.skills.categories.tools,
      skills: [
        { name: "VS Code", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Eclipse", customUrl: "https://cdn.simpleicons.org/eclipseide" },
        { name: "Sublime", customUrl: "https://cdn.simpleicons.org/sublimetext" },
        { name: "IntelliJ IDEA", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "PyCharm", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
        { name: "NPM", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Yarn", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
        { name: "PNPM", customUrl: "https://cdn.simpleicons.org/pnpm" },
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
                            // Fallback: show first letter of skill name
                            const img = e.target as HTMLImageElement;
                            const parent = img.parentElement;
                            if (parent && !parent.querySelector('.fallback-icon')) {
                              img.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'fallback-icon w-full h-full flex items-center justify-center bg-primary/10 rounded-lg text-primary font-bold text-lg';
                              fallback.textContent = skill.name.charAt(0).toUpperCase();
                              parent.appendChild(fallback);
                            }
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
