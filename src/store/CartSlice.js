import { createSlice, } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'cart',
    initialState: {

        itemsList: [{ totalPrice:0, }
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
                    color: color
                })
                state.totalQuantity++;
            }

        },
        adding(state, action) {
            const id = action.payload;
            console.log(id)
            const existingItem = state.itemsList.find((item) => item.id === id.id);
            console.log(existingItem)

            existingItem.quantity++
            existingItem.totalPrice += existingItem.price
        },
        subtracting(state, action) {
            const id = action.payload;
            console.log(id)
            const existingItem = state.itemsList.find((item) => item.id === id.id);
            console.log(existingItem)

            existingItem.quantity--
            existingItem.totalPrice -= existingItem.price
        }
    }
})

export const { addToCart, adding, subtracting } = counterSlice.actions;

export default counterSlice;