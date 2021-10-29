"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["async_home"],{

/***/ 2963:
/*!********************************************!*\
  !*** ./src/client/components/Page/Page.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _StyledPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledPage */ 5978);



var Page = function Page(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledPage__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, null, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 5978:
/*!**************************************************!*\
  !*** ./src/client/components/Page/StyledPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageWrapper": () => (/* binding */ PageWrapper)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 3349);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ 2213);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/styled-components/commons */ 4851);


var _templateObject;



var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background-color: ", ";\n    height: 80vh;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 20px;\n    width: 100%;\n"])), _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.colors.secondaryColor);

/***/ }),

/***/ 5949:
/*!*********************************************!*\
  !*** ./src/client/components/Page/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ 2963);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Page__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 2035:
/*!**************************************************!*\
  !*** ./src/client/components/Spinner/Spinner.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/styled-components/commons */ 4851);



var Spinner = function Spinner() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.ItemsDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ 9542:
/*!************************************************!*\
  !*** ./src/client/components/Spinner/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ 2035);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Spinner__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 934:
/*!*****************************************!*\
  !*** ./src/client/modules/Home/Home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 8270);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ 5949);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Spinner */ 9542);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/styled-components/commons */ 4851);
/* harmony import */ var _subcomponents_EventCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcomponents/EventCard */ 6868);
/* harmony import */ var _redux_slices_fetchEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/slices/fetchEvents */ 8401);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ 5514);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-bootstrap-grid */ 7376);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Home = function Home(_ref) {
  var leagueId = _ref.leagueId,
      leagueName = _ref.leagueName,
      teams = _ref.teams,
      numEvents = _ref.numEvents;
  var apiHasBeenCalled = false;
  var leagueEvents = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.fetchEvents.value;
  });
  var fiveMinutesInMs = 1000 * 60 * 5;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var getLeagueData = function getLeagueData() {
    dispatch((0,_redux_slices_fetchEvents__WEBPACK_IMPORTED_MODULE_6__.fetchEventsThunk)(leagueId));
  };

  var refineEvents = function refineEvents(events) {
    return events.map(function (event) {
      try {
        var strEvent = event.strEvent,
            strHomeTeam = event.strHomeTeam,
            strAwayTeam = event.strAwayTeam,
            intHomeScore = event.intHomeScore,
            intAwayScore = event.intAwayScore,
            dateEventLocal = event.dateEventLocal;

        if (!strEvent || !strHomeTeam || !strAwayTeam || !intHomeScore || !intAwayScore || !dateEventLocal) {
          return;
        }

        var homeTeam = teams.find(function (team) {
          return team.strTeam === event.strHomeTeam;
        });
        var homeTeamBadge = homeTeam.strTeamBadge;
        var awayTeam = teams.find(function (team) {
          return team.strTeam === event.strAwayTeam;
        });
        var awayTeamBadge = awayTeam.strTeamBadge;

        if (!homeTeamBadge || !awayTeamBadge) {
          return;
        }

        return _objectSpread(_objectSpread({}, event), {}, {
          homeTeamBadge: homeTeamBadge,
          awayTeamBadge: awayTeamBadge
        });
      } catch (_unused) {
        return;
      }
    }).filter(function (el) {
      return el !== undefined;
    }).slice(0, numEvents);
  };

  var renderLeagueEvents = function renderLeagueEvents(events) {
    var refinedEvents = refineEvents(events);

    if (!refinedEvents.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, null);
    }

    console.log('Home has rendered');
    return refinedEvents.map(function (ev, id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_subcomponents_EventCard__WEBPACK_IMPORTED_MODULE_5__.default, {
        key: id,
        homeTeamBadge: ev.homeTeamBadge,
        awayTeamBadge: ev.awayTeamBadge,
        strEvent: ev.strEvent,
        strHomeTeam: ev.strHomeTeam,
        strAwayTeam: ev.strAwayTeam,
        intHomeScore: ev.intHomeScore,
        intAwayScore: ev.intAwayScore,
        dateEventLocal: ev.dateEventLocal
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!apiHasBeenCalled) {
      getLeagueData();
      apiHasBeenCalled = true;
    }

    var interval = setInterval(function () {
      getLeagueData();
    }, fiveMinutesInMs);
    return function () {
      return clearInterval(interval);
    };
  }, []); // component renders twice without useMemo

  var memoizedLeagueEvents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return renderLeagueEvents(leagueEvents);
  }, [leagueEvents]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_4__.TitleH2, null, "The last 10 events of ", leagueName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__.Container, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__.Row, null, memoizedLeagueEvents)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 7807:
/*!**********************************************************************!*\
  !*** ./src/client/modules/Home/subcomponents/EventCard/EventCard.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _StyledEventCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledEventCard */ 1563);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/styled-components/commons */ 4851);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-bootstrap-grid */ 7376);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__);





