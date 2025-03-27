import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

function Banner() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className="hero-banner position-relative"
        style={{
          overflow: "hidden",
          zIndex: 0,
          marginBottom: "-10vw",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
              alt="Amazon Banner"
              className="w-100"
              style={{
                height: "40vw",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/OPPOF29/D219140021_Update_DesktopHeroTemplate_3000x1200_ref_Mar26_2._CB546718169_.jpg"
              alt="Amazon Banner"
              className="w-100"
              style={{
                height: "40vw",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
              alt="Amazon Banner"
              className="w-100 "
              style={{
                height: "40vw",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
        </Carousel>
        <div
          className="banner-background position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              theme === "light"
                ? "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.8) 85%, #f3f3f3 100%)"
                : "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 50%, #1a1a1a 100%)",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
      </div>

      {/* Hero section */}
      <Container className="z-index-1 position-relative">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3">
                Discover Your Perfect Shopping Experience
              </h1>
              <p className="lead mb-4">
                Explore millions of products, unbeatable deals, and seamless
                shopping at your fingertips.
              </p>
              <div className="cta-buttons">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3 btn-warning"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
