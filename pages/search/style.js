import styled from "styled-components";

const SearchWrapper = styled.div`
.main-search{
    padding-left:12%;
    padding-top:10%
}
.dot{
    width: 20px;
    height: 20px;
    background-color: #ff003d;
    border-radius:20px;
}
.article-title{
    font-size:30px;
    color:#ff003d;
}
.article-border{
    border-bottom: 1px solid black;
    width: 76%;
    margin-left: 12%;
    margin-top: 3%;

}
.search-grid {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:20px;
    padding-right:12%;
    padding-left:12%;
    padding-top:4%;
    row-gap:80px;
}
.search-sub-category{
    color: #ff003d;
    padding-top: 20px;
    font-size:16px;
}
.search-question-category{
    font-size:30px;
    line-height:32px;
    padding-top:15px;
}
.search-author{
    font-size:20px;
    color:#ff003d;
    padding-top:15px;
    line-height:20px;
}
.load-more-search{
    margin-top: 10%;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.74;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    font-size: 24px;
    background-color:#ff003d;
    border:none;
    padding-left:2%;
    padding-right:2%;
    margin-bottom:10%;
}
.grey-text{
    color:#909295;
}
.search-search-main-div{
    padding-top:6%;
}
.search-trending-hover:hover{
    color:#ff003d;
}
.search-trending-div{
    font-size:20px;

}
.search-clear-div{
    font-size:18px;
    color:white;
}

@media(min-width:320px) and (max-width:480px){
    .main-search{
        padding-top:12%;
    }
    .dot{
        width: 10px;
        height: 10px;
        background-color: #ff003d;
        border-radius:20px;
    }
    .article-title{
        font-size:20px;
        color:#ff003d;
    }
    .search-grid{
        grid-template-columns:auto;
        row-gap:40px;
    }
    .search-sub-category{
        font-size:12px;
    }
    .search-question-category{
        font-size:15px;
        padding-top:5px;
        line-height:20px
    }
    .search-author{
        font-size:15px;
        padding-top:5px;
    }
    .load-more-search{
        font-size:16px;
    }
    .search-trending-div{
        color:#909295;
    }
    .search-trending-div{
        font-size:12px;
    }
    .search-search-main-div{
        padding-top:9%;
    }
    .search-clear-div{
        font-size:10px;
    }
}
@media(min-width:481px) and (max-width:768px){
    .search-grid{
        grid-template-columns:auto;
        row-gap:40px;
    }
    .search-sub-category{
        font-size:15px;
    }
    .search-question-category{
        font-size:20px;
    }
    .search-author{
        font-size:12px;
        margin-bottom:10%;
    }

    .search-trending-div{
        font-size:12px;
    }
    .search-search-main-div{
        padding-top:7%;
    }
    .search-clear-div{
        font-size:10px;
    }
}
@media(min-width:768px) and (max-width:1024px){
    .search-grid{
        grid-template-columns:auto;
        row-gap:40px
    }
    .search-question-category{
        padding-top:5px;
    }
    .search-author{
       padding-top:5px;
    }
    .search-trending-div{
        font-size:14px;
    }
    .search-search-main-div{
        padding-top:7%;
    }
    .search-clear-div{
        font-size:12px;
    }

}
@media(min-width:1024px) and (max-width:1024px){
    .search-sub-category{
        font-size:15px;
    }
    .search-question-category{
        font-size:20px;
        padding-top:5px;
        line-height:22px;
    }
    .search-author{
        font-size:12px;
        padding-top:5px;
    }
    .search-trending-div{
        font-size:14px;
    }
    .search-search-main-div{
        padding-top:5%;
    }
    .search-clear-div{
        font-size:12px;
    }
}

@media(min-width:1025px) and (max-width:1200px){
    .common-title{
        font-size:200px;
        letter-spacing:46.5px;
        text-indent:46.5px;
    }
    .common-community-title{
        font-size:200px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .search-trending-div{
        font-size:14px;
    }
    .search-search-main-div{
        padding-top:5%;
    }
    .search-clear-div{
        font-size:12px;
    }
}
@media(min-width:1201px) and (max-width:1440px){
    .common-title{
        font-size:200px;
        letter-spacing:46.5px;
        text-indent:46.5px;
    }
    .common-community-title{
        font-size:200px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .search-trending-div{
        font-size:16px;
    }
    .search-search-main-div{
        padding-top:5%;
    }
    .search-clear-div{
        font-size:14px;
    }
}
@media(min-width:1441px) and (max-width:1700px){
    .common-title{
        font-size:200px;
        letter-spacing:46.5px;
        text-indent:46.5px;
    }
    .common-community-title{
        font-size:200px;
        letter-spacing: 26.5px;
        text-indent:26.5px;
    }
    .search-trending-div{
        font-size:16px;
    }
    .search-search-main-div{
        padding-top:5%;
    }
    .search-clear-div{
        font-size:14px;
    }
}
.modern-drawer {
    position: absolute !important;
    top: 99% !important;
    height: 430px !important;
    overflow: hidden;
  }
  .search-result-div:hover {
    color: #ff003d !important;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .grid-new-1{
        margin-left: 5% !important;
        margin-right: 5% !important;
      }
      .grid-view{
        margin-left: 5% !important;
        margin-right: 5% !important;
      }
    .modern-drawer {
      top: 100% !important;
      height: 250px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 16px;
    }
    .search-result-div {
      font-size: 0.75rem;
    }
    .theestdfulllogo {
      height: 25px;
  }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .modern-drawer {
      top: 100% !important;
      height: 225px !important;
    }
    .form__group-1 {
      width: 90%;
    }
    .form__field-1 {
      font-size: 0.9rem;
    }
    .search-result-div {
      font-size: 0.9rem;
    }
    .theestdfulllogo {
      height: 25px;
  }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .modern-drawer {
      top: 95% !important;
      height: 240px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1rem;
    }
    .search-result-div {
      font-size: 1rem;
    }
    .theestdfulllogo {
      height: 26px;
  }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    .modern-drawer {
      top: 100% !important;
      height: 280px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.15rem;
    }
    .search-result-div {
      font-size: 1.15rem;
    }
    .theestdfulllogo {
      height: 36px;
  }
  }
  @media (min-width: 1201px) and (max-width: 1440px) {
    .modern-drawer {
      top: 100% !important;
      height: 330px !important;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.3rem;
    }
    .search-result-div {
      font-size: 1.3rem;
    }
    .theestdfulllogo {
      height: 44px;
  }
  }
  @media (min-width: 1441px) and (max-width: 1740px) {
    .modern-drawer {
      position: absolute !important;
      top: 100% !important;
      height: 350px !important;
      overflow: hidden;
    }
    .form__group-1 {
      width: 95%;
    }
    .form__field-1 {
      font-size: 1.3rem;
    }
    .search-result-div {
      font-size: 1.3rem;
    }
    .theestdfulllogo {
      height: 60px;
  }
  }


`;
export default SearchWrapper;