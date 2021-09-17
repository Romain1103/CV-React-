import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/billGates.jpg" alt="profil-pic" />
          <h3>Romain Galtier</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/Romain1103"
              target="_blanlk"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/romaingaltier/"
              target="_blanlk"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
            <p>Romain Galtier - 2021 </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
