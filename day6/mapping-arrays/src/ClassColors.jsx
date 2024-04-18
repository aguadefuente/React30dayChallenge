import { Component } from "react";

//DAY7: TRABAJANDO CON CLASS COMPONENT
// class Component {
//   constructor(props) {}
// }
// class Child extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

export default class HexaColors extends Component {
  render() {
    return (
      <>
        <div>
          <div style={{ backgroundColor: this.props.color, padding: "10px" }}>
            {this.props.color}
          </div>
        </div>
      </>
    );
  }
}
