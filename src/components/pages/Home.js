import Container from 'react-bootstrap/Container';
import Landing from '../Landing/index.js';
import About from '../About/index.js';
import Skills from '../Skills/index.js';
import Projects from '../Projects/index.js';

function Home() {
    return (
        <Container className="about-me">
            <Landing />
            <About />
            <Skills />
            <Projects />
        </Container>
    )
}

export default Home;