import "./App.css";
import Card from "./components/Card";

let obj = {
  name:"hello"
}
function App() {
  return (
    <>
      <h1>Card Components</h1>
      <Card username = "bilal" object = {obj} btntext = "visited me"/>
      <Card username = "bilal" object = {obj} />
    </>
  );
}

export default App;
