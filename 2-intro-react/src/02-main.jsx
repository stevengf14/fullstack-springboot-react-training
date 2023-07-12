import ReactDOM from "react-dom/client";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
// const h1 = (<div><ul><li>Hello World</li></ul></div>);
const ul = /*#__PURE__*/ _jsx("container", {
  children: /*#__PURE__*/ _jsxs("div", {
    children: [
      /*#__PURE__*/ _jsx("h1", {
        children: "Hello World",
      }),
      /*#__PURE__*/ _jsxs("ul", {
        children: [
          /*#__PURE__*/ _jsx("li", {
            children: "1",
          }),
          /*#__PURE__*/ _jsx("li", {
            children: "2",
          }),
          /*#__PURE__*/ _jsx("li", {
            children: "3",
          }),
          /*#__PURE__*/ _jsx("li", {
            children: "4",
          }),
          /*#__PURE__*/ _jsx("li", {
            children: "5",
          }),
          /*#__PURE__*/ _jsx("li", {
            children: "6",
          }),
        ],
      }),
    ],
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  ul
);
