"use client";
import { FC } from "react";
import { useLang } from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { lang, translations } = useLang();
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger">
          {translations[lang].header.menu_btn}
        </button>
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links"></ul>
      </div>
    </header>
  );
};

export default Header;
