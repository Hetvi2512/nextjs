import React, { useEffect, useState } from "react";
import axios from "axios";
import { imgBaseURL, subCatPageUrl } from "../../../helper/constants";
import Link from "next/link";
import Image from "next/image";

function ReadMoreSection({ storyElement }) {
  const [stories, setStories] = useState([]);
  const alternateHeroImg = (story) => {
    let heroImage = imgBaseURL + story["hero-image-s3-key"];
    console.log("story images", story.alternative);
    if (story["alternative"]) {
      if ("home" in story["alternative"]) {
        if ("default" in story["alternative"]["home"]) {
          console.log("alernative", story["alternative"]["home"]);
          if ("hero-image" in story["alternative"]["home"]["default"]) {
            if (story["alternative"]["home"]["default"]["hero-image"]) {
              if (
                "hero-image-s3-key" in
                story["alternative"]["home"]["default"]["hero-image"]
              ) {
                console.log(
                  story["alternative"]["home"]["default"]["hero-image"][
                    "hero-image-s3-key"
                  ]
                );
                heroImage =
                  imgBaseURL +
                  story["alternative"]["home"]["default"]["hero-image"][
                    "hero-image-s3-key"
                  ];
              }
            }
          }
        }
      }
    }
    return heroImage;
  };
  useEffect(() => {
    const tempArr = [];
    storyElement?.map((story) => {
      axios
        .get(`/api/v1/stories/${story["metadata"]["linked-story-id"]}`)
        .then((response) => {
          tempArr.push(response.data);
          setStories([...tempArr]);
        });
    });
  }, []);
  console.log("STORIES", stories);
  return (
    <div className="mbp-10">
      <div className="a4-border"></div>
      <div className="a4-read-more mbp-5">
        <div className="a4-read-more-heading InterstateCompressed-Bold">
          READ MORE
        </div>
        <div className="a4-read-more-main">
          {stories?.map((a, index) => (
            <div key={index} className="a4-read-more-1 cursor-pointer">
              <Link href={`/${a["story"]["slug"]}`}>
                <div className="a4-read-more-1-img">
                  <Image src={alternateHeroImg(a.story)} blurDataURL={alternateHeroImg(a.story)} placeholder="blur" alt="empty" width={459} height={474} />
                  {/* <img src={alternateHeroImg(a.story)} alt="empty" /> */}
                </div>
              </Link>
              <Link href={subCatPageUrl[a["story"]["sections"][0]["slug"]].url}>
                <div className="a4-read-more-1-cat Biotif-Book">
                  {a["story"]["sections"][0]["name"].toUpperCase()}
                </div>
              </Link>
              <Link href={`/${a["story"]["slug"]}`}>
                <div className="a4-read-more-1-title Biotif-SemiBold">
                  {a["story"]["headline"]}
                </div>
              </Link>
              <Link href={`/${a["story"]["slug"]}`}>
                <div className="a4-read-more-1-auth Biotif-Book">
                  By {a["story"]["author-name"]}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReadMoreSection;
