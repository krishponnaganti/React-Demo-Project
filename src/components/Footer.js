import {Navbar,Nav,Container} from "react-bootstrap"
import SocialFollow from "../components/SocialFollow"
const Footer=()=>{
    return (
      <>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Nav className="ml-auto">
                <Nav.Item>
                  <SocialFollow />
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </>
    );
}
export default Footer;