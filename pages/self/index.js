import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from '../../components/common/Footer'
import Header from "../../components/common/Header/Header2";
import { Tabs } from "antd";
import Selflogo from "../../public/images/title_svg_self.svg";
import SectionWrapper from "./style";
import Image from "next/image";
import SectionStoryDisplay from "../../components/views/SectionStoryDisplay/SectionStoryDisplay";
import { useRouter } from "next/router";
import { categoryID } from "../../helper/constants";
import useSWR from "swr";
function Self({ data, MetaData }) {
  const { TabPane } = Tabs;
  const { query } = useRouter();
  const { key } = query;
  const [storyData, setStoryData] = useState(data);
  const [storyMetaData, setStoryMetaData] = useState(MetaData);
  const [defaultActiveKey, setDefaultActiveKey] = useState(key ? key : "0");
  const [isGetMoreStory, setIsGetMoreStory] = useState(0);

  const getMoreStories = () => {
    setIsGetMoreStory((previousStory) => previousStory + 1);
  };
  const fetcher = async () => {
    let url = "";
    if (defaultActiveKey === "1") {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.beautyID}&offset=0&limit=15`;
    } else if (defaultActiveKey === "2") {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.healthID}&offset=0&limit=15`;
    }else {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.selfID}&offset=0&limit=15`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data: res, error } = useSWR(
    defaultActiveKey > 0 ? defaultActiveKey : null,
    fetcher
  );
  useEffect(() => {
    if (defaultActiveKey > 0) {
      setStoryMetaData({
        from: 0,
        size: res?.results.size,
        total: res?.results.total,
      });
      setStoryData(res?.results?.stories);
    }
  }, [res]);
  const moreStoriesFetcher = async () => {
    let url = "";
    if (defaultActiveKey === "1") {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.beautyID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else if (defaultActiveKey === "2") {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.healthID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.selfID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data: moreStories, error: err } = useSWR(
    isGetMoreStory > 0 ? isGetMoreStory : null,
    moreStoriesFetcher
  );

  useEffect(() => {
    if (isGetMoreStory && moreStories) {
      console.log("moreStories",moreStories)
      setStoryMetaData({
        from: moreStories?.results.from,
        size: moreStories?.results.size,
        total: moreStories?.results.total,
      });
      setStoryData([...storyData, ...moreStories?.results?.stories]);
    }
  }, [moreStories]);
  return (
    <SectionWrapper>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          Latest on Beauty & Grooming Tips | Your Health & Wellness Guide
        </title>
        <meta
          name="description"
          content="Stay in to know the latest beauty, grooming, health and wellness news. Subscribe to The Established newsletter delivered to your inbox every day."
        />
      </Head>
      <Header />
      <div className="main-cat-div">
        <div className="">
          <Tabs
            className="Biotif-Bold"
            activeKey={defaultActiveKey}
            onChange={(key) => setDefaultActiveKey(key)}
          >
            <div style={{ display: "none" }}>
              <TabPane className="d-none" tab="FASHION" key="0"></TabPane>
            </div>
            <TabPane tab="BEAUTY & GROOMING" key="1"></TabPane>
            <TabPane tab="HEALTH & WELLNESS" key="2"></TabPane>
          </Tabs>
        </div>
        <div className="style-heading InterstateCompressed-Bold mtp-5">
          <div className="cursor-pointer style-heading-img">
            <Image
              src={Selflogo}
              alt="self logo"
              className="cursor-pointer"
              priority={true}
              layout="fill"
              onClick={() => setDefaultActiveKey("0")}
            />
          </div>
        </div>
        <SectionStoryDisplay stories={storyData} cat="self" />
        {storyMetaData.from + storyMetaData.size < storyMetaData.total ? (
          <div className="d-flex justify-content Biotif-Regular mtp-5 mbp-8 section-read-more">
            <button
              className="read-more-btn"
              onClick={() => {
                getMoreStories();
              }}
            >
              SHOW MORE ???
            </button>
          </div>
        ) : (
          <div className="mbp-10"></div>
        )}
      </div>
      <Footer />
    </SectionWrapper>
  );
}

export default Self;

export async function getStaticProps(context) {
  console.log("GENERATING/ REGENERATING PAGES For SELF======================");
  const { params } = context;
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/search?section-id=38237&offset=0&limit=17&sort=latest-published`
  );
  const data = await response.json();
  const storyData = data?.results?.stories;
  const storyMetaData ={
    from: 0,
    size: data?.results?.size,
    total:data?.results?.total
  } 
  console.log("storyMetaData", data?.results)

  return {
    props: {
      data: storyData,
      MetaData: storyMetaData,
    },
    revalidate: 50,
  };
}
