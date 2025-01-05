import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { GiProcessor } from "react-icons/gi";
export default function ToolsTech() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section className="border border-blue-400 shadow-sm shadow-blue-400 p-4 rounded-lg">
      <div className="flex items-center justify-center gap-3 pb-12">
        <GiProcessor className="text-4xl font-bold text-blue-400" />
        <h1 className="text-3xl font-bold text-blue-400">
          Tools & Technologies
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="mr-8 w-32 flex flex-col items-center gap-3 border border-blue-500 py-4 rounded-lg shadow-md shadow-blue-500"
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
