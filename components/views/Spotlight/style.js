import styled from 'styled-components';

const SpotlightWrapper = styled.div`
.spotlight{
    margin-bottom:10%;
}
.spotlight-head {
        font-size: 191px;
        font-style:italic;
        line-height: 1.1;
        letter-spacing: -4.78px;
        margin-left:17.5%;
        color: #ff003d;
}
.spotlight-cat{
    margin-top:20px;
    margin-left:17.5%;
    font-size: 16px;
    line-height: 1.78;
    letter-spacing: 100;
    color: #ff003d;
}
.spotlight-index{
    margin-right:1%;
    margin-left:15%;
    font-size: 16px;
    letter-spacing: 0;
    color: #ff003d;
}
.spotlight-title{
    width:67%;
    font-size: 69px;
    font-style:italic;
    line-height: 1.06;
    letter-spacing: 0;
    margin-bottom:5px;
}
.neon{
    line-height:1;
    // padding-bottom:2%;
    display:flex;
    // align-items: center;
    color: white;
    font-style: italic;
    font-size: 69px;
    -webkit-text-stroke: 1px pink;
  }
  .spotlight-auth{
    margin-left:17.5%;
    margin-bottom:1.5%;
        font-size: 16px;
        line-height: 1;
        letter-spacing: normal;
        text-align: left;
        color: #ff003d;
  }
  .spotlight-border {
    height: 2px;
    border-bottom: 1px solid #a4a6a9;
    margin-left: 18%;
    margin-right: 16%;
}
@media(min-width:250px) and (max-width:480px){
    .spotlight-head {
        font-size: 50px;
        letter-spacing: 0px;
        margin:0;
        text-align:center;
}
.spotlight-cat{
    margin-left:8%;
    margin-top:10px;
    font-size:13px;
}
.spotlight-title{
    width:85%;
    font-size: 22px;
    line-height: 1.06;
    letter-spacing: 0;
}
.neon{
    display:block;
    font-size:22px;
}
  .spotlight-auth{
    margin-left:8%;
    font-size: 13px;
}
.spotlight-border {
    margin-left: 8%;
    margin-right: 5%;
}
.spotlight-index {
    margin-left: 5%;
}
}
@media(min-width:481px) and (max-width:768px){
.spotlight-head {
    font-size: 50px;
    letter-spacing: 0px;
}
.spotlight-cat{
    margin-top:10px;
}
.spotlight-title{
    width:67%;
    font-size: 25px;
    line-height: 1.06;
    letter-spacing: 0;
}
.neon{
    display:block;
    font-size:22px;
}
  .spotlight-auth{
    font-size: 12px;
}

}
@media(min-width:769px) and (max-width:1024px){
    .spotlight-head {
        font-size: 60px;
        letter-spacing: 0px;
}
.spotlight-cat{
    margin-top:12px;
}
.spotlight-title{
    width:67%;
    font-size: 24px;
}
.neon{
    font-size:24px;
}
  .spotlight-auth{
    font-size: 14px;
}
}
@media(min-width:1024px) and (max-width:1200px){
    .spotlight-head {
        font-size: 90px;
        letter-spacing: 0px;
}
.spotlight-cat{
    margin-top:16px;
}
.spotlight-title{
    width:67%;
    font-size: 40px;
    line-height: 1.06;
    letter-spacing: 0;
}
.neon{
    display:block;
    font-size:40px;
}
  .spotlight-auth{
    font-size: 16px;
}
}
@media(min-width:1200px) and (max-width:1440px){
    .spotlight-head {
        font-size: 90px;
        letter-spacing: 0px;
}
.spotlight-cat{
    margin-top:16px;
}
.spotlight-title{
    width:67%;
    font-size: 42px;
    line-height: 1.06;
    letter-spacing: 0;
}
.neon{
    font-size:42px;
}
  .spotlight-auth{
    font-size: 16px;
}

}
@media(min-width:1441px) and (max-width:1750px){
    .spotlight-head {
        font-size: 120px;
        letter-spacing: 0px;
}
.spotlight-cat{
    margin-top:16px;
}
.spotlight-title{
    width:67%;
    font-size: 50px;
    line-height: 1.06;
    letter-spacing: 0;
}
.neon{
    font-size:50px;
}
  .spotlight-auth{
    font-size: 16px;
}

}

`;

export default SpotlightWrapper;