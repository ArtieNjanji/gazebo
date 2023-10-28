import { useSelector, useDispatch } from 'react-redux'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

import { cartSelector } from '../features/cart/cartSlice'
function CartItem({ id, item, price, num }) {
  return (
    <div className='item'>
      <h3>{item}</h3>
      <div className='increase'>
        <FaArrowUp />
        <p>{num}</p>
        <FaArrowDown />
      </div>
      <p>$ {price}</p>
    </div>
  )
}

export default CartItem
