import React, { useEffect, useState } from "react";
import moment from "moment";
import SocialMediaShareButton from "../../SocialMediaShareButton";
import EstdFullFormat3Card1 from "./EstdFullFormat3Card1";
import EstdFullFormat3Card2 from "./EstdFullFormat3Card1";
import EstdFullFormat3Card3 from "./EstdFullFormat3Card3";
import ReadMoreSection from "../ReadMoreSection";
import Image from "next/image";
function EstdFullFormat3({ heroData, seoData, cards }) {
  const cardType = [];
  const [cardtype, setcardtype] = useState([]);
  const [displayFlag, setDisplayFlag] = useState(false);
  const [cardBgColor, setCardBgColor] = useState([]);
  useEffect(() => {
    console.log("inside use");
    window.scroll(0, 0);

    let tempcont = 0;
    cards.map((card, index) => {
      let typeNotSelected = true;
      console.log("alternateheroimage" in card.metadata.attributes);
      if (Object.keys(card.metadata.attributes).length >= 1) {
        if ("alternateheroimage" in card.metadata.attributes) {
          if (card.metadata.attributes.alternateheroimage[0] === "yes") {
            console.log("hero image", index);
          } else {
            cardType[index] = "card2";
          }
        }
        if ("contentimgsidebyside" in card.metadata.attributes) {
          if (card.metadata.attributes.contentimgsidebyside[0] === "yes") {
            console.log("SIDE BY SIDE", index);
            cardType[index] = "card3";
          }
        }
        if ("cardbackgroungcolour" in card.metadata.attributes) {
          if (card.metadata.attributes.cardbackgroungcolour.length >= 1) {
            console.log(
              "bgcloor",
              card.metadata.attributes.cardbackgroungcolour[0]
            );
            cardBgColor[index] =
              card.metadata.attributes.cardbackgroungcolour[0];
            setCardBgColor([...cardBgColor]);
          } else {
            cardType[index] = "card2";
          }
        }
      } else {
        card["story-elements"].map((element) => {
          if (tempcont === 0 && typeNotSelected) {
            tempcont = 1;
            cardType[index] = "card1";
            typeNotSelected = false;
          } else if (
            element.type === "image" &&
            element.subtype === null &&
            typeNotSelected
          ) {
            cardType[index] = "card2";
          } else if (
            element.type === "text" &&
            element.subtype === "also-read" &&
            typeNotSelected
          ) {
            cardType[index] = "also-read";
          } else if (typeNotSelected) {
            cardType[index] = "card2";
          }
        });
      }
    });
    console.log("cardtype", cardType);
    setcardtype(cardType);
    setDisplayFlag(true);
  }, []);
  console.log(heroData);
  return (
    <>
      <div className="estd-full-format-2-mobile">
        <div className="a5-p1">
          <h1 className="a5-p1-h1 InterstateCompressed-Bold">
            {heroData.title}
          </h1>
          <div className="a5-p1-h1-bottom">
            <div className="a5-p1-h1-auth Biotif-Book">By {heroData.auth}</div>
            <div className="a5-p1-h1-date Biotif-Book">
              {moment(heroData["publishedAt"]).format("DD MMMM, YYYY")}
            </div>
          </div>
        </div>
        <div className="a5-1-img">
          <Image
            src={heroData.img}
            placeholder={"blur"}
            blurDataURL={heroData.img}
            width={1833}
            height={1145}
          />
          {/* <img src={heroData.img} alt="" /> */}
        </div>
      </div>
      <div className="estd-full-format-2-web">
        <div className="a5-1-img">
          <img src={heroData.img} alt="" />
        </div>
        <div className="a5-p1">
          <h1 className="a5-p1-h1 InterstateCompressed-Bold">
            {heroData.title}
          </h1>
          <div className="a5-p1-h1-bottom">
            <div className="a5-p1-h1-auth Biotif-Book">By {heroData.auth}</div>
            <div className="a5-p1-h1-date Biotif-Book">
              {moment(heroData["publishedAt"]).format("DD MMMM, YYYY")}
            </div>
          </div>
        </div>
      </div>
      <div className="a5-p1-h1-bottom">
        <SocialMediaShareButton
          title={heroData?.title}
          description={seoData?.description}
        />
      </div>
      {displayFlag &&
        cardtype.map((card, index) =>
          card === "card1" ? (
            <EstdFullFormat3Card1 cards={cards[index]} />
          ) : card === "card2" ? (
            <EstdFullFormat3Card2 cards={cards[index]} />
          ) : card === "card3" ? (
            <EstdFullFormat3Card3
              cardBgColor={cardBgColor[index]}
              cards={cards[index]}
            />
          ) : (
            ""
          )
        )}
      {displayFlag &&
        cardtype.map((card, index) =>
          card === "also-read" ? (
            <ReadMoreSection storyElement={cards[index]["story-elements"]} />
          ) : (
            ""
          )
        )}
    </>
  );
}

export default EstdFullFormat3;
