import { GraduationCap, Code, Briefcase } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const highlights = [
    {
      icon: GraduationCap,
      title: t.about.highlights.webDev.title,
      description: t.about.highlights.webDev.description
    },
    {
      icon: Code,
      title: t.about.highlights.innovation.title,
      description: t.about.highlights.innovation.description
    },
    {
      icon: Briefcase,
      title: t.about.highlights.leadership.title,
      description: t.about.highlights.leadership.description
    }
  ];

  return (
    <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            {t.about.sectionTitle}
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8">
            {t.about.heading}
          </h3>
        </div>

        <div className="space-y-5 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-12 md:mb-20">
          <p>
            {t.about.paragraph1}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t.about.paragraph2.replace('6+ años de experiencia profesional', '<span class="font-semibold text-foreground">6+ años de experiencia profesional</span>').replace('6+ years of experience', '<span class="font-semibold text-foreground">6+ years of experience</span>') }} />
          <p>
            {t.about.paragraph3}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group"
              >
                <div className="mb-4 md:mb-6">
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
