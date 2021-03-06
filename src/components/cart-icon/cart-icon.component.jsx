import './cart-icon.styles.scss';
import React from "react";

import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
