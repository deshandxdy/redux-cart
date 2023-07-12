import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutsFromApi } from "../Store/productSlice";
import { ERROR, LOADING } from "../Utils/Status";

const Products = () => {
    const dispatch = useDispatch()
    const { data : products, status } = useSelector(state => state.products)

    /* useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((result) => getProducts(result));
    }, []); */

    //get data from redux thunk function

    useEffect(() => {
        function fetchProducts() {
            dispatch(getProdcutsFromApi())
        }
        fetchProducts()
    }, [])

    if (status === LOADING) {
        return (
            <Alert variant="success">Loading...</Alert>
        )
    }

    if (status === ERROR) {
        return(<Alert variant="danger">Error fetching the data!</Alert>);
    }

    const cards = products.map(product => (
        <Product key={product.id} product={product} action='add' />
    ))
    return <div>
        <h2 className="text-center">Our Product Listings</h2><br/>

        <Row>{cards}</Row>
    </div>;
};

export default Products;
