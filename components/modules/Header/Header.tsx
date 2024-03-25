"use client";
import { FC, useState } from "react";
import { useLang } from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";
import Link from "next/link";
import "../../../app/globalStyles/header.css";
import { Menu } from "@/components/modules/Header/Menu";
import { $searchModal, openMenu, openSearchModal } from "@/context/modals";
import {
  addOverflowHiddenToBody,
  handleCloseSearchModal,
} from "@/lib/utils/common";
import { useStore } from "effector-react";

const Header = () => {
  const { lang, translations } = useLang();
  const searchModal = useStore($searchModal);
  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  };
  return (
    <header className="header">
      <div
        className={`header__search-overlay ${searchModal ? "overlay-active" : ""}`}
        onClick={handleCloseSearchModal}
      ></div>
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button
              className="btn-reset header__links__item__btn header__links__item__btn--search"
              onClick={handleOpenSearchModal}
            />
          </li>
          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"
            />
          </li>
          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--compare"
              href="/comparison"
            />
          </li>
          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--cart"
              href="/cart"
            />
          </li>
          <li className="header__links__item header__links__item--profile">
            <button className="btn-reset header__links__item__btn header__links__item__btn--profile" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
