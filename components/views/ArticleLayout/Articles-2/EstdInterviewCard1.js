import Image from 'next/image';
import React from 'react';
import {imgBaseURL} from '../../../../helper/constants'
function EstdInterviewCard1({cards}) {
  const storyElement = cards["story-elements"];

    return (
        <div className="">
        <div className="row ma-0 row-data-2">
          {storyElement?.map((element, index) =>
            element.type === "text" ? (
              <div key={index} className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0 ">
                <div
                  className="description-head HeldaneDisplay-Regular"
                  dangerouslySetInnerHTML={{ __html: element.text }}
                ></div>
              </div>
            ) : (
              ""
            )
          )}
          {storyElement.map((element, index) =>
            element.type === "image" ? (
              <div key={index} className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0">
                <div className="interview-img-side">
                <Image src={`${imgBaseURL}${element["image-s3-key"]}`}  placeholder={"blur"} blurDataURL={`${imgBaseURL}${element["image-s3-key"]}`} width={748} height={935} />
                  {/* <img
                    width="100%"
                    src={`${imgBaseURL}${element["image-s3-key"]}`}
                    alt="fashion"
                  ></img> */}
                  <div
                    className="HeldaneDisplay-Regular image-text-2"
                    dangerouslySetInnerHTML={{ __html: element["title"] }}
                  ></div>
                </div>
              </div>
            ) : (
              <div key={index}></div>
            )
          )}
        </div>
      </div>
    );
}

export default EstdInterviewCard1;