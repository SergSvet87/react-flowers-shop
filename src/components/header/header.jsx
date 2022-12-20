import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import user from "../../assets/svg/user.svg";
import cartShop from "../../assets/svg/cart-shopping.svg";
import { PATHS } from "../../utils/urls";
import { Button } from "../ui/button/button";

import "./header.scss";

export const Header = () => {
  // const count = useSelector((state) => state.increment.count);
  // const arr = useSelector((state) => state.editPhotoCart.data);
  // const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to={PATHS.home}>
            <span>Flower</span> Shop
          </Link>
        </div>
        <nav className="header__menu menu-header">
          <ul className="menu-header__list">
            <li className="menu-header__item active">
              <NavLink
                to={PATHS.home}
              >
                Home
              </NavLink>
            </li>

            <li className="menu-header__item">
              <NavLink to={PATHS.shop}>Shop</NavLink>
            </li>

            <li className="menu-header__item">
              <NavLink to={PATHS.blog}>Blog</NavLink>
            </li>

            <li className="menu-header__item">
              <NavLink to={PATHS.about}>About</NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__profile profile">
          <div className="profile__auth">
            <Link to={PATHS.login}>
              <Button
                className="profile__auth-button button-primary"
                type="button"
                text="Log In"
              />
            </Link>

            <Link to={PATHS.register}>
              <Button
                className="profile__auth-button button-primary"
                type="button"
                text="Registration"
              />
            </Link>
          </div>

          <div
            className="profile__auth"
            style={{ display: "none" }}
          >
            <div className="profile__avatar">
              <Link to={PATHS.profile}>
                <img
                  src={user}
                  alt="avatar"
                />
              </Link>
            </div>

            <div className="profile__cart">
              <Link to={PATHS.cart}>
                <img
                  src={cartShop}
                  alt="cart"
                />
              </Link>
            </div>
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
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">hail</i>Lifestyle
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">star_half</i>Photodiary
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">music_note</i>Music
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">flight_land</i>Travel
                </Link>
              </li>
              <li className="list-mobile__item">
                <div className="divider"></div>
              </li>
              <li className="list-mobile__item mobile-menu__close">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
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
