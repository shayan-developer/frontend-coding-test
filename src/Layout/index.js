import { Header } from "Components";
import React from "react";




const Layout = ({ children ,timer}) => {
  return (
    <div>
      <Header timer={timer}/>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
