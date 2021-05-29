import * as React from "react";
import Layout from "../components/layout";

class RecipesPage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <Layout pageTitle="Recipes">
          <p>My go to recipes</p>
        </Layout>
      )
    }
}

export default RecipesPage
