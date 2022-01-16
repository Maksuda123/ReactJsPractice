const domContainer = document.querySelector("#root");

const Increment = () => {
  // const reactState = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">{counter}</h1>
      <div>
        <button id="button" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<Increment />, domContainer); //JSX syntax
//or
ReactDOM.render(
  <div className="container">
    <Increment />
    <Increment />
  </div>,
  domContainer
);
