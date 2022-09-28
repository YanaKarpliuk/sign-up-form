import React from "react";

export default function Result(props) {
  return props.checkOn ? (
    <p className="result-text">Thanks for signing up and joining our newsletter!</p>
  ) : (
    <p className="result-text">Thanks for signing up!</p>
  );
}
