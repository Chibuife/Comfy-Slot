// import { useEffect } from "react";
import { useSelector } from "react-redux"

const PaymentSlot = () => {
    let total = 0;

    const itemsList = useSelector(state => state.itemsList)
    console.log(itemsList)

    itemsList.forEach((item) => {
        total += item.totalPrice
        })
    console.log(total)
    const shipping = 5.34
  
    return (
        <section className="sectionTwo">
            <div>
            <table>
                <tr>
                    <th>Subtotal:</th> <th>${total.toFixed(2)}</th>
                </tr>
                    <tr className="shipping"><td>Shipping Fee</td> <td>${shipping}</td>
                </tr>
                <div className="underline"></div>
                <tr className="total">
                        <td>Order Total</td> <td>${(shipping + total).toFixed(2) }</td>
                </tr>
            </table>
            <button className="login" >LOGIN</button>
            </div>

        </section>
    )
}
export default PaymentSlot;