// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';
import { Container, Navbar} from 'react-bootstrap';


const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" >
        <Container >
          <Navbar.Brand href="#home">Test</Navbar.Brand>
          <Link to ="/home" style={{color:"white",marginRight:"50%"}}>Home</Link>
        </Container>
    </Navbar>
     
       
 </>
  )
}

export default Header