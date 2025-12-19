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
      title: t.skills.categories.programming,
      skills: [
        { name: "Python", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", customUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
        { name: "R", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { name: "Scala", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
      ]
    },
    {
      title: t.skills.categories.dataScience,
      skills: [
        { name: "Pandas", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Scikit-learn", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "TensorFlow", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "LLMs & AI Models", customUrl: "https://cdn.simpleicons.org/openai" },
        { name: "Keras", customUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "PyTorch", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      ]
    },
    {
      title: t.skills.categories.analysis,
      skills: [
        { name: "Tableau", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
        { name: "Power BI", customUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Looker", customUrl: "https://cdn.simpleicons.org/looker" },
        { name: "Oracle Analytics", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "Matplotlib", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Seaborn", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Plotly", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" },
      ]
    },
    {
      title: t.skills.categories.cloudBigData,
      skills: [
        { name: "Pentaho", customUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pentaho_Logo_Vertical.svg/1200px-Pentaho_Logo_Vertical.svg.png" },
        { name: "Spark", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "Hadoop", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
        { name: "AWS", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Azure", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Databricks", customUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Databricks_Logo.png" },
      ]
    },
    {
      title: t.skills.categories.databases,
      skills: [
        { name: "PostgreSQL", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQL Server", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "Snowflake", customUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Snowflake_Logo.svg" },
      ]
    },
    {
      title: t.skills.categories.tools,
      skills: [
        { name: "Google Colab", customUrl: "https://cdn.simpleicons.org/googlecolab" },
        { name: "Jupyter", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Git", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VS Code", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Anaconda", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
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
