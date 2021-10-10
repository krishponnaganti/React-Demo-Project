import { Card, Row, CardColumns, Col } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("scroll top");
  }, []);
  const matchs = useRouteMatch({
    path: "/home",
    strict: true,
    sensitive: true,
  });
  console.log(matchs);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "Redux",
    "PHP",
    "RestFull Service (APIs)",
    "REDIS",
    "JQuery",
    "MySQL",
    "MariaDB",
    "AWS (S3 , dynamo DB)",
    "GIT",
  ];
  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      certBy: "freeCodeCamp.org",
      description: "",
      creds:
        "https://freecodecamp.org/certification/fcc2cb0c821-35a6-43e0-9667-2c1f593a4c09/javascript-algorithms-and-data-structures",
    },
    {
      title: "Basic Javascript",
      certBy: "HackerRank",
      description: "",
      creds: "https://www.hackerrank.com/certificates/2ac6a670b683",
    },
  ];
  return (
    <>
      <div>
        <Card bg="light" text="dark" style={{ width: "" }} className="m-2">
          <Card.Header>SKILLS</Card.Header>
          <Card.Body>
            <Card.Title>Technologies</Card.Title>
            <Card.Text>
              {skills.map((skill) => (
                <div>{skill}</div>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light" text="dark" style={{ width: "" }} className="m-2">
          <Card.Header>CERTIFICATIONS</Card.Header>
          {certifications.map((cert) => {
            return (
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Subtitle>{cert.certBy}</Card.Subtitle>
                <Card.Text>
                  Credentials :<Card.Link href={cert.creds}>View</Card.Link>
                </Card.Text>
              </Card.Body>
            );
          })}
        </Card>
      </div>
    </>
  );
}
export default Home;
