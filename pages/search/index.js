import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Space, Card } from "antd";

import { useRouter } from "next/router";
import SearchWrapper from "./style";
import SectionWrapper from "./style2";
import Header2 from "../../components/common/Header/Header2";
import Footer from "../../components/common/Footer";
import { imgBaseURL, subCatPageUrl } from "../../helper/constants";
import Search1 from "../../public/images/Search-test.png";
import useSWR from "swr";
import Image from "next/image";
function SearchPage(props) {
  const router = useRouter();
  const [stories, setStories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [trendResponse, setTrendResponse] = useState();
  const [isEnterPressed, setIsEnteredPressed] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
    try {
      if (
        router?.query?.searchResponse != undefined &&
        router?.query?.trendResponse != undefined
      ) {
        console.log(
          "props",
          JSON.parse(router?.query?.searchResponse),
          JSON.parse(router?.query?.trendResponse)
        )
        setStories(JSON.parse(router?.query?.searchResponse));
        setInputValue(router?.query?.inputValue);
        setTrendResponse(JSON.parse(router?.query?.trendResponse));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleTrendingStory = (a) => {
    console.log("onclick");
    router.push(`/${a["story"]["slug"]}`, undefined, { shallow: true });
  };
  const fetcher = async () => {
    const response = await fetch(`/api/v1/search/${inputValue}`);
    const data = await response.json();
    return data;
  };
  const { data: searchResponse, error } = useSWR(
    isEnterPressed ? inputValue : null,
    fetcher
  );
  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEnteredPressed(true);
      console.log("searchResponse", searchResponse);
    }
  }
  useEffect(() => {
    if (searchResponse) {
      setStories(searchResponse?.results?.stories);
      setIsEnteredPressed(false);
    }
  }, [searchResponse]);
  const alternateHeroImg = (story) => {
    let heroImage = imgBaseURL + story["hero-image-s3-key"];
    return heroImage;
  };
  return (
    <SectionWrapper>
      <SearchWrapper>
        <div>
          <Header2 />
          <div
            className="search-search-main-div"
            style={{ backgroundColor: "black" }}
          >
            <div className="input-field-view plp-5 prp-5 d-flex">
              <div className="inside-search-tag">
                <div className="inside-search-tag-img">
                  <Image src={Search1} alt="search-1" layout="fill" />
                </div>
              </div>
              <div className="form__group-1 d-flex">
                <input
                  style={{ borderBottom: "1px solid white" }}
                  autocomplete="off"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="input"
                  class="form__field-1 plp-1 Biotif-Regular"
                  placeholder="Search"
                  name="search"
                  id="search"
                  onKeyPress={(e) => handleEnter(e)}
                />
                <div
                  className="arrow-input Biotif-Regular d-flex align-items-center search-clear-div cursor-pointer"
                  onClick={() => setInputValue("")}
                >
                  CLEAR
                </div>
              </div>
            </div>
            <div className="Biotif-SemiBold plp-5 prp-5 pbp-2 search-trending-div grey-text">
              Trending:
              {trendResponse?.slice(0, 3).map((item) => (
                <span
                  onClick={() => {
                    handleTrendingStory(item);
                  }}
                  className="cursor-pointer grey-text search-trending-hover search-trending-div Biotif-SemiBold pbp-1"
                >
                  {" "}
                  {item.story.headline},
                </span>
              ))}
              {
                <span
                  onClick={() => {
                    handleTrendingStory(trendResponse[3]);
                  }}
                  className="cursor-pointer grey-text search-trending-hover search-trending-div Biotif-SemiBold pbp-1"
                >
                  {" "}
                  {trendResponse && trendResponse[3].story.headline}.
                </span>
              }
            </div>
          </div>
          <div className="main-search">
            <Space className="space-margin">
              <div className="dot"></div>
              <div className="Biotif-SemiBold article-title">Articles</div>
            </Space>
          </div>
          <div className="article-border"></div>
          <div className="mtp-5 mbp-10">
            <div className="grid-new-1 mlp-15 mrp-15 pbp-3">
              {stories?.length >= 1 ? (
                stories?.map((story) => (
                  <div className="cursor-pointer">
                    <Link href={`/${story["slug"]}`}>
                      <div className="section-story-display-img">
                        <img width="100%" src={alternateHeroImg(story)}></img>
                      </div>
                    </Link>
                    <Link
                      href={subCatPageUrl[story["sections"][0]["slug"]].url}
                    >
                      <div className="sub-category Biotif-Book mtp-2">
                        {story["sections"][0]["name"].toUpperCase()}
                      </div>
                    </Link>
                    <Link href={`/${story["slug"]}`}>
                      <div className="question-category Biotif-SemiBold">
                        {story.headline}
                      </div>
                    </Link>
                    <Link href={`/${story["slug"]}`}>
                      <div className="author Biotif-Book mbp-10">
                        By {story["author-name"]}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="pbp-10 Biotif-Book">
                  Sorry! No result found.
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </SearchWrapper>
    </SectionWrapper>
  );
}

export default SearchPage;
