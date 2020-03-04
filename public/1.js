(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/utils/AuthService.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/AuthService.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, null, [{
    key: "login",
    value: function login(credentials) {
      return window.axios.post('/api/login', credentials).then(function (res) {
        react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.save('access_token', res.data.token, {
          maxAge: 3600
        });
        window.axios.defaults.headers.common.Authorization = "Bearer ".concat(res.data.token);
      });
    }
  }, {
    key: "register",
    value: function register(credentials) {
      credentials.password_confirmation = credentials.passwordConfirmation;
      return window.axios.post('/api/register', credentials).then(function (res) {
        react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.save('access_token', res.data.token, {
          maxAge: 3600
        });
        window.axios.defaults.headers.common.Authorization = "Bearer ".concat(res.data.token);
      });
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return window.axios.get('/api/user');
    }
  }, {
    key: "logout",
    value: function logout() {
      var response = window.axios.post('/api/logout');
      react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.remove('access_token');
      return response;
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

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
              category = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'null';
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



/***/ })

}]);