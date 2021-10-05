import { Card } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      title: "Cartradeexchange",
      client: "Cartrade",
      description: "This is dealer's management system",
      technologies:
        ["HTML","CSS","JavaScript","PHP","MySql","GIT","MariaDB","AWS(S3,Dynamo db)"],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing alogorithms with the workflow",
        "Bug fixing as per feedback from operations team",
        "Supporting team members if they have any queries regarding specification and in coding",
        "Communicating with project manager about the specification and it's timelines"
      ],
      website: "https://www.cartradeexchange.com/",
    },
    {
      title: "Adroit",
      client: "Cartrade",
      description: "This is dealer's management system",
      technologies:
        ["HTML","CSS","JavaScript","PHP","MySql","GIT","MariaDB","AWS(S3,Dynamo db)"],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing alogorithms with the workflow",
        "Bug fixing as per feedback from operations team",
        "Supporting team members if they have any queries regarding specification and in coding",
        "Communicating with project manager about the specification and it's timelines"
      ],
      website: "https://ops.adroitauto.in/",
    },

    {
      title: "HDFC Asset Secure",
      client: "Cartrade",
      description: "This is dealer's management system",
      technologies:
        ["HTML","CSS","JavaScript","PHP","MySql","GIT","MariaDB","AWS(S3,Dynamo db)"],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing alogorithms with the workflow",
        "Bug fixing as per feedback from operations team",
        "Supporting team members if they have any queries regarding specification and in coding",
        "Communicating with project manager about the specification and it's timelines"
      ],
      website: "https://hdfc.cartradeexchange.com/login",
    },
    {
      title: "SAMIL R2R",
      client: "Cartrade",
      description: "This is dealer's management system",
      technologies:
        ["HTML","CSS","JavaScript","PHP","MySql","GIT","MariaDB","AWS(S3,Dynamo db)"],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing alogorithms with the workflow",
        "Bug fixing as per feedback from operations team",
        "Supporting team members if they have any queries regarding specification and in coding",
        "Communicating with project manager about the specification and it's timelines"
      ],
      website: "https://samilr2r.com/login",
    },

    {
      title: "KOTAK",
      client: "Cartrade",
      description: "This is dealer's management system",
      technologies:
        ["HTML","CSS","JavaScript","PHP","MySql","GIT","MariaDB","AWS(S3,Dynamo db)"],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing alogorithms with the workflow",
        "Bug fixing as per feedback from operations team",
        "Supporting team members if they have any queries regarding specification and in coding",
        "Communicating with project manager about the specification and it's timelines"
      ],
      website: "https://kotak.cartradeexchange.com/login",
    },
  ];
   let i = 1;
  return (
    <div>
      {
     
      projects.map((project) => {
        return (
          <Card
            bg="secondary"
            text="light"
            style={{ width: "" }}
            className="m-2"
          >
            <Card.Header>PROJECT {i++}</Card.Header>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Client: {project.client}
              </Card.Subtitle>
              <Card.Text>
                Techonologies involved: {project.technologies.join(" | ")}
              </Card.Text>
              <Card.Text>
                Role and responsibility:
                {project.roles.map((role) => (
                  <li>{role}</li>
                ))}
              </Card.Text>
              <Card.Text>
                Description:
                {project.description}
              </Card.Text>
              <Card.Link href={project.link}>{project.title}</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Projects;
