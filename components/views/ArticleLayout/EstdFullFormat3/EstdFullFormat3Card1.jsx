import Image from "next/image";
import React from "react";
import imgBaseURL from "../../../../helper/constants";

function EstdFullFormat3Card1({ cards }) {
  const storyElement = cards["story-elements"];

  return (
    <>
   
      {storyElement && (
        <div className="a5-p1">
          {storyElement.map((element,index) =>
            element.type === "text" ? (
              <div
              key={index}
                className="a5-p1-p1"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            ) : element.type === "image" ? (
              <div key={index}>
                <div className="a6-img">
                  <div className="a6-img-1">
                    
                    <img
                      src={`${imgBaseURL}${element["image-s3-key"]}`}
                      alt=""
                    />
                    <div
                      className="a4-img-caption"
                      dangerouslySetInnerHTML={{ __html: element["title"] }}
                    ></div>
                  </div>
                  <div className="a6-img-1">
                    <img
                      src={`${imgBaseURL}${element["image-s3-key"]}`}
                      alt=""
                    />
                    <div
                      className="a4-img-caption"
                      dangerouslySetInnerHTML={{ __html: element["title"] }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : element.subtype === "image-gallery" ? (
              <div className="a6-img mbp-2">
                {element["story-elements"].map((imageData, index) => (
                  <div className="a6-img-1" key={index}>
                     <Image
                      src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                      placeholder={"blur"}
                      blurDataURL={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                      width={517}
                      height={704}
                    />
                    {/* <img
                      className="img-h-90"
                      src={`https://gumlet.assettype.com/${imageData["image-s3-key"]}`}
                      alt=""
                    /> */}
                    <div
                      className="a4-img-caption"
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
      )}
    </>
  );
}

export default EstdFullFormat3Card1;
