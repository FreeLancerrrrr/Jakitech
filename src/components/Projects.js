import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CardView } from "./CardView";
import colorSharp2 from "../assets/img/color-sharp2.png";
// App Development
import video1 from "../assets/video/TaskManagement.mp4"
import video2 from "../assets/video/PasswordStrength.mp4"
import video3 from "../assets/video/iu.mp4"
import video4 from "../assets/video/H&F_Utoopia.mp4"
import video5 from "../assets/video/JJ.mp4"
import video6 from "../assets/video/NavigationDrawerr.mp4"
// Web Development
import webvideo1 from "../assets/video/WebDevelopment.mp4";
import webvideo2 from "../assets/video/Web.mp4";
// UI & UX Development
import img1 from "../assets/img/jj1.png";
import img2 from "../assets/img/jj2.png";
import img3 from "../assets/img/jj3.png";
import yik1 from "../assets/img/Picture3.jpg";
import yik2 from "../assets/img/UIUx.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Task Management App",
      description: "By Jiann Peng Lim",
      video:video1,
    },
    {
      title: "Password Strength Checker",
      description: "By Jiann Peng Lim",
      video:video2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      video:video3,
    },
    {
      title: "H & F Utoopia",
      description: "By Yik Khong Ho",
      video:video4,
    },
    {
      title: "Note Application",
      description: "By Yik Khong Ho",
      video:video5,
    },
    {
      title: "Navigation Drawer",
      description: "By Yik Khong Ho",
      video:video6,
    },
  ];

  const webDev = [
    {
      title: "Cyber Awareness Promotion Website/Promotion Website For Durham Constabulary",
      description: "By Yik Khong Ho",
      video:webvideo1,
    },
    {
      title: "Culinary Web",
      description: "Jiann Peng Lim",
      video:webvideo2,
    },
  ];

  const uiDev = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: yik1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: yik2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: yik2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Struggling on the services? <br></br>Let's get a look on the demo or projects created below!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">App Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UI & UX Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            webDev.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            uiDev.map((project, index) => {
                              return (
                                <CardView
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
