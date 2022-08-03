import React from 'react';
import Slider from "react-slick";

function CarouselSlideShow({imgArr}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };
    return (
        <div >
         <Slider {...settings}>
             {
                 imgArr?.map((img,index)=>(
                     <div key={index}>
                         <div className='white-text Biotif-SemiBold ss-number'>
                            {index+1}/{imgArr.length}
                         </div>
                         <div width={'100%'}>
                         <img src={img.image} width={'100%'} alt="" />
                         </div>
                        <div className='mobile-view-text-sideshow white-text' dangerouslySetInnerHTML={{ __html: img['title'] }}></div>
                     </div>
                 ))
             }
         </Slider>

    </div>
    );
}

export default CarouselSlideShow;