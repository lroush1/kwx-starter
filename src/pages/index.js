import * as React from "react";
import "/src/styles/index.css";
import Footer from "../themeCore/footer";
import Header from "../themeCore/header";
import Hero from "../components/hero";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data, children }) => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default IndexPage;
