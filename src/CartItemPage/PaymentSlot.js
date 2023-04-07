// import { useEffect } from "react";
import { useSelector } from "react-redux"

const PaymentSlot = () => {
    let total = 0;

    const itemsList = useSelector(state => state.itemsList)
    // console.log
    // useEffect(() => {
    itemsList.forEach((item) => {
        console.log(item)
        total += item.totalPrice
        })
    console.log(total)

    // }, [selector]
    // )
    // total = parseInt(selector.subTotal.toFixed(2))
    return (
        <section className="sectionTwo">

            {/* <div className="paymentSlot"> */}
            <table>
                <tr>
                    <th>Subtotal:</th> <th>${total}</th>
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
    )
}
export default PaymentSlot;