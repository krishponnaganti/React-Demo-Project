import { Navbar, Nav, Container } from "react-bootstrap";
import SocialFollow from "../components/SocialFollow";
import { useLocation, useHistory } from "react-router-dom";
import ReactGA from "react-ga";
const Footer = () => {
  return (
    <>
      <div style={{ clear: "both", height: "50px" }}></div>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
          <Container>
            <Nav className="ml-auto">
              <Nav.Item>
                <Navbar.Text>Connect me here:</Navbar.Text>
              </Nav.Item>
              <Nav.Item>
                <SocialFollow />
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Footer;
