/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global */ \"./src/client/Global.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ \"./src/client/redux/store.js\");\n\n\n\n\n\nvar App = function App(_ref) {\n  var leagueId = _ref.leagueId,\n      leagueName = _ref.leagueName,\n      teams = _ref.teams;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Global__WEBPACK_IMPORTED_MODULE_1__.default, {\n    leagueId: leagueId,\n    leagueName: leagueName,\n    teams: teams\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/App.js?");

/***/ }),

/***/ "./src/client/Global.js":
/*!******************************!*\
  !*** ./src/client/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Home */ \"./src/client/modules/Home/index.js\");\n/* harmony import */ var _modules_Teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Teams */ \"./src/client/modules/Teams/index.js\");\n/* harmony import */ var _modules_Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Team */ \"./src/client/modules/Team/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Global = function Global(_ref) {\n  var teams = _ref.teams,\n      leagueId = _ref.leagueId,\n      leagueName = _ref.leagueName;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {\n    teams: teams\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Home__WEBPACK_IMPORTED_MODULE_1__.default, {\n    leagueId: leagueId,\n    leagueName: leagueName,\n    teams: teams,\n    numEvents: 10\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    exact: true,\n    path: \"/teams\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Teams__WEBPACK_IMPORTED_MODULE_2__.default, {\n    teams: teams,\n    leagueName: leagueName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    path: \"/teams/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Team__WEBPACK_IMPORTED_MODULE_3__.default, {\n    teams: teams\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/Global.js?");

/***/ }),

/***/ "./src/client/components/Header/AsyncHeader.js":
/*!*****************************************************!*\
  !*** ./src/client/components/Header/AsyncHeader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"async_header\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | async_header */ \"async_header\").then(__webpack_require__.bind(__webpack_require__, /*! ./Header */ \"./src/client/components/Header/Header.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Header */ \"./src/client/components/Header/Header.js\");\n    }\n\n    return eval('require.resolve')(\"./Header\");\n  }\n}, {\n  ssr: true\n}));\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/components/Header/AsyncHeader.js?");

/***/ }),

/***/ "./src/client/components/Header/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Header/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AsyncHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncHeader */ \"./src/client/components/Header/AsyncHeader.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncHeader__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/components/Header/index.js?");

/***/ }),

/***/ "./src/client/modules/Home/AsyncHome.js":
/*!**********************************************!*\
  !*** ./src/client/modules/Home/AsyncHome.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"async_home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | async_home */ \"async_home\").then(__webpack_require__.bind(__webpack_require__, /*! ./Home */ \"./src/client/modules/Home/Home.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Home */ \"./src/client/modules/Home/Home.js\");\n    }\n\n    return eval('require.resolve')(\"./Home\");\n  }\n}, {\n  ssr: false\n}));\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Home/AsyncHome.js?");

/***/ }),

/***/ "./src/client/modules/Home/index.js":
/*!******************************************!*\
  !*** ./src/client/modules/Home/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AsyncHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncHome */ \"./src/client/modules/Home/AsyncHome.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncHome__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Home/index.js?");

/***/ }),

/***/ "./src/client/modules/Team/AsyncTeam.js":
/*!**********************************************!*\
  !*** ./src/client/modules/Team/AsyncTeam.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"async_team\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | async_team */ \"async_team\").then(__webpack_require__.bind(__webpack_require__, /*! ./Team */ \"./src/client/modules/Team/Team.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Team */ \"./src/client/modules/Team/Team.js\");\n    }\n\n    return eval('require.resolve')(\"./Team\");\n  }\n}, {\n  ssr: false\n}));\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Team/AsyncTeam.js?");

/***/ }),

/***/ "./src/client/modules/Team/index.js":
/*!******************************************!*\
  !*** ./src/client/modules/Team/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AsyncTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncTeam */ \"./src/client/modules/Team/AsyncTeam.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncTeam__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Team/index.js?");

/***/ }),

