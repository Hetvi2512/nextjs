import Image from "next/image";
import React from "react";

function Advertisement({ img, url, linkStatus }) {
  return (
    <div className="advertise-main mtp-2 mbp-2">
      <div
        className="advertise-poster cursor-pointer"
        onClick={() => {
          if (linkStatus === "internal") {
            props.history.push(url);
          } else if (linkStatus === "external") {
            window.open(url, "_blank");
          }
        }}
      >
        <Image src={img} alt="" />
      </div>
    </div>
  );
}

export default Advertisement;
