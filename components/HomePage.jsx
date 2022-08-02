import React from "react";
import StyleSection from "./views/StyleSection/StyleSection";
import TickerComp from "./Ticker/TickerComp";
import StorySection from "./views/StorySection";
import Header from "./common/Header/Header1";
import homeAd1 from "../public/images/R&M Home1.jpg";
import homeAd2 from "../public/images/Website Ads-41.jpg";
import homeAd3 from "../public/images/TA Home3.gif";
import homeAd4 from "../public/images/Website Ads-12.jpg";
import homeAdSq1 from "../public/images/R&M Sq Home1.jpg";
import homeAdSq2 from "../public/images/Website Ads_square-32.jpg";
import homeAdSq3 from "../public/images/TA Sq.gif";
import homeAdSq4 from "../public/images/Website Ads_square-27.jpg";
import HomeWrapper from "./style";
import Advertisement from "./views/Advertisement/Advertisement";
import SelfSection from "./views/SelfSection/SelfSection";
import CultureSection from "./views/CultureSection/CultureSection"
import CommunitySection from "./views/CommunitySection/CommunitySection";
import Spotlight from "./views/Spotlight/Spotlight";
import Footer from './common/Footer'
function HomePage({ stories, combinedData1, combinedData2 }) {
  return (
    <HomeWrapper>
      <Header />
      <StorySection stories={stories} />
      {combinedData1?.style?.length >= 1 ? (
        <>
          <TickerComp resp={combinedData1["breaking-news"]} />
          <StyleSection resp={combinedData1?.style} />
        </>
      ) : (
        <></>
      )}
      {combinedData2.self.length >= 1 ? (
        <div>
          <div className="web-view-ad-img">
            <Advertisement
              img={homeAd1}
              linkStatus="external"
              url={"https://www.randmluxury.com/"}
            />
          </div>
          <div className="phone-view-square-img mlp-15 mrp-15 mbp-5 mtp-5">
            <Advertisement
              img={homeAdSq1}
              linkStatus="external"
              url={"https://www.randmluxury.com/"}
            />
          </div>

          <SelfSection resp={combinedData2?.self}/>

          <div className="web-view-ad-img">
            <Advertisement
              img={homeAd2}
              linkStatus="internal"
              url="/news-letter"
            />
          </div>
          <div className="phone-view-square-img mlp-15 mrp-15 mbp-5 mtp-5">
            <Advertisement
              img={homeAdSq2}
              linkStatus="internal"
              url="/news-letter"
            />
          </div>
          <CultureSection resp={combinedData2?.culture} />
          <div className="web-view-ad-img">
            <Advertisement
              img={homeAd3}
              linkStatus="external"
              url={"https://timeavenue.com/"}
            />
          </div>
          <div className="phone-view-square-img mlp-15 mrp-15 mbp-5 mtp-5">
            <Advertisement
              img={homeAdSq3}
              linkStatus="external"
              url={"https://timeavenue.com/"}
            />
          </div>
          <CommunitySection resp={combinedData2?.community} />
          <div className="web-view-ad-img">
            <Advertisement
              img={homeAd4}
              linkStatus="external"
              url={"https://www.instagram.com/theestablished_"}
            />
          </div>
          <div className="phone-view-square-img mlp-15 mrp-15 mbp-5 mtp-5">
            <Advertisement
              img={homeAdSq4}
              linkStatus="external"
              url={"https://www.instagram.com/theestablished_"}
            />
          </div>
          <Spotlight resp={combinedData2?.spotlight} />
        </div>
      ) : (
        <div style={{ height: "80vh" }}></div>
      )}
    <Footer />
    </HomeWrapper>
  );
}

export default HomePage;
