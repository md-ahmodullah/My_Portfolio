import { BiGitRepoForked } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { SiOpensourcehardware } from "react-icons/si";
import { useLoaderData, useParams } from "react-router-dom";
export default function DetailsPage() {
  const data = useLoaderData();
  const { id } = useParams();
  const details = data.find((d) => d.id === id);
  return (
    <section className="my-5 py-4 w-10/12 mx-auto">
      <div className="border-b-2 border-blue-400 pb-2 font-poppins">
        <h1 className="text-xl md:text-2xl font-bold text-orange-400">
          {details.title}
        </h1>
        <p>{details.briefDescription}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-5 font-lato">
        <div className="space-y-3">
          <p>{details.details}</p>
          <h2 className="font-bold text-sm md:text-lg">
            Main Technology Stack
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {details.mainTechnologyStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaTools className="text-sm text-orange-400" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <FiExternalLink className="text-xl text-blue-400" />
            <a
              href="https://hope-hive.netlify.app/"
              target="_blank"
              className="text-base md:text-lg text-blue-400"
            >
              {details.liveLink}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <BiGitRepoForked className="text-xl text-blue-400" />
            <a
              href="https://github.com/md-ahmodullah/HopeHive"
              target="_blank"
              className="text-base md:text-lg text-blue-400"
            >
              {details.githubLink}
            </a>
          </div>
          {details.challenges.map((challenge, i) => (
            <div key={i} className="flex items-center gap-2">
              <SiOpensourcehardware className="text-lg text-red-500" />
              <p className="text-sm md:text-base">
                <span className="font-bold">Challenges-{i + 1} : </span>
                {challenge}
              </p>
            </div>
          ))}
          {details.lackings.map((lacking, i) => (
            <div key={i} className="flex items-center gap-2">
              <MdOutlineErrorOutline
                className="text-xl text-yellow-500"
                title="Lackings"
              />
              <p className="text-sm md:text-base">
                <span className="font-bold">Lackings-{i + 1} : </span>
                {lacking}
              </p>
            </div>
          ))}
          {details.improvements.map((improvement, i) => (
            <div key={i} className="flex items-center gap-2">
              <GiProgression
                className="text-xl text-green-400"
                title="Improvement"
              />
              <p className="text-sm md:text-base">
                <span className="font-bold">Improvement-{i + 1} : </span>
                {improvement}
              </p>
            </div>
          ))}
        </div>
        <div className="h-[500px] border border-blue-400 rounded-lg p-6 bg-base-300 overflow-hidden shadow-sm shadow-blue-400 relative">
          <div className="flex flex-col gap-5 animate-verticalMarquee">
            {details.images.map((image, i) => (
              <img key={i} src={image} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
