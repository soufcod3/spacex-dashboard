import spaceXLogo from "../assets/spacex-logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

export const Navbar = () => {
  return (
    <nav className="py-3">
      <div className="credit position-absolute d-none d-md-block">
        <img
          src={spaceXLogo}
          alt="Logo de Space X"
          style={{ width: "8rem" }}
          className="mb-1"
        />{" "}
        <br />
        <small className="text-secondary">
          présenté par SOUFIANE AÏT OUARRAOU
        </small>
      </div>
      <div className="navigation">
        <div className="nav-item d-flex justify-content-center align-items-center">
          <a
            href="https://github.com/soufcod3/spacex-dashboard"
            className="text-dark"
            target="blank"
          >
            <h2>
              <FaGithub />
            </h2>
          </a>
        </div>
        <div className="nav-item d-flex justify-content-center align-items-center">
          <a
            href="https://linkedin.com/in/soufiane-ait"
            className="text-dark"
            target="blank"
          >
            <h2>
              <FaLinkedin />
            </h2>
          </a>
        </div>
        <div className="nav-item d-flex justify-content-center align-items-center">
          <a href="https://purple-karlen-12.tiiny.site/" target="blank">
            <h2>
              <GrDocumentDownload />
            </h2>
          </a>
        </div>
      </div>
    </nav>
  );
};
