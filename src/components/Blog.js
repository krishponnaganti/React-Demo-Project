import imageSrc from "../assets/images/workInProcess.gif";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react"
import ReactGA from "react-ga"

const Blog = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
     //  console.log("scroll top");
     ReactGA.pageview(window.location.pathname + window.location.search);
     console.log(ReactGA.ga());
   }, []);
  return (
    <>
      {/*  <div>Blog work in process..</div> */}
      <div className="text-center m-5">
        <img src={imageSrc} />
      </div>
    </>
  );
};
export default Blog;
