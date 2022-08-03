import styled from "styled-components";

const SelfWrapper = styled.div`
.self-title{
    padding-top:6.5%;
    text-align:center;
}
.self-title-img{
    position:relative;
    height:200px;
}
.grid{
    display:grid;
    grid-template-columns:auto auto;
    grid-column-gap:50px;
    align-items:center;
}
.flex-1{
    margin-left:15%;
    margin-right:15%;
    display:flex;
    column-gap:4%;
    align-items:center;
    margin-bottom:40px;
}
.flex-1-all{
    width:50%;
}

.flex-2-all{
    width:50%;
}
.flex-2{
    display:flex;
    margin-left:15%;
    margin-right:15%;
    column-gap:4%;
    align-items:center;
}
.flex-2-1{
    // position:relative;
    // top:-75px;
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
    color:white;
}
.author{
    padding-top:15px;
    font-size:18px;
    line-height:1;
    letter-spacing:0;
    color:#ff003d;
}

@media(min-width:260px) and (max-width:480px){
    .self-title-img{
        position:relative;
        height:40px;
    }
    .flex-1-all{
        width:100%;
    }

    .flex-2-all{
        width:100%;
    }
    .flex-1{
        display:block;
        margin-left:5%;
    margin-right:5%;
        margin-bottom:5%;
    }
    .flex-2{
        display:block;
        margin-left:5%;
    margin-right:5%;
        margin-bottom:5%;
    }

    .flex-2-1{
        position:relative;
        top:0px;
    }
    .sub-category{
        padding-top:10px;
        font-size:13px;
    }
    .question{
        padding-top:7px;
        font-size:18px;
        line-height:1.3;
    }
    .author{
        padding-top:7px;
        font-size:13px;
        margin-bottom:20%
    }
}
@media(min-width:481px) and (max-width:768px){
    .self-title-img{
        position:relative;
        height:50px;
    }
    .flex-1-all{
        width:100%;
    }

    .flex-2-all{
        width:100%;
    }
    .flex-1{
        margin-left:15%;
        margin-right:15%;
        display:block;
        margin-bottom:5%;
    }
    .flex-2{
        margin-left:15%;
        margin-right:15%;
        display:block;
        margin-bottom:5%;
    }

    .flex-2-1{
        position:relative;
        top:0px;
    }
    .sub-category{
        padding-top:10px;
        font-size:12px;
    }
    .question{
        padding-top:7px;
        font-size:20px;
    }
    .author{
        padding-top:7px;
        font-size:12px;
        margin-bottom:10%;
    }
}
@media(min-width:769px) and (max-width:1023px){
    .self-title-img{
        position:relative;
        height:80px;
    }
    .sub-category{
        padding-top:10px;
        font-size:12px;
    }
    .question{
        padding-top:10px;
        font-size:18px;
    }
    .author{
        padding-top:10px;
        font-size:12px;
    }

}

@media(min-width:1024px) and (max-width:1200px){
    .self-title-img{
        position:relative;
        height:100px;
    }
    .flex-2-1{
        top:-50px;
    }
    .sub-category{
        padding-top:10px;
        font-size:12px;
    }
    .question{
        padding-top:10px;
        font-size:18px;
    }
    .author{
        padding-top:10px;
        font-size:12px;
    }
}

@media(min-width:1201px) and (max-width:1440px){
    .self-title-img{
        position:relative;
        height:120px;
    }
    .sub-category{
        padding-top:10px;
        font-size:14px;
    }
    .question{
        padding-top:10px;
        font-size:20px;
    }
    .author{
        padding-top:10px;
        font-size:15px;
    }
}

@media(min-width:1441px) and (max-width:1700px){
    .self-title-img{
        position:relative;
        height:150px;
    }
    .sub-category{
        padding-top:15px;
        font-size:14px;
    }
    .question{
        padding-top:15px;
        font-size:23px;
    }
    .author{
        padding-top:15px;
        font-size:18px;
    }
}
@media(max-width:768px){
        .grid{
            grid-template-columns:auto
        }
}

@media(min-width:1025px){
    .left-image{
        text-align:right;
    }
}

`

export default SelfWrapper;
