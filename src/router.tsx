import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Character from "./routes/Character";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter(
  [
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
      errorElement: <NotFound />,
    },
  ],
  {
    basename: "/react-disney-characters",
  }
);

export default router;
