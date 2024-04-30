import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MarkdownPage from "./components/MarkdownPage";
import homeContent from "./assets/home.md";
import Projects from "./components/Projects";

const html = Array.from(document.getElementsByTagName("html")!)[0];
html.style.overflowY = "scroll";
html.style.marginBottom = "30px";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              element: <MarkdownPage contentPath={homeContent} />,
            },
            {
              path: "/blog",
              element: <div>lol there are no blogs here</div>,
            },
            {
              path: "/projects",
              element: <Projects />,
            },
          ],
        },
      ])}
    />
  </React.StrictMode>,
);
