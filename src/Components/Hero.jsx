import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/documents/Email Writting.pdf";
import myImage from "../assets/images/heroImage.png";
export default function Hero() {
  return (
    <section className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-14 lg:py-0">
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl text-blue-400 font-semibold font-poppins">
              Frontend Developer
            </h1>
            <p>
              Welcome to my portfolio! I am a passionate frontend developer
              specializing in React, crafting dynamic and user-friendly web
              interfaces. With additional knowledge of MongoDB, Node.js, and
              Express.js, I bring full-stack functionality to my projects.
              Explore my work to see how I transform ideas into interactive and
              efficient web solutions.
            </p>
          </div>
          <div className="flex gap-5 text-xl text-blue-500">
            <div className="border border-blue-500 p-2 rounded-lg shadow-md shadow-blue-400 ease-in">
              <a
                href="https://github.com/md-ahmodullah?tab=repositories"
                target="_blank"
                title="Open Github"
              >
                <FaGithub />
              </a>
            </div>
            <div className="border border-blue-500 p-2 rounded-lg shadow-md shadow-blue-400">
              <a
                href="https://www.linkedin.com/in/md-ahmodullah/"
                target="_blank"
                title="Open LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="border border-blue-500 p-2 rounded-lg shadow-md shadow-blue-400">
              <a href="https://x.com/" target="_blank" title="Open Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <a href={resume} target="_blank" download>
              <button className="btn bg-orange-500 text-white font-semibold font-poppins">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={myImage} alt="My_Image" />
        </div>
      </div>
    </section>
  );
}
