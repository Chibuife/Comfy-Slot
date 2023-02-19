import { MdDelete } from "react-icons/md"
import "../Style/Cart.css"
const Cart = ({ myItemList, ShopingItems, cartNumber }) => {
  console.log(cartNumber)
  myItemList= [5,6,7,9,5, 5,5];
  console.log(myItemList.length)
  let cartItem;
  // let numberOfItem = myItemList.length
  let numberOfItem =[]
  cartItem = ShopingItems.filter((itemList) => {
    console.log(myItemList.includes(itemList.id))
    
    return myItemList.includes(itemList.id) 
  })
  myItemList.map((key) => {
    if (numberOfItem[key]) {
      numberOfItem[key] = numberOfItem[key] + 1
    }
    else {
      numberOfItem[key] = 1
    }
  })

  console.log(numberOfItem, "key")

  console.log(cartItem.length,"leng")
  return (
    <div className="cartBody">
      <section className="sectionOne">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th> Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            { cartItem.map((item , index)=>{
              return(
                <tr className="list" key={index} >
                  <td className="list-description">
                    <img src={item.image} alt="" />
                    <div>
                      <h4>{item.name}</h4>
                      <span>Color: <button className={item.color}></button></span>
                    </div>
                  </td>
                  <td>$30.99</td>
                  <td className="numbeOfItems"><span  className="count">+</span></td>
                  <td>$ 30.99</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className="delete"><MdDelete /></button>
      </section>
      <div className="buttons">
        <button>Continue Shopping</button>
        <button>Clear Shopping Cart</button>
      </div>
      <section className="sectionTwo">
   
        {/* <div className="paymentSlot"> */}
          <table>
            <tr>
              <th>Subtotal:</th> <th>$30.99</th>
            </tr>
            <tr className="shipping"><td>Shipping Fee</td> <td>$5.34</td>
            </tr>
          <tr className="total">
              <td>Order Total</td> <td>$36.33</td>
            </tr>
            <tr>
              <td colSpan={2}><button >LOGIN</button></td>
            </tr>
          </table>
        {/* </div> */}
      </section>
    </div>
  )
}

export default Cart