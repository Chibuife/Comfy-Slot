// import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { monitorAuthState } from "../PagesLayout/utilis";
import { useEffect, useState } from "react";

const PaymentSlot = () => {
    const [login, setLogin] = useState(false)
    let total = 0;
    const itemsList = useSelector(state => state.itemsList)
    itemsList.forEach((item) => {
        total += item.totalPrice
    })
    console.log(total)
    const shipping = 5.34
    useEffect(() => {
        monitorAuthState(setLogin)
    }, [])
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
                        <td>Order Total</td> <td>${(shipping + total).toFixed(2)}</td>
                    </tr>
                </table>
                {
                    login ?
                        <Link className="checkout" to="checkout"> <button className="checkout"> PROCEED TO CHECKOUT </button></Link>
                        :
                        <Link className="login" to="/auth/login"> <button className="login"> LOGIN </button></Link>

                }

            </div>

        </section>
    )
}
export default PaymentSlot;