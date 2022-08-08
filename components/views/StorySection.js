import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { imgBaseURL, subCatPageUrl } from "../../helper/constants";
function StorySection({ stories }) {
  const router = useRouter();
  return (
    <div className="common-section">
      <div className="common-partone"></div>
      <div className="common-parttwo">
        <div className="common-main-div">
          {" "}
          {stories?.map((a, index) => (
            <div
              className={`common-main-${index + 1} d-flex  flex-column`}
              key={a.id}
            >
              <Link href={`/${a["story"]["slug"]}`} prefetch={false}>
                <div style={{ cursor: "pointer" }}>
                  <div className={`common-main-${index + 1}-img`}>
                    <Image
                      src={`${imgBaseURL}${a["story"]["hero-image-s3-key"]}`}
                      alt=""
                      layout="fill"
                      // objectFit='cover'
                      priority
                    />
                  </div>
                  <Link
                    // href={subCatPageUrl[a["story"]["sections"][0]["slug"]].url}
                    href={{
                      pathname:
                        subCatPageUrl[a["story"]["sections"][0]["slug"]].url,
                      query: { key: (subCatPageUrl[a["story"]["sections"][0]["slug"]].key).toString() },
                    }}
                    as={ subCatPageUrl[a["story"]["sections"][0]["slug"]].url}
                    prefetch={false}
                  >
                    <div
                      className="Biotif-Book common-category"
                    >
                      {a["story"]["sections"][0]["name"].toUpperCase()}
                    </div>
                  </Link>
                  <div className="common-main-1-text InterstateCompressed-Bold">
                    {/* THE COMPLETE GUIDE TO NFTS */}
                    {a["story"]["headline"].toUpperCase()}
                  </div>
                  <div className="common-author Biotif-Book">
                    By {a["story"]["author-name"]}{" "}
                  </div>
                </div>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StorySection;
