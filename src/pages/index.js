import * as React from "react";
import "/src/components/index.css";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = ({data, children}) => {
  return (
    <><Header />
    <Hero />
    <Footer /></>
      )
  }

      export default IndexPage;