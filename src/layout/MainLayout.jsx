import { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* Children esta importando los componentes product y itemList */}
      {children}

    </>
  );
};

export default MainLayout;
