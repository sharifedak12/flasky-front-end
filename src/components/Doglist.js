import React from "react";
import Dog from "./Dog.js";
import PropTypes from "prop-types";

const DogList = (props) => {
  const dogComponents = props.dogs.map((dog) => {
    return <Dog key={dog.id} {...dog} />;
  });
  return <ul>{dogComponents}</ul>;
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default DogList;
