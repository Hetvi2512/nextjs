import styled from "styled-components";

const StyleWrapper = styled.div`
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
    font-size: 15px;
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

export default StyleWrapper;
