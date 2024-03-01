import React, { FC } from "react";
import Header from "@/components/modules/header/header";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
