import { Container, Row, Card } from 'react-bootstrap';

function Projects() {
    return (
        <Container className="pb-5 mt-5">
            <h1>My Recent Projects</h1>
            <Row className="row">
                <Card className="project-card m-2">
                    <a href="https://github.com/b-reddington/trove">
                        <Card.Title>Trove</Card.Title>
                        <Card.Text>
                            Trove is an application that serves as a travel vision board. As a user, you can create and share your travel itineraries and view those of others. It's a place to discover new destinations and get inspired for your next adventure.
                        </Card.Text></a>
                </Card>

                <Card className="project-card m-2">
                    <a href="https://github.com/novasm55/Password-Generator"><Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            Protect your digital assets with cybersecurity.
                        </Card.Text></a>
                </Card>

            </Row>
        </Container>
    )
}

export default Projects;