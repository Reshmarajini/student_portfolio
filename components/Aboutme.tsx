import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a Software Developer,  I have a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications. Languages are
          Java,Python, HTML, CSS, JavaScript, MySQL,  Power BI and AWS Services
          coupled with hands-on experience gained through various projects and training,
          I am excited about the opportunity to contribute as a team. I am a strong communicator and team player. I am able to work
          effectively with cross-functional teams and am comfortable taking on
          new challenges and learning new technologies as needed.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
