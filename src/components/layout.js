import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css";

class Layout extends React.Component {
    // { pageTitle, children }
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <main className={container}>
          <title>{this.props.pageTitle}</title>
          <nav>
              <ul className={navLinks}>
                  <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                      Home
                    </Link>
                  </li>
                  <li className={navLinkItem}>
                    <Link to="/shows" className={navLinkText}>
                      Shows
                    </Link>
                  </li>
                  <li className={navLinkItem}>
                    <Link to="/recipes" className={navLinkText}>
                      Recipes
                    </Link>
                  </li>
              </ul>
          </nav>
          <h1 className={heading}>
            {this.props.pageTitle}
          </h1>
          {this.props.children}
        </main>
      )
    }
}

export default Layout;
