import React, { useEffect, useState } from "react";
import StoryTemp from "../../components/views/previewHome/StoryTemp";

function Story(props) {
  useEffect(() => {
    StoryPreview();
  }, []);
  const [data, setData] = useState();

  var StoryPreview = function () {
    window.addEventListener("message", function (event) {
      var story = event.data["story"];
      if (story) {
        console.log("story-preview", story);
        setData(story);
        // Do other things to make the page work correctly, such as post load JS
      }
    });
  };
  return <div>
    <StoryTemp data={data}/>
  </div>;
}

export default Story;
