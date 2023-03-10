import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
// import headerImg from "../assets/img/among-us.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-end Developer", "ERPNext Developer", "Frappe Developer", "Back-end Developer", "Flutter Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting)
            setDelta(prevDelta => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setDelta(500);
            setLoopNum(loopNum + 1);
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{"Hi there, I'm Mohamed Al-Qershi,"}<br />{" and I'm a "}<span className="warp">{text}</span></h1>
                        <p>
                            I AM ON A MISSION 🚀 AIMING TO IMPROVE PEOPLE'S LIVES WITH TECHNOLOGY." because people who are crazy enough to think that they can change the world, are the ones who do." -Steve Jobs
                            <br />
                            <br />
                            I have certificates from Re:Coded and Coding Academy. I have a bachelor's degree in Information Systems.
                            Well, I am always up for a challenge and I love learning new things. That's exactly why I chose to learn programming across the board. I believe creativity is born from hybrid skills. So, I am quite excited to translate my past experiences into digital products. aren't you?
                        </p>
                        <button onClick={() => console.log("hi")}>Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;