import Image from "next/image";
import Link from "next/link";
import React from "react";
import self from '../../../public/images/title_svg_self.svg'
import { imgBaseURL, subCatPageUrl } from "../../../helper/constants";
import SelfWrapper from "./style";
function SelfSection({ resp }) {
  return (
    <>
      {resp?.length && (
        <SelfWrapper>
          <div className="black-bg">
            <div className="self-title InterstateCompressed-Bold">
              <div className="self-title-img">
                <Image
                  src={self}
                  alt="self logo"
                  className="cursor-pointer"
                  onClick={() => {
                    props.history.push("/self");
                  }}
                  layout="fill"
                />
              </div>
            </div>
            <div className="image-position black-bg">
              <div>
                <div className="flex-1">
                  {resp.slice(0, 2).map((a, index) => (
                    <div
                      key={index}
                      className={`flex-1-${index} flex-1-all`}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={`/${a["story"]["slug"]}`}>
                        <img
                          style={{ objectFit: "cover" }}
                          width="100%"
                          src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        ></img>
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
                        <div className="author Biotif-Book">
                          By {a["story"]["author-name"]}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex-2">
                  {resp.slice(2, 4).map((a, index) => (
                    <div
                      key={index}
                      className={`flex-2-${index} flex-2-all`}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={`/${a["story"]["slug"]}`}>
                        <img
                          style={{ objectFit: "cover" }}
                          width="100%"
                          src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        ></img>
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
                        <div className="author Biotif-Book">
                          By {a["story"]["author-name"]}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content Biotif-Regular mtp-5 pbp-8">
              <button
                className="read-more-btn "
                type="submit"
                onClick={() => props.history.push("/self")}
              >
                READ MORE →
              </button>
            </div>
          </div>
          <div style={{ position: "relative" }} className="cursor-pointer">
            <Link href={`/${resp[4]["story"]["slug"]}`}>
              <img
                width="100%"
                style={{ maxHeight: "95vh", objectFit: "cover" }}
                src={`${imgBaseURL}${resp[4]["story"]["hero-image-s3-key"]}`}
                alt="group-photo-image"
              />
            </Link>
            <div className="image-data">
              <div className="image-title-2 Biotif-Regular">
                <Link
                  href={
                    subCatPageUrl[resp[4]["story"]["sections"][0]["slug"]].url
                  }
                >
                  <span className="image-title-2 Biotif-Regular">
                    {resp[4]["story"]["sections"][0]["name"].toUpperCase()}
                  </span>
                </Link>
                – By <em> {resp[4]["story"]["author-name"]}</em>
              </div>
              <Link href={`/${resp[4]["story"]["slug"]}`}>
                <div
                  className="image-text-2 Biotif-SemiBold cursor-pointer"
                  onClick={() => {
                    handleIndividualStory(resp[4]);
                  }}
                >
                  {resp[4]["story"]["headline"]}
                </div>
              </Link>
            </div>
          </div>
          <div className="pink-border mtp-5"></div>
          <div className="text-section-1 text-section-2 Biotif-Medium">
            <Link
              href={subCatPageUrl[resp[4]["story"]["sections"][0]["slug"]].url}
            >
              <span className="text-section-1 text-section-2 Biotif-Medium">
                {resp[5]["story"]["sections"][0]["name"].toUpperCase()}
              </span>
            </Link>
            – By <em>{resp[5]["story"]["author-name"]}</em>
          </div>
          <Link href={`/${resp[5]["story"]["slug"]}`}>
            <div className="description-section-2 Heldane_Display_Regular_Italic mtp-1 cursor-pointer">
              {resp[5]["story"]["subheadline"]}
            </div>
          </Link>
          <div className="pink-border mtp-5"></div>
        </SelfWrapper>
      )}
    </>
  );
}

export default SelfSection;
