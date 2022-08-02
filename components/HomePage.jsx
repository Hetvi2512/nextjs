import React from "react";
import StyleSection from "./StyleSection/StyleSection";
import TickerComp from "./Ticker/TickerComp";
import StorySection from "./views/StorySection";
import Header from "./common/Header/Header1";
import HomeWrapper from "./style";

function HomePage({ stories, combinedData1, combinedData2 }) {
  return (
    <HomeWrapper>
      <Header />
      <StorySection stories={stories} />
      <TickerComp resp={combinedData1["breaking-news"]} />
      <StyleSection resp={combinedData1?.style} />
      <div style={{ height: "500px" }}>
        <h3>HEIGHT</h3>
      </div>
    </HomeWrapper>
  );
}

export default HomePage;
