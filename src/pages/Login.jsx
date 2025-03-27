import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import darklogo from "../assets/dark-logo.png";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleToggleAuth = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Basic form validation
    if (isSignUp) {
      // Sign Up validation
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }
    }

    alert("Logged In Successfully!");
    navigate("/");

    // Reset form after submission (in real app, handle successful login/signup)
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container className="auth-page py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card
            className="shadow-lg border-0"
            style={
              theme === "dark"
                ? { backgroundColor: "#2c2c2c", color: "white" }
                : {}
            }
          >
            <Card.Title className="text-center mt-3">
              <img
                src={theme === "light" ? logo : darklogo}
                alt="logo"
                className="d-inline-block align-top logo-image"
                style={{
                  maxWidth: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Card.Title>
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>

              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {isSignUp && (
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Choose a username"
                      required
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                    minLength="6"
                  />
                </Form.Group>

                {isSignUp && (
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm password"
                      required
                      minLength="6"
                    />
                  </Form.Group>
                )}

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>

                <div className="text-center">
                  <p>
                    {isSignUp
                      ? "Already have an account? "
                      : "Don't have an account? "}
                    <Button
                      variant="link"
                      onClick={handleToggleAuth}
                      className="p-0"
                    >
                      {isSignUp ? "Sign In" : "Sign Up"}
                    </Button>
                  </p>
                </div>

                {!isSignUp && (
                  <div className="text-center mt-3">
                    <Button variant="link" className="text-muted">
                      <p>Forgot Password?</p>
                    </Button>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
