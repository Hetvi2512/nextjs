import Image from "next/image";
import React from "react";
import { imgBaseURL } from "../../../../helper/constants";

const EstdFullFormat1card2 = (props) => {
  const { cards } = props;
  // console.log('cards', cards, props)
  const storyElement = cards["story-elements"];
  if (storyElement) {
    return (
      <div className="a4-p2">
        {storyElement.map((element, index) => (
          <div key={index}>
            {" "}
            {element.type === "text" ? (
              <div
                key={index}
                className="Heldane-Text-Regular a4-p2-p1"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            ) : element.type === "image" ? (
              <div className="a4-full-img">
                {/* <Image
                  src={`${imgBaseURL}${element["image-s3-key"]}`}
                  placeholder={"blur"}
                  blurDataURL={`${imgBaseURL}${element["image-s3-key"]}`}
                  width={1833}
                  height={882}
                /> */}

                <img src={`${imgBaseURL}${element["image-s3-key"]}`} alt="" />
                <div
                  className="a4-full-img-caption"
                  dangerouslySetInnerHTML={{ __html: element["title"] }}
                ></div>
              </div>
            ) : element.subtype === "image-gallery" ? (
              <div key={index} className="a4-img">
                {element["story-elements"].map((imageData, index) => (
                  <div key={index} className="a4-img-1">
                   <div className={"imageContainer"}>
                      <Image
                        src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                        placeholder={"blur"}
                        blurDataURL={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                        layout="fill"
                        className={"image"}
                      />
                    </div>
                    {/* <img
                      src={`${imgBaseURL}${imageData["image-s3-key"]}`}
                    ></img> */}
                    <div
                      className="a4-img-caption"
                      dangerouslySetInnerHTML={{ __html: imageData["title"] }}
                    ></div>
                  </div>
                ))}
              </div>
            ) : (
              <div key={index}></div>
            )}{" "}
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default EstdFullFormat1card2;
