import styled from "styled-components";

const StyledLogin = styled.div`
  & input:focus {
    box-shadow: 0 0 0 0 !important;
  }

  background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

  & .container {
    height: 100%;
    align-content: center;

    & .card {
      height: 370px;
      margin-top: auto;
      margin-bottom: auto;
      width: 400px;
      background-color: rgba(0, 0, 0, 0.5) !important;

      & .card-header {
        text-align: left;
        & h3 {
          color: white;
        }

        & .social_icon {
          position: absolute;
          right: 20px;
          top: -45px;

          & span {
            font-size: 60px;
            margin-left: 10px;
            color: #FFC312;
          }

          & :hover {
            color: white;
            cursor: pointer;
          }
        }

      }

      & .card-body {
        & .form-group {
          & .input-group-prepend {
            & span {
              width: 50px;
              background-color: #FFC312;
              color: black;
              border: 0 !important;
            }
          }
          & .login_btn{
            color: black;
            background-color: #FFC312;
            width: 100px;
            & :hover{
              color: black;
              background-color: white;
            }
          }
        }
        & .remember{
          color: white;
          & input {
            width: 20px;
            height: 20px;
            margin-left: 15px;
            margin-right: 5px;
          }
        }
      }
      & .card-footer{
        & .links{
          color: white;
          & a{
            margin-left: 4px;
          }
        }
      }


    }
  }
`
export {StyledLogin}