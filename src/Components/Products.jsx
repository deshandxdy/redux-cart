import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Products = () => {
    const [products, getProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((result) => getProducts(result));
    }, []);

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className="h-100" >
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        { product.price }
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return <div>
        <h2>Our Product Listings:</h2><br/>

        <Row>{cards}</Row>
    </div>;
};

export default Products;
