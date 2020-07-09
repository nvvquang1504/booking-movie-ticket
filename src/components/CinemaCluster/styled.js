import styled from 'styled-components'

export const StyledCinemaCluster = styled.div`
  @media only screen and (max-width: 576px) {
    padding-top: 60px;
    margin-top: -60px;
    .listCuster {
      justify-content: center !important;
      & .system-name {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    padding-top: 60px;
    margin-top: -60px;
    .listCuster {
      justify-content: center !important;
      & .system-name {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding-top: 60px;
    margin-top: -60px;
    .listCuster {
      justify-content: flex-start !important;
      & .system-name {
        display: inline-block;
      }
    }
  }
  .container-cinema-cluster {
    .list-group {
      height: 500px;
      background-color: white;
      overflow: scroll;
      img.cluster-logo {
        width: 50px;
      }
    }
    .activeCluster {
      background-color: #f8f9fa;
      font-weight: 700;
    }
    .normalCluster {
      background-color: white;
      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
`
