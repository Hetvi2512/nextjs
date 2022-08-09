import Image from "next/image";
import React from "react";

function EstdFullDynamicFormatCard2({ cards }) {
  const storyElement = cards["story-elements"];

  return (
    <div>
      <div className="black-bg black-bg-m-p row row-data ma-0  pbp-10">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 mtp-10 d-flex align-center p-0">
          <div className="style-grid-new ffd-b-img">
            {storyElement?.map((element) =>
              element.subtype === "image-gallery"
                ? element["story-elements"].map((imageData, index) => (
                    <div key={index}>
                      <div>
                        <Image
                          src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                          alt="main-image"
                          placeholder={"blur"}
                          blurDataURL={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                          width={355}
                          height={533}
                        />
                        {/* 
                        <img
                          width="100%"
                          src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                        ></img> */}
                        <div
                          className="image-text HeldaneDisplay-Regular"
                          dangerouslySetInnerHTML={{
                            __html: imageData["title"],
                          }}
                        ></div>
                      </div>
                    </div>
                  ))
                : ""
            )}
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 mtp-10 d-flex align-center p-0">
          {storyElement?.map((element, index) =>
            element.type === "text" ? (
              <div
                key={index}
                className="row-2-description-part pbp-5"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default EstdFullDynamicFormatCard2;
