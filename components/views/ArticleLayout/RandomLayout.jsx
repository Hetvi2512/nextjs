import React from 'react';
import { imgBaseURL } from '../../../helper/constants';
import Footer from '../../common/Footer';
import Header2 from '../../common/Header/Header2';
import RandomStyle from "./RandomStyle.js";
function RandomLayout({heroData, seoData,cards}) {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
    
    return (
        <div>
      <Header2 />
      <RandomStyle>
        <div className="mtp-5 mbp-5">
          <div className="d-flex justify-content-center">
            <img
              width="50%"
              className="main-hero-img"
              src={heroData.img}
              alt="main-image"
            ></img>
          </div>
          <div className="style-title mbp-2 mtp-2">{heroData.cat}</div>
          <div className="HeldaneDisplay-Regular style-question pbp-2">
            <div className="internal-div HeldaneDisplay-Regular">
              {heroData.title}
            </div>
          </div>
          <div className="style-author mbp-2 mtp-2"> By {heroData.auth}</div>

          <div className="mlp-30 mrp-30">
            {cards?.map((card, index) =>
              card["story-elements"]?.map((element) =>
                element.type === "text" && element.subtype === null ? (
                  <div key={index} dangerouslySetInnerHTML={{ __html: element.text }}></div>
                ) : element.type === "image" ? (
                  <div key={index}>
                    <img
                      src={`${imgBaseURL}${element["image-s3-key"]}`}
                      alt="hero image"
                    />
                    <div
                      className="image-title"
                      dangerouslySetInnerHTML={{ __html: element.title }}
                    ></div>
                  </div>
                ) : element.subtype === "image-gallery" ? (
                  <div className="image-bundle">
                    {element["story-elements"]?.map((image, index) => (
                      <div key={index} className={`image-single image-${index}`}>
                        <img
                          src={`${imgBaseURL}${image["image-s3-key"]}`}
                          alt=""
                        />
                        <div
                          className="image-title"
                          dangerouslySetInnerHTML={{ __html: image.title }}
                        ></div>
                      </div>
                    ))}{" "}
                  </div>
                ) : (
                  ""
                )
              )
            )}
          </div>
        </div>
      </RandomStyle>
      <Footer />
    </div>
    );
}

export default RandomLayout;