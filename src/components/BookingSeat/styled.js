import styled from 'styled-components'

export const StyledBookingSeat = styled.div`
  .wrapper {
    height: 100%;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-attachment: fixed;
    font-family: 'Source Sans Pro', sans-serif;
    padding-bottom: 60px;
    h1 {
      font-size: 2.9em;
      text-transform: uppercase;
      color: #fff;
      font-weight: 600;
      text-shadow: 4px 3px 1px rgba(0, 0, 0, 0.22);
      letter-spacing: 2px;
      text-align: center;
      margin: 0 20px 40px;
      font-family: 'Source Sans Pro', sans-serif;
      padding-top: 40px;
    }
    .container {
      display: -webkit-flex;
      display: -webkit-box;
      display: -moz-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      .mseat-reg {
        width: 80%;
        margin: 0 5vw;
        background: rgba(128, 128, 128, 0.34);
        padding: 3.5vw;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        .inputForm {
          h2 {
            color: #ff9800;
            text-transform: capitalize;
            margin-bottom: 25px;
            font-size: 1em;
            letter-spacing: 0.5px;
            line-height: 1.7;
          }
          .input-wrapper {
            align-items: center;
            margin: auto;
            .agileits-left {
              flex-basis: 60%;
              margin-bottom: 1.5em;
              label {
                font-size: 1em;
                color: #fff;
                font-weight: 600;
                span {
                  color: #f00;
                }
              }
              input[type='text'] {
                padding: 1em;
                width: 90%;
                background: transparent;
                border: 1px solid #888686;
                font-family: 'Source Sans Pro', sans-serif;
                font-size: 1em;
                margin-top: 10px;
                color: #fff;
              }
            }
            .agileits-right {
              flex-basis: 40%;
              margin-bottom: 1.5em;
              label {
                font-size: 1em;
                color: #fff;
                font-weight: 600;
                span {
                  color: #f00;
                }
              }
              input[type='number'] {
                padding: 1em;
                width: 80%;
                background: transparent;
                border: 1px solid #888686;
                font-family: 'Source Sans Pro', sans-serif;
                font-size: 1em;
                margin-top: 10px;
                color: #fff;
              }
            }
          }
          .start-select {
            background: #f5f5f5;
            border: none;
            color: #000;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 10px;
            font-size: 1em;
            letter-spacing: 1px;
            font-family: 'Source Sans Pro', sans-serif;
            cursor: pointer;
          }
        }
        .seat_mbt {
          margin: 2em 0;
          .smallBox {
            text-align: left;
            display: inline-block;
            margin-right: 1em;
            color: #fff;
            &.greenBox {
              &::before {
                content: "";
                background: Green;
                width: 15px;
                height: 15px;
                display: inline-block;
                margin-right: 10px;
              }
            }
            &.redBox {
              &::before {
                content: "";
                background: Red;
                width: 15px;
                height: 15px;
                display: inline-block;
                margin-right: 10px;
              }
            }
            &.emptyBox {
              &::before {
                content: "";
                background-color: lightgrey;
                width: 15px;
                height: 15px;
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
        .seatStructure {
          width: 100%;
          table {
            td {
              padding: 10px 10px;
              color: white;
              position: relative;
              vertical-align: middle;
              & .seat-status {
                width: 30px;
                height: 30px;
                border-radius: 5px;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                border: 3px solid #ff9800;
                box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, .3), 0px 1px 0px 0px rgba(255, 255, 255, .8);
                background-color: #ffffff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
              }
            }
          }
          .screen {
            width: 100%;
            background: #ff9800;
            margin: 2em 0;
            .wthree {
              padding: 0.8em;
              font-size: 1.2em;
              color: #000;
              text-transform: uppercase;
              font-weight: 600;
              letter-spacing: 7px;
              word-spacing: 10px;
            }
          }
        }
      }
    }
  }
`
