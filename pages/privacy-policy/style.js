import styled from 'styled-components';
const PrivacyWrapper = styled.div`
.privacy-policy-background{
    background-color: #ff003d;
}
h3{
    font-family: "Biotif-Light";
    color:white;
    margin-bottom:6%;
    margin-top:6%;
}
p{
    margin-bottom:3%;
    font-family: "Biotif-Light";
    line-height:1.06;
}
.privacy-policy{
    font-size: 100px;
    font-family: 'InterstateCompressed-Bold';
    font-style:italic;
    text-align:center;
    color: #fff;
    line-height:0.9;
}
.privacy-policy-description{
    font-size: 26px;
    padding-right: 10%;
    padding-left: 10%;
    padding-top: 2%;
    color:#fff;
}
.privacy-policy-description > p{
    line-height:1.78;
}

@media(min-width:300px) and (max-width:480px){
    .privacy-policy{
        font-size:45px;
        margin-top:10%;
    }
    .privacy-policy-description{
    font-size: 16px;
    padding-right: 10%;
    padding-top: 0%;
    padding-left:10%;
    color:#fff;
    }
}
@media(min-width:481px) and (max-width:767px){
    .privacy-policy{
        font-size:45px;
        margin-top:10%;
    }
    .privacy-policy-description{
    font-size: 16px;
    padding-right: 10%;
    padding-top: 0%;
    padding-left:10%;
    color:#fff;
    }
}

@media(min-width:768px) and (max-width:1024px){
    .privacy-policy{
        font-size:55px;
        display:flex;
        justify-content:center;
        padding-left:0%;
        padding-top:5%;
    }
    .privacy-policy-description{
    font-size: 16px;
    padding-right: 10%;
    padding-top: 4%;
    color:#fff;
    }
}
@media(min-width:1025px) and (max-width:1200px){
    .privacy-policy{
        font-size:65px;
        display:flex;
        justify-content:center;
        padding-left:0%;
    }
    .privacy-policy-description{
    font-size: 18px;
    padding-right: 10%;
    color:#fff;
    padding-top:2%;
    }
}
@media(min-width:1201px) and (max-width:1440px){
    .privacy-policy{
        font-size:80px;
        display:flex;
        justify-content:center;
        padding-left:0%;
    }
    .privacy-policy-description{
    font-size: 20px;
    padding-right: 10%;
    color:#fff;
    padding-top:2%;
    }
}

@media(min-width:1441px) and (max-width:1740px){
    .privacy-policy{
        font-size:90px;
        display:flex;
        justify-content:center;
        padding-left:0%;
    }
    .privacy-policy-description{
    font-size: 22px;
    padding-right: 10%;
    color:#fff;
    padding-top:2%;
    }
}
`

export default PrivacyWrapper;