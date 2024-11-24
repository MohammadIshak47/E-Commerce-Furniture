import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/Product/ProductDetails";
import Shop from "../pages/Shop/Shop";


// import TestingFile from "../pages/Product/TestingFIle";






const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children  : [
        {
            path: "/",
            element : <Home/>
        },
        {
            path : "/contact",
            element: <Contact/>
        },
        {
            path: "/product/:id",
            element: <ProductDetails/>
        },
        {
          path : "/shop",
          element: <Shop/>
      },
      ]
  
    },
  ]);


  export default router;