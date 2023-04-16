import { ATMCard } from 'atm-card-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

function PaymentInputs({ error, setCardNumber, setExpiry, setCvc, setZip }) {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getZIPProps
    } = usePaymentInputs();
    error(wrapperProps.error)
    console.log(window.innerWidth)

    return (
        <PaymentInputsWrapper {...wrapperProps} styles={{
            inputWrapper: {
                base: css`
                border:none;
            box-shadow: gray;

          `,
                errored: css`
            border:none;
            box-shadow: rgb(229, 229, 229) 0px 1px 2px inset;

          `,
                focused: css`
                box-shadow: rgb(229, 229, 229) 0px 1px 2px inset;
            border:none;
            box-shadow: gray;
            outline: none;
          `
            },
            errorText: {
                base: css`
                display: none;
                `},
                
        
        }}>
                <svg {...getCardImageProps({ images })}/>
            <div >
                <input {...getCardNumberProps({ onChange: (e) => setCardNumber(e.target.value) })}
                    style={{ width: ` ${window.innerWidth < 800 ?'60px':''}` }}
                  />
                <input {...getExpiryDateProps({ onChange: (e) => setExpiry(e.target.value) })}
                  />
                <input {...getCVCProps({ onChange: (e) => setCvc(e.target.value) })}
                  />
                <input {...getZIPProps({ onChange: (e) => setZip(e.target.value) })}
                  />
            </div>
        </PaymentInputsWrapper>
    );
}
const CheckOut = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvc, setCvc] = useState();
    const [zip, setZip] = useState();
    console.log({ cardNumber, expiry, cvc, zip })

    const totalAmount = useSelector(state => state.totalP)
    let error = (data) => {
        setErrorMessage(data)
    }
    return totalAmount === 0 ? (
        <div className="empty">
            <h1>Your cart is empty</h1>
            <Link to="/product" className="link"> <button>FILL IN</button> </Link>
        </div>
    ) : (
        <SectionWapper>
            <div className='navigation'>
                <h1> <Link className='home' to="/"> Home </Link><Link className="path" to='/product'>/ Checkout</Link> </h1>
            </div>
            <OpenSection>
                <PaymentWarpper>
                    <h4>Hello, Chibuife John</h4>
                        <p> Your total is ${totalAmount.toFixed(2)}</p>
                    <p>Test Card Number: 4242 4242 4242 4242</p>
                    <PaymentInput>
                        <PaymentInputBlock>
                            <div>
                                    <PaymentInputs error={error} setCardNumber={setCardNumber} setExpiry={setExpiry} setCvc={setCvc} setZip={setZip} />
                            <div className='paymentBtn'>Pay</div>
                                <p style={{ color: `${errorMessage !== 'Enter a card number' ? 'red' : ''}` }}>{errorMessage}</p>
                                {/* errorMessage === '' ? <p> Payment succeeded, see the result in your Stripe dashboard. Refresh the page to pay again.</p> */}
                            </div>
                        </PaymentInputBlock>
                    </PaymentInput>
                </PaymentWarpper>
            </OpenSection>
        </SectionWapper>
    )
}
const PaymentWarpper = styled.section`
   
`
const PaymentInputBlock = styled.div`
      border-radius:5px;
        padding: 4rem;
        margin-top: 3rem;
        box-shadow: rgba(50, 50, 93, 0.1) 0px 0px 0px 0.5px, rgba(50, 50, 93, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1.5px 0px;

     @media (max-width: 700px){
        
        padding: 3rem 1rem;
        } 
`
const PaymentInput = styled.div` 
        .paymentBtn:hover{
            opacity: 1;
            transition: all 0.8s;

         }
    
      .paymentBtn{ 
        opacity: 0.5;
        margin-top: -2px;
        background-color: rgb(84, 105, 212);
        text-align: center;
        padding: 13px; 
        border-radius: 0px 0px 5px 5px;
        font-weight: 500;
        color:white;
        cursor:pointer;
    }

 `
const SectionWapper = styled.div`
line-height: 2rem;
h4{
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
}
p{
    color: #324d67;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
}
`
const OpenSection = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 `
export default CheckOut