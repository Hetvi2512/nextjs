import React from "react";
import HamCommunity from "./HamCommunity";
import HamCulture from "./HamCulture";
import HamSelf from "./HamSelf";
import HamStyle from "./HamStyle";
import { useRouter } from 'next/router'

function HamShow({displayCategory, category, displayHideCategory,onClose }) {
  const router = useRouter()

  return (
    <div>
      <div className="ham-main">
        <div className="ham-1">
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "6ch" }}
            onClick={() => {
              router.push('/style', undefined, { shallow: true })
              onClose();
            }}
            onMouseEnter={() => {
              displayCategory("style");
            }}
            onMouseLeave={displayHideCategory}
          >
            STYLE
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "5ch" }}
            onClick={() => router.push('/self', undefined, { shallow: true })}
            onMouseOver={() => {
              displayCategory("self");
            }}
            onMouseLeave={displayHideCategory}
          >
            SELF
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "8ch" }}
            onClick={() => router.push('/culture', undefined, { shallow: true })}
            onMouseOver={() => {
              displayCategory("culture");
            }}
            onMouseLeave={displayHideCategory}
          >
            CULTURE
          </div>
          <div
            className="text-shadow InterstateCompressed-Bold"
            style={{ width: "11ch" }}
            onClick={() =>router.push('/community', undefined, { shallow: true })}
            onMouseOver={() => {
              displayCategory("community");
            }}
            onMouseLeave={displayHideCategory}
          >
            COMMUNITY
          </div>
        </div>
        {
          category === 'style' ? <HamStyle /> : category === 'self' ? <HamSelf /> : category === 'culture' ? <HamCulture /> : category === 'community' ? <HamCommunity /> : ''
        }
      </div>
    </div>
  );
}

export default HamShow;
