import resume from "../assets/documents/Email Writting.pdf";
import logo from "../assets/logo.png";
export default function Navbar() {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" className="h-10 w-16" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex border border-blue-500 shadow-sm shadow-blue-400 rounded-full">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a href={resume} download>
            <button className="btn bg-orange-500 text-white font-semibold font-poppins">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
