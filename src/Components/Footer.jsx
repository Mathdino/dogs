import React from "react";
import styles from "./Footer.module.css";
import DogsFooter from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={DogsFooter} alt="Logo Dogs" />
      <p>&copy; Dogs. Alguns direitos reservados 2025</p>
    </footer>
  );
};

export default Footer;
