import { useEffect } from "react";
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { adding, subtracting } from "../store/CartSlice"
import "../Style/Cart.css"
import PaymentSlot from "./PaymentSlot";
const Cart = ({ myArray }) => {
  const selector = useSelector(state => state.itemsList)
  const subTotal = useSelector(state => state.subTotal)

 
  const dispatch = useDispatch()
  return (
    <div className="cartBody">
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
            {selector.map((item, index) => {
              const add = () => dispatch(adding(item))
              const subtract = () => dispatch(subtracting(item))
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
                    <td className="delCol"> <button className="delete" ><MdDelete /></button></td>

                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </section>
      <div className="buttons">
        <button className="continue">Continue Shopping</button>
        <button className="clear">Clear Shopping Cart</button>
      </div>
      <div className="paymentSlot">
    <PaymentSlot/>
      </div>
    </div>
  )
}

export default Cart