import React from "react";
import { useMediaQuery } from "react-responsive";
import StyleWrapper from "./style";
import Search from "../Search";
import Hambar from "../Hambar";
import Logo1 from "../../../../public/images/LOGO.svg";
import Logo2 from "../../../../public/images/LOGO2.svg";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar2(props) {
  const PhoneView = useMediaQuery({ minWidth: 300, maxWidth: 480 });
  const router = useRouter();
  return (
    <StyleWrapper>
      <div className="d-flex justify-content-around">
        <Search />
        <div
          className="menuCon menuCon2 newiconh2 d-flex justify-content-center"
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/", undefined, { shallow: true });
            window.scroll(0, 0);
          }}
        >
          {PhoneView ? (
            <div className="" style={{ width: "40%" }}>
              <Image
                id="new-image"
                onClick={() => window.scroll(0, 0)}
                style={{ width: "100%" }}
                src={Logo1}
                alt="the-established"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : (
            <Image id="new-image" src={Logo2} alt="the-established" />
          )}
          {/* {PhoneView ? (
            <img width="100%" src={Logo1} alt="the-established"></img>
          ) : (
            <img width="100%" src={Logo2} alt="the-established"></img>
          )} */}
        </div>
        <div className="cursor-pointer-main">
          <Hambar />
        </div>
      </div>
    </StyleWrapper>
  );
}

export default Navbar2;
