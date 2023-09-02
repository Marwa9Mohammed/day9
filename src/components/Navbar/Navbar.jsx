import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand >MOVIES4U</Navbar.Brand>
          <Nav className="ms-auto-dark">
            <Link className='text-decoration-none-dark mx-2' to="/">Movies</Link>
            <Link className='text-decoration-none-light mx-2 ' to="/favorites">Favorites</Link>

            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}