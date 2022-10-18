import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, video }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-videobx">
        <video
            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
            playsInline
            autoPlay
            loop
            muted
            controls
            src={video} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
