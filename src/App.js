import { useEffect, useState } from "react";
import About from "./AboutPage/About";
import Cart from "./CartItemPage/Cart";
// import { myItemList } from "./ProductItemPage/ProductItem";
import Homepage from "./HomePage/Homepage";
import ShopingItems from "./Objects/ShopingItems";
import ProductItem from "./ProductItemPage/ProductItem";
import Product from "./ProductPage/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PagesLayout from "./PagesLayout/PagesLayout";
let numberOfItem = 0;
function App() {

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PagesLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product ShopingItems={ShopingItems} />,
        },
        {
          path: "/product/:productid",
          element: <ProductItem ShopingItems={ShopingItems} />,
        },
        {
          path: "/cart",
          element: <Cart  />,
        }
      ]
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
      {/* <Homepage/> */}
      {/* <About/> */}
      {/* <Product ShopingItems={ShopingItems} /> */}
      {/*  */}
      {/* <Cart myItemList={myItemList} ShopingItems={ShopingItems} myArray={myArray}/> */}
    </>
  );
}

export default App;
