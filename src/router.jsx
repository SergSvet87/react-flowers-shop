import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./utils/urls";
// import { loaderShop } from "./utils/loaderShop";
import { Layout } from "./components/layout";

import { ErrorPage } from "./components/pages/error-page";
import { NotFoundPage } from "./components/pages/not-found-page";
import { Shop } from "./components/pages/shop";
import { Home } from "./components/pages/Home/home";
import { FlowerInfo } from "./components/pages/flower-info";
import  AuthReg  from "./components/pages/AuthReg/AuthReg";

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.shop,
        element: <Shop />,
        // loader: loaderShop,
      },
      {
        path: PATHS.flower,
        element: <FlowerInfo />,
        // loader: loaderShop,
      },
      {
        path: PATHS.blog,
        element: <>Blog</>,
        // loader: loaderBlog,
      },
      {
        path: PATHS.about,
        element: <>About</>,
        // loader: loaderAbout,
      },
      {
        path: PATHS.cart,
        element: <>Cart</>,
        // loader: loaderAbout,
      },
      {
        path: PATHS.profile,
        element: <>Profile</>,
        // loader: loaderAbout,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },

      
     
     
    ],
  },
  {
    path: PATHS.login,
    element: <AuthReg initial='log' />,
  },
  {
    path:PATHS.register,
    element:<AuthReg initial='reg' />
  }
]);
