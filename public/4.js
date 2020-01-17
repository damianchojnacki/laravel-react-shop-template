(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/shop/cart.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./resources/js/components/shop/cart.scss ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart {\n  position: fixed !important;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 2;\n}\n\n.cart__empty {\n  min-width: 280px;\n}\n\n.cart__empty .dropdown-item {\n  padding: 1rem 0 0 2rem;\n  font-size: 1rem !important;\n}\n\n.cart__button {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  padding: 0;\n}\n\n.cart__header {\n  padding: 1rem 0 0 2rem;\n}\n\n.cart__field {\n  padding: 0 .5rem;\n}\n\n.cart__field:nth-child(2) {\n  border-left: 1px solid silver;\n  border-right: 1px solid silver;\n}\n\n.cart__field:nth-child(3) {\n  border-right: 1px solid silver;\n}\n\n@media (max-width: 765px) {\n  .cart__field {\n    overflow: auto;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .cart__field:nth-child(1) {\n    width: 30%;\n  }\n  .cart__field:nth-child(2) {\n    width: 25%;\n    text-align: center;\n  }\n  .cart__field:nth-child(3) {\n    width: 10%;\n    border-right: 1px solid silver;\n    text-align: center;\n  }\n  .cart__field:nth-child(4) {\n    width: 30%;\n    overflow: visible;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cart__field {\n    font-size: 1rem;\n    padding: 0 1rem;\n  }\n}\n\n.cart__sum {\n  border-top: 1px solid silver !important;\n  text-align: right;\n  padding: .5rem 2.25rem;\n  padding-right: .5rem;\n  margin-right: 1rem !important;\n}\n\n@media (min-width: 1200px) {\n  .cart__sum {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 1200px) {\n  .cart__sum {\n    margin-right: .5rem !important;\n  }\n}\n\n.cart .list-group-item {\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media (max-width: 765px) {\n  .cart .list-group-item {\n    max-width: 280px;\n    display: block;\n  }\n}\n\n@media (max-width: 1200px) {\n  .cart .list-group-item {\n    padding-left: .5rem;\n    padding-right: .5rem;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/shop/Cart.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/shop/Cart.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.scss */ "./resources/js/components/shop/cart.scss");
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cart_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_8__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Cart(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_utils_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
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
    function get() {
      var products;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {
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
    }

    get();
  }, [state]);

  var removeFromCart = function removeFromCart(product) {
    dispatch({
      type: "remove",
      payload: product.id
    });
    react_notify_toast__WEBPACK_IMPORTED_MODULE_8__["notify"].show("".concat(product.name, " has been removed to cart."), 'success', 1500);
  };

  var getSumOfProducts = function getSumOfProducts() {
    if (products.length) {
      var sum = 0;
      products.map(function (product) {
        sum += parseFloat(product.price) * product.quantity;
      });
      return sum.toFixed(2);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    dropup: true,
    open: opened,
    className: "cart",
    toggle: function toggle() {
      return false;
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    className: "cart__button",
    onClick: function onClick() {
      return setOpened(!opened);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "lg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShoppingCart"]
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    right: true,
    className: products.length ? null : "cart__empty"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "cart__header"
  }, "Shopping cart"), products.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    tag: "span",
    className: "cart__products"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], null, products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], {
      key: product.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, parseFloat(product.price).toFixed(2), " $"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, product.quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "cart__field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "sm",
      className: "btn btn-danger",
      onClick: function onClick() {
        return removeFromCart(product);
      }
    }, "Remove")));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "cart__sum"
  }, "Sum: ", getSumOfProducts(), " $")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    tag: "span"
  }, "Your shopping cart is empty.")));
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cart */ "./resources/js/components/shop/Cart.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Menu(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/"
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
    if (prop.name === "Login" && state.authenticated) return null;
    if (prop.name === "Register" && state.authenticated) return null;
    if (prop.hidden) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      className: "nav-link",
      to: prop.path
    }, prop.name));
  }), state.authenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "nav-link",
    to: "#",
    onClick: handleLogout
  }, "Logout")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./resources/js/components/shop/ProductsListComplex.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/components/shop/ProductsListComplex.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");






