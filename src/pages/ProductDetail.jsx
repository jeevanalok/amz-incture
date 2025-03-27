import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Tabs,
  Tab,
  Form,
  Card,
  Alert,
} from "react-bootstrap";
import { ShoppingCart, Heart, Star, CheckCircle } from "react-feather";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productData from "../utils/productData";

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the specific product
  const product = productData.find((p) => p.id === parseInt(id));

  // State for quantity and additional features
  const [quantity, setQuantity] = useState(1);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  // If no product found
  if (!product) {
    return (
      <Container className="text-center my-5">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </Container>
    );
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAddedToCart(true);

    // Hide the added to cart message after 3 seconds
    setTimeout(() => setShowAddedToCart(false), 3000);
    setQuantity(1);
  };

  return (
    <Container className="product-detail-page my-5">
      {showAddedToCart && (
        <Alert
          variant="success"
          onClose={() => setShowAddedToCart(false)}
          dismissible
        >
          <CheckCircle className="me-2" />
          Product added to cart successfully!
        </Alert>
      )}

      <Row>
        {/* Product Image */}
        <Col md={6}>
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid product-main-image"
            />
            {/*  additional images */}
            <div className="product-thumbnail-gallery mt-3 d-flex justify-content-center">
              {[1, 2, 3].map((_, index) => (
                <img
                  key={index}
                  src={product.image}
                  alt={`${product.title} thumbnail`}
                  className="img-thumbnail mx-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <h1>{product.title}</h1>

          {/* Rating */}
          <div className="product-rating mb-3">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                color="#ffa41c"
                fill={index < product.rating.rate ? "#ffa41c" : "none"}
              />
            ))}
            <span className="ms-2">({product.rating.rate}/5)</span>
            <span className="ms-2">{product.rating.count} reviews</span>
          </div>

          {/* Price */}
          <h2 className="product-price text-danger">
            ${product.price.toFixed(2)}
          </h2>

          {/* Quantity Selector */}
          <div className="quantity-selector d-flex align-items-center mb-3">
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
              className="mx-2 text-center"
              style={{ width: "80px" }}
            />
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="product-actions d-flex">
            <Button
              variant="primary"
              size="lg"
              className="me-3"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="me-2" /> Add to Cart
            </Button>
            <Button variant="outline-secondary" size="lg">
              <Heart className="me-2" /> Add to Wishlist
            </Button>
          </div>

          {/* Product Description */}
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Product Description</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Product Information */}
      <Row className="mt-5">
        <Col>
          <Tabs defaultActiveKey="details" className="mb-3">
            <Tab eventKey="details" title="Product Details">
              <ul>
                <li>Category: {product.category}</li>
                <li>Shipping: Free Shipping Available</li>
                <li>Warranty: 1 Year Manufacturer Warranty</li>
              </ul>
            </Tab>
            <Tab eventKey="reviews" title="Customer Reviews">
              <h4>Customer Reviews</h4>
              {/* Placeholder for reviews */}
              <p>
                {product.rating.count} people have rated this prouct as{" "}
                {product.rating.rate}
              </p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
