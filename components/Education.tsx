import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Sri Venkateshwara College of Technology"
          subTitle="2020 - 2024"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Dhanalakshmi Srinivasan Higher Secondary School"
          subTitle="2018-2020"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Alagappa Schools"
          subTitle="2017-2018"
          icon={<SiFreelancer />}
        />

      
      </div>
    </div>
  );
};

export default Experience;
