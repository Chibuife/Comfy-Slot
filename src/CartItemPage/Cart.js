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
            <tr>
              <th>Item</th>
              <th> Price</th>
              <th>Quantity</th>
              <th colSpan={2}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {selector.map((item, index) => {
              console.log(item.color)
              const add = () => dispatch(adding(item))
              const subtract = () => dispatch(subtracting(item))
              if (item.quantity > 0) {
                return (
                  <tr className="list" key={item.SKU} >
                    <td className="list-description">
                      <img src={item.image} alt="" />
                      <div>
                        <h4>{item.name}</h4>
                        <span>Color: <button className={item.color}></button></span>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td className="numbeOfItems"><span onClick={subtract} className="count">-</span> <span>{item.quantity}</span> <span onClick={add} className="count">+</span></td>
                    <td>$ {item.totalPrice.toFixed(2)}</td>
                    <td > <button className="delete" ><MdDelete /></button></td>

                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </section>
      <div className="buttons">
        <button>Continue Shopping</button>
        <button>Clear Shopping Cart</button>
      </div>
    <PaymentSlot/>
    </div>
  )
}

export default Cart