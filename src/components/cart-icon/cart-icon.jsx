import { PiHandbagLight } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './cart-icon.scss'

const CartIcon=()=>{
    const { isCartOpen,setIsCartOpen}=useContext(CartContext)
    const toggleIsCartOpen =()=>setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
           <PiHandbagLight className='shopping-icon'/>
        <span className='item-count'>0</span>
        </div>
    )

}
export default CartIcon