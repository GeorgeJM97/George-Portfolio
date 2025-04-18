import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sunbelt Rentals E-Commerce Platform",
      description: "At Publicis Sapient, led development of key features for Sunbelt Rentals' complex E-Commerce platform. Integrated multiple systems including Magento for commerce, AEM for content management, Rentalman for inventory, and MuleSoft for API management. Implemented dynamic loading and chunking strategies improving site performance by 20%.",
      technologies: ["React", "Redux", "TypeScript", "Magento", "AEM", "MuleSoft", "Service Workers"],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800",
      link: "https://www.sunbeltrentals.com"
    },
    {
      title: "Sunbelt Rentals Mobile App",
      description: "As part of the Publicis Sapient team, contributed to the development of Sunbelt Rentals' mobile app for iOS and Android platforms. Built key features for equipment browsing, rental management, and location services using React Native. Collaborated with the team to ensure successful app store deployments.",
      technologies: ["React Native", "Redux", "TypeScript", "iOS", "Android"],
      image: `${process.env.PUBLIC_URL || ''}/sunbeltMobileApp.png`,
      links: {
        ios: "https://apps.apple.com/ca/app/sunbelt-rentals/id1553310095",
        android: "https://play.google.com/store/apps/details?id=com.sunbeltrentals.mobileapp&hl=en_IN"
      }
    },
    {
      title: "Fitness Marketplace (Personal Project)",
      description: "Personal Project: Built a fitness marketplace using React and Cursor AI. The platform helps users discover nearby fitness classes, connect with local trainers, and provides a space for aspiring trainers to grow their audience.",
      technologies: ["React", "TypeScript", "Cursor AI", "Node.js", "GitHub: GeorgeJM97/mytrainer"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800",
      link: "https://georgejm97.github.io/mytrainer/"
    },
    {
      title: "Marine Life Detection Tool (Personal Project)",
      description: "Personal project: Built a detection tool for marine life and fish abundance using Deep Learning and YOLO v3. Aimed to help scuba divers and marine biologists identify fish species in real-time videos through an interactive UI.",
      technologies: ["Deep Learning", "YOLO v3", "Computer Vision", "Python", "GitHub: GeorgeJM97/Yolov3-Underwater-Detection"],
      media: {
        type: "video",
        src: `${process.env.PUBLIC_URL}/result-shark.mp4`
      },
      link: "https://github.com/GeorgeJM97/Yolov3-Underwater-Detection"
    },
    {
      title: "Sunbelt Rentals Location Finder",
      description: "Led the development of the location finder page with interactive map, custom markers and clustering. Implemented dynamic store location data loading and Google Maps integration. Optimized for mobile devices to help customers find 1000+ rental locations.",
      technologies: ["React.js", "Google Maps API", "TypeScript"],
      image: `${process.env.PUBLIC_URL || ''}/map.png`,
      link: "https://www.sunbeltrentals.com/locations"
    },
    {
      title: "Store Location Street View",
      description: "Ideated and executed the development of an enhanced location finder with Street View integration, allowing customers to virtually explore rental locations. Implemented seamless transitions between map and street view with optimized mobile experience.",
      technologies: ["React.js", "Google Street View API", "TypeScript"],
      image: `${process.env.PUBLIC_URL || ''}/streetview.png`,
      link: "https://www.sunbeltrentals.com/location/me/augusta/equipment-tool-rentals/1478/"
    }
  ];

  const handleCardClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section id="projects" className="projects" aria-label="Featured Projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid" role="list">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-card ${project.link ? 'clickable' : ''}`}
            onClick={() => project.link && handleCardClick(project.link)}
            role={project.link ? "link" : "listitem"}
            tabIndex={project.link ? 0 : -1}
            aria-label={project.link ? `View ${project.title} project` : project.title}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && project.link) {
                handleCardClick(project.link);
              }
            }}
          >
            <div className="project-image">
              {project.media?.type === "video" ? (
                <video 
                  src={project.media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="project-media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  preload="auto"
                />
              ) : (
                <img src={project.image} alt={project.title} className="project-media" />
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {project.links ? (
                  <span>
                    {project.title}
                    <div className="app-links">
                      <a 
                        href={project.links.ios} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        iOS App
                      </a>
                      {" | "}
                      <a 
                        href={project.links.android} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Android App
                      </a>
                    </div>
                  </span>
                ) : (
                  project.title
                )}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies" role="list">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 