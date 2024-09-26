import Heading from "../Heading";
import MagneticButton from "../MagneticButton";
import ProjectList from "../project/ProjectList";

export default function ProjectSection() {
  const projects = [
    {
      title: "Project 1",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project3",
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project4",
    },
    {
      title: "Project 5",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project5",
    },
    {
      title: "Project 6",
      image: "https://via.placeholder.com/500",
      link: "https://example.com/project5",
    },
  ];
  return (
    <section id="projects" className="mb-16 flex flex-col items-center">
      <div className="flex w-3/4 justify-start">
        <MagneticButton className="mb-4">
          <Heading>Projects</Heading>
        </MagneticButton>
      </div>
      <ProjectList projects={projects} />
    </section>
  );
}
