import React from "react";
import { useRouter } from "next/router";
import StyleWrapper from "./style";
import InstagramIcon from "../../../public/images/insta1.svg";
import FacebookIcon from "../../../public/images/fb1.svg";
import LinkedinIcon from "../../../public/images/linkedinlogo.svg";
import Established from "../../../public/images/TheEstablished.svg";
function index(props) {
  const router = useRouter();
  const handleAboutUs = () => {
    console.log("clicked");
    router.push("/about-us", undefined, { shallow: true });
  };

  const handlePrivacy = () => {
    console.log("clicked");
    router.push("/privacy-policy", undefined, { shallow: true });
  };

  return (
    <StyleWrapper>
      <div className="black-bg text-white footer-main-div-0">
        <div className="footer-part-1">
          <div className="footer-estd-logo-main">
            <div
              className="cursor-pointer"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scroll(0, 0);
                } else {
                  router.push("/", undefined, { shallow: true });
                }
              }}
            >
              <img src={Established} alt="" className="footer-estd-logo" />
            </div>
            <div className="footer-cat">
              <div
                className="cursor-pointer"
                onClick={() =>
                  router.push("/style", undefined, { shallow: true })
                }
              >
                STYLE
              </div>
              <div>|</div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  router.push("/self", undefined, { shallow: true })
                }
              >
                SELF
              </div>
              <div>|</div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  router.push("/culture", undefined, { shallow: true })
                }
              >
                CULTURE
              </div>
              <div>|</div>
              <div
                className="cursor-pointer footer-com-div"
                onClick={() =>
                  router.push("/community", undefined, { shallow: true })
                }
              >
                COMMUNITY
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex s-icon-div">
              <div>
                <img
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/theestablishedcom",
                      "_blank"
                    )
                  }
                  src={FacebookIcon}
                  alt="FB icon"
                  className="cursor-pointer"
                ></img>
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open(
                      "https://instagram.com/theestablished_",
                      "_blank"
                    )
                  }
                  src={InstagramIcon}
                  alt="Insta icon"
                  className="cursor-pointer"
                ></img>
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open(
                      "https://in.linkedin.com/company/theestablished",
                      "_blank"
                    )
                  }
                  src={LinkedinIcon}
                  alt="Linkedin icon"
                  className="cursor-pointer"
                ></img>
              </div>
              {/* <img
              src={Twitter}
              alt="Twitter icon"
              className="icon-height wp-10 cursor-pointer"
            ></img> */}
            </div>
          </div>
        </div>
        <div className="footer-part-2 ptp-7 pbp-2">
          <div className="d-flex footer-bottom-pages">
            <div
              className="prp-2 remove-padding  cursor-pointer Biotif-Regular"
              onClick={handleAboutUs}
            >
              ABOUT US
            </div>
            <div
              className="prp-2 remove-padding  cursor-pointer Biotif-Regular"
              onClick={() =>
                router.push("/news-letter", undefined, { shallow: true })
              }
            >
              NEWSLETTER
            </div>
            <div
              className="prp-2 remove-padding  cursor-pointer Biotif-Regular"
              onClick={() =>
                router.push("/partner-with-us", undefined, { shallow: true })
              }
            >
              PARTNER WITH US
            </div>
            <div
              className="prp-2 remove-padding  cursor-pointer Biotif-Regular"
              onClick={handlePrivacy}
            >
              PRIVACY
            </div>
          </div>
          <div className="Biotif-Regular footer-theestd">
            © The Established 2021
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
}

export default index;
