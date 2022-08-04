import React from 'react';
import { useRouter } from 'next/router'
function AdPillar(img,url,linkStatus) {
  const router = useRouter()
    return (
        <div className="culture-pillar-main cursor-pointer" onClick={()=>{
            if(linkStatus==='internal'){
              router.push(url, undefined, { shallow: true })
            }
            else if(linkStatus==='external'){
                window.open(url, "_blank")
            }
            }}>
              <div className="culture-pillar-img">
                <img src={img} alt="" />
              </div>
            </div>
    );
}

export default AdPillar;