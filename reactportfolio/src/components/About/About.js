import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<Row>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src="https://github.com/novasm55/reactPortfolio/blob/main/src/assets/1669769895038.jpg?raw=true"
						alt="Me"
						className="img-fluid rounded-circle"
					/>
				</Col>

				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
						My name is Michael Novas, and I currently reside in Los Angeles. I am a Northeastern University alumni with a BS in Business Administration and finance.  
                        I am a naturally curious person who has a passion for the cutting edge.
					</p>
					<p>
						I have experience in fullstack software engineering, working with technologies like AJAX, Bootstrap,
						CSS, HTML, JavaScript, JSON, Materialize.css, Node.JS, and various other modern development
						media.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;