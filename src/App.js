import { useEffect, useState } from "react";
import About from "./AboutPage/About";
import SetItem from "./Asset/Classify Item/SetItem";
import Cart from "./CartItemPage/Cart";
import { myItemList } from "./ProductItemPage/ProductItem";
import Homepage from "./HomePage/Homepage";
import ShopingItems from "./Objects/ShopingItems";
import ProductItem from "./ProductItemPage/ProductItem";
import Product from "./ProductPage/ProductPage";
let numberOfItem = 0;
function App() {
  const [myArray, setMyyArray] = useState([])
  const [cartNumber, setCartNumber] = useState(1);
  const [cartId, setCartId] = useState(5)

  if(myArray[cartId]){
    myArray[cartId] = myArray[cartId] + cartNumber
  }else{
    myArray[cartId] = cartNumber
  }
  console.log(myArray,"myArray")

  return (
    <>
      {/* <Homepage/> */}
      {/* <About/> */}
      {/* <Product ShopingItems={ShopingItems} /> */}
      {/* <ProductItem setCartNumber={setCartNumber} cartNumber={cartNumber} ShopingItems={ShopingItems} setCartId={setCartId}/> */}
      <Cart myItemList={myItemList} ShopingItems={ShopingItems} myArray={myArray}/>
    </>
  );
}

export default App;
