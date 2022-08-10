import React, { useEffect, useState } from "react";
import EstdFullFormat1Card1 from "./EstdFullFormat1Card1";
import EstdFullFormat1card2 from "./EstdFullFormat1card2";
import SocialMediaShareButton from "../../SocialMediaShareButton";
import Image from "next/image";
import ReadMoreSection from "../ReadMoreSection";

function EstdFullFormat1({ heroData, seoData, cards }) {
  const cardType = [];
  const [cardtype, setcardtype] = useState([]);
  const [displayFlag, setDisplayFlag] = useState(false);
  var tempCardOneFlag;

  var imgWidth = "30%";
  useEffect(() => {
    console.log("inside useeffect", cards);
    window.scroll(0, 0);
    tempCardOneFlag = true;
    let tempcont = 0;
    cards?.map((card, index) => {
      let typeNotSelected = true;
      if (Object.keys(card.metadata.attributes).length >= 1) {
        if ("alternateheroimage" in card.metadata.attributes) {
          if (card.metadata.attributes.alternateheroimage[0] === "yes") {
            console.log("hero image");
          }
        }
        if ("contentimgsidebyside" in card.metadata.attributes) {
          if (card.metadata.attributes.contentimgsidebyside[0] === "yes") {
            console.log("side by side");
            cardType[index] = "card2";
          } else {
            card["story-elements"].map((element) => {
              if (tempcont === 0) {
                tempcont = 1;
                cardType[index] = "card1";
                typeNotSelected = false;
              } else if (
                element.type === "image" &&
                element.subtype === null &&
                typeNotSelected
              ) {
                cardType[index] = "card2";
                typeNotSelected = false;
              } else if (
                element.type === "composite" &&
                element.subtype === "image-gallery" &&
                typeNotSelected
              ) {
                cardType[index] = "card2";
                typeNotSelected = false;
              } else if (
                element.type === "text" &&
                element.subtype === "also-read"
              ) {
                cardType[index] = "also-read";
                typeNotSelected = false;
              } else {
                console.log("inside else");
                cardType[index] = "card2";
              }
            });
          }
        }
        if ("cardbackgroungcolour" in card.metadata.attributes) {
          if (card.metadata.attributes.cardbackgroungcolour.length >= 1) {
            console.log(
              "bgcloor",
              card.metadata.attributes.cardbackgroungcolour[0]
            );
            // cardBgColor[index]= card.metadata.attributes.cardbackgroungcolour[0]
            // setCardBgColor([...cardBgColor])
          }
        }
      } else {
        console.log("story ele", card["story-elements"], card);
        card["story-elements"].map((element) => {
          console.log("flag value", typeNotSelected);
          if (tempcont === 0) {
            tempcont = 1;
            cardType[index] = "card1";
            typeNotSelected = false;
          } else if (
            element.type === "image" &&
            element.subtype === null &&
            typeNotSelected
          ) {
            cardType[index] = "card2";
            typeNotSelected = false;
          } else if (
            element.type === "composite" &&
            element.subtype === "image-gallery" &&
            typeNotSelected
          ) {
            cardType[index] = "card2";
            typeNotSelected = false;
          } else if (
            element.type === "text" &&
            element.subtype === "also-read"
          ) {
            cardType[index] = "also-read";
            typeNotSelected = false;
          } else if (typeNotSelected) {
            console.log("inside else");
            cardType[index] = "card2";
          }
        });
      }
    });
    console.log("cardtype", cardType);
    setcardtype(cardType);
    setDisplayFlag(true);
  }, []);
  return (
    <>
      <div className="a4-header">
        <div className="a4-header-img" style={{ width: imgWidth }}>
          <Image
            src={heroData.img}
            placeholder={"blur"}
            blurDataURL={heroData.img}
            width={917}
            height={917}
          />
          {/* <div
            className="a4-header-img-div"
            style={{ position: "relative", width: "100%", height: "49vw" }}
          >
            <Image priority={true} src={heroData.img} layout="fill" objectFit="cover" />
          </div> */}
        </div>
        <div className="a4-header-con">
          <div className="Biotif-Book a4-header-cat ">{heroData.cat}</div>
          <h1 className="HeldaneDisplay-Regular a4-header-title">
            {heroData.title}
          </h1>
          <div className="Biotif-Book a4-header-auth">By {heroData.auth}</div>

          <SocialMediaShareButton
            title={heroData?.title}
            description={seoData?.description}
          />
        </div>
      </div>
      <div
        className="a4-header-img-title"
        dangerouslySetInnerHTML={{ __html: heroData.imgTitle }}
      ></div>
      {displayFlag &&
        cardtype.map((card, index) =>
          card === "card1" ? (
            <EstdFullFormat1Card1 cards={cards[index]} />
          ) : card === "card2" ? (
            <EstdFullFormat1card2 cards={cards[index]} />
          ) : (
            ""
          )
        )}
      {displayFlag &&
        cardtype.map((card, index) =>
          card === "also-read" ? (
            <>
            {cards && cards[index] && (
              <ReadMoreSection
                storyElement={cards[index]["story-elements"]}
              />
            )}
          </>
          ) : (
            ""
          )
        )}
    </>
  );
}

export default EstdFullFormat1;
