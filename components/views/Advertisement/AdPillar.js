import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AdImg from "../../../public/images/Website Ads-18.jpg";
function AdPillar(img, url, linkStatus) {
  const router = useRouter();
  return (
    <div
      className="culture-pillar-main cursor-pointer"
      onClick={() => {
        if (linkStatus === "internal") {
          router.push(url, undefined, { shallow: true });
        } else if (linkStatus === "external") {
          window.open(url, "_blank");
        }
      }}
    >
      <div className="culture-pillar-img">
        <div className="culture-pillar-img-img">
          <Image src={AdImg} layout="fill"/>
        </div>
      </div>
    </div>
  );
}

export default AdPillar;
