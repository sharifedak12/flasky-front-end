import React from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>ID: {props.id}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Breed: {props.breed}</h4>
      <h4>Chip:{props.chip}</h4>
    </li>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  chip: PropTypes.string,
};

Dog.defaultProps = {
  chip: "",
};

export default Dog;
