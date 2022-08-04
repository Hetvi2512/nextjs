import React from "react";
import { imgBaseURL } from "../../../../helper/constants";
function EstdInterviewCard2({ cards }) {
  const storyElement = cards["story-elements"];
  return (
    <div className="mbp-5">
      {storyElement?.map((element, index) =>
        element.type === "text" ? (
          <div
            key={index}
            className="interview-question-answer"
            dangerouslySetInnerHTML={{ __html: element.text }}
          ></div>
        ) : element.type === "image" ? (
          <div key={index}>
            <div className="ptp-2">
              <img
                width="100%"
                src={`${imgBaseURL}${element["image-s3-key"]}`}
                alt=""
              />
            </div>
            <div
              className="a5-three-img-cap Heldane-Text-Regular"
              dangerouslySetInnerHTML={{ __html: element["title"] }}
            ></div>
          </div>
        ) : element.subtype === "image-gallery" ? (
          <div className="new-images-grid">
            {element["story-elements"].map((imageData, index) => (
              <div key={index}>
                <img
                  width="100%"
                  src={`${imgBaseURL}${imageData["image-s3-key"]}`}
                ></img>
                <div
                  className="image-text-2"
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

export default EstdInterviewCard2;
