import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  Code2,
  Download,
  ExternalLink,
  FlaskConical,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const links = ['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Skills', 'Certifications', 'Achievements', 'Contact'];

const projects = [
  {
    number: '01',
    title: 'WEATHER — Weather Events & Anomaly Tracker Hub',
    description: 'Developed a weather monitoring and anomaly-tracking project using Kaggle weather data, Python-based exploratory data analysis, and Power BI dashboards.',
    technologies: ['Python', 'Power BI', 'Kaggle'],
    period: 'August 2025 – September 2025',
    highlights: ['Python EDA', 'Weather Anomalies', 'Power BI Dashboard', 'Seasonal Analysis'],
    details: [
      {
        heading: 'Project Overview',
        description: 'Developed a weather monitoring and anomaly-tracking project using Kaggle weather data, Python-based exploratory data analysis, and Power BI dashboards.',
      },
      {
        heading: 'Objective',
        description: 'Monitor temperature and rainfall patterns, identify weather anomaly events, and highlight potential risk periods to provide insights that can support agricultural planning.',
      },
      {
        heading: 'Dataset / Data Source',
        description: 'Kaggle weather data.',
      },
      {
        heading: 'Tools & Technologies',
        description: 'Python, Power BI, and Kaggle weather data.',
      },
      {
        heading: 'Analysis Performed',
        description: 'Performed exploratory data analysis using Python; monitored temperature and rainfall patterns; and identified weather anomaly events such as heatwaves and storms.',
      },
      {
        heading: 'Dashboard & Visualization',
        description: 'Used Power BI dashboards to visualize seasonal trends and anomalies and highlight potential risk periods.',
      },
      {
        heading: 'Applications',
        description: 'Insights that can support agricultural planning.',
      },
      {
        heading: 'Project Timeline',
        description: 'August 2025 – September 2025.',
      },
    ],
  },
  {
    number: '02',
    title: 'AQI Anomaly Detection & Statistical Process Monitoring',
    description: 'Developed during research internship using RVM, log-odds transformation and EWMA control charts, with ARL-based performance analysis and different smoothing parameters in Python.',
    technologies: ['Python', 'RVM', 'EWMA', 'ARL'],
    role: 'Research intern',
  },
  {
    number: '03',
    title: 'Unsupervised Learning with Dimensionality Reduction & Clustering',
    description: 'Data science internship project involving Python-based preprocessing, dimensionality reduction and clustering analysis.',
    technologies: ['Python', 'Clustering', 'Dimensionality Reduction', 'Unsupervised Learning'],
    role: 'Data science intern',
    github: 'https://github.com/Payal-hub2004/Copy-of-10-Unsupervised_Learning_with_Dimensionality_Reduction_and_Clustering_Spring_2026',
  },
  {
    number: '04',
    title: 'Brain Tumor Detection Using MRI Images',
    description: 'Developed a deep learning-based system to classify brain MRI images into four categories: Glioma, Meningioma, Pituitary Tumor, and No Tumor.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'EfficientNetB0', 'DenseNet121', 'Transfer Learning', 'Grad-CAM', 'Google Colab', 'Gradio', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'OpenCV'],
    period: 'August 2026',
    projectType: 'Academic Group Project',
    demo: 'https://556d0c14c4db2432b1.gradio.live/',
    details: [
      {
        heading: 'Project Overview',
        description: 'Developed a deep learning-based system to classify brain MRI images into four categories: Glioma, Meningioma, Pituitary Tumor, and No Tumor.',
      },
      {
        heading: 'Dataset',
        description: 'Used a dataset of 7,200 brain MRI images across four classes: Glioma, Meningioma, Pituitary Tumor, and No Tumor.',
      },
      {
        heading: 'Model Development',
        description: 'Developed a Custom CNN and applied transfer learning using EfficientNetB0 and DenseNet121.',
      },
      {
        heading: 'Explainable AI',
        description: 'Used Grad-CAM to generate explainable AI visualizations for model predictions.',
      },
      {
        heading: 'Model Evaluation',
        description: 'Evaluated models using accuracy, precision, recall, F1-score, and confusion matrices.',
      },
      {
        heading: 'Final Model Results',
        description: 'Fine-tuned EfficientNetB0 achieved 81.63% test accuracy and a macro F1-score of 0.8087.',
      },
      {
        heading: 'Interactive Application',
        description: 'Developed an interactive Gradio application for MRI image classification.',
      },
      {
        heading: 'Project Type',
        description: 'Academic Group Project.',
      },
    ],
  },
];