/***/ "./src/client/modules/Teams/AsyncTeams.js":
/*!************************************************!*\
  !*** ./src/client/modules/Teams/AsyncTeams.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"async_teams\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | async_teams */ \"async_teams\").then(__webpack_require__.bind(__webpack_require__, /*! ./Teams */ \"./src/client/modules/Teams/Teams.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Teams */ \"./src/client/modules/Teams/Teams.js\");\n    }\n\n    return eval('require.resolve')(\"./Teams\");\n  }\n}, {\n  ssr: false\n}));\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Teams/AsyncTeams.js?");

/***/ }),

/***/ "./src/client/modules/Teams/index.js":
/*!*******************************************!*\
  !*** ./src/client/modules/Teams/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AsyncTeams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncTeams */ \"./src/client/modules/Teams/AsyncTeams.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncTeams__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/modules/Teams/index.js?");

/***/ }),

/***/ "./src/client/redux/slices/fetchEvents.js":
/*!************************************************!*\
  !*** ./src/client/redux/slices/fetchEvents.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchEventsSlice\": () => (/* binding */ fetchEventsSlice),\n/* harmony export */   \"fetchEventsThunk\": () => (/* binding */ fetchEventsThunk),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _extraReducers;\n\n\n\n // thunk (necessary to fetch and handle promises)\n// https://redux-toolkit.js.org/api/createAsyncThunk\n// https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice\n\nvar fetchEventsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('fetchEvents/fetchById', /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id, thunkAPI) {\n    var apiUrl, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            apiUrl = \"https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=\".concat(id);\n            _context.next = 4;\n            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(apiUrl);\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", thunkAPI.rejectWithValue({}, _context.t0));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar fetchEventsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: 'fetchEvents',\n  initialState: {\n    value: [],\n    hasError: false,\n    isLoading: false\n  },\n  extraReducers: (_extraReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, fetchEventsThunk.fulfilled, function (state, action) {\n    var data;\n\n    try {\n      data = action.payload.events;\n    } catch (_unused) {\n      data = null;\n    }\n\n    state.value = data;\n    state.isLoading = false;\n\n    if (!data) {\n      state.hasError = true;\n    }\n  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, fetchEventsThunk.pending, function (state) {\n    state.isLoading = true;\n  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_extraReducers, fetchEventsThunk.error, function (state) {\n    state.isLoading = false;\n    state.hasError = true;\n  }), _extraReducers)\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchEventsSlice.reducer);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/redux/slices/fetchEvents.js?");

/***/ }),

