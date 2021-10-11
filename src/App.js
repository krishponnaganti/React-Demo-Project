// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useHistory,useLocation } from "react-router";
import ReactGA from "react-ga";
function App() {
 ReactGA.initialize("G-0YFP5Y996K");
  
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