const experiences = [
  {
    number: '01',
    role: 'Research Intern',
    organization: 'Indian Statistical Institute',
    location: 'Bengaluru',
    duration: 'April 2026 – August 2026',
    description: 'Worked on an AQI anomaly-detection framework using RVM, log-odds transformation and EWMA control charts. Analyzed EWMA performance using Average Run Length (ARL) and smoothing parameters in Python.',
    certificate: '/certificates/isi-research-internship-completion.pdf',
    methods: ['Python', 'RVM', 'Log-Odds Transformation', 'EWMA Control Charts', 'ARL Analysis'],
    responsibilities: [
      'Worked on an AQI anomaly-detection framework using RVM, log-odds transformation and EWMA control charts.',
      'Analyzed EWMA performance using Average Run Length (ARL) and smoothing parameters in Python.',
    ],
  },
  {
    number: '02',
    role: 'Data Science Intern',
    organization: 'IDEAS-TIH, Indian Statistical Institute',
    location: 'Kolkata',
    duration: 'January 2026 – February 2026',
    project: 'Unsupervised Learning with Dimensionality Reduction and Clustering',
    description: 'Worked on data preprocessing, dimensionality reduction and clustering using Python as part of an unsupervised learning project.',
    certificate: '/ideas-tih-data-science-internship.jpg',
    methods: ['Python', 'Data Preprocessing', 'Dimensionality Reduction', 'Clustering', 'Unsupervised Learning'],
    responsibilities: [
      'Worked on data preprocessing, dimensionality reduction and clustering using Python as part of an unsupervised learning project.',
    ],
    github: 'https://github.com/Payal-hub2004/Copy-of-10-Unsupervised_Learning_with_Dimensionality_Reduction_and_Clustering_Spring_2026',
  },
  {
    number: '03',
    role: 'Project Coordinator',
    organization: 'JKB Consulting Services',
    location: 'Remote',
    duration: 'March 2025 – September 2025',
    description: 'Coordinated client projects using Excel, SQL and Power BI. Created Excel templates using lookup functions and pivot-based logic, developed Power BI dashboards for revenue trends, customer mix and performance, and coordinated communication with clients.',
    methods: ['Excel', 'SQL', 'Power BI'],
    responsibilities: [
      'Coordinated client projects using Excel, SQL and Power BI.',
      'Created Excel templates using lookup functions and pivot-based logic.',
      'Developed Power BI dashboards for revenue trends, customer mix and performance.',
      'Coordinated communication with clients.',
    ],
  },
];

const achievements = [
  {
    id: 'science-exhibition',
    title: 'Science Exhibition 2026',
    category: 'Science Exhibition',
    year: '2026',
    award: '1st Prize',
    description: 'Presented a data-driven project using statistical analysis and visualization.',
    photos: [
      '/achievements/science-exhibition-1.jpg',
      '/achievements/science-exhibition-2.jpg',
    ],
  },
  {
    id: 'sdg-exhibition',
    title: 'SDG Exhibition / Datathon',
    category: 'Sustainable Development Goals',
    year: '2026',
    description: 'Participated in an SDG-focused statistical/data visualization project and presentation.',
    photos: [
      '/achievements/sdg-exhibition-1.jpg',
      '/achievements/sdg-exhibition-2.jpg',
      '/achievements/sdg-exhibition-3.jpg',
    ],
  },
];

