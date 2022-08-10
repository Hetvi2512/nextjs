import Image from "next/image";
import React from "react";
import { imgBaseURL } from "../../../../helper/constants";
function EstdFullFormat2Card2({ cards }) {
  const storyElement = cards["story-elements"];
  return (
    <div className="a5-p2">
      {storyElement.map((element, index) =>
        element.type === "text" ? (
          <div
            key={index}
            className="a5-p2-p2"
            dangerouslySetInnerHTML={{ __html: element.text }}
          ></div>
        ) : element.type === "image" ? (
          <div key={index}>
            <div className="a5-three-img">
              <div className="a5-three-img-1">
                <img src={`${imgBaseURL}${element["image-s3-key"]}`} alt="" />
              </div>
              <div className="a5-three-img-1">
                <img src={`${imgBaseURL}${element["image-s3-key"]}`} alt="" />
              </div>
              <div className="a5-three-img-1">
                <img src={`${imgBaseURL}${element["image-s3-key"]}`} alt="" />
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
                <Image
                  src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                  blurDataURL={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                  placeholder="blur"
                  width={611}
                  height={844}
                />
                {/* <img src={`${imgBaseURL}${imageData["image-s3-key"]}`}></img> */}
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

export default EstdFullFormat2Card2;
