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
import Login from "./Login";
import { Authentication } from "./Email";
import Signup from "./Signup";
import { PasswordReset } from "./ForgottenPassword";
import CheckOut from "./CheckoutPage/CheckOut";
import { Model } from "./Model";
import { monitorAuthState } from "./PagesLayout/utilis";
let numberOfItem = 0;
function App() {
  const [passwordClose, setPasswordClose] = useState(false)
  const [login, setLogin] = useState(false)
  useEffect(() => {
    monitorAuthState(setLogin)
  }, [])
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
        },
        login ? {
          path: "/checkout",
          element: <CheckOut />,
        }:null
      ]
    },
    {
      path: "/auth",
      element: <Authentication passwordClose={passwordClose} setPasswordClose={setPasswordClose} />,
      children: [
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/auth/signup",
          element: <Signup passwordClose={passwordClose} setPasswordClose={setPasswordClose} />,
        },
        {
          path: "/auth/passwordreset",
          element: <PasswordReset />,
        },
      ],
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
