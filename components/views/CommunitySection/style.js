import styled from "styled-components";

const CommunityWrapper = styled.div`
  .community-title {
    margin-top:10%;
    text-align: center;
  }
  .community-title-img{
    position:relative;
    height:200px;
  }
  .grid {
    display: grid;
    grid-column-gap: 5%;
    grid-row-gap: 40px;
    grid-template-columns: 22.5% 45% 22.5%;
  }

  .grid-2 {
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 21% 38% 31%;
  }

  .grid-item-1 {
    padding-top: 30px;
  }

  .grid-item-2 {
    grid-area: 1/2/3;
  }

  .grid-item-3 {
    padding-top: 30px;
  }
  .grid-item-1-4 {
    width:90%;
  }
  .grid-item-2-2 {
    position:relative;
    top:-70px;
  }

  .sub-category{
    padding-top:15px;
    font-size:16px;
    line-height:1;
    letter-spacing:100;
    color: #ff003d;
}
.question{
    padding-top:15px;
    font-size:26px;
    line-height:1.06;
    letter-spacing:0;
}
.author{
    padding-top:15px;
    font-size:18px;
    line-height:1;
    letter-spacing:0;
    color:#ff003d;
}
  .image-position {
    background:#fff;
    // margin-bottom:10%;
  }

  @media (min-width: 1025px) {
    .left-image {
      text-align: right;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .community-main-div{
      margin-left:5% !important;
      margin-right:5% !important;
    }
    .community-title-img {
      height:38px;
    }
    .grid-item-1-4 {
      width:100%;
    }
    .grid-item-2-2 {
      position:relative;
      top:0px;
    }
    .sub-category {
      padding-top:10px;
      font-size: 13px;
    }
    .question {
      padding-top:7px;
      font-size: 18px;
      line-height:1.3;
    }
    .author {
      padding-top:7px;
      font-size: 13px;
      margin-bottom: 10%;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {

    .community-title-img{
      height:50px;

    }
    .grid-item-1-4 {
      width:100%;
    }
    .grid-item-2-2 {
      position:relative;
      top:0px;
    }
    .sub-category {
      padding-top:10px;
      font-size: 12px;
    }
    .question {
      padding-top:7px;
      font-size: 20px;
    }
    .author {
      padding-top:7px;
      font-size: 12px;
      margin-bottom: 10%;
    }
  }
  @media(min-width:769px) and (max-width:1024px){
    .community-title-img{
      height:80px;
    }
    .grid {
      grid-column-gap: 25px;
    }

    .grid-2 {
      grid-gap: 25px;
    }
    .grid-item-2-2{
      top:-100px;
    }
    .sub-category {
      padding-top:10px;
      font-size: 12px;
    }
    .question {
      padding-top:7px;
      font-size: 18px;
    }
    .author {
    padding-top:7px;
    font-size: 12px;

    }

  }
  @media(min-width:1025px) and (max-width:1200px){
    .community-title-img{
      height:100px;
    }
    .grid {
      grid-column-gap: 25px;
    }

    .grid-2 {
      grid-gap: 25px;
    }
    .grid-item-2-2{
      top:-100px;
    }
    .sub-category {
      padding-top:10px;

      font-size: 12px;
    }
    .question {
      padding-top:7px;
      font-size: 18px;
    }
    .author {
      padding-top:7px;
    font-size: 12px;

    }

  }
  @media(min-width:1201px) and (max-width:1440px){
    .community-title-img{
      height:120px;
    }
    .grid {
      grid-column-gap: 25px;
    }

    .grid-2 {
      grid-gap: 25px;
    }
    .grid-item-2-2{
      top:-100px;
    }
    .sub-category {
      padding-top:10px;
      font-size: 14px;
    }
    .question {
      padding-top:10px;
      font-size: 20px;
    }
    .author {
      padding-top:10px;
    font-size: 15px;
    }

  }
  @media(min-width:1441px) and (max-width:1750px){
    .community-title-img{
      height:150px;
    }

    .sub-category {
      font-size: 14px;
    }
    .question {
      font-size: 23px;
    }
    .author {
    font-size: 15px;
    }

  }
  @media (max-width: 768px) {
    .grid {
      display: grid;
      grid-column-gap: 20px;
      grid-row-gap: 10px;
      grid-template-columns: auto;
    }

    .grid-item-2 {
      grid-area: auto;
    }

    .grid-item-1 {
      padding-top: 0px;
    }

    .grid-item-3 {
      padding-top: 0px;
    }

    .grid-2 {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: auto;
    }
  }
`;
export default CommunityWrapper;
