import Head from "next/head";
import React, { useState } from "react";
import Header2 from "../../components/common/Header/Header2";
import SectionWrapper from "./style";
import Footer from "../../components/common/Footer";
import { Tabs } from "antd";
import style from "../../public/images/title_svg_style.svg";
import SectionStoryDisplay from "../../components/views/SectionStoryDisplay/SectionStoryDisplay";
import Image from "next/image";
function Style({ storyData, storyMetaData }) {
  const { TabPane } = Tabs;
  const [defaultActiveKey, setDefaultActiveKey] = useState("0");
  return (
    <SectionWrapper>
      <Head>
        <title>
          Latest Fashion Trends 2022 | Fashion Sneakers | Luxury Watches
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Get to know about Latest fashion trends only with The Established. Subscribe to The Established newsletter so never miss any updates."
        />
      </Head>
      <Header2 />
      <div className="">
        <div className="main-cat-div">
          <div>
            <Tabs
              className="Biotif-Bold"
              activeKey={defaultActiveKey}
              onChange={(key) => setDefaultActiveKey(key)}
            >
              <div style={{ display: "none" }}>
                <TabPane className="d-none" tab="FASHION" key="0"></TabPane>
              </div>
              <TabPane tab="FASHION" key="1"></TabPane>
              <TabPane tab="SNEAKERS" key="2"></TabPane>
              <TabPane tab="WATCHES" key="3"></TabPane>
            </Tabs>
          </div>

          <div className="style-heading InterstateCompressed-Bold mtp-5">
            <div className="cursor-pointer style-heading-img">
              <Image
                src={style}
                alt="style logo"
                className="cursor-pointer"
                layout="fill"
                onClick={() => setDefaultActiveKey("0")}
              />
            </div>
          </div>

          <SectionStoryDisplay stories={storyData} cat="style" />
          {storyMetaData.from + storyMetaData.size < storyMetaData.total ? (
            <div className="d-flex justify-content Biotif-Regular mtp-5 mbp-8 section-read-more">
              <button
                className="read-more-btn"
                onClick={() => {
                  getMoreStories();
                }}
              >
                SHOW MORE →
              </button>
            </div>
          ) : (
            <div className="mbp-10"></div>
          )}
        </div>
      </div>
      {/* <Subscribe /> */}
      <Footer />
    </SectionWrapper>
  );
}

export default Style;

export async function getStaticProps(context) {
  console.log("GENERATING/ REGENERATING PAGES For SELF======================");
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/search?section-id=38240&offset=0&limit=17&sort=latest-published`
  );
  const data = await response.json();
  const storyData = data?.results?.stories;
  const storyMetaData = {
    from: 0,
    size: data?.results?.size,
    total: data?.results?.total,
  };
  console.log("storyMetaData", storyMetaData);
  return {
    props: {
      storyData,
      storyMetaData,
    },
    revalidate: 50,
  };
}
