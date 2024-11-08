import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    function ScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    

    
    return (
        <>
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#home">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#">Pokédex.React</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link onClick={ScrollToTop}>Home</Nav.Link>
                <Nav.Link href="https://github.com/djeffalKhaled">Github</Nav.Link>
                <NavDropdown title="About" id="navbarScrollingDropdown">
                <NavDropdown.ItemText style={{width:'500px'}} >
                    This is a pokedex website showing you a good chunk of pokemons sourced
                    From Pokeapi. Website developed using React and Typescript.
                </NavDropdown.ItemText>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}
export default NavBar