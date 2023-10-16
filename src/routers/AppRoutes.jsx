import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'main',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about_me',
        element: <About />
      },
      {
        path: 'resources',
        element: <h1>Recommended resources to study</h1>
      },
      {
        // Ruta por defecto que redirige a '/main'
        index: true,
        element: <Navigate to="main" />
      }
    ]
  }
  //...
])
export default AppRoutes;
