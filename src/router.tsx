import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Character from "./routes/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <Character />,
      },
    ],
  },
]);

export default router;
