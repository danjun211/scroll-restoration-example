import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./withoutFetch/Root.jsx";
// import Page1 from "./withoutFetch/Page1.jsx";
// import Page2 from "./withoutFetch/Page2.jsx";
// import Index from "./withoutFetch/Index.jsx";
// import "./withoutFetch/index.css";

import Root from "./withFetch/Root.jsx";
import Page1 from "./withFetch/Page1.jsx";
import Page2 from "./withFetch/Page2.jsx";
import Index from "./withFetch/Index.jsx";
import "./withFetch/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
    ],
  },
]);

window.addEventListener("scroll", () => {
  console.log("scroll");
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
