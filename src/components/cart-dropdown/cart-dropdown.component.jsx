import React from "react";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";

import CustomButton from "../custom-buttun/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{ cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapDispatchToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapDispatchToProps)(CartDropdown) ;
