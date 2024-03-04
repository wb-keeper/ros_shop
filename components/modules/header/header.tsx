"use client";
import { FC } from "react";
import { useLang } from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { lang, translations } = useLang();
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger"></button>

        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button className="btn-reset header__links__item__btn header__links__item__btn--search" />
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
          <li className="header__links__item"></li>
          <li className="header__links__item header__links__item--profile">
            <button className="btn-reset header__links__item__btn header__links__item__btn--profile" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
