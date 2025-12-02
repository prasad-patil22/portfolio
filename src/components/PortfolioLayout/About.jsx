import React from "react";
import { Row, Col, Card, Button } from "antd";
import {
  RiUserLine,
  RiAwardLine,
  RiBriefcaseLine,
  RiGraduationCapLine,
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiDownloadLine,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiHeartLine,
  RiCodeSSlashLine,
  RiLightbulbFlashLine,
  RiTeamLine,
  RiCodeBlock
} from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const personalInfo = [
    { icon: <RiMapPinLine />, label: "Location", value: "Belagavi, Karnataka, India" },
    { icon: <RiMailLine />, label: "Email", value: "patilprasad3808@gmail.com" },
    { icon: <RiPhoneLine />, label: "Phone", value: "+91 8549076433" },
  ];

  const stats = [
    { number: "6+", label: "Months Experience", icon: <RiAwardLine /> },
    { number: "15+", label: "Projects Completed", icon: <RiCodeSSlashLine /> },
    { number: "15+", label: "Technologies", icon: <RiLightbulbFlashLine /> },
    { number: "100%", label: "High-Quality Code", icon: <RiCodeBlock /> }
  ];

  const education = [
    {
      year: "2020-2022",
      degree: "Master in Computer Science",
      institution: "Stanford University",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      year: "2016-2020",
      degree: "Bachelor in Software Engineering",
      institution: "MIT",
      description: "Focus on Full-Stack Development and System Architecture"
    }
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <div className="about-section">
      <div className="about-section-header">

        <h2
          className="about-section-title"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          About Me
        </h2>
        <p
          className="about-section-subtitle"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Developer who loves turning ideas into seamless digital products using modern technologies.
        </p>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <Row gutter={[40, 40]}>
          {/* Profile Image & Personal Info */}
          <Col xs={24} lg={8}>
            <div
              className="profile-container"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <Card className="profile-card">
                <div className="profile-image-container">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                  />
                  <div className="profile-overlay">
                    <div className="profile-socials">
                      <a href="https://github.com/prasad-patil22" className="social-link">
                        <RiGithubFill />
                      </a>
                      <a href="https://www.linkedin.com/in/prasad-patil-614a6b330/" className="social-link">
                        <RiLinkedinFill />
                      </a>
                      <a href="https://leetcode.com/u/prasad2209/" className="social-link">
                        <SiLeetcode />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="profile-info">
                  <h3 className="profile-name">Prasad Patil</h3>
                  <p className="profile-title">Full Stack Developer</p>
                  <p className="profile-bio">
                    Driven to create innovative solutions and transform ideas into real-world applications through code.
                  </p>

                  <div className="personal-info-list">
                    {personalInfo.map((info, index) => (
                      <div
                        key={info.label}
                        className="info-item"
                        data-aos="fade-right"
                        data-aos-delay={600 + (index * 100)}
                       
                      >
                        <div className="info-icon">
                          {info.icon}
                        </div>
                        <div className="info-content">
                          <span className="info-label">{info.label}</span>
                          <span className="info-value">{info.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="profile-actions">
                    {/* Link to the CV placed in the public folder as /Prasad_CV.pdf */}
                    <a
                      href={encodeURI(publicUrl + '/Prasad CV.pdf')}
                      download="Prasad CV.pdf"
                      style={{ display: 'block' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="primary"
                        icon={<RiDownloadLine />}
                        className="download-btn"
                        size="large"
                      >
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </Col>

          {/* Details & Stats */}
          <Col xs={24} lg={16}>
            {/* Stats */}
            <Row gutter={[20, 20]} className="stats-grid" justify="center">
              {stats.map((stat, index) => (
                <Col xs={24} sm={12} md={6} key={stat.label}>
                  <div
                    className="stat-card"
                    data-aos="fade-up"
                    data-aos-delay={700 + (index * 100)}
                  >
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-number">{stat.number}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* About Text */}
            <div
              className="about-text-container"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Card className="about-text-card">
                <h3>My Journey</h3>
                <div className="about-text">
                  <p>
                    Hello! I'm Prasad, a dedicated Full Stack Developer currently pursuing my MCA and working as a MERN Stack Intern at Ligand Software Solutions. I enjoy building functional, user-friendly, and scalable applications using technologies like React, Node.js, Express, MongoDB, Python, and Flask.
                  </p>

                  <p>
                    My journey in tech began during my BCA studies, where I developed a strong interest in coding, problem-solving, and creating real-world software solutions. Since then, I've worked on impactful projects—including AI-based systems, responsive websites, and full-stack applications—that improved efficiency and user experience.
                  </p>
                  <p>
                    At Ligand Software Solutions, I contribute to live client projects, build responsive UIs, integrate backend services, and work on AI-driven applications. I enjoy learning new technologies, optimizing performance, and developing solutions that make a difference.
                  </p>

                  <p>
                    When I'm not coding, I love exploring emerging tech, improving my problem-solving skills, and working on innovative projects that help me grow as a developer.
                  </p>
                </div>
              </Card>
            </div>

          
            {/* Interests */}
            <div
              className="interests-container"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .about-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: #fff;
          padding: 100px 5%;
          position: relative;
          overflow: hidden;
        }
        
        .about-section-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }
        
        .about-section-icon {
          font-size: 3rem;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }
        
        .about-section-title {
          font-size: 3rem;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .about-section-subtitle {
          color: #cbd5e1;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 300;
        }
        
        /* Profile Card */
        .profile-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          text-align: center;
          overflow: hidden;
        }
        
        .profile-image-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 30px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(59, 130, 246, 0.3);
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .profile-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .profile-image-container:hover .profile-overlay {
          opacity: 1;
        }
        
        .profile-image-container:hover .profile-image {
          transform: scale(1.1);
        }
        
        .profile-socials {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          color: #fff;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #3b82f6;
          transform: translateY(-3px);
        }
        
        .profile-info {
          padding: 0 20px;
        }
        
        .profile-name {
          color: #f1f5f9;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .profile-title {
          color: #3b82f6;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .profile-bio {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }
        
        .personal-info-list {
          margin-bottom: 30px;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          
          gap: 15px;
          margin-bottom: 20px;
          padding: 2px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .info-icon {
          color: #3b82f6;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .info-content {
          flex: 1;
          text-align: left;
        }
        
        .info-label {
          display: block;
          color: #94a3b8;
          font-size: 0.85rem;
          margin-bottom: 4px;
        }
        
        .info-value {
          display: block;
          color: #f1f5f9;
          font-weight: 500;
        }
        
        .download-btn {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 10px;
          font-weight: 600;
          width: 100%;
          height: 50px;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        /* Stats */
        .stats-grid {
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .stat-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(240, 19, 19, 0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          width: 100%;
          max-width: 100px;
          height:200px;
          margin: 0 auto;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .stat-icon {
          font-size: 2.5rem;
          color: #3b82f6;
          margin-bottom: 12px;
        }
        
        .stat-number {
          color: #f1f5f9;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 0;
        }
        
        /* About Text */
        .about-text-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          margin-bottom: 40px;
        }
        
        .about-text-card h3 {
          color: #f1f5f9;
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .about-text p {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 16px;
          font-size: 1rem;
        }
        
        /* Timeline */
        .timeline-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          height: 100%;
        }
        
        .timeline-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .timeline-icon {
          font-size: 1.5rem;
          color: #3b82f6;
        }
        
        .timeline-header h4 {
          color: #f1f5f9;
          margin: 0;
          font-size: 1.3rem;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 30px;
          position: relative;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-year {
          color: #3b82f6;
          font-weight: 600;
          font-size: 0.9rem;
          min-width: 80px;
          padding-top: 4px;
        }
        
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #3b82f6;
          margin: 0 20px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        
        .timeline-dot::before {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: calc(100% + 30px);
          background: rgba(59, 130, 246, 0.3);
        }
        
        .timeline-item:last-child .timeline-dot::before {
          display: none;
        }
        
        .timeline-info {
          flex: 1;
        }
        
        .timeline-info h5 {
          color: #f1f5f9;
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .timeline-institution {
          color: #3b82f6;
          font-weight: 500;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        
        .timeline-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }
        
        /* Interests */
        .interests-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          margin-top: 40px;
        }
        
        .interests-card h4 {
          color: #f1f5f9;
          font-size: 1.3rem;
          margin-bottom: 24px;
          font-weight: 600;
        }
        
        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
        }
        
        .interest-item {
          text-align: center;
          padding: 20px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .interest-item:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .interest-icon {
          font-size: 2rem;
          color: #3b82f6;
          margin-bottom: 12px;
        }
        
        .interest-name {
          color: #e2e8f0;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .about-section-title {
            font-size: 2.2rem;
          }
          
          .profile-image-container {
            width: 150px;
            height: 150px;
          }
          
          .stats-grid {
            gap: 20px;
            justify-content: center !important;
          }
          
          .stat-card {
            padding: 20px;
            max-width: 160px;
            margin: 0 auto;
          }
          
          .timeline-item {
            flex-direction: column;
            gap: 10px;
          }
          
          .timeline-dot {
            display: none;
          }
          
          .timeline-dot::before {
            display: none;
          }
          
          .interests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .about-section-title {
            font-size: 2rem;
          }
          
          .profile-name {
            font-size: 1.5rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .stats-grid {
            gap: 15px;
          }
          
          .stat-card {
            max-width: 140px;
            padding: 15px;
          }
          
          .interests-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 375px) {
          .stats-grid {
            gap: 10px;
          }
          
          .stat-card {
            max-width: 130px;
            padding: 12px;
          }
          
          .stat-icon {
            font-size: 2rem;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .stat-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;