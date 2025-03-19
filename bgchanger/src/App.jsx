import { useState } from "react";
import ColorBtn from "../components/colorbtn";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-1 px-3 py-2 text-black capitalize bg-white shadow-lg rounded-3xl bottom-12">
          <ColorBtn color={"red"} setColor={setColor} />
          <ColorBtn color={"green"} setColor={setColor} />
          <ColorBtn color={"yellow"} setColor={setColor} />
          <ColorBtn color={"purple"} setColor={setColor} />
          <ColorBtn color={"cyan"} setColor={setColor} />
          <ColorBtn color={"orange"} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
