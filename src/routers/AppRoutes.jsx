import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Home } from "./Home";
import { Works } from "./Works";

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
        path: 'works',
        element: <Works />
      },
      {
        path: 'about_me',
        element: <h1>About me</h1>
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
