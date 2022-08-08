import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import styles from "./ModernDrawer.module.css";
import SearchIcon from "../../../public/images/Search-test.png";
function ModernDrawer({ searchVisible, onCloseSearch }) {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  const trendFetcher = async () => {
    const response = await fetch(`/api/v1/collection/breaking-news`);
    const data = await response.json();
    return data;
  };
  const { data: trendResponse } = useSWR("TrendData", trendFetcher);
  const handleIndividualStory = (a) => {
    router.push(`/${a["slug"]}`, undefined, { shallow: true });
  };
  const handleTrendingStory = (a) => {
    router.push(`/${a["story"]["slug"]}`, undefined, { shallow: true });
  };
  const fetcher = async () => {
    const response = await fetch(`/api/v1/search/${inputValue}`);
    const data = await response.json();
    return data;
  };
  const { data: searchResponse, error } = useSWR(
    inputValue.length > 0 ? inputValue : null,
    fetcher
  );
  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Ensure it is only this code that runs
      router.push(
        {
          pathname: "/search",
          query: {
            searchResponse: JSON.stringify(searchResponse?.results?.stories),
            trendResponse: JSON.stringify(trendResponse?.items),
            inputValue,
          },
        },
        "/search",
        { shallow: true }
      );
      // props.history.push("/search", {
      //   searchResponse: searchResponse,
      //   trendResponse: trendResponse,
      //   inputValue: inputValue,
      // });
    }
  }
  return (
    <>
      <Drawer
        className="modern-drawer"
        style={{ background: "black" }}
        direction="top"
        open={searchVisible}
        onClose={onCloseSearch}
      >
        <div className="input-field-view plp-5 d-flex">
          <div className={styles.insideSearchTag}>
            <Image priority={true} src={SearchIcon} alt="search" width={20} height={20} />
          </div>
          <div className="form__group-1 d-flex">
            <input
              style={{ borderBottom: "1px solid white" }}
              autoComplete="off"
              onKeyPress={(e) => handleEnter(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="input"
              className="form__field-1 plp-1 Biotif-Regular"
              placeholder="Search"
              name="search"
              id="search"
            />
          </div>
        </div>
        <div className="plp-2 ptp-2 fs-30">
          {inputValue !== ""
            ? searchResponse?.results?.stories
                .slice(0, 5)
                .map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleIndividualStory(item);
                    }}
                    className="text-white search-result-div plp-5 prp-5 cursor-pointer Biotif-SemiBold pbp-1"
                  >
                    {item.headline}
                  </div>
                ))
            : trendResponse?.items?.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleTrendingStory(item);
                  }}
                  className="text-white search-result-div plp-5 cursor-pointer Biotif-SemiBold pbp-1"
                >
                  {item.story.headline}
                </div>
              ))}
        </div>
      </Drawer>
    </>
  );
}

export default ModernDrawer;
