function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
  */

  const domELment = document.createElement(reactElement.type);
  domELment.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domELment.setAttribute(prop, reactElement.props[prop]);
  }

  //   domELment.textContent = reactElement.children;

  container.appendChild(domELment);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank"
  },
  children: "Google"
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
