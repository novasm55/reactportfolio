import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <Container>
            <h1>Lets Connect!</h1>
        <Form>
            <Form.Group className="mb-3 col-3" controlId="contactEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 col-3" controlId="contactText">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        <buttom type="submit"
        className="btn btn-success">Send Message</buttom>
        </Container>
    )
}

export default Contact;