import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router'
function Advertisement({ img, url, linkStatus }) {
  const router = useRouter()
  return (
    <div className="advertise-main mtp-2 mbp-2">
      <div
        className="advertise-poster cursor-pointer"
        onClick={() => {
          if (linkStatus === "internal") {
            router.push(url, undefined, { shallow: true })
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
