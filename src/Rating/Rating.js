import React from "react";
import "./Rating.css";
import PropTypes from "prop-types";

export default function Rating(props) {
  const stars = [0, 0, 0, 0, 0].map((_, i) =>
    i < props.value ? (
      <span key={i}>&#9733; </span>
    ) : (
      <span key={i}>&#9734; </span>
    )
  );
  Rating.propTypes = {
    value: PropTypes.number.isRequired,
  };
  Rating.defaultProps = {
    value: 1,
  };
  return <div className="rating">{stars}</div>;
}
