import styled from "styled-components";

const StyleArticle = styled.div`
.article-style-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.style-title-2{
    font-family: 'BIOTIF-BOOK';
    font-size: 25px;
    color: #ff003d;
    display: flex;
    justify-content: center;
    margin-bottom:35px;
}
.style-question-2{
    font-size: 60px;
    text-align:center;
    line-height:1.1;
    padding-left:12%;
    padding-right:12%;
    display: flex;
    justify-content: center;
    margin-bottom:35px;
}
.internal-div{
    width: 31%;
    text-align: center;
    line-height: 75px;
    letter-spacing: -7px;
}
.style-author-2{
    font-size: 25px;
    font-family: 'Biotif-Book';
    color: #ff003d;
    display: flex;
    justify-content: center;
    padding-bottom:2%;
}
.style-date{
    display:flex;
    justify-content:center;
    font-size:25px;
    margin-top:10px;
}
.image-text-2 > div > p{
    font-family: "Heldane_Text_Regular" !important;
    color: #808080;
    // padding-top: 5px;
    font-size: 16px;
}
.image-text-2{
    font-family: "Heldane_Text_Regular" !important;
    color: #808080;
    padding-top: 5px;
    font-size: 16px;
}
.social-images-2{
    padding-right:3%;
}
.social-distance{
    padding-top:10%;
    position: relative;
    top: 15%;
}

.description-head-2 > *{
    font-size: 30px;
    font-family: 'Biotif-SemiBold';
    line-height: 30px;
    padding-top:5%;
    padding-right:5%;
}

.description-question {

}
.description-question{
    font-family: "Biotif-SemiBold" !important;
    font-size: 30px;
    line-height: 30px;
    padding-top:10%;
    width:30%;
}

.description-question > *{
    font-family: "Biotif-SemiBold" !important;
}
.row-data-2{
    padding-left:5%;
    padding-right:5%;
    margin-bottom:5% !important;
    margin-top:5% !important;
}
.answer-description{
    font-size: 24px;
    line-height: 28px;
    width: 30%;
}

.answer-description > *{
    font-family: "Heldane_Display_Regular" !important;
    margin-bottom:5%;
}
.new-images-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:5%;
    padding-left:15%;
    padding-right:15%;
    padding-top:5%;
    padding-bottom:5%;
}
.bold-caption{
    font-size: 70px;
    line-height: 60px;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 5%;
    font-family: InterstateCompressed-Bold;
    text-align: center;
    font-style: italic;
}
.bold-caption > div > *{
    font-family: InterstateCompressed-Bold;
}
.image-text-3 {
    color: #808080;
    padding-top: 1%;
    font-size: 20px;
}
.read-more-new1 {
    font-size: 90px;
    color: #ff003d;
    text-decoration:4px solid underline;
    text-underline-position: from-font;
    margin-bottom:4%;
    letter-spacing:-4px;
}
.read-more-grid{
    display:grid;
    grid-template-columns:auto auto auto;
    grid-column-gap:3%;
}
.read-more-subc{
    font-size: 20px;
    color: #ff003d;
    font-family: 'Biotif-Book';
}
.read-more-desc{
    font-size: 33px;
    line-height:33px;
}
.interview-img-side{
    padding-right:5%;
    padding-left:5%;
}
.description-head > p{
    font-family: "Heldane_Text_Regular" !important;
    line-height: 1.78;
    font-size:24px;
    margin-bottom:5%;
    padding-left:5%;
    padding-right:5%;
}
.description-head > h2{
    font-family: "InterstateCompressed-Bold" !important;
    // font-family: 'Biotif-SemiBold' !important;
    margin-bottom:5%;
    font-family: "InterstateCompressed-Bold" !important;
    color:#FF0032;
    font-size:80px;
    padding-left:5%;
    padding-right:5%;
    line-height:0.9;
    text-align:center;
    font-style:italic;
    text-transform: uppercase;
}
.description-head > h3{
    // font-family: "InterstateCompressed-Bold" !important;
    font-family: 'Biotif-SemiBold' !important;
    margin-bottom:5%;
    // margin-top:5%;
    font-size:30px;
    line-height:1.3;
    padding-left:5%;
    padding-right:5%;
}
.desc-answer > p{
    font-family: "Heldane_Text_Regular" !important;
    font-size: 24px;
    line-height: 1.06;
    margin-bottom:5%;
}
.desc-answer > h2{
    font-family: 'Biotif-SemiBold';
    font-size: 30px;
    line-height: 1;
    margin-bottom:5%;
}

.interview-question-answer > h3{
    font-family: 'Biotif-SemiBold';
    font-size: 30px;
    line-height: 1.2;
    margin-bottom:2%;
    margin-left:30%;
    margin-right:30%;
}
.interview-question-answer > p{
    font-family: "Heldane_Text_Regular" !important;
    font-size: 24px;
    line-height: 1.78;
    margin-bottom:3%;
    margin-left:30%;
    margin-right:30%;
}
.interview-question-answer > div >blockquote{
    font-family: InterstateCompressed-Bold;
    text-align: center;
    font-style: italic;
    margin-left:20%;
    margin-right:20%;
    font-size:65px;
    line-height:1;
    text-transform: capitalize;
}

.interview-question-answer > div >span{
    display: block;
    font-family: InterstateCompressed-Bold;
    text-align: center;
    font-style: italic;
    margin-left:20%;
    margin-right:20%;
    font-size:65px;
    line-height:1;
    text-transform: capitalize;
}

@media(max-width:480px){
    .interview-question-answer > p {
        font-size: 18px;
        margin-left: 5%;
        margin-right: 5%;
    }
    .interview-question-answer > h3{
        font-size: 20px;
        margin-left:5%;
        margin-right:5%;
    }
    .description-head > h3{
        font-size:18px;
        margin-top:0;
        padding:0;
     }
     .description-head > h2{
        font-size:40px;
        padding-left:0;
        padding-right:25px;
     }
     .description-head > p{
         font-size:18px;
         padding:0;
      }
      .interview-img-side{
          padding:0;
      }
    .image-text-2 > div > p{
        font-size:12px;
    }
    .image-text-2{
        font-size:12px;
    }
    .style-title-2{
        font-size:16px;
    }
    .style-question-2{
        font-size:30px;
    }
    .style-author-2{
        font-size:16px;
    }
    .style-date{
        font-size:12px;
        padding-bottom:0%;
    }
    .social-distance{
        padding-top:5%;
    }
    .social-images-2{
        padding-right:5%;
    }
    .read-more-grid{
        grid-template-columns:auto;
    }
    .read-more-subc{
        font-size: 10px;
    }
    .read-more-desc{
        font-size: 23px;
        line-height:23px;
    }
    .read-more-new1{
        font-size:60px;
        text-align:center;
    }
    .description-head-2 > *{
        font-size: 20px;
        line-height: 20px;
        padding-top:5%;
        padding-bottom:10%;
    }
    .description-question{
        font-size: 25px;
        line-height: 25px;
        padding-top: 10%;
        width: 80%;
        text-align: center;
    }
    .answer-description{
        font-size: 20px;
        line-height: 24px;
        width: 80%;
        text-align: center;
    }
    .new-images-grid{
        display:grid;
        grid-template-columns:auto;
        padding-top:5%;
        padding-left:5%;
        padding-right:5%;
        grid-row-gap:5%;
        padding-bottom:20%;
    }
    .bold-caption{
        font-size:20px;
        line-height:20px;
    }
    .image-text-3{
        font-size:10px;
    }
    .interview-question-answer > div >blockquote{
        margin-left:5%;
        margin-right:5%;
        font-size:28px;
    }
    .interview-question-answer > div >span{
        margin-left:5%;
        margin-right:5%;
        font-size:28px;
    }
}
@media(min-width:481px) and (max-width:768px){
    .description-head > h3{
        font-size:18px;
        padding-left:5%;
          padding-right:5%;

     }
     .description-head > h2{
        font-size:50px;
     }
     .description-head > p{
         font-size:18px;
         padding-left:5%;
          padding-right:5%;
      }
      .interview-question-answer > p {
        font-size: 18px;
        margin-left: 10%;
        margin-right: 10%;
    }
    .interview-question-answer > h3{
        font-size: 20px;
        margin-left:10%;
        margin-right:10%;
    }

    .image-text-2 > div > p{
        font-size:16px;
    }
    .image-text-2{
        font-size:16px;
    }
    .style-title-2{
        font-size:16px;
    }
    .style-question-2{
        font-size:30px;
    }
    .style-author-2{
        font-size:16px;
    }
    .style-date{
        font-size:12px;
        // padding-bottom:10%;
    }
    .social-distance{
        padding-top:5%;
    }
    .social-images-2{
        padding-right:5%;
    }
    .new-images-grid {
        display: grid;
        grid-template-columns:1fr;
        grid-column-gap: 5%;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .new-images-grid > div {
        padding-bottom: 10%;
    }
    .interview-question-answer > div >blockquote{
        margin-left:5%;
        margin-right:5%;
        font-size:28px;
    }
    .interview-question-answer > div >span{
        margin-left:5%;
        margin-right:5%;
        font-size:28px;
    }
}
@media(min-width:768px) and (max-width:768px){
    .social-distance{
        padding-top:5%;
    }
}
@media(min-width:769px) and (max-width:992px){
    .description-head > h3{
        font-size:24px;
        padding-left:10%;
         padding-right:10%;
     }
     .description-head > h2{
        font-size:50px;
        padding-left:10%;
         padding-right:10%;
     }
     .description-head > p{
         font-size:18px;
         padding-left:10%;
         padding-right:10%;
      }
      .interview-question-answer > p{
        font-size: 18px;
        margin-left:15%;
        margin-right:15%;
    }
    .interview-question-answer > h3{
        font-size: 20px;
        margin-left:15%;
        margin-right:15%;
    }
    .interview-img-side {
        padding-right: 10%;
        padding-left: 10%;
    }
    .image-text-2 > div > p{
        font-size:16px;
    }
    .image-text-2{
        font-size:16px;
    }
    .style-title-2{
        font-size:24px;
    }
    .style-question-2{
        font-size:40px;
    }
    .style-author-2{
        font-size:24px;
    }
    .style-date{
        font-size:15px;
        // padding-bottom:10%;
    }
    .social-images-2{
        padding-right:5%;
    }
    .description-head-2 > *{
        padding-bottom:10%;
    }
    .description-question{
        width:40%;
        text-align:center;
    }
    .answer-description{
        font-size: 24px;
        line-height: 28px;
        width: 40%;
        text-align: center;
    }
    .bold-caption{
        font-size:50px;
        line-height:50px;
    }
    .read-more-grid{
        grid-template-columns:auto;
    }
    .image-text-3{
        font-size:10px;
    }
    .description-head-2 > *{
        font-size:14px;
        line-height:18px;
    }
    .desc-answer > *{
        font-size: 16px;
        line-height: 20px;
    }
    .interview-question-answer > div >blockquote{
        margin-left:15%;
        margin-right:15%;
        font-size:25px;
    }
    .interview-question-answer > div >span{
        margin-left:15%;
        margin-right:15%;
        font-size:25px;
    }
}


@media(min-width:993px) and (max-width:1200px){
    .description-head > h3{
        font-size:22px;
     }
     .description-head > h2{
        font-size:50px;
     }
     .description-head > p{
         font-size:18px;
      }
      .interview-question-answer > p{
        font-size: 18px;
    }
    .interview-question-answer > h3{
        font-size: 20px;
    }
      .image-text-2 > div > p{
        font-size:16px;
    }
    .image-text-2{
        font-size:16px;
    }
    .style-title-2{
        font-size:24px;
    }
    .style-question-2{
        font-size:40px;
    }
    .style-author-2{
        font-size:24px;
    }
    .style-date{
        font-size:18px;
        // padding-bottom:10%;
    }
    .social-images-2{
        padding-right:5%;
    }
    .description-head-2 > *{
        font-size:17px;
        line-height:21px;
    }
    .image-text-3{
        font-size:10px;
    }
    .desc-answer > *{
        font-size: 16px;
        line-height: 20px;
    }
    .interview-question-answer > div >blockquote{
        font-size:30px;
    }
    .interview-question-answer > div >span{
        margin-left:5%;
        margin-right:5%;
        font-size:30px;
    }
}
@media(min-width:1201px) and (max-width:1440px){
    .description-head > h3{
        font-size:25px;
     }
     .description-head > h2{
         font-size:55px;
      }
     .description-head > p{
         font-size:20px;
      }
      .interview-question-answer > p{
        font-size: 20px;
    }
    .interview-question-answer > h3{
        font-size: 22px;
    }
    .image-text-2 > div > p{
        font-size:16px;
    }
    .image-text-2{
        font-size:16px;
    }
    .style-title-2{
        font-size:24px;
    }
    .style-question-2{
        font-size:40px;
    }
    .style-author-2{
        font-size:24px;
    }
    .style-date{
        font-size:20px;
        // padding-bottom:10%;
    }
    .social-images-2{
        padding-right:5%;
    }
    .description-head-2 > *{
        font-size:17px;
        line-height:21px;
    }
    .image-text-3{
        font-size:10px;
    }
    .desc-answer > *{
        font-size: 16px;
        line-height: 20px;
    }
    .interview-question-answer > div >blockquote{
        font-size:35px;
    }
    .interview-question-answer > div >span{
        font-size:35px;
    }
}
@media(min-width:1441px) and (max-width:1740px){
    .description-head > h2{
        font-size:60px;
     }

     .description-head > h3{
         font-size:28px;
      }
     .description-head > p{
         font-size:22px;
      }
      .style-date{
        display:flex;
        justify-content:center;
        font-size:23px;
        margin-top:10px;
    }
    .interview-question-answer > p{
        font-size: 22px;
    }
    .interview-question-answer > h3{
        font-size: 24px;
    }
    .interview-question-answer > div >blockquote{
        font-size:45px;
    }
    .interview-question-answer > div >span{
        font-size:45px;
    }

}
`;

export default StyleArticle;
