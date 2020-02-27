import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import './app.css';

export default class App extends Component {
  state = { username: null, document: ReactDOM.findDOMNode(this.refs.main) };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    // include script 
    const script = document.createElement("script");
  
    script.src = `./src/client/habibiScript.js`;
    script.async = true;

    document.body.appendChild(script);

    //include vk
    // const vk = document.createElement("script");
  
    // vk.src = "https://vk.com/js/api/xd_connection.js?2";
    // vk.async = true;

    // document.body.appendChild(vk)


    // bridge.send("VKWebAppShowOrderBox", {type:"item",item:"item_id_123"})
    //     .then(data => console.log(data.status))
    //     .catch(error => console.log(error));
  }

  render() {
    const { username } = this.state;

    return (
      <div ref='main'>
      <div className="admin-cp">
        <button className="admin-cp-button" type="button" name="button">Скрыть / Показать Панель</button>
        <div className="admin-cp-items hidden">
          <label className="vzbltyLabel" htmlFor="splashPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="splashPageToggle" />Страница загрузки
          </label>
          <label className="vzbltyLabel" htmlFor="gameMenuPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="gameMenuPageToggle" defaultChecked="checked" />Страница меню игры
          </label>
          <label className="vzbltyLabel" htmlFor="aboutPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="aboutPageToggle" />Страница инфомарции
          </label>
          <label className="vzbltyLabel" htmlFor="tutorialPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="tutorialPageToggle" />Страница обучения
          </label>
          <label className="vzbltyLabel" htmlFor="playDelayPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="playDelayPageToggle" />Страница задержки
          </label>
          <label className="vzbltyLabel" htmlFor="playAreaPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="playAreaPageToggle" />Страница игрового поля
          </label>
          <label className="vzbltyLabel" htmlFor="pauseMenuPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="pauseMenuPageToggle" />Страница меню паузы
          </label>
          <label className="vzbltyLabel" htmlFor="youLostPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="youLostPageToggle" />Страница проигрыша
          </label>
          <label className="vzbltyLabel" htmlFor="levelPassedPageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="levelPassedPageToggle" />Страница прохождения
          </label>
          <label className="vzbltyLabel" htmlFor="scoreTablePageToggle">
            <input type="radio" name="pT" className="toggleCheckbox" id="scoreTablePageToggle" />Страница таблицы рекордов
          </label>
        </div>
      </div>
      <div className="main-wrapper">
        {/* SPLASH/LOADING PAGE */}
        <div id="pageSplash" className="page-cont page-splash page-faded-bg">
          <div className="fixed-75w-wrapper">
            <div id="splashScreenLogo" className="tpbl-circle c-white splash-screen-logo" />
            <div id="splashScreenTxt">
              Загрузка
            </div>
          </div>
        </div>
        {/* GAME MENU PAGE */}
        <div id="pageGameMenu" className="page-cont page-game-menu page-faded-bg">
          <div className="fixed-75w-wrapper">
            <div className="gm-menu-header-cont">
              <div className="tpbl-circle c-blue gm-menu-logo-bg" />
              <h1 className="gm-menu-title">Tap Tap Tap</h1>
              <h2 className="gm-menu-subtitle">Каждый Tap Имеет Значение</h2>
            </div>
            <button id="newGameBtn" className="gm-btn btn-blue" type="button" name="button">Новая Игра</button>
            <button id="scoresTableButton" className="gm-btn" type="button" name="button">Таблица рекордов</button>
            <button id="aboutBtn" className="gm-btn" type="button" name="button">Информация</button>
          </div>
        </div>
        {/* ABOUT PAGE */}
        <div id="pageAbout" className="page-cont page-about page-faded-bg anmtd-grdnt-bg blu-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div className="info-screen-ttl-txt-bld">Информация</div>
            </div>
            <div className="info-screen-txt-cont">
              <div>Разработчики:</div>
              <a className="txt-bold">Mikhailushka &amp; kirillvlom</a>
              <hr />
              <div>Дань уважения:</div>
              <div className="credits-cont">
                <ul className="credits-list">
                  <li>Mahdi Farra</li>
                  <li>Nour Abu Saud
                  </li><li>Ahmed El Gabri</li>
                  <li>Gustavo Siqueira</li>
                  <li>Eduardo Abreu</li>
                  <li>Michael Rurka</li>
                  <li>Kolton Gagnon</li>
                  <li>Philip Rurka</li>
                </ul>
              </div>
            </div>
            <div id="abtPageBackBtn" className="tpbl-circle c-white submit-circle" />
          </div>
        </div>
        {/* NEW HIGH SCORE PAGE */}
        <div id="pageHighScore" className="page-cont page-high-score page-faded-bg anmtd-grdnt-bg rd-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div className="info-screen-icon you-lost-icon" />
              <div className="info-screen-ttl-txt-bld">Игра окончена</div>
              <div>Вы проиграли</div>
            </div>
            <div className="info-screen-txt-cont">
              <div className="info-screen-body-txt-reg">Счет</div>
              <div id="lvlLostNewHighScore" className="lvl-fnshd-score-nmb">86</div>
              <div className="info-screen-body-txt-reg">Новый рекорд</div>
              <div className="lvl-fnshd-highscore-icon" />
            </div>
            <div className="sbmt-tryagain-txt">Еще раз?</div>
            <div className="tpbl-circle c-white submit-circle" />
          </div>
        </div>
        {/* SCORES TABLE PAGE */}
        <div id="pageScoresTable" className="page-cont page-high-score page-faded-bg anmtd-grdnt-bg rd-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div className="info-screen-ttl-txt-bld">Таблица рекордов</div>
              <div>Ваш личный рекорд: 123</div>
            </div>
            <div className="info-screen-txt-cont">
              <div className="lvl-fnshd-score-nmb">Друг 1: 123</div>
              <div className="lvl-fnshd-score-nmb">Друг 2: 123</div>
              <div className="lvl-fnshd-score-nmb">Друг 3: 123</div>
              <div className="lvl-fnshd-score-nmb">Друг 4: 123</div>
              <div className="lvl-fnshd-score-nmb">Друг 5: 123</div>
              <div className="lvl-fnshd-highscore-icon" />
            </div>
            <div id="scrPageBackBtn" className="tpbl-circle c-white submit-circle" />
          </div>
        </div>
        {/* GAME TUTORIAL PAGE */}
        <div id="pageTutorial" className="page-cont page-tutorial page-faded-bg">
          <div className="fixed-100w-wrapper">
            <div id="tutPgStartGameBtn" className="tpbl-circle c-blue tut-circle" />
            <div className="tut-arrow" />
            <h2 className="tut-text">TAP по кругу<br />что бы начать</h2>
          </div>
        </div>
        {/* PLAY DELAY PAGE */}
        <div id="pagePlayDelay" className="page-cont page-play-delay page-faded-bg">
          <div id="palyDelayCont" className="fixed-75w-wrapper">
            <div className id="playDelayNum">
              3
            </div>
          </div>
        </div>
        {/* GAME PLAY AREA PAGE */}
        <div id="pagePlayArea" className="page-cont page-play-area">
          <div className="game-stats-cont">
            {/* time progress bar */}
            <div id="gmStatsTimeProgress" className="gm-stats-time-progress" />
            <div className="gm-stats-wrapper">
              {/* pause button */}
              <div className="gm-stats-vcont">
                <button id="gmStatsPauseBtn" className="gm-stats-pause-button" />
              </div>
              {/* score */}
              <div className="gm-stats-vcont">
                <div className="stat-wrapper">
                  <div className="gm-stats-title">Счет</div>
                  <div id="gmStatsScore" className="gm-stats-value">2894</div>
                </div>
              </div>
              {/* level number */}
              <div className="gm-stats-vcont">
                <div className="stat-wrapper text-align-right">
                  <div id="gmStatsLvlNumb" className="gm-stats-title">Уровень 7</div>
                  <div className="gm-stats-value">
                    <span id="gmStatsCurrentTapCount" className="gm-stats-tap-count">16</span>
                    <span id="gmStatsTotalTapCount">/20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="gameSpace" className="game-space">
            {/* Where the magic happens */}
            {/* <div class="tpbl-circle c-blue"></div> */}
            {/* <div class="tpbl-circle c-red"></div> */}
          </div>
        </div>
        {/* GAME PAUSE PAGE */}
        <div id="pagePauseMenu" className="page-cont page-pause-menu page-faded-bg anmtd-grdnt-bg blu-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div className="info-screen-icon puz-icon" />
              <div className="info-screen-ttl-txt-bld">Пауза</div>
            </div>
            <div className="info-screen-txt-cont">
              <div className="info-screen-body-txt-reg">Счет</div>
              <div id="lvlPausedScore" className="lvl-fnshd-score-nmb">521</div>
            </div>
            <div className="puz-menu-btnz-cont">
              <button id="pmCntnuGmBtn" className="gm-btn btn-blue">Продолжить</button>
              <button id="pmRstrtLvlBtn" className="gm-btn pm-rstrt-lvl-btn">Заново</button>
            </div>
          </div>
        </div>
        {/* YOU LOST PAGE */}
        <div id="pageYouLost" className="page-cont page-you-lost page-faded-bg anmtd-grdnt-bg rd-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div id="lvlLostIcon" className="info-screen-icon you-lost-icon" />
              <div className="info-screen-ttl-txt-bld">Игра окончена</div>
              <div id="lvlLostTtl">Вы проиграли</div>
            </div>
            <div className="info-screen-txt-cont">
              <div className="info-screen-body-txt-reg">Счет</div>
              <div id="lvlLostScore" className="lvl-fnshd-score-nmb">746</div>
              {/* <div class="info-screen-body-txt-reg">Best Score</div>
        <div id="lvlLostBestScore" class="lvl-fnshd-score-nmb">146</div> */}
            </div>
            <div className="sbmt-tryagain-txt">Еще раз?</div>
            <div id="lvlLostTryAgainBtn" className="tpbl-circle c-white submit-circle" />
          </div>
        </div>
        {/* LEVEL PASSED PAGE */}
        <div id="pageLevelPassed" className="page-cont page-level-passed page-faded-bg anmtd-grdnt-bg grn-grdnt-bg no-bg">
          <div className="fixed-75w-wrapper">
            <div className="info-screen-title-cont">
              <div className="info-screen-icon flag-icon" />
              <div id="lvlPssdTtl">Уровень 2</div>
              <div className="info-screen-ttl-txt-bld">Пройден</div>
            </div>
            <div className="info-screen-txt-cont">
              <div className="info-screen-body-txt-reg">Счет</div>
              <div id="lvlPssdScore" className="lvl-fnshd-score-nmb">521</div>
              <div id="lvlPssdBonusScore" className="grow-animation" />
            </div>
            <div id="lvlPssdContinueNextLvlBtn" className="tpbl-circle c-white submit-circle" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
