import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/header.module.less";
import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";

const Sidebar = props => (
  // Pass on our props
  <Menu {...props}>
    <NavLinks />
    <SocialLinks className={styles.socialLinks} />
  </Menu>
);

export default Sidebar;
