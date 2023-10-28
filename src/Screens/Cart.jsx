import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartSelector } from '../features/cart/cartSlice'

import CartItem from '../components/CartItem'
import Header from '../components/Header'
import Input from '../components/Input'

function Cart() {
  const { cartItems, amtOfItems, totalItems } = useSelector(cartSelector)
  return (
    <div>
      <section>
        <Header name='Purchase ' />
        <div className='signin-container'></div>
      </section>
    </div>
  )
}

export default Cart
