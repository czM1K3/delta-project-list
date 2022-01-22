import React from "react";
import Link from "next/link";
import { ClassSwitch } from "../class-switch";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand mb-0 h1 cursor-pointer">
            Maturitní projekty
          </span>
        </Link>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link href="/keywords">
              <span className="nav-link cursor-pointer">Keywords</span>
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          <a
            href="https://github.com/kkoudelka/delta-project-list"
            target="_blank"
            className="btn btn-outline-primary btn-floating mx-2"
          >
            <i
              className="fab fa-github"
              data-mdb-toggle="tooltip"
              title="GitHub repo projektu"
            ></i>
          </a>
          <ClassSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
