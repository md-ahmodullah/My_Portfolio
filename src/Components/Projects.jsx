import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section id="projects" className="bg-base-300 py-20">
      <h1 className="text-4xl text-center font-bold text-blue-400 font-poppins">
        My Projects
      </h1>
      <div className="w-10/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center font-lato">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-compact bg-transparent border border-blue-400 shadow-sm shadow-blue-400"
          >
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="h-[250px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-500">{project.title}</h2>
              <div className="w-full">
                <Link
                  to={`/projects/details/${project.id}`}
                  className="btn btn-outline text-blue-400 hover:bg-orange-500 w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
