import { FC } from "react";
import Link from "next/link";

interface MenuLinkItemProps {
  item: {
    id: number;
    text: string;
    href: string;
  };
  handleRedirectToCatalog: (arg0: string) => void;
}

const MenuLinkItem: FC<MenuLinkItemProps> = ({
  item,
  handleRedirectToCatalog,
}) => {
  const onRedirect = () => handleRedirectToCatalog(item.href);
  return (
    <li key={item.id} className="nav-menu__accordion__item__list__item">
      <Link
        href={item.href}
        className="nav-menu__accordion__item__list__item__link"
        onClick={onRedirect}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default MenuLinkItem;
