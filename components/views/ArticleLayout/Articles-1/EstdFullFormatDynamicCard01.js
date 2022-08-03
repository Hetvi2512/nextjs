import React from 'react';
import SocialMediaShareButton from '../../SocialMediaShareButton';

function EstdFullFormatDynamicCard01({ heroData, seoData, cards }) {
    const storyElement = cards['story-elements']
    console.log("story element ", storyElement);

    return (
        <div className="ptp-5 pbp-5">
        <div className="row ma-0 row-data">
          {storyElement?.map((element,index) =>
            element.type === "text" ? (
              <div key={index} className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0">
                <div className="ffd-social-ic">
                  <div className="d-flex main-social-icon">
                    <SocialMediaShareButton title={heroData?.title} description={seoData?.description}/>
                  </div>
                </div>
                <div
                  className="description-head"
                  dangerouslySetInnerHTML={{ __html: element.text }}
                ></div>
              </div>
            ) : element.type === "image" ? (
              <div key={index} className="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-0">
                <div className="ffd-b-img">
                  <img
                    width="100%"
                    src={`https://gumlet.assettype.com/${element["image-s3-key"]}`}
                    alt="fashion"
                  ></img>
                  <div
                    className="HeldaneDisplay-Regular image-text"
                    dangerouslySetInnerHTML={{ __html: element["title"] }}
                  ></div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
     </div>
      </div>
    );
}

export default EstdFullFormatDynamicCard01;