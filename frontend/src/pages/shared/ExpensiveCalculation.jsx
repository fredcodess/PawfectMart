import React from "react";
import { useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  const calculateFactorial = (number) => {
    if (number === 0 || number === 1) {
      return 1;
    }
    return number * calculateFactorial(number - 1);
  };
  const memoizedValue = useMemo(() => calculateFactorial(number), [number]);

  return <div>Memoized Value: {memoizedValue}</div>;
};

export default ExpensiveCalculation;
