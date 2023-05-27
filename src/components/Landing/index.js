import Container from 'react-bootstrap/Container';

function Landing() {
    return (
        <Container className="landing">
            <h1><b className="blue-text">&lt;FULLSTACK</b><br></br><b className="red-text">DEVELOPER/&gt;</b></h1>
            <img src="./images/top-left.png" className="header-img-1"></img>
            <img src="./images/btm-left.png" className="header-img-2"></img>
        </Container>
    )
}

export default Landing;