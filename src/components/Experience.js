import { Container } from "react-bootstrap";
import ResumePdf from "./ResumePdf";
// import FilePdf from './FilePdf'
import { useEffect } from "react";
import ReactGA from 'react-ga';
const Experience = () => {
  useEffect(() => {
    //  window.scrollTo(0, 0);
    //  console.log("scroll top");
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(ReactGA.ga());
  }, []);
  return (
    <>
      <div>
        <ResumePdf />
      </div>
    </>
  );
};
export default Experience;
