import styled from "styled-components";

export const FooterStyled = styled.div`
  #footer {
    @background_color_1: transparent;
    padding: 40px 0;
    & h5 {
      padding-left: 10px;
      border-left: 3px solid #eeeeee;
      padding-bottom: 6px;
      margin-bottom: 20px;
      color: #ffffff !important;
    }
    & a {
      color: #ffffff !important;
      text-decoration: none !important;
      background-color: @background_color_1;
      -webkit-text-decoration-skip: objects;
    }
    & ul {
      &.social {
        & li {
          padding: 3px 0;
          & a {
            color: #ffffff !important;
            & .social-icon {
              margin-right: 5px;
              font-size: 25px;
              -webkit-transition: .5s all ease;
              -moz-transition: .5s all ease;
              transition: .5s all ease;
            }
            &:hover {
              color: #eeeeee;
            }
          }
          &:hover {
            & a {
              & .social-icon {
                font-size: 30px;
                margin-top: -10px;
              }
            }
          }
        }
      }
    }
    & ul {
      &.quick-links {
        & li {
          padding: 3px 0;
          -webkit-transition: .5s all ease;
          -moz-transition: .5s all ease;
          transition: .5s all ease;
          & a {
            color: #ffffff !important;
            & .quick-links-icon {
              margin-right: 5px;
            }
          }
          &:hover {
            padding: 3px 0;
            margin-left: 5px;
            font-weight: 700;
            & a {
              & .quick-links-icon {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    #footer {
      h5 {
        padding-left: 0;
        border-left: transparent;
        padding-bottom: 0px;
        margin-bottom: 10px;
      }
    }
  }
`