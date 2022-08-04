import styled from 'styled-components';
const PartnerWithUsWrapper = styled.div`
.partner-background{
    background-color: #ff003d;
}
.partner-title{
    font-size: 100px;
    font-family: 'InterstateCompressed-Bold';
    font-style:italic;
    color: #fff;
    line-height:0.9;
    padding-top:8%;
    padding-bottom:0;
    text-align:center;
}
.partner-description{
    font-size: 26px;
    padding-top: 4%;
    color:#fff;
    line-height:1.78;
    padding-left: 10%;
    padding-right: 10%;
}
.partner-with-us-main > div{
    font-size:26px;
    margin-bottom:3%;
}
.partner-with-us-main > div > div{
    font-size:25px;
    margin-bottom:2%;
}
@media(min-width:320px) and (max-width:480px){
    .partner-title{
        font-size:45px;
        line-height:100px;
    }
    .partner-with-us-main > div{
        font-size:16px;
        margin-bottom:5%;
    }
    .partner-with-us-main > div > div{
        font-size:16px;
        margin-bottom:3%;
    }

}
@media(min-width:481px) and (max-width:767px){
    .partner-title{
        font-size:45px;
        line-height:100px;
    }
    .partner-with-us-main > div{
        font-size:16px;
        margin-bottom:5%;
    }
    .partner-with-us-main > div > div{
        font-size:16px;
        margin-bottom:3%;
    }

}

@media(min-width:768px) and (max-width:1024px){
    .partner-title{
        font-size:55px;
        line-height:100px;
    }
    .partner-with-us-main > div{
        font-size:18px;
        margin-bottom:5%;
    }
    .partner-with-us-main > div > div{
        font-size:18px;
        margin-bottom:3%;
    }
}
@media(min-width:1025px) and (max-width:1200px){
    .partner-title{
        font-size:65px;
        line-height:100px;
    }
    .partner-with-us-main > div{
        font-size:20px;
        margin-bottom:5%;
    }
    .partner-with-us-main > div > div{
        font-size:20px;
        margin-bottom:3%;
    }
}
@media(min-width:1201px) and (max-width:1740px){
    .partner-title{
        font-size:80px;
        line-height:100px;
    }
    .partner-with-us-main > div{
        font-size:24px;
        margin-bottom:5%;
    }
    .partner-with-us-main > div > div{
        font-size:24px;
        margin-bottom:3%;
    }
}
`;
export default PartnerWithUsWrapper;