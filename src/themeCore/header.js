import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "/src/styles/header.css";
import Logo from "/src/images/kw-red.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };
  render() {
    return (
      <>
        <div className="prenav">
          <div className="prenavContent">
            <ul class="nav-parent-ul" data-menu-type="Universal Navigation">
              <li
                id="menu-item-947"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-947"
              >
                <a
                  href="https://technology.kw.com/?utm_source=KW_Headquarters&amp;utm_medium=referral&amp;utm_content=Technology"
                  data-toggle="modal"
                >
                  Technology
                </a>
              </li>
              <li
                id="menu-item-949"
                class="current-menu-item menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-949"
              >
                <a href="/" aria-current="page" data-toggle="modal">
                  Headquarters
                </a>
              </li>
              <li
                id="menu-item-950"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-950"
              >
                <a
                  href="https://outfront.kw.com/?utm_source=KW_Headquarters&amp;utm_medium=referral&amp;utm_content=Outfront"
                  data-toggle="modal"
                >
                  Outfront
                </a>
              </li>
              <li
                id="menu-item-948"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-948"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.kw.com/?utm_source=KW_Headquarters&amp;utm_medium=referral&amp;utm_content=Properties"
                  data-toggle="modal"
                >
                  Properties
                </a>
              </li>
              <li
                id="menu-item-1397"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1397"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://go.kw.com/join-keller-williams/?utm_source=KW_Headquarters&amp;utm_medium=referral&amp;utm_content=Join_KW"
                  data-toggle="modal"
                >
                  Join KW
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            this.state.hasScrolled ? "header headerScrolled" : "header "
          }
          id="header"
        >
          <div className="headerContent">
            <a href="/">
              <Logo className="main-logo" />
            </a>
            <a href="/" className="siteTitle">
              <p>Starter</p>
            </a>
            <a href="/allEvents" className="mainNavLink">
              <p>Link</p>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
