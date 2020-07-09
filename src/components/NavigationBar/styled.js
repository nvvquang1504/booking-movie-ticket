import styled from "styled-components";

export const NavBar = styled.div`
  @media only screen and (max-width: 576px) {
    #navbar {
      height: 60px;
      & .navbar-nav {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    #navbar {
      height: 60px;
      & .navbar-nav {
        display: none;
      }
    }
    
  }
  @media only screen and (min-width: 1200px) {
    #navbar {
      & .navbar-nav {
        display: flex;
      }
    }
    .navbar-collapse {
      justify-content: center;
      overflow: visible !important;
      & .nav-link {
        font-size: 1rem;
        color: whitesmoke;
        &:hover {
          color: red !important;
        }
      }
    }

    .navbar-secondary {

      & a {
        align-items: center;

        & .fa-user-circle {
          width: 30px;
          height: 30px;
        }

        & span {
          color: whitesmoke;
        }
      }
    }

    .activeNavLink {
      color: red !important;
    }

    .normalItem {
      color: white;

      &:hover {
        color: green !important;
      }
    }

    .actived-item {
      color: red !important;
    }

    .some-active-class {
      color: red !important;
    }

    .nav-others {
      font-weight: 700;
      font-size: 18px !important;
    }
  }


`
