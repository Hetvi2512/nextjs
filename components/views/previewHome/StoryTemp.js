import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header2";
import Footer from "../../common/Footer";
import EstdFullFormat1 from "../ArticleLayout/EstdFullFormat1/EstdFullFormat1";
import EstdFullFormat2 from "../ArticleLayout/EstdFullFormat2/EstdFullFormat2";
import EstdFullFormat3 from "../ArticleLayout/EstdFullFormat3/EstdFullFormat3";
import EstdFullFormatDynamic from "../ArticleLayout/Articles-1/EstdFullFormatDynamic";
import EstdInterview from "../ArticleLayout/Articles-2/EstdInterview";
import EstdSlideShow from "../ArticleLayout/Article-5/EstdSlideShow";
import RandomLayout from "../ArticleLayout/RandomLayout";
function StoryTemp({ data }) {
  const [propsData, setPropsData] = useState({
    story: data,
  });
  const [displayData, setDisplayData] = useState(false);
  useEffect(() => {
    if (data) {
      if (Object.keys(data).length >= 1) {
        setPropsData({
          story: data,
        });
        setDisplayData(true);
      }
    }
  }, [data]);
  let cards = "";
  let heroData = {};
  let seoData = {};
  if (propsData?.story != undefined) {
    const cards = propsData["story"]["cards"];
    const heroData = {
      img:
        "https://gumlet.assettype.com/" +
        propsData["story"]["hero-image-s3-key"],
      imgMeta: propsData["story"]["hero-image-metadata"],
      imgTitle: propsData["story"]["hero-image-caption"],
      cat: propsData["story"]["sections"][0]["name"].toUpperCase(),
      title: propsData["story"]["headline"],
      auth: propsData["story"]["author-name"],
      imgCap: propsData["story"]["hero-image-attribution"],
      publishedAt: propsData["story"]["published-at"],
      storyTemplate: propsData["story"]["story-template"],
    };
    if ("home" in propsData["story"]["alternative"]) {
      if ("default" in propsData["story"]["alternative"]["home"]) {
        console.log("alernative", propsData["story"]["alternative"]["home"]);
        if (
          "hero-image" in propsData["story"]["alternative"]["home"]["default"]
        ) {
          if (
            propsData["story"]["alternative"]["home"]["default"][
              "hero-image"
            ] != null
          ) {
            if (
              "hero-image-s3-key" in
              propsData["story"]["alternative"]["home"]["default"]["hero-image"]
            ) {
              console.log(
                "image changed",
                propsData["story"]["alternative"]["home"]["default"][
                  "hero-image"
                ]["hero-image-s3-key"]
              );
              heroData.img =
                imgBaseURL +
                propsData["story"]["alternative"]["home"]["default"][
                  "hero-image"
                ]["hero-image-s3-key"];
              heroData.imgMeta =
                propsData["story"]["alternative"]["home"]["default"][
                  "hero-image"
                ]["hero-image-metadata"];
            }
          }
        }
      }
    }
    var isImgLandscape = false;
    var imgWidth = "50%";
    if (heroData.imgMeta.width > heroData.imgMeta.height) {
      isImgLandscape = true;
      imgWidth = "60%";
    }
    seoData = {
      title: heroData.title,
      description: heroData.title,
      keywords: "The Established",
    };
    if ("seo" in propsData["story"]) {
      if ("meta-title" in propsData["story"]["seo"]) {
        if (propsData["story"]["seo"]["meta-title"].length > 1) {
          seoData.title = propsData["story"]["seo"]["meta-title"];
        } else {
          seoData.title = heroData.title;
        }
      }
      if ("meta-description" in propsData["story"]["seo"]) {
        if (propsData["story"]["seo"]["meta-description"].length > 1) {
          seoData.description = propsData["story"]["seo"]["meta-description"];
        } else {
          seoData.title = heroData.title;
        }
      }
      if ("meta-keywords" in propsData["story"]["seo"]) {
        if (propsData["story"]["seo"]["meta-keywords"].length > 1) {
          seoData.keywords =
            propsData["story"]["seo"]["meta-keywords"].toString();
        }
      }
    } else {
      metaDataStory.title = heroData.title;
      metaDataStory.description = heroData.title;
    }
  }

  return (
    <div>
      <Header />
      {displayData === true ? (
        propsData["story"]["story-template"] === "estd-full-format-1" ? (
          <EstdFullFormat1
            heroData={heroData}
            seoData={seoData}
            cards={cards}
          />
        ) : propsData["story"]["story-template"] === "estd-full-format-2" ? (
          <EstdFullFormat2
            heroData={heroData}
            seoData={seoData}
            cards={cards}
          />
        ) : propsData["story"]["story-template"] === "estd-full-format-3" ? (
          <EstdFullFormat3
            heroData={heroData}
            seoData={seoData}
            cards={cards}
          />
        ) : propsData["story"]["story-template"] ===
          "estd-full-format-dynamic" ? (
          <EstdFullFormatDynamic
            heroData={heroData}
            seoData={seoData}
            cards={cards}
          />
        ) : propsData["story"]["story-template"] === "estd-interview" ? (
          <EstdInterview heroData={heroData} seoData={seoData} cards={cards} />
        ) : propsData["story"]["story-template"] === "estd-slideshow" ? (
          <EstdSlideShow heroData={heroData} seoData={seoData} cards={cards} />
        ) : propsData["story"]["story-template"] === "text" ? (
          <RandomLayout heroData={heroData} seoData={seoData} cards={cards} />
        ) : (
          <div style={{ height: "80vh" }} className="ptp-10">
            select proper temp
          </div>
        )
      ) : (
        <div className="ptp-10" style={{ height: "80vh" }}>
          {` Props didn't received any value`}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default StoryTemp;
