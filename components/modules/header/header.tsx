import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
