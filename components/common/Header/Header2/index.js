import React from "react";
import NavBar1 from "../../Navbar/Navbar1";
import Navbar2 from "../../Navbar/Navbar2";
import StyleWrapper from "./style";

function Header2(props) {
  return (
    <StyleWrapper>
      <div>
        <div className="ptbp-1 header-background" id="nav-bar-2">
          <Navbar2 />
        </div>
      </div>
    </StyleWrapper>
  );
}

export default Header2;
