import { useState } from "react";
import { useUnit } from "effector-react/effector-react.mjs";
import { $menuIsOpen, closeMenu } from "@/context/modals";
import { useLang } from "@/hooks/useLang";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { setLang } from "@/context/lang";
import { AllowedLangs } from "@/constants/lang";

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false);
  const [showBuyersList, setShowBuyersList] = useState(false);
  const [showContactsList, setShowContactsList] = useState(false);
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();
  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
  const handleSwitchLangToRu = () => handleSwitchLang("ru");
  const handleSwitchLangToEn = () => handleSwitchLang("en");

  return (
    <nav className={`nav-menu ${menuIsOpen ? "open" : "close"}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? "open" : ""} `}
        onClick={handleCloseMenu}
      ></button>
      <div className={`nav-menu__lang ${menuIsOpen ? "open" : ""}`}>
        <button>RU</button>
        <button>EN</button>
      </div>
      <h1>Menu</h1>
    </nav>
  );
};
