import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "/src/components/hero.css";


const Hero = ({ children }) => {
    const data = useStaticQuery(graphql`
    {
        allContentfulHqHeroContent {
            edges {
              node {
                heroBtnText
                heroBtnUrl
                h1heroText
                h4text
              }
            }
          }
    }
  `)
  return(
    <div className="heroSection">
        {data.allContentfulHqHeroContent.edges.map(({ node, index }) => (
            <>
        <h4>{node.h4text}</h4>
        <h1>{node.h1heroText}</h1>
        <a href={node.heroBtnText}>{node.heroBtnText}</a>
        </>
        ))}
    </div>
  
  )
}

export default Hero;
