import React, { Component } from "react";

class UppercaseToCamelCase extends Component {
  render() {
    const convertToCamelCase = (text) => {
      const words = text.toLowerCase().split(" ");
      const camelCaseText = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return camelCaseText;
    };

    const camelCaseText = convertToCamelCase(this.props.uppercaseText);

    return <div>{camelCaseText}</div>;
  }
}

export default UppercaseToCamelCase;