const certificates = [
  {
    id: 'google-data-foundations',
    title: 'Foundations: Data, Data, Everywhere',
    year: '2026',
    provider: 'Google / Coursera',
    image: '/certificates/google-data-foundations.jpg',
  },
  {
    id: 'ai-machine-learning-foundation',
    title: 'AI and Machine Learning: Foundation to Frontier Application',
    year: '2026',
    provider: 'EICTA Consortium',
    image: '/certificates/ai-machine-learning-foundation.jpg',
  },
  {
    id: 'lean-six-sigma-green-belt',
    title: 'Lean Six Sigma Green Belt',
    year: '2026',
    provider: 'SQC & OR Unit, Indian Statistical Institute, Bangalore',
    image: '/certificates/lean-six-sigma-green-belt.jpg',
  },
  {
    id: 'python-for-data-science-ibm',
    title: 'Python for Data Science, AI & Development',
    year: '2025',
    provider: 'IBM / Coursera',
    image: '/certificates/python-for-data-science-ibm.jpg',
  },
  {
    id: 'deloitte-data-analytics-job-simulation',
    title: 'Data Analytics Job Simulation',
    year: '2025',
    provider: 'Deloitte / Forage',
    pdf: '/certificates/deloitte-data-analytics-job-simulation.pdf',
  },
  {
    id: 'isi-research-internship-completion',
    title: 'Research Project Internship Completion Certificate',
    year: '2026',
    provider: 'Indian Statistical Institute, Bangalore – SQC & OR Unit',
    pdf: '/certificates/isi-research-internship-completion.pdf',
    previewTitle: 'ISI',
    previewSubtitle: 'RESEARCH PROJECT',
    project: 'Implementation of the Statistical Quality Control Tools in Air Quality Monitoring',
    duration: 'Six months',
    issuedBy: 'Dr. Moutushi Chatterjee, Assistant Professor',
  },
  {
    id: 'ideas-tih-data-science-internship',
    title: 'Data Science Internship Certificate',
    year: '2026',
    provider: 'IDEAS – Institute of Data Engineering, Analytics and Science Foundation',
    image: '/ideas-tih-data-science-internship.jpg',
    openImageInNewTab: true,
    institution: 'Technology Innovation Hub, Indian Statistical Institute, Kolkata',
    programme: '4-Week Spring Internship Program on Data Science',
    duration: '21 January 2026 to 18 February 2026',
    project: 'Unsupervised Learning with Dimensionality Reduction and Clustering',
    certificateDate: '2 March 2026',
  },
  {
    id: 'cloud-computing-concept-to-deployment',
    title: 'Cloud Computing from Concept to Deployment',
    year: '2026',
    provider: 'Christ University',
    duration: '2 Months',
    description: 'Completed a two-month course at Christ University focused on cloud computing concepts and the journey from foundational principles to deployment. The course broadened my understanding of cloud technologies and their role in modern computing infrastructure.',
    textOnly: true,
  },
  {
    id: 'agentic-ai-workshop',
    title: 'Agentic AI Workshop',
    year: '2026',
    provider: 'World Technocon in association with Techzephyr 4.0, IIT Bhubaneswar',
    pdf: '/certificates/agentic-ai-workshop.pdf',
    openPdfInNewTab: true,
    previewTitle: 'AGENTIC AI',
    previewSubtitle: 'WORKSHOP',
    description: '18 October 2026 · 1 Day (7 Hours) · Indian Institute of Technology (IIT) Bhubaneswar',
  },
];

const researchMethodology = [
  'Data',
  'Preprocessing',
  'Machine Learning',
  'SHAP Analysis',
  'Interpretation',
];

const skillGroups = [
  {
    title: 'Programming & Querying',
    technologies: ['Python', 'R', 'SQL', 'Machine Learning'],
  },
  {
    title: 'Data Visualization & BI',
    technologies: ['Power BI', 'Tableau', 'Advanced MS Excel'],
  },
  {
    title: 'Statistical Techniques',
    technologies: ['Hypothesis Testing', 'Regression', 'Probability', 'ANOVA', 'Minitab'],
  },
  {
    title: 'Analytical Abilities',
    technologies: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Insight Generation', 'Descriptive Statistics'],
  },
];

