// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useHistory,useLocation } from "react-router";
import ReactGA from "react-ga";
import { useEffect } from "react";
function App() {
//  ReactGA.initialize("G-0YFP5Y996K");
  useEffect(()=>{
    ReactGA.initialize("UA-209931511-1");
    ReactGA.pageview("/");
  },[])
  return (
    <>
      <div className="col-md-12">
        <Header />
        <Footer />
      </div>
    </>
  );
}
export default App;
