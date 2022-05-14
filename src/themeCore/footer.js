import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "/src/styles/footer.css";

const Footer = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFooterCompanyLinks(
        sort: { order: ASC, fields: orderPosition }
      ) {
        edges {
          node {
            linkTitle
            linkUrl
          }
        }
      }
      allContentfulFooterAgentLinks(
        sort: { order: ASC, fields: orderPosition }
      ) {
        edges {
          node {
            linkTitle
            linkUrl
          }
        }
      }
      allContentfulFooterSpecialtyLinks(
        sort: { order: ASC, fields: orderPosition }
      ) {
        edges {
          node {
            linkTitle
            linkUrl
          }
        }
      }
      allContentfulFooterSearchLinks(
        sort: { order: ASC, fields: orderPosition }
      ) {
        edges {
          node {
            linkTitle
            linkUrl
          }
        }
      }
      allContentfulFooterSocialLinks(
        sort: { order: ASC, fields: orderPosition }
      ) {
        edges {
          node {
            linkTitle
            linkUrl
          }
        }
      }
    }
  `);
  return (
    <div className="Footer">
      <div className="FooterContent">
        <div>
          <p>
            <strong>Company</strong>
          </p>
          <ul>
            {data.allContentfulFooterCompanyLinks.edges.map(
              ({ node, index }) => (
                <li>
                  <a href={node.linkUrl}>{node.linkTitle}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p>
            <strong>Specialities</strong>
          </p>
          <ul>
            {data.allContentfulFooterSpecialtyLinks.edges.map(
              ({ node, index }) => (
                <li>
                  <a href={node.linkUrl}>{node.linkTitle}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p>
            <strong>Agents</strong>
          </p>
          <ul>
            {data.allContentfulFooterAgentLinks.edges.map(({ node, index }) => (
              <li>
                <a href={node.linkUrl}>{node.linkTitle}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            <strong>Search</strong>
          </p>
          <ul>
            {data.allContentfulFooterSearchLinks.edges.map(
              ({ node, index }) => (
                <li>
                  <a href={node.linkUrl}>{node.linkTitle}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p>
            <strong>Social</strong>
          </p>
          <ul>
            {data.allContentfulFooterSocialLinks.edges.map(
              ({ node, index }) => (
                <li>
                  <a href={node.linkUrl}>{node.linkTitle}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
