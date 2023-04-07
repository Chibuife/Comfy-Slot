// import { useEffect } from "react";
import { useSelector } from "react-redux"

const PaymentSlot = () => {
    let total = 0;

    const itemsList = useSelector(state => state.itemsList)
   
    itemsList.forEach((item) => {
        console.log(item)
        total += item.totalPrice
        })
    console.log(total)

  
    return (
        <section className="sectionTwo">
            <div>
            <table>
                <tr>
                    <th>Subtotal:</th> <th>${total}</th>
                </tr>
                <tr className="shipping"><td>Shipping Fee</td> <td>$5.34</td>
                </tr>
                <div className="underline"></div>
                <tr className="total">
                    <td>Order Total</td> <td>$36.33</td>
                </tr>
            </table>
            <button className="login" >LOGIN</button>
            </div>

        </section>
    )
}
export default PaymentSlot;