export const CounterApp = () => {
  let counter = 0;
  const counterIncrement = () => {
    counter = counter + 1;
    console.log("click!", counter);
  };
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={counterIncrement}>+</button>
    </>
  );
};
