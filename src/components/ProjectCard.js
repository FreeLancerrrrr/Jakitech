import { Col } from "react-bootstrap";
import VideoPlayer from "react-video-js-player";
import "../Video.css"

//*not sure should be here or not
         //code: width="250" height="300" inside the video player*//
         
export const ProjectCard = ({ title, description, video }) => {
  return (
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-videobx">
         
        <VideoPlayer src={video} playbackRates={[1,1.5,2,2.5]}/>
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
