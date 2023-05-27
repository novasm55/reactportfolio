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
                    <a href="https://github.com/b-reddington/Chatter-Box"><Card.Title>ChatterBox</Card.Title>
                        <Card.Text>
                            ChatterBox is not just another messaging app, it’s an all-in-one communication tool that connects you with your friends, family, and colleagues in a fast, secure, and user-friendly way. Our app is designed to streamline your communication experience, making it easier for you to stay in touch with the people that matter most to you.
                        </Card.Text></a>
                </Card>

                <Card className="project-card m-2">
                    <a href="https://serene-tor-17633.herokuapp.com/login"><Card.Title>Tech Blog</Card.Title>
                        <Card.Text>
                            This project is a CMS Styled Tech Blog. You will have the ability to register, login, post threads, and comment on threads. It is built using Sequelize, Express, Handlebars, Bootstrap, and vanilla JavaScript.                        </Card.Text></a>
                </Card>

                <Card className="project-card m-2">
                    <a href="https://b-reddington.github.io/Cineman/"><Card.Title>Cineman</Card.Title>
                        <Card.Text>
                            Cineman is a user-friendly mobile application that provides a simple solution to the eternal question of "What should we watch and where should we eat?"                        </Card.Text></a>
                </Card>

                <Card className="project-card m-2">
                    <a href="https://b-reddington.github.io/weather-dashboard/"><Card.Title>Weather Board</Card.Title>
                        <Card.Text>
                            This weather dashboard was completed using HTML, Bootstrap CSS, and JavaScript with Jquery and DayJS. This application features a daily forecast and a 5 day forecast using the API from https://openweathermap.org/ .                        </Card.Text></a>
                </Card>

            </Row>
        </Container>
    )
}

export default Projects;