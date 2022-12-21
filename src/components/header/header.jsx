import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/svg/user.svg";
import cartShop from "../../assets/svg/cart-shopping.svg";
import { PATHS } from "../../utils/urls";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to={PATHS.home}>
            <span>Flower</span>Shop
          </Link>
        </div>
        <nav className="header__menu menu-header">
          <ul className="menu-header__list">
            <li className="menu-header__item">
              <Link to={PATHS.home}>Home</Link>
            </li>

            <li className="menu-header__item">
              <Link to={PATHS.shop}>Shop</Link>
            </li>

            <li className="menu-header__item">
              <Link to={PATHS.blog}>Blog</Link>
            </li>

            <li className="menu-header__item">
              <Link to={PATHS.about}>About</Link>
            </li>
          </ul>
        </nav>

        <div className="header__profile profile">
          {/* <Link to="login.html">
            <button
              className="profile__auth button"
              type="button"
            >
              Sign UP
            </button>
          </Link> */}

          <div className="profile__avatar">
            <Link to={PATHS.login}>
              <img src={user} alt="avatar" />
            </Link>
          </div>

          <div className="profile__cart">
            <Link to={PATHS.cart}>
              <img src={cartShop} alt="cart" />
            </Link>
          </div>
        </div>

        <header className="header__menu-mobile mobile-menu">
          <div className="mobile-menu__inner">
            <div className="header__logo"></div>
            <Link className="mobile-menu__burger">
              <span className="mobile-menu__line"></span>
            </Link>
          </div>

          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list list-mobile">
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">hail</i>Lifestyle
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">star_half</i>Photodiary
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">music_note</i>Music
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">flight_land</i>Travel
                </Link>
              </li>
              <li className="list-mobile__item">
                <div className="divider"></div>
              </li>
              <li className="list-mobile__item mobile-menu__close">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">cancel</i>Cancel
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu__overlay"></div>
        </header>
      </div>
    </header>
  );
};
