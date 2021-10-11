import { Card } from "react-bootstrap";
import { useEffect } from "react";

const Projects = () => {
  useEffect(()=>{
     window.scrollTo(0,0);
     console.log('scroll top');
  },[])
  const projects = [
    {
      title: "Cartradeexchange",
      client: "Cartrade",
      description:
        "This is dealer's management system in which dealer can interact with market place vehicles as they can buy/sell vehicles. There is a system called auctions where dealers can participate.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Restfull Services",
        "MySQL",
        "GIT",
        "MariaDB",
        "AWS(S3,Dynamo db)",
      ],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing algorithms with the workflow",
        "Bug fixing as per QA",
        "Supporting team members if they have any queries regarding specification and in code level",
        "Communicating with project manager about the specification and it's timelines",
      ],
      website: "https://www.cartradeexchange.com/",
    },
    {
      title: "Adroit",
      client: "Adroit",
      description:
        "This is vehicle management system in which vehicle details can be added by different branches->regions->head offices and respected executive can go there visit customer and collect it and process it with all information.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Restfull Services",
        "MySQL",
        "GIT",
        "MariaDB",
        "AWS(S3,Dynamo db)",
      ],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing algorithms with the workflow",
        "Bug fixing as per QA",
        "Supporting team members if they have any queries regarding specification and in code level",
        "Communicating with project manager about the specification and it's timelines",
      ],
      website: "https://ops.adroitauto.in/",
    },

    {
      title: "HDFC Asset Secure",
      client: "HDFC",
      description:
        "This is OEM finance project which can be used to add the vehicles as a cases and process them for reposession by the executives.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Restfull services",
        "MySQL",
        "GIT",
        "MariaDB",
        "AWS(S3,Dynamo db)",
      ],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing algorithms with the workflow",
        "Bug fixing as per QA",
        "Supporting team members if they have any queries regarding specification and in code level",
        "Communicating with project manager about the specification and it's timelines",
      ],
      website: "https://hdfc.cartradeexchange.com/login",
    },
    {
      title: "SAMIL R2R",
      client: "Cartrade",
      description:
        "This is OEM finance project which can be used to add the vehicles as a cases and process them for reposession by the executives.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Restfull Services",
        "MySQL",
        "GIT",
        "MariaDB",
        "AWS(S3,Dynamo db)",
      ],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing algorithms with the workflow",
        "Bug fixing as per QA",
        "Supporting team members if they have any queries regarding specification and in code level",
        "Communicating with project manager about the specification and it's timelines",
      ],
      website: "https://samilr2r.com/login",
    },

    {
      title: "KOTAK",
      client: "Cartrade",
      description:
        "This is OEM finance project which can be used to add the vehicles as a cases and process them for reposession by the executives.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Restfull Services",
        "MySQL",
        "GIT",
        "MariaDB",
        "AWS(S3,Dynamo db)",
      ],
      roles: [
        "Working as active team player",
        "Getting requirement from the team/client",
        "Collecting pre-requisites to start and sending queries if any about that requirement and finalizing",
        "Creating architecture for frontend and the backend and preparing algorithms with the workflow",
        "Bug fixing as per QA",
        "Supporting team members if they have any queries regarding specification and in code level",
        "Communicating with project manager about the specification and it's timelines",
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
            bg="dark"
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
                Techonologies involved : {project.technologies.join(" | ")}
              </Card.Text>
              <Card.Text>
                Role and responsibility :
                {project.roles.map((role) => (
                  <li>{role}</li>
                ))}
              </Card.Text>
              <Card.Text>
                Description : {project.description}
              </Card.Text>
              <Card.Link href={project.website} target="_new">{project.title}</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Projects;
