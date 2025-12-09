export type Language = 'es' | 'en';

export interface Translations {
    navigation: {
        home: string;
        about: string;
        projects: string;
        skills: string;
        contact: string;
        certificates: string;
        lightMode: string;
        darkMode: string;
    };
    hero: {
        role: string;
        title: string;
    };
    about: {
        sectionTitle: string;
        heading: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        highlights: {
            webDev: {
                title: string;
                description: string;
            };
            innovation: {
                title: string;
                description: string;
            };
            leadership: {
                title: string;
                description: string;
            };
        };
    };
    projects: {
        sectionTitle: string;
        heading: string;
        codeButton: string;
        demoButton: string;
        projects: {
            [key: string]: {
                title: string;
                description: string;
            };
        };
    };
    skills: {
        sectionTitle: string;
        heading: string;
        categories: {
            frontend: string;
            backend: string;
            cloudInfra: string;
            databases: string;
            devops: string;
            dataScience: string;
            monitoring: string;
            tools: string;
        };
    };
    contact: {
        sectionTitle: string;
        heading: string;
        intro: string;
        labels: {
            email: string;
            location: string;
            github: string;
            linkedin: string;
        };
        form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            submit: string;
            submitting: string;
        };
        toast: {
            successTitle: string;
            successDescription: string;
            errorTitle: string;
            errorDescription: string;
        };
        copyright: string;
    };
    certificates: {
        sectionTitle: string;
        heading: string;
        viewButton: string;
        modalDate: string;
        modalDescription: string;
        items: {
            [key: string]: {
                title: string;
                issuer: string;
                date: string;
                description: string;
            };
        };
    };
    profileCard: {
        status: string;
        contactButton: string;
    };
}