function ProductsListComplex(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_CartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var addToCart = function addToCart(product) {
    dispatch({
      type: "add",
      payload: product.id
    });
    react_notify_toast__WEBPACK_IMPORTED_MODULE_2__["notify"].show("".concat(product.name, " has been added to cart."), 'success', 1500);
  };

  var removeFromCart = function removeFromCart(product) {
    dispatch({
      type: "remove",
      payload: product.id
    });
    react_notify_toast__WEBPACK_IMPORTED_MODULE_2__["notify"].show("".concat(product.name, " has been removed to cart."), 'success', 1500);
  };

  return props.data && props.data.length > 0 ? props.data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: product.id,
      style: {
        width: !Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["isDesktop"])() ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["isMobile"])() ? "100%" : "30%" : "23%"
      },
      className: "m-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
      className: "h-75"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5"
    }, product.name), product.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "rounded mx-auto mw-100 d-block",
      style: {
        maxHeight: '200px'
      },
      src: product.image.url,
      alt: product.name
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-weight-bold"
    }, "Price: "), product.price, " $")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], {
      className: "d-flex flex-wrap justify-content-between"
    }, state.cart.includes(product.id) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "sm",
      className: "btn btn-danger my-1",
      onClick: function onClick() {
        return removeFromCart(product);
      }
    }, "Remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "sm",
      className: "btn btn-secondary my-1",
      onClick: function onClick() {
        return addToCart(product);
      }
    }, "Add to cart")));
  }) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductsListComplex);

/***/ }),

/***/ "./resources/js/components/shop/ProductsNav.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/shop/ProductsNav.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");






function ProductsNav(props) {
  var names = {
    cpu: {
      full: "Processors",
      "short": "CPU"
    },
    gpu: {
      full: "Graphic cards",
      "short": "GPU"
    },
    hdd: {
      full: "Hard disks",
      "short": "HDD"
    },
    ssd: {
      full: "SSD's",
      "short": "SSD's"
    }
  };

  var displayName = function displayName(name) {
    return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["isMobile"])() ? name["short"] : name.full;
  };

  var pages = ["cpu", "gpu", "hdd", "ssd"];
  var navList = pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      key: page
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      tag: "span",
      active: props.category === page
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/products/".concat(page),
      className: props.category === page ? "text-light" : null
    }, displayName(names[page]))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "px-2",
    pills: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    tag: "span",
    active: !props.category
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/products",
    className: !props.category ? "text-light" : null
  }, "All"))), navList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["isMobile"])() ? "w-100 my-4 ml-auto" : "ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    seamless: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
    type: "text",
    onChange: function onChange(e) {
      return props.search(e.target.value);
    },
    placeholder: "Search product",
    required: true
  })))));
}

/***/ }),

/***/ "./resources/js/components/shop/cart.scss":
/*!************************************************!*\
  !*** ./resources/js/components/shop/cart.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/lib/loader.js??ref--6-3!./cart.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/shop/cart.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_shop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/shop.js */ "./resources/js/routes/shop.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_shop_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shop/Menu */ "./resources/js/components/shop/Menu.jsx");
/* harmony import */ var _components_shop_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop/Footer */ "./resources/js/components/shop/Footer.jsx");
/* harmony import */ var _utils_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/CartContext */ "./resources/js/utils/CartContext.js");
/* harmony import */ var _components_shop_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shop/Cart */ "./resources/js/components/shop/Cart.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function Shop(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    state.authenticated && _utils_AuthService__WEBPACK_IMPORTED_MODULE_3__["default"].getUser().then(function (res) {
      dispatch({
        type: "login",
        payload: res.data
      });
    })["catch"](dispatch({
      type: "logout"
    }));
  }, []);

  var getRoutes = function getRoutes(routes) {
    return routes.map(function (prop, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({
        exact: true
      }, props, {
        path: prop.path,
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(prop.component, props);
        },
        key: key
      }));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_CartContext__WEBPACK_IMPORTED_MODULE_9__["CartContextProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_notify_toast__WEBPACK_IMPORTED_MODULE_5___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-0 container d-flex flex-column",
    style: {
      minHeight: "100vh"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Cart__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    routes: _routes_shop_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center flex-grow-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, getRoutes(_routes_shop_js__WEBPACK_IMPORTED_MODULE_2__["default"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shop_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ }),

/***/ "./resources/js/routes/shop.js":
/*!*************************************!*\
  !*** ./resources/js/routes/shop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_shop_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/shop/Home */ "./resources/js/views/shop/Home.jsx");
/* harmony import */ var _views_shop_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/shop/Login */ "./resources/js/views/shop/Login.jsx");
/* harmony import */ var _views_shop_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/shop/Products */ "./resources/js/views/shop/Products.jsx");
/* harmony import */ var _views_shop_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/shop/Register */ "./resources/js/views/shop/Register.jsx");




