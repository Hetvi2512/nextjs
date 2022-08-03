import React from "react";
import imgBaseURL from "../../../../helper/constants";
function EstdFullFormat3Card2({ cards }) {
  const storyElement = cards["story-elements"];

  return (
    <>
      {storyElement && (
        <div className="a5-p2">
          {storyElement.map((element,index) =>
            element.type === "text" ? (
              <div
              key={index}
                className="a5-p2-p2"
                dangerouslySetInnerHTML={{ __html: element.text }}
              ></div>
            ) : element.type === "image" ? (
              <div key={index}>
                <div className="a4-img mbp-3">
                  <div className="a4-img-1">
                    <img
                      src={`${imgBaseURL}${element["image-s3-key"]}`}
                      alt=""
                    />
                    <div
                      className="a4-img-caption"
                      dangerouslySetInnerHTML={{ __html: element["title"] }}
                    ></div>
                  </div>
                  <div className="a4-img-1">
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
              <div className="a4-img">
                {element["story-elements"].map((imageData, index) => (
                  <div className="a4-img-1" key={index}>
                    <img
                      className="img-h-90"
                      src={`${imgBaseURL}${imageData["image-s3-key"]}`}
                    ></img>
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

export default EstdFullFormat3Card2;
