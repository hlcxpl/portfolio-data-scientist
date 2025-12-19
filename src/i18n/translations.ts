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
            role: 'Data Scientist | Data Analyst | Data Engineer',
            title: 'Ingeniero en Computación',
        },
        about: {
            sectionTitle: 'Sobre Mí',
            heading: 'Data Scientist | Data Analyst | Data Engineer',
            paragraph1: 'Ingeniero en Computación egresado de la Universidad Dr. Rafael Belloso Chacín (2012-2017). Actualmente en Santiago, Chile.',
            paragraph2: 'Profesional con experiencia en ciencia de datos, análisis estadístico y machine learning aplicado a diversos sectores como minería, banca y servicios digitales. Me especializo en transformar datos en insights accionables mediante análisis exploratorio, modelado predictivo y visualizaciones interactivas.',
            paragraph3: 'Domino tecnologías como Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL, Tableau, Apache Kafka y entornos cloud (Azure, AWS). Mi enfoque es extraer valor de los datos para impulsar decisiones estratégicas basadas en evidencia.',
            highlights: {
                webDev: {
                    title: 'Análisis de Datos',
                    description: 'Especializado en análisis exploratorio, limpieza de datos y generación de insights mediante Python y SQL.',
                },
                innovation: {
                    title: 'Machine Learning',
                    description: 'Desarrollo de modelos predictivos y algoritmos de ML para resolver problemas de negocio complejos.',
                },
                leadership: {
                    title: 'Visualización',
                    description: 'Creación de dashboards interactivos con Tableau y Plotly para comunicar resultados de forma efectiva.',
                },
            },
        },
        projects: {
            sectionTitle: 'Proyectos',
            heading: 'Proyectos de Data Science',
            codeButton: 'Código',
            demoButton: 'Ver Dashboard',
            projects: {
                dpyml1: {
                    title: 'DpyML-1: Primer Desafío Machine Learning',
                    description: 'Primer desafío de Machine Learning con Python. Análisis exploratorio de datos, preprocesamiento y construcción de modelos predictivos básicos.',
                },
                dpyml2: {
                    title: 'DpyML-2: Análisis y Modelado Avanzado',
                    description: 'Proyecto de análisis de datos y modelado con técnicas avanzadas de ML. Incluye feature engineering y optimización de hiperparámetros.',
                },
                dpyml3: {
                    title: 'DpyML-3: Clasificación y Regresión',
                    description: 'Implementación de algoritmos de clasificación y regresión. Evaluación de modelos con métricas de rendimiento y validación cruzada.',
                },
                dpyml4: {
                    title: 'DpyML-4: Aprendizaje No Supervisado',
                    description: 'Técnicas de clustering y reducción de dimensionalidad. Análisis de componentes principales (PCA) y segmentación de datos.',
                },
                dpyml5: {
                    title: 'DpyML-5: Series Temporales',
                    description: 'Análisis y predicción de series temporales. Modelos ARIMA, forecasting y detección de tendencias y estacionalidad.',
                },
                dpyml6: {
                    title: 'DpyML-6: Deep Learning Básico',
                    description: 'Introducción a redes neuronales con TensorFlow/Keras. Construcción de modelos de clasificación de imágenes y texto.',
                },
                dpyml7: {
                    title: 'DpyML-7: Proyecto Integrador ML',
                    description: 'Proyecto integrador aplicando múltiples técnicas de ML. Pipeline completo desde la ingesta de datos hasta el deployment del modelo.',
                },
                dpymlprueba: {
                    title: 'DpyML-Prueba: Evaluación Final',
                    description: 'Proyecto de evaluación final del programa de Machine Learning. Solución end-to-end de un problema de negocio real.',
                },
                tableau1: {
                    title: 'Tableau: Análisis de Ventas por Región',
                    description: 'Dashboard interactivo de análisis de ventas. Visualización de KPIs, tendencias temporales y distribución geográfica de ventas.',
                },
                tableau2: {
                    title: 'Tableau: Prueba Desafío Latam',
                    description: 'Dashboard de análisis de datos para Desafío Latam. Visualizaciones interactivas con filtros dinámicos y métricas clave.',
                },
                tableau3: {
                    title: 'Tableau: Dashboard Analítico Completo',
                    description: 'Dashboard analítico con múltiples vistas y KPIs. Integración de datos de múltiples fuentes y storytelling visual.',
                },
                mining: {
                    title: 'Mining Analytics Dashboard',
                    description: 'Dashboards interactivos con Dash (Plotly) para análisis operativo minero. Integración con Azure Data Lake y algoritmos de optimización.',
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
                'cert-16': {
                    title: 'SQL',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'Fundamentos de SQL, diseño de bases de datos relacionales y consultas básicas.',
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
            role: 'Data Scientist | Data Analyst | Data Engineer',
            title: 'Computer Engineer',
        },
        about: {
            sectionTitle: 'About Me',
            heading: 'Data Scientist | Data Analyst | Data Engineer',
            paragraph1: 'Computer Engineer graduated from Dr. Rafael Belloso Chacín University (2012-2017). Currently based in Santiago, Chile.',
            paragraph2: 'Professional with experience in data science, statistical analysis, and machine learning applied to various sectors including mining, banking, and digital services. I specialize in transforming data into actionable insights through exploratory analysis, predictive modeling, and interactive visualizations.',
            paragraph3: 'I master technologies such as Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL, Tableau, Apache Kafka, and cloud environments (Azure, AWS). My focus is to extract value from data to drive evidence-based strategic decisions.',
            highlights: {
                webDev: {
                    title: 'Data Analysis',
                    description: 'Specialized in exploratory analysis, data cleaning, and insight generation using Python and SQL.',
                },
                innovation: {
                    title: 'Machine Learning',
                    description: 'Development of predictive models and ML algorithms to solve complex business problems.',
                },
                leadership: {
                    title: 'Visualization',
                    description: 'Creating interactive dashboards with Tableau and Plotly to effectively communicate results.',
                },
            },
        },
        projects: {
            sectionTitle: 'Projects',
            heading: 'Data Science Projects',
            codeButton: 'Code',
            demoButton: 'View Dashboard',
            projects: {
                dpyml1: {
                    title: 'DpyML-1: First Machine Learning Challenge',
                    description: 'First Machine Learning challenge with Python. Exploratory data analysis, preprocessing, and building basic predictive models.',
                },
                dpyml2: {
                    title: 'DpyML-2: Advanced Analysis and Modeling',
                    description: 'Data analysis and modeling project with advanced ML techniques. Includes feature engineering and hyperparameter optimization.',
                },
                dpyml3: {
                    title: 'DpyML-3: Classification and Regression',
                    description: 'Implementation of classification and regression algorithms. Model evaluation with performance metrics and cross-validation.',
                },
                dpyml4: {
                    title: 'DpyML-4: Unsupervised Learning',
                    description: 'Clustering and dimensionality reduction techniques. Principal Component Analysis (PCA) and data segmentation.',
                },
                dpyml5: {
                    title: 'DpyML-5: Time Series',
                    description: 'Time series analysis and prediction. ARIMA models, forecasting, and trend and seasonality detection.',
                },
                dpyml6: {
                    title: 'DpyML-6: Basic Deep Learning',
                    description: 'Introduction to neural networks with TensorFlow/Keras. Building image and text classification models.',
                },
                dpyml7: {
                    title: 'DpyML-7: ML Integrator Project',
                    description: 'Integrator project applying multiple ML techniques. Complete pipeline from data ingestion to model deployment.',
                },
                dpymlprueba: {
                    title: 'DpyML-Test: Final Evaluation',
                    description: 'Final evaluation project for the Machine Learning program. End-to-end solution for a real business problem.',
                },
                tableau1: {
                    title: 'Tableau: Sales Analysis by Region',
                    description: 'Interactive sales analysis dashboard. Visualization of KPIs, temporal trends, and geographic distribution of sales.',
                },
                tableau2: {
                    title: 'Tableau: Desafío Latam Test',
                    description: 'Data analysis dashboard for Desafío Latam. Interactive visualizations with dynamic filters and key metrics.',
                },
                tableau3: {
                    title: 'Tableau: Complete Analytical Dashboard',
                    description: 'Analytical dashboard with multiple views and KPIs. Integration of data from multiple sources and visual storytelling.',
                },
                mining: {
                    title: 'Mining Analytics Dashboard',
                    description: 'Interactive dashboards with Dash (Plotly) for mining operational analysis. Integration with Azure Data Lake and optimization algorithms.',
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
                'cert-16': {
                    title: 'SQL',
                    issuer: 'Desafío Latam',
                    date: '2023',
                    description: 'SQL fundamentals, relational database design, and basic queries.',
                },
            },
        },
        profileCard: {
            status: 'Available',
            contactButton: 'Contact',
        },
    },
};