/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "/",
  name: "Home",
  component: _views_shop_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/shop"
}, {
  path: "/products",
  name: "Products",
  component: _views_shop_Products__WEBPACK_IMPORTED_MODULE_2__["default"],
  layout: "/shop"
}, {
  path: "/products/:category",
  component: _views_shop_Products__WEBPACK_IMPORTED_MODULE_2__["default"],
  layout: "/shop",
  hidden: true
}, {
  path: "/login",
  name: "Login",
  component: _views_shop_Login__WEBPACK_IMPORTED_MODULE_1__["default"],
  layout: "/shop"
}, {
  path: "/register",
  name: "Register",
  component: _views_shop_Register__WEBPACK_IMPORTED_MODULE_3__["default"],
  layout: "/shop"
}, {
  path: "/register/:result",
  component: _views_shop_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/shop",
  hidden: true
}]);

/***/ }),

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

var ProductService =
/*#__PURE__*/
function () {
  function ProductService() {
    _classCallCheck(this, ProductService);
  }

  _createClass(ProductService, null, [{
    key: "all",
    value: function all(page) {
      var category,
          query,
          response,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              category = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
              query = category ? "/api/products/page/".concat(page, "/").concat(category) : "/api/products/page/".concat(page);
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get(query));

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

/***/ }),

/***/ "./resources/js/views/shop/Home.jsx":
/*!******************************************!*\
  !*** ./resources/js/views/shop/Home.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");




function Home(props) {
  var result = props.match.params.result;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Shop | Homepage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main"
  }, result === "success" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    theme: "success"
  }, "You've successfully registered and logged in. You can start shopping right now!"), "Homepage content"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/views/shop/Login.jsx":
/*!*******************************************!*\
  !*** ./resources/js/views/shop/Login.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Login() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var credentials = {
      email: email,
      password: password
    };

    if (Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["isEmail"])(email) && password) {
      setLoading(true);
      _utils_AuthService__WEBPACK_IMPORTED_MODULE_4__["default"].login(credentials).then(function () {
        _utils_AuthService__WEBPACK_IMPORTED_MODULE_4__["default"].getUser().then(function (res) {
          setErrors({});
          dispatch({
            type: "login",
            payload: res.data
          });
        });
      })["catch"](function (error) {
        setErrors(error.response);
      })["finally"](function () {
        setLoading(false);
      });
    }
  };

  return state.authenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Shop | Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container col-lg-6 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "./redirect/google",
    className: "d-inline-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_button__WEBPACK_IMPORTED_MODULE_7___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    method: "POST",
    onSubmit: handleSubmit
  }, errors.data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    theme: "danger"
  }, errors.data), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "#email"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    seamless: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEnvelope"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["FormInput"], {
    invalid: !!errors.data,
    type: "email",
    id: "#email",
    name: "email",
    onChange: handleChange,
    disabled: loading,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "#password"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    seamless: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faLock"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["FormInput"], {
    invalid: !!errors.data,
    type: "password",
    id: "#password",
    name: "password",
    onChange: handleChange,
    disabled: loading,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "./register"
  }, "Don't have an account? You can create one there.")))));
}

/***/ }),

