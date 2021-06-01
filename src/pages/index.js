import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import CodingAnimation from "../components/coding-animation";
import {
  cross
} from "./index.module.css";
import SolarSystem from "../components/solar-system";
class IndexPage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <Layout pageTitle="Home Page">
          <SolarSystem />
          <CodingAnimation />
        </Layout>
      )
    }
}

export default IndexPage
