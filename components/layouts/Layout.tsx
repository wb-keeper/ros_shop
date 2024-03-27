"use client";
import React, { FC } from "react";
import Header from "@/components/modules/Header/Header";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileNavbar from "@/components/modules/MobileNavbar/MobileNavbar";
import { AnimatePresence, motion } from "framer-motion";
import SearchModal from "@/components/modules/Header/SearchModal";
import { useUnit } from "effector-react";
import { $searchModal } from "@/context/modals";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800);
  const searchModal = useUnit($searchModal);
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {openAuthPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="auth-popup-wrapper"
          ></motion.div>
        )}
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
        {showSizeTable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SizeTable />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
