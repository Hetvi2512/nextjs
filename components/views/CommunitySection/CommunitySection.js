import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import CommunityWrapper from "./style";
import { imgBaseURL, subCatPageUrl } from "../../../helper/constants";
import community from "../../../public/images/title_svg_community.svg";
import Image from "next/image";
function CommunitySection({ resp }) {
  const Tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const router = useRouter();
  return (
    <div>
      {resp?.length && (
        <CommunityWrapper>
          <div className="mlrp-10 community-main-div">
            <div className="community-title InterstateCompressed-Bold">
              <div className="community-title-img">
                <Image
                  src={community}
                  alt="community"
                  className="cursor-pointer"
                  layout="fill"
                  onClick={() => {
                    router.push("/community", undefined, { shallow: true });
                  }}
                />
              </div>
            </div>
            <div className="image-position">
              <div className="grid ">
                {resp.slice(0, 5).map((a, index) => (
                  <div
                    key={index}
                    className={`grid-item-${index + 1} grid-item-1-${
                      index + 1
                    } cursor-pointer`}
                  >
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className={"imageContainer"}>
                        <Image  src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`} placeholder="blur"  blurDataURL={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`} layout="fill" className={"image"} />
                      </div>
                      {/* <img
                        style={{ objectFit: "cover" }}
                        src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        width="100%"
                        alt=""
                      /> */}
                    </Link>
                    <Link
                      href={
                        subCatPageUrl[a["story"]["sections"][0]["slug"]].url
                      }
                    >
                      <div className="sub-category Biotif-Book">
                        {a["story"]["sections"][0]["name"].toUpperCase()}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="question Biotif-SemiBold ">
                        {a["story"]["headline"]}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="author Biotif-Book ">
                        By {a["story"]["author-name"]}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className={Tablet ? "grid-2 pt-10" : "grid-2 pt-10"}>
                {resp.slice(5, 8).map((a, index) => (
                  <div
                    key={index}
                    className={`grid-item-${index + 1} grid-item-2-${
                      index + 1
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href={`/${a["story"]["slug"]}`}>
                      <img
                        style={{ objectFit: "cover" }}
                        src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        width="100%"
                        alt=""
                      />
                    </Link>
                    <Link
                      href={
                        subCatPageUrl[a["story"]["sections"][0]["slug"]].url
                      }
                    >
                      <div className="sub-category Biotif-Book">
                        {a["story"]["sections"][0]["name"].toUpperCase()}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="question Biotif-SemiBold">
                        {a["story"]["headline"]}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="author Biotif-Book ">
                        By {a["story"]["author-name"]}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Link href={`/${resp[8]["story"]["slug"]}`}>
              <img
                width="100%"
                src={`${imgBaseURL}${resp[8]["story"]["hero-image-s3-key"]}`}
                alt="group-photo-image"
                className="cursor-pointer"
              />
            </Link>
            <div className="image-data">
              <div className="image-title Biotif-Regular cursor-pointer">
                <Link
                  href={
                    subCatPageUrl[resp[8]["story"]["sections"][0]["slug"]].url
                  }
                >
                  <span className="image-title Biotif-Regular cursor-pointer">
                    {resp[8]["story"]["sections"][0]["name"].toUpperCase()}
                  </span>
                </Link>
                – By <em>{resp[8]["story"]["author-name"]}</em>
              </div>
              <Link href={`/${resp[8]["story"]["slug"]}`}>
                <div className="image-text Biotif-SemiBold cursor-pointer">
                  {resp[8]["story"]["headline"]}
                </div>
              </Link>
            </div>
          </div>
        </CommunityWrapper>
      )}
    </div>
  );
}

export default CommunitySection;
