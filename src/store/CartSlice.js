import { createSlice, } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'cart',
    initialState: {

        itemsList: [
        ],
        totalQuantity: 0,
        subTotal: 0,

    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload.item;
            const color = action.payload.checkColor
            const number = action.payload.number
            // to check if item is already available
            const existingItem = state.itemsList.find((item) => item.id === newItem.id && item.color === color);
            state.subTotal += state.itemsList.totalPrice
            if (existingItem) {
                existingItem.quantity += number;
                if (number <= 1) {
                    existingItem.totalPrice += newItem.amount;
                } else {
                    const priceCal = existingItem.totalPrice += newItem.amount * number;
                    existingItem.totalPrice = priceCal;
                }
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.amount,
                    quantity: number,
                    totalPrice: newItem.amount * number,
                    name: newItem.name,
                    image: newItem.image,
                    color: color,
                    shipingFee: newItem.shipping,
                })
                state.totalQuantity += number;
            }

        },
        adding(state, action) {
            const it = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === it.id && it.color === item.color);
            console.log(existingItem)
            if (existingItem.quantity < 10) {
                existingItem.quantity++
                existingItem.totalPrice += existingItem.price
                state.totalQuantity++;

            }
      
        },
        subtracting(state, action) {
            const it = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === it.id && it.color === item.color);
            console.log(existingItem)
            if (existingItem.quantity > 1){
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
                state.totalQuantity--;
            }
        
        },
        removeItem(state, action){
            const it = action.payload;
            state.itemsList = state.itemsList.filter((item) =>
             it.color !== item.color  
            ||
               item.id !== it.id    
            );
                state.totalQuantity -= 1
                console.log(state.itemsList)
        },
        clearCart(state){
            state.itemsList =[]
            state.totalQuantity = 0;
            state.subTotal= 0;
        }
    }
})

export const { addToCart, adding, subtracting, removeItem, clearCart } = counterSlice.actions;

export default counterSlice;