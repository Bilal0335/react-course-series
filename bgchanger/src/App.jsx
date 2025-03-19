import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 text-black capitalize bg-white shadow-lg rounded-3xl bottom-12">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
           onClick={() => setColor("yellow")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
           onClick={() => setColor("blue")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
