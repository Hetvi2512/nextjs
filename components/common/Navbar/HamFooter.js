import React from "react";
import InstagramIcon from "../../../public/images/insta1.svg";
import FacebookIcon from "../../../public/images/fb1.svg";
import LinkedinIcon from "../../../public/images/linkedinlogo.svg";
import logo from "../../../public/images/LOGO.svg";
import Image from "next/image";
import { useRouter } from 'next/router'

function HamFooter(props) {
  const router = useRouter()

  return (
    <div className="ham-footer-main">
      <div className="ham-footer-1">
        <div className="ham-footer-name">
          <div className="ham-footer-name-img">
            <Image
              src={logo}
              alt="logo"
              className="cursor-pointer "
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scroll(0, 0);
                } else {
                  router.push("/");
                }
              }}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="ham-footer-logo">
          <div className="ham-footer-logo-img">
            <Image src={FacebookIcon} layout="fill" objectFit="contain" />
          </div>
          <div className="ham-footer-logo-img">
            {" "}
            <Image src={InstagramIcon} layout="fill" objectFit="contain" />
          </div>
          <div className="ham-footer-logo-img">
            {" "}
            <Image src={LinkedinIcon} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="ham-footer-2">
        <div className="ham-footer-2-1">
          <div className="ham-footer-2-1-1">
            <div
              className="Biotif-Regular"
              onClick={() => props.history.push("/about-us")}
            >
              ABOUT US
            </div>
            <div
              className="Biotif-Regular"
              onClick={() => props.history.push("/news-letter")}
            >
              NEWSLETTER
            </div>
            <div
              className="Biotif-Regular"
              onClick={() => props.history.push("/partner-with-us")}
            >
              PARTNER WITH US
            </div>
            <div
              className="Biotif-Regular"
              onClick={() => props.history.push("/privacy-policy")}
            >
              PRIVACY
            </div>
          </div>
        </div>
        <div className="ham-footer-theest Biotif-Regular">
          © The Established 2021
        </div>
      </div>
    </div>
  );
}

export default HamFooter;
