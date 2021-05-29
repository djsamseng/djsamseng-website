import React from "react";
import ReactDOM from "react-dom";
import { container, typing, hiders,
    purple,
    codeBlue,
    codeRed,
    codeLightBlue,
    codeGreen,
    codeLightGreen,
} from "./coding-animation.module.css";

type Props = {};
type State = {};

class CodingAnimation extends React.Component<Props, State> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={container}>
              <p className={typing}>
                <span className={codeBlue}>unsigned </span>
                <span className={codeGreen}>int </span>
                <span className={codeLightBlue}>num_neurons </span>
                <span>= </span>
                <span className={codeLightGreen}>5 * 1000 * 1000;</span>
                <br />
                <span className={codeGreen}>string </span>
                <span className={codeLightBlue}>neuron_key </span>
                <span>= </span>
                <span className={codeRed}>"jade1502";</span>
                <br/>
              </p>

              <div className={hiders}>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>

            </div>
        );
    }
}

export default CodingAnimation
