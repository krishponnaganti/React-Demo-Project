import { Container } from "react-bootstrap";
import ResumePdf from "./ResumePdf";
// import FilePdf from './FilePdf'
import { useLocation,useHistory } from "react-router-dom";
import ReactGA from "react-ga"
const Experience = () => {
  let history = useHistory();
  let location = useLocation();
  // console.log(location);
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
  return (
    <>
      <div>
        <ResumePdf />
      </div>
    </>
  );
};
export default Experience;
