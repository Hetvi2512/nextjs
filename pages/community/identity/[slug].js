import Head from "next/head";
import { useRouter } from "next/router";
import Header2 from "../../../components/common/Header/Header2";
import EstdFullFormat1 from "../../../components/views/ArticleLayout/EstdFullFormat1/EstdFullFormat1";
import EstdFullFormat3 from "../../../components/views/ArticleLayout/EstdFullFormat3/EstdFullFormat3";
import EstdFullFormat2 from '../../../components/views/ArticleLayout/EstdFullFormat2/EstdFullFormat2'
import EstdFullFormatDynamic from "../../../components/views/ArticleLayout/Articles-1/EstdFullFormatDynamic";
import EstdInterview from '../../../components/views/ArticleLayout/Articles-2/EstdInterview'
import EstdSlideShow from '../../../components/views/ArticleLayout/Article-5/EstdSlideShow'
import RandomLayout from '../../../components/views/ArticleLayout/RandomLayout'
import { imgBaseURL } from "../../../helper/constants";
import Footer from "../../../components/common/Footer";

function IndividualStories({ heroData, seoData, cards }) {
  const router = useRouter();
  console.log("heroData",heroData)
  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:image" content={heroData.img} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* <meta property="twitter:url" content={window.location.href} /> */}
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={heroData.img} />
        <meta property="twitter:image:type" content="image/jpeg" />
        <meta property="twitter:image:width" content="400" />
        <meta property="twitter:image:height" content="300" />
        <meta name="author" content={heroData.auth} data-react-helmet="true" />
        <meta name="keywords" content={seoData .keywords} />
      </Head>
      <Header2 />
      {
        heroData["storyTemplate"] === "estd-full-format-1" ? (
          <EstdFullFormat1 heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] === "estd-full-format-2" ? (
          <EstdFullFormat2 heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] === "estd-full-format-3" ? (
          <EstdFullFormat3 heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] ===
          "estd-full-format-dynamic" ? (
          <EstdFullFormatDynamic heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] === "estd-interview" ? (
          <EstdInterview heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] === "estd-slideshow" ? (
          <EstdSlideShow heroData={heroData} seoData={seoData} cards={cards}  />
        ) : heroData["storyTemplate"] === "text" ? (
          <RandomLayout heroData={heroData} seoData={seoData} cards={cards}  />
        ) : (
          <div style={{ height: "80vh" }}></div>
        )
      }
        <Footer />
    </>
  );
}

export default IndividualStories;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "chef-alex-sanchez-i-am-fascinated-that-food-can-be-infinitely-complex-within-its-simplicity",
        },
      },
    ],

    fallback: true,
  };
}
export async function getStaticProps(context) {

  const { params } = context;
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/stories-by-slug?slug=${params.slug}`
  );
  const individualStory = await response.json();
  const cards = individualStory["story"]["cards"];
  const heroData = {
    img:
      "https://gumlet.assettype.com/" +
      individualStory["story"]["hero-image-s3-key"],
    imgMeta: individualStory["story"]["hero-image-metadata"],
    imgTitle: individualStory["story"]["hero-image-caption"],
    cat: individualStory["story"]["sections"][0]["name"].toUpperCase(),
    title: individualStory["story"]["headline"],
    auth: individualStory["story"]["author-name"],
    imgCap: individualStory["story"]["hero-image-attribution"],
    publishedAt:individualStory["story"]["published-at"],
    storyTemplate: individualStory["story"]["story-template"]
  };
  if ("home" in individualStory["story"]["alternative"]) {
    if ("default" in individualStory["story"]["alternative"]["home"]) {
     
      if (
        "hero-image" in
        individualStory["story"]["alternative"]["home"]["default"]
      ) {
        if (
          individualStory["story"]["alternative"]["home"]["default"][
            "hero-image"
          ] != null
        ) {
          if (
            "hero-image-s3-key" in
            individualStory["story"]["alternative"]["home"]["default"][
              "hero-image"
            ]
          ) {
           
            heroData.img =
              imgBaseURL +
              individualStory["story"]["alternative"]["home"]["default"][
                "hero-image"
              ]["hero-image-s3-key"];
            heroData.imgMeta =
              individualStory["story"]["alternative"]["home"]["default"][
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
  const metaDataStory = {
    title: heroData.title,
    description: heroData.title,
    keywords: "The Established",
  };
  if ("seo" in individualStory["story"]) {
    console.log("in seo");
    if ("meta-title" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-title"].length > 1) {
        metaDataStory.title = individualStory["story"]["seo"]["meta-title"];
        console.log("in seo meta");
      } else {
        metaDataStory.title = heroData.title;
      }
    }
    if ("meta-description" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-description"].length > 1) {
        metaDataStory.description =
          individualStory["story"]["seo"]["meta-description"];
      } else {
        metaDataStory.title = heroData.title;
        console.log("else in seo meta");
      }
    }
    if ("meta-keywords" in individualStory["story"]["seo"]) {
      if (individualStory["story"]["seo"]["meta-keywords"].length > 1) {
        metaDataStory.keywords =
          individualStory["story"]["seo"]["meta-keywords"].toString();
      }
    }
  } else {
    metaDataStory.title = heroData.title;
    metaDataStory.description = heroData.title;
  }
  return {
    props: {
      heroData,
      seoData: metaDataStory,
      cards,
    },
    revalidate: 50,
  };
}
