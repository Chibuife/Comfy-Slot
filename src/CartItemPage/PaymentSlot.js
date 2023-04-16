// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { monitorAuthState } from "../PagesLayout/utilis";
import { useEffect, useState } from "react";
import { addTotalP } from "../store/CartSlice";

const PaymentSlot = () => {
    const [login, setLogin] = useState(false)
    
    const dispatch = useDispatch()
    let total = 0;
    const itemsList = useSelector(state => state.itemsList)
    itemsList.forEach((item) => {
        total += item.totalPrice
    })
    console.log(total)
    const totalP = () => dispatch(addTotalP(total))
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
                        <Link className="checkout" to="/checkout"> <button className="checkout" onClick={totalP} > PROCEED TO CHECKOUT </button></Link>
                        :
                        <Link className="login" to="/auth/login"> <button className="login" > LOGIN </button></Link>

                }

            </div>

        </section>
    )
}
export default PaymentSlot;