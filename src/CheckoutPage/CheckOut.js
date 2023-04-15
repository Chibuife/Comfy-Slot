import { ATMCard } from 'atm-card-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import styled, { css } from 'styled-components';

function PaymentInputs({ error }) {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();
    // console.log(wrapperProps.error,"wapper")
    //  console.log(error,'err')
    // style
    return (
        <PaymentInputsWrapper {...wrapperProps} styles={{
            inputWrapper: {
                base: css`
            border-color: gray;
                        box-shadow: gray;

          `,
                errored: css`
            border-color: gray;
                        box-shadow: rgb(229, 229, 229) 0px 1px 2px inset;

          `,
                focused: css`
            border-color: gray;
            box-shadow: gray;
            outline: none;
            // outline-offset: 2px;
          `
            },
            errorText: {
                base: css`
                display: none;
                `}
        }}>
            <svg {...getCardImageProps({ images })} 
            style={{color: 'red'}}
            />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
        </PaymentInputsWrapper>
    );
}
const CheckOut = () => {
    let error = (data) => {
        console.log(data.error)

    }
    return (
        <SectionWapper>
            <div className='navigation'>
                <h1> <Link className='home' to="/"> Home </Link><Link className="path" to='/product'>/ Checkout</Link> </h1>
            </div>
            <OpenSection>
                <PaymentWarpper>
                    <h3>Hello, Chibuife John</h3>
                    <div> Your total is $200.99</div>
                    <div>Test Card Number: 4242 4242 4242 4242</div>
                    <PaymentInput>
                        <PaymentInputs error={error} />
                        <div className='paymentBtn'>Pay</div>
                    </PaymentInput>
                    {/* <ATMCard/> */}
                </PaymentWarpper>
            </OpenSection>
        </SectionWapper>
    )
}
const PaymentWarpper = styled.section`
   
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
height: 50vh;
`
const OpenSection = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 `
export default CheckOut