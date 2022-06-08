import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimeLineContainer, Heading } from "./Education.elements";

const Education = () => {
    return (
        <div name='education'>
            <TimeLineContainer>
                <Heading data-shadow='Education'> Education </Heading>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#F2F2F2', color: '#232323' }}
                        contentArrowStyle={{ borderRight: '7px solid #F2F2F2' }}
                        iconStyle={{ background: '#FFD93D', color: '#F2F2F2' }}
                    >
                        <h3 className="vertical-timeline-element-title"> Bharatiya Vidya Bhavans Sardar Patel Institute of Technology </h3>
                        <br />
                        <h4> B.Tech in Computer Engineering </h4>
                        <span className="vertical-timeline-element-subtitle"> 2020 - 2023 </span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#F2F2F2', color: '#232323' }}
                        contentArrowStyle={{ borderRight: '7px solid #F2F2F2' }}
                        iconStyle={{ background: '#FFD93D', color: '#F2F2F2' }}
                    >
                        <h3 className="vertical-timeline-element-title"> SVKM's Shri Bhagubhai Mafatlal Polytechnic </h3>
                        <br />
                        <h4> Diploma in Computer Engineering </h4>
                        <span className="vertical-timeline-element-subtitle"> 2017 - 2020 </span>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </TimeLineContainer>
        </div>
    )
}

export default Education;