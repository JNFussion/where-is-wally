import React from "react";
import PropTypes from "prop-types";

const Button = function Button({ src, name }) {
  return (
    <button id={name} type="button" className="trans-hover hover:scale-95">
      <div className="pointer-events-none">
        <img src={src} alt={name} />
      </div>
      <p className="pointer-events-none capitalize text-lg font-medium">
        {name}
      </p>
    </button>
  );
};

Button.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
