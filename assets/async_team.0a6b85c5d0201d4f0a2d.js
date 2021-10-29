"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["async_team"],{

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

/***/ 5758:
/*!***********************************************!*\
  !*** ./src/client/modules/Team/StyledTeam.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blackColor": () => (/* binding */ blackColor),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "CardItemsDiv": () => (/* binding */ CardItemsDiv),
/* harmony export */   "TeamCardTextBodyDiv": () => (/* binding */ TeamCardTextBodyDiv)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 3349);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ 2213);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/styled-components/commons */ 4851);


var _templateObject, _templateObject2, _templateObject3;



var blackColor = _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.colors.blackColor;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background-color: ", ";\n    margin-left: auto;\n    margin-right: auto;\n    padding: 20px;\n    min-width: 300px;\n    width: 100%;\n\n    @media (min-width: ", ") {\n        width: 70%;\n    }   \n"])), _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.colors.secondaryColor, _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.size.tablet);
var CardItemsDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    border-radius: 0;\n    height: 100px;\n    width: 100%;\n    text-align: center;\n  "])));
var TeamCardTextBodyDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_1__.CardTextBodyDiv)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  "])));

/***/ }),

/***/ 4714:
/*!*****************************************!*\
  !*** ./src/client/modules/Team/Team.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Page */ 5949);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 9640);
/* harmony import */ var _styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/styled-components/commons */ 4851);
/* harmony import */ var _StyledTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledTeam */ 5758);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ 2429);
/* harmony import */ var _Team_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Team.scss */ 4553);








var Team = function Team(_ref) {
  var teams = _ref.teams;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      id = _useParams.id;

  var team = teams[id - 1]; // if (team) {
  //     return null;
  // }

  console.log("".concat(team.strTeam, " has rendered"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledTeam__WEBPACK_IMPORTED_MODULE_3__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.TitleH2, null, "".concat(team.strTeam, " - ").concat(team.intFormedYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledTeam__WEBPACK_IMPORTED_MODULE_3__.CardItemsDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: team.strTeamJersey,
    className: "",
    alt: "".concat(team.strTeam, " badge")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: team.strTeamBadge,
    className: "",
    alt: "".concat(team.strTeam, " badge")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledTeam__WEBPACK_IMPORTED_MODULE_3__.TeamCardTextBodyDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.Paragraph, null, "Stadium: ".concat(team.strStadium)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_styled_components_commons__WEBPACK_IMPORTED_MODULE_2__.Paragraph, null, "".concat(team.strDescriptionEN))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledTeam__WEBPACK_IMPORTED_MODULE_3__.CardItemsDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/teams",
    className: "nav-teams-link"
  }, "Go back to Teams"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);

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

/***/ }),

/***/ 6088:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/modules/Team/Team.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 6880);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-teams-link {\n  text-decoration: none;\n  color: white;\n  background-color: #AA3A3B;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  border: 1px solid #AA3A3B;\n}\n\n.nav-teams-link:hover {\n  font-weight: bold;\n  color: white;\n}\n\n.nav-teams-link:active {\n  color: white;\n}\n\n.nav-teams-link:focus {\n  color: white;\n}\n\nimg {\n  height: 100%;\n  margin: 0 10px;\n}", "",{"version":3,"sources":["webpack://./src/client/modules/Team/Team.scss","webpack://./src/client/styles/variables.scss"],"names":[],"mappings":"AAEA;EACI,qBAAA;EACA,YCHc;EDId,yBCLS;EDMT,aAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;AADJ;;AAIA;EACI,iBAAA;EACA,YCbc;ADYlB;;AAIA;EACI,YCjBc;ADgBlB;;AAIA;EACI,YCrBc;ADoBlB;;AAIA;EACI,YAAA;EACA,cAAA;AADJ","sourcesContent":["@import '../../styles/variables.scss';\r\n\r\n.nav-teams-link  {\r\n    text-decoration: none;\r\n    color: $secondary-color;\r\n    background-color: $main-color;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    border-radius: 5px;\r\n    border: 1px solid $main-color;\r\n}\r\n\r\n.nav-teams-link:hover{\r\n    font-weight: bold;\r\n    color: $secondary-color;\r\n}\r\n\r\n.nav-teams-link:active{\r\n    color: $secondary-color;\r\n}\r\n\r\n.nav-teams-link:focus{\r\n    color: $secondary-color;\r\n}\r\n\r\nimg {\r\n    height: 100%;\r\n    margin: 0 10px;\r\n}","$main-color: #AA3A3B;\r\n$secondary-color: white;\r\n$black-color: black;\r\n\r\n$total-width: 100%;\r\n\r\n$no-paddings: 0"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4553:
/*!*******************************************!*\
  !*** ./src/client/modules/Team/Team.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Team_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Team.scss */ 6088);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Team_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Team_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Team_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Team_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=async_team.0a6b85c5d0201d4f0a2d.js.map