import React from 'react';

function AdPillar(img,url,linkStatus) {
    return (
        <div className="culture-pillar-main cursor-pointer" onClick={()=>{
            if(linkStatus==='internal'){
                props.history.push(url)
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