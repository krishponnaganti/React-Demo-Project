// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useHistory, useLocation } from "react-router";
import { useEffect ,useState} from "react";
import { ReactDOM } from "react-dom";
import ReactGA from "react-ga";
import axios from "axios";
function App() {
  // useEffect(()=>{
  //   ReactGA.initialize("UA-209931511-1", { testMode: true, debug: true });
  //   ReactGA.pageview("/");
  //   console.log("tracked");
  // },[])
  //creating IP state
  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };
  const username = "";
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    ReactGA.initialize("UA-209931511-1", {
      gaOptions: {
        userId: ip ? ip : "Not-Logged",
      },
      cookieDomain: "auto",
      debug: true,
      alwaysSendToDefaultTracker: false,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA.ga());
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
