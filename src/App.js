// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useHistory, useLocation } from "react-router";

import { useEffect } from "react";
import { ReactDOM } from "react-dom";
import ReactGA from "react-ga";
function App() {
  // useEffect(()=>{
  //   ReactGA.initialize("UA-209931511-1", { testMode: true, debug: true });
  //   ReactGA.pageview("/");
  //   console.log("tracked");
  // },[])
  const username = "";
  useEffect(() => {
    ReactGA.initialize("UA-209931511-1", {
      gaOptions: {
        userId: username ? username : "Not-Logged",
      },
      cookieDomain: "auto",
      debug: true,
      alwaysSendToDefaultTracker: false,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA.ga());
    // console.log
  }, []);
  
   
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
