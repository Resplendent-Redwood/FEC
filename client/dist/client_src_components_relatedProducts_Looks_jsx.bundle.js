/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_relatedProducts_Looks_jsx"],{

/***/ "./client/src/components/relatedProducts/AddToLooksCard.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/relatedProducts/AddToLooksCard.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _relatedProducts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatedProducts.css */ \"./client/src/components/relatedProducts/relatedProducts.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nvar AddToLooksCard = function AddToLooksCard(props) {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    onClick: props.addToLooks,\n    className: \"AddToLooksCard\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"AddToLooksCard-Icon\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"span\", {\n        id: \"add_box\",\n        className: \"material-icons\",\n        children: \"add_box\"\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n      className: \"AddToLooksCard-p\",\n      children: \"ADD ITEM TO LOOKS\"\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToLooksCard);\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/AddToLooksCard.jsx?");

/***/ }),

/***/ "./client/src/components/relatedProducts/CardCarousel.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/relatedProducts/CardCarousel.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _AddToLooksCard_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddToLooksCard.jsx */ \"./client/src/components/relatedProducts/AddToLooksCard.jsx\");\n/* harmony import */ var _CarouselArrow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselArrow.jsx */ \"./client/src/components/relatedProducts/CarouselArrow.jsx\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ \"./client/src/components/relatedProducts/helpers.js\");\n/* harmony import */ var _relatedProducts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatedProducts.css */ \"./client/src/components/relatedProducts/relatedProducts.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar ProductCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_relatedProducts_ProductCard_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./ProductCard.jsx */ \"./client/src/components/relatedProducts/ProductCard.jsx\"));\n});\n\n\n\n\n\n\nvar CardCarousel = function CardCarousel(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      startingCardIndex = _useState2[0],\n      setStartingCardIndex = _useState2[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      cardWidth = _useState4[0],\n      setCardWidth = _useState4[1];\n\n  var getWidthOfCard = function getWidthOfCard(width) {\n    setCardWidth(width);\n  };\n\n  var scroll = function scroll(direction) {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.scrollCardByWidth)(direction, cardWidth, carouselRef, setStartingCardIndex, startingCardIndex);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n    className: \"CardCarousel\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n      className: \"CardCarousel-Arrows\",\n      children: [props.relatedProducts && startingCardIndex < props.relatedProducts.length - 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CarouselArrow_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n        direction: 'forward',\n        scroll: scroll\n      }) : null, startingCardIndex > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CarouselArrow_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n        direction: 'back',\n        scroll: scroll\n      }) : null]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n      ref: carouselRef,\n      className: \"CardCarousel-Scroller\",\n      children: [props.isLooks ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddToLooksCard_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n        addToLooks: props.addToLooks\n      }) : null, props.relatedProducts && props.relatedProducts.length > 0 ? props.relatedProducts.map(function (item, index) {\n        return index === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n            children: \"Loading\"\n          }),\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ProductCard, {\n            getWidthOfCard: getWidthOfCard,\n            removeFromLooks: props.removeFromLooks,\n            compareProducts: props.compareProducts,\n            product: item,\n            updateProductOnClick: props.updateProductOnClick\n          }, item.id + '_' + index)\n        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n            children: \"Loading\"\n          }),\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ProductCard, {\n            removeFromLooks: props.removeFromLooks,\n            compareProducts: props.compareProducts,\n            product: item,\n            updateProductOnClick: props.updateProductOnClick\n          }, item.id + '_' + index)\n        });\n      }) : null]\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardCarousel);\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/CardCarousel.jsx?");

/***/ }),

/***/ "./client/src/components/relatedProducts/CarouselArrow.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/relatedProducts/CarouselArrow.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _relatedProducts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatedProducts.css */ \"./client/src/components/relatedProducts/relatedProducts.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar CarouselArrow = function CarouselArrow(props) {\n  var forwardArrow = 'arrow_forward_ios';\n  var backwardArrow = 'arrow_back_ios';\n  var icon = \"material-icons\";\n  props.direction === 'back' ? icon += ' icon-back' : null;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: 'CarouselArrow-' + props.direction,\n    onClick: function onClick() {\n      return props.scroll(props.direction);\n    },\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"span\", {\n      className: icon,\n      children: props.direction === 'forward' ? forwardArrow : backwardArrow\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselArrow);\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/CarouselArrow.jsx?");

/***/ }),

/***/ "./client/src/components/relatedProducts/Looks.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/relatedProducts/Looks.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _CardCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardCarousel.jsx */ \"./client/src/components/relatedProducts/CardCarousel.jsx\");\n/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rfdc */ \"./node_modules/rfdc/index.js\");\n/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rfdc__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch.js */ \"./client/src/components/relatedProducts/fetch.js\");\n/* harmony import */ var _LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingComponent.jsx */ \"./client/src/components/relatedProducts/LoadingComponent.jsx\");\n/* harmony import */ var _relatedProducts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatedProducts.css */ \"./client/src/components/relatedProducts/relatedProducts.css\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ \"./client/src/components/relatedProducts/helpers.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar Looks = function Looks(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      currentLooks = _useState2[0],\n      setCurrentLooks = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      currentProduct = _useState4[0],\n      setCurrentProduct = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _fetch_js__WEBPACK_IMPORTED_MODULE_3__.default.getCurrentProductInformation(props.currentProductId, function (err, data) {\n      if (err) {\n        console.log(err);\n      } else {\n        setCurrentProduct(data);\n        props.setCurrentProduct(data);\n      }\n    });\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.checkSession)(props, setCurrentLooks);\n  }, [props.currentProductId]);\n\n  var addToLooks = function addToLooks() {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.addToLooksSession)(props, currentLooks, setCurrentLooks, currentProduct);\n  };\n\n  var removeFromLooks = function removeFromLooks(id) {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.removeFromLooksSession)(id, currentLooks, setCurrentLooks);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n    className: \"Looks\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"h2\", {\n      children: \"YOUR LOOKS\"\n    }), currentProduct ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CardCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n      removeFromLooks: removeFromLooks,\n      relatedProducts: currentLooks,\n      isLooks: true,\n      addToLooks: addToLooks\n    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {})]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Looks);\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/Looks.jsx?");

/***/ })

}]);