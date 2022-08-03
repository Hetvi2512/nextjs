import styled from "styled-components";

const Article5Wrapper = styled.div`

.ss-format-mobile{
    display:none;
}
.slide-show-mobile-view{
    display:none;
}
.slide-show-title{
    font-weight: 700;
    text-align:center;
    font-style: italic;
    color: white;
    font-size: 80px;
    line-height: 1;
    padding-top:5%;
    padding-left:25%;
    padding-right:25%;
    padding-bottom:3%;
}

}
.parent-div-article{
    background:#ff003d;
    padding-bottom:5%;
}
.category-style{
    width: max-content;
    font-size: 20px;
    // line-height: 1;
    color: white;
}

.ss-main-auth-div{
    padding-left:0%;

}
.ss-question > p{
    font-family: "Heldane_Text_Regular" !important;
}
.ss-question > p{
    margin-left:30%;
    margin-right:30%;
    line-height:1.78;
    margin-bottom:3%;
    font-size:24px;
}
.ss-question > h2{
    font-family: 'InterstateCompressed-Bold';
    margin-left:28%;
    margin-right:28%;
    margin-bottom:3%;
    margin-top:5%;
    font-style:italic;
    color:white;
    text-transform: uppercase;
    text-align:center;
    font-size:90px;
}
.ss-question > h3{
    font-family: 'Heldane_Text_Medium_Italic';
    line-height:1.3;
    margin-left:30%;
    margin-right:30%;
    margin-bottom:3%;
    font-size:28px;
}

.display-single-image-main{
    color:white;
    height: auto;
    width: 100%;
    background-color: black;
    margin-top: 5%;
    margin-bottom: 5%;
    padding-top:2%;
    padding-bottom:3%;

    top:0;
    z-index:1;
}
.display-single-image-body{
    display:grid;
    grid-template-columns: 2fr 1fr;
}
.display-single-image-board{
    height:65vh;
 width:100%;
 display:flex;
 align-items: center;
 justify-content: flex-end;
 -webkit-justify-content: flex-end;
}
.display-single-image-img{
    display:flex;
    justify-content: felx-end;
    -webkit-justify-content: flex-end;
    margin-left: 5%;
    margin-right: 5%;
}

.display-single-image-img > img{
 max-height:65vh;
 max-width:100%;
}


.display-single-image-caption-btn{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-top: 5%;
    margin-bottom: 5%;
}
.display-single-image-caption{
    padding-right:40%;
}
.display-single-image-caption > div > p{
    font-family: 'Biotif-SemiBold';
    font-size:24px;
    line-height:1.5;
}
.display-single-image-caption div a{
    font-family: 'Biotif-SemiBold';
    color:white !important;
    background-color:black !important;
    text-decoration:none !important;
    font-style:normal !important;
}
.mobile-view-text-sideshow div a{
    font-family: 'Biotif-SemiBold';
    color:white !important;
    background-color:black !important;
    text-decoration:none !important;
    font-style:normal !important;
}

.display-single-image-btn{


}
.slide {
    opacity: 0;
    transition-duration: 1s linear;
    transition-timing-function: linear;
  }

  .active.slide {
    opacity: 1;
    // transition-duration: 1s;
    // transform: scale(1.08);
    -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  }
  .grid-of-3{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
.grid-temp > img{
    width:100%;
    height: calc(calc(60vw - 60px)/3);
        object-fit: cover;


}
.grid-temp-6{
    position: relative;

}
.grid-temp-6-fade{
    position: absolute;
    top: 0;
    /* z-index: 100; */
    /* bottom: 50%; */
    width: 100%;
    height: 100px;
    height: calc(calc(60vw - 60px)/3);
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 68px;
    background-color: rgba(255, 99, 71, 0.5);

}
.slide-show-main-img {
    margin-top: 50px;
}
.ss-s-icon-btn{
    padding-left: 4% !important;
    padding-right: 4% !important;
}

@media(max-width:480px){
    .ss-format-mobile{
        display:block;
    }
    .ss-format-web{
        display:none;
    }
    .slide-show-main-img {
        margin-top: 0px;
        margin-bottom: 30px;
    }
    .slide-show-title{
        padding-top: 100px;
        font-size:30px;
        padding-left:10%;
        padding-right:10%;
    }

        .category-style{
        font-size:13px;
    }
    .ss-main-auth-div{
        padding-left:0;
        text-align:center;
    }
    .ss-question > h2{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:5%;
        font-size:40px;
    }
    .ss-question > h3{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:3%;
        font-size:18px;
    }
    .ss-question > p{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:3%;
        font-size:18px;
    }
    .grid-temp-6-fade{
        font-size:16px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:12px;
    }
    .slide-show-mobile-view{
        display:block;
    }
    .slide-show-web-view{
        display:none;
    }
    .grid-of-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        .grid-temp > img {
            width: 100%;
            // height:auto;
            height: calc(calc(90vw - 10px)/2);
        }
    }
    .display-single-image-caption {
        padding-right: 5%;
    }
    .grid-temp-6-fade {
        height: calc(calc(90vw - 10px)/2);
    }
    .ss-s-icon{
        height:20px;
    }
    .ss-s-icon-btn{
        padding-left: 2% !important;
        padding-right: 2% !important;
    }
    .ss-number{
        margin-bottom:2%;
        margin-left:10%;
        margin-right:10%;
        font-size:14px;
    }
    .mobile-view-text-sideshow > div > p{
        margin-top:3%;
        margin-left:10%;
        margin-right:10%;
        font-family: 'Biotif-SemiBold';
        line-height:1.3;
        font-size:14px;
    }
}
@media(min-width:481px) and (max-width:768px){
    .grid-5 {
        grid-template-columns: auto;
        padding-left: 5%;
        padding-right: 5%;
    }
    .slide-show-main-img {
        margin-top: 30px;
    }
    .slide-show-title{
        font-size:40px;
        padding-left:10%;
        padding-right:10%;
    }

        .category-style{
        font-size:14px;
    }
    .ss-main-auth-div{
        padding-left:0;
        text-align:center;
    }
    .ss-question > h2{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:5%;
        font-size:50px;
    }
    .ss-question > h3{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:3%;
        font-size:24px;
    }
    .ss-question > p{
        margin-left:10%;
        margin-right:10%;
        margin-bottom:3%;
        font-size:18px;
    }
    .grid-temp-6-fade{
        font-size:16px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:12px;
    }
    .slide-show-mobile-view{
        display:block;
    }
    .slide-show-web-view{
        display:none;
    }
    .grid-of-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        .grid-temp > img {
            width: 100%;
            // height:auto;
            height: calc(calc(90vw - 10px)/2);
        }
    }
    .display-single-image-caption {
        padding-right: 5%;
    }
    .grid-temp-6-fade {
        height: calc(calc(90vw - 10px)/2);
    }
    .ss-s-icon{
        height:20px;
    }
    .ss-s-icon-btn{
        padding-left: 2% !important;
        padding-right: 2% !important;
    }
    .by-author {
        margin-top:10px;
        font-size: 14px;
    }
    .by-date {
        font-size: 14px;
    }
    .ss-number{
        margin-bottom:2%;
        font-size:16px;
        margin-left:10%;
        margin-right:10%;
    }
    .mobile-view-text-sideshow > div > p{
        margin-top:3%;
        font-family: 'Biotif-SemiBold';
        line-height:1.3;
        font-size:16px;
        margin-left:10%;
        margin-right:10%;

    }

}
@media(min-width:769px) and (max-width:1023px){
    .slide-show-main-img {
        margin-top: 35px;
    }
    .slide-show-title{
        font-size:45px;
        padding-left:10%;
        padding-right:10%;
    }
    .by-author{
        font-size:14px;
        text-align:center;
    }
    .by-date{
        font-size:14px;
        text-align:center;
    }
    .ss-s-icon{
        height:20px;
    }
    .ss-s-icon-btn{
        padding-left: 2% !important;
        padding-right: 2% !important;
    }
    .category-style{
        font-size:14px;
    }
    .ss-main-auth-div{
        padding-left:0%;
        // text-align:center;
    }
    .ss-question > h2{
        margin-bottom:3%;
        font-size:40px;
        margin-left:15%;
        margin-right:15%;
    }
    .ss-question > h3{
        margin-left:15%;
        margin-right:15%;
        margin-bottom:3%;
        font-size:18px;
    }
    .ss-question > p{
        margin-left:15%;
        margin-right:15%;
        margin-bottom:3%;
        font-size:18px;
    }
    .grid-temp-6-fade{
        font-size:30px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:14px;
    }
    .display-single-image-caption{
        padding-right:20%;
    }
    .display-single-image-caption{
        padding-right:10%;
    }
    .grid-of-3 {
        grid-gap: 30px;
        margin-left: 15%;
        margin-right: 15%;
    }
    .grid-5 {
        grid-template-columns: auto;
        padding-left: 5%;
        padding-right: 5%;
    }
}
@media(min-width:1024px) and (max-width:1200px){
    .slide-show-main-img {
        margin-top: 40px;
    }
    .slide-show-title{
        font-size:45px;
    }
    .by-author{
        font-size:16px;
    }
    .by-date{
        font-size:16px;
    }
    .ss-s-icon{
        height:20px;
    }

    .category-style{
        font-size:16px;
    }
    .ss-main-auth-div{
        padding-left:0%;
        // text-align:center;
    }
    .ss-question > h2{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:50px;
    }
    .ss-question > h3{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:20px;
    }
    .ss-question > p{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:18px;
    }
    .grid-temp-6-fade{
        font-size:30px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:15px;
    }
    .display-single-image-caption{
        padding-right:15%;
    }
}
@media(min-width:1201px) and (max-width:1440px){
    .slide-show-main-img {
        margin-top: 48px;
    }
    .slide-show-title{
        font-size:55px;
    }
    .by-author{
        font-size:20px;
    }
    .by-date{
        font-size:20px;
    }
    .ss-s-icon{
        height:20px;
    }
    .category-style{
        font-size:20px;
    }
    .ss-main-auth-div{
        padding-left:0%;
        // text-align:center;
    }
    .ss-question > h2{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:55px;
    }
    .ss-question > h3{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:20px;
    }
    .ss-question > p{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:20px;
    }
    .grid-temp-6-fade{
        font-size:30px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:17px;
    }
    .display-single-image-caption{
        padding-right:20%;
    }
}
@media(min-width:1441px) and (max-width:1740px){
    .slide-show-main-img {
        margin-top: 45px;
    }
    .slide-show-title{
        font-size:65px;
    }
    .by-author{
        font-size:20px;
    }
    .by-date{
        font-size:20px;
    }
    .ss-s-icon{
        height:20px;
    }
    .category-style{
        font-size:20px;
    }
    .ss-main-auth-div{
        padding-left:0%;
        // text-align:center;
    }
    .ss-question > h2{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:60px;
    }
    .ss-question > h3{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:24px;
    }
    .ss-question > p{
        margin-left:30%;
        margin-right:30%;
        margin-bottom:3%;
        font-size:24px;
    }
    .grid-temp-6-fade{
        font-size:30px;
        font-style: italic;
    }
    .display-single-image-caption > div > p{
        font-size:18px;
    }
    .display-single-image-caption{
        padding-right:30%;
    }
}

`;

export default Article5Wrapper;