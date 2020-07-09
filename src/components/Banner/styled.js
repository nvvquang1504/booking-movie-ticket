import styled from "styled-components";

export const BannerStyled = styled.div`
  @media only screen and (min-width: 576px) {
    .banner-img {
      height: 60vh;
      & img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .banner-img {
      height: 70vh;
    }
  }
  @media only screen and (min-width: 1600px) {
    .banner-img {
      height: 80vh;
      & img {
        height: 100%;
        width: 100%;
      }
    }
  }
`
