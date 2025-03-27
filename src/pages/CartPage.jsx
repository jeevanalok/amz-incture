import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'react-feather';

function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </Container>
    );
  }

  return (
    <Container className="cart-page" style={{marginTop: '4vw'}}>
      <h2 className="my-4">Your Shopping Cart</h2>
      <Row>
        <Col md={8}>
          {cart.map(item => (
            <Card key={item.id} className="mb-3">
              <Card.Body className="d-flex align-items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{width: '100px', marginRight: '15px'}} 
                />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Order Summary</h4>
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${cartTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${cartTotal().toFixed(2)}</strong>
              </div>
              <Link to="/checkout" className="btn btn-warning w-100 mt-3">
                Proceed to Checkout
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;