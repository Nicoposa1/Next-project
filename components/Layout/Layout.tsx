import Navbar from "../Navbar/Navbar";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
