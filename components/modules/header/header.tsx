import { FC } from "react";
import { useLang } from "@/hooks/useLang";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { lang, translations } = useLang();
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger">
          {translations[lang].header.menu_btn}
        </button>
      </div>
    </header>
  );
};

export default Header;
