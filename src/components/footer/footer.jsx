import React from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../../utils/urls";
import locationImg from "../../assets/svg/location.svg";
import emailImg from "../../assets/svg/email.svg";
import phoneImg from "../../assets/svg/phone.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__about">
            <div className="footer__logo">
              <Link to={PATHS.home}>
                <span>Flower</span> Shop
              </Link>
            </div>

            <div className="footer__description">
              Some random stuff about flower shop and some more info cuz this
              box had to get fill Some random stuff about flower shop and some
              more info cuz this box had to get fill Some random stuff about
              flower shop and some more info cuz this box had to get fill
            </div>
          </div>
          <nav className="footer__links">
            <h6 className="title-h6">Links</h6>

            <ul className="footer__list">
              <li className="footer__item active">
                <Link to={PATHS.home}>Home</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.shop}>Shop</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.blog}>Blog</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.about}>About</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__links">
            <h6 className="title-h6">Links</h6>

            <ul className="footer__list">
              <li className="footer__item active">
                <Link to={PATHS.home}>Home</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.shop}>Shop</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.blog}>Blog</Link>
              </li>

              <li className="footer__item">
                <Link to={PATHS.about}>About</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__contacts contacts-footer">
            <h6 className="title-h6">Contact</h6>

            <ul className="contacts-footer__list">
              <li className="contacts-footer__item">
                <Link className="footer__item-link">
                  <img
                    src={locationImg}
                    alt="location Img"
                  />
                  <address>26985 Brighton Lane, Lake Forest, CA</address>
                </Link>
              </li>
              <li className="contacts-footer__item">
                <Link className="footer__item-link">
                  <img
                    src={emailImg}
                    alt="email Img"
                  />
                  <span>support@Flowers.com</span>
                </Link>
              </li>
              <li className="contacts-footer__item">
                <Link className="footer__item-link">
                  <img
                    src={phoneImg}
                    alt="phone Img"
                  />
                  <span>+1 236 5489</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
