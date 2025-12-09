import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createBlendy } from "blendy";
import { useLanguage } from "@/contexts/LanguageContext";

// Import all certificate images
import cert1 from "@/assets/certificados/FT Movistar y SENCE - Diploma 40h.jpg";
import cert2 from "@/assets/certificados/Talento Futuro.png";
import cert3 from "@/assets/certificados/aprobacion-final-analisis-estadistico-con-python-g61-11661.png";
import cert4 from "@/assets/certificados/aprobacion-final-proyecto-final-g33-11661.png";
import cert5 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-analisis-estadistico-con-python-g61-11661.png";
import cert6 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-backend-con-node-y-express-g33-11661.png";
import cert7 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-css-avanzado-g33-11661.png";
import cert8 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g33-11661.png";
import cert9 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g33-11661 (1).png";
import cert10 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-programacion-con-python-para-el-analisis-de-datos-g61-11661.png";
import cert11 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-react-i-g33-11661.png";
import cert12 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-g33-11661.png";
import cert13 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-para-el-analisis-de-datos-g61-11661 (1).png";
import cert14 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-para-el-analisis-de-datos-g61-11661.png";
import cert15 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-visualizacion-y-comunicacion-de-insights-g61-11661 (1).png";
import cert16 from "@/assets/certificados/certificacion-aprobacion-de-carrera-nuevo-modelos-avanzados-y-redes-neuronales-g71-11661(3).png";
import cert17 from "@/assets/certificados/certificado-aprobacion-curso-curso-devops-senior-globant-11661(3).png";
import cert18 from "@/assets/certificados/certificado-aprobacion-de-modulo-nuevo-machine-learning-g71-11661(3).png";
import cert19 from "@/assets/certificados/certificado-aprobacion-de-modulo-nuevo-modelos-avanzados-y-redes-neuronales-g71-11661(3).png";
import cert20 from "@/assets/certificados/dc570247381cb710aa7ec38e406d3001c1dbd799.jpg";
import cert21 from "@/assets/certificados/react-ii-g33-11661.png";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    link: string;
}

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const blendyRef = useRef<any>(null);
    const { t } = useLanguage();

    useEffect(() => {
        blendyRef.current = createBlendy({ animation: 'dynamic' });
    }, []);

    useLayoutEffect(() => {
        if (selectedCert) {
            blendyRef.current.toggle(selectedCert.id);
        }
    }, [selectedCert]);

    const handleCertClick = (cert: Certificate) => {
        setSelectedCert(cert);
    };

    const handleClose = () => {
        if (selectedCert) {
            blendyRef.current.untoggle(selectedCert.id, () => {
                setSelectedCert(null);
            });
        }
    };

    const certificates: Certificate[] = [
        {
            id: "cert-1",
            title: t.certificates.items['cert-1'].title,
            issuer: t.certificates.items['cert-1'].issuer,
            date: t.certificates.items['cert-1'].date,
            description: t.certificates.items['cert-1'].description,
            image: cert17,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-2",
            title: t.certificates.items['cert-2'].title,
            issuer: t.certificates.items['cert-2'].issuer,
            date: t.certificates.items['cert-2'].date,
            description: t.certificates.items['cert-2'].description,
            image: cert18,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-3",
            title: t.certificates.items['cert-3'].title,
            issuer: t.certificates.items['cert-3'].issuer,
            date: t.certificates.items['cert-3'].date,
            description: t.certificates.items['cert-3'].description,
            image: cert19,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-4",
            title: t.certificates.items['cert-4'].title,
            issuer: t.certificates.items['cert-4'].issuer,
            date: t.certificates.items['cert-4'].date,
            description: t.certificates.items['cert-4'].description,
            image: cert16,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-5",
            title: t.certificates.items['cert-5'].title,
            issuer: t.certificates.items['cert-5'].issuer,
            date: t.certificates.items['cert-5'].date,
            description: t.certificates.items['cert-5'].description,
            image: cert3,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-6",
            title: t.certificates.items['cert-6'].title,
            issuer: t.certificates.items['cert-6'].issuer,
            date: t.certificates.items['cert-6'].date,
            description: t.certificates.items['cert-6'].description,
            image: cert10,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-7",
            title: t.certificates.items['cert-7'].title,
            issuer: t.certificates.items['cert-7'].issuer,
            date: t.certificates.items['cert-7'].date,
            description: t.certificates.items['cert-7'].description,
            image: cert13,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-8",
            title: t.certificates.items['cert-8'].title,
            issuer: t.certificates.items['cert-8'].issuer,
            date: t.certificates.items['cert-8'].date,
            description: t.certificates.items['cert-8'].description,
            image: cert15,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-9",
            title: t.certificates.items['cert-9'].title,
            issuer: t.certificates.items['cert-9'].issuer,
            date: t.certificates.items['cert-9'].date,
            description: t.certificates.items['cert-9'].description,
            image: cert4,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-10",
            title: t.certificates.items['cert-10'].title,
            issuer: t.certificates.items['cert-10'].issuer,
            date: t.certificates.items['cert-10'].date,
            description: t.certificates.items['cert-10'].description,
            image: cert6,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-11",
            title: t.certificates.items['cert-11'].title,
            issuer: t.certificates.items['cert-11'].issuer,
            date: t.certificates.items['cert-11'].date,
            description: t.certificates.items['cert-11'].description,
            image: cert11,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-12",
            title: t.certificates.items['cert-12'].title,
            issuer: t.certificates.items['cert-12'].issuer,
            date: t.certificates.items['cert-12'].date,
            description: t.certificates.items['cert-12'].description,
            image: cert21,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-13",
            title: t.certificates.items['cert-13'].title,
            issuer: t.certificates.items['cert-13'].issuer,
            date: t.certificates.items['cert-13'].date,
            description: t.certificates.items['cert-13'].description,
            image: cert9,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-14",
            title: t.certificates.items['cert-14'].title,
            issuer: t.certificates.items['cert-14'].issuer,
            date: t.certificates.items['cert-14'].date,
            description: t.certificates.items['cert-14'].description,
            image: cert7,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-15",
            title: t.certificates.items['cert-15'].title,
            issuer: t.certificates.items['cert-15'].issuer,
            date: t.certificates.items['cert-15'].date,
            description: t.certificates.items['cert-15'].description,
            image: cert8,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-16",
            title: t.certificates.items['cert-16'].title,
            issuer: t.certificates.items['cert-16'].issuer,
            date: t.certificates.items['cert-16'].date,
            description: t.certificates.items['cert-16'].description,
            image: cert12,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-17",
            title: t.certificates.items['cert-17'].title,
            issuer: t.certificates.items['cert-17'].issuer,
            date: t.certificates.items['cert-17'].date,
            description: t.certificates.items['cert-17'].description,
            image: cert2,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-18",
            title: t.certificates.items['cert-18'].title,
            issuer: t.certificates.items['cert-18'].issuer,
            date: t.certificates.items['cert-18'].date,
            description: t.certificates.items['cert-18'].description,
            image: cert1,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-19",
            title: t.certificates.items['cert-19'].title,
            issuer: t.certificates.items['cert-19'].issuer,
            date: t.certificates.items['cert-19'].date,
            description: t.certificates.items['cert-19'].description,
            image: cert20,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-20",
            title: t.certificates.items['cert-20'].title,
            issuer: t.certificates.items['cert-20'].issuer,
            date: t.certificates.items['cert-20'].date,
            description: t.certificates.items['cert-20'].description,
            image: cert5,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-21",
            title: t.certificates.items['cert-21'].title,
            issuer: t.certificates.items['cert-21'].issuer,
            date: t.certificates.items['cert-21'].date,
            description: t.certificates.items['cert-21'].description,
            image: cert14,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        }
    ];

    return (
        <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 relative">
            <BackgroundParticles />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12 md:mb-20 animate-fade-in-up text-center md:text-left">
                    <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        {t.certificates.sectionTitle}
                    </h2>
                    <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8 mx-auto md:mx-0"></div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                        {t.certificates.heading}
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-foreground/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col animate-fade-in-up cursor-pointer"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => handleCertClick(cert)}
                        >
                            {/* Certificate Image - Source for Blendy */}
                            <div
                                className="relative overflow-hidden aspect-[4/3] bg-white dark:bg-gray-100"
                                data-blendy-from={cert.id}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-3">
                                    <h4 className="text-lg md:text-xl font-display font-bold mb-1 text-foreground line-clamp-2">
                                        {cert.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <p className="text-xs text-muted-foreground mb-1">
                                    {cert.date}
                                </p>

                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expanded Certificate Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
                    <div
                        className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl mt-20 md:mt-0"
                        onClick={(e) => e.stopPropagation()}
                        data-blendy-to={selectedCert.id}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 left-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors pointer-events-auto"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                            <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="max-w-full max-h-[70vh] object-contain shadow-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-background">
                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-lg text-primary font-medium mb-6">
                                    {selectedCert.issuer}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.certificates.modalDate}</h4>
                                        <p>{selectedCert.date}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.certificates.modalDescription}</h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedCert.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        className="w-full"
                                        onClick={() => window.open(selectedCert.link, '_blank')}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        {t.certificates.viewButton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
