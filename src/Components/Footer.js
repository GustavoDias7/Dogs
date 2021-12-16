import React from "react";
import style from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <Dogs />
        <p>Dogs. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
