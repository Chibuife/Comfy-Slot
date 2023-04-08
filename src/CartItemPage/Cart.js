import { useEffect } from "react";
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { adding, clearCart, removeItem, subtracting } from "../store/CartSlice"
import "../Style/Cart.css"
import PaymentSlot from "./PaymentSlot";
import { Link } from "react-router-dom";
const Cart = ({ myArray }) => {
  const itemsList = useSelector(state => state.itemsList)
  const subTotal = useSelector(state => state.subTotal)
  console.log(itemsList)
 
  const dispatch = useDispatch()
  const clear = () => dispatch(clearCart())
  if (itemsList === [{ totalPrice : 0}]){
    return(
    <div className = "cartBody" >
      <section className="sectionOne">
        <table>
          <thead>
            <tr className="heading">
              <th> <h5>Item </h5></th>
              <th><h5>Price </h5></th>
              <th><h5>Quantity</h5></th>
              <th><h5>Subtotal</h5></th>
              <th colSpan={6}></th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item, index) => {
              console.log(item)
              const add = () => dispatch(adding(item))
              const subtract = () => dispatch(subtracting(item))
              const del = () => dispatch(removeItem(item))

              if (item.quantity > 0) {
                return (
                  <tr className="list" key={item.SKU} >
                    <td className="list-description">
                      <img src={item.image} alt="" />
                      <div>
                        <h4>{item.name}</h4>
                        <span className="colorLabel">Color: <button className={item.color}></button></span>
                        <h5 className="price smallscr">$ {item.price} </h5>
                      </div>
                    </td>
                    <td className="price largescr">$ {item.price}</td>
                    <td className="numbeOfItems"><span onClick={subtract} className="count">-</span> <span className="number">{item.quantity}</span> <span onClick={add} className="count">+</span></td>
                    <td className="totalValue">$ {item.totalPrice.toFixed(2)}</td>
                    <td className="delCol" > <button className="delete" onClick={del} ><MdDelete /></button></td>

                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </section>
      <div className="buttons">
        <Link to='/product'> <button className="continue">Continue Shopping</button>     </Link>
        <button className="clear" onClick={clear}>Clear Shopping Cart</button>     
      </div>
      <div className="paymentSlot">
    <PaymentSlot/>
      </div>
    </div >
  )
}else{
  return(
    <div className="empty">
      <h1>Your cart is empty</h1>
      <Link to="/product" className="link"> <button>FILL IN</button> </Link>
    </div>
  )
}
  
}

export default Cart