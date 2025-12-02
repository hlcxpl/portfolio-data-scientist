import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import SubtleParticles from "./SubtleParticles";
import profileImage from "@/assets/Luis_2.png";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {

  return (
    <section className="relative min-h-full flex flex-col lg:flex-row">
      {/* Left side - Light background with image and particles */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-[#f5f5f5] relative flex items-center justify-center min-h-[50vh] lg:min-h-full">
        <SubtleParticles />
        <div className="relative z-10 p-8 md:p-12">
          {/* Animated gradient border container */}
          <div className="relative group">
            {/* Rotating gradient border - Elegant gray tones */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-1000 animate-[rotate-gradient_8s_linear_infinite]"></div>

            {/* Pulse effect ring - Elegant gray tones */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300 rounded-full opacity-0 group-hover:animate-[pulse-glow_2s_ease-in-out_infinite]"></div>

            {/* Image container */}
            <div className="relative bg-white dark:bg-[#f5f5f5] rounded-full p-2">
              <img
                src={profileImage}
                alt="Luis Omar Sánchez"
                className="w-full max-w-xs md:max-w-md mx-auto rounded-full 
                          group-hover:scale-105 transition-all duration-700 ease-out
                          shadow-2xl group-hover:shadow-[0_0_40px_rgba(100,100,100,0.5)]
                          dark:group-hover:shadow-[0_0_40px_rgba(200,200,200,0.6)]"
              />
            </div>
          </div>
        </div>



        {/* Social Icons */}
        <div className="absolute bottom-[2px] left-6 md:left-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-8 flex flex-row gap-3 md:gap-4">
          <a
            href="https://github.com/hlcxpl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/60 hover:text-black transition-colors p-0 md:p-0"
          >
            <Github className="h-5 w-5 md:h-5 md:w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/luisomarsanchezdiaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/60 hover:text-black transition-colors p-0 md:p-0"
          >
            <Linkedin className="h-5 w-5 md:h-5 md:w-5" />
          </a>
          <a
            href="mailto:hlcxpl@gmail.com"
            className="text-black/60 hover:text-black transition-colors p-0 md:p-0"
          >
            <Mail className="h-5 w-5 md:h-5 md:w-5" />
          </a>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 md:p-12 lg:p-20 min-h-[50vh] lg:min-h-full">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 md:mb-8 leading-[0.9] tracking-tight">
            LUIS OMAR
            <br />
            SÁNCHEZ
          </h1>
          <div className="mb-8 md:mb-12">
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              Desarrollador Fullstack | Devops | Data Scientist
            </p>
            <p className="text-xl md:text-2xl font-display font-semibold">
              Ingeniero en Computación
            </p>
          </div>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-sm md:text-base px-8 md:px-10 py-5 md:py-6 rounded-none font-medium tracking-wide w-full md:w-auto"
            onClick={() => onNavigate("contact")}
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
