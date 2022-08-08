import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import CarouselSlideShow from './CarouselSlideShow';
function SlideShowComp({images}) {
    const [displaySingleImage, setDisplaySingleImage] = useState(false);
    const [nextImage, setNextImage] = useState(0);
    const handleNext = () => {
        var element = document.getElementById("anime-id");
        element.classList.add("slide");
        element.classList.remove("active");
        setTimeout(() => {
            if (nextImage >= images.length - 1) {
                setNextImage(0);
            }
            else {
                const temp = (nextImage + 1);
                setNextImage(temp);
            }
        }, 0);
        setTimeout(() => {
            element.classList.add("active");
        }, 500);

    }
    const handlePrevious = () => {
        var element = document.getElementById("anime-id");
        element.classList.add("slide");
        element.classList.remove("active");
        setTimeout(() => {
            if (nextImage === 0) {
                setNextImage(images.length - 1);
            }
            else {
                const temp = (nextImage - 1);
                setNextImage(temp);
            }
        }, 0);
        setTimeout(() => {
            element.classList.add("active");
        }, 500);

    }
    return (
        <div>
        {displaySingleImage ?
            <div className='display-single-image-main' >
                <div className='d-flex justify-content-end prp-2 cursor-pointer' onClick={() => setDisplaySingleImage(false)}>
                    <AiOutlineClose size={'2em'} />
                </div>
                <div className='display-single-image-body'>
                    <div className='display-single-image-board'>
                        <div className='display-single-image-img'>
                            <img src={images[nextImage].image} className='' id='anime-id' alt="" />
                        </div>
                    </div>
                    <div className='display-single-image-caption-btn'>
                        <div className='Biotif-SemiBold'>
                            {nextImage + 1}/{images.length}
                        </div>
                        <div className='display-single-image-caption' dangerouslySetInnerHTML={{ __html: images[nextImage].title }}>
                        </div>
                        <div className='display-single-image-btn' >
                            <span onClick={() => handlePrevious()} className='prp-3 cursor-pointer'>
                                <AiOutlineArrowLeft />
                            </span>
                            <span onClick={() => handleNext()} className='cursor-pointer'>
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div> :
            <div>
                <div className='slide-show-web-view'>
                    {
                        images.length > 6 ? <div className='grid-of-3 '>
                            {
                                images.slice(0, 5).map((img, index) => (
                                    <div key={index} className={`grid-temp grid-temp-${index} cursor-pointer`} onClick={() => {
                                        setDisplaySingleImage(true);
                                        setNextImage(index);
                                    }}>
                                        <img src={img.image} alt="" />
                                    </div>
                                ))

                            }
                            <div className='grid-temp grid-temp-6'>
                                <img src={images[5].image} alt="" />
                                <div className='grid-temp-6-fade cursor-pointer Biotif-SemiBold' onClick={() => {
                                    setDisplaySingleImage(true);
                                    setNextImage(0);
                                }}>
                                    +{images.length - 6}
                                </div>
                            </div>

                        </div> : <div className='grid-of-3 '>
                            {
                                images.map((img, index) => (
                                    <div key={index} className={`grid-temp grid-temp-${index} cursor-pointer`} onClick={() => {
                                        setDisplaySingleImage(true);
                                        setNextImage(index);
                                    }}>
                                        <img src={img.image} alt="" />
                                    </div>
                                ))

                            }
                        </div>
                    }
                </div>
                <div className='slide-show-mobile-view'>
                    <div className='ptp-5 pbp-5 mbp-3 mtp-2 black-bg'>
                        <CarouselSlideShow imgArr={images} />
                    </div>
                </div>
            </div>
        }
    </div>
    );
}

export default SlideShowComp;