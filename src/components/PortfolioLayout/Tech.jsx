import React from "react";
import { Row, Col, Card } from "antd";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiJavascriptLine,
  RiGitBranchLine,
  RiDatabase2Line,
  RiCodeSSlashLine,
  RiAppStoreLine
} from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRobot } from "react-icons/fa";

const Tech = () => {
  const technicalSkills = [
    {
      name: "JavaScript",
      icon: <RiJavascriptLine />,
      color: "#F7DF1E"
    },
    {
      name: "React.js",
      icon: <RiReactjsLine />,
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: <RiNodejsLine />,
      color: "#68A063"
    },
    {
      name: "Yolo & OpenCV",
      icon: <FaRobot />,
      color: "#00618A"
    },
    {
      name: "Git & Version Control",
      icon: <RiGitBranchLine />,
      color: "#F05032"
    },
    {
      name: "MongoDB & Databases",
      icon: <RiDatabase2Line />,
      color: "#47A248"
    },
    {
      name: "REST API Development",
      icon: <RiCodeSSlashLine />,
      color: "#FF6B6B"
    },
    {
      name: "Full Stack Development",
      icon: <RiAppStoreLine />,
      color: "#8B5CF6"
    }
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="skills-section">
      {/* Technical Skills Grid */}
      <div className="technical-skills-container">
        <div
          className="skills-grid-header"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3>Technical Proficiency</h3>
          <p>Comprehensive skill set covering full-stack development</p>
        </div>

        {/* Additional Skills */}
        <div className="additional-skills-container">
          <div className="skills-tags-grid">
            {[
              "React.js", "Node.js", "MongoDB",
              "AWS", "Git", "GitHub", "REST APIs", "API Integration",
              "Next.js", "Express.js", "Python", "Flask",
              "Webpack", "Material-UI", "Java", "C Programming", 
              "SQL", "Yolo", "OpenCV", "Nodemailer", "Tailwind CSS",
              "Express", "Postman", "JWT", "Authentication","Machine Learning"
            ].map((tech, index) => (
              <div
                key={tech}
                className="skill-tag"
                data-aos="zoom-in"
                data-aos-delay={1000 + (index * 50)}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Centered Technical Skills Grid */}
        <div className="centered-skills-grid">
          <Row 
            gutter={[24, 24]} 
            justify="center"
            className="technical-skills-row"
          >
            {technicalSkills.map((skill, index) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={600 + (index * 100)}
                className="skill-col"
              >
                <Card
                  hoverable
                  className="skill-card"
                  bodyStyle={{ padding: '24px' }}
                >
                  <div className="skill-card-content">
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
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
        
        /* Technical Skills */
        .technical-skills-container {
          margin-bottom: 80px;
          width: 100%;
        }
        
        .skills-grid-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .skills-grid-header h3 {
          color: #f1f5f9;
          font-size: 2rem;
          margin-bottom: 12px;
          font-weight: 600;
        }
        
        .skills-grid-header p {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        
        /* Centered Grid Container */
        .centered-skills-grid {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .technical-skills-row {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .skill-col {
          display: flex;
          justify-content: center;
        }
        
        .skill-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
        
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .skill-card-content {
          display: flex;
          align-items: center;
          gap: 16px;
          height: 100%;
        }
        
        .skill-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }
        
        .skill-info {
          flex: 1;
          min-width: 0;
        }
        
        .skill-name {
          color: #f1f5f9;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        /* Skills Tags */
        .additional-skills-container {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .skills-tags-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .skill-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: default;
        }
        
        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-grid-header h3 {
            font-size: 1.6rem;
          }
          
          .skill-card-content {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .skills-tags-grid {
            gap: 8px;
          }
          
          .skill-tag {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
          
          .skill-card {
            max-width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .technical-skills-row {
            gap: 16px;
          }
          
          .skill-col {
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Tech;