import { createSlice, nanoid } from '@reduxjs/toolkit'

const cartItems = [
  {
    id: nanoid(10),
    item: 'Lobels Biscuits',
    price: 1.5,
    num: 1,
  },
  {
    id: nanoid(10),
    item: 'Vodka 750ml',
    price: 11.5,
    num: 1,
  },
  {
    id: nanoid(10),
    item: 'Minute maid',
    price: 1.5,
    num: 1,
  },
  {
    id: nanoid(10),
    item: 'Pfuko Maheu 500ml',
    price: 1.88,
    num: 1,
  },
  {
    id: nanoid(10),
    item: 'Vivon water 500ml',
    price: 1,
    num: 1,
  },
]

const initialState = {
  cartItems: cartItems,
  totalItems: 0,
  amtOfItems: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})
console.log(cartSlice)

export const cartSelector = (store) => store.cart

export default cartSlice.reducer
