import React from "react";
import wellbexLogo from "./images/welbex_logo.png";
import wellbexName from "./images/wellbex_name.png";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WellbexHomePageContainer from "./styles/Homepage";
function Homepage() {
  return (
    <WellbexHomePageContainer>
      <div className="wellbex__homepage__purple__ball"></div>
      <div className="wellbex__homepage__red__ball"></div>
      <div className="wellbex__homepage__red__ball__small"></div>
      <div className="wellbex__homepage__left__gradient"></div>
      <div className="wellbex__homepage__top__gradient"></div>
      <div className="wellbex__homepage__wrapper">
        <div className="wellbex__homepage__header">
          <header>
            <div className="wellbex__homepage__header__navbar">
              <div className="wellbex__homepage__header__navbar__logos">
                <img src={wellbexLogo} alt="wellbex_logo" />
                <img src={wellbexName} alt="wellbex__name" />
              </div>

              <div className="wellbex__homepage__header__navbar_menu">
                <nav>
                  <ul>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    <li>Сертификаты</li>
                  </ul>
                </nav>
              </div>

              <div className="wellbex__homepage__header__navbar_contact">
                <address>+7 555 555-55-55</address>
                <WifiCalling3Icon />
                <TelegramIcon />
                <WhatsAppIcon />
              </div>
            </div>
            <div className="wellbex__homepage__header_address">
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
          </header>
        </div>

        <div className="wellbex__homepage__body">
          <div className="wellbex__homepage__body__left_side">
            <h2>
              Зарабатывайте <br /> больше
            </h2>
            <h3>с WELBEX</h3>
            <p>
              Развиваем и контролируем <br /> продажи за вас
            </p>
          </div>

          <div className="wellbex__homepage__body__right_side">
            <div className="wellbex__homepage__body__right_side_head">
              <h3>
                Вместе с <b>бесплатной консультацией</b> мы дарим:
              </h3>
            </div>
            <div className="wellbex__homepage__body__right_side_grid">
              <div className="gird_item">
                <h5>Виджеты</h5>
                <p>
                  30 готовых <br /> решений
                </p>
              </div>
              <div className="gird_item">
                <h5>Dashboard</h5>
                <p>
                  с показателями <br /> вашего бизнеса
                </p>
              </div>
              <div className="gird_item">
                <h5>Skype Аудит</h5>
                <p>
                  отдела продаж <br /> и CRM системы
                </p>
              </div>
              <div className="gird_item">
                <h5>35 дней</h5>
                <p>
                  использования <br /> CRM
                </p>
              </div>
            </div>
            <div className="wellbex__homepage__body__right_side_button">
              <button>Получить консультацию</button>
            </div>
          </div>
        </div>

        <div className="wellbex__homepage__footer">
          <footer>
            <div className="wellbex__homepage__footer__flex">
              <div className="wellbex__homepage__footer_about_company">
                <h5>О компании</h5>
                <ul>
                  <li>Партнёрская программа</li>
                  <li>Вакансии</li>
                </ul>
              </div>

              <div className="wellbex__homepage__footer_menu">
                <h5>Меню</h5>
                <div className="footer__menu_flex">
                  {/* <div className="footer__menu__left"> */}
                  <ul>
                    <li>Расчёт стоимости</li>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Наши клиенты</li>
                  </ul>
                  {/* </div> */}
                  {/* <div className="footer__menu__right"> */}
                  <ul>
                    <li>Кейсы</li>
                    <li>Благодарственные письма</li>
                    <li>Сертификаты</li>
                    <li>Блог на Youtube</li>
                    <li>Вопрос / Ответ</li>
                  </ul>
                  {/* </div> */}
                </div>
              </div>

              <div className="wellbex__homepage__footer_contact">
                <h5>Контакты</h5>
                <address>+7 555 555-55-55</address>
                <div className="footer__contact__icons">
                  <TelegramIcon />
                  <WifiCalling3Icon />
                  <WhatsAppIcon />
                </div>
                <address>Москва, Путевой проезд 3с1, к 902</address>
              </div>
            </div>
            <div className="wellbex__homepage__footer__copyright">
              <span>©WELBEX 2022. Все права защищены</span>
              <p>Политика конфиденциальности</p>
            </div>
          </footer>
        </div>
      </div>
    </WellbexHomePageContainer>
  )
}
export default Homepage;
