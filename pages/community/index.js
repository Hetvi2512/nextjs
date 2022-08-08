import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Head from "next/head";
import Image from "next/image";
import SectionWrapper from "./style";
import Header2 from "../../components/common/Header/Header2";
import Footer from "../../components/common/Footer";
import community from "../../public/images/title_svg_community.svg";
import SectionStoryDisplay from "../../components/views/SectionStoryDisplay/SectionStoryDisplay";
import { useRouter } from "next/router";
import useSWR from "swr";
import { categoryID } from "../../helper/constants";
import axios from "axios";
function Community({ data, MetaData }) {
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
      url = `/api/v1/readMoreSection?sectionId=${categoryID.businessID}&offset=0&limit=15`;
    } else if (defaultActiveKey === "2") {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.consciousLivingID}&offset=0&limit=15`;
    } else if (defaultActiveKey === "3") {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.identityID}&offset=0&limit=15`;
    } else if (defaultActiveKey === "4") {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.viewpointID}&offset=0&limit=15`;
    } else {
      url = `/api/v1/readMoreSection?sectionId=${categoryID.communityID}&offset=0&limit=15`;
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
        categoryID.businessID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else if (defaultActiveKey === "2") {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.consciousLivingID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else if (defaultActiveKey === "3") {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.identityID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else if (defaultActiveKey === "4") {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.viewpointID
      }&offset=${storyMetaData.from + storyMetaData.size}&limit=15`;
    } else {
      url = `/api/v1/readMoreSection?sectionId=${
        categoryID.communityID
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
        <title>Latest on Auto, Entertainment, Gaming & Tech & Living</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Join us for the latest in Tech, Culture, Gaming, Entertainment, Art & Design. News to keep you in the know."
        />
      </Head>
      <Header2 />
      <div className="main-cat-div">
        <Tabs
          className="Biotif-Bold"
          activeKey={defaultActiveKey}
          onChange={(key) => setDefaultActiveKey(key)}
        >
          <div style={{ display: "none" }}>
            <TabPane className="d-none" tab="FASHION" key="0"></TabPane>
          </div>
          <TabPane tab="BUSINESS" key="1"></TabPane>
          <TabPane tab="CONSCIOUS LIVING" key="2"></TabPane>
          <TabPane tab="IDENTITY" key="3"></TabPane>
          <TabPane tab="VIEWPOINT" key="4"></TabPane>
        </Tabs>
      </div>

      <div className="culture-heading InterstateCompressed-Bold mtp-5">
        <div className="cursor-pointer style-heading-img">
          <Image
            src={community}
            alt="style logo"
            className="cursor-pointer"
            layout="fill"
            onClick={() => setDefaultActiveKey("0")}
          />
        </div>
      </div>
      <SectionStoryDisplay stories={storyData} cat="culture" />
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
      {/* <Subscribe/> */}
      <Footer />
    </SectionWrapper>
  );
}

export default Community;

export async function getStaticProps(context) {
  console.log("GENERATING/ REGENERATING PAGES For SELF======================");
  const response = await fetch(
    `http://theestablished.quintype.io/api/v1/search?section-id=38226&offset=0&limit=17&sort=latest-published`
  );
  const data = await response.json();
  const storyData = data?.results?.stories;
  const storyMetaData = {
    from: 0,
    size: data?.results?.size,
    total: data?.results?.total,
  };
  return {
    props: {
      data: storyData,
      MetaData: storyMetaData,
    },
    revalidate: 50,
  };
}
