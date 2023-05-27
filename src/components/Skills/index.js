import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Skills() {
    return (
        <CardGroup className="skills">
            <Card>
                <Card.Header>FRONT-END</Card.Header>
                <Card.Body>
                    <ul>
                        <h3>Languages I use</h3>
                        <li>JavaScript, HTML, CSS</li>
                        <h3>Libraries & Frameworks</h3>
                        <li>React.Js</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Tailwind CSS</li>
                        <h3>Tools</h3>
                        <li>Figma</li>
                    </ul>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>BACK-END</Card.Header>
                <Card.Body>
                    <ul>
                        <h3>Languages I use</h3>
                        <li>JavaScript, SQL</li>
                        <h3>Libraries & Frameworks</h3>
                        <li>Node.Js</li>
                        <li>Express.Js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <h3>Tools</h3>
                        <li>Heroku</li>
                    </ul>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>EDUCATION</Card.Header>
                <Card.Body>
                    <ul>
                        <li>
                            <h3 className="education">UCLA Extended Full Stack Developer Bootcamp</h3>
                            <p>Feb. 2023 - May 2023</p>
                        </li>
                        <li>
                            <a href="https://www.theodinproject.com/paths/full-stack-javascript?" target="_BLANK"><h3 className="education">The Odin Project (JavaScript Path)</h3>
                                <p>Oct. 2022 - May 2023</p></a>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/certificate/UC-554d7246-939d-4211-ad65-2a5e242d20a0/" target="_BLANK"><h3 className="education">The Web Developer Bootcamp - Udemy</h3>
                                <p>Oct. 2022 - May 2023</p></a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Skills;