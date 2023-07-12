import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Row } from 'react-bootstrap'

const Cart = () => {
const products = useSelector(state => state.cart)
    const cards = products.map(product => (
        <Product key={product.id}  product={product} action='remove' />
    ))
    return <div>
        <h2 className="text-center">My Cart</h2><br/>

        <Row>{cards}</Row>
    </div>;
}

export default Cart