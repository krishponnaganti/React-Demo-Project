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
import { BrowserRouter as Router, Switch, Route, Link ,NavLink} from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";


import ErrorBoundary from "../components/ErrorBoundary";
import DocumentMeta from "react-document-meta";
import NavItem from "@restart/ui/esm/NavItem";
import { nodeName } from "jquery";
const Experience=React.lazy(()=>import("../components/Experience"))
const Blog =React.lazy(()=>import("../components/Blog"))
const About = React.lazy(() => import("../components/About"));
const Projects = React.lazy(()=>import("../components/Projects"));
const Welcome = React.lazy(() => import("../components/Welcome"));
const Sample = React.lazy(() => import("../components/Sample"));
const AppWrapper = React.lazy(() => import("../components/SignUp"));
const Testimonial = React.lazy(() => import("../components/Testimonial"));
const Dashboard = React.lazy(()=>import("../components/Dashboard"))
const NotFound = React.lazy(() => import("../components/NotFound"));
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
  //document meta tags
  const meta={
    title:"S G A R K",
    description:"",
    canonical:"",
    meta:{
      charset:"utf-8",
      name:{
        keywords:"react,meta,document,html,tags"
      }
    }
  }
  //

  const pathUrl = window.location.pathname.replace("/", "");
  const [active, setActiveMenu] = useState(pathUrl);
  return (
    <>
      <DocumentMeta {...meta} />
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
                <Nav.Link as={NavLink} to="/home" exact>
                  Home
                </Nav.Link>
                {/* <Nav.Link eventKey="home">
                  <Link to="/home" style={getClassStyle.removeTextDecoration}>
                    Home
                  </Link>
                </Nav.Link> */}
                {/* <Nav.Link href="/about">About</Nav.Link> */}
                <Nav.Link as={NavLink} to="/about" exact>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects" exact>
                  Projects
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="/experience" exact>
                  Resume
                </Nav.Link> */}

                <Nav.Link as={NavLink} to="/blog" exact>
                  Blog
                </Nav.Link>
                <Nav.Link as={NavLink} to="/testimonial" exact>
                  Testimonial
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
                {/* <Nav.Link eventKey="testimonial">
                  <Link
                    to="/testimonial"
                    style={getClassStyle.removeTextDecoration}
                  >
                    Testimonial
                  </Link>
                </Nav.Link> */}
              </Nav>
              <Nav
                className="ml-auto"
                variant="pills"
                activeKey={active}
                onSelect={(selectedKey) => setActiveMenu(selectedKey)}
              >
                {/* <Nav.Link eventKey="signup">
                  <Link to="/signup" style={getClassStyle.removeTextDecoration}>
                    Sign up
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="signin">
                  <Link to="/signin" style={getClassStyle.removeTextDecoration}>
                    Sign in
                  </Link>
                </Nav.Link> */}
              </Nav>
              <Navbar.Text>Welcome Visitor.</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/testimonial">
                <Testimonial />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              {/* <Route path="/home">
                    <Home />
                  </Route> */}
              <Route path="/home">
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experience">
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
              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </>
  );
};
export default Header;
