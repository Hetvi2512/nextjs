import Image from "next/image";
import React from "react";

function EstdFullFormat2Card3({ cards, cardBgColor }) {
  const storyElement = cards["story-elements"];
  return (
    <div
      className="ptp-5 pbp-5 format-2-card-3-main"
      style={{
        backgroundColor: cardBgColor ? cardBgColor : "white",
        color: "white",
      }}
    >
      <div className="row ma-0 row-data fullformat-2-card-3-web">
        {storyElement?.map((element, index) =>
          element.type === "text" ? (
            <div
              key={index}
              className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0 d-flex align-center"
            >
              <div
                className="a5-cont-card3 pbp-5"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            </div>
          ) : (
            ""
          )
        )}
        {storyElement?.map((element, index) =>
          element.type === "image" ? (
            <div
              key={index}
              className="col-lg-6 col-xl-6 col-md-12 col-sm-12 a5-card3-img p-0 d-flex align-center"
            >
              <div>
                <div className={"imageContainer"}>
                  <Image
                    src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                    placeholder={"blur"}
                    blurDataURL={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                    layout="fill"
                    className={"image"}
                  />
                </div>
                {/* <img
                  width="100%"
                  src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                  alt="fashion"
                ></img> */}
                <div
                  className="HeldaneDisplay-Regular image-text-caption"
                  dangerouslySetInnerHTML={{ __html: element["title"] }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="row ma-0 row-data fullformat-2-card-3-mobile">
        {storyElement.map((element) =>
          element.type === "image" ? (
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 a5-card3-img p-0">
              <div>
                <img
                  width="100%"
                  src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                  alt="fashion"
                ></img>
                <div
                  className="HeldaneDisplay-Regular image-text-caption"
                  dangerouslySetInnerHTML={{ __html: element["title"] }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
        {storyElement.map((element) =>
          element.type === "text" ? (
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0">
              <div
                className="a5-cont-card3 pbp-5"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default EstdFullFormat2Card3;
