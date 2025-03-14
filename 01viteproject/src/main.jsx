import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hello Vite React App</h1>
      <p>Welcome to your Vite React app!</p>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank"
//   },
//   children: "Google"
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visited Google
//   </a>
// );

// const another_user = "chai aur react"

// const reactElement = React.createElement(
//   'a',
//   {
//     href:'https://www.google.com',
//     target:'_blank'
//   },
//   'click to visited Google !!',
//   another_user
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>

  // <MyApp />,
  // ReactElement

  // anotherElement

  // reactElement
);
