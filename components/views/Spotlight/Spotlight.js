import Link from "next/link";
import React from "react";
import { subCatPageUrl } from "../../../helper/constants";
import SpotlightWrapper from "./style";

function Spotlight({ resp }) {
  return (
    <div>
      {resp?.length && (
        <SpotlightWrapper>
          <div className="spotlight">
            <div className="spotlight-head InterstateCompressed-Bold">
              THE SPOTLIGHT
            </div>
            {resp.slice(0, 5).map((a, index) => (
              <div
                key={index}
                className="spolight-main"
                style={{ cursor: "pointer" }}
              >
                <Link
                  href={subCatPageUrl[a["story"]["sections"][0]["slug"]].url}
                >
                  <div className="Biotif-Book spotlight-cat">
                    {a["story"]["sections"][0]["name"].toUpperCase()}
                  </div>
                </Link>
                <div className="d-flex">
                  <Link href={`/${a["story"]["slug"]}`}>
                    <div className="spotlight-index InterstateCompressed-Bold neon">
                      {index + 1}
                    </div>
                  </Link>
                  <Link href={`/${a["story"]["slug"]}`}>
                    <div className="spotlight-title InterstateCompressed-Bold">
                      {a["story"]["headline"].toUpperCase()}
                    </div>
                  </Link>
                </div>
                <Link href={`/${a["story"]["slug"]}`}>
                  <div className="spotlight-auth Biotif-Book">
                    By {a["story"]["author-name"]}
                  </div>
                </Link>
                <div className="spotlight-border"></div>
              </div>
            ))}
          </div>
        </SpotlightWrapper>
      )}
    </div>
  );
}

export default Spotlight;
