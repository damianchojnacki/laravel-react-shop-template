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
          query,
          response,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
              category = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
              query = page ? category ? "/api/products/all/".concat(page, "/").concat(category) : "/api/products/all/".concat(page) : "/api/products/all";
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get(query));

            case 5:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 7:
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
          query,
          response,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function search$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              category = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              query = category ? "/api/products/search/".concat(name, "/").concat(category) : "/api/products/search/".concat(name);
              _context3.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get(query));

            case 4:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "add",
    value: function add(data) {
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
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function cart$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              param = JSON.stringify(_cart);
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/products/cart/".concat(param)));

            case 3:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return ProductService;
}();

_defineProperty(ProductService, "discounts", {
  all: function all() {
    var products;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ProductService.all());

          case 2:
            products = _context5.sent;
            return _context5.abrupt("return", products.filter(function (product) {
              return product.discount;
            }));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  without: function without() {
    var products;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function without$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ProductService.all());

          case 2:
            products = _context6.sent;
            return _context6.abrupt("return", products.filter(function (product) {
              return !product.discount;
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  "delete": function _delete(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", window.axios["delete"]("/api/products/discounts/".concat(id)));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  add: function add(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function add$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", window.axios.post("/api/products/discounts", data));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    });
  }
});



/***/ }),

/***/ "./resources/js/utils/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/utils/helpers.js ***!
  \***************************************/
/*! exports provided: default, separateHundreds, getRandomColor, colors, checkFullName, isMobile, isDesktop, isEmail, equals */
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

/***/ })

}]);