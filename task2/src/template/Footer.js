import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

function Footer() {
  return (
    // <footer className="mt-auto py-5 bg-dark">
    //   <div className="container d-flex justify-content-center">
    //     <span className="text-muted">Copyright &copy; Website 2021</span>
    //   </div>
    // </footer>
    <footer className="footer-section">
    <Container>
      <Row>
        <Col lg="4">
          <div className="footer-left">
            <div className="footer-logo">
              <h5 style={{color:"white", fontWeight:"bold"}}>Eportal</h5>
            </div>
            <ul>
              <li>
              <FontAwesomeIcon icon={["fas", "map"]} size="1x" />&nbsp;
                1230 Dhaka, Mirpur
              </li>
              <li>
              <FontAwesomeIcon icon={["fas", "phone"]} size="1x" />&nbsp;
                {/* <i className="fa fa-phone"></i>{" "} */}
                <a href="tel:+254 746792699">+8801718654088</a>
              </li>
              <li>
              <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />&nbsp;

                {/* <i className="fa fa-envelope"></i>{" "} */}
                <a href="mailto:hello@emaple.com">
                  hello@example.com
                </a>
              </li>
            </ul>
            <div className="footer-social">
              <Link to="/">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
              </Link>
              <Link to="/">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </Link>
              <Link to="/">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                {/* <i className="fa fa-twitter"></i> */}
              </Link>
              <Link to="/">
              <FontAwesomeIcon icon={["fab", "pinterest"]} size="2x" />
                {/* <i className="fa fa-pinterest"></i> */}
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="footer-widget">
            <h5>Sitemap</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="4">
          <div className="newslatter-item">
            <h5>Join Our Newsletter Now</h5>
            <p>
              Get E-mail updates about our latest shop and special offers.
            </p>
            <form action="#" className="subscribe-form">
              <input type="email" placeholder="Enter Your Mail" />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="copyright-reserved">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-text">
              Copyright © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