/***/ "./src/client/redux/store.js":
/*!***********************************!*\
  !*** ./src/client/redux/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_fetchEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/fetchEvents */ \"./src/client/redux/slices/fetchEvents.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    fetchEvents: _slices_fetchEvents__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n}));\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/client/redux/store.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default().static('assets'));\napp.get(\"*\", /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var allLeaguesUrl, getAllTeamsUrl, statsFile, extractor, allLeaguesResponse, allLeaguesData, spanishLeagueGeneralInfo, spanishLeagueId, spanishLeagueName, allTeamsUrl, allTeamsResponse, allTeamsData, teams, context, jsx, html, scriptTags, _jsx, _html, _scriptTags;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            allLeaguesUrl = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';\n\n            getAllTeamsUrl = function getAllTeamsUrl(id) {\n              return \"https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=\".concat(id);\n            };\n\n            statsFile = path__WEBPACK_IMPORTED_MODULE_7___default().resolve('./assets/loadable-stats.json');\n            extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_8__.ChunkExtractor({\n              statsFile: statsFile\n            });\n            _context.prev = 4;\n            _context.next = 7;\n            return fetch(allLeaguesUrl);\n\n          case 7:\n            allLeaguesResponse = _context.sent;\n            _context.next = 10;\n            return allLeaguesResponse.json();\n\n          case 10:\n            allLeaguesData = _context.sent;\n            spanishLeagueGeneralInfo = allLeaguesData.leagues.find(function (data) {\n              return data.strLeague === 'Spanish La Liga';\n            });\n            spanishLeagueId = spanishLeagueGeneralInfo.idLeague;\n            spanishLeagueName = spanishLeagueGeneralInfo.strLeague; // API to get data about Spanish league teams with ID:\n\n            allTeamsUrl = getAllTeamsUrl(spanishLeagueId);\n            _context.next = 17;\n            return fetch(allTeamsUrl);\n\n          case 17:\n            allTeamsResponse = _context.sent;\n            _context.next = 20;\n            return allTeamsResponse.json();\n\n          case 20:\n            allTeamsData = _context.sent;\n            teams = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.default)(allTeamsData.teams);\n            context = {};\n            jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.StaticRouter, {\n              location: req.url,\n              context: context\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_5__.default, {\n              teams: teams,\n              leagueId: spanishLeagueId,\n              leagueName: spanishLeagueName\n            })));\n            html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(jsx);\n            scriptTags = extractor.getScriptTags();\n            res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>Code Test Front End Lambda</title>\\n            <script>window.__TEAMS__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(teams), \"</script>\\n            <script>window.__LEAGUE_ID__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(spanishLeagueId), \"</script>\\n            <script>window.__LEAGUE_NAME__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(spanishLeagueName), \"</script>\\n            <!-- Bootstrap CSS -->\\n            <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\\\" crossorigin=\\\"anonymous\\\">\\n            <script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\\\" integrity=\\\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\\\" crossorigin=\\\"anonymous\\\"></script>\\n          </head>\\n          <body>\\n            <div id=\\\"app\\\">\").concat(html, \"</div>\\n            \").concat(scriptTags, \"\\n          </body>\\n        </html>\\n      \"));\n            _context.next = 36;\n            break;\n\n          case 29:\n            _context.prev = 29;\n            _context.t0 = _context[\"catch\"](4);\n            console.log(_context.t0);\n            _jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_5__.default, {\n              teams: [],\n              leagueId: '',\n              leagueName: ''\n            }));\n            _html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(_jsx);\n            _scriptTags = extractor.getScriptTags();\n            res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>Code Test Front End Lambda</title>\\n            <script>window.__TEAMS__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()([]), \"</script>\\n            <script>window.__LEAGUE_ID__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(''), \"</script>\\n            <script>window.__LEAGUE_NAME__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(''), \"</script>\\n            <!-- Bootstrap CSS -->\\n            <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\\\" crossorigin=\\\"anonymous\\\">\\n            <script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\\\" integrity=\\\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\\\" crossorigin=\\\"anonymous\\\"></script>\\n          </head>\\n          <body>\\n            <div id=\\\"app\\\">\").concat(_html, \"</div>\\n            \").concat(_scriptTags, \"\\n          </body>\\n        </html>\\n      \"));\n\n          case 36:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 29]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar refineTeams = function refineTeams(teams) {\n  return teams.map(function (team) {\n    try {\n      var strStadium = team.strStadium,\n          intFormedYear = team.intFormedYear,\n          strTeam = team.strTeam,\n          strTeamBadge = team.strTeamBadge,\n          strWebsite = team.strWebsite,\n          strDescriptionEN = team.strDescriptionEN,\n          strTeamJersey = team.strTeamJersey;\n\n      if (!strStadium || !intFormedYear || !strTeam || !strTeamBadge || !strWebsite || !strDescriptionEN || !strTeamJersey) {\n        return;\n      }\n\n      return {\n        strStadium: strStadium,\n        intFormedYear: intFormedYear,\n        strTeam: strTeam,\n        strTeamBadge: strTeamBadge,\n        strWebsite: strWebsite,\n        strDescriptionEN: strDescriptionEN,\n        strTeamJersey: strTeamJersey\n      };\n    } catch (_unused) {\n      return;\n    }\n  }).filter(function (el) {\n    return el !== undefined;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refineTeams);\n\n//# sourceURL=webpack://code-test-frontend-lambda/./src/server/utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "styled-bootstrap-grid":
/*!****************************************!*\
  !*** external "styled-bootstrap-grid" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("styled-bootstrap-grid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;