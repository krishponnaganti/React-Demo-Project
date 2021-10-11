import { Card, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ReactGA from "react-ga";
const About = () => {
  let history = useHistory();
  let location = useLocation();
  // console.log(location);
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll top");
  }, []);
  const experienceData = [
    {
      company: "HCL Technologies",
      role: "Technical Lead",
      responsibility: ["OnBoarding..."],
    },
    {
      company: "Cartrade Tech Ltd.",
      role: "Senior Software Engineer",
      responsibility: [
        "Getting Requirement from Operations team",
        "Analysing that requirement and collecting pre-requisites",
        "Finalizing module and providing timelines",
        "Starting development as per designed workflow with all requirement in production",
        "Sharing knowledge to the team and helping to resolve project technincal issues if any",
        "Preparing database architecture like creation of relational tables and it's configuration",
        "Pushing developed modules to Quality Control team to start QA on it",
        "Collecting feedback and resolving and roll out final build into production",
      ],
    },
  ];

  return (
    <div>
      {experienceData.map((exp) => {
        return (
          <Card
            bg="secondary"
            text="light"
            style={{ width: "" }}
            className="m-2"
          >
            <Card.Header>{exp.company}</Card.Header>
            <Card.Body>
              <Card.Title>Role</Card.Title>
              <Card.Text>{exp.role}</Card.Text>
              <Card.Title>Responsibilities</Card.Title>
              <Card.Text>
                {exp.responsibility.map((respo) => (
                  <li>{respo}</li>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default About;
