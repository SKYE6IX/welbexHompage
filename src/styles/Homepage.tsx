import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face{
  font-family: 'Roboto';
  font-weight: normal;
  font-style: normal;
}
html{
    height: 100vh;
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
  }
  button{
    font-family: 'Roboto',sans-serif;
  }
`;

const WellbexHomePageContainer = styled.div`
  height: 100%;
  padding: 4em 10em 0rem 10rem;
  background-color: #1e1e1e;
  color: white;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 0.8em 0rem 0.5em;

  }
  .wellbex__homepage__left__gradient {
    position: absolute;
    width: 311px;
    height: 311px;
    background: #961a1a;
    opacity: 0.5;
    left: -102px;
    top: 251px;
    filter: blur(196px);
  }
  .wellbex__homepage__top__gradient {
    position: absolute;
    width: 259px;
    height: 259px;
    background: #833ab4;
    left: 602px;
    top: -154px;
    opacity: 0.5;
    filter: blur(196px);
  }
  .wellbex__homepage__red__ball {
    position: absolute;
    width: 83px;
    height: 83px;
    left: 600px;
    top: 110px;
    background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.536) 0%,
      rgba(212, 93, 93, 0.264) 59.67%,
      rgba(167, 49, 49, 0.248) 78.59%,
      rgba(130, 25, 25, 0.248) 100%
    );
    box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__red__ball__small {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    left: 900px;
    top: 520px;
    background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.48) 0%,
      rgba(212, 93, 93, 0.248) 59.67%,
      rgba(167, 49, 49, 0.264) 78.59%,
      rgba(130, 25, 25, 0.232) 100%
    );
    filter: blur(2.5px);
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__purple__ball {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 925px;
    top: -2px;
    background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(236, 208, 255, 0.64) 0%,
      rgba(161, 93, 207, 0.24) 59.67%,
      rgba(118, 49, 164, 0.208) 78.59%,
      rgba(86, 24, 128, 0.232) 100%
    );
    box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
    border-radius: 50%;
    filter: blur(5px);
    backdrop-filter: blur(2px);
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .wellbex__homepage__header {
    li,
    address {
      font-size: 1.2rem;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 300;
      }
    }
  }
  .wellbex__homepage__header__navbar {
    display: flex;
    align-items: center;
    gap: 5em;
  }
  .wellbex__homepage__header__navbar__logos {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__header__navbar_menu {
    ul {
      display: flex;
      gap: 0.8rem;
    }
  }
  .wellbex__homepage__header__navbar_contact {
    display: flex;
    gap: 1.5rem;
    margin-left: auto;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__header_address {
    width: 200px;
    p {
      margin: 0;
      color: rgba(228, 229, 234, 1);
      font-weight: 300;
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__body {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .wellbex__homepage__body__right_side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5em;
    width: 400px;
    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .wellbex__homepage__body__right_side_head {
    h3 {
      text-align: right;
      font-size: 1.5rem;
    }
    b {
      font-weight: 900;
      text-transform: uppercase;
      background: linear-gradient(#fcb045 100%, #fd1d1d 100%), #e4e5ea;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    @media (max-width: 768px) {
      h3 {
        text-align: left;
        font-size: 1.3rem;
      }
    }
  }

  .wellbex__homepage__body__right_side_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .gird_item {
      h5 {
        margin: 0.7rem 0;
        font-size: 1.3rem;
        font-weight: 500;
        text-transform: uppercase;
        text-align: right;
      }
      p {
        margin: 0;
        text-align: right;
        font-weight: 400;
        font-size: 1.1rem;
      }
      &:nth-child(odd) {
        margin-right: 0.5rem;
      }
      @media (max-width: 768px) {
        p {
          display: none;
        }
        h5 {
          font-size: 1rem;
        }
      }
    }
  }

  .wellbex__homepage__body__right_side_button {
    button {
      border: none;
      outline: none;
      background-color: #4077f3;
      color: white;
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .wellbex__homepage__body__left_side {
    width: 400px;
    h2,
    h3,
    p {
      margin: 0.8rem 0;
      font-size: 1.1rem;
      font-weight: 400;
    }
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
    h3 {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%),
        #e4e5ea;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .wellbex__homepage__footer {
    footer {
      display: flex;
      flex-direction: column;
    }
  }
  .wellbex__homepage__footer__flex {
    display: flex;
    justify-content: space-between;
    h5 {
      color: #656566;
    }
    li {
      margin-bottom: 0.8em;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .wellbex__homepage__footer_about_company {
    ul {
      padding: 0;
    }
  }
  .wellbex__homepage__footer_menu {
    .footer__menu_flex {
      display: flex;
      gap: 1.5em;
      ul {
        padding: 0;
        margin: 0;
      }
    }
  }
  .wellbex__homepage__footer_contact {
    text-align: right;
    address,
    .footer__contact__icons {
      margin-bottom: 0.8em;
    }
    @media (max-width: 768px) {
      text-align: left;
    }
  }
  .footer__contact__icons {
    display: flex;
    justify-content: flex-end;
    gap: 0.7em;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  .wellbex__homepage__footer__copyright {
    text-align: right;
    margin-left: auto;
    @media (max-width: 768px) {
      text-align: left;
      margin-left: 0;
    }
  }
`;

export default WellbexHomePageContainer;
