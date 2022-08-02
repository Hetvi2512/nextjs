import styled from "styled-components";

const StyleWrapper = styled.div`
.footer-main-div-0{
padding-left:2%;
padding-right:2%;
padding-top:2%;
}
.footer-part-1{
  background-color:black;
  color:white;
  display: flex;
  justify-content: space-between;
}
.s-icon-div > div{
  margin-left:30px;
}
.s-icon-div > div> img{
  height:30px;
}
.footer-cat{
  padding-top:10px;
  display:flex;
  justify-content:center;
}
.footer-cat > div{
  font-family: 'Biotif-Regular';
 margin-right:20px;
}
.footer-bottom-pages{
  width:80%;
}

.footer-part-2{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.footer-estd-logo{
  width:400px;
}
.footer-cat > div{
  font-size:16px;
}
.footer-bottom-pages > div{
  font-size:14px;
}
.footer-com-div{
  margin-right:0 !important;
}
@media (max-width: 992px) {
.footer-part-2{
  display:block;
}
.footer-part-1{
  display:block;
}
.footer-estd-logo-main{
  text-align:center;
}
.s-icon-div{
  margin-top:20px;
  justify-content:center;
}
.footer-bottom-pages{
  justify-content:center;
  width:100%;
}
.footer-part-2 > div{
  margin-top:10px;
  text-align:center;
}
}
@media(min-width:320px) and (max-width:480px){
  .footer-estd-logo{
    width:250px;
  }
  .footer-cat{
    display:none;
  }
  .footer-theestd{
    display:none;
  }
  .footer-cat > div{
    font-size:8px;
  }
  .footer-bottom-pages{
    margin-bottom:10px;
  }
  .footer-bottom-pages > div{
    font-size:11px;
  }
  .footer-main-div-0{
    padding-top:5%;
    }
    .s-icon-div > div> img{
      height:20px;
    }
    .s-icon-div > div{
      margin-left:0px;
      margin-right:20px;
    }

}
@media(min-width:481px) and (max-width:775px){
  .footer-estd-logo{
    width:300px;
  }
  .footer-cat > div{
    font-size:10px;
  }
  .footer-bottom-pages > div{
    font-size:10px;
  }
.footer-theestd{
  font-size:14px;
}
}









.text-underline {
  text-decoration: underline !important;
}
  .border-black {
    border: 2px solid black;
  }
  .footer-text {
    font-size: 15px;
  }
  .email-text {
    font-size: 30px;
  }
  .input-text {
    font-size: 28px;
  }
  .icon-height {
    height: 40px;
  }
  .the-established{
    font-weight: 700;
    color: #e63554;
    position:relative;
    bottom:100px;
    padding-left:3%;
  }
  .sub-established{
    display:flex;
    font-size:22px;
  }
  .style-margin{
    margin-left:0%
  }
  .copyrights{
    justify-content:flex-end;
  }
  .newsletter{
    font-size:22px;
  }
  .footer-data{
    display:flex;
    justify-content:flex-end;
  }
  .form__group {
    position: relative;
    margin-top: 10px;
    width: 80%;
    margin-bottom:10px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: #58595B;
    }

    .arrow-input{
      position:relative:
      right:20px;
      top:10px;
    }

    .text-list{
      display:flex;
      justify-content:flex-end;
    }

  @media (min-width: 970px) and (max-width: 1900px) {
    .footer-pad {
      padding-top: 45px;
    }
  }
  @media (min-width: 970px) and (max-width: 1900px) {
    .footer-pad-new {
      padding-top: 45px;
    }
  }
  @media (min-width: 970px) and (max-width: 1235px) {
    .footer-text {
      font-size: 19px;
    }
  }
  @media (max-width: 970px) {
    .padding-bottom {
      padding-bottom: 15px;
    }
    .footer-text {
      font-size: 17px;
    }
    .email-text {
      font-size: 20px;
    }
  }
  @media (max-width: 992px) {
    .footer {
      margin-top: 2%;
      margin-bottom: 2%;
    }

    .texts {
      text-align: center !important;
    }
    .copyrights{
      justify-content:center;

    }
  }
  @media (max-width: 745px) {
    .text-list {
      flex-direction: column;
      text-align: center;
    }
    .remove-padding {
      padding-right: 0px !important;
    }

  }


  @media(min-width:320px) and (max-width:375px){
    .the-established{
      text-align:center;
      bottom:10px !important;
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:12px;
    }
    .copyrights{
      justify-content:center;
    }
    .input-field-view{
      display:flex;
      justify-content:center;
    }
    .newsletter{
      font-size:12px;
      text-align:center;
    }
  }
  @media(min-width:375px) and (max-width: 500px) {
    .the-established{
      text-align:center;
      bottom:10px;
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:14px;
    }
  }
  @media(min-width:500px) and (max-width: 768px) {
    .the-established{
      font-weight: 700;
      color: #ff003d;
      text-align:center;
    }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:19px;
    }
  }

  @media(min-width:768px) and (max-width:970px){
      .the-established{
        text-align:center;
        bottom:10px;
      }
    .sub-established{
      display:flex;
      justify-content:center;
      font-size:30px;
    }
    .copyrights{
    justify-content: center !important;
  }
  }
  @media(min-width:1024px) and (max-width:1200px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
      padding-right:10%;
      bottom:90px;
    }
    .sub-established{
      display:flex;
      font-size:19px;
    }
  }
  @media(min-width:1200px) and (max-width:1400px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
    }
    .sub-established{
      display:flex;
      font-size:23px;
    }
  }
  @media(min-width:1400px) and (max-width: 1500px){
    .the-established{
      font-weight: 700;
      color: #ff003d;
    }
    .sub-established{
      display:flex;
      font-size:28px;
    }
  }
`;

export default StyleWrapper;
