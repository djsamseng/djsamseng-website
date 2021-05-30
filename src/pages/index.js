import * as React from "react";
import { Link } from "gatsby";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import CodingAnimation from "../components/coding-animation";
import {
  cross
} from "./index.module.css";
class IndexPage extends React.Component {
    constructor() {
      super();
    }

    render() {
      const makeCross = (left, top, scale) => {
        const width = 30 / scale;
        const height = 44.58 / scale;
        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg viewBox={viewBox} style={{
              position: "absolute",
              left: left,
              top: top,
              stroke: "#2d3748",
              fill: "#2d3748",
            }}>
              <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
              <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
            </svg>
        );
      }
      const makeEllipse = (left, top, scale) => {
        const width = 210 / scale;
        const height = 110 / scale;
        const viewBox = `0 -50 ${width} ${height}`;
        const yAdjust = (1 - scale) * 100;
        const cy = 50 + yAdjust;
        return (
          <svg viewBox={viewBox} style={{
            position:"absolute",
            left,
            top,
            zIndex: -1,
            opacity: 0.5,
          }}>
            <ellipse cx="100" cy={cy} rx="100" ry="50" style={{
              fill:"none",
              stroke: "#fff",
              strokeWidth: 1,
              transform: "rotate3d(1, 1, 1, -45deg)"
            }}/>
          </svg>
        )
      };
      return (
        <Layout pageTitle="Home Page">
          <div style={{width: "100%", height: "50px", zIndex: -1}}>
            {makeEllipse("0%", "0%", 1)}
            {makeEllipse("10%", "0%", 0.6)}
          </div>
          <div className={cross}>
            {makeCross("77%", "0px", 0.1)}
            {makeCross("78%", "10px", 0.1)}
            {makeCross("79%", "20px", 0.1)}
            {makeCross("80%", "30px", 0.1)}
          </div>
          
          <CodingAnimation />
          

          <Parallax pages={2} style={{ top: '1000px', left: '0' }}>
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
