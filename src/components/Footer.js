import React from "react";

const d = new Date();
let year = d.getFullYear();
const Footer = () => (
  <div className="footer">
    <p>Copyright &copy; {year} | Made with 💗 using <a href='https://reactjs.org/' className="link-info">React</a></p>
  </div>
);

export default Footer;