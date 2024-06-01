import React from "react";
import "./Footer.css";
import { FaFacebook,FaGoogle,FaTwitter,FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className="section footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 mt-3">
            <div className="">
              <h6 className="headings text-uppercase " style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Information
              </h6>
              <ul className="list-unstyled links ">
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Feuchers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mt-3">
            <div className="">
              <h6 className="headings text-uppercase" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }} >
                Resources
              </h6>
              <ul className="list-unstyled links">
                <li>
                  <a href="">Wikipedia </a>
                </li>
                <li>
                  <a href="">React blog</a>
                </li>
                <li>
                  <a href="">Term &amp; Service</a>
                </li>
                <li>
                  <a href="">Angular dev</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 mt-3">
            <div className="">
              <h6 className="headings text-uppercase" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>Help</h6>
              <ul className="list-unstyled links">
                <li>
                  <a href="">Sign Up </a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div className="">
              <h6 className="footer-heading text-uppercase" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Contact Us
              </h6>
              <p className="contact-info mt-4">
                Contact us For Help | Assist
              </p>
              <p className="contact-info">+91 9999999999</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="icons d-flex justify-content-center list-unstyled ">
          <li className="px-3"><FaFacebook/></li>
          <li className="px-3"><FaGoogle/></li>
          <li className="px-3"><FaTwitter/></li>
          <li className="px-3"><FaApple/></li>
        </ul>
      </div>
      <div className="text-center mt-3">
        <p className="footer-alt mb-0 f-14">2023 © VNR, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;