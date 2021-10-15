// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import ReactGA from "react-ga";
import axios from "axios";
function App() {
  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  
  // console.log("render");
  useEffect(() => {
    //passing getData method to the lifecycle method
    // console.log("ip check");
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      // console.log(res.data);
      setIP(res.data.IPv4);
      ReactGA.initialize("UA-209931511-1", {
        gaOptions: {
          userId: res.data.IPv4,
        },
        cookieDomain: "auto",
        debug: true,
        alwaysSendToDefaultTracker: false,
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
      // console.log(ReactGA.ga());
    };
    getData();
    
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
