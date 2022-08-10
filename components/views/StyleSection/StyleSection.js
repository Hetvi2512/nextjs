import React from "react";
import { useRouter } from "next/router";
import { imgBaseURL } from "../../../helper/constants";
import Link from "next/link";
import { subCatPageUrl } from "../../../helper/constants";
import Image from "next/image";
import style from "../../../public/images/title_svg_style.svg";
function StyleSection({ resp }) {
  const router = useRouter();
  const handleIndividualStory = (a) => {
    console.log("onclick", a["story"]["sections"][0]);
    router.push(`/${a["story"]["slug"]}`, undefined, { shallow: true });
  };
  return (
    <>
      {resp?.length && (
        <div className="style-main">
          <div className="style-heading InterstateCompressed-Bold">
            <div className="style-heading-img">
              <Image
                src={style}
                alt="style logo"
                className="cursor-pointer"
                onClick={() => {
                  router.push("/style", undefined, { shallow: true });
                }}
                layout="fill"
              />
            </div>
          </div>
          <div className="style-content-main">
            {resp.slice(0, 5).map((a, index) => (
              <div
                key={index}
                className={`style-content-${index + 1} style-content`}
              >
                <Link href={`/${a["story"]["slug"]}`}>
                  <div className={`style-content-${index + 1} style-content`}>
                    <div className={"imageContainer"}>
                      <Image
                        src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        placeholder="blur"
                        blurDataURL={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                        layout="fill"
                        className={"image"}
                      />
                    </div>
                  </div>
                  {/* <div
                    className={
                      index == 0 || index == 1
                        ? `style-content-${index + 1}-img style-content-img`
                        : index == 3
                        ? `style-content-third-img style-content-img`
                        : `style-content-main-img style-content-img`
                    }
                  >
                    <Image
                      className="cursor-pointer"
                      src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                      alt=""
                      layout="fill"
                      // objectFit="cover"
                    />
                  </div> */}
                </Link>

                <Link
                  href={subCatPageUrl[a["story"]["sections"][0]["slug"]].url}
                >
                  <div
                    className="style-content-cat Biotif-Book cursor-pointer"
                    onClick={() => {
                      handleIndividualStory(a);
                    }}
                  >
                    {a["story"]["sections"][0]["name"].toUpperCase()}
                  </div>
                </Link>

                <Link href={`/${a["story"]["slug"]}`}>
                  <div
                    className="style-content-title cursor-pointer Biotif-SemiBold"
                    onClick={() => {
                      handleIndividualStory(a);
                    }}
                  >
                    {a["story"]["headline"]}
                  </div>
                </Link>

                <div
                  className="style-content-author cursor-pointer Biotif-Book"
                  onClick={() => {
                    handleIndividualStory(a);
                  }}
                >
                  <Link href={`/${a["story"]["slug"]}`}>
                    <> By {a["story"]["author-name"]}</>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="pink-border mtp-5"></div>
          <div>
            <div className="text-section-1 Biotif-Medium cursor-pointer">
              <Link
                href={
                  subCatPageUrl[resp[5]["story"]["sections"][0]["slug"]].url
                }
              >
                <span className="text-section-1 Biotif-Medium cursor-pointer">
                  {resp[5]["story"]["sections"][0]["name"].toUpperCase()}
                </span>
              </Link>

              <span className="text-section-1 Biotif-Medium cursor-pointer">
                <Link href={`/${resp[5]["story"]["slug"]}`}>
                  <>
                    {" "}
                    – By <em> {resp[5]["story"]["author-name"]}</em>
                  </>
                </Link>
              </span>
            </div>

            <Link href={`/${resp[5]["story"]["slug"]}`}>
              <div
                className="description-section-1 Biotif-SemiBold mtp-1 cursor-pointer"
                onClick={() => {
                  handleIndividualStory(resp[5]);
                }}
              >
                {resp[5]["story"]["subheadline"].toUpperCase()}
              </div>
            </Link>

            {/* <div className='description-section-1 Biotif-SemiBold mtp-1' dangerouslySetInnerHTML={{ __html: resp[5]['story']['cards']['0']['story-elements']['0']['text']}}>
          </div> */}
          </div>
          <div className="d-flex justify-content Biotif-Regular mtp-3 mbp-5">
            <button
              className="read-more-btn"
              type="submit"
              onClick={() => {
                handleIndividualStory(resp[5]);
              }}
            >
              READ MORE →
            </button>
          </div>
          <div className="pink-border"></div>

          <div style={{ position: "relative" }} className="cursor-pointer">
            <Link href={`/${resp[6]["story"]["slug"]}`}>
              <img
                width="100%"
                style={{ maxHeight: "95vh", objectFit: "cover" }}
                src={`${imgBaseURL}${resp[6]["story"]["hero-image-s3-key"]}`}
                alt="group-photo-image"
              />
            </Link>
            <div className="image-data">
              <div className="image-title Biotif-Regular">
                <span className="image-title Biotif-Regular">
                  <Link
                    href={
                      subCatPageUrl[resp[6]["story"]["sections"][0]["slug"]].url
                    }
                  >
                    {resp[6]["story"]["sections"][0]["name"].toUpperCase()}
                  </Link>
                </span>
                – By <em>{resp[6]["story"]["author-name"]}</em>
              </div>
              <div
                className="image-text Biotif-SemiBold cursor-pointer"
                onClick={() => {
                  handleIndividualStory(resp[6]);
                }}
              >
                {resp[6]["story"]["headline"]}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StyleSection;
