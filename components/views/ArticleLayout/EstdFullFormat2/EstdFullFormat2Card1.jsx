import React from "react";
import Image from "next/image";
import { imgBaseURL } from "../../../../helper/constants";
function EstdFullFormat2Card1({ cards }) {
  const storyElement = cards["story-elements"];
  return (
    <div className="a5-p1">
      {storyElement.map((element, index) =>
        element.type === "text" ? (
          <div
            key={index}
            className="a5-p1-p1"
            dangerouslySetInnerHTML={{ __html: element.text }}
          ></div>
        ) : element.type === "image" ? (
          <div key={index}>
            <div className="a5-three-img">
              <div className="a5-three-img-1">
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
                    src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                    alt=""
                  /> */}
              </div>
              <div className="a5-three-img-1">
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
                  src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                  alt=""
                /> */}
              </div>
              <div className="a5-three-img-1">
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
                  src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                  alt=""
                /> */}
              </div>
            </div>
            <div
              className="a5-three-img-cap Heldane-Text-Regular"
              dangerouslySetInnerHTML={{ __html: element["title"] }}
            ></div>
          </div>
        ) : element.subtype === "image-gallery" ? (
          <div className="a5-three-img">
            {element["story-elements"].map((imageData, index) => (
              <div key={index} className="a5-three-img-1">
                <img src={`${imgBaseURL}${imageData["image-s3-key"]}`}></img>
                <div
                  className="a5-three-img-cap"
                  dangerouslySetInnerHTML={{ __html: imageData["title"] }}
                ></div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default EstdFullFormat2Card1;
