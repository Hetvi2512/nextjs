import styled from "styled-components";

const HomeWrapper = styled.div`
.phone-view-square-img{
  display:none;
}
  .text-section-1 {
    text-align: center;
    font-size: 25px;
    color: #ff003d;
  }
  .text-section-2 {
    color: black;
  }
  .description-section-1 {
    text-align: center;
    font-size: 60px;
    color: #141414;
    letter-spacing: 0px;
    margin: 0px 11% 0px 11%;
    line-height: 1;
    font-weight: 600;
  }
  .description-section-1 p{
    font-family: "Biotif-SemiBold" !important;

  }
  .description-section-2 {
    text-align: center;
    font-size: 60px;
    color: #141414;
    text-align: center;
    margin: 0px 11% 0px 11%;
    padding-bottom:10px;
    line-height: 40px;
    color: black;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.72px;
    // background-image: linear-gradient(red, black);
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;

  }
  .description-section-2 p{
    font-family: "Biotif-bold" !important;
  }

  .read-more-btn {
    font-size: 16px;
    background: #ff003d;
    color: #fff;
    padding: 10px 20px 10px 20px;
    border: 1px solid #ff003d;
  }
  .pink-border {
    border-bottom: 2px solid #ff003d;
    margin-bottom: 5%;
    margin-left: 3%;
    margin-right: 3%;
  }
  .image-data {
    color: #fff;
    position: absolute;
    bottom: 0px;
    padding-left:8%;
    padding-bottom:5%;
    width:100%;
}
.image-title {
  color: #fff;
    font-size: 25px ;
    // line-height:1;
    padding-bottom: 5px;
  }
  .image-text {
    font-size: 50px;
    line-height:1.06;
    width:80%;
  }
  .image-text p{
    font-family: "Biotif-SemiBold" !important;
  }
  .image-title-last{
    color:black;
  }
  .image-text-last{
    width:70%;
    color:black;
  }
  .image-data-2 {
    color: #fff;
    position: absolute;
    bottom: 10%;
    left: 5%;
}
  .image-title-2 {
    font-size: 25px ;
    padding-bottom:5px;
    color:black;
  }
  .image-text-2 {
    width:80%;
    line-height:1.06;
    font-size: 50px;
    color:black;
  }
  .div-gradient{
    background-image:linear-gradient( rgba(255, 0, 61, 0) 5%, rgba(255, 0, 61, 0.01) 28%, rgba(255, 0, 61, 0.04) 42%, #60AB70 96%, #60AB70 103%, #60AB70 105%);
  }

  .image-text-2 p{
    font-family: "Biotif-SemiBold" !important;
  }

  @media (max-width: 480px) {
    .web-view-ad-img{
      display:none;
    }
    .phone-view-square-img{
      display:block;
    }
    .description-section-1 {
      font-size: 20px;
      margin: 0px 5% 0px 5%;

    }
    .description-section-2 {
      margin: 0px 5% 0px 5%;
      font-size: 20px;
      line-height: 1.06;
    }
    .text-section-1 {
      font-size: 12px;
    }
    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }
    .image-title {
      font-size: 12px;
    }
    .image-text {
      font-size: 20px;

    }
    .image-title-2 {
      font-size: 12px;
    }
    .image-text-2 {
      font-size: 20px;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .description-section-1 {
      font-size: 25px;
    }
    .description-section-2 {
      font-size: 20px;
    }
    .text-section-1 {
      font-size: 15px;
    }

    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }
    .image-title {
      font-size: 12px;
    }
    .image-text {
      font-size: 18px;
    }
    .image-title-2 {
      font-size: 12px;
    }
    .image-text-2 {
      font-size: 18px;
    }
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    .description-section-1 {
      font-size: 30px;
    }
    .description-section-2 {
      font-size: 30px;
    }
    .text-section-1 {
      font-size: 12px;
    }
    .read-more-btn {
      font-size: 10px;
      padding: 7px 12px;
    }
    .image-title {
      font-size: 12px;
    }
    .image-text {
      font-size: 20px;
    }
    .image-title-2 {
      font-size: 12px;
    }
    .image-text-2 {
      font-size: 20px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    .description-section-1 {
      font-size: 40px;
    }
    .text-section-1 {
      font-size: 18px;
    }
    .read-more-btn {
      font-size: 12px;
      padding: 7px 12px;
    }
    .description-section-2 {
      font-size: 40px;
    }
    .image-title {
      font-size: 18px;
    }
    .image-text {
      font-size: 35px;
    }
    .image-title-2 {
      font-size: 18px;
    }
    .image-text-2 {
      font-size: 35px;
    }
  }
  @media (min-width: 1201px) and (max-width: 1440px) {
    .description-section-1 {
      font-size: 45px;
      line-height: 1;
    }
    .text-section-1 {
      font-size: 20px;
    }
    .read-more-btn {
      font-size: 15px;
      padding: 7px 12px;
    }
    .description-section-2{
      font-size: 45px;
    }
    .image-title {
      font-size: 20px;
    }
    .image-text {
      font-size: 40px;
    }
    .image-title-2 {
      font-size: 20px;
    }
    .image-text-2 {
      font-size: 40px;
    }
    .image-last-main{
      background: linear-gradient(
        rgba(255, 0, 61, 0) 5%,
        rgba(255, 0, 61, 0.01) 28%,
        rgba(255, 0, 61, 0.04) 42%,
        rgba(255, 0, 61, 0.1) 53%,
        rgba(255, 0, 61, 0.18) 63%,
        rgba(255, 0, 61, 0.28) 72%,
        rgba(255, 0, 61, 0.41) 76%,
        rgba(255, 0, 61, 0.56) 80%,
        rgba(255, 0, 61, 0.73) 96%,
        rgba(255, 0, 61, 0.93) 103%,
        #ff003d 105%
      );

    }
  }
  @media (min-width: 1441px) and (max-width: 1750px) {
    .description-section-1 {
      font-size: 45px;
    }
    .text-section-1 {
      font-size: 20px;
    }
    .read-more-btn {
      font-size: 15px;
      padding: 7px 12px;
    }

    .image-title {
      font-size: 20px;
    }
    .image-text {
      font-size: 40px;
    }
    .image-title-2 {
      font-size: 20px;
    }
    .image-text-2 {
      font-size: 40px;
    }
    .description-section-2 {
      font-size: 45px;
    }
  }
`;
export default HomeWrapper;
