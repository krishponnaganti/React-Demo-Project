import imageSrc from "../assets/images/workInProcess.gif";
import {useLocation,useHistory} from "react-router-dom";
import ReactGA from "react-ga"
const Blog = () => {
  let history = useHistory();
  let location = useLocation();
  // console.log(location);
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
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
