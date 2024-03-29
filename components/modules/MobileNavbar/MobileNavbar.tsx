"use client";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { addOverflowHiddenToBody } from "@/lib/utils/common";
import "../../../app/globalStyles/mobile-navbar.css";
import { closeCatalogMenu, closeMenu, openCatalogMenu } from "@/context/modals";
import CatalogMenu from "@/components/modules/Header/CatalogMenu";
const MobileNavbar = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    closeCatalogMenu();
  };

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody("0");
    openCatalogMenu();
    closeMenu();
  };

  return (
    <>
      <CatalogMenu />
      <div className="mobile-navbar">
        <Link href="/" className="mobile-navbar__btn">
          {translations[lang].breadcrumbs.main}
        </Link>
        <button
          className="btn-reset mobile-navbar__btn"
          onClick={handleOpenCatalogMenu}
        >
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link className="btn-reset mobile-navbar__btn" href="/favorites">
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link className="btn-reset mobile-navbar__btn" href="/cart">
          <span className="not-empty not-empty-mobile" />

          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          className="btn-reset mobile-navbar__btn"
          onClick={handleOpenMenu}
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  );
};

export default MobileNavbar;