export const translations: Record<Language, Translations> = {
    es: {
        navigation: {
            home: 'Inicio',
            about: 'Sobre Mí',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
            certificates: 'Certificados',
            lightMode: 'Modo Claro',
            darkMode: 'Modo Oscuro',
        },
        hero: {
            role: 'Desarrollador Fullstack | Devops | Data Scientist',
            title: 'Ingeniero en Computación',
        },
        about: {
            sectionTitle: 'Sobre Mí',
            heading: 'Full Stack Developer | DevOps | Data Scientist',
            paragraph1: 'Ingeniero en Computación egresado de la Universidad Dr. Rafael Belloso Chacín (2012-2017). Actualmente en Santiago, Chile.',
            paragraph2: 'Profesional con más de 6+ años de experiencia profesional desarrollando soluciones tecnológicas escalables para distintos sectores, incluyendo minería, banca y servicios digitales. He trabajado en la construcción de plataformas web, automatización de procesos y despliegues en la nube, integrando buenas prácticas de arquitectura, seguridad y rendimiento.',
            paragraph3: 'Domino tecnologías como React, Node.js, Python, Java, Docker, Kubernetes, GitHub Actions, Jenkins, Kafka y entornos cloud (Azure, AWS, Cloudflare). Mi enfoque es entregar soluciones robustas, eficientes y orientadas a la experiencia del usuario.',
            highlights: {
                webDev: {
                    title: 'Desarrollo Web',
                    description: 'Especializado en crear aplicaciones web modernas y escalables con las últimas tecnologías.',
                },
                innovation: {
                    title: 'Innovación',
                    description: 'Siempre buscando nuevas formas de resolver problemas y optimizar procesos.',
                },
                leadership: {
                    title: 'Liderazgo',
                    description: 'Experiencia liderando equipos y proyectos de desarrollo en el sector privado.',
                },
            },
        },
        projects: {
            sectionTitle: 'Proyectos',
            heading: 'Trabajos Destacados',
            codeButton: 'Código',
            demoButton: 'Ver Demo',
            projects: {
                parkfacil: {
                    title: 'ParkFacil - Gestión de Estacionamientos',
                    description: 'Plataforma completa para optimizar la administración de estacionamientos. Incluye módulos de reportería, gestión de datos SQL Server, y CI/CD con GitHub Actions.',
                },
                culligan: {
                    title: 'Culligan Water - Suite de Aplicaciones',
                    description: 'Desarrollo de múltiples herramientas: 4DX para OKRs, sistema de inventario de dispensadores, módulo de contabilidad de activos, planificación de rutas y sistema de bonificaciones para técnicos.',
                },
                iot: {
                    title: 'IoT Mining Platform - Global Conexus',
                    description: 'Plataforma IoT para telemetría de equipos mineros. Procesamiento de datos en tiempo real con Apache Kafka, dashboards React y servicios backend en Java.',
                },
                mining: {
                    title: 'Mining Analytics Dashboard',
                    description: 'Dashboards interactivos con Dash (Plotly) para análisis operativo minero. Integración con Azure Data Lake y algoritmos de optimización para planes de excavadoras.',
                },
                cognitiva: {
                    title: 'Cognitiva - Plataforma de Agentes IA',
                    description: 'Plataforma de gestión de campañas con agentes conversacionales personalizables. Integración con Watson Assistant, Rasa NLU y OpenAI APIs.',
                },
                elk: {
                    title: 'ELK Stack Monitoring - WISE VISION',
                    description: 'Clusters de Elasticsearch para monitoreo en tiempo real de servicios e infraestructura. Configuración de índices, alertas con Logstash, FluentBit y Kibana.',
                },
                devops: {
                    title: 'DevOps Portfolio & CI/CD',
                    description: 'Portafolio de proyectos DevOps: ArgoCD GitOps, Kubernetes, Docker, infraestructura como código, y pipelines automatizados con GitHub Actions.',
                },
                telefruver: {
                    title: 'TeleFruver FruitFlow',
                    description: 'Sistema de gestión y logística para distribución de frutas. Frontend desarrollado en TypeScript con arquitectura escalable.',
                },
                django: {
                    title: 'Django Auto Motor App',
                    description: 'Aplicación web Django para gestión de inventario automotriz. Sistema completo de administración con panel de control y reportes.',
                },
            },
        },
        skills: {
            sectionTitle: 'Habilidades',
            heading: 'Stack Tecnológico',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                cloudInfra: 'Cloud e Infraestructura',
                databases: 'Bases de Datos y ORMs',
                devops: 'DevOps y Automatización',
                dataScience: 'Data Science e IA',
                monitoring: 'Monitoreo',
                tools: 'Herramientas e IDEs',
            },
        },
        contact: {
            sectionTitle: 'Contacto',
            heading: 'Trabajemos Juntos',
            intro: '¿Tienes un proyecto en mente? Estoy disponible para nuevos desafíos y oportunidades de colaboración.',
            labels: {
                email: 'Email',
                location: 'Ubicación',
                github: 'GitHub',
                linkedin: 'LinkedIn',
            },
            form: {
                name: 'Nombre',
                namePlaceholder: 'Tu nombre',
                email: 'Email',
                emailPlaceholder: 'tu@email.com',
                message: 'Mensaje',
                messagePlaceholder: '¿En qué puedo ayudarte?',
                submit: 'Enviar Mensaje',
                submitting: 'Enviando...',
            },
            toast: {
                successTitle: 'Mensaje enviado',
                successDescription: 'Gracias por contactarme. Te responderé pronto.',
                errorTitle: 'Error al enviar',
                errorDescription: 'Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.',
            },
            copyright: 'Created by Luis Omar Sánchez',
        },
        certificates: {
            sectionTitle: 'Certificaciones',
            heading: 'Logros y Certificaciones',
            viewButton: 'Ver en LinkedIn',
            modalDate: 'Fecha',
            modalDescription: 'Descripción',
            items: {
                'cert-1': {
                    title: 'DevOps Senior',
                    issuer: 'Globant',
                    date: '2024',
                    description: 'Certificación avanzada en prácticas DevOps, CI/CD, automatización y gestión de infraestructura cloud.',
                },
                'cert-2': {
                    title: 'Machine Learning',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Fundamentos de Machine Learning, algoritmos supervisados y no supervisados, y aplicaciones prácticas.',
                },
                'cert-3': {
                    title: 'Modelos Avanzados y Redes Neuronales',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Deep Learning, redes neuronales convolucionales, recurrentes y arquitecturas avanzadas.',
                },
                'cert-4': {
                    title: 'Carrera Data Science',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Programa completo de Data Science incluyendo análisis estadístico, machine learning y visualización.',
                },
                'cert-5': {
                    title: 'Análisis Estadístico con Python',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Análisis estadístico avanzado utilizando Python, Pandas, NumPy y bibliotecas de visualización.',
                },
                'cert-6': {
                    title: 'Programación con Python para Análisis de Datos',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Fundamentos de Python aplicados al análisis de datos y procesamiento de información.',
                },
                'cert-7': {
                    title: 'SQL para Análisis de Datos',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Consultas SQL avanzadas, optimización de queries y análisis de bases de datos relacionales.',
                },
                'cert-8': {
                    title: 'Visualización y Comunicación de Insights',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Técnicas de visualización de datos y comunicación efectiva de resultados analíticos.',
                },
                'cert-9': {
                    title: 'Proyecto Final Fullstack',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Desarrollo completo de aplicación fullstack integrando frontend, backend y base de datos.',
                },
                'cert-10': {
                    title: 'Backend con Node y Express',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Desarrollo de APIs RESTful con Node.js y Express, autenticación y manejo de bases de datos.',
                },
                'cert-11': {
                    title: 'React I',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Fundamentos de React: componentes, hooks, estado y ciclo de vida de aplicaciones.',
                },
                'cert-12': {
                    title: 'React II',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'React avanzado: Context API, optimización, patrones de diseño y mejores prácticas.',
                },
                'cert-13': {
                    title: 'JavaScript para la Web',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'JavaScript moderno, manipulación del DOM, eventos y programación asíncrona.',
                },
                'cert-14': {
                    title: 'CSS Avanzado',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'CSS3 avanzado, Flexbox, Grid, animaciones y diseño responsive.',
                },
                'cert-15': {
                    title: 'Introducción al Desarrollo Web',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Fundamentos de desarrollo web: HTML, CSS, y principios de diseño web.',
                },
                'cert-16': {
                    title: 'SQL',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Fundamentos de SQL, diseño de bases de datos relacionales y consultas básicas.',
                },
                'cert-17': {
                    title: 'Talento Futuro',
                    issuer: 'Movistar & SENCE',
                    date: '2023',
                    description: 'Programa de formación en tecnologías digitales y desarrollo de habilidades técnicas.',
                },
                'cert-18': {
                    title: 'Diploma 40 horas',
                    issuer: 'Movistar & SENCE',
                    date: '2023',
                    description: 'Formación técnica intensiva en desarrollo de software y tecnologías web.',
                },
                'cert-19': {
                    title: 'Certificación Profesional',
                    issuer: 'Institución Certificadora',
                    date: '2023',
                    description: 'Certificación profesional en desarrollo de software y mejores prácticas de la industria.',
                },
                'cert-20': {
                    title: 'Análisis Estadístico con Python - Módulos',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Módulos complementarios de análisis estadístico y procesamiento de datos.',
                },
                'cert-21': {
                    title: 'SQL para Análisis de Datos - Avanzado',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Técnicas avanzadas de SQL para análisis de datos complejos y optimización.',
                },
            },
        },
        profileCard: {
            status: 'Disponible',
            contactButton: 'Contactar',
        },
    },
    en: {
        navigation: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            certificates: 'Certificates',
            lightMode: 'Light Mode',
            darkMode: 'Dark Mode',
        },
        hero: {
            role: 'Fullstack Developer | DevOps | Data Scientist',
            title: 'Computer Engineer',
        },
        about: {
            sectionTitle: 'About Me',
            heading: 'Full Stack Developer | DevOps | Data Scientist',
            paragraph1: 'Computer Engineer graduated from Dr. Rafael Belloso Chacín University (2012-2017). Currently based in Santiago, Chile.',
            paragraph2: 'Professional with over 6+ years of experience developing scalable technological solutions for various sectors, including mining, banking, and digital services. I have worked on building web platforms, process automation, and cloud deployments, integrating best practices in architecture, security, and performance.',
            paragraph3: 'I master technologies such as React, Node.js, Python, Java, Docker, Kubernetes, GitHub Actions, Jenkins, Kafka, and cloud environments (Azure, AWS, Cloudflare). My focus is to deliver robust, efficient, and user-experience-oriented solutions.',
            highlights: {
                webDev: {
                    title: 'Web Development',
                    description: 'Specialized in creating modern and scalable web applications with the latest technologies.',
                },
                innovation: {
                    title: 'Innovation',
                    description: 'Always looking for new ways to solve problems and optimize processes.',
                },
                leadership: {
                    title: 'Leadership',
                    description: 'Experience leading development teams and projects in the private sector.',
                },
            },
        },
        projects: {
            sectionTitle: 'Projects',
            heading: 'Featured Work',
            codeButton: 'Code',
            demoButton: 'View Demo',
            projects: {
                parkfacil: {
                    title: 'ParkFacil - Parking Management',
                    description: 'Complete platform to optimize parking lot administration. Includes reporting modules, SQL Server data management, and CI/CD with GitHub Actions.',
                },
                culligan: {
                    title: 'Culligan Water - Application Suite',
                    description: 'Development of multiple tools: 4DX for OKRs, dispenser inventory system, asset accounting module, route planning, and technician bonus system.',
                },
                iot: {
                    title: 'IoT Mining Platform - Global Conexus',
                    description: 'IoT platform for mining equipment telemetry. Real-time data processing with Apache Kafka, React dashboards, and Java backend services.',
                },
                mining: {
                    title: 'Mining Analytics Dashboard',
                    description: 'Interactive dashboards with Dash (Plotly) for mining operational analysis. Integration with Azure Data Lake and optimization algorithms for excavator plans.',
                },
                cognitiva: {
                    title: 'Cognitiva - AI Agents Platform',
                    description: 'Campaign management platform with customizable conversational agents. Integration with Watson Assistant, Rasa NLU, and OpenAI APIs.',
                },
                elk: {
                    title: 'ELK Stack Monitoring - WISE VISION',
                    description: 'Elasticsearch clusters for real-time service and infrastructure monitoring. Index configuration, alerts with Logstash, FluentBit, and Kibana.',
                },
                devops: {
                    title: 'DevOps Portfolio & CI/CD',
                    description: 'DevOps project portfolio: ArgoCD GitOps, Kubernetes, Docker, infrastructure as code, and automated pipelines with GitHub Actions.',
                },
                telefruver: {
                    title: 'TeleFruver FruitFlow',
                    description: 'Management and logistics system for fruit distribution. Frontend developed in TypeScript with scalable architecture.',
                },
                django: {
                    title: 'Django Auto Motor App',
                    description: 'Django web application for automotive inventory management. Complete administration system with control panel and reports.',
                },
            },
        },
        skills: {
            sectionTitle: 'Skills',
            heading: 'Technology Stack',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                cloudInfra: 'Cloud & Infra',
                databases: 'Databases & ORMs',
                devops: 'DevOps & Automation',
                dataScience: 'Data Science & AI',
                monitoring: 'Monitoring',
                tools: 'Tools & IDEs',
            },
        },
        contact: {
            sectionTitle: 'Contact',
            heading: "Let's Work Together",
            intro: 'Do you have a project in mind? I am available for new challenges and collaboration opportunities.',
            labels: {
                email: 'Email',
                location: 'Location',
                github: 'GitHub',
                linkedin: 'LinkedIn',
            },
            form: {
                name: 'Name',
                namePlaceholder: 'Your name',
                email: 'Email',
                emailPlaceholder: 'your@email.com',
                message: 'Message',
                messagePlaceholder: 'How can I help you?',
                submit: 'Send Message',
                submitting: 'Sending...',
            },
            toast: {
                successTitle: 'Message sent',
                successDescription: 'Thank you for contacting me. I will respond soon.',
                errorTitle: 'Error sending',
                errorDescription: 'There was a problem sending the message. Please try again.',
            },
            copyright: 'Created by Luis Omar Sánchez',
        },
        certificates: {
            sectionTitle: 'Certifications',
            heading: 'Achievements and Certifications',
            viewButton: 'View on LinkedIn',
            modalDate: 'Date',
            modalDescription: 'Description',
            items: {
                'cert-1': {
                    title: 'Senior DevOps',
                    issuer: 'Globant',
                    date: '2024',
                    description: 'Advanced certification in DevOps practices, CI/CD, automation, and cloud infrastructure management.',
                },
                'cert-2': {
                    title: 'Machine Learning',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Machine Learning fundamentals, supervised and unsupervised algorithms, and practical applications.',
                },
                'cert-3': {
                    title: 'Advanced Models and Neural Networks',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Deep Learning, convolutional neural networks, recurrent networks, and advanced architectures.',
                },
                'cert-4': {
                    title: 'Data Science Career',
                    issuer: 'Desafío Latam',
                    date: '2024',
                    description: 'Complete Data Science program including statistical analysis, machine learning, and visualization.',
                },
                'cert-5': {
                    title: 'Statistical Analysis with Python',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Advanced statistical analysis using Python, Pandas, NumPy, and visualization libraries.',
                },
                'cert-6': {
                    title: 'Python Programming for Data Analysis',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Python fundamentals applied to data analysis and information processing.',
                },
                'cert-7': {
                    title: 'SQL for Data Analysis',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Advanced SQL queries, query optimization, and relational database analysis.',
                },
                'cert-8': {
                    title: 'Visualization and Insights Communication',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Data visualization techniques and effective communication of analytical results.',
                },
                'cert-9': {
                    title: 'Fullstack Final Project',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Complete development of fullstack application integrating frontend, backend, and database.',
                },
                'cert-10': {
                    title: 'Backend with Node and Express',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'RESTful API development with Node.js and Express, authentication, and database management.',
                },
                'cert-11': {
                    title: 'React I',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'React fundamentals: components, hooks, state, and application lifecycle.',
                },
                'cert-12': {
                    title: 'React II',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Advanced React: Context API, optimization, design patterns, and best practices.',
                },
                'cert-13': {
                    title: 'JavaScript for the Web',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Modern JavaScript, DOM manipulation, events, and asynchronous programming.',
                },
                'cert-14': {
                    title: 'Advanced CSS',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Advanced CSS3, Flexbox, Grid, animations, and responsive design.',
                },
                'cert-15': {
                    title: 'Introduction to Web Development',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Web development fundamentals: HTML, CSS, and web design principles.',
                },
                'cert-16': {
                    title: 'SQL',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'SQL fundamentals, relational database design, and basic queries.',
                },
                'cert-17': {
                    title: 'Future Talent',
                    issuer: 'Movistar & SENCE',
                    date: '2023',
                    description: 'Training program in digital technologies and technical skills development.',
                },
                'cert-18': {
                    title: '40-Hour Diploma',
                    issuer: 'Movistar & SENCE',
                    date: '2023',
                    description: 'Intensive technical training in software development and web technologies.',
                },
                'cert-19': {
                    title: 'Professional Certification',
                    issuer: 'Certifying Institution',
                    date: '2023',
                    description: 'Professional certification in software development and industry best practices.',
                },
                'cert-20': {
                    title: 'Statistical Analysis with Python - Modules',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Complementary modules in statistical analysis and data processing.',
                },
                'cert-21': {
                    title: 'SQL for Data Analysis - Advanced',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Advanced SQL techniques for complex data analysis and optimization.',
                },
            },
        },
        profileCard: {
            status: 'Available',
            contactButton: 'Contact',
        },
    },
};
