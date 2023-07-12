import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add, remove } from '../Store/cartSlice';


function Product(props) {
    const { image, title, price } = props.product
    const action = props.action
    const dispatch = useDispatch()

    const addToCart = (product) => {
        //dispatch product to cart in redux
        dispatch(add(product))
    }

    const removeFromCart = (id) => {
        //dispatch product to cart in redux
        dispatch(remove(id))
    }

    const actionButton = () => {
        if(action === 'add') {
            return (
                <Button variant="primary" onClick={() => addToCart(props.product)}>Add to Cart</Button>
            )
        } else {
            return (
                <Button variant="danger" onClick={() => removeFromCart(props.product.id)}>Remove</Button>
            )
        }
    }

    return (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card className="h-100" >
                <div className="text-center">
                    <Card.Img variant="top" src={image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        { price }
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-center">
                    { actionButton() }
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Product;
