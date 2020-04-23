import React from "react";
import { Link } from "gatsby";

const NavLinks = () => (
  <ul>
    <li>
      <a
        href="https://www.meetup.com/Ladies-That-UX-Boston/"
        alt="meetup"
        target="_blank"
        rel="noopener noreferrer"
      >
        meetup
      </a>
    </li>
    <li>
      <Link to="about">about</Link>
    </li>
    <li>
      <a
        href="mailto:boston@ladiesthatux.com"
        alt="contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        contact
      </a>
    </li>
    <li>
      <a
        href="https://docs.google.com/document/d/1w05mQwGxsBzrg1zGs_iV8oy_B5o15efXsaAOtVgngWg/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        alt="code of conduct"
      >
        code of conduct
      </a>
    </li>
  </ul>
);

export default NavLinks;
