(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/utils/CartContext.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/CartContext.js ***!
  \*******************************************/
/*! exports provided: CartContextProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContextProvider", function() { return CartContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CartContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

var useCart = function useCart() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](CartContext);
};

var initialState = {
  products: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [],
  coupon: localStorage.getItem('coupon') ? JSON.parse(localStorage.getItem("coupon")) : {}
};

var reducer = function reducer(state, action) {
  var products = state.products;

  switch (action.type) {
    case "reset":
      localStorage.removeItem('cart');
      return _objectSpread({}, state, {
        products: [],
        coupon: {}
      });

    case "add":
      products.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(products));
      return _objectSpread({}, state, {
        products: products
      });

    case "remove":
      var index = products.indexOf(action.payload);
      products.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(products));
      return _objectSpread({}, state, {
        products: products
      });

    case "appendCoupon":
      localStorage.setItem('coupon', JSON.stringify(action.payload));
      return _objectSpread({}, state, {
        coupon: action.payload
      });

    case "removeCoupon":
      localStorage.removeItem('coupon');
      return _objectSpread({}, state, {
        coupon: {}
      });
  }
};

function CartContextProvider(props) {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](reducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var value = {
    state: state,
    dispatch: dispatch
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CartContext.Provider, {
    value: value
  }, props.children);
}

var CartContextConsumer = CartContext.Consumer;


/***/ }),

/***/ "./resources/js/utils/DiscountService.js":
/*!***********************************************!*\
  !*** ./resources/js/utils/DiscountService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscountService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductService */ "./resources/js/utils/ProductService.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DiscountService =