/***/ "./resources/js/views/shop/Products.jsx":
/*!**********************************************!*\
  !*** ./resources/js/views/shop/Products.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shop_ProductsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shop/ProductsNav */ "./resources/js/components/shop/ProductsNav.jsx");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _components_shop_ProductsListComplex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop/ProductsListComplex */ "./resources/js/components/shop/ProductsListComplex.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Products(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchField = _useState6[0],
      setSearchField = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.match.params.category),
      _useState8 = _slicedToArray(_useState7, 2),
      category = _useState8[0],
      setCategory = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getProducts();
  }, [page, searchField, category]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (category !== props.match.params.category) {
      setProducts([]);
      setCategory(props.match.params.category);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPage(1);
  }, [category]);

  var getProducts = function getProducts() {
    var found, newProducts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProducts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(searchField && searchField !== "")) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_7__["default"].search(searchField, category));

          case 3:
            found = _context.sent;
            setProducts(found);
            _context.next = 17;
            break;

          case 7:
            if (!(searchField === "")) {
              _context.next = 13;
              break;
            }

            setProducts([]);
            setPage(1);
            setSearchField(null);
            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_7__["default"].all(page, category));

          case 15:
            newProducts = _context.sent;
            setProducts(products.concat(newProducts));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var showMoreOrReload = function showMoreOrReload() {
    if (searchField) {
      setSearchField(null);
      setProducts([]);
      setPage(1);
    } else setPage(page + 1);
  };

  var productsFlexClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
    "col-md-12": true,
    "p-0": true,
    "mt-4": true,
    "d-flex": true,
    "flex-wrap": true,
    "justify-content-between": products.length % 4 === 0
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - Products")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "main my-2 d-flex flex-column flex-grow-1 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shop_ProductsNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    category: category,
    search: function search(value) {
      return setSearchField(value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: productsFlexClasses
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shop_ProductsListComplex__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    data: products,
    width: "25"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-block my-4",
    onClick: showMoreOrReload
  }, searchField ? "Reload" : "Show more"))));
}

/***/ }),

