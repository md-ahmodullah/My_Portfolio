import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 font-poppins">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8 text-2xl">
            <a
              href="https://github.com/md-ahmodullah?tab=repositories"
              target="_blank"
              title="Open Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-ahmodullah/"
              target="_blank"
              title="Open LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://x.com/" target="_blank" title="Open Twitter">
              <FaTwitter />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by MD
            AHMODULLAH
          </p>
        </aside>
      </footer>
    </>
  );
}
