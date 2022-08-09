import React from "react";
import Link from "next/link";
import Advertisement from "../Advertisement/Advertisement";
import styleAd from "../../../public/images/R&M Style.jpg";
import selfAd from "../../../public/images/TA Home3.gif";
import cultureAd from "../../../public/images/R&M Culture.jpg";
import communityAd from "../../../public/images/TA Home3.gif";
import styleAdSq1 from "../../../public/images/R&M_Sq Style.jpg";
import selfAdSq2 from "../../../public/images/TA Sq.gif";
import cultureAdSq3 from "../../../public/images/R&M_Sq Culture.jpg";
import communityAdSq4 from "../../../public/images/TA Sq.gif";
import { imgBaseURL, subCatPageUrl } from "../../../helper/constants";
import Image from "next/image";
function SectionStoryDisplay({ stories, cat }) {
  const alternateHeroImg = (story) => {
    let heroImage = imgBaseURL + story["hero-image-s3-key"];

    if (story["alternative"]) {
      if ("home" in story["alternative"]) {
        if ("default" in story["alternative"]["home"]) {
          console.log("alernative", story["alternative"]["home"]);
          if ("hero-image" in story["alternative"]["home"]["default"]) {
            if (story["alternative"]["home"]["default"]["hero-image"]) {
              if (
                "hero-image-s3-key" in
                story["alternative"]["home"]["default"]["hero-image"]
              ) {
                console.log(
                  story["alternative"]["home"]["default"]["hero-image"][
                    "hero-image-s3-key"
                  ]
                );
                heroImage =
                  imgBaseURL +
                  story["alternative"]["home"]["default"]["hero-image"][
                    "hero-image-s3-key"
                  ];
              }
            }
          }
        }
      }
    }
    return heroImage;
  };
  return (
    <div className="">
      {stories?.length === 0 ? (
        <div
          className="text-center mtp-5 mbp-5"
          style={{ height: "80vh" }}
        ></div>
      ) : stories?.length === 1 ? (
        <div>
          <div className="sd-one-story-only">
            {stories?.map((story, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={`/${story["slug"]}`}>
                  <div>
                    <img
                      width="100%"
                      src={`${imgBaseURL}${story["hero-image-s3-key"]}`}
                      alt={index}
                    ></img>
                  </div>
                </Link>
                <Link href={subCatPageUrl[story["sections"][0]["slug"]].url}>
                  <div className="sub-category Biotif-Book">
                    {story["sections"][0]["display-name"].toUpperCase()}
                  </div>
                </Link>
                <Link href={`/${story["slug"]}`}>
                  <div className="question-category Biotif-SemiBold">
                    {story["headline"]}
                  </div>
                </Link>

                <Link href={`/${story["slug"]}`}>
                  <div className="author Biotif-Book">
                    By {story["author-name"]}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="web-view-ad-img">
            {cat === "style" ? (
              <Advertisement
                img={styleAd}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "self" ? (
              <Advertisement
                img={selfAd}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : cat === "culture" ? (
              <Advertisement
                img={cultureAd}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "community" ? (
              <Advertisement
                img={communityAd}
                linkStatus="external"
                url={"https://www.instagram.com/theestablished_"}
              />
            ) : (
              ""
            )}
          </div>
          <div className="mob-view-ad-img plp-15 prp-15 pbp-5">
            {cat === "style" ? (
              <Advertisement
                img={styleAdSq1}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "self" ? (
              <Advertisement
                img={selfAdSq2}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : cat === "culture" ? (
              <Advertisement
                img={cultureAdSq3}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "community" ? (
              <Advertisement
                img={communityAdSq4}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : stories?.length >= 2 ? (
        <div>
          <div className="grid-view mlp-15 mrp-15 mbp-5">
            {stories?.slice(0, 2).map((story, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={`/${story["slug"]}`}>
                  <div>
                    {/* <Image
                      src={`${imgBaseURL}${story["hero-image-s3-key"]}`}
                      blurDataURL={`${imgBaseURL}${story["hero-image-s3-key"]}`}
                      width={592}
                      height={index === 1 ? 739 : 592}
                    /> */}
                    <img
                      width="100%"
                      src={`${imgBaseURL}${story["hero-image-s3-key"]}`}
                      alt={index}
                    ></img>
                  </div>
                </Link>
                <Link href={subCatPageUrl[story["sections"][0]["slug"]].url}>
                  <div className="sub-category Biotif-Book">
                    {story["sections"][0]["display-name"].toUpperCase()}
                  </div>
                </Link>
                <Link href={`/${story["slug"]}`}>
                  <div className="question-category Biotif-SemiBold">
                    {story["headline"]}
                  </div>
                </Link>
                <Link href={`/${story["slug"]}`}>
                  <div className="author Biotif-Book">
                    By {story["author-name"]}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="web-view-ad-img">
            {cat === "style" ? (
              <Advertisement
                img={styleAd}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "self" ? (
              <Advertisement
                img={selfAd}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : cat === "culture" ? (
              <Advertisement
                img={cultureAd}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "community" ? (
              <Advertisement
                img={communityAd}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : (
              ""
            )}
          </div>
          <div className="mob-view-ad-img plp-15 prp-15 pbp-5">
            {cat === "style" ? (
              <Advertisement
                img={styleAdSq1}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "self" ? (
              <Advertisement
                img={selfAdSq2}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : cat === "culture" ? (
              <Advertisement
                img={cultureAdSq3}
                linkStatus="external"
                url={"https://www.randmluxury.com/"}
              />
            ) : cat === "community" ? (
              <Advertisement
                img={communityAdSq4}
                linkStatus="external"
                url={"https://timeavenue.com/"}
              />
            ) : (
              ""
            )}
          </div>
          <div className="pink-border mtp-5"></div>
          <div className="grid-new-1 mlp-15 mrp-15">
            {stories?.slice(2).map((story, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={`/${story["slug"]}`}>
                  <div className="section-story-display-img">
                    <img
                      width="100%"
                      src={alternateHeroImg(story)}
                      alt={index}
                    ></img>
                  </div>
                </Link>
                <Link href={subCatPageUrl[story["sections"][0]["slug"]].url}>
                  <div className="sub-category Biotif-Book">
                    {" "}
                    {story["sections"][0]["display-name"].toUpperCase()}
                  </div>
                </Link>
                <Link href={`/${story["slug"]}`}>
                  <div className="question-category Biotif-SemiBold">
                    {story["headline"]}
                  </div>
                </Link>
                <Link href={`/${story["slug"]}`}>
                  <div className="author Biotif-Book mbp-10">
                    By {story["author-name"]}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ height: "80vh" }}></div>
      )}
    </div>
    // <div className="grid-view mlp-15 mrp-15 mbp-5">
    //   {stories.slice(0,2).map((story, index) => (
    //     <div className="cursor-pointer" key={index}>
    //       <Link href={`/${story["slug"]}`}>
    //         <Image
    //           src={`https://gumlet.assettype.com/${story["hero-image-s3-key"]}`}
    //           width ={600}
    //           height={600}
    //         />
    //       </Link>
    //       <Link href={`/${story["slug"]}`}>
    //         <div className="sub-category Biotif-Book">
    //           {story["sections"][0]["display-name"].toUpperCase()}
    //         </div>
    //       </Link>
    //       <Link href={`/${story["slug"]}`}>
    //         <div className="question-category Biotif-SemiBold">
    //           {story["headline"]}
    //         </div>
    //       </Link>
    //       <Link href={`/${story["slug"]}`}>
    //         <div className="author Biotif-Book">By {story["author-name"]}</div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}

export default SectionStoryDisplay;
