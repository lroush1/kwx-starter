import * as React from "react";
import "/src/styles/index.css";
import Footer from "../themeCore/footer";
import Header from "../themeCore/header";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data, children }) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default IndexPage;
