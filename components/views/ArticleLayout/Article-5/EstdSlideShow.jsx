import React from "react";
import Article5Wrapper from "./style";
import SocialMediaShareButton from "../../SocialMediaShareButton";
import {imgBaseURL} from '../../../../helper/constants'
import moment from "moment";
import SlideShowComp from "./SlideShowComp";
function EstdSlideShow({ heroData, seoData, cards }) {
  const allTypeArray = [];
  const imgArray = [];
  let count = 0;
  let readmoreCardNumber;
  cards.map((card, index) => {
    card["story-elements"].map((ele) => {
      if (ele.subtype === "also-read") {
        readmoreCardNumber = index;
      }
    });
  });

  cards.map((card) => {
    card["story-elements"].map((element, index) => {
      if (element.subtype === "image-gallery") {
        const imgArray2 = [];

        element["story-elements"].map((imageData) => {
          imgArray.push({
            image: imgBaseURL + imageData["image-s3-key"],
            title: imageData["title"],
          });
          imgArray2.push({
            image: imgBaseURL + imageData["image-s3-key"],
            title: imageData["title"],
          });
        });
        allTypeArray[count++] = { type: "image", images: imgArray2 };
      } else if (element.type === "text" && !element.subtype) {
        allTypeArray[count++] = { type: "text", text: element.text };
      }
    });
  });

  return (
    <Article5Wrapper>
      <div className="ss-format-web">
        <div className="slide-show-main-img">
          <img
            width="100%"
            src={heroData.img}
            // src={MainImage}
            alt="main-1"
          ></img>
        </div>
      </div>
      <div className="parent-div-article">
        <h1>
          <div className="slide-show-title InterstateCompressed-Bold">
            {heroData.title.toUpperCase()}
          </div>
        </h1>
        <div className="grid-5">
          <div>
            <div className="d-flex justify-content-center">
              <div className="category-style Biotif-Bold">{heroData.cat}</div>
            </div>
            <div className="ptp-3 text-center">
              <SocialMediaShareButton
                title={heroData.title}
                description={seoData?.description}
              />
            </div>
          </div>
          <div className="ss-main-auth-div">
            <div className="by-author Biotif-SemiBold pbp-1">
              By {heroData.auth}
            </div>
            <div className="by-date Biotif-Regular pbp-7">
              {moment(heroData["publishedAt"]).format("DD MMMM, YYYY")}
            </div>
          </div>
        </div>
        <div className="ss-format-mobile">
          <div className="slide-show-main-img">
            <img
              width="100%"
              src={heroData.img}
              // src={MainImage}
              alt="main-1"
            ></img>
          </div>
        </div>
        {allTypeArray.map((ele, index) =>
          ele.type === "text" ? (
            <div
              className="HeldaneDisplay-Regular ss-question"
              dangerouslySetInnerHTML={{ __html: ele.text }}
            ></div>
          ) : ele.type === "image" ? (
            <SlideShowComp images={ele.images} />
          ) : (
            ""
          )
        )}
      </div>
      {/* 
         {
             readmoreCardNumber >= 0 ? <ReadMoreSection storyElement={cards[readmoreCardNumber]['story-elements']} /> : ''
         } */}
    </Article5Wrapper>
  );
}

export default EstdSlideShow;
