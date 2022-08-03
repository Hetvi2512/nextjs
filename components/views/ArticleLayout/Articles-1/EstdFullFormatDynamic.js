import React, { useEffect, useState } from "react";
import EstdFullFormatDynamicCard01 from "./EstdFullFormatDynamicCard01";
import EstdFullFormatDynamicCard1 from "./EstdFullFormatDynamicCard1";
import EstdFullDynamicFormatCard2 from "./EstdFullDynamicFormatCard2";
import EstdFullFormat1Card2 from "../EstdFullFormat1/EstdFullFormat1card2";

import ArticleWrapper from "./style";
function EstdFullFormatDynamic({ heroData, seoData, cards }) {
  const cardType = [];
  const [displayFlag, setDisplayFlag] = useState(false);
  const [cardtype, setcardtype] = useState([]);
  var firstStory = true;
  let i = 1;
  useEffect(() => {
    window.scroll(0, 0);
    cards.map((card, index) => {
      console.log("cardtype",index)
      if ("alternateheroimage" in card.metadata.attributes) {
        console.log("wroking alternateheroimage");
      } else {
        card["story-elements"].map((element) => {
          if (
            element.type === "image" &&
            element.subtype === null &&
            firstStory
          ) {
            cardType[index] = "card01";
            firstStory = false;
          } else if (element.type === "image" && element.subtype === null && index!=0) {
            console.log("cardtype index",i, index)
            cardType[index] = "card1";
            i++;
          } else if (
            element.type === "composite" &&
            element.subtype === "image-gallery"
          ) {
            cardType[index] = "card2";
          } else if (
            element.type === "text" &&
            element.subtype === "also-read"
          ) {
            cardType[index] = "also-read";
          }
          // else{
          //     cardType[index]='card1';
          // }
        });
        if (typeof cardType[index] === "undefined") {
          cardType[index] = "card3";
        }
      }
    });
    console.log("cardtype", cardType);
    setcardtype(cardType);
    setDisplayFlag(true);
  }, []);
  return (
    <ArticleWrapper>
      <div className="estd-full-format-2-web">
        <div className="effd-main-img pbp-2">
          <img width="100%" src={heroData.img} alt="main-image"></img>
        </div>

        <div className="style-title pbp-2">{heroData.cat}</div>
        <div className="HeldaneDisplay-Regular style-question pbp-2">
          <h1 className="internal-div HeldaneDisplay-Regular">
            {heroData.title}
          </h1>
        </div>
        <div className="style-author">By {heroData.auth}</div>
      </div>

      <div className="estd-full-format-2-mobile">
        <div className="style-title pbp-2">{heroData.cat}</div>
        <div className="HeldaneDisplay-Regular style-question pbp-2">
          <h1 className="internal-div HeldaneDisplay-Regular">
            {heroData.title}
          </h1>
        </div>
        <div className="style-author">By {heroData.auth}</div>
        <div className="effd-main-img pbp-2">
          <img width="100%" src={heroData.img} alt="main-image"></img>
        </div>
      </div>

      {displayFlag &&
        cardtype?.map((card, index) =>
          card === "card01" ? (
            <EstdFullFormatDynamicCard01
              key={index}
              heroData={heroData}
              metaDataStory={seoData}
              cards={cards[index]}
            />
          ) : card === "card1" ? (
            <EstdFullFormatDynamicCard1 cards={cards[index]} key={index} />
          ) : card === "card2" ? (
            <EstdFullDynamicFormatCard2 cards={cards[index]} key={index} />
          ) : card === "card3" ? (
            <EstdFullFormat1Card2 cards={cards[index]} key={index} />
          ) : (
            ""
          )
        )}
      {/* {displayFlag &&
        cardtype.map((card, index) =>
          card === "also-read" ? (
            <ReadMoreSection storyElement={cards[index]["story-elements"]} />
          ) : (
            ""
          )
        )} */}
    </ArticleWrapper>
  );
}

export default EstdFullFormatDynamic;
