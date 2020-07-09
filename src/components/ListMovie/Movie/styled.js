import styled from "styled-components";

export const StyledMovie = styled.div`
  & .movie-card-wrapper {
    & .movie-card {
      & .ant-card-body {
        padding: 15px;
      }

      & .ant-card-cover {

        & .overlay-opacity {
          & .anticon-play-circle {
            display: none;
          }
        }
      }
    }

    &:hover {
      & .ant-card-cover {
        & .overlay-opacity {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient(to top, rgb(0, 0, 0), transparent 100%);
          background-size: cover;
          opacity: 1;
          height: 300px;
          width: 100%;
          color: whitesmoke;

          & .anticon-play-circle {
            display: inline-block;

            &:hover {
              & svg {
                opacity: .7;
              }
            }

            & svg {
              width: 50px;
              height: 50px;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  
`