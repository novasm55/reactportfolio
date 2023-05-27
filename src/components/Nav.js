import { Nav, NavDropdown } from 'react-bootstrap';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <Nav className="ml-auto">
            <Nav.Item className="mr-auto"> {/* Add 'mr-auto' class to the Nav.Item */}
                <Nav.Link
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-auto"> {/* Add 'mr-auto' class to the Nav.Item */}
                <Nav.Link
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Socials" id="nav-dropdown" className="ml-auto"> {/* Add 'ml-auto' class to the NavDropdown */}
                <NavDropdown.Item href="https://github.com/novasm55" target="_BLANK">
                    Github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/novasmichael/" target="_BLANK">
                    LinkedIn
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default Navbar;