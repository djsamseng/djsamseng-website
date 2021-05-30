import React from "react";
import ReactDOM from "react-dom";
import { container, typing, hiders,
    purple,
    codeBlue,
    codeRed,
    codeLightBlue,
    codeGreen,
    codeLightGreen,
    typewriter,
    typewriterA,
} from "./coding-animation.module.css";

type Props = {};
type State = {};

class CodingAnimation extends React.Component<Props, State> {
    constructor(props) {
        super(props)
    }
    render() {
      const lines = [
        `unsigned int num_neurons = 5 * 1000 * 1000;`,
        `string neuron_key = "jade1502";`,
      ];
        return (
          <div style={{width: "400px", zIndex: 1}}>
            <div className={typewriter}>
              <p>{this.colorCode(lines[0])}</p>
            </div>
            <div className={typewriterA}>
              <p>{this.colorCode(lines[1])}</p>
            </div>
          </div>
        );
    }

    private isCodeClassBlue(text: string) {
      const BLUE = new Set([
        "unsigned"
      ]);
      return BLUE.has(text);
    }

    private isCodeClassGreen(text:string) {
      const GREEN = new Set([
        "string",
        "int"
      ]);
      return GREEN.has(text);
    }

    private isCodeClassLightGreen(text:string) {
      if (!isNaN(parseFloat(text))) {
        return true;
      }
      const LIGHT_GREEN = new Set([
        "*",
        "+",
        "-",
        "/"
      ]);
      return LIGHT_GREEN.has(text);
    }

    private isCodeClassWhite(text: string) {
      const WHITE = new Set([
        "=",
        ";",
      ]);
      return WHITE.has(text);
    }

    private isCodeClassRed(text: string) {
      const endOrBeginChars = new Set([
        `"`,
        `'`
      ]);
      if (endOrBeginChars.has(text[0]) ||
          endOrBeginChars.has(text[text.length - 1])) {
          return true;
      }
    }

    private getCodeClass(text: string) {
      if (this.isCodeClassBlue(text)) {
        return codeBlue;
      }
      if (this.isCodeClassGreen(text)) {
        return codeGreen;
      }
      if (this.isCodeClassLightGreen(text)) {
        return codeLightGreen;
      }
      if (this.isCodeClassWhite(text)) {
        return "";
      }
      if (this.isCodeClassRed(text)) {
        return codeRed;
      }
      return codeLightBlue;
    }

    private colorCode(text:string) {
      const textCoding = text.split(" ").map(word => {
        const codeClass = this.getCodeClass(word);
        if (word.endsWith(";")) {
          return (
            <>
              <span className={codeClass}>{word.substring(0, word.length - 1)}</span>
              <span>;</span>
            </>
          );
        }
        return (
          <span className={codeClass}>{word} </span>
        );
      });
      return textCoding;
    }
}

export default CodingAnimation
