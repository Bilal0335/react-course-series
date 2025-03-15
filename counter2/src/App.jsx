import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let count = 5;
  const addVal = () => {
    // count++
    // console.log(count)
    // console.log("counter",counter);
    // counter += 1;

    setCounter((counter) => counter + 1);
  };
  const decVal = () => {
    // count++
    // console.log(count)
    // console.log("counter",counter);
    // counter += 1;

    // if (counter > 0) {
    //   setCounter(counter - 1);
    // }

    setCounter((counter) => (counter > 0 ? counter - 1 : counter));
  };
  return (
    <>
      <h1>React Course</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addVal}>Add Value</button>
      <br />
      <br />
      <button onClick={decVal}>Remove Value</button>
    </>
  );
}

export default App;
