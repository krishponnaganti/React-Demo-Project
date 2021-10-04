import "../css/App.css";
import { makeStyles } from "@material-ui/core";
import React, { Suspense, useEffect, useState } from "react";
import {
  DropdownButton,
  Dropdown,
  Container,
  Navbar,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import About from "../components/About";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";
import ErrorBoundary from "../components/ErrorBoundary";
import Sample from "../components/Sample";
import AppWrapper from "../components/SignUp";
const Testimonial = React.lazy(() => import("../components/Testimonial"));
const Header = (props) => {
  const classStyle = () => ({
    removeTextDecoration: {
      textDecoration: "none",
      color: "#CCC",
    },
  });
  const getClassStyle = classStyle();
  
  //  let match = useRouteMatch("/home/:slug");
  //  console.log("matching..");
  //  console.log(match);

  const pathUrl = window.location.pathname.replace("/", "");
  const [active, setActiveMenu] = useState(pathUrl);
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <span className="m-1"> S G A R K PONNAGANTI</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              variant="pills"
              activeKey={active}
              onSelect={(selectedKey) => setActiveMenu(selectedKey)}
            >
              <Nav.Link eventKey="home">
                <Link to="/home" style={getClassStyle.removeTextDecoration}>
                  Home
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="/about">About</Nav.Link> */}
              <Nav.Link eventKey="about">
                <Link to="/about" style={getClassStyle.removeTextDecoration}>
                  Work Place
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="projects">
                <Link to="/projects" style={getClassStyle.removeTextDecoration}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="experience">
                <Link
                  to="/experience"
                  style={getClassStyle.removeTextDecoration}
                >
                  Resume
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
              <Nav.Link eventKey="testimonial">
                <Link
                  to="/testimonial"
                  style={getClassStyle.removeTextDecoration}
                >
                  Testimonial
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="signup">
                <Link to="/signup" style={getClassStyle.removeTextDecoration}>
                  Sign-Up
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Welcome}>
              <Welcome />
            </Route>
            <Route path="/testimonial">
              <Testimonial />
            </Route>
            {/* <Route path="/home">
                    <Home />
                  </Route> */}
            <Route path="/home" component={Home}>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Route>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/experience" component={Experience}>
              <Experience />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/signup">
              <AppWrapper />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
export default Header;
