import {Navbar,Nav,Container} from "react-bootstrap"
import SocialFollow from "../components/SocialFollow"
const Footer=()=>{
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
          <Container>
            <Nav className="ml-auto">
              <Nav.Item>
                <SocialFollow />
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}
export default Footer;