import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const projectCard = ({ title, description, imgUrl, gitUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={gitUrl} ><ArrowRightCircle size={15} /></a>
                </div>
            </div>
        </Col>
    );
}