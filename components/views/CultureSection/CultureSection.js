import React from "react";
import Link from "next/link";
import culture from "../../../public/images/title_svg_culture.svg";
import AdImg from "../../../public/images/Website Ads-18.jpg";
import { imgBaseURL } from "../../../helper/constants";
import AdPillar from "../Advertisement/AdPillar";
import { subCatPageUrl } from "../../../helper/constants";
import Image from "next/image";

function CultureSection({ resp }) {
  const handleIndividualStory = (a) => {
    console.log("onclick", a["story"]["sections"][0]);
    props.history.push(`/${a["story"]["slug"]}`, a);
  };
  return (
    <>
      {resp?.length && (
        <div className="mtp-5">
          <div className="culture-heading InterstateCompressed-Bold">
            <div className="culture-heading-img">
              <Image
                src={culture}
                alt="culture logo"
                className="cursor-pointer"
                onClick={() => {
                  props.history.push("/culture");
                }}
                layout="fill"
              />
            </div>
          </div>
          <div className="row ma-0 culture-main-row">
            <div className="col-lg-9 col-xl-9  col-md-12 col-sm-12 col-xs-12 p-0 m-0">
              <div className="culture-content-main">
                {resp.slice(0, 3).map((a, index) => (
                  <div
                    key={index}
                    className={`culture-content-${index + 1} culture-content`}
                  >
                    <Link href={`/${a["story"]["slug"]}`}>
                      <img
                        src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        alt=""
                      />
                    </Link>
                    <Link
                      href={
                        subCatPageUrl[a["story"]["sections"][0]["slug"]].url
                      }
                    >
                      <div className="culture-content-cat Biotif-Book">
                        {a["story"]["sections"][0]["name"].toUpperCase()}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="culture-content-title Biotif-SemiBold">
                        {a["story"]["headline"]}
                      </div>
                    </Link>
                    <Link href={`/${a["story"]["slug"]}`}>
                      <div className="culture-content-author Biotif-Book">
                        By {a["story"]["author-name"]}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12 p-0 m-0">
              <div className="culture-more-read-main">
                <div className="culture-more-read InterstateCompressed-Bold">
                  <div className="culture-more-read-1 InterstateCompressed-Bold">
                    MORE READS
                  </div>
                </div>
                <div className="culture-more-read-warp">
                  {resp.slice(4, 6).map((a, index) => (
                    <div
                      key={index}
                      className={`culture-content-read-more culture-content culture-content-${
                        index + 3
                      }`}
                    >
                      <Link
                        href={
                          subCatPageUrl[a["story"]["sections"][0]["slug"]].url
                        }
                      >
                        <div className="culture-content-cat culture-content-rm-cat Biotif-Book">
                          {a["story"]["sections"][0]["name"].toUpperCase()}
                        </div>
                      </Link>
                      <Link href={`/${a["story"]["slug"]}`}>
                        <div className="culture-content-title culture-content-rm-titile Biotif-SemiBold">
                          {a["story"]["headline"]}
                        </div>
                      </Link>
                      <Link href={`/${a["story"]["slug"]}`}>
                        <div className="culture-content-author culture-content-rm-author Biotif-Book">
                          By {a["story"]["author-name"]}
                        </div>
                      </Link>
                    </div>
                  ))}
                  {/* <div className="Biotif-Bold culture-content-read-btn">
              <div className="culture-content-read-btn-1" onClick={() => props.history.push('/culture')}>READ MORE →</div>
            </div> */}
                  <AdPillar
                    img={AdImg}
                    linkStatus="internal"
                    url="/news-letter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mbp-5">
            <div className="culture-image-section">
              <div className="culture-image-image cursor-pointer">
                <Link href={`/${resp[3]["story"]["slug"]}`}>
                  <img
                    src={`${imgBaseURL}${resp[3]["story"]["hero-image-s3-key"]}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="culture-image-content">
                <div>
                  <Link href={`/${resp[3]["story"]["slug"]}`}>
                    <div className="culture-image-content-head HeldaneDisplay-RegularItalic">
                      Editor’s Pick
                    </div>
                  </Link>
                  <Link href={`/${resp[3]["story"]["slug"]}`}>
                    <div className="culture-image-content-title Biotif-SemiBold cursor-pointer">
                      {resp[3]["story"]["headline"].toUpperCase()}
                    </div>
                  </Link>
                  <Link href={`/${resp[3]["story"]["slug"]}`}>
                    <div className="culture-image-content-bottom Biotif-SemiBold cursor-pointer">
                      {resp[3]["story"]["subheadline"]}
                    </div>
                  </Link>
                  <Link href={`/${resp[3]["story"]["slug"]}`}>
                    <div className="culture-image-content-btn Biotif-Regular">
                      <button>READ MORE →</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CultureSection;
