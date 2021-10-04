import { Card, Row } from "react-bootstrap";
const About = () => {
  const experienceData = [
    {
      company: "Cartrade Tech Ltd.",
      role: "Senior Engineer",
      responsibility: [
        "Getting Requirement from Operations team",
        "Analysing that requirement and collecting pre-requisites",
        "Finalizing module and providing timiles",
        "Starting develeopment to fulfill all requirement in production",
        "Sharing knowledge to the team and helping to resolve project technincal issues if any",
        "PreCparing database architecture like creation of tables and it's structure",
        "Moving to Quality Control team to start QA on it",
        "Collecting feedback and resolving and roll out final build into production",
      ],
    },
  ];
    
  return (
     <div>{experienceData.map((exp) => 
      {
       return (
         <Card bg="light" text="dark" style={{ width: "" }} className="mb-2">
           <Card.Header>Working at {exp.company}.</Card.Header>
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
      })}</div>
    
  );
};
export default About;
