import * as React from "react";
import { Link } from "gatsby";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import CodingAnimation from "../components/coding-animation";
import Video from "../images/DJSamSengBackgroundVideo.mp4";
class IndexPage extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <Layout pageTitle="Home Page">
          <div>
            <video src={Video} autoPlay={true} muted={true} loop={true}/>
          </div>
          <CodingAnimation />

          <Parallax pages={2} style={{ top: '50', left: '0' }}>
            <Hero offset={0} factor={1}/>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }}>
              <p>Want to change the world?</p>
            </ParallaxLayer>
          </Parallax>
        </Layout>
      )
    }
}

export default IndexPage
