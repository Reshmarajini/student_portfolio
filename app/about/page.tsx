import Navbar from "../../components/Navbar"; // Import Navbar

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-center mt-8">About Me</h1>
      <p className="text-center mt-4">This page contains information about me.</p>
    </div>
  );
};

export default AboutPage;
