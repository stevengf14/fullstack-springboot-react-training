import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  let [counter, setCounter] = useState(value);

  const counterIncrement = () => setCounter((c) => c + 1);

  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={counterIncrement}>+</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