/***/ "./resources/js/views/shop/Register.jsx":
/*!**********************************************!*\
  !*** ./resources/js/views/shop/Register.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flag-icon-css/css/flag-icon.min.css */ "./node_modules/flag-icon-css/css/flag-icon.min.css");
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function Register() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordConfirmation = _useState8[0],
      setPasswordConfirmation = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 2),
      country = _useState10[0],
      setCountry = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState14 = _slicedToArray(_useState13, 2),
      step = _useState14[0],
      setStep = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      hide = _useState16[0],
      setHide = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState18 = _slicedToArray(_useState17, 2),
      countries = _useState18[0],
      setCountries = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState20 = _slicedToArray(_useState19, 2),
      terms = _useState20[0],
      setTerms = _useState20[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var countries, list;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get('/api/countries'));

            case 2:
              countries = _context.sent;
              list = countries.data.map(function (country) {
                return {
                  id: country.id,
                  value: country.name,
                  label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
                    className: "flag-icon flag-icon-".concat(country.iso.toLowerCase(), " align-middle")
                  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                    className: "ml-2 pl-2 align-middle font-weight-normal border-left"
                  }, country.name))
                };
              });
              setCountries(list);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    })();
  }, []);

  var validate = function validate(credentials) {
    var check = true;
    if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["checkFullName"])(credentials.name)) check = false;
    if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["isEmail"])(credentials.email)) check = false;
    if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["equals"])(credentials.password, credentials.passwordConfirmation)) check = false;
    if (!country || country <= 0) check = false;
    if (!terms) check = false;
    return check;
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var credentials = {
      email: email,
      name: name,
      password: password,
      passwordConfirmation: passwordConfirmation,
      country: country
    };

    if (validate(credentials)) {
      _utils_AuthService__WEBPACK_IMPORTED_MODULE_5__["default"].register(credentials).then(function () {
        _utils_AuthService__WEBPACK_IMPORTED_MODULE_5__["default"].getUser().then(function (res) {
          dispatch({
            type: "login",
            payload: res.data
          });
        });
      })["catch"](function (error) {
        setErrors(error.response.data.errors);
        setStep(1);
      });
    } else nextStep();
  };

  var validateStep = function validateStep() {
    switch (step) {
      case 1:
        return true;

      case 2:
        return !!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["isEmail"])(email);

      case 3:
        return !!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["checkFullName"])(name);

      case 4:
        return !!(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["equals"])(password, passwordConfirmation) && password.length >= 8);

      case 5:
        return country && country > 0;

      case 6:
        return !!terms;
    }
  };

  var nextStep = function nextStep() {
    if (validateStep()) {
      setHide(true);
      setTimeout(function () {
        setHide(false);
        setStep(step + 1);
      }, 1000);
    }
  };

  var previousStep = function previousStep() {
    setHide(true);
    setTimeout(function () {
      setHide(false);
      setStep(step - 1);
    }, 1000);
  };

  var displayStep = function displayStep() {
    return steps[step - 1];
  };

  var steps = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "mb-4"
  }, "Sign up"), errors && errors.map(function (e, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
      theme: "danger",
      key: index
    }, e);
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    block: true,
    onClick: nextStep,
    size: "lg"
  }, "Start")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Please enter your e-mail below:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    seamless: true,
    className: "my-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEnvelope"],
    size: "lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormInput"], {
    size: "lg",
    invalid: !!email && !validateStep(),
    type: "email",
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    value: email,
    style: {
      paddingLeft: 50 + "px"
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    block: true,
    size: "lg",
    onClick: nextStep
  }, "Done")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "What's your full name?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    seamless: true,
    className: "my-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faUser"],
    size: "lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormInput"], {
    size: "lg",
    invalid: !!name && !validateStep(),
    type: "text",
    onChange: function onChange(e) {
      setName(e.target.value);
    },
    value: name,
    style: {
      paddingLeft: 50 + "px"
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: previousStep
  }, "Go back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: nextStep,
    className: "float-right"
  }, "Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Select safe password and retype:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "my-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-6 col-12 my-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    seamless: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faLock"],
    size: "lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormInput"], {
    size: "lg",
    invalid: !!password && !validateStep(),
    type: "password",
    onChange: function onChange(e) {
      setPassword(e.target.value);
    },
    value: password,
    style: {
      paddingLeft: 50 + "px"
    },
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-6 col-12 my-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    seamless: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faLock"],
    size: "lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormInput"], {
    size: "lg",
    invalid: !!passwordConfirmation && !validateStep(),
    type: "password",
    onChange: function onChange(e) {
      setPasswordConfirmation(e.target.value);
    },
    value: passwordConfirmation,
    style: {
      paddingLeft: 50 + "px"
    },
    required: true
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: previousStep
  }, "Go back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: nextStep,
    className: "float-right"
  }, "Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Where are you from?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "my-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_13__["default"], {
    options: countries,
    onChange: function onChange(e) {
      setCountry(e.id);
    },
    styles: {
      option: function option(provided) {
        return _objectSpread({}, provided, {
          padding: 10,
          fontSize: 20
        });
      },
      menu: function menu(provided) {
        return _objectSpread({}, provided, {
          padding: 10
        });
      },
      valueContainer: function valueContainer(provided) {
        return _objectSpread({}, provided, {
          padding: 10,
          fontSize: 20
        });
      }
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: previousStep
  }, "Go back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: nextStep,
    className: "float-right"
  }, "Last step")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "We are almost done!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Please read and acceppt the terms and conditions:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormCheckbox"], {
    onChange: function onChange() {
      setTerms(!terms);
    },
    checked: terms,
    className: "my-4"
  }, "The terms and conditions of usage The Shop."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: previousStep
  }, "Go back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "lg",
    onClick: handleSubmit,
    className: "float-right"
  }, "Sign in!"))];
  var formClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
    "animated": true,
    "fadeOut": hide,
    "fadeIn": !hide
  });
  return state.authenticated ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/register/success"
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Register")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container col-lg-9 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    method: "POST",
    onSubmit: handleSubmit,
    className: formClasses
  }, displayStep())));
}

/***/ })

}]);