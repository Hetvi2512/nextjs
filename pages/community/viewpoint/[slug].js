import Head from "next/head";
import { useRouter } from "next/router";
import Header2 from "../../../components/common/Header/Header2";
import EstdFullFormat1 from "../../../components/views/ArticleLayout/EstdFullFormat1";
import { imgBaseURL } from "../../../helper/constants";

function IndividualStories({ heroData, seoData , cards}) {
  const router = useRouter();
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
      </Head>
      <Header2/>
    <EstdFullFormat1 heroData={heroData} seoData={seoData}  cards={cards} />
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
  console.log("GENERATING/ REGENERATING PAGES ======================");

  const { params } = context;
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/stories-by-slug?slug=${params.slug}`
  );
  const individualStory = await response.json();
  const cards = individualStory['story']['cards']
  console.log("individualStory", cards)
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
  };
  if ("home" in individualStory["story"]["alternative"]) {
    if ("default" in individualStory["story"]["alternative"]["home"]) {
      console.log(
        "alernative",
        individualStory["story"]["alternative"]["home"]
      );
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
            console.log(
              "image changed",
              individualStory["story"]["alternative"]["home"]["default"][
                "hero-image"
              ]["hero-image-s3-key"]
            );
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
      cards
    },
    revalidate: 50,
  };
}
