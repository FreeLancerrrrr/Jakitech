import { Col } from "react-bootstrap";

export const WebProjectCard = ({ title, description, video }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="webproj-videobx">
        <video
            style={{ maxWidth: "100%", width: "800px", height:"200px", margin: "0 auto" }}
            playsInline
            autoPlay
            loop
            muted
            controls
            src={video} />
        <div className="webproj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
