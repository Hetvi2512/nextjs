import styled from 'styled-components';

const ArticleWrapper = styled.div`
.effd-main-img{
    margin-top: 55px;

}
.style-title{
    margin-top: 5%;
    font-family: 'BIOTIF-BOOK';
    font-size: 25px;
    color: #ff003d;
    display: flex;
    justify-content: center;
}
.style-question{
    display: flex;
    justify-content: center;
}
.internal-div{
    width: 50%;
    text-align: center;
    font-size: 65px;
    line-height: 1;
    letter-spacing: -0px;
}
.style-author{
    font-size: 25px;
    font-family: 'Biotif-Book';
    color: #ff003d;
    display: flex;
    justify-content: center;
    padding-bottom:5%;
}
.description-head{
    font-size: 30px;
    // font-family: 'Biotif-SemiBold';
    line-height: 1;
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
    margin-top:5%;
    font-size:30px;
    line-height:1.3;
    padding-left:5%;
    padding-right:5%;
}
.row-data{
    padding-left:5%;
    padding-right:5%;
    margin-bottom:5%;
}
.ffd-b-img{
    padding-left:5%;
    padding-right:5%;
}
.main-social-icon{
    width:160px;
    padding-left:5%;
    justify-content:space-between;
}
.row-2-data{
    padding-left:9%;
    padding-right:9%;
    margin-bottom:5%;
}
.style-grid-new{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap:5%;
}
.description-info{
    color:#808080;
    font-size: 23px;
    padding-top: 3%;
    line-height: 28px;
    padding-bottom: 10%;
}
.row-2-description-part > h2{
    font-family: "InterstateCompressed-Bold" !important;
    color:#FF0032;
    font-size:80px;
    line-height:0.9;
    padding-left:5%;
    padding-right:5%;
    font-style:italic;
    text-transform: uppercase;
    padding-top:5%;
}

.row-2-description-part > p{
    font-family: "Heldane_Text_Regular" !important;
    color:#FFFFFF !important;
    font-size:24px;
    line-height:1.78;
    padding-left:5%;
    padding-right:5%;
    padding-top:5%;
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
.image-text {
    color: #808080;
    padding-top: 5px;
    font-size: 22px;
    padding-bottom:10%;
}
.image-text > div > p{
    font-family: "Heldane_Display_Regular" !important;
}
.ffd-social-ic{
    padding-top:5px;
}
.social-images{
    padding-right:4%;
    padding-left:1%;
    height:30px;
}
.row{
    margin-top:5%;
    margin-bottom:5%;
   }
.desc-answer{
    font-size: 24px;
    line-height: 28px;
}

.effd-social-ic{
    position:absolute;
    height:20vh;
}
.effd-social-ic-div{
    position:relative;
    top: 50%;
    left: 260%;
}

@media(max-width:481px){
    .main-social-icon{
        width:100px;
        padding-left:5%;
        justify-content:space-between;
    }
    .ffd-b-img {
        padding-left: 0%;
        padding-right: 0%;
    }
    .row-data{
        padding-left:5% !important;
        padding-right:5% !important;
       }
    .effd-main-img{
        margin-top: 30px;
        padding-bottom: 30px !important;
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
    .description-head > h3{
        font-size:18px;
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
     .row-2-description-part > p{
         font-size:18px;
         padding-left:0;
     }
     .row-2-description-part > h2{
        padding-left:0;
        text-align:center;
        padding-right:20px;
        font-size:40px !important;
     }
    .description-info{
        font-size:9px;
        line-height:9px;
    }
    .image-text{
        font-size:12px;
        padding-bottom:10%;
    }
    .style-grid-new {
        display: block;
    }
    .description-head{
        font-size:20px;
        line-height:20px;
        padding-bottom:15%;
    }
    .style-title{
        font-size:12px;
    }
    .style-question{
        font-size:30px;
    }
    .internal-div{
        width:90%;
        font-size:25px;
        letter-spacing:0px;
    }
    .style-author{
        font-size:12px;
        padding-bottom:5%;
    }
    .social-images{
        height:20px;
        padding-right:5%;
    }
    .main-social-icon {
        padding-left: 0%;
    }
    .desc-answer{
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 10%;
    }
}
@media(min-width:481px) and (max-width:767px){
    .main-social-icon{
        width:100px;
        padding-left:5%;
        justify-content:space-between;
    }
    .row-data{
        padding-left:10%;
        padding-right:10%;
    }
    .effd-main-img{
        margin-top: 34px;
    }
    .read-more-grid{
        grid-template-columns:auto ;
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
    .description-head > h3{
        font-size:18px;
        padding-left:0%;
          padding-right:0%;

     }
     .description-head > h2{
        font-size:50px;
     }
     .description-head > p{
         font-size:18px;
         padding-left:0%;
          padding-right:0%;
      }
      .row{
          padding-left:10%;
          padding-right:10%;
      }
      .social-images{
          height:20px;
      }
     .row-2-description-part > p{
         font-size:18px;
     }
     .row-2-description-part > h2{
         font-size:50px !important;
     }
    .description-info{
        font-size:9px;
        line-height:9px;
    }
    .image-text{
        line-height:1.3;
        padding-bottom:15%;
    }
    .description-head{
        font-size:20px;
        line-height:20px;
        padding-bottom:5%;
    }
    .style-title{
        font-size:12px;
    }
    .style-question{
        font-size:30px;
    }
    .internal-div{
        width:80%;
        font-size:30px;
        letter-spacing:0px;
    }
    .style-author{
        font-size:12px;
        padding-bottom:5%;
    }
    .main-social-icon {
        padding-left: 0%;
    }
    .image-text > div > p {
        font-size: 16px;
    }

}
@media(min-width:768px) and (max-width:992px){
    .main-social-icon{
        width:130px;
        padding-left:5%;
        justify-content:space-between;
    }
    .row-data{
        padding-left:10%;
        padding-right:10%;
    }
    .effd-main-img{
        margin-top: 40px;
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
    .description-head > h3{
        font-size:24px;
     }
     .description-head > h2{
        font-size:50px;
     }
     .description-head > p{
         font-size:18px;
      }
     .row-2-description-part > p{
         font-size:18px;
         padding-left:5%;
     }
     .row-2-description-part > h2{
         font-size:50px !important;
         text-align:center;
     }
    .description-info{
        font-size:20px;
        line-height:20px;
    }
    .image-text{
        font-size:20px;
        padding-bottom:10%;
    }
    .description-head{
        font-size:20px;
        line-height:20px;
        padding-bottom:5%;
    }
    .style-title{
        font-size:18px;
    }
    .style-question{
        font-size:30px;
    }
    .internal-div{
        font-size:35px;
        letter-spacing:0px;
    }
    .style-author{
        font-size:18px;
        padding-bottom:5%;
    }
    .social-images{
        padding-right:2%;
        height:20px;
    }
    .image-text > div > p {
        font-size: 16px;
    }
}
@media(min-width:993px) and (max-width:1200px){
    .main-social-icon{
        width:110px;
        padding-left:5%;
        justify-content:space-between;
    }
    .image-text > div > p {
        font-size: 18px;
    }
    .effd-main-img{
        margin-top: 45px;
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

    .description-info{
        font-size:16px;
        line-height:16px;
    }
    .image-text{
        font-size:16px;
        padding-bottom:10%;
    }
    .description-head{
        font-size:16px;
        line-height:16px;
        padding-bottom:0%;
    }
    .style-title{
        font-size:18px;
    }
    .style-question{
        font-size:35px;

    }
    .internal-div{
        font-size:35px;
        letter-spacing:0px;
    }
    .style-author{
        font-size:18px;
        padding-bottom:5%;
    }
    .social-images{
        padding-right:4%;
        padding-left:1%;
        height:20px;
    }
    .desc-answer{
        font-size: 16px;
        line-height: 20px;
    }
    .description-head > h3{
        font-size:22px;
     }
     .description-head > h2{
        font-size:50px;
     }
     .description-head > p{
         font-size:18px;
      }
     .row-2-description-part > p{
         font-size:18px;
     }
     .row-2-description-part > h2{
         font-size:50px !important;
     }
}
@media(min-width:1200px) and (max-width:1440px){
    .main-social-icon{
    width:120px;
    padding-left:5%;
    justify-content:space-between;
}
    .effd-main-img{
        margin-top: 50px;
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
    .description-head > h3{
       font-size:25px;
    }
    .description-head > h2{
        font-size:55px;
     }
    .description-head > p{
        font-size:20px;
     }
    .row-2-description-part > p{
        font-size:20px;
    }
    .row-2-description-part > h2{
        font-size:55px !important;
    }
    .description-info{
        font-size:16px;
        line-height:16px;
    }
    .image-text{
        font-size:16px;
        padding-bottom:10%;
    }
    .description-head{
        font-size:20px;
        line-height:20px;
        padding-bottom:0%;
    }
    .style-title{
        font-size:20px;
    }
    .style-question{
        font-size:40px;

    }
    .internal-div{
        width:50%;
        font-size:40px;
        letter-spacing:0px;
    }
    .style-author{
        font-size:20px;
        padding-bottom:5%;
    }
    .social-images{
        padding-right:4%;
        padding-left:1%;
        height:20px;
    }
    .desc-answer{
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 10%;
    }
}
@media(min-width:1441px) and (max-width:1750px){
    .effd-main-img{
        margin-top: 55px;
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
    .description-head > h2{
       font-size:60px;
    }

    .description-head > h3{
        font-size:28px;
     }
    .effd-social-ic-div{
        top: 50%;
        left: 240%;
    }
    .description-head > p{
        font-size:24px;
     }
    .row-2-description-part > p{
        font-size:24px;
    }
    .row-2-description-part > h2{
        font-size:60px !important;
    }
    .description-info{
        font-size:16px;
        line-height:16px;
    }
    .image-text{
        font-size:16px;
        padding-bottom:10%;
    }
    .description-head{
        font-size:20px;
        line-height:20px;
        padding-bottom:0%;
    }
    .style-title{
        font-size:23px;
    }
    .style-question{
        font-size:40px;

    }
    .internal-div{
        font-size:55px;
    }
    .style-author{
        font-size:23px;
        padding-bottom:5%;
    }
    .social-images{
        padding-right:4%;
        padding-left:1%;
    }
    .desc-answer{
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 10%;
    }

`;

export default ArticleWrapper;