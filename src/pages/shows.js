import * as React from "react";
import Layout from "../components/layout";

class ShowsPage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <Layout pageTitle="Shows">
            <h2>The best shows online</h2>
            <p>Netflix, Prime video</p>
        </Layout>
      )
    }
}

export default ShowsPage
