import styled from 'styled-components';

const AboutUsWrapper = styled.div`

.about-us-background{
    background-color: #ff003d;
}
.aboutus-main-div{
    background-color: #ff003d;
    padding-bottom:10%;
}
.about-us{
    line-height:1;
    font-size: 100px;
    font-family: 'InterstateCompressed-Bold';
    padding-left: 10%;
    font-style:italic;
    color: #fff;
}
.about-us-description{
    font-size: 30px;
    padding-right: 10%;
    color:#fff;
}
.about-us-description > div{
    margin-bottom:3%;
}
.about-us-grid{
    grid-template-columns:auto auto;
    grid-column-gap:20px;
}
.team-member{
    font-size:30px;
}
.member-designation{
    font-size:20px;
}
.about-us-mobile-view{
    display:none;
}

@media(min-width:320px) and (max-width:480px){
    .about-us-mobile-view{
        display:block;
    }
    .about-us-web-view{
        display:none;
    }

    .about-us{
        font-size:50px;
        display:flex;
        justify-content:center;
        padding-left:0%;
        padding-top:10%;
        padding-bottom:5%;
    }
    .about-us-description{
    font-size: 15px;
    padding-right: 10%;
    // padding-top: 4%;
    padding-left:10%;
    color:#fff;
    }
    .team-member{
    font-size:20px;
    display: flex;
    justify-content:center
    }
    .member-designation{
        font-size:14px;
        display: flex;
    justify-content:center
    }
}
@media(min-width:481px) and (max-width:767px){
    .about-us{
        font-size:50px;
        display:flex;
        justify-content:center;
        padding-left:0%;
        padding-top:10%;
        padding-bottom:5%;
    }
    .about-us-description{
    font-size: 15px;
    padding-right: 10%;
    // padding-top: 4%;
    padding-left:10%;
    color:#fff;
    }
    .team-member{
    font-size:20px;
    display: flex;
    justify-content:center
    }
    .member-designation{
        font-size:16px;
        display: flex;
    justify-content:center
    }
}

@media(min-width:768px) and (max-width:1024px){
    .about-us{
        font-size:50px;
        padding-left:5%;
        padding-top:0%;
    }
    .about-us-description{
    font-size: 18px;
    padding-right: 10%;
    // padding-top: 4%;
    color:#fff;
    }
    .team-member{
    font-size:20px;
    }
    .member-designation{
        font-size:16px;
    }
}
@media(min-width:1025px) and (max-width:1200px){
    .about-us{
        font-size:60px;
        padding-left:10%;
    }
    .about-us-description{
    font-size: 20px;
    padding-right: 10%;
    color:#fff;
    // padding-top:2%;
    }
    .team-member{
    font-size:20px;
    }
    .member-designation{
        font-size:16px;
    }
}
@media(min-width:1201px) and (max-width:1440px){
    .about-us{
        font-size:80px;
        padding-left:10%;
    }
    .about-us-description{
    font-size: 30px;
    padding-right: 10%;
    color:#fff;
    // padding-top:2%;
    }
    .team-member{
    font-size:20px;
    }
    .member-designation{
        font-size:16px;
    }
}

@media(min-width:1441px) and (max-width:1750px){
    .about-us{
        font-size:80px;
        padding-left:10%;
    }
    .about-us-description{
    font-size: 30px;
    padding-right: 10%;
    color:#fff;
    // padding-top:2%;
    }
    .team-member{
    font-size:20px;
    }
    .member-designation{
        font-size:16px;
    }
}

`;

export default AboutUsWrapper;