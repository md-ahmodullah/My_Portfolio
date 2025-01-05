import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { TbStackFront } from "react-icons/tb";
export default function FrontendSkills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section className="w-10/12 mx-auto my-10 py-8 border border-blue-400 shadow-sm shadow-blue-400 p-4 rounded-lg">
      <div className="flex items-center justify-center gap-3 pb-12">
        <TbStackFront className="text-4xl font-bold text-blue-400" />
        <h1 className="text-3xl font-bold text-blue-400">
          Frontend Development
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="mr-8 w-44 flex flex-col items-center gap-3 border border-blue-500 py-4 rounded-lg shadow-md shadow-blue-500"
            >
              <p>{skill.technology_name}</p>
              <img
                src={skill.image_link}
                alt={skill.technology_name}
                className="w-16 h-16"
              />
              <progress
                className="progress progress-warning w-24"
                value={skill.value}
                max="100"
              ></progress>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
