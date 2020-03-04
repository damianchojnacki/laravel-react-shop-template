(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/shop/Cart/style.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./resources/js/components/shop/Cart/style.scss ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart {\n  position: fixed !important;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 2;\n}\n\n.cart__empty {\n  min-width: 280px;\n}\n\n.cart__empty .dropdown-item {\n  padding: 1rem 2rem;\n  font-size: 1rem !important;\n}\n\n.cart__button {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  padding: 0;\n}\n\n.cart__header {\n  padding: 1rem 0 0 2rem;\n}\n\n.cart__field {\n  padding: 0 .5rem;\n}\n\n.cart__field:nth-child(2) {\n  border-left: 1px solid silver;\n  border-right: 1px solid silver;\n}\n\n.cart__field:nth-child(3) {\n  border-right: 1px solid silver;\n}\n\n@media (max-width: 765px) {\n  .cart__field {\n    overflow: auto;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .cart__field:nth-child(1) {\n    width: 30%;\n  }\n  .cart__field:nth-child(2) {\n    width: 25%;\n    text-align: center;\n  }\n  .cart__field:nth-child(3) {\n    width: 10%;\n    border-right: 1px solid silver;\n    text-align: center;\n  }\n  .cart__field:nth-child(4) {\n    width: 30%;\n    overflow: visible;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cart__field {\n    font-size: 1rem;\n    padding: 0 1rem;\n  }\n}\n\n.cart__sum {\n  border-top: 1px solid silver !important;\n  text-align: right;\n  padding: .5rem 2.25rem;\n  padding-right: .5rem;\n  margin-right: 1rem !important;\n}\n\n@media (min-width: 1200px) {\n  .cart__sum {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 1200px) {\n  .cart__sum {\n    margin-right: .5rem !important;\n  }\n}\n\n.cart .list-group-item {\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media (max-width: 765px) {\n  .cart .list-group-item {\n    max-width: 280px;\n    display: block;\n  }\n}\n\n@media (max-width: 1200px) {\n  .cart .list-group-item {\n    padding-left: .5rem;\n    padding-right: .5rem;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/shop/Cart/index.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/shop/Cart/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./resources/js/components/shop/Cart/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Cart(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_utils_CartContext__WEBPACK_IMPORTED_MODULE_4__["CartContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      products = _useState4[0],
      setProducts = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var products;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_7__["default"].cart(state.cart));

            case 2:
              products = _context.sent;
              setProducts(products);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    })();
  }, [state]);

  var removeFromCart = function removeFromCart(product) {
    dispatch({
      type: "remove",
      payload: product.id
    });
    react_notify_toast__WEBPACK_IMPORTED_MODULE_8__["notify"].show("".concat(product.name, " has been removed from cart."), 'success', 1500);
  };

  var getSumOfProducts = function getSumOfProducts() {
    if (products && products.length) {
      var sum = 0;
      products.map(function (product) {
        sum += parseFloat(product.price_final) * product.quantity;
      });
      return sum.toFixed(2);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    dropup: true,
    open: opened,
    className: "cart",
    toggle: function toggle() {
      return false;
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
    className: "cart__button",
    onClick: function onClick() {
      return setOpened(!opened);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShoppingCart"]
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
    right: true,
    className: products && products.length ? null : "cart__empty"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "cart__header"
  }, "Shopping cart"), products && products.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    tag: "span",
    className: "cart__products"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], null, products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      key: product.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, product.price_final, " $"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, product.quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "sm",
      className: "btn btn-danger",
      onClick: function onClick() {
        return removeFromCart(product);
      }
    }, "Remove")));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "cart__sum"
  }, "Sum: ", getSumOfProducts(), " $")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    tag: "span"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/checkout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true
  }, "Checkout")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    tag: "span"
  }, "Your shopping cart is empty.")));
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./resources/js/components/shop/Cart/style.scss":
/*!******************************************************!*\
  !*** ./resources/js/components/shop/Cart/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--6-3!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/shop/Cart/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/shop/Footer.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/shop/Footer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");






function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "py-4 bg-secondary text-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center m-0"
  }, "\xA9 2020 Copyright ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    tag: "a",
    href: "#"
  }, "Damian Chojnacki")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/components/shop/Menu.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/shop/Menu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Menu(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      navbarOpened = _useState2[0],
      setNavbarOpened = _useState2[1];

  var handleLogout = function handleLogout(e) {
    e.preventDefault();
    _utils_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"].logout();
    dispatch({
      type: "logout"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    type: "dark",
    theme: "primary",
    expand: "md",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    tag: "div"
  }, "Shop Template")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: function onClick() {
      return setNavbarOpened(!navbarOpened);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    open: navbarOpened,
    navbar: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    navbar: true
  }, props.routes && props.routes.map(function (prop, key) {
    var _prop$link;

    if (prop.name === "Login" && state.authenticated) return null;
    if (prop.name === "Register" && state.authenticated) return null;
    if (prop.hidden) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
      className: "nav-link",
      href: (_prop$link = prop.link) !== null && _prop$link !== void 0 ? _prop$link : prop.path
    }, prop.name));
  }), state.authenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
    className: "nav-link",
    href: "#",
    onClick: handleLogout
  }, "Logout")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./resources/js/layouts/Shop.jsx":
/*!***************************************!*\
  !*** ./resources/js/layouts/Shop.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shop_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop/Menu */ "./resources/js/components/shop/Menu.jsx");
/* harmony import */ var _components_shop_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shop/Footer */ "./resources/js/components/shop/Footer.jsx");
/* harmony import */ var _utils_CartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var _components_shop_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop/Cart */ "./resources/js/components/shop/Cart/index.jsx");










function Shop(_ref) {
  var children = _ref.children;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    state.authenticated && _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["default"].getUser().then(function (res) {
      dispatch({
        type: "login",
        payload: res.data
      });
    })["catch"](dispatch({
      type: "logout"
    }));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_CartContext__WEBPACK_IMPORTED_MODULE_7__["CartContextProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-0 container d-flex flex-column",
    style: {
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Cart__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center flex-grow-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ }),

/***/ "./resources/js/utils/CartContext.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/CartContext.js ***!
  \*******************************************/
/*! exports provided: CartContext, CartContextProvider, CartContextConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContextProvider", function() { return CartContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContextConsumer", function() { return CartContextConsumer; });
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
var initialState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : []
};

var reducer = function reducer(state, action) {
  var cart = state.cart;

  switch (action.type) {
    case "reset":
      localStorage.removeItem('cart');
      return _objectSpread({}, state, {
        cart: []
      });

    case "add":
      cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(cart));
      return _objectSpread({}, state, {
        cart: cart
      });

    case "remove":
      var index = cart.indexOf(action.payload);
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      return _objectSpread({}, state, {
        cart: cart
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


/***/ })

}]);