var EventCard = function EventCard(_ref) {
  var dateEventLocal = _ref.dateEventLocal,
      awayTeamBadge = _ref.awayTeamBadge,
      homeTeamBadge = _ref.homeTeamBadge,
      strEvent = _ref.strEvent,
      strHomeTeam = _ref.strHomeTeam,
      strAwayTeam = _ref.strAwayTeam,
      intHomeScore = _ref.intHomeScore,
      intAwayScore = _ref.intAwayScore;
  var hostHasWon = parseInt(intHomeScore) > parseInt(intAwayScore);
  var isTie = parseInt(intHomeScore) === parseInt(intAwayScore); // with useMemo, unnecessary rerenderings are avoided when fetch is done in Home component

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    console.log("".concat(strEvent, " event rendered"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledEventCard__WEBPACK_IMPORTED_MODULE_1__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.DivWithBorder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.TitleH4, null, "".concat(dateEventLocal, " (local date)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.DivWithBorder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__.Col, {
      col: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: homeTeamBadge,
      className: "img-fluid rounded-start",
      alt: "".concat(strHomeTeam, " badge")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.CardBodyRelativeDiv, null, !isTie && hostHasWon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      className: "position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-down-fill",
      fill: "#AA3A3B",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.CardTextBodyDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.TitleH5, null, "".concat(strHomeTeam, " - ").concat(intHomeScore)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.DivWithBorder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__.Col, {
      col: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: awayTeamBadge,
      className: "img-fluid rounded-start",
      alt: "".concat(strAwayTeam, " badge")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.CardBodyRelativeDiv, null, !isTie && !hostHasWon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      className: "position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-down-fill",
      fill: "#AA3A3B",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.CardTextBodyDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.TitleH5, null, "".concat(strAwayTeam, " - ").concat(intAwayScore)))))));
  }, [strEvent, strHomeTeam, strAwayTeam, intHomeScore, intAwayScore, dateEventLocal, awayTeamBadge, homeTeamBadge]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCard);

/***/ }),

/***/ 1563:
/*!****************************************************************************!*\
  !*** ./src/client/modules/Home/subcomponents/EventCard/StyledEventCard.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "CardTextBodyDiv": () => (/* binding */ CardTextBodyDiv),
/* harmony export */   "CardBodyDiv": () => (/* binding */ CardBodyDiv),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "DivWithBorder": () => (/* binding */ DivWithBorder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 3349);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ 2213);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/styled-components/commons */ 4851);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;



var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}; // I could not use the makeContainer mixing otherwise I got no alignment

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.attrs(function () {
  return {
    className: 'col-12 col-md-6'
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  min-width: 300px;\n"])), _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.colors.secondaryColor);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h4(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 22px;\n    text-align: center;\n    font-weight: bold;\n\n    @media (min-width: ", ") {\n        font-size: 18px\n    }   \n\n    @media (min-width: ", ") {\n        font-size: 16px\n    }\n"])), size.mobileL, size.desktop);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h5(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 22px;\n    text-align: center;\n    font-weight: normal;\n\n    @media (min-width: ", ") {\n        font-size: 18px\n    }\n\n    @media (min-width: ", ") {\n        font-size: 16px\n    }\n"])), size.mobileL, size.desktop);
var CardTextBodyDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    padding: 16px\n"])));
var CardBodyDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.attrs(function () {
  return {
    className: 'col-9'
  };
})(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    position: relative\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.attrs(function () {
  return {
    className: 'row g-0'
  };
})(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding: 5px\n"])));
var DivWithBorder = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.attrs(function () {
  return {
    className: 'border col-12'
  };
})(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    border-radius: 0;\n  "])));

/***/ }),

/***/ 6868:
/*!******************************************************************!*\
  !*** ./src/client/modules/Home/subcomponents/EventCard/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventCard */ 7807);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_EventCard__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 4851:
/*!********************************************************!*\
  !*** ./src/client/styles/styled-components/commons.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "size": () => (/* binding */ size),
/* harmony export */   "colors": () => (/* binding */ colors),
/* harmony export */   "TitleH2": () => (/* binding */ TitleH2),
/* harmony export */   "TitleH4": () => (/* binding */ TitleH4),
/* harmony export */   "TitleH5": () => (/* binding */ TitleH5),
/* harmony export */   "Paragraph": () => (/* binding */ Paragraph),
/* harmony export */   "CardTextBodyDiv": () => (/* binding */ CardTextBodyDiv),
/* harmony export */   "CardBodyRelativeDiv": () => (/* binding */ CardBodyRelativeDiv),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "DivWithBorder": () => (/* binding */ DivWithBorder),
/* harmony export */   "ItemsDiv": () => (/* binding */ ItemsDiv)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 3349);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ 2213);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;


var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
var colors = {
  mainColor: '#AA3A3B',
  secondaryColor: '#fffff',
  blackColor: '#00000'
};
var TitleH2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h2(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 24px;\n    text-align: center;\n    font-weight: bold;\n\n    @media (min-width: ", ") {\n        font-size: 28px\n    }   \n\n    @media (min-width: ", ") {\n        font-size: 36px\n    }\n"])), size.tablet, size.desktop);
var TitleH4 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h4(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 22px;\n    text-align: center;\n    font-weight: bold;\n\n    @media (min-width: ", ") {\n        font-size: 18px\n    }   \n\n    @media (min-width: ", ") {\n        font-size: 16px\n    }\n"])), size.mobileL, size.desktop);
var TitleH5 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h5(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 22px;\n    text-align: center;\n    font-weight: normal;\n\n    @media (min-width: ", ") {\n        font-size: 18px\n    }\n\n    @media (min-width: ", ") {\n        font-size: 16px\n    }\n"])), size.mobileL, size.desktop);
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 22px;\n    text-align: center;\n    font-weight: normal;\n\n    @media (min-width: ", ") {\n        font-size: 18px\n    }\n\n    @media (min-width: ", ") {\n        font-size: 16px\n    }\n"])), size.mobileL, size.desktop);
var CardTextBodyDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    padding: 16px\n"])));
var CardBodyRelativeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.attrs(function () {
  return {
    className: 'col-9'
  };
})(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    position: relative\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.attrs(function () {
  return {
    className: 'row g-0'
  };
})(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding: 5px\n"])));
var DivWithBorder = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.attrs(function () {
  return {
    className: 'border col-12'
  };
})(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    border-radius: 0;\n  "])));
var ItemsDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n    text-align: center;\n  "])));

/***/ })

}]);
//# sourceMappingURL=async_home.2eb90f2c6bb97c35fb57.js.map