function Fade({ children, className = '' }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <Fade>
        <div className="section-head"><span>{kicker}</span><h2>{title}</h2></div>
      </Fade>
      {children}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className={`project-modal ${project.details ? 'weather-project-modal' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeButtonRef} className="modal-close" type="button" aria-label="Close project details" onClick={onClose}>×</button>
        <span className="eyebrow">{project.details ? (project.projectType ? 'PROJECT DETAILS' : 'FEATURED PROJECT') : 'PROJECT DETAILS'}</span>
        <h2 id="modal-title">{project.title}</h2>
        {project.details
          ? <>
            <div className="weather-modal-tags">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
            <div className="weather-project-details">
              {project.details.map((detail) => (
                <article className="weather-detail-block" key={detail.heading}>
                  <h3>{detail.heading}</h3>
                  <p>{detail.description}</p>
                </article>
              ))}
            </div>
            <p className="weather-project-period"><span>PROJECT TIMELINE</span>{project.period}</p>
            {project.demo && (
              <div className="modal-links">
                <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={16} /></a>
              </div>
            )}
          </>
          : <>
            <p>{project.description}</p>
            <h3>Technologies</h3>
            <div className="modal-tags">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
            <h3>My role</h3>
            <p>{project.role}</p>
            <div className="modal-links">
              {project.github
                ? <a className="btn ghost" href={project.github} target="_blank" rel="noreferrer">GitHub <Code2 size={16} /></a>
                : <span className="link-placeholder">GitHub link not provided</span>}
              {project.demo
                ? <a className="btn" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16} /></a>
                : <span className="link-placeholder">Live demo link not provided</span>}
            </div>
          </>}
      </section>
    </div>
  );
}

function ExperienceModal({ experience, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop experience-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title">
        <button ref={closeButtonRef} className="modal-close experience-modal-close" type="button" aria-label="Close experience details" onClick={onClose}>×</button>
        <span className="eyebrow">EXPERIENCE · {experience.duration}</span>
        <h2 id="experience-modal-title">{experience.role}</h2>
        <p className="experience-modal-organization">{experience.organization} · {experience.location}</p>
        {experience.project && <div className="experience-modal-project"><span>PROJECT</span><h3>{experience.project}</h3></div>}
        <div className="experience-modal-block">
          <h3>Responsibilities</h3>
          <ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
        </div>
        <div className="experience-modal-block">
          <h3>Tools / Methods</h3>
          <div className="experience-modal-tags">{experience.methods.map((method) => <Tag key={method}>{method}</Tag>)}</div>
        </div>
        {experience.github && <a className="btn experience-github-button" href={experience.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {experience.certificate && <a className="btn experience-certificate-button" href={experience.certificate} target="_blank" rel="noopener noreferrer">View Internship Certificate <ExternalLink size={16} /></a>}
      </section>
    </div>
  );
}

function AchievementGallery({ achievement, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        setActivePhoto((index) => (index + 1) % achievement.photos.length);
      }
      if (event.key === 'ArrowLeft') {
        setActivePhoto((index) => (index - 1 + achievement.photos.length) % achievement.photos.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [achievement.photos.length, onClose]);

  const changePhoto = (direction) => {
    setActivePhoto((index) => (index + direction + achievement.photos.length) % achievement.photos.length);
  };

  return (
    <div className="modal-backdrop achievement-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="achievement-modal" role="dialog" aria-modal="true" aria-labelledby="achievement-modal-title">
        <button ref={closeButtonRef} className="modal-close achievement-modal-close" type="button" aria-label="Close gallery" onClick={onClose}>×</button>
        <div className="achievement-modal-heading">
          <span className="eyebrow">{achievement.category} · {achievement.year}</span>
          <h2 id="achievement-modal-title">{achievement.title}</h2>
        </div>
        <div className="achievement-gallery">
          <button className="gallery-arrow gallery-previous" type="button" aria-label="Previous photo" onClick={() => changePhoto(-1)}>←</button>
          <img
            className="gallery-main-image"
            src={achievement.photos[activePhoto]}
            alt={`${achievement.title}, photo ${activePhoto + 1} of ${achievement.photos.length}`}
            loading="lazy"
          />
          <button className="gallery-arrow gallery-next" type="button" aria-label="Next photo" onClick={() => changePhoto(1)}>→</button>
        </div>
        <div className="gallery-footer">
          <span>{String(activePhoto + 1).padStart(2, '0')} / {String(achievement.photos.length).padStart(2, '0')}</span>
          <div className="gallery-thumbnails" aria-label="Choose a photo">
            {achievement.photos.map((photo, index) => (
              <button
                className={`gallery-thumbnail ${index === activePhoto ? 'active' : ''}`}
                key={photo}
                type="button"
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={index === activePhoto}
                onClick={() => setActivePhoto(index)}
              >
                <img src={photo} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CertificateModal({ certificate, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop certificate-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title">
        <button ref={closeButtonRef} className="modal-close certificate-modal-close" type="button" aria-label="Close certificate viewer" onClick={onClose}>×</button>
        <div className="certificate-modal-heading">
          <span className="eyebrow">{certificate.provider} · {certificate.year}</span>
          <h2 id="certificate-modal-title">{certificate.title}</h2>
        </div>
        {certificate.project && (
          <p className="certificate-card-description">
            <strong>Project:</strong> {certificate.project}<br />
            <strong>Duration:</strong> {certificate.duration}<br />
            {certificate.issuedBy && <><strong>Issued by:</strong> {certificate.issuedBy}<br /></>}
            {certificate.institution && <><strong>Institution:</strong> {certificate.institution}<br /></>}
            {certificate.programme && <><strong>Programme:</strong> {certificate.programme}<br /></>}
            {certificate.certificateDate && <><strong>Certificate date:</strong> {certificate.certificateDate}</>}
          </p>
        )}
        {certificate.pdf
          ? <div className="certificate-pdf-viewer">
            <iframe src={certificate.pdf} title={`${certificate.title} certificate`} loading="lazy" />
            <a className="btn ghost" href={certificate.pdf} target="_blank" rel="noopener noreferrer">View Certificate <ExternalLink size={16} /></a>
          </div>
          : <>
            <img className="certificate-modal-image" src={certificate.image} alt={`${certificate.title} certificate`} />
            {certificate.openImageInNewTab && <a className="btn ghost" href={certificate.image} target="_blank" rel="noopener noreferrer">View Certificate <ExternalLink size={16} /></a>}
          </>}
      </section>
    </div>
  );
}

function ResearchModal({ onClose }) {
  const closeButtonRef = useRef(null);
  const methodology = [
    'Data collection and integration',
    'Data preprocessing',
    'Exploratory analysis',
    'Machine learning modelling',
    'Model evaluation',
    'SHAP-based feature importance',
    'SHAP interaction analysis',
    'Interpretation of climate, soil and agricultural effects',
  ];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop research-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="research-modal" role="dialog" aria-modal="true" aria-labelledby="research-modal-title">
        <button ref={closeButtonRef} className="modal-close research-modal-close" type="button" aria-label="Close research details" onClick={onClose}>×</button>
        <div className="research-modal-heading">
          <span className="eyebrow">FEATURED RESEARCH · IN PROGRESS</span>
          <h2 id="research-modal-title">Can Soil Health Buffer Climate Risk? Evidence from SHAP-Based Explainable Machine Learning Models for Pigeon Pea Yield in India</h2>
        </div>
        <div className="research-modal-content">
          <article className="research-modal-block">
            <h3>Research motivation</h3>
            <p>This research examines whether soil health can buffer climate risk for pigeon pea yield, considering climate, soil and agricultural factors together and interpreting their relative contributions.</p>
          </article>
          <article className="research-modal-block">
            <h3>Objective</h3>
            <p>To examine the influence of climatic, soil and agricultural factors on pigeon pea yield and identify the most important drivers using explainable machine learning.</p>
          </article>
          <article className="research-modal-block">
            <h3>Variables / factors</h3>
            <p>Climate-related factors, soil health factors, agricultural factors and pigeon pea yield in India.</p>
          </article>
          <article className="research-modal-block">
            <h3>Methodology</h3>
            <ol className="research-method-list">
              {methodology.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </article>
          <article className="research-modal-block">
            <h3>Expected contribution</h3>
            <p>Use explainable machine learning and SHAP-based interpretation to provide interpretable evidence on the relative contribution of climate, soil and agricultural factors to pigeon pea yield.</p>
          </article>
          <article className="research-modal-block">
            <h3>Research gap</h3>
            <p>Many agricultural yield studies focus primarily on climate or conventional statistical relationships. This research combines climate, soil and agricultural factors with explainable machine learning to investigate their relative contribution to pigeon pea yield and provide interpretable results using SHAP.</p>
          </article>
          <article className="research-modal-block research-status-block">
            <h3>Current status</h3>
            <p>Research in progress</p>
          </article>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [researchOpen, setResearchOpen] = useState(false);
  const [activeResearchStep, setActiveResearchStep] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const sections = links
      .map((link) => document.getElementById(link))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length) {
        visibleEntries.sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        setActiveSection(visibleEntries[0].target.id);
      }
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.35, 0.65] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const movePortrait = (event) => {
    if (!portraitRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = portraitRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portraitRef.current.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
    portraitRef.current.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`);
  };

  const resetPortrait = () => {
    if (!portraitRef.current) return;
    portraitRef.current.style.setProperty('--tilt-x', '0deg');
    portraitRef.current.style.setProperty('--tilt-y', '0deg');
  };

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`app ${theme}`}>
      <div className="ticker"><span>✦ OPEN TO DATA SCIENCE & RESEARCH OPPORTUNITIES</span><span>✦ STATISTICS × MACHINE LEARNING × RESEARCH</span><span>✦ LET'S BUILD SOMETHING MEANINGFUL WITH DATA</span></div>
      <nav className={scrolled ? 'is-scrolled' : ''} aria-label="Main navigation">
        <a className="brand" href="#Home" onClick={() => setOpen(false)}>Payal Panda</a>
        <div className="navlinks">
          {links.map((link) => <a key={link} className={activeSection === link ? 'active' : ''} href={`#${link}`} aria-current={activeSection === link ? 'location' : undefined}>{link}</a>)}
        </div>
        <div className="navright">
          <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☼' : '☾'}</button>
          <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <a className="btn small nav-cta" href="#Contact">Get in touch <ArrowRight size={16} /></a>
        </div>
        <button className="mobile-btn" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        {open && <div className="mobile-menu">
          {links.map((link) => <a key={link} className={activeSection === link ? 'active' : ''} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Download resume</a>
          <button className="theme-toggle mobile-theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☼ Light theme' : '☾ Dark theme'}</button>
        </div>}
      </nav>

      <header id="Home" className="hero">
        <div className="aurora a1" /><div className="aurora a2" />
        <Fade className="hero-inner">
          <div ref={portraitRef} className="portrait-wrap" onMouseMove={movePortrait} onMouseLeave={resetPortrait}><img className="portrait" src="/profile.png" alt="Payal Priyadarshini Panda" /></div>
          <div className="eyebrow">STATISTICS × DATA SCIENCE × RESEARCH</div>
          <h1>Payal Priyadarshini<br /><span>Panda</span></h1>
          <p className="lead">Turning data into <b>insights, models</b> & meaningful research.</p>
          <p className="sublead">M.Sc. Statistics student working at the intersection of statistical modelling, machine learning, data analysis and research.</p>
          <div className="actions"><a className="btn" href="#Projects">View my work <ArrowRight size={18} /></a><a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download resume <Download size={18} /></a></div>
        </Fade>
      </header>

      <Section id="About" kicker="01 / ABOUT" title="Where statistics meets data-driven problem solving.">
        <div className="two-col"><Fade><p className="big-copy">I am pursuing an M.Sc. in Statistics at Christ University, Bengaluru. I enjoy working across the complete analytical process—from data preparation and exploratory analysis to modelling, validation, visualization and interpretation.</p><p className="muted">My academic and research interests include agriculture, climate, environmental monitoring and social development, with an emphasis on interpretable statistical and machine-learning methods.</p></Fade>
          <Fade className="mini-grid">{[['Statistical Thinking', BarChart3], ['Machine Learning', BrainCircuit], ['Research & Analytics', FlaskConical], ['Data Visualization', Code2]].map(([title, Icon]) => <div className="mini-card" key={title}><Icon /><span>{title}</span></div>)}</Fade></div>
      </Section>

      <Section id="Experience" kicker="02 / EXPERIENCE" title="Learning through research and real-world projects.">
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <Fade className="experience-timeline-entry" key={experience.number}>
              <article
                className="experience-card"
                tabIndex={0}
                role="group"
                aria-label={`${experience.role} at ${experience.organization}. View details.`}
                onClick={() => setSelectedExperience(experience)}
                onKeyDown={(event) => {
                  if (event.target !== event.currentTarget) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedExperience(experience);
                  }
                }}
              >
                <span className="experience-indicator">{experience.number}</span>
                <div className="experience-card-main">
                  <div className="experience-card-meta"><span className="date">{experience.duration}</span><span className="experience-location">{experience.location}</span></div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.organization}</h4>
                  {experience.project && <p className="experience-project-name">{experience.project}</p>}
                  <p className="experience-description">{experience.description}</p>
                  <div className="experience-methods">{experience.methods.map((method) => <Tag key={method}>{method}</Tag>)}</div>
                  <div className="experience-card-footer">
                    <button className="details-link" type="button" onClick={(event) => {
                      event.stopPropagation();
                      setSelectedExperience(experience);
                    }}>View details <ArrowRight size={16} /></button>
                    {experience.github && <a href={experience.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>GitHub</a>}
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </Section>

      <Section id="Education" kicker="03 / EDUCATION" title="Academic foundation.">
        <div className="education-timeline">
          {[
            {
              title: 'M.Sc. Statistics and Data Science',
              institution: 'Christ University',
              location: 'Bengaluru Central Campus, Karnataka',
              duration: '2025 – 2027',
              status: 'Currently Pursuing',
              detailLabel: 'Status',
              detail: 'Currently pursuing',
            },
            {
              title: 'B.A. (Hons.) Statistics',
              institution: 'BJB Autonomous College, Utkal University',
              location: 'Bhubaneswar, Odisha',
              duration: '2022 – 2025',
              cgpa: '8.74',
              detailLabel: 'CGPA',
              detail: '8.74',
            },
            {
              title: 'Intermediate',
              institution: 'Fakir Mohan Higher Secondary School',
              location: 'Balasore, Odisha',
              duration: '2020 – 2022',
              stream: 'Economics, Statistics & Information Technology',
              detailLabel: 'Stream',
              detail: 'Economics, Statistics & Information Technology',
            },
            {
              title: 'Matriculation',
              institution: 'Saraswati Sishu Vidya Mandir',
              location: 'Balasore, Odisha',
              duration: '2020',
              detailLabel: 'Year',
              detail: '2020',
            },
          ].map((education, index) => (
            <Fade className="education-timeline-entry" key={education.title}>
              <article className={`education-card ${expandedEducation === index ? 'expanded' : ''}`}>
                <span className="education-indicator">{String(index + 1).padStart(2, '0')}</span>
                <div className="education-card-content">
                  <button className="education-toggle" type="button" aria-expanded={expandedEducation === index} onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}>
                    <span className="education-card-meta"><span className="date">{education.duration}</span><span className="education-location">{education.location}</span></span>
                    <h3>{education.title}</h3>
                    <h4>{education.institution}</h4>
                    <span className="education-card-badges">
                      {education.status && <span className="education-status">{education.status}</span>}
                      {education.cgpa && <span className="education-cgpa">CGPA: {education.cgpa}</span>}
                    </span>
                    <span className="expand-hint">{expandedEducation === index ? 'Show less −' : 'More details +'}</span>
                  </button>
                  <div className={`education-description ${expandedEducation === index ? 'is-expanded' : ''}`} aria-hidden={expandedEducation !== index}>
                    <span>{education.detailLabel}</span>
                    <p>{education.detail}</p>
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </Section>

      <Section id="Research" kicker="04 / RESEARCH" title="Applying statistical learning to real-world problems.">
        <Fade className="feature research-feature">
          <div className="feature-top"><FlaskConical /><span>FEATURED RESEARCH · IN PROGRESS</span></div>
          <h3>Can Soil Health Buffer Climate Risk? Evidence from SHAP-Based Explainable Machine Learning Models for Pigeon Pea Yield in India</h3>
          <p className="research-overview">This research investigates how climate, soil and agricultural factors influence pigeon pea yield in India using explainable machine learning and SHAP-based interpretation.</p>
          <div className="research-methodology" aria-label="Research methodology steps">
            {researchMethodology.map((step, index) => (
              <React.Fragment key={step}>
                <button
                  className={`research-step ${activeResearchStep === index ? 'active' : ''}`}
                  type="button"
                  aria-pressed={activeResearchStep === index}
                  onClick={() => setActiveResearchStep(index)}
                >
                  <span className="research-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </button>
                {index < researchMethodology.length - 1 && <span className="research-step-arrow" aria-hidden="true">→</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="research-tags">
            {['Statistics', 'Machine Learning', 'Explainable AI', 'SHAP', 'Agriculture', 'Climate Risk', 'Soil Health'].map((technology) => <Tag key={technology}>{technology}</Tag>)}
          </div>
          <button className="btn research-view-button" type="button" onClick={() => setResearchOpen(true)}>View Research <ArrowRight size={16} /></button>
        </Fade>
      </Section>

      <Section id="Projects" kicker="05 / PROJECTS" title="Selected work across statistics, data science and research.">
        <Fade className="weather-project-card">
          <div className="weather-visual" aria-hidden="true">
            <div className="weather-visual-glow" />
            <span className="weather-visual-label">WEATHER / MONITOR</span>
            <div className="weather-orbit weather-orbit-one" />
            <div className="weather-orbit weather-orbit-two" />
            <div className="weather-visual-core"><span>W</span></div>
            <div className="weather-data-label weather-temperature">TEMPERATURE</div>
            <div className="weather-data-label weather-rainfall">RAINFALL</div>
            <div className="weather-data-label weather-anomaly">ANOMALIES</div>
            <div className="weather-rain"><i /><i /><i /><i /><i /></div>
          </div>
          <div className="weather-project-content">
            <div className="weather-project-meta"><span className="num">01 / FEATURED PROJECT</span><span>{projects[0].period}</span></div>
            <h3>{projects[0].title}</h3>
            <p>{projects[0].description}</p>
            <div className="weather-project-technologies">{projects[0].technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
            <div className="project-highlights">
              <span>PROJECT HIGHLIGHTS</span>
              <div>{projects[0].highlights.map((highlight) => <Tag key={highlight}>{highlight}</Tag>)}</div>
            </div>
            <button className="btn weather-project-button" type="button" onClick={() => setSelectedProject(projects[0])}>View Project <ArrowRight size={16} /></button>
          </div>
        </Fade>
        <div className="card-grid project-grid additional-projects">
          {projects.slice(1).map((project) => <Fade className="project" key={project.number}>
            <article className="project-content" tabIndex={0} aria-label={`${project.title}. Open project details.`} onClick={() => setSelectedProject(project)} onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedProject(project);
              }
            }}>
              <span className="num">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p>
              <div>{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
              <div className="project-links">
                <button className="details-link" type="button" onClick={() => setSelectedProject(project)}>View details <ArrowRight size={16} /></button>
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>GitHub</a>}
                {project.demo && <a className="btn small" href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Live Demo <ExternalLink size={16} /></a>}
              </div>
            </article>
          </Fade>)}
        </div>
      </Section>

      <Section id="Skills" kicker="06 / SKILLS" title="Statistical thinking backed by computational tools.">
        <div className="skills">
          <div className="skills-network" aria-hidden="true"><span /></div>
          {skillGroups.map((group, index) => <Fade className={`skill-card ${selectedSkill === index ? 'selected' : ''}`} key={group.title}>
            <button className="skill-toggle" type="button" aria-pressed={selectedSkill === index} onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}>
              <span><h3>{group.title}</h3><span className="skill-hint">{selectedSkill === index ? 'Selected' : 'Select category'}</span></span>
              <span className="skill-chevron">{selectedSkill === index ? '−' : '+'}</span>
            </button>
            <div className="skill-detail">
              {group.technologies.map((technology) => <span className="skill-pill" key={technology}>{technology}</span>)}
            </div>
          </Fade>)}
        </div>
      </Section>

      <Section id="Certifications" kicker="07 / CERTIFICATIONS" title="Continuous learning.">
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <Fade className={`certificate-card${certificate.textOnly ? ' certificate-card-unavailable' : ''}`} key={certificate.id}>
              {certificate.textOnly ? (
                <div className="certificate-card-content">
                  <div className="certificate-card-meta"><span>{certificate.provider} · {certificate.year} · {certificate.duration}</span></div>
                  <h3>{certificate.title}</h3>
                  <p className="certificate-card-description">{certificate.description}</p>
                </div>
              ) : (
                <>
                  <button className={`certificate-preview ${certificate.pdf ? 'certificate-preview-pdf' : ''}`} type="button" onClick={() => setSelectedCertificate(certificate)} aria-label={`View ${certificate.title} certificate`}>
                    {certificate.image
                      ? <img src={certificate.image} alt="" loading="lazy" />
                      : <span className="certificate-pdf-mark"><span>PDF</span><strong>{certificate.previewTitle || 'DELOITTE'}</strong><span>{certificate.previewSubtitle || 'DATA ANALYTICS'}</span></span>}
                    <span className="certificate-preview-overlay">VIEW CERTIFICATE <span aria-hidden="true">↗</span></span>
                  </button>
                  <div className="certificate-card-content">
                    <div className="certificate-card-meta"><span>{certificate.provider}</span><span>{certificate.year}</span></div>
                    <h3>{certificate.title}</h3>
                    {certificate.description && <p className="certificate-card-description">{certificate.description}</p>}
                    {certificate.openPdfInNewTab
                      ? <a className="certificate-view-button" href={certificate.pdf} target="_blank" rel="noopener noreferrer">View Certificate <span aria-hidden="true">→</span></a>
                      : certificate.openImageInNewTab
                      ? <a className="certificate-view-button" href={certificate.image} target="_blank" rel="noopener noreferrer">View Certificate <span aria-hidden="true">→</span></a>
                      : <button className="certificate-view-button" type="button" onClick={() => setSelectedCertificate(certificate)}>
                        View Certificate <span aria-hidden="true">→</span>
                      </button>}
                  </div>
                </>
              )}
            </Fade>
          ))}
        </div>
      </Section>

      <Section id="Achievements" kicker="08 / ACHIEVEMENTS" title="Milestones that matter.">
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <Fade className="achievement-card" key={achievement.id}>
              <button className="achievement-image-button" type="button" onClick={() => setSelectedAchievement(achievement)} aria-label={`View ${achievement.title} gallery`}>
                <img className="achievement-image" src={achievement.photos[0]} alt={`${achievement.title} exhibition`} loading="lazy" />
                <span className="achievement-image-hint">VIEW GALLERY <span aria-hidden="true">↗</span></span>
              </button>
              <div className="achievement-content">
                <div className="achievement-meta"><span>{achievement.category}</span><span>{achievement.year}</span></div>
                <h3>{achievement.title}</h3>
                {achievement.award && <p className="achievement-award"><span>✦</span> {achievement.award}</p>}
                <p className="achievement-description">{achievement.description}</p>
                <button className="achievement-gallery-link" type="button" onClick={() => setSelectedAchievement(achievement)}>
                  View Photos <span aria-hidden="true">→</span>
                </button>
              </div>
            </Fade>
          ))}
        </div>
      </Section>

      <section id="Contact" className="contact">
        <Fade>
          <span className="eyebrow">LET'S CONNECT</span>
          <h2>Let’s make an <span>impact.</span></h2>
          <p className="contact-invitation">Have an idea, a research question, or an opportunity to collaborate? I’d love to hear from you.</p>
          <div className="actions">
            <a className="btn" href="mailto:pandapayalp@gmail.com">Email <Mail size={18} aria-hidden="true" /></a>
            <a className="btn ghost" href="https://www.linkedin.com/in/payal-priyadarshini-panda-50945a256/" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={18} aria-hidden="true" /></a>
            <a className="btn ghost" href="https://github.com/Payal-hub2004" target="_blank" rel="noopener noreferrer">GitHub <Code2 size={18} aria-hidden="true" /></a>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume <Download size={18} aria-hidden="true" /></a>
          </div>
        </Fade>
      </section>

      <footer><div><b>Payal Priyadarshini Panda</b><span>Statistics × Data Science × Research</span></div><span>© 2026 Payal Priyadarshini Panda</span></footer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedExperience && <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />}
      {selectedAchievement && <AchievementGallery achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />}
      {selectedCertificate && <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />}
      {researchOpen && <ResearchModal onClose={() => setResearchOpen(false)} />}
    </div>
  );
}

export default App;
