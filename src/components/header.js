import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "/src/components/header.css";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "/src/images/kw-red.svg"
import Logokwx from "/src/images/kwx.svg"


const Header = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
              title
            }
          }
    }
  `);
  return (
    <>
      <div className="prenav">
        <div className="prenavContent">
        <a href="/"><Logokwx className="kwx-logo" /></a>
        <br></br>
        <p><a>Properties</a></p>
        <p><a>Headquarters</a></p>
        <p><a>Outfront</a></p>
        <p><a>Technology</a></p>
        <a href="https://www.google.com" className="prenavBtn">Join KW</a>
        </div>
      </div>
      <div className="header">
        <div className="headerContent">
        <a href="/"><Logo className="main-logo" /></a>
        <a href="/" className="siteTitle"><p>Headquarters</p></a>
        <a href="/" className="headerBtnPrimary"><p>Find an Office Near You</p></a>
        </div>
      </div>
    </>
  );
};

export default Header;