/*#__PURE__*/
function () {
  function DiscountService() {
    _classCallCheck(this, DiscountService);
  }

  _createClass(DiscountService, [{
    key: "all",
    value: function all() {
      var products;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ProductService__WEBPACK_IMPORTED_MODULE_1__["default"].all());

            case 2:
              products = _context.sent;
              return _context.abrupt("return", products.filter(function (product) {
                return product.discount;
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "without",
    value: function without() {
      var products;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function without$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ProductService__WEBPACK_IMPORTED_MODULE_1__["default"].all());

            case 2:
              products = _context2.sent;
              return _context2.abrupt("return", products.filter(function (product) {
                return !product.discount;
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", window.axios["delete"]("/api/discounts/".concat(id)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function create$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", window.axios.post("/api/discounts", data));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return DiscountService;
}();



/***/ }),

/***/ "./resources/js/utils/OrderService.js":
/*!********************************************!*\
  !*** ./resources/js/utils/OrderService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var OrderService =
/*#__PURE__*/
function () {
  function OrderService() {
    _classCallCheck(this, OrderService);
  }

  _createClass(OrderService, null, [{
    key: "all",
    value: function all(page) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/orders/all/".concat(page)));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "recent",
    value: function recent() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function recent$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get('/api/orders/recent'));

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/orders/".concat(id)));

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "search",
    value: function search(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function search$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/orders/search/".concat(id)));

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return window.axios.post("/api/orders", data);
    }
  }, {
    key: "edit",
    value: function edit(data) {
      return window.axios.put("/api/orders", data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return window.axios["delete"]("/api/orders/".concat(id));
    }
  }, {
    key: "make",
    value: function make(data) {
      return window.axios.post("/api/order", data);
    }
  }, {
    key: "createPaypalOrder",
    value: function createPaypalOrder(actions, sum, currency) {
      return actions.order.create({
        intent: "CAPTURE",
        application_context: {
          user_action: "PAY_NOW"
        },
        purchase_units: [{
          description: "Shop-template order",
          amount: {
            currency_code: currency.state.iso,
            value: sum,
            breakdown: {
              item_total: {
                currency_code: currency.state.iso,
                value: sum
              }
            }
          }
        }]
      });
    }
  }, {
    key: "loadGeowidget",
    value: function loadGeowidget(language, callback) {
      var script = document.createElement("script");
      script.src = "https://geowidget.easypack24.net/js/sdk-for-javascript.js";
      document.body.appendChild(script);
      var stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://geowidget.easypack24.net/css/easypack.css";
      document.head.appendChild(stylesheet);
      script.addEventListener("load", function () {
        window.easyPackAsyncInit = function () {
          easyPack.init({
            defaultLocale: language == "en" ? "uk" : "pl"
          });
          var map = easyPack.mapWidget('geowidget', function (point) {
            geowidget.style.display = "none";
            callback(point.address.line1 + ", " + point.address.line2);
          });
        };
      });
    }
  }, {
    key: "appendCoupon",
    value: function appendCoupon(coupon) {
      return window.axios.put("api/coupon/".concat(coupon));
    }
  }, {
    key: "getSumOfProducts",
    value: function getSumOfProducts(products) {
      if (products && products.length) {
        var sum = 0;
        products.map(function (product) {
          sum += parseFloat(product.price_final) * product.quantity;
        });
        return sum.toFixed(2);
      }
    }
  }, {
    key: "getSumOfProductsWithDiscount",
    value: function getSumOfProductsWithDiscount(products, coupon) {
      var sum = this.getSumOfProducts(products);
      return (sum - coupon.percent_off / 100 * sum).toFixed(2);
    }
  }, {
    key: "fromCookie",
    value: function fromCookie() {
      return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("order") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("order")) : null;
    }
  }, {
    key: "toCookie",
    value: function toCookie(order) {
      order && js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("order", JSON.stringify(order), {
        expires: 1
      });
    }
  }, {
    key: "clearCookie",
    value: function clearCookie() {
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("order");
    }
  }]);

  return OrderService;
}();



/***/ }),

/***/ "./resources/js/utils/ProductService.js":
/*!**********************************************!*\
  !*** ./resources/js/utils/ProductService.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiscountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscountService */ "./resources/js/utils/DiscountService.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ProductService =
/*#__PURE__*/
function () {
  function ProductService() {
    _classCallCheck(this, ProductService);
  }

  _createClass(ProductService, null, [{
    key: "all",
    value: function all() {
      var page,
          category,
          response,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              category = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/products/all/".concat(page, "/").concat(category)));

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/products/".concat(id)));

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "search",
    value: function search(name) {
      var category,
          response,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function search$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              category = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : '';
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/products/search/".concat(name, "/").concat(category)));

            case 3:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "types",
    value: function types() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function types$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/product-types"));

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return window.axios.post("/api/products", data);
    }
  }, {
    key: "edit",
    value: function edit(data) {
      return window.axios.put("/api/products", data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return window.axios["delete"]("/api/products/".concat(id));
    }
  }, {
    key: "cart",
    value: function cart(_cart) {
      var param, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function cart$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              param = JSON.stringify(_cart);
              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/products/cart/".concat(param)));

            case 3:
              response = _context5.sent;
              return _context5.abrupt("return", response.data);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return ProductService;
}();

_defineProperty(ProductService, "discounts", new _DiscountService__WEBPACK_IMPORTED_MODULE_1__["default"]());



/***/ }),

/***/ "./resources/js/utils/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/utils/helpers.js ***!
  \***************************************/
/*! exports provided: default, separateHundreds, getRandomColor, colors, checkFullName, isMobile, isDesktop, isEmail, equals, newArray, shippingDataValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateHundreds", function() { return separateHundreds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFullName", function() { return checkFullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArray", function() { return newArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shippingDataValidate", function() { return shippingDataValidate; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addAlpha(color, alpha) {
  var r, g, b; // Check the format of the color, HEX or RGB?

  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
}
function separateHundreds(number) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function checkFullName(name) {
  return name && name.split(" ")[1] && name.split(" ")[0][0] === name.split(" ")[0][0].toUpperCase() && name.split(" ")[1][0] === name.split(" ")[1][0].toUpperCase();
}
function isMobile() {
  return window.innerWidth <= 760;
}
function isDesktop() {
  return window.innerWidth > 1200;
}
function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function equals(one, two) {
  return one === two;
}
function newArray(arrayLength, parameters) {
  return new Array(arrayLength).fill().map(function (e, i) {
    return _objectSpread({
      id: i
    }, parameters);
  });
}
function shippingDataValidate(credentials) {
  var passed = true;
  var invalids = [];

  if (!checkFullName(credentials.name)) {
    invalids.push("name");
    passed = false;
  }

  if (!isEmail(credentials.email)) {
    invalids.push("email");
    passed = false;
  }

  if (!credentials.address || credentials.address.length <= 0) {
    invalids.push("address");
    passed = false;
  }

  if (!credentials.zip_code || credentials.zip_code.length <= 0) {
    invalids.push("zipCode");
    passed = false;
  }

  if (!credentials.terms) {
    invalids.push("terms");
    passed = false;
  }

  return {
    passed: passed,
    invalids: invalids
  };
}

/***/ })

}]);