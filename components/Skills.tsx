import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Java" link="" />
        <SkillsInput title="Python" link="" />
        <SkillsInput title="Html" link="" />
        <SkillsInput
          title="CSS"
          link=""
        />
        <SkillsInput title="Power BI" link="" />
        <SkillsInput title="MySQL" link="" />
        <SkillsInput title="MongoDB" link="" />
        <SkillsInput
          title="React"
          link=""
        />
        <SkillsInput title="Springboot" link="https://tailwindcss.com/" />
        <SkillsInput title="AWS" link="" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput
          title="Atom"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="MS Office" link="https://trello.com/en" />
        <SkillsInput title="Jenkins" link="https://www.gitkraken.com/" />
        <SkillsInput title="UI Design" link="https://www.figma.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput
          title="Maven"
          link=""
        />
        <SkillsInput title="Networking" link="" />
        <SkillsInput title="Security" link="" />
        <SkillsInput title="Database" link="" />
        <SkillsInput title="Linux" link="" />
      </div>
    </div>
  );
};

export default Skills;
