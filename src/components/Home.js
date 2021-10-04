import { Card, Row, CardColumns, Col } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

function Home(props) {
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
      <Card bg="light" text="dark" style={{ width: "" }} className="mb-2">
        <Card.Header>Skills</Card.Header>
        <Card.Body>
          <Card.Title>Technogies</Card.Title>
          <Card.Text>
            {skills.map((skill) => (
              <div>{skill}</div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" style={{ width: "" }} className="mb-2">
        <Card.Header>Certifications</Card.Header>
        {certifications.map((cert) => {
          return (
            <Card.Body>
              <Card.Title>{cert.title}</Card.Title>
              <Card.Subtitle>{cert.certBy}</Card.Subtitle>
              <Card.Text>
                Credentials :  
                <Card.Link href={cert.creds}>View</Card.Link>
              </Card.Text>
            </Card.Body>
          );
        })}
      </Card>
    </>
  );
}
export default Home;
