import imageSrc from "../assets/images/workInProcess.gif";
import { useLocation, useHistory } from "react-router-dom";

const Blog = () => {
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
