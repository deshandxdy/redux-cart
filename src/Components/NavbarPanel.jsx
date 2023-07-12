import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";

const NavbarPanel = () => {
    const cartProdcucts = useSelector(state => state.cart)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Nav>
                    <Nav.Link to='/' as={Link} >Dashboard</Nav.Link>
                </Nav>
                <NavbarToggle />
                <NavbarCollapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link to='/cart' as={Link} >My Bag {cartProdcucts.length}</Nav.Link>
                    </Navbar.Text>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
export default NavbarPanel;
