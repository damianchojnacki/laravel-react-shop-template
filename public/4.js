(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/assets/scss/black-dashboard-react.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./resources/js/assets/scss/black-dashboard-react.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n =========================================================\n * Black Dashboard React v1.0.0 based on Black Dashboard - v1.0.0\n =========================================================\n\n * Product Page: https://www.creative-tim.com/product/black-dashboard-react\n * Copyright 2019 Creative Tim (https://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)\n\n * Coded by Creative Tim\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n/*     brand Colors              */\n/* navbar color */\n:root {\n  --blue: #5e72e4;\n  --indigo: #5603ad;\n  --purple: #8965e0;\n  --pink: #f3a4b5;\n  --red: #f5365c;\n  --orange: #fb6340;\n  --yellow: #ffd600;\n  --green: #2dce89;\n  --teal: #11cdef;\n  --cyan: #2bffc6;\n  --white: #ffffff;\n  --gray: #6c757d;\n  --gray-dark: #32325d;\n  --light: #ced4da;\n  --lighter: #e9ecef;\n  --primary: #e14eca;\n  --secondary: #f4f5f7;\n  --success: #00f2c3;\n  --info: #1d8cf8;\n  --warning: #ff8d72;\n  --danger: #fd5d93;\n  --light: #adb5bd;\n  --dark: #212529;\n  --default: #344675;\n  --white: #ffffff;\n  --neutral: #ffffff;\n  --darker: black;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(34, 42, 66, 0);\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #525f7f;\n  text-align: left;\n  background-color: #1e1e2f;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 600;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\ndfn {\n  font-style: italic;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #e14eca;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:hover {\n  color: #c221a9;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 400;\n  line-height: 1.2;\n  color: #32325d;\n}\n\nh1, .h1 {\n  font-size: 2.06249999rem;\n}\n\nh2, .h2 {\n  font-size: 1.68749998rem;\n}\n\nh3, .h3 {\n  font-size: 1.43749988rem;\n}\n\nh4, .h4 {\n  font-size: 1.06249999rem;\n}\n\nh5, .h5 {\n  font-size: 0.81249998rem;\n}\n\nh6, .h6 {\n  font-size: 0.74999995rem;\n}\n\n.lead {\n  font-size: 0.78125rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 3.3rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 2.75rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 2.1875rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 1.6275rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border: 0;\n  border-top: 0.0625rem solid rgba(34, 42, 66, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 0.9625rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer::before {\n  content: \"\\2014   \\A0\";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #1e1e2f;\n  border: 0.0625rem solid #e3e3e3;\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 2px rgba(34, 42, 66, 0.075);\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #f3a4b5;\n  word-break: break-word;\n}\n\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #ffffff;\n  background-color: #212529;\n  border-radius: 0.2857rem;\n  box-shadow: inset 0 -0.1rem 0 rgba(34, 42, 66, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 600;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    order: -1;\n  }\n  .order-xl-last {\n    order: 13;\n  }\n  .order-xl-0 {\n    order: 0;\n  }\n  .order-xl-1 {\n    order: 1;\n  }\n  .order-xl-2 {\n    order: 2;\n  }\n  .order-xl-3 {\n    order: 3;\n  }\n  .order-xl-4 {\n    order: 4;\n  }\n  .order-xl-5 {\n    order: 5;\n  }\n  .order-xl-6 {\n    order: 6;\n  }\n  .order-xl-7 {\n    order: 7;\n  }\n  .order-xl-8 {\n    order: 8;\n  }\n  .order-xl-9 {\n    order: 9;\n  }\n  .order-xl-10 {\n    order: 10;\n  }\n  .order-xl-11 {\n    order: 11;\n  }\n  .order-xl-12 {\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table th,\n.table td {\n  padding: 1rem;\n  vertical-align: top;\n  border-top: 0.0625rem solid #e3e3e3;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 0.125rem solid #e3e3e3;\n}\n\n.table tbody + tbody {\n  border-top: 0.125rem solid #e3e3e3;\n}\n\n.table .table {\n  background-color: #1e1e2f;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 0.0625rem solid #e3e3e3;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 0.0625rem solid #e3e3e3;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 0.125rem;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(34, 42, 66, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  background-color: rgba(34, 42, 66, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f7cdf0;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #f3b7e9;\n}\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #f3b7e9;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #fcfcfd;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #ededf3;\n}\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #ededf3;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b8fbee;\n}\n\n.table-hover .table-success:hover {\n  background-color: #a0fae8;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #a0fae8;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #c0dffd;\n}\n\n.table-hover .table-info:hover {\n  background-color: #a7d2fc;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #a7d2fc;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffdfd8;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffcabf;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffcabf;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #fed2e1;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #fdb9d0;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #fdb9d0;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #e8eaed;\n}\n\n.table-hover .table-light:hover {\n  background-color: #dadde2;\n}\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #dadde2;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c1c2c3;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b4b5b6;\n}\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b4b5b6;\n}\n\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #c6cbd8;\n}\n\n.table-hover .table-default:hover {\n  background-color: #b7bdce;\n}\n\n.table-hover .table-default:hover > td,\n.table-hover .table-default:hover > th {\n  background-color: #b7bdce;\n}\n\n.table-white,\n.table-white > th,\n.table-white > td {\n  background-color: white;\n}\n\n.table-hover .table-white:hover {\n  background-color: #f2f2f2;\n}\n\n.table-hover .table-white:hover > td,\n.table-hover .table-white:hover > th {\n  background-color: #f2f2f2;\n}\n\n.table-neutral,\n.table-neutral > th,\n.table-neutral > td {\n  background-color: white;\n}\n\n.table-hover .table-neutral:hover {\n  background-color: #f2f2f2;\n}\n\n.table-hover .table-neutral:hover > td,\n.table-hover .table-neutral:hover > th {\n  background-color: #f2f2f2;\n}\n\n.table-darker,\n.table-darker > th,\n.table-darker > td {\n  background-color: #b8b8b8;\n}\n\n.table-hover .table-darker:hover {\n  background-color: #ababab;\n}\n\n.table-hover .table-darker:hover > td,\n.table-hover .table-darker:hover > th {\n  background-color: #ababab;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(34, 42, 66, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(25, 31, 49, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(25, 31, 49, 0.075);\n}\n\n.table .thead-dark th {\n  color: #1e1e2f;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table .thead-light th {\n  color: #525f7f;\n  background-color: #e9ecef;\n  border-color: #e3e3e3;\n}\n\n.table-dark {\n  color: #1e1e2f;\n  background-color: #212529;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered {\n  border: 0;\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover tbody tr:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(2.24999963rem + 2px);\n  padding: 0.5rem 0.7rem;\n  font-size: 0.875rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n  background-clip: padding-box;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: none;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.form-control option {\n  color: #222a42;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #ffffff;\n  border-color: rgba(50, 151, 211, 0.25);\n  outline: 0;\n  box-shadow: none, none;\n}\n\n.form-control::placeholder {\n  color: #adb5bd;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control:focus::-ms-value {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.875rem + 1px);\n  padding-bottom: calc(0.875rem + 1px);\n  font-size: 0.99925rem;\n  line-height: 1.35;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1.428571;\n  color: #525f7f;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n  border-radius: 0.2857rem;\n}\n\n.form-control-lg {\n  height: calc(3.0989875rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 0.99925rem;\n  line-height: 1.35;\n  border-radius: 0.4285rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row > .col,\n.form-row > [class*=\"col-\"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #00f2c3;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #ffffff;\n  background-color: rgba(0, 242, 195, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #00f2c3;\n}\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n.custom-select:valid:focus,\n.custom-select.is-valid:focus {\n  border-color: #00f2c3;\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip, .was-validated\n.custom-select:valid ~ .valid-feedback,\n.was-validated\n.custom-select:valid ~ .valid-tooltip,\n.custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control-file:valid ~ .valid-feedback,\n.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,\n.form-control-file.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #00f2c3;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #00f2c3;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  background-color: #73ffe4;\n}\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #26ffd5;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #1e1e2f, 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #00f2c3;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label::after, .custom-file-input.is-valid ~ .custom-file-label::after {\n  border-color: inherit;\n}\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff8d72;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #ffffff;\n  background-color: rgba(255, 141, 114, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #ff8d72;\n}\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n.custom-select:invalid:focus,\n.custom-select.is-invalid:focus {\n  border-color: #ff8d72;\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\n.custom-select:invalid ~ .invalid-feedback,\n.was-validated\n.custom-select:invalid ~ .invalid-tooltip,\n.custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control-file:invalid ~ .invalid-feedback,\n.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,\n.form-control-file.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #ff8d72;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #ff8d72;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  background-color: #fff4f2;\n}\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #ffb6a5;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #1e1e2f, 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #ff8d72;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label::after, .custom-file-input.is-invalid ~ .custom-file-label::after {\n  border-color: inherit;\n}\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.form-inline .form-check {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 11px 40px;\n  font-size: 0.875rem;\n  line-height: 1.35em;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n\n.btn:hover, .btn:focus {\n  text-decoration: none;\n}\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n}\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n  box-shadow: none;\n}\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n  box-shadow: none;\n}\n\n.btn:not(:disabled):not(.disabled):active:focus, .btn:not(:disabled):not(.disabled).active:focus {\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08), none;\n}\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-primary:hover {\n  color: #ffffff;\n  background-color: #db2dc0;\n  border-color: #d725bb;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(225, 78, 202, 0.5);\n}\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #ffffff;\n  background-color: #d725bb;\n  border-color: #cd23b2;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(225, 78, 202, 0.5);\n}\n\n.btn-secondary {\n  color: #212529;\n  background-color: #f4f5f7;\n  border-color: #f4f5f7;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-secondary:hover {\n  color: #212529;\n  background-color: #dee1e7;\n  border-color: #d6dae2;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(244, 245, 247, 0.5);\n}\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #212529;\n  background-color: #f4f5f7;\n  border-color: #f4f5f7;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #212529;\n  background-color: #d6dae2;\n  border-color: #cfd3dc;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(244, 245, 247, 0.5);\n}\n\n.btn-success {\n  color: #ffffff;\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-success:hover {\n  color: #ffffff;\n  background-color: #00cca4;\n  border-color: #00bf9a;\n}\n\n.btn-success:focus, .btn-success.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(0, 242, 195, 0.5);\n}\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #ffffff;\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n}\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #ffffff;\n  background-color: #00bf9a;\n  border-color: #00b290;\n}\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(0, 242, 195, 0.5);\n}\n\n.btn-info {\n  color: #ffffff;\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-info:hover {\n  color: #ffffff;\n  background-color: #0779e8;\n  border-color: #0772db;\n}\n\n.btn-info:focus, .btn-info.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(29, 140, 248, 0.5);\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #ffffff;\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n}\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #ffffff;\n  background-color: #0772db;\n  border-color: #066ccf;\n}\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(29, 140, 248, 0.5);\n}\n\n.btn-warning {\n  color: #ffffff;\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-warning:hover {\n  color: #ffffff;\n  background-color: #ff6e4c;\n  border-color: #ff643f;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 141, 114, 0.5);\n}\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #ffffff;\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #ffffff;\n  background-color: #ff643f;\n  border-color: #ff5932;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(255, 141, 114, 0.5);\n}\n\n.btn-danger {\n  color: #ffffff;\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-danger:hover {\n  color: #ffffff;\n  background-color: #fd377a;\n  border-color: #fc2b71;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(253, 93, 147, 0.5);\n}\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #ffffff;\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #ffffff;\n  background-color: #fc2b71;\n  border-color: #fc1e69;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(253, 93, 147, 0.5);\n}\n\n.btn-light {\n  color: #ffffff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-light:hover {\n  color: #ffffff;\n  background-color: #98a2ac;\n  border-color: #919ca6;\n}\n\n.btn-light:focus, .btn-light.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(173, 181, 189, 0.5);\n}\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #ffffff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #ffffff;\n  background-color: #919ca6;\n  border-color: #8a95a1;\n}\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(173, 181, 189, 0.5);\n}\n\n.btn-dark {\n  color: #ffffff;\n  background-color: #212529;\n  border-color: #212529;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-dark:hover {\n  color: #ffffff;\n  background-color: #101214;\n  border-color: #0a0c0d;\n}\n\n.btn-dark:focus, .btn-dark.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(33, 37, 41, 0.5);\n}\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #ffffff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #ffffff;\n  background-color: #0a0c0d;\n  border-color: #050506;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(33, 37, 41, 0.5);\n}\n\n.btn-default {\n  color: #ffffff;\n  background-color: #344675;\n  border-color: #344675;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-default:hover {\n  color: #ffffff;\n  background-color: #28365b;\n  border-color: #243152;\n}\n\n.btn-default:focus, .btn-default.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(52, 70, 117, 0.5);\n}\n\n.btn-default.disabled, .btn-default:disabled {\n  color: #ffffff;\n  background-color: #344675;\n  border-color: #344675;\n}\n\n.btn-default:not(:disabled):not(.disabled):active, .btn-default:not(:disabled):not(.disabled).active,\n.show > .btn-default.dropdown-toggle {\n  color: #ffffff;\n  background-color: #243152;\n  border-color: #202c49;\n}\n\n.btn-default:not(:disabled):not(.disabled):active:focus, .btn-default:not(:disabled):not(.disabled).active:focus,\n.show > .btn-default.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(52, 70, 117, 0.5);\n}\n\n.btn-white {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-white:hover {\n  color: #212529;\n  background-color: #ececec;\n  border-color: #e6e5e5;\n}\n\n.btn-white:focus, .btn-white.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-white.disabled, .btn-white:disabled {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-white:not(:disabled):not(.disabled):active, .btn-white:not(:disabled):not(.disabled).active,\n.show > .btn-white.dropdown-toggle {\n  color: #212529;\n  background-color: #e6e5e5;\n  border-color: #dfdfdf;\n}\n\n.btn-white:not(:disabled):not(.disabled):active:focus, .btn-white:not(:disabled):not(.disabled).active:focus,\n.show > .btn-white.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-neutral {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-neutral:hover {\n  color: #212529;\n  background-color: #ececec;\n  border-color: #e6e5e5;\n}\n\n.btn-neutral:focus, .btn-neutral.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-neutral.disabled, .btn-neutral:disabled {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-neutral:not(:disabled):not(.disabled):active, .btn-neutral:not(:disabled):not(.disabled).active,\n.show > .btn-neutral.dropdown-toggle {\n  color: #212529;\n  background-color: #e6e5e5;\n  border-color: #dfdfdf;\n}\n\n.btn-neutral:not(:disabled):not(.disabled):active:focus, .btn-neutral:not(:disabled):not(.disabled).active:focus,\n.show > .btn-neutral.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-darker {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.btn-darker:hover {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n}\n\n.btn-darker:focus, .btn-darker.focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(0, 0, 0, 0.5);\n}\n\n.btn-darker.disabled, .btn-darker:disabled {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n}\n\n.btn-darker:not(:disabled):not(.disabled):active, .btn-darker:not(:disabled):not(.disabled).active,\n.show > .btn-darker.dropdown-toggle {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n}\n\n.btn-darker:not(:disabled):not(.disabled):active:focus, .btn-darker:not(:disabled):not(.disabled).active:focus,\n.show > .btn-darker.dropdown-toggle:focus {\n  box-shadow: none, 0 0 0 0 rgba(0, 0, 0, 0.5);\n}\n\n.btn-outline-primary {\n  color: #e14eca;\n  background-color: transparent;\n  background-image: none;\n  border-color: #e14eca;\n}\n\n.btn-outline-primary:hover {\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0 rgba(225, 78, 202, 0.5);\n}\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #e14eca;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(225, 78, 202, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #f4f5f7;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f4f5f7;\n}\n\n.btn-outline-secondary:hover {\n  color: #212529;\n  background-color: #f4f5f7;\n  border-color: #f4f5f7;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0 rgba(244, 245, 247, 0.5);\n}\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #f4f5f7;\n  background-color: transparent;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #212529;\n  background-color: #f4f5f7;\n  border-color: #f4f5f7;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(244, 245, 247, 0.5);\n}\n\n.btn-outline-success {\n  color: #00f2c3;\n  background-color: transparent;\n  background-image: none;\n  border-color: #00f2c3;\n}\n\n.btn-outline-success:hover {\n  color: #ffffff;\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.5);\n}\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #00f2c3;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #ffffff;\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.5);\n}\n\n.btn-outline-info {\n  color: #1d8cf8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #1d8cf8;\n}\n\n.btn-outline-info:hover {\n  color: #ffffff;\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0 rgba(29, 140, 248, 0.5);\n}\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #1d8cf8;\n  background-color: transparent;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #ffffff;\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(29, 140, 248, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ff8d72;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ff8d72;\n}\n\n.btn-outline-warning:hover {\n  color: #ffffff;\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.5);\n}\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ff8d72;\n  background-color: transparent;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #ffffff;\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.5);\n}\n\n.btn-outline-danger {\n  color: #fd5d93;\n  background-color: transparent;\n  background-image: none;\n  border-color: #fd5d93;\n}\n\n.btn-outline-danger:hover {\n  color: #ffffff;\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0 rgba(253, 93, 147, 0.5);\n}\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #fd5d93;\n  background-color: transparent;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #ffffff;\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(253, 93, 147, 0.5);\n}\n\n.btn-outline-light {\n  color: #adb5bd;\n  background-color: transparent;\n  background-image: none;\n  border-color: #adb5bd;\n}\n\n.btn-outline-light:hover {\n  color: #ffffff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);\n}\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #adb5bd;\n  background-color: transparent;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #ffffff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);\n}\n\n.btn-outline-dark {\n  color: #212529;\n  background-color: transparent;\n  background-image: none;\n  border-color: #212529;\n}\n\n.btn-outline-dark:hover {\n  color: #ffffff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);\n}\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #212529;\n  background-color: transparent;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #ffffff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);\n}\n\n.btn-outline-default {\n  color: #344675;\n  background-color: transparent;\n  background-image: none;\n  border-color: #344675;\n}\n\n.btn-outline-default:hover {\n  color: #ffffff;\n  background-color: #344675;\n  border-color: #344675;\n}\n\n.btn-outline-default:focus, .btn-outline-default.focus {\n  box-shadow: 0 0 0 0 rgba(52, 70, 117, 0.5);\n}\n\n.btn-outline-default.disabled, .btn-outline-default:disabled {\n  color: #344675;\n  background-color: transparent;\n}\n\n.btn-outline-default:not(:disabled):not(.disabled):active, .btn-outline-default:not(:disabled):not(.disabled).active,\n.show > .btn-outline-default.dropdown-toggle {\n  color: #ffffff;\n  background-color: #344675;\n  border-color: #344675;\n}\n\n.btn-outline-default:not(:disabled):not(.disabled):active:focus, .btn-outline-default:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-default.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(52, 70, 117, 0.5);\n}\n\n.btn-outline-white {\n  color: #ffffff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffffff;\n}\n\n.btn-outline-white:hover {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-outline-white:focus, .btn-outline-white.focus {\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-outline-white.disabled, .btn-outline-white:disabled {\n  color: #ffffff;\n  background-color: transparent;\n}\n\n.btn-outline-white:not(:disabled):not(.disabled):active, .btn-outline-white:not(:disabled):not(.disabled).active,\n.show > .btn-outline-white.dropdown-toggle {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-outline-white:not(:disabled):not(.disabled):active:focus, .btn-outline-white:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-white.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-outline-neutral {\n  color: #ffffff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffffff;\n}\n\n.btn-outline-neutral:hover {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-outline-neutral:focus, .btn-outline-neutral.focus {\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-outline-neutral.disabled, .btn-outline-neutral:disabled {\n  color: #ffffff;\n  background-color: transparent;\n}\n\n.btn-outline-neutral:not(:disabled):not(.disabled):active, .btn-outline-neutral:not(:disabled):not(.disabled).active,\n.show > .btn-outline-neutral.dropdown-toggle {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-outline-neutral:not(:disabled):not(.disabled):active:focus, .btn-outline-neutral:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-neutral.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n}\n\n.btn-outline-darker {\n  color: black;\n  background-color: transparent;\n  background-image: none;\n  border-color: black;\n}\n\n.btn-outline-darker:hover {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n}\n\n.btn-outline-darker:focus, .btn-outline-darker.focus {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);\n}\n\n.btn-outline-darker.disabled, .btn-outline-darker:disabled {\n  color: black;\n  background-color: transparent;\n}\n\n.btn-outline-darker:not(:disabled):not(.disabled):active, .btn-outline-darker:not(:disabled):not(.disabled).active,\n.show > .btn-outline-darker.dropdown-toggle {\n  color: #ffffff;\n  background-color: black;\n  border-color: black;\n}\n\n.btn-outline-darker:not(:disabled):not(.disabled):active:focus, .btn-outline-darker:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-darker.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #e14eca;\n  background-color: transparent;\n}\n\n.btn-link:hover {\n  color: #c221a9;\n  text-decoration: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: none;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 15px 48px;\n  font-size: 0.99925rem;\n  line-height: 1.35;\n  border-radius: 0.4285rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 15px;\n  font-size: 0.75rem;\n  line-height: 1.35;\n  border-radius: 0.25rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 0.875rem;\n  color: #525f7f;\n  text-align: left;\n  list-style: none;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 0 solid rgba(34, 42, 66, 0.15);\n  border-radius: 0.1428rem;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f6f9fc;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #e14eca;\n}\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.75rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 0 1 auto;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn + .btn-group,\n.btn-group-vertical .btn-group + .btn,\n.btn-group-vertical .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 30px;\n  padding-left: 30px;\n}\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 11.25px;\n  padding-left: 11.25px;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 36px;\n  padding-left: 36px;\n}\n\n.btn-group.show .dropdown-toggle {\n  box-shadow: none;\n}\n\n.btn-group.show .dropdown-toggle.btn-link {\n  box-shadow: none;\n}\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.btn-group-vertical .btn,\n.btn-group-vertical .btn-group {\n  width: 100%;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn input[type=\"checkbox\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group > .form-control,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-file {\n  display: flex;\n  align-items: center;\n}\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n}\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.7rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.428571;\n  color: #adb5bd;\n  text-align: center;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n}\n\n.input-group-text input[type=\"radio\"],\n.input-group-text input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  height: calc(3.0989875rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 0.99925rem;\n  line-height: 1.35;\n  border-radius: 0.4285rem;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  height: calc(1.5125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n  border-radius: 0.2857rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.3125rem;\n  padding-left: 1.75rem;\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #ffffff;\n  background-color: #e14eca;\n  box-shadow: none;\n}\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: none;\n}\n\n.custom-control-input:active ~ .custom-control-label::before {\n  color: #ffffff;\n  background-color: #e14eca;\n  box-shadow: none;\n}\n\n.custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.03125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  pointer-events: none;\n  content: \"\";\n  user-select: none;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.03125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.2857rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #e14eca;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #e14eca;\n  box-shadow: none;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23ffffff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #e14eca;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23ffffff'/%3E%3C/svg%3E\");\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.24999963rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  vertical-align: middle;\n  background: transparent url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075);\n  appearance: none;\n}\n\n.custom-select:focus {\n  border-color: rgba(50, 151, 211, 0.25);\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075), 0 0 0 0 rgba(50, 151, 211, 0.5);\n}\n\n.custom-select:focus::-ms-value {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n}\n\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm {\n  height: calc(1.5125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg {\n  height: calc(3.0989875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.24999963rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.24999963rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: rgba(50, 151, 211, 0.25);\n  box-shadow: none;\n}\n\n.custom-file-input:focus ~ .custom-file-label::after {\n  border-color: rgba(50, 151, 211, 0.25);\n}\n\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.24999963rem + 2px);\n  padding: 0.5rem 0.7rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: none;\n}\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: 2.24999963rem;\n  padding: 0.5rem 0.7rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  content: \"Browse\";\n  background-color: transparent;\n  border-left: 1px solid #cad1d7;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  appearance: none;\n}\n\n.custom-range:focus {\n  outline: none;\n}\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #fbe7f8;\n}\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #e3e3e3;\n  border-color: transparent;\n  border-radius: 1rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #fbe7f8;\n}\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #e3e3e3;\n  border-color: transparent;\n  border-radius: 1rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-ms-thumb:active {\n  background-color: #fbe7f8;\n}\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n\n.custom-range::-ms-fill-lower {\n  background-color: #e3e3e3;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #e3e3e3;\n  border-radius: 1rem;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #6c757d;\n}\n\n.nav-tabs {\n  border-bottom: 0.0625rem solid #e3e3e3;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: -0.0625rem;\n}\n\n.nav-tabs .nav-link {\n  border: 0.0625rem solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #e3e3e3;\n}\n\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #525f7f;\n  background-color: #1e1e2f;\n  border-color: #e3e3e3 #e3e3e3 #1e1e2f;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -0.0625rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #ffffff;\n  background-color: #e14eca;\n}\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #ffffff;\n  background-clip: border-box;\n  border: 0.0625rem solid rgba(34, 42, 66, 0.05);\n  border-radius: 0.2857rem;\n}\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.2857rem;\n  border-top-right-radius: 0.2857rem;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.2857rem;\n  border-bottom-left-radius: 0.2857rem;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.5rem;\n}\n\n.card-title {\n  margin-bottom: 1.25rem;\n}\n\n.card-subtitle {\n  margin-top: -0.625rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.5rem;\n}\n\n.card-header {\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 0;\n  background-color: #f6f9fc;\n  border-bottom: 0.0625rem solid rgba(34, 42, 66, 0.05);\n}\n\n.card-header:first-child {\n  border-radius: calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem) 0 0;\n}\n\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n\n.card-footer {\n  padding: 1.25rem 1.5rem;\n  background-color: #f6f9fc;\n  border-top: 0.0625rem solid rgba(34, 42, 66, 0.05);\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem);\n}\n\n.card-header-tabs {\n  margin-right: -0.75rem;\n  margin-bottom: -1.25rem;\n  margin-left: -0.75rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.75rem;\n  margin-left: -0.75rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.2857rem - 0.0625rem);\n}\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.2857rem - 0.0625rem);\n  border-top-right-radius: calc(0.2857rem - 0.0625rem);\n}\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.2857rem - 0.0625rem);\n  border-bottom-left-radius: calc(0.2857rem - 0.0625rem);\n}\n\n.card-deck {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-deck {\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    display: flex;\n    flex: 1 0 0%;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-group {\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-top,\n  .card-group > .card:first-child .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-bottom,\n  .card-group > .card:first-child .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-top,\n  .card-group > .card:last-child .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-bottom,\n  .card-group > .card:last-child .card-footer {\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:only-child {\n    border-radius: 0.2857rem;\n  }\n  .card-group > .card:only-child .card-img-top,\n  .card-group > .card:only-child .card-header {\n    border-top-left-radius: 0.2857rem;\n    border-top-right-radius: 0.2857rem;\n  }\n  .card-group > .card:only-child .card-img-bottom,\n  .card-group > .card:only-child .card-footer {\n    border-bottom-right-radius: 0.2857rem;\n    border-bottom-left-radius: 0.2857rem;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: 0;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n    border-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 1.25rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0;\n}\n\n.accordion .card:not(:first-of-type) .card-header:first-child {\n  border-radius: 0;\n}\n\n.accordion .card:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion .card:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #ffffff;\n  content: \"/\";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #ffffff;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0 0.6875rem;\n  margin-left: -0.0625rem;\n  line-height: 1.25;\n  color: #ffffff;\n  background-color: transparent;\n  border: 0.0625rem solid #e3e3e3;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #6c757d;\n  text-decoration: none;\n  background-color: #e3e3e3;\n  border-color: #e3e3e3;\n}\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: none;\n}\n\n.page-link:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: transparent;\n  border-color: #e3e3e3;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.99925rem;\n  line-height: 1.625rem;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.4285rem;\n  border-bottom-left-radius: 0.4285rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.4285rem;\n  border-bottom-right-radius: 0.4285rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2857rem;\n  border-bottom-left-radius: 0.2857rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2857rem;\n  border-bottom-right-radius: 0.2857rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.62475rem;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.875em;\n  padding-left: 0.875em;\n  border-radius: 0.875rem;\n}\n\n.badge-primary {\n  color: #ffffff;\n  background-color: #e14eca;\n}\n\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #d725bb;\n}\n\n.badge-secondary {\n  color: #212529;\n  background-color: #f4f5f7;\n}\n\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #d6dae2;\n}\n\n.badge-success {\n  color: #ffffff;\n  background-color: #00f2c3;\n}\n\n.badge-success[href]:hover, .badge-success[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #00bf9a;\n}\n\n.badge-info {\n  color: #ffffff;\n  background-color: #1d8cf8;\n}\n\n.badge-info[href]:hover, .badge-info[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #0772db;\n}\n\n.badge-warning {\n  color: #ffffff;\n  background-color: #ff8d72;\n}\n\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #ff643f;\n}\n\n.badge-danger {\n  color: #ffffff;\n  background-color: #fd5d93;\n}\n\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #fc2b71;\n}\n\n.badge-light {\n  color: #ffffff;\n  background-color: #adb5bd;\n}\n\n.badge-light[href]:hover, .badge-light[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #919ca6;\n}\n\n.badge-dark {\n  color: #ffffff;\n  background-color: #212529;\n}\n\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #0a0c0d;\n}\n\n.badge-default {\n  color: #ffffff;\n  background-color: #344675;\n}\n\n.badge-default[href]:hover, .badge-default[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: #243152;\n}\n\n.badge-white {\n  color: #212529;\n  background-color: #ffffff;\n}\n\n.badge-white[href]:hover, .badge-white[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #e6e5e5;\n}\n\n.badge-neutral {\n  color: #212529;\n  background-color: #ffffff;\n}\n\n.badge-neutral[href]:hover, .badge-neutral[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #e6e5e5;\n}\n\n.badge-darker {\n  color: #ffffff;\n  background-color: black;\n}\n\n.badge-darker[href]:hover, .badge-darker[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  background-color: black;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.4285rem;\n}\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.9rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.2857rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 600;\n}\n\n.alert-dismissible {\n  padding-right: 3.8125rem;\n}\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.9rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #e14eca;\n  background-color: #e66ad2;\n  border-color: #e66ad2;\n}\n\n.alert-primary hr {\n  border-top-color: #e254cb;\n}\n\n.alert-primary .alert-link {\n  color: #d725bb;\n}\n\n.alert-secondary {\n  color: #f4f5f7;\n  background-color: #f6f7f8;\n  border-color: #f6f7f8;\n}\n\n.alert-secondary hr {\n  border-top-color: #e8eaed;\n}\n\n.alert-secondary .alert-link {\n  color: #d6dae2;\n}\n\n.alert-success {\n  color: #00f2c3;\n  background-color: #29f4cd;\n  border-color: #29f4cd;\n}\n\n.alert-success hr {\n  border-top-color: #11f3c7;\n}\n\n.alert-success .alert-link {\n  color: #00bf9a;\n}\n\n.alert-info {\n  color: #1d8cf8;\n  background-color: #419ef9;\n  border-color: #419ef9;\n}\n\n.alert-info hr {\n  border-top-color: #2891f8;\n}\n\n.alert-info .alert-link {\n  color: #0772db;\n}\n\n.alert-warning {\n  color: #ff8d72;\n  background-color: #ff9f89;\n  border-color: #ff9f89;\n}\n\n.alert-warning hr {\n  border-top-color: #ff8a70;\n}\n\n.alert-warning .alert-link {\n  color: #ff643f;\n}\n\n.alert-danger {\n  color: #fd5d93;\n  background-color: #fd77a4;\n  border-color: #fd77a4;\n}\n\n.alert-danger hr {\n  border-top-color: #fd5e93;\n}\n\n.alert-danger .alert-link {\n  color: #fc2b71;\n}\n\n.alert-light {\n  color: #adb5bd;\n  background-color: #bac1c8;\n  border-color: #bac1c8;\n}\n\n.alert-light hr {\n  border-top-color: #acb4bd;\n}\n\n.alert-light .alert-link {\n  color: #919ca6;\n}\n\n.alert-dark {\n  color: #212529;\n  background-color: #45484b;\n  border-color: #45484b;\n}\n\n.alert-dark hr {\n  border-top-color: #393b3e;\n}\n\n.alert-dark .alert-link {\n  color: #0a0c0d;\n}\n\n.alert-default {\n  color: #344675;\n  background-color: #54648b;\n  border-color: #54648b;\n}\n\n.alert-default hr {\n  border-top-color: #4a597b;\n}\n\n.alert-default .alert-link {\n  color: #243152;\n}\n\n.alert-white {\n  color: white;\n  background-color: white;\n  border-color: white;\n}\n\n.alert-white hr {\n  border-top-color: #f2f2f2;\n}\n\n.alert-white .alert-link {\n  color: #e6e5e5;\n}\n\n.alert-neutral {\n  color: white;\n  background-color: white;\n  border-color: white;\n}\n\n.alert-neutral hr {\n  border-top-color: #f2f2f2;\n}\n\n.alert-neutral .alert-link {\n  color: #e6e5e5;\n}\n\n.alert-darker {\n  color: black;\n  background-color: #292929;\n  border-color: #292929;\n}\n\n.alert-darker hr {\n  border-top-color: #1c1c1c;\n}\n\n.alert-darker .alert-link {\n  color: black;\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 0.5rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: flex;\n  height: 0.5rem;\n  overflow: hidden;\n  font-size: 0.65625rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 0.875rem;\n  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.3);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #ffffff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e14eca;\n  transition: width 0.6s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 0.5rem 0.5rem;\n}\n\n.progress-bar-animated {\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1;\n}\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #525f7f;\n  text-align: inherit;\n}\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  color: #525f7f;\n  text-decoration: none;\n  background-color: #f6f9fc;\n}\n\n.list-group-item-action:active {\n  color: #525f7f;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 1rem 1rem;\n  margin-bottom: -0.0625rem;\n  background-color: transparent;\n  border: 0.0625rem solid rgba(255, 255, 255, 0.1);\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item:hover, .list-group-item:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary {\n  color: #853d89;\n  background-color: #f7cdf0;\n}\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #853d89;\n  background-color: #f3b7e9;\n}\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #853d89;\n  border-color: #853d89;\n}\n\n.list-group-item-secondary {\n  color: #8f94a0;\n  background-color: #fcfcfd;\n}\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #8f94a0;\n  background-color: #ededf3;\n}\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #8f94a0;\n  border-color: #8f94a0;\n}\n\n.list-group-item-success {\n  color: #109285;\n  background-color: #b8fbee;\n}\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #109285;\n  background-color: #a0fae8;\n}\n\n.list-group-item-success.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #109285;\n  border-color: #109285;\n}\n\n.list-group-item-info {\n  color: #1f5da1;\n  background-color: #c0dffd;\n}\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #1f5da1;\n  background-color: #a7d2fc;\n}\n\n.list-group-item-info.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #1f5da1;\n  border-color: #1f5da1;\n}\n\n.list-group-item-warning {\n  color: #955d5b;\n  background-color: #ffdfd8;\n}\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #955d5b;\n  background-color: #ffcabf;\n}\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #955d5b;\n  border-color: #955d5b;\n}\n\n.list-group-item-danger {\n  color: #94456c;\n  background-color: #fed2e1;\n}\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #94456c;\n  background-color: #fdb9d0;\n}\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #94456c;\n  border-color: #94456c;\n}\n\n.list-group-item-light {\n  color: #6a7282;\n  background-color: #e8eaed;\n}\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #6a7282;\n  background-color: #dadde2;\n}\n\n.list-group-item-light.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #6a7282;\n  border-color: #6a7282;\n}\n\n.list-group-item-dark {\n  color: #212735;\n  background-color: #c1c2c3;\n}\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #212735;\n  background-color: #b4b5b6;\n}\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #212735;\n  border-color: #212735;\n}\n\n.list-group-item-default {\n  color: #2b395d;\n  background-color: #c6cbd8;\n}\n\n.list-group-item-default.list-group-item-action:hover, .list-group-item-default.list-group-item-action:focus {\n  color: #2b395d;\n  background-color: #b7bdce;\n}\n\n.list-group-item-default.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #2b395d;\n  border-color: #2b395d;\n}\n\n.list-group-item-white {\n  color: #9599a4;\n  background-color: white;\n}\n\n.list-group-item-white.list-group-item-action:hover, .list-group-item-white.list-group-item-action:focus {\n  color: #9599a4;\n  background-color: #f2f2f2;\n}\n\n.list-group-item-white.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #9599a4;\n  border-color: #9599a4;\n}\n\n.list-group-item-neutral {\n  color: #9599a4;\n  background-color: white;\n}\n\n.list-group-item-neutral.list-group-item-action:hover, .list-group-item-neutral.list-group-item-action:focus {\n  color: #9599a4;\n  background-color: #f2f2f2;\n}\n\n.list-group-item-neutral.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #9599a4;\n  border-color: #9599a4;\n}\n\n.list-group-item-darker {\n  color: #101420;\n  background-color: #b8b8b8;\n}\n\n.list-group-item-darker.list-group-item-action:hover, .list-group-item-darker.list-group-item-action:focus {\n  color: #101420;\n  background-color: #ababab;\n}\n\n.list-group-item-darker.list-group-item-action.active {\n  color: #ffffff;\n  background-color: #101420;\n  border-color: #101420;\n}\n\n.close {\n  float: right;\n  font-size: 1.3125rem;\n  font-weight: 600;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.6);\n  text-shadow: none;\n  opacity: .5;\n}\n\n.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  color: rgba(0, 0, 0, 0.6);\n  text-decoration: none;\n  opacity: .75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n\n.modal.show .modal-dialog {\n  transform: translate(0, 0);\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2));\n}\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - (0.5rem * 2));\n  content: \"\";\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid rgba(34, 42, 66, 0.2);\n  border-radius: 0.2857rem;\n  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.5);\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #222a42;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.show {\n  opacity: 0.16;\n}\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 0 24px;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.2857rem;\n  border-top-right-radius: 0.2857rem;\n}\n\n.modal-header .close {\n  padding: 24px 24px 0 24px;\n  margin: -24px 24px 0 24px -24px 24px 0 24px -24px 24px 0 24px auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.1;\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 24px 24px 16px 24px;\n}\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 24px 24px 16px 24px;\n  border-top: 1px solid #e9ecef;\n}\n\n.modal-footer > :not(:first-child) {\n  margin-left: .25rem;\n}\n\n.modal-footer > :not(:last-child) {\n  margin-right: .25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2));\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - (1.75rem * 2));\n  }\n  .modal-content {\n    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);\n  }\n  .modal-sm {\n    max-width: 380px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.75rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.show {\n  opacity: 0.9;\n}\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n  bottom: 0;\n}\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #ffffff;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #ffffff;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n  top: 0;\n}\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #ffffff;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #ffffff;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #222a42;\n  text-align: center;\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: \"Poppins\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.75rem;\n  word-wrap: break-word;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid rgba(34, 42, 66, 0.05);\n  border-radius: 0.4285rem;\n  box-shadow: 0px 0.5rem 2rem 0px rgba(34, 42, 66, 0.2);\n}\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1.5rem;\n  height: 0.75rem;\n  margin: 0 0.4285rem;\n}\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.75rem;\n}\n\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n  bottom: calc((0.75rem + 1px) * -1);\n}\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n.bs-popover-top .arrow::after,\n.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  border-width: 0.75rem 0.75rem 0;\n}\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n  bottom: 0;\n  border-top-color: transparent;\n}\n\n\n.bs-popover-top .arrow::after,\n.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  bottom: 1px;\n  border-top-color: #ffffff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.75rem;\n}\n\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n  left: calc((0.75rem + 1px) * -1);\n  width: 0.75rem;\n  height: 1.5rem;\n  margin: 0.4285rem 0;\n}\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n.bs-popover-right .arrow::after,\n.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  border-width: 0.75rem 0.75rem 0.75rem 0;\n}\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n  left: 0;\n  border-right-color: transparent;\n}\n\n\n.bs-popover-right .arrow::after,\n.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  left: 1px;\n  border-right-color: #ffffff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.75rem;\n}\n\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n  top: calc((0.75rem + 1px) * -1);\n}\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n.bs-popover-bottom .arrow::after,\n.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  border-width: 0 0.75rem 0.75rem 0.75rem;\n}\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n  top: 0;\n  border-bottom-color: transparent;\n}\n\n\n.bs-popover-bottom .arrow::after,\n.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  top: 1px;\n  border-bottom-color: #ffffff;\n}\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1.5rem;\n  margin-left: -0.75rem;\n  content: \"\";\n  border-bottom: 1px solid #ffffff;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.75rem;\n}\n\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n  right: calc((0.75rem + 1px) * -1);\n  width: 0.75rem;\n  height: 1.5rem;\n  margin: 0.4285rem 0;\n}\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n.bs-popover-left .arrow::after,\n.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  border-width: 0.75rem 0 0.75rem 0.75rem;\n}\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n  right: 0;\n  border-left-color: transparent;\n}\n\n\n.bs-popover-left .arrow::after,\n.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  right: 1px;\n  border-left-color: #ffffff;\n}\n\n.popover-header {\n  padding: 0.75rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #32325d;\n  background-color: #ffffff;\n  border-bottom: 1px solid #f2f2f2;\n  border-top-left-radius: calc(0.4285rem - 1px);\n  border-top-right-radius: calc(0.4285rem - 1px);\n}\n\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.75rem 0.75rem;\n  color: #525f7f;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n  transition: transform 0.6s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-item.active,\n  .carousel-item-next,\n  .carousel-item-prev {\n    transition: none;\n  }\n}\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0;\n}\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  transform: translateX(0);\n}\n\n@supports (transform-style: preserve-3d) {\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.carousel-item-next,\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n@supports (transform-style: preserve-3d) {\n  .carousel-item-next,\n  .active.carousel-item-right {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n@supports (transform-style: preserve-3d) {\n  .carousel-item-prev,\n  .active.carousel-item-left {\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-duration: .6s;\n  transition-property: opacity;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  opacity: 0;\n}\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev,\n.carousel-fade .carousel-item.active,\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-prev {\n  transform: translateX(0);\n}\n\n@supports (transform-style: preserve-3d) {\n  .carousel-fade .carousel-item-next,\n  .carousel-fade .carousel-item-prev,\n  .carousel-fade .carousel-item.active,\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-prev {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #ffffff;\n  text-align: center;\n  opacity: 0.5;\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.carousel-indicators li::before {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n\n.carousel-indicators li::after {\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n\n.carousel-indicators .active {\n  background-color: #ffffff;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #e14eca !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #d725bb !important;\n}\n\n.bg-secondary {\n  background-color: #f4f5f7 !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #d6dae2 !important;\n}\n\n.bg-success {\n  background-color: #00f2c3 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #00bf9a !important;\n}\n\n.bg-info {\n  background-color: #1d8cf8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #0772db !important;\n}\n\n.bg-warning {\n  background-color: #ff8d72 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #ff643f !important;\n}\n\n.bg-danger {\n  background-color: #fd5d93 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #fc2b71 !important;\n}\n\n.bg-light {\n  background-color: #adb5bd !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #919ca6 !important;\n}\n\n.bg-dark {\n  background-color: #212529 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #0a0c0d !important;\n}\n\n.bg-default {\n  background-color: #344675 !important;\n}\n\na.bg-default:hover, a.bg-default:focus,\nbutton.bg-default:hover,\nbutton.bg-default:focus {\n  background-color: #243152 !important;\n}\n\n.bg-white {\n  background-color: #ffffff !important;\n}\n\na.bg-white:hover, a.bg-white:focus,\nbutton.bg-white:hover,\nbutton.bg-white:focus {\n  background-color: #e6e5e5 !important;\n}\n\n.bg-neutral {\n  background-color: #ffffff !important;\n}\n\na.bg-neutral:hover, a.bg-neutral:focus,\nbutton.bg-neutral:hover,\nbutton.bg-neutral:focus {\n  background-color: #e6e5e5 !important;\n}\n\n.bg-darker {\n  background-color: black !important;\n}\n\na.bg-darker:hover, a.bg-darker:focus,\nbutton.bg-darker:hover,\nbutton.bg-darker:focus {\n  background-color: black !important;\n}\n\n.bg-white {\n  background-color: #ffffff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 0.0625rem solid #e9ecef !important;\n}\n\n.border-top {\n  border-top: 0.0625rem solid #e9ecef !important;\n}\n\n.border-right {\n  border-right: 0.0625rem solid #e9ecef !important;\n}\n\n.border-bottom {\n  border-bottom: 0.0625rem solid #e9ecef !important;\n}\n\n.border-left {\n  border-left: 0.0625rem solid #e9ecef !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #e14eca !important;\n}\n\n.border-secondary {\n  border-color: #f4f5f7 !important;\n}\n\n.border-success {\n  border-color: #00f2c3 !important;\n}\n\n.border-info {\n  border-color: #1d8cf8 !important;\n}\n\n.border-warning {\n  border-color: #ff8d72 !important;\n}\n\n.border-danger {\n  border-color: #fd5d93 !important;\n}\n\n.border-light {\n  border-color: #adb5bd !important;\n}\n\n.border-dark {\n  border-color: #212529 !important;\n}\n\n.border-default {\n  border-color: #344675 !important;\n}\n\n.border-white {\n  border-color: #ffffff !important;\n}\n\n.border-neutral {\n  border-color: #ffffff !important;\n}\n\n.border-darker {\n  border-color: black !important;\n}\n\n.border-white {\n  border-color: #ffffff !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(34, 42, 66, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(34, 42, 66, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.m-sm {\n  margin: 2rem !important;\n}\n\n.mt-sm,\n.my-sm {\n  margin-top: 2rem !important;\n}\n\n.mr-sm,\n.mx-sm {\n  margin-right: 2rem !important;\n}\n\n.mb-sm,\n.my-sm {\n  margin-bottom: 2rem !important;\n}\n\n.ml-sm,\n.mx-sm {\n  margin-left: 2rem !important;\n}\n\n.m-md {\n  margin: 4rem !important;\n}\n\n.mt-md,\n.my-md {\n  margin-top: 4rem !important;\n}\n\n.mr-md,\n.mx-md {\n  margin-right: 4rem !important;\n}\n\n.mb-md,\n.my-md {\n  margin-bottom: 4rem !important;\n}\n\n.ml-md,\n.mx-md {\n  margin-left: 4rem !important;\n}\n\n.m-lg {\n  margin: 6rem !important;\n}\n\n.mt-lg,\n.my-lg {\n  margin-top: 6rem !important;\n}\n\n.mr-lg,\n.mx-lg {\n  margin-right: 6rem !important;\n}\n\n.mb-lg,\n.my-lg {\n  margin-bottom: 6rem !important;\n}\n\n.ml-lg,\n.mx-lg {\n  margin-left: 6rem !important;\n}\n\n.m-xl {\n  margin: 8rem !important;\n}\n\n.mt-xl,\n.my-xl {\n  margin-top: 8rem !important;\n}\n\n.mr-xl,\n.mx-xl {\n  margin-right: 8rem !important;\n}\n\n.mb-xl,\n.my-xl {\n  margin-bottom: 8rem !important;\n}\n\n.ml-xl,\n.mx-xl {\n  margin-left: 8rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.p-sm {\n  padding: 2rem !important;\n}\n\n.pt-sm,\n.py-sm {\n  padding-top: 2rem !important;\n}\n\n.pr-sm,\n.px-sm {\n  padding-right: 2rem !important;\n}\n\n.pb-sm,\n.py-sm {\n  padding-bottom: 2rem !important;\n}\n\n.pl-sm,\n.px-sm {\n  padding-left: 2rem !important;\n}\n\n.p-md {\n  padding: 4rem !important;\n}\n\n.pt-md,\n.py-md {\n  padding-top: 4rem !important;\n}\n\n.pr-md,\n.px-md {\n  padding-right: 4rem !important;\n}\n\n.pb-md,\n.py-md {\n  padding-bottom: 4rem !important;\n}\n\n.pl-md,\n.px-md {\n  padding-left: 4rem !important;\n}\n\n.p-lg {\n  padding: 6rem !important;\n}\n\n.pt-lg,\n.py-lg {\n  padding-top: 6rem !important;\n}\n\n.pr-lg,\n.px-lg {\n  padding-right: 6rem !important;\n}\n\n.pb-lg,\n.py-lg {\n  padding-bottom: 6rem !important;\n}\n\n.pl-lg,\n.px-lg {\n  padding-left: 6rem !important;\n}\n\n.p-xl {\n  padding: 8rem !important;\n}\n\n.pt-xl,\n.py-xl {\n  padding-top: 8rem !important;\n}\n\n.pr-xl,\n.px-xl {\n  padding-right: 8rem !important;\n}\n\n.pb-xl,\n.py-xl {\n  padding-bottom: 8rem !important;\n}\n\n.pl-xl,\n.px-xl {\n  padding-left: 8rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .m-sm-sm {\n    margin: 2rem !important;\n  }\n  .mt-sm-sm,\n  .my-sm-sm {\n    margin-top: 2rem !important;\n  }\n  .mr-sm-sm,\n  .mx-sm-sm {\n    margin-right: 2rem !important;\n  }\n  .mb-sm-sm,\n  .my-sm-sm {\n    margin-bottom: 2rem !important;\n  }\n  .ml-sm-sm,\n  .mx-sm-sm {\n    margin-left: 2rem !important;\n  }\n  .m-sm-md {\n    margin: 4rem !important;\n  }\n  .mt-sm-md,\n  .my-sm-md {\n    margin-top: 4rem !important;\n  }\n  .mr-sm-md,\n  .mx-sm-md {\n    margin-right: 4rem !important;\n  }\n  .mb-sm-md,\n  .my-sm-md {\n    margin-bottom: 4rem !important;\n  }\n  .ml-sm-md,\n  .mx-sm-md {\n    margin-left: 4rem !important;\n  }\n  .m-sm-lg {\n    margin: 6rem !important;\n  }\n  .mt-sm-lg,\n  .my-sm-lg {\n    margin-top: 6rem !important;\n  }\n  .mr-sm-lg,\n  .mx-sm-lg {\n    margin-right: 6rem !important;\n  }\n  .mb-sm-lg,\n  .my-sm-lg {\n    margin-bottom: 6rem !important;\n  }\n  .ml-sm-lg,\n  .mx-sm-lg {\n    margin-left: 6rem !important;\n  }\n  .m-sm-xl {\n    margin: 8rem !important;\n  }\n  .mt-sm-xl,\n  .my-sm-xl {\n    margin-top: 8rem !important;\n  }\n  .mr-sm-xl,\n  .mx-sm-xl {\n    margin-right: 8rem !important;\n  }\n  .mb-sm-xl,\n  .my-sm-xl {\n    margin-bottom: 8rem !important;\n  }\n  .ml-sm-xl,\n  .mx-sm-xl {\n    margin-left: 8rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .p-sm-sm {\n    padding: 2rem !important;\n  }\n  .pt-sm-sm,\n  .py-sm-sm {\n    padding-top: 2rem !important;\n  }\n  .pr-sm-sm,\n  .px-sm-sm {\n    padding-right: 2rem !important;\n  }\n  .pb-sm-sm,\n  .py-sm-sm {\n    padding-bottom: 2rem !important;\n  }\n  .pl-sm-sm,\n  .px-sm-sm {\n    padding-left: 2rem !important;\n  }\n  .p-sm-md {\n    padding: 4rem !important;\n  }\n  .pt-sm-md,\n  .py-sm-md {\n    padding-top: 4rem !important;\n  }\n  .pr-sm-md,\n  .px-sm-md {\n    padding-right: 4rem !important;\n  }\n  .pb-sm-md,\n  .py-sm-md {\n    padding-bottom: 4rem !important;\n  }\n  .pl-sm-md,\n  .px-sm-md {\n    padding-left: 4rem !important;\n  }\n  .p-sm-lg {\n    padding: 6rem !important;\n  }\n  .pt-sm-lg,\n  .py-sm-lg {\n    padding-top: 6rem !important;\n  }\n  .pr-sm-lg,\n  .px-sm-lg {\n    padding-right: 6rem !important;\n  }\n  .pb-sm-lg,\n  .py-sm-lg {\n    padding-bottom: 6rem !important;\n  }\n  .pl-sm-lg,\n  .px-sm-lg {\n    padding-left: 6rem !important;\n  }\n  .p-sm-xl {\n    padding: 8rem !important;\n  }\n  .pt-sm-xl,\n  .py-sm-xl {\n    padding-top: 8rem !important;\n  }\n  .pr-sm-xl,\n  .px-sm-xl {\n    padding-right: 8rem !important;\n  }\n  .pb-sm-xl,\n  .py-sm-xl {\n    padding-bottom: 8rem !important;\n  }\n  .pl-sm-xl,\n  .px-sm-xl {\n    padding-left: 8rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .m-md-sm {\n    margin: 2rem !important;\n  }\n  .mt-md-sm,\n  .my-md-sm {\n    margin-top: 2rem !important;\n  }\n  .mr-md-sm,\n  .mx-md-sm {\n    margin-right: 2rem !important;\n  }\n  .mb-md-sm,\n  .my-md-sm {\n    margin-bottom: 2rem !important;\n  }\n  .ml-md-sm,\n  .mx-md-sm {\n    margin-left: 2rem !important;\n  }\n  .m-md-md {\n    margin: 4rem !important;\n  }\n  .mt-md-md,\n  .my-md-md {\n    margin-top: 4rem !important;\n  }\n  .mr-md-md,\n  .mx-md-md {\n    margin-right: 4rem !important;\n  }\n  .mb-md-md,\n  .my-md-md {\n    margin-bottom: 4rem !important;\n  }\n  .ml-md-md,\n  .mx-md-md {\n    margin-left: 4rem !important;\n  }\n  .m-md-lg {\n    margin: 6rem !important;\n  }\n  .mt-md-lg,\n  .my-md-lg {\n    margin-top: 6rem !important;\n  }\n  .mr-md-lg,\n  .mx-md-lg {\n    margin-right: 6rem !important;\n  }\n  .mb-md-lg,\n  .my-md-lg {\n    margin-bottom: 6rem !important;\n  }\n  .ml-md-lg,\n  .mx-md-lg {\n    margin-left: 6rem !important;\n  }\n  .m-md-xl {\n    margin: 8rem !important;\n  }\n  .mt-md-xl,\n  .my-md-xl {\n    margin-top: 8rem !important;\n  }\n  .mr-md-xl,\n  .mx-md-xl {\n    margin-right: 8rem !important;\n  }\n  .mb-md-xl,\n  .my-md-xl {\n    margin-bottom: 8rem !important;\n  }\n  .ml-md-xl,\n  .mx-md-xl {\n    margin-left: 8rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .p-md-sm {\n    padding: 2rem !important;\n  }\n  .pt-md-sm,\n  .py-md-sm {\n    padding-top: 2rem !important;\n  }\n  .pr-md-sm,\n  .px-md-sm {\n    padding-right: 2rem !important;\n  }\n  .pb-md-sm,\n  .py-md-sm {\n    padding-bottom: 2rem !important;\n  }\n  .pl-md-sm,\n  .px-md-sm {\n    padding-left: 2rem !important;\n  }\n  .p-md-md {\n    padding: 4rem !important;\n  }\n  .pt-md-md,\n  .py-md-md {\n    padding-top: 4rem !important;\n  }\n  .pr-md-md,\n  .px-md-md {\n    padding-right: 4rem !important;\n  }\n  .pb-md-md,\n  .py-md-md {\n    padding-bottom: 4rem !important;\n  }\n  .pl-md-md,\n  .px-md-md {\n    padding-left: 4rem !important;\n  }\n  .p-md-lg {\n    padding: 6rem !important;\n  }\n  .pt-md-lg,\n  .py-md-lg {\n    padding-top: 6rem !important;\n  }\n  .pr-md-lg,\n  .px-md-lg {\n    padding-right: 6rem !important;\n  }\n  .pb-md-lg,\n  .py-md-lg {\n    padding-bottom: 6rem !important;\n  }\n  .pl-md-lg,\n  .px-md-lg {\n    padding-left: 6rem !important;\n  }\n  .p-md-xl {\n    padding: 8rem !important;\n  }\n  .pt-md-xl,\n  .py-md-xl {\n    padding-top: 8rem !important;\n  }\n  .pr-md-xl,\n  .px-md-xl {\n    padding-right: 8rem !important;\n  }\n  .pb-md-xl,\n  .py-md-xl {\n    padding-bottom: 8rem !important;\n  }\n  .pl-md-xl,\n  .px-md-xl {\n    padding-left: 8rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .m-lg-sm {\n    margin: 2rem !important;\n  }\n  .mt-lg-sm,\n  .my-lg-sm {\n    margin-top: 2rem !important;\n  }\n  .mr-lg-sm,\n  .mx-lg-sm {\n    margin-right: 2rem !important;\n  }\n  .mb-lg-sm,\n  .my-lg-sm {\n    margin-bottom: 2rem !important;\n  }\n  .ml-lg-sm,\n  .mx-lg-sm {\n    margin-left: 2rem !important;\n  }\n  .m-lg-md {\n    margin: 4rem !important;\n  }\n  .mt-lg-md,\n  .my-lg-md {\n    margin-top: 4rem !important;\n  }\n  .mr-lg-md,\n  .mx-lg-md {\n    margin-right: 4rem !important;\n  }\n  .mb-lg-md,\n  .my-lg-md {\n    margin-bottom: 4rem !important;\n  }\n  .ml-lg-md,\n  .mx-lg-md {\n    margin-left: 4rem !important;\n  }\n  .m-lg-lg {\n    margin: 6rem !important;\n  }\n  .mt-lg-lg,\n  .my-lg-lg {\n    margin-top: 6rem !important;\n  }\n  .mr-lg-lg,\n  .mx-lg-lg {\n    margin-right: 6rem !important;\n  }\n  .mb-lg-lg,\n  .my-lg-lg {\n    margin-bottom: 6rem !important;\n  }\n  .ml-lg-lg,\n  .mx-lg-lg {\n    margin-left: 6rem !important;\n  }\n  .m-lg-xl {\n    margin: 8rem !important;\n  }\n  .mt-lg-xl,\n  .my-lg-xl {\n    margin-top: 8rem !important;\n  }\n  .mr-lg-xl,\n  .mx-lg-xl {\n    margin-right: 8rem !important;\n  }\n  .mb-lg-xl,\n  .my-lg-xl {\n    margin-bottom: 8rem !important;\n  }\n  .ml-lg-xl,\n  .mx-lg-xl {\n    margin-left: 8rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .p-lg-sm {\n    padding: 2rem !important;\n  }\n  .pt-lg-sm,\n  .py-lg-sm {\n    padding-top: 2rem !important;\n  }\n  .pr-lg-sm,\n  .px-lg-sm {\n    padding-right: 2rem !important;\n  }\n  .pb-lg-sm,\n  .py-lg-sm {\n    padding-bottom: 2rem !important;\n  }\n  .pl-lg-sm,\n  .px-lg-sm {\n    padding-left: 2rem !important;\n  }\n  .p-lg-md {\n    padding: 4rem !important;\n  }\n  .pt-lg-md,\n  .py-lg-md {\n    padding-top: 4rem !important;\n  }\n  .pr-lg-md,\n  .px-lg-md {\n    padding-right: 4rem !important;\n  }\n  .pb-lg-md,\n  .py-lg-md {\n    padding-bottom: 4rem !important;\n  }\n  .pl-lg-md,\n  .px-lg-md {\n    padding-left: 4rem !important;\n  }\n  .p-lg-lg {\n    padding: 6rem !important;\n  }\n  .pt-lg-lg,\n  .py-lg-lg {\n    padding-top: 6rem !important;\n  }\n  .pr-lg-lg,\n  .px-lg-lg {\n    padding-right: 6rem !important;\n  }\n  .pb-lg-lg,\n  .py-lg-lg {\n    padding-bottom: 6rem !important;\n  }\n  .pl-lg-lg,\n  .px-lg-lg {\n    padding-left: 6rem !important;\n  }\n  .p-lg-xl {\n    padding: 8rem !important;\n  }\n  .pt-lg-xl,\n  .py-lg-xl {\n    padding-top: 8rem !important;\n  }\n  .pr-lg-xl,\n  .px-lg-xl {\n    padding-right: 8rem !important;\n  }\n  .pb-lg-xl,\n  .py-lg-xl {\n    padding-bottom: 8rem !important;\n  }\n  .pl-lg-xl,\n  .px-lg-xl {\n    padding-left: 8rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .m-xl-sm {\n    margin: 2rem !important;\n  }\n  .mt-xl-sm,\n  .my-xl-sm {\n    margin-top: 2rem !important;\n  }\n  .mr-xl-sm,\n  .mx-xl-sm {\n    margin-right: 2rem !important;\n  }\n  .mb-xl-sm,\n  .my-xl-sm {\n    margin-bottom: 2rem !important;\n  }\n  .ml-xl-sm,\n  .mx-xl-sm {\n    margin-left: 2rem !important;\n  }\n  .m-xl-md {\n    margin: 4rem !important;\n  }\n  .mt-xl-md,\n  .my-xl-md {\n    margin-top: 4rem !important;\n  }\n  .mr-xl-md,\n  .mx-xl-md {\n    margin-right: 4rem !important;\n  }\n  .mb-xl-md,\n  .my-xl-md {\n    margin-bottom: 4rem !important;\n  }\n  .ml-xl-md,\n  .mx-xl-md {\n    margin-left: 4rem !important;\n  }\n  .m-xl-lg {\n    margin: 6rem !important;\n  }\n  .mt-xl-lg,\n  .my-xl-lg {\n    margin-top: 6rem !important;\n  }\n  .mr-xl-lg,\n  .mx-xl-lg {\n    margin-right: 6rem !important;\n  }\n  .mb-xl-lg,\n  .my-xl-lg {\n    margin-bottom: 6rem !important;\n  }\n  .ml-xl-lg,\n  .mx-xl-lg {\n    margin-left: 6rem !important;\n  }\n  .m-xl-xl {\n    margin: 8rem !important;\n  }\n  .mt-xl-xl,\n  .my-xl-xl {\n    margin-top: 8rem !important;\n  }\n  .mr-xl-xl,\n  .mx-xl-xl {\n    margin-right: 8rem !important;\n  }\n  .mb-xl-xl,\n  .my-xl-xl {\n    margin-bottom: 8rem !important;\n  }\n  .ml-xl-xl,\n  .mx-xl-xl {\n    margin-left: 8rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .p-xl-sm {\n    padding: 2rem !important;\n  }\n  .pt-xl-sm,\n  .py-xl-sm {\n    padding-top: 2rem !important;\n  }\n  .pr-xl-sm,\n  .px-xl-sm {\n    padding-right: 2rem !important;\n  }\n  .pb-xl-sm,\n  .py-xl-sm {\n    padding-bottom: 2rem !important;\n  }\n  .pl-xl-sm,\n  .px-xl-sm {\n    padding-left: 2rem !important;\n  }\n  .p-xl-md {\n    padding: 4rem !important;\n  }\n  .pt-xl-md,\n  .py-xl-md {\n    padding-top: 4rem !important;\n  }\n  .pr-xl-md,\n  .px-xl-md {\n    padding-right: 4rem !important;\n  }\n  .pb-xl-md,\n  .py-xl-md {\n    padding-bottom: 4rem !important;\n  }\n  .pl-xl-md,\n  .px-xl-md {\n    padding-left: 4rem !important;\n  }\n  .p-xl-lg {\n    padding: 6rem !important;\n  }\n  .pt-xl-lg,\n  .py-xl-lg {\n    padding-top: 6rem !important;\n  }\n  .pr-xl-lg,\n  .px-xl-lg {\n    padding-right: 6rem !important;\n  }\n  .pb-xl-lg,\n  .py-xl-lg {\n    padding-bottom: 6rem !important;\n  }\n  .pl-xl-lg,\n  .px-xl-lg {\n    padding-left: 6rem !important;\n  }\n  .p-xl-xl {\n    padding: 8rem !important;\n  }\n  .pt-xl-xl,\n  .py-xl-xl {\n    padding-top: 8rem !important;\n  }\n  .pr-xl-xl,\n  .px-xl-xl {\n    padding-right: 8rem !important;\n  }\n  .pb-xl-xl,\n  .py-xl-xl {\n    padding-bottom: 8rem !important;\n  }\n  .pl-xl-xl,\n  .px-xl-xl {\n    padding-left: 8rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 600 !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #ffffff !important;\n}\n\n.text-primary {\n  color: #e14eca !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #d725bb !important;\n}\n\n.text-secondary {\n  color: #f4f5f7 !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #d6dae2 !important;\n}\n\n.text-success {\n  color: #00f2c3 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #00bf9a !important;\n}\n\n.text-info {\n  color: #1d8cf8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0772db !important;\n}\n\n.text-warning {\n  color: #ff8d72 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ff643f !important;\n}\n\n.text-danger {\n  color: #fd5d93 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #fc2b71 !important;\n}\n\n.text-light {\n  color: #adb5bd !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #919ca6 !important;\n}\n\n.text-dark {\n  color: #212529 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #0a0c0d !important;\n}\n\n.text-default {\n  color: #344675 !important;\n}\n\na.text-default:hover, a.text-default:focus {\n  color: #243152 !important;\n}\n\n.text-white {\n  color: #ffffff !important;\n}\n\na.text-white:hover, a.text-white:focus {\n  color: #e6e5e5 !important;\n}\n\n.text-neutral {\n  color: #ffffff !important;\n}\n\na.text-neutral:hover, a.text-neutral:focus {\n  color: #e6e5e5 !important;\n}\n\n.text-darker {\n  color: black !important;\n}\n\na.text-darker:hover, a.text-darker:focus {\n  color: black !important;\n}\n\n.text-body {\n  color: #525f7f !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(34, 42, 66, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 0.0625rem solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n  .container {\n    min-width: 992px !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 0.0625rem solid #222a42;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #ffffff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e3e3e3 !important;\n  }\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #e3e3e3;\n  }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #e3e3e3;\n  }\n}\n\n.alert {\n  border: 0;\n  color: #ffffff;\n}\n\n.alert .alert-link {\n  color: #ffffff;\n}\n\n.alert.alert-success {\n  background-color: #00bf9a;\n}\n\n.alert i.fa,\n.alert i.tim-icons {\n  font-size: 1rem;\n}\n\n.alert .close {\n  color: #ffffff;\n  opacity: .9;\n  text-shadow: none;\n  line-height: 0;\n  outline: 0;\n}\n\n.alert .close::after {\n  display: inline-block;\n  font: normal normal normal 1em/1 'Nucleo';\n  vertical-align: middle;\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  content: \"\\EA48\";\n}\n\n.alert .close span {\n  display: none !important;\n}\n\n.alert span[data-notify=\"icon\"] {\n  font-size: 22px;\n  display: block;\n  left: 19px;\n  position: absolute;\n  top: 50%;\n  margin-top: -11px;\n}\n\n.alert button.close {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  margin-top: -13px;\n  width: 25px;\n  height: 25px;\n  padding: 3px;\n}\n\n.alert .close ~ span {\n  display: block;\n  max-width: 89%;\n}\n\n.alert.alert-with-icon {\n  padding-left: 65px;\n}\n\n.alert-dismissible {\n  padding-right: 1.25rem;\n}\n\n.alert-dismissible .close:hover, .alert-dismissible .close:focus {\n  color: rgba(255, 255, 255, 0.9);\n  opacity: 1 !important;\n}\n\n@media (max-width: 575.98px) {\n  .alert-dismissible .close {\n    top: 1rem;\n    right: .5rem;\n  }\n}\n\n.alert-dismissible .close > span:not(.sr-only) {\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.alert-dismissible .close:hover > span:not(.sr-only), .alert-dismissible .close:focus > span:not(.sr-only) {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.alert-dismissible.animated {\n  z-index: 9999;\n}\n\n.alert-dismissible.animated .close {\n  right: 10px;\n}\n\n.badge + .badge {\n  margin-left: 5px;\n}\n\n.btn,\n.navbar .navbar-nav > a.btn {\n  border-width: 2px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  margin: 4px 1px;\n  border-radius: 0.4285rem;\n  cursor: pointer;\n  background: #344675;\n  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675);\n  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675);\n  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675);\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #344675;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn.animation-on-hover:hover,\n.navbar .navbar-nav > a.btn.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover,\n.navbar .navbar-nav > a.btn:hover,\n.navbar .navbar-nav > a.btn:focus,\n.navbar .navbar-nav > a.btn:active,\n.navbar .navbar-nav > a.btn.active,\n.navbar .navbar-nav > a.btn:active:focus,\n.navbar .navbar-nav > a.btn:active:hover,\n.navbar .navbar-nav > a.btn.active:focus,\n.navbar .navbar-nav > a.btn.active:hover {\n  background-color: #263148 !important;\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn:active,\n.navbar .navbar-nav > a.btn:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn:not([data-action]):hover,\n.navbar .navbar-nav > a.btn:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\nfieldset[disabled] .btn,\nfieldset[disabled] .btn:hover,\nfieldset[disabled] .btn:focus,\nfieldset[disabled] .btn.focus,\nfieldset[disabled] .btn:active,\nfieldset[disabled] .btn.active,\n.navbar .navbar-nav > a.btn.disabled,\n.navbar .navbar-nav > a.btn.disabled:hover,\n.navbar .navbar-nav > a.btn.disabled:focus,\n.navbar .navbar-nav > a.btn.disabled.focus,\n.navbar .navbar-nav > a.btn.disabled:active,\n.navbar .navbar-nav > a.btn.disabled.active,\n.navbar .navbar-nav > a.btn:disabled,\n.navbar .navbar-nav > a.btn:disabled:hover,\n.navbar .navbar-nav > a.btn:disabled:focus,\n.navbar .navbar-nav > a.btn:disabled.focus,\n.navbar .navbar-nav > a.btn:disabled:active,\n.navbar .navbar-nav > a.btn:disabled.active,\n.navbar .navbar-nav > a.btn[disabled],\n.navbar .navbar-nav > a.btn[disabled]:hover,\n.navbar .navbar-nav > a.btn[disabled]:focus,\n.navbar .navbar-nav > a.btn[disabled].focus,\n.navbar .navbar-nav > a.btn[disabled]:active,\n.navbar .navbar-nav > a.btn[disabled].active,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn:hover,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn:focus,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn.focus,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn:active,\nfieldset[disabled]\n.navbar .navbar-nav > a.btn.active {\n  background-color: #344675;\n  border-color: #344675;\n}\n\n.btn.btn-simple,\n.navbar .navbar-nav > a.btn.btn-simple {\n  color: #344675;\n  border-color: #344675;\n  background: transparent;\n}\n\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-simple:not(:disabled):not(.disabled):active,\n.navbar .navbar-nav > a.btn.btn-simple:hover,\n.navbar .navbar-nav > a.btn.btn-simple:focus,\n.navbar .navbar-nav > a.btn.btn-simple:active,\n.navbar .navbar-nav > a.btn.btn-simple:not(:disabled):not(.disabled):active {\n  color: #344675;\n  border-color: #344675;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn.btn-simple.active,\n.navbar .navbar-nav > a.btn.btn-simple.active {\n  border-color: #344675 !important;\n}\n\n.btn.btn-simple.active:hover, .btn.btn-simple.active:focus, .btn.btn-simple.active:active, .btn.btn-simple.active:not(:disabled):not(.disabled):active,\n.navbar .navbar-nav > a.btn.btn-simple.active:hover,\n.navbar .navbar-nav > a.btn.btn-simple.active:focus,\n.navbar .navbar-nav > a.btn.btn-simple.active:active,\n.navbar .navbar-nav > a.btn.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #344675;\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -o-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-color: #263148 !important;\n  box-shadow: none;\n}\n\n.btn.btn-link,\n.navbar .navbar-nav > a.btn.btn-link {\n  color: #344675;\n}\n\n.btn.btn-link:hover, .btn.btn-link:focus, .btn.btn-link:active,\n.navbar .navbar-nav > a.btn.btn-link:hover,\n.navbar .navbar-nav > a.btn.btn-link:focus,\n.navbar .navbar-nav > a.btn.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn:hover, .btn:focus,\n.navbar .navbar-nav > a.btn:hover,\n.navbar .navbar-nav > a.btn:focus {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: 0 !important;\n}\n\n.btn:active, .btn.active,\n.open > .btn.dropdown-toggle,\n.navbar .navbar-nav > a.btn:active,\n.navbar .navbar-nav > a.btn.active,\n.open >\n.navbar .navbar-nav > a.btn.dropdown-toggle {\n  box-shadow: none;\n  outline: 0 !important;\n}\n\n.btn .badge,\n.navbar .navbar-nav > a.btn .badge {\n  margin: 0;\n}\n\n.btn.btn-icon,\n.navbar .navbar-nav > a.btn.btn-icon {\n  height: 2.375rem;\n  min-width: 2.375rem;\n  width: 2.375rem;\n  padding: 0;\n  font-size: 0.9375rem;\n  overflow: hidden;\n  position: relative;\n  line-height: normal;\n}\n\n.btn.btn-icon.btn-simple,\n.navbar .navbar-nav > a.btn.btn-icon.btn-simple {\n  padding: 0;\n}\n\n.btn.btn-icon.btn-sm, .btn-group-sm > .btn.btn-icon,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm,\n.navbar .btn-group-sm.navbar-nav > a.btn.btn-icon {\n  height: 1.875rem;\n  min-width: 1.875rem;\n  width: 1.875rem;\n}\n\n.btn.btn-icon.btn-sm .fa, .btn-group-sm > .btn.btn-icon .fa,\n.btn.btn-icon.btn-sm .far,\n.btn-group-sm > .btn.btn-icon .far,\n.btn.btn-icon.btn-sm .fas,\n.btn-group-sm > .btn.btn-icon .fas,\n.btn.btn-icon.btn-sm .tim-icons,\n.btn-group-sm > .btn.btn-icon .tim-icons,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fa,\n.navbar .btn-group-sm.navbar-nav > a.btn.btn-icon .fa,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .far,\n.navbar .btn-group-sm.navbar-nav > a.btn.btn-icon .far,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fas,\n.navbar .btn-group-sm.navbar-nav > a.btn.btn-icon .fas,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .tim-icons,\n.navbar .btn-group-sm.navbar-nav > a.btn.btn-icon .tim-icons {\n  font-size: 0.6875rem;\n}\n\n.btn.btn-icon.btn-lg, .btn-group-lg > .btn.btn-icon,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg,\n.navbar .btn-group-lg.navbar-nav > a.btn.btn-icon {\n  height: 3.6rem;\n  min-width: 3.6rem;\n  width: 3.6rem;\n}\n\n.btn.btn-icon.btn-lg .fa, .btn-group-lg > .btn.btn-icon .fa,\n.btn.btn-icon.btn-lg .far,\n.btn-group-lg > .btn.btn-icon .far,\n.btn.btn-icon.btn-lg .fas,\n.btn-group-lg > .btn.btn-icon .fas,\n.btn.btn-icon.btn-lg .tim-icons,\n.btn-group-lg > .btn.btn-icon .tim-icons,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fa,\n.navbar .btn-group-lg.navbar-nav > a.btn.btn-icon .fa,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .far,\n.navbar .btn-group-lg.navbar-nav > a.btn.btn-icon .far,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fas,\n.navbar .btn-group-lg.navbar-nav > a.btn.btn-icon .fas,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .tim-icons,\n.navbar .btn-group-lg.navbar-nav > a.btn.btn-icon .tim-icons {\n  font-size: 1.325rem;\n}\n\n.btn.btn-icon:not(.btn-footer) .tim-icons,\n.btn.btn-icon:not(.btn-footer) .fa,\n.btn.btn-icon:not(.btn-footer) .far,\n.btn.btn-icon:not(.btn-footer) .fas,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .tim-icons,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fa,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .far,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fas {\n  position: absolute;\n  font-size: 1em;\n  top: 50%;\n  left: 50%;\n  transform: translate(-12px, -12px);\n  line-height: 1.5626rem;\n  width: 24px;\n}\n\n.btn:not(.btn-icon) .tim-icons,\n.navbar .navbar-nav > a.btn:not(.btn-icon) .tim-icons {\n  position: relative;\n  top: 1px;\n}\n\n.btn span,\n.navbar .navbar-nav > a.btn span {\n  position: relative;\n  display: block;\n}\n\n.btn.btn-link.dropdown-toggle,\n.navbar .navbar-nav > a.btn.btn-link.dropdown-toggle {\n  color: #9A9A9A;\n}\n\n.btn.dropdown-toggle:after,\n.navbar .navbar-nav > a.btn.dropdown-toggle:after {\n  margin-left: 30px !important;\n}\n\n.btn-primary {\n  background: #e14eca;\n  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);\n  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);\n  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #e14eca;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn-primary.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .btn-primary:active:focus, .btn-primary:active:hover, .btn-primary.active:focus, .btn-primary.active:hover {\n  background-color: #ba54f5 !important;\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-primary:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-primary:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active,\nfieldset[disabled] .btn-primary,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus,\nfieldset[disabled] .btn-primary:active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n\n.btn-primary.btn-simple {\n  color: #e14eca;\n  border-color: #e14eca;\n  background: transparent;\n}\n\n.btn-primary.btn-simple:hover, .btn-primary.btn-simple:focus, .btn-primary.btn-simple:active, .btn-primary.btn-simple:not(:disabled):not(.disabled):active {\n  color: #e14eca;\n  border-color: #e14eca;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-primary.btn-simple.active {\n  border-color: #e14eca !important;\n}\n\n.btn-primary.btn-simple.active:hover, .btn-primary.btn-simple.active:focus, .btn-primary.btn-simple.active:active, .btn-primary.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #e14eca;\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -o-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-color: #ba54f5 !important;\n  box-shadow: none;\n}\n\n.btn-primary.btn-link {\n  color: #e14eca;\n}\n\n.btn-primary.btn-link:hover, .btn-primary.btn-link:focus, .btn-primary.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn-success {\n  background: #00f2c3;\n  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);\n  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);\n  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #00f2c3;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn-success.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .btn-success:active:focus, .btn-success:active:hover, .btn-success.active:focus, .btn-success.active:hover {\n  background-color: #0098f0 !important;\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-success:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-success:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active,\nfieldset[disabled] .btn-success,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus,\nfieldset[disabled] .btn-success:active,\nfieldset[disabled] .btn-success.active {\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n}\n\n.btn-success.btn-simple {\n  color: #00f2c3;\n  border-color: #00f2c3;\n  background: transparent;\n}\n\n.btn-success.btn-simple:hover, .btn-success.btn-simple:focus, .btn-success.btn-simple:active, .btn-success.btn-simple:not(:disabled):not(.disabled):active {\n  color: #00f2c3;\n  border-color: #00f2c3;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-success.btn-simple.active {\n  border-color: #00f2c3 !important;\n}\n\n.btn-success.btn-simple.active:hover, .btn-success.btn-simple.active:focus, .btn-success.btn-simple.active:active, .btn-success.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #00f2c3;\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -o-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-color: #0098f0 !important;\n  box-shadow: none;\n}\n\n.btn-success.btn-link {\n  color: #00f2c3;\n}\n\n.btn-success.btn-link:hover, .btn-success.btn-link:focus, .btn-success.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn-info {\n  background: #1d8cf8;\n  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);\n  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);\n  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #1d8cf8;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn-info.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .btn-info:active:focus, .btn-info:active:hover, .btn-info.active:focus, .btn-info.active:hover {\n  background-color: #3358f4 !important;\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-info:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-info:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active,\nfieldset[disabled] .btn-info,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus,\nfieldset[disabled] .btn-info:active,\nfieldset[disabled] .btn-info.active {\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n}\n\n.btn-info.btn-simple {\n  color: #1d8cf8;\n  border-color: #1d8cf8;\n  background: transparent;\n}\n\n.btn-info.btn-simple:hover, .btn-info.btn-simple:focus, .btn-info.btn-simple:active, .btn-info.btn-simple:not(:disabled):not(.disabled):active {\n  color: #1d8cf8;\n  border-color: #1d8cf8;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-info.btn-simple.active {\n  border-color: #1d8cf8 !important;\n}\n\n.btn-info.btn-simple.active:hover, .btn-info.btn-simple.active:focus, .btn-info.btn-simple.active:active, .btn-info.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #1d8cf8;\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -o-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-color: #3358f4 !important;\n  box-shadow: none;\n}\n\n.btn-info.btn-link {\n  color: #1d8cf8;\n}\n\n.btn-info.btn-link:hover, .btn-info.btn-link:focus, .btn-info.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn-warning {\n  background: #ff8d72;\n  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);\n  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);\n  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #ff8d72;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn-warning.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .btn-warning:active:focus, .btn-warning:active:hover, .btn-warning.active:focus, .btn-warning.active:hover {\n  background-color: #ff6491 !important;\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-warning:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-warning:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active,\nfieldset[disabled] .btn-warning,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus,\nfieldset[disabled] .btn-warning:active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n}\n\n.btn-warning.btn-simple {\n  color: #ff8d72;\n  border-color: #ff8d72;\n  background: transparent;\n}\n\n.btn-warning.btn-simple:hover, .btn-warning.btn-simple:focus, .btn-warning.btn-simple:active, .btn-warning.btn-simple:not(:disabled):not(.disabled):active {\n  color: #ff8d72;\n  border-color: #ff8d72;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-warning.btn-simple.active {\n  border-color: #ff8d72 !important;\n}\n\n.btn-warning.btn-simple.active:hover, .btn-warning.btn-simple.active:focus, .btn-warning.btn-simple.active:active, .btn-warning.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ff8d72;\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -o-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-color: #ff6491 !important;\n  box-shadow: none;\n}\n\n.btn-warning.btn-link {\n  color: #ff8d72;\n}\n\n.btn-warning.btn-link:hover, .btn-warning.btn-link:focus, .btn-warning.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n}\n\n.btn-danger {\n  background: #fd5d93;\n  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);\n  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);\n  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #fd5d93;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.btn-danger.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .btn-danger:active:focus, .btn-danger:active:hover, .btn-danger.active:focus, .btn-danger.active:hover {\n  background-color: #ec250d !important;\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-danger:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-danger:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active,\nfieldset[disabled] .btn-danger,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus,\nfieldset[disabled] .btn-danger:active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n}\n\n.btn-danger.btn-simple {\n  color: #fd5d93;\n  border-color: #fd5d93;\n  background: transparent;\n}\n\n.btn-danger.btn-simple:hover, .btn-danger.btn-simple:focus, .btn-danger.btn-simple:active, .btn-danger.btn-simple:not(:disabled):not(.disabled):active {\n  color: #fd5d93;\n  border-color: #fd5d93;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-danger.btn-simple.active {\n  border-color: #fd5d93 !important;\n}\n\n.btn-danger.btn-simple.active:hover, .btn-danger.btn-simple.active:focus, .btn-danger.btn-simple.active:active, .btn-danger.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #fd5d93;\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -o-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-color: #ec250d !important;\n  box-shadow: none;\n}\n\n.btn-danger.btn-link {\n  color: #fd5d93;\n}\n\n.btn-danger.btn-link:hover, .btn-danger.btn-link:focus, .btn-danger.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn-neutral {\n  background: #ffffff;\n  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);\n  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);\n  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #ffffff;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #e14eca;\n}\n\n.btn-neutral.animation-on-hover:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active, .btn-neutral:active:focus, .btn-neutral:active:hover, .btn-neutral.active:focus, .btn-neutral.active:hover {\n  background-color: #ffffff !important;\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.btn-neutral:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all .15s ease;\n}\n\n.btn-neutral:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active,\nfieldset[disabled] .btn-neutral,\nfieldset[disabled] .btn-neutral:hover,\nfieldset[disabled] .btn-neutral:focus,\nfieldset[disabled] .btn-neutral.focus,\nfieldset[disabled] .btn-neutral:active,\nfieldset[disabled] .btn-neutral.active {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.btn-neutral.btn-danger {\n  color: #fd5d93;\n}\n\n.btn-neutral.btn-danger:hover, .btn-neutral.btn-danger:focus, .btn-neutral.btn-danger:active, .btn-neutral.btn-danger:active:focus {\n  color: #ec250d;\n}\n\n.btn-neutral.btn-info {\n  color: #1d8cf8;\n}\n\n.btn-neutral.btn-info:hover, .btn-neutral.btn-info:focus, .btn-neutral.btn-info:active, .btn-neutral.btn-info:active:focus {\n  color: #3358f4;\n}\n\n.btn-neutral.btn-warning {\n  color: #ff8d72;\n}\n\n.btn-neutral.btn-warning:hover, .btn-neutral.btn-warning:focus, .btn-neutral.btn-warning:active, .btn-neutral.btn-warning:active:focus {\n  color: #ff6491;\n}\n\n.btn-neutral.btn-success {\n  color: #00f2c3;\n}\n\n.btn-neutral.btn-success:hover, .btn-neutral.btn-success:focus, .btn-neutral.btn-success:active, .btn-neutral.btn-success:active:focus {\n  color: #0098f0;\n}\n\n.btn-neutral.btn-default {\n  color: #344675;\n}\n\n.btn-neutral.btn-default:hover, .btn-neutral.btn-default:focus, .btn-neutral.btn-default:active, .btn-neutral.btn-default:active:focus {\n  color: #263148;\n}\n\n.btn-neutral.active, .btn-neutral:active, .btn-neutral:active:focus, .btn-neutral:active:hover, .btn-neutral.active:focus, .btn-neutral.active:hover,\n.show > .btn-neutral.dropdown-toggle,\n.show > .btn-neutral.dropdown-toggle:focus,\n.show > .btn-neutral.dropdown-toggle:hover {\n  background-color: #ffffff;\n  color: #ba54f5;\n  box-shadow: none;\n}\n\n.btn-neutral:hover, .btn-neutral:focus {\n  color: #ba54f5;\n}\n\n.btn-neutral:hover:not(.nav-link), .btn-neutral:focus:not(.nav-link) {\n  box-shadow: none;\n}\n\n.btn-neutral.btn-simple {\n  color: #ffffff;\n  border-color: #ffffff;\n  background: transparent;\n}\n\n.btn-neutral.btn-simple:hover, .btn-neutral.btn-simple:focus, .btn-neutral.btn-simple:active, .btn-neutral.btn-simple:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n\n.btn-neutral.btn-simple.active {\n  border-color: #ffffff !important;\n}\n\n.btn-neutral.btn-simple.active:hover, .btn-neutral.btn-simple.active:focus, .btn-neutral.btn-simple.active:active, .btn-neutral.btn-simple.active:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -webkit-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -o-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-color: #ffffff !important;\n  box-shadow: none;\n}\n\n.btn-neutral.btn-link {\n  color: #ffffff;\n}\n\n.btn-neutral.btn-link:hover, .btn-neutral.btn-link:focus, .btn-neutral.btn-link:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  pointer-events: none;\n}\n\n.btn-simple {\n  border: 1px solid;\n  border-color: #344675;\n  box-shadow: none;\n  padding: 10px 22px;\n  background-color: transparent;\n}\n\n.btn-simple.disabled, .btn-simple.disabled:hover, .btn-simple.disabled:focus, .btn-simple.disabled.focus, .btn-simple.disabled:active, .btn-simple.disabled.active, .btn-simple:disabled, .btn-simple:disabled:hover, .btn-simple:disabled:focus, .btn-simple:disabled.focus, .btn-simple:disabled:active, .btn-simple:disabled.active, .btn-simple[disabled], .btn-simple[disabled]:hover, .btn-simple[disabled]:focus, .btn-simple[disabled].focus, .btn-simple[disabled]:active, .btn-simple[disabled].active,\nfieldset[disabled] .btn-simple,\nfieldset[disabled] .btn-simple:hover,\nfieldset[disabled] .btn-simple:focus,\nfieldset[disabled] .btn-simple.focus,\nfieldset[disabled] .btn-simple:active,\nfieldset[disabled] .btn-simple.active,\n.btn-link.disabled,\n.btn-link.disabled:hover,\n.btn-link.disabled:focus,\n.btn-link.disabled.focus,\n.btn-link.disabled:active,\n.btn-link.disabled.active,\n.btn-link:disabled,\n.btn-link:disabled:hover,\n.btn-link:disabled:focus,\n.btn-link:disabled.focus,\n.btn-link:disabled:active,\n.btn-link:disabled.active,\n.btn-link[disabled],\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\n.btn-link[disabled].focus,\n.btn-link[disabled]:active,\n.btn-link[disabled].active,\nfieldset[disabled]\n.btn-link,\nfieldset[disabled]\n.btn-link:hover,\nfieldset[disabled]\n.btn-link:focus,\nfieldset[disabled]\n.btn-link.focus,\nfieldset[disabled]\n.btn-link:active,\nfieldset[disabled]\n.btn-link.active {\n  background: transparent;\n}\n\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n}\n\n.btn-link {\n  border: 0;\n  box-shadow: none;\n  padding: 0.5rem 0.7rem;\n  background: transparent;\n  color: #e3e3e3;\n  font-weight: 600;\n}\n\n.btn-link:hover {\n  box-shadow: none !important;\n  transform: none !important;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  font-size: 0.875rem;\n  border-radius: 0.4285rem;\n  padding: 15px 48px;\n}\n\n.btn-lg.btn-simple, .btn-group-lg > .btn-simple.btn {\n  padding: 14px 47px;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  font-size: 0.875rem;\n  border-radius: 0.2857rem;\n  padding: 5px 15px;\n}\n\n.btn-sm.btn-simple, .btn-group-sm > .btn-simple.btn {\n  padding: 4px 14px;\n}\n\n.btn-wd {\n  min-width: 140px;\n}\n\n.btn-group.select {\n  width: 100%;\n}\n\n.btn-group .btn.active {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-group.select .btn {\n  text-align: left;\n}\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px;\n}\n\n.btn-group .btn.active {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px;\n}\n\n.btn-round.btn-simple {\n  padding: 10px 22px;\n}\n\n.no-caret.dropdown-toggle::after {\n  display: none;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #ffffff;\n}\n\n.btn-group label.btn.active {\n  transform: translateY(0);\n  -webkit-transform: translateY(0);\n}\n\n.btn + .btn {\n  margin-left: 5px;\n}\n\n.footer {\n  padding: 0 0 24px 250px;\n}\n\n.footer [class*=\"container-\"] {\n  padding: 0;\n}\n\n.footer .nav {\n  display: inline-block;\n  float: left;\n  margin-bottom: 0;\n  padding-left: 30px;\n  list-style: none;\n}\n\n.footer .nav-item {\n  display: inline-block;\n}\n\n.footer .nav-item:first-child a {\n  padding-left: 0;\n}\n\n.footer .nav-link {\n  color: #ffffff;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.footer .nav-link:hover {\n  text-decoration: none;\n}\n\n.footer .copyright {\n  font-size: 0.75rem;\n  line-height: 1.8;\n  color: #ffffff;\n}\n\n.footer:after {\n  display: table;\n  clear: both;\n  content: \" \";\n}\n\n@media screen and (max-width: 991px) {\n  .footer {\n    padding-left: 0px;\n  }\n  .footer .copyright {\n    text-align: right;\n    margin-right: 15px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .footer .copyright {\n    float: right;\n    padding-right: 30px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .footer nav {\n    display: block;\n    margin-bottom: 5px;\n    float: none;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .footer {\n    text-align: center;\n  }\n  .footer .copyright {\n    text-align: center;\n  }\n  .footer .nav {\n    float: none;\n    padding-left: 0;\n  }\n}\n\n/* Form controls */\n.form-control::-moz-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control:-moz-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control:-ms-input-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control {\n  border-color: #2b3553;\n  border-radius: 0.4285rem;\n  font-size: 0.75rem;\n  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n}\n\n.form-control:focus {\n  border-color: #e14eca;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.form-control:focus + .input-group-append .input-group-text,\n.form-control:focus ~ .input-group-append .input-group-text,\n.form-control:focus + .input-group-prepend .input-group-text,\n.form-control:focus ~ .input-group-prepend .input-group-text {\n  border: 1px solid #e14eca;\n  border-left: none;\n  background-color: transparent;\n}\n\n.form-control:focus.primary:focus {\n  border-color: #e14eca !important;\n}\n\n.form-control:focus.success:focus {\n  border-color: #00f2c3 !important;\n}\n\n.form-control:focus.info:focus {\n  border-color: #1d8cf8 !important;\n}\n\n.has-success .form-control,\n.has-error .form-control,\n.has-success .form-control:focus,\n.has-error .form-control:focus {\n  box-shadow: none;\n}\n\n.has-danger .form-control.form-control-success, .has-danger .form-control.form-control-danger,\n.has-success .form-control.form-control-success,\n.has-success .form-control.form-control-danger {\n  background-image: none;\n}\n\n.form-control + .form-control-feedback {\n  border-radius: 0.4285rem;\n  margin-top: -7px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  vertical-align: middle;\n}\n\n.open .form-control {\n  border-radius: 0.4285rem 0.4285rem 0 0;\n  border-bottom-color: transparent;\n}\n\n.form-control + .input-group-append .input-group-text,\n.form-control + .input-group-prepend .input-group-text {\n  background-color: #ffffff;\n}\n\n.has-success .input-group-append .input-group-text,\n.has-success .input-group-prepend .input-group-text,\n.has-success .form-control {\n  border-color: #2b3553;\n}\n\n.has-success .form-control:focus,\n.has-success.input-group-focus .input-group-append .input-group-text,\n.has-success.input-group-focus .input-group-prepend .input-group-text {\n  border-color: #00bf9a;\n}\n\n.has-danger .form-control,\n.has-danger .input-group-append .input-group-text,\n.has-danger .input-group-prepend .input-group-text,\n.has-danger.input-group-focus .input-group-prepend .input-group-text,\n.has-danger.input-group-focus .input-group-append .input-group-text {\n  border-color: #f33620;\n  color: #ec250d;\n  background-color: rgba(222, 222, 222, 0.1);\n}\n\n.has-danger .form-control:focus,\n.has-danger .input-group-append .input-group-text:focus,\n.has-danger .input-group-prepend .input-group-text:focus,\n.has-danger.input-group-focus .input-group-prepend .input-group-text:focus,\n.has-danger.input-group-focus .input-group-append .input-group-text:focus {\n  background-color: transparent;\n}\n\n.has-success:after,\n.has-danger:after {\n  font-family: 'nucleo';\n  content: \"\\EA1B\";\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 13px;\n  color: #00f2c3;\n  font-size: 11px;\n}\n\n.has-success.form-control-lg:after,\n.has-danger.form-control-lg:after {\n  font-size: 13px;\n  top: 24px;\n}\n\n.has-success.has-label:after,\n.has-danger.has-label:after {\n  top: 37px;\n}\n\n.has-success.form-check:after,\n.has-danger.form-check:after {\n  display: none !important;\n}\n\n.has-success.form-check .form-check-label,\n.has-danger.form-check .form-check-label {\n  color: #00f2c3;\n}\n\n.has-danger:after {\n  content: \"\\EA48\";\n  color: #ec250d;\n}\n\n.has-danger.form-check .form-check-label {\n  color: #ec250d;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 0.2857rem;\n}\n\n.img-raised {\n  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);\n}\n\n.modal-content {\n  border: 0;\n}\n\n.modal-content .modal-header {\n  border-bottom: none;\n}\n\n.modal-content .modal-header button {\n  position: absolute;\n  right: 27px;\n  top: 24px;\n  outline: 0;\n  padding: 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-content .modal-header .title {\n  color: #222a42;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.modal-content .modal-header .modal-title {\n  color: #222a42;\n}\n\n.modal-content .modal-header i.tim-icons {\n  font-size: 16px;\n}\n\n.modal-content .modal-body {\n  line-height: 1.9;\n}\n\n.modal-content .modal-body p {\n  color: #222a42;\n}\n\n.modal-content .modal-footer {\n  border-top: 0;\n  -webkit-justify-content: space-between;\n  /* Safari 6.1+ */\n  justify-content: space-between;\n}\n\n.modal-content .modal-footer button {\n  margin: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n\n.modal-content .modal-footer button.pull-left {\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n  left: -5px;\n}\n\n.modal-content .modal-body + .modal-footer {\n  padding-top: 0;\n}\n\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.modal.modal-default .modal-content {\n  background-color: #ffffff;\n  color: #222a42;\n}\n\n.modal.modal-default .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-default .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-default .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-default .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-default .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-default .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-default .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-default .has-success:after,\n.modal.modal-default .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-default .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-default .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-default .input-group-prepend .input-group-text,\n.modal.modal-default .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-default .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-default .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border .form-control,\n.modal.modal-default .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border .form-control:focus, .modal.modal-default .form-group.no-border .form-control:active, .modal.modal-default .form-group.no-border .form-control:active,\n.modal.modal-default .input-group.no-border .form-control:focus,\n.modal.modal-default .input-group.no-border .form-control:active,\n.modal.modal-default .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-default .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-default .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-default .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-default .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-default .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-default .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-default .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-default .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-default .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-default .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-default .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-default .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-default .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-default .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-default .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-default .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-default .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-default .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-default .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-default .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-default .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-default .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-default .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-default .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-default .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-primary .modal-content {\n  background-color: #e14eca;\n  color: #ffffff;\n}\n\n.modal.modal-primary .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-primary .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-primary .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-primary .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-primary .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-primary .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-primary .has-success:after,\n.modal.modal-primary .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-primary .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-primary .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-primary .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-primary .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border .form-control,\n.modal.modal-primary .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border .form-control:focus, .modal.modal-primary .form-group.no-border .form-control:active, .modal.modal-primary .form-group.no-border .form-control:active,\n.modal.modal-primary .input-group.no-border .form-control:focus,\n.modal.modal-primary .input-group.no-border .form-control:active,\n.modal.modal-primary .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-primary .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-primary .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-primary .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-primary .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-primary .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-primary .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-primary .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-primary .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-primary .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-primary .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-primary .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-primary .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-primary .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-primary .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-primary .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-primary .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-danger .modal-content {\n  background-color: #fd5d93;\n  color: #ffffff;\n}\n\n.modal.modal-danger .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-danger .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-danger .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-danger .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-danger .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-danger .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-danger .has-success:after,\n.modal.modal-danger .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-danger .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-danger .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-danger .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-danger .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border .form-control,\n.modal.modal-danger .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border .form-control:focus, .modal.modal-danger .form-group.no-border .form-control:active, .modal.modal-danger .form-group.no-border .form-control:active,\n.modal.modal-danger .input-group.no-border .form-control:focus,\n.modal.modal-danger .input-group.no-border .form-control:active,\n.modal.modal-danger .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-danger .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-danger .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-danger .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-danger .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-danger .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-danger .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-danger .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-danger .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-danger .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-danger .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-danger .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-danger .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-danger .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-danger .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-danger .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-danger .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-warning .modal-content {\n  background-color: #ff8d72;\n  color: #ffffff;\n}\n\n.modal.modal-warning .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-warning .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-warning .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-warning .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-warning .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-warning .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-warning .has-success:after,\n.modal.modal-warning .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-warning .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-warning .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-warning .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-warning .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border .form-control,\n.modal.modal-warning .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border .form-control:focus, .modal.modal-warning .form-group.no-border .form-control:active, .modal.modal-warning .form-group.no-border .form-control:active,\n.modal.modal-warning .input-group.no-border .form-control:focus,\n.modal.modal-warning .input-group.no-border .form-control:active,\n.modal.modal-warning .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-warning .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-warning .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-warning .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-warning .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-warning .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-warning .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-warning .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-warning .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-warning .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-warning .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-warning .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-warning .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-warning .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-warning .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-warning .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-warning .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-success .modal-content {\n  background-color: #00f2c3;\n  color: #ffffff;\n}\n\n.modal.modal-success .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-success .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-success .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-success .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-success .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-success .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-success .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-success .has-success:after,\n.modal.modal-success .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-success .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-success .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-success .input-group-prepend .input-group-text,\n.modal.modal-success .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-success .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-success .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border .form-control,\n.modal.modal-success .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border .form-control:focus, .modal.modal-success .form-group.no-border .form-control:active, .modal.modal-success .form-group.no-border .form-control:active,\n.modal.modal-success .input-group.no-border .form-control:focus,\n.modal.modal-success .input-group.no-border .form-control:active,\n.modal.modal-success .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-success .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-success .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-success .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-success .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-success .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-success .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-success .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-success .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-success .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-success .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-success .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-success .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-success .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-success .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-success .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-success .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-success .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-success .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-success .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-success .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-success .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-success .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-success .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-success .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-success .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-info .modal-content {\n  background-color: #1d8cf8;\n  color: #ffffff;\n}\n\n.modal.modal-info .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-info .form-control::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-info .form-control:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-info .form-control::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-info .form-control:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.modal.modal-info .form-control {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-info .form-control:focus {\n  border-color: #ffffff;\n  background-color: transparent;\n  color: #ffffff;\n}\n\n.modal.modal-info .has-success:after,\n.modal.modal-info .has-danger:after {\n  color: #ffffff;\n}\n\n.modal.modal-info .has-danger .form-control {\n  background-color: transparent;\n}\n\n.modal.modal-info .input-group-prepend {\n  margin-right: 0;\n}\n\n.modal.modal-info .input-group-prepend .input-group-text,\n.modal.modal-info .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.modal.modal-info .input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-info .input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  border-color: #ffffff;\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border .form-control,\n.modal.modal-info .input-group.no-border .form-control {\n  background-color: rgba(30, 30, 47, 0.2);\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border .form-control:focus, .modal.modal-info .form-group.no-border .form-control:active, .modal.modal-info .form-group.no-border .form-control:active,\n.modal.modal-info .input-group.no-border .form-control:focus,\n.modal.modal-info .input-group.no-border .form-control:active,\n.modal.modal-info .input-group.no-border .form-control:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-info .form-group.no-border .form-control + .input-group-append .input-group-text,\n.modal.modal-info .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.modal.modal-info .input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n}\n\n.modal.modal-info .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus, .modal.modal-info .form-group.no-border .form-control + .input-group-prepend .input-group-text:active, .modal.modal-info .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-info .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-info .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-info .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-info .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.modal.modal-info .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-info .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.modal.modal-info .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.modal.modal-info .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.modal.modal-info .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-info .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.modal.modal-info .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.modal.modal-info .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-info .form-group.no-border .input-group-append .input-group-text,\n.modal.modal-info .input-group.no-border .input-group-prepend .input-group-text,\n.modal.modal-info .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.2);\n  border: none;\n  color: #ffffff;\n}\n\n.modal.modal-info .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-info .form-group.no-border.input-group-focus .input-group-append .input-group-text,\n.modal.modal-info .input-group.no-border.input-group-focus .input-group-prepend .input-group-text,\n.modal.modal-info .input-group.no-border.input-group-focus .input-group-append .input-group-text {\n  background-color: rgba(30, 30, 47, 0.3);\n  color: #ffffff;\n}\n\n.modal .modal-header .close {\n  color: #fd5d93;\n  text-shadow: none;\n}\n\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\n  opacity: 1;\n}\n\n.modal.modal-black .modal-content {\n  background: linear-gradient(to bottom, #222a42 0%, #1d253b 100%);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-black .modal-content .modal-header .modal-title, .modal.modal-black .modal-content .modal-header .title {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.modal.modal-black .modal-content .modal-body p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.modal.modal-black h1, .modal.modal-black h2, .modal.modal-black h3, .modal.modal-black h4, .modal.modal-black h5, .modal.modal-black h6, .modal.modal-black p {\n  color: #ffffff;\n}\n\n.modal-search .modal-dialog {\n  margin: 20px auto;\n  max-width: 650px;\n}\n\n.modal-search .modal-dialog input {\n  border: none;\n  font-size: 17px;\n  font-weight: 100;\n}\n\n.modal-search .modal-dialog span {\n  font-size: 35px;\n  color: #b7b7b7;\n}\n\n.modal-search .modal-content .modal-header {\n  padding: 24px;\n}\n\n.modal-search .modal-header .close {\n  color: #555555;\n  top: 30px !important;\n}\n\n.modal-search .modal-footer {\n  border-top: 2px solid #f9f9f9;\n  margin: 0px 25px 20px;\n}\n\n.navbar {\n  padding: 10px 30px 10px 15px;\n  width: 100%;\n  z-index: 10;\n  background: #1a1e34;\n}\n\n.navbar .photo {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  vertical-align: middle;\n  overflow: hidden;\n}\n\n.navbar .photo img {\n  width: 100%;\n}\n\n.navbar .navbar-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.navbar .navbar-text {\n  color: #ffffff;\n}\n\n.navbar .btn {\n  margin: 0 5px 0 10px;\n}\n\n.navbar.navbar-absolute {\n  position: absolute;\n  z-index: 10;\n}\n\n.navbar.navbar-transparent {\n  background: transparent !important;\n}\n\n.navbar.bg-white .navbar-nav .search-bar.input-group i {\n  color: #222a42;\n}\n\n.navbar.bg-white .navbar-nav .search-bar.input-group .form-control {\n  background: rgba(34, 42, 66, 0.1);\n  border-radius: 4px;\n}\n\n.navbar.bg-white .navbar-nav a.nav-link {\n  color: #222a42 !important;\n}\n\n.navbar.bg-white .navbar-nav a.nav-link p {\n  color: #222a42;\n}\n\n.navbar.bg-white .navbar-text, .navbar.bg-white .navbar-brand {\n  color: #222a42;\n}\n\n.navbar.bg-white .form-control {\n  color: #222a42 !important;\n}\n\n.navbar.bg-white .form-control::placeholder {\n  color: #9A9A9A !important;\n}\n\n.navbar.bg-dark {\n  background: #222a42 !important;\n}\n\n.navbar.bg-primary {\n  background-color: #e14eca !important;\n}\n\n.navbar.bg-warning {\n  background-color: #ff8d72 !important;\n}\n\n.navbar.bg-info {\n  background-color: #1d8cf8 !important;\n}\n\n.navbar.bg-success {\n  background-color: #00bf9a !important;\n}\n\n.navbar.bg-danger {\n  background-color: #fd5d93 !important;\n}\n\n.navbar .navbar-brand {\n  position: fixed;\n  padding-top: .3125rem;\n  padding-bottom: .3125rem;\n  color: #ffffff;\n  margin-left: 17px;\n  margin-top: 3px;\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n\n.navbar .navbar-toggle button:focus, .navbar .navbar-toggler {\n  outline: none;\n}\n\n.navbar-minimize-fixed {\n  position: fixed;\n  margin-left: 40px;\n  margin-top: 14px;\n  transition: 0.3s ease;\n  color: white;\n  z-index: 20;\n  opacity: 0;\n  transition: 0.2s ease;\n}\n\n.navbar-minimize-fixed button i {\n  font-size: 20px;\n}\n\n.notification {\n  background: #fd5d93;\n  color: #ffffff;\n  border-radius: 0.875rem;\n  height: 6px;\n  width: 6px;\n  position: absolute;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 800;\n  top: 10px;\n  right: 10px;\n  border: 1px solid #fd5d93;\n}\n\n.navbar-nav li {\n  padding: 0 10px;\n}\n\n.navbar-nav li a {\n  color: #ffffff;\n}\n\n.navbar-nav li i {\n  vertical-align: middle;\n  font-size: 20px;\n}\n\n@media screen and (max-width: 991px) {\n  .navbar .container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n  .navbar .navbar-collapse .input-group {\n    margin: 0;\n    margin-top: 5px;\n  }\n  .navbar .navbar-nav .btn {\n    margin-left: -3px;\n    display: flex;\n  }\n  .navbar .navbar-nav .btn i {\n    margin-right: 12px;\n  }\n  .navbar .navbar-nav .btn span {\n    margin: 0;\n    text-transform: uppercase;\n    font-weight: 300;\n  }\n  .navbar .navbar-nav .btn span, .navbar .navbar-nav .btn span:hover, .navbar .navbar-nav .btn span:focus, .navbar .navbar-nav .btn span:active, .navbar .navbar-nav .btn span:active:focus {\n    color: #222a42 !important;\n  }\n  .navbar .navbar-nav a.nav-link i {\n    opacity: 1;\n    margin-left: 4px;\n    margin-right: 5px;\n  }\n  .navbar .navbar-nav a.nav-link p {\n    display: inline-block;\n    text-transform: uppercase;\n    margin-left: 7px;\n  }\n  .navbar .navbar-nav .modal-search .modal-dialog {\n    padding: 0 40px;\n  }\n  .navbar .navbar-nav .dropdown {\n    margin: 5px 0;\n  }\n  .navbar .navbar-nav .dropdown .nav-link {\n    padding-bottom: 0;\n  }\n  .navbar .navbar-nav .dropdown .dropdown-menu .dropdown-item {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n  .navbar .dropdown.show .dropdown-menu {\n    display: block;\n  }\n  .navbar .dropdown .dropdown-menu {\n    display: none;\n  }\n  .navbar .dropdown .dropdown-menu li a {\n    color: #222a42;\n  }\n  .navbar .dropdown.show .dropdown-menu,\n  .navbar .dropdown .dropdown-menu {\n    background-color: transparent;\n    border: 0;\n    transition: none;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    width: auto;\n    margin: 0px 1rem;\n    margin-top: 0px;\n  }\n  .navbar .dropdown.show .dropdown-menu:before,\n  .navbar .dropdown .dropdown-menu:before {\n    display: none;\n  }\n  .navbar .dropdown-menu .dropdown-item:focus,\n  .navbar .dropdown-menu .dropdown-item:hover {\n    color: #ffffff;\n  }\n  .navbar.bg-white .dropdown-menu .dropdown-item:focus,\n  .navbar.bg-white .dropdown-menu .dropdown-item:hover {\n    color: #344675;\n  }\n  .navbar button.navbar-toggler[data-target=\"#navigation\"] {\n    padding-top: 0;\n  }\n  .navbar .navbar-toggler-bar {\n    display: block;\n    position: relative;\n    width: 22px;\n    height: 1px;\n    border-radius: 1px;\n    background: #ffffff;\n  }\n  .navbar .navbar-toggler-bar.navbar-kebab {\n    height: 4px;\n    width: 4px;\n    margin-bottom: 3px;\n    border-radius: 50%;\n  }\n  .navbar .navbar-toggler-bar + .navbar-toggler-bar {\n    margin-top: 7px;\n  }\n  .navbar .navbar-toggler-bar + .navbar-toggler-bar.navbar-kebab {\n    margin-top: 0px;\n  }\n  .navbar .navbar-toggler-bar.bar2 {\n    width: 17px;\n    transition: width .2s linear;\n  }\n  .navbar.bg-white:not(.navbar-transparent) .navbar-toggler-bar {\n    background-color: #344675;\n  }\n  .navbar .toggled .navbar-toggler-bar {\n    width: 24px;\n  }\n  .navbar .toggled .navbar-toggler-bar + .navbar-toggler-bar {\n    margin-top: 5px;\n  }\n  .navbar .navbar-brand {\n    margin-left: 20px;\n    position: relative;\n  }\n  .navbar-nav .nav-link i.fa,\n  .navbar-nav .nav-link i.tim-icons {\n    opacity: .5;\n  }\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent;\n  }\n  .bar1 {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    -moz-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  .bar2 {\n    opacity: 1;\n  }\n  .bar3 {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    -moz-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  .toggled .bar1 {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    -moz-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  .toggled .bar2 {\n    opacity: 0;\n  }\n  .toggled .bar3 {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    -moz-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    -moz-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      transform: rotate(145deg);\n    }\n    75% {\n      transform: rotate(130deg);\n    }\n    100% {\n      transform: rotate(135deg);\n    }\n  }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n    }\n    75% {\n      -webkit-transform: rotate(130deg);\n    }\n    100% {\n      -webkit-transform: rotate(135deg);\n    }\n  }\n  @-moz-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -moz-transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      -moz-transform: rotate(145deg);\n    }\n    75% {\n      -moz-transform: rotate(130deg);\n    }\n    100% {\n      -moz-transform: rotate(135deg);\n    }\n  }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      transform: rotate(135deg);\n    }\n    45% {\n      transform: rotate(-10deg);\n    }\n    75% {\n      transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n    }\n    45% {\n      -webkit-transform: rotate(-10deg);\n    }\n    75% {\n      -webkit-transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @-moz-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -moz-transform: rotate(135deg);\n    }\n    45% {\n      -moz-transform: rotate(-10deg);\n    }\n    75% {\n      -moz-transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      -moz-transform: rotate(0);\n    }\n  }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      transform: rotate(-145deg);\n    }\n    75% {\n      transform: rotate(-130deg);\n    }\n    100% {\n      transform: rotate(-135deg);\n    }\n  }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n    }\n    75% {\n      -webkit-transform: rotate(-130deg);\n    }\n    100% {\n      -webkit-transform: rotate(-135deg);\n    }\n  }\n  @-moz-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -moz-transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      -moz-transform: rotate(-145deg);\n    }\n    75% {\n      -moz-transform: rotate(-130deg);\n    }\n    100% {\n      -moz-transform: rotate(-135deg);\n    }\n  }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      transform: rotate(-135deg);\n    }\n    45% {\n      transform: rotate(10deg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n    }\n    45% {\n      -webkit-transform: rotate(10deg);\n    }\n    75% {\n      -webkit-transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @-moz-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -moz-transform: rotate(-135deg);\n    }\n    45% {\n      -moz-transform: rotate(10deg);\n    }\n    75% {\n      -moz-transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      -moz-transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @-moz-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .navbar-collapse {\n    background: none !important;\n  }\n  .navbar .navbar-toggle {\n    display: none;\n  }\n  .navbar-nav .nav-link.profile-photo {\n    padding: 0;\n    margin: 7px 0.7rem;\n  }\n  .navbar .caret {\n    position: absolute;\n    left: 80%;\n    top: 55%;\n    margin-left: 0;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .navbar[class*='navbar-toggleable-'] .container {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .navbar .navbar-wrapper .navbar-toggle {\n    transition: all 1s;\n  }\n  .navbar .navbar-wrapper .navbar-toggle.toggled {\n    left: -20px;\n    position: relative;\n    right: unset;\n    transition: all 1s;\n  }\n  .rtl .navbar .navbar-wrapper .navbar-toggle.toggled {\n    right: -35px;\n    position: relative;\n    left: unset;\n    transition: all 1s;\n  }\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  line-height: 1.2;\n}\n\np {\n  font-weight: 300;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.card h1, .card h2, .card h3, .card h4, .card h5, .card h6, .card p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.8);\n}\n\na {\n  color: #ba54f5;\n  font-weight: 300;\n}\n\na:hover, a:focus {\n  color: #e14eca;\n}\n\nh1, .h1 {\n  line-height: 1.05;\n  margin-bottom: 30px;\n}\n\nh1 small, .h1 small {\n  font-weight: 600;\n  text-transform: uppercase;\n  opacity: .8;\n}\n\nh2, .h2 {\n  margin-bottom: 30px;\n  line-height: 1.2;\n}\n\nh3, .h3 {\n  margin-bottom: 30px;\n  line-height: 1.4em;\n}\n\nh4, .h4 {\n  line-height: 1.45em;\n  margin-bottom: 15px;\n}\n\nh4 + .category,\nh4.title + .category, .h4 + .category,\n.h4.title + .category {\n  margin-top: -10px;\n}\n\nh5, .h5 {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n}\n\nh6, .h6 {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\np {\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 5px;\n}\n\np.description {\n  font-size: 1.14em;\n}\n\n.title {\n  font-weight: 600;\n}\n\n.title.title-up {\n  text-transform: uppercase;\n}\n\n.title.title-up a {\n  color: #222a42;\n  text-decoration: none;\n}\n\n.title + .category {\n  margin-top: -10px;\n}\n\n.description,\n.card-description,\n.footer-big p,\n.card .footer .stats {\n  color: #9A9A9A;\n  font-weight: 300;\n}\n\n.category,\n.card-category {\n  text-transform: capitalize;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.75rem;\n}\n\n.card-category {\n  font-size: 0.75rem;\n}\n\n.blockquote {\n  border-left: none;\n  border: 1px solid #344675;\n  padding: 20px;\n  font-size: 0.9625rem;\n  line-height: 1.8;\n}\n\n.blockquote small {\n  color: #344675;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n.blockquote.blockquote-primary {\n  border-color: #e14eca;\n  color: #e14eca;\n}\n\n.blockquote.blockquote-primary small {\n  color: #e14eca;\n}\n\n.blockquote.blockquote-danger {\n  border-color: #fd5d93;\n  color: #fd5d93;\n}\n\n.blockquote.blockquote-danger small {\n  color: #fd5d93;\n}\n\n.blockquote.blockquote-white {\n  border-color: rgba(255, 255, 255, 0.8);\n  color: #ffffff;\n}\n\n.blockquote.blockquote-white small {\n  color: rgba(255, 255, 255, 0.8);\n}\n\nul li, ol li {\n  color: #ffffff;\n}\n\npre {\n  color: rgba(255, 255, 255, 0.8);\n}\n\nhr {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.table > tbody > tr > td {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n\n.table > tbody > tr > td .photo {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.table > tbody > tr > td .photo img {\n  width: 100%;\n}\n\n.table > tbody > tr.table-success > td {\n  background-color: #00bf9a;\n}\n\n.table > tbody > tr.table-info > td {\n  background-color: #1d8cf8;\n}\n\n.table > tbody > tr.table-primary > td {\n  background-color: #e14eca;\n}\n\n.table > tbody > tr.table-warning > td {\n  background-color: #ff8d72;\n}\n\n.table > tbody > tr.table-danger > td {\n  background-color: #fd5d93;\n}\n\n.table .img-wrapper {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.table .img-row {\n  max-width: 60px;\n  width: 60px;\n}\n\n.table .form-check {\n  margin: 0;\n  margin-top: 5px;\n}\n\n.table .form-check label .form-check-sign::before,\n.table .form-check label .form-check-sign::after {\n  top: -17px;\n  left: 4px;\n}\n\n.table .btn {\n  margin: 0;\n}\n\n.table small, .table .small {\n  font-weight: 300;\n}\n\n.card-tasks .card-body .table {\n  margin-bottom: 0;\n}\n\n.card-tasks .card-body .table > thead > tr > th,\n.card-tasks .card-body .table > tbody > tr > th,\n.card-tasks .card-body .table > tfoot > tr > th,\n.card-tasks .card-body .table > thead > tr > td,\n.card-tasks .card-body .table > tbody > tr > td,\n.card-tasks .card-body .table > tfoot > tr > td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 700;\n  border: 0;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  width: 15px;\n}\n\n.table .radio .icons,\n.table .checkbox .icons {\n  position: relative;\n}\n\n.table .radio label:after, .table .radio label:before,\n.table .checkbox label:after,\n.table .checkbox label:before {\n  top: -17px;\n  left: -3px;\n}\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-color: rgba(255, 255, 255, 0.1);\n  padding: 12px 7px;\n  vertical-align: middle;\n}\n\n.table.table-shopping tbody tr:last-child td {\n  border: none;\n}\n\n.table .th-description {\n  max-width: 150px;\n}\n\n.table .td-price {\n  font-size: 26px;\n  font-weight: 300;\n  margin-top: 5px;\n  position: relative;\n  top: 4px;\n  text-align: right;\n}\n\n.table .td-total {\n  font-weight: 600;\n  font-size: 0.81249998rem;\n  padding-top: 20px;\n  text-align: right;\n}\n\n.table .td-actions .btn {\n  margin: 0px;\n}\n\n.table > tbody > tr {\n  position: relative;\n}\n\n.table > tfoot > tr {\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n}\n\n.table-responsive {\n  overflow: scroll;\n  padding-bottom: 10px;\n}\n\n#tables .table-responsive {\n  margin-bottom: 30px;\n}\n\n.form-check {\n  margin-top: .5rem;\n  padding-left: 0;\n}\n\n.form-check .form-check-label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding-left: 25px;\n  line-height: 18px;\n  margin-bottom: 0;\n  -webkit-transition: color 0.3s linear;\n  -moz-transition: color 0.3s linear;\n  -o-transition: color 0.3s linear;\n  -ms-transition: color 0.3s linear;\n  transition: color 0.3s linear;\n}\n\n.radio .form-check-sign {\n  padding-left: 28px;\n}\n\n.form-check-radio.form-check-inline .form-check-label {\n  padding-left: 5px;\n  margin-right: 10px;\n}\n\n.form-check .form-check-sign::before,\n.form-check .form-check-sign::after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  left: 0;\n  cursor: pointer;\n  border-radius: 3px;\n  top: 0;\n  border: 1px solid #818080;\n  -webkit-transition: opacity 0.3s linear;\n  -moz-transition: opacity 0.3s linear;\n  -o-transition: opacity 0.3s linear;\n  -ms-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::before,\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::before {\n  border: none;\n  background-color: #e14eca;\n}\n\n.form-check .form-check-sign::after {\n  font-family: 'nucleo';\n  content: \"\\EA1B\";\n  top: 0px;\n  text-align: center;\n  font-size: 14px;\n  opacity: 0;\n  color: #ffffff;\n  font-weight: 600;\n  border: 0;\n  background-color: inherit;\n}\n\n.form-check.disabled .form-check-label,\n.form-check.disabled .form-check-label {\n  color: #9A9A9A;\n  opacity: .5;\n  cursor: not-allowed;\n}\n\n.form-check input[type=\"checkbox\"],\n.radio input[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n}\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::after {\n  opacity: 1;\n  font-size: 10px;\n  margin-top: 0;\n}\n\n.form-check input[type=\"checkbox\"] + .form-check-sign::after {\n  opacity: 0;\n  font-size: 10px;\n  margin-top: 0;\n}\n\n.form-control input[type=\"checkbox\"]:disabled + .form-check-sign::before,\n.checkbox input[type=\"checkbox\"]:disabled + .form-check-sign::after {\n  cursor: not-allowed;\n}\n\n.form-check input[type=\"checkbox\"]:disabled + .form-check-sign,\n.form-check input[type=\"radio\"]:disabled + .form-check-sign {\n  pointer-events: none;\n}\n\n.form-check-radio .form-check-label {\n  padding-top: 3px;\n}\n\n.form-check-radio .form-check-sign::before,\n.form-check-radio .form-check-sign::after {\n  content: \" \";\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #818080;\n  display: inline-block;\n  position: absolute;\n  left: 0px;\n  top: 3px;\n  padding: 1px;\n  -webkit-transition: opacity 0.3s linear;\n  -moz-transition: opacity 0.3s linear;\n  -o-transition: opacity 0.3s linear;\n  -ms-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n\n.form-check-radio input[type=\"radio\"] + .form-check-sign:after,\n.form-check-radio input[type=\"radio\"] {\n  opacity: 0;\n}\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  width: 6px;\n  height: 6px;\n  background-color: #e14eca;\n  border-color: #e14eca;\n  top: 9px;\n  left: 6px;\n  opacity: 1;\n}\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::before {\n  border-color: #e14eca;\n}\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  opacity: 1;\n}\n\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign {\n  color: #9A9A9A;\n}\n\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::before,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::after {\n  color: #9A9A9A;\n}\n\n.fixed-plugin {\n  position: fixed;\n  right: 0;\n  width: 64px;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1031;\n  border-radius: 8px 0 0 8px;\n  text-align: center;\n  top: 130px;\n}\n\n.fixed-plugin li > a,\n.fixed-plugin .badge {\n  transition: all .34s;\n  -webkit-transition: all .34s;\n  -moz-transition: all .34s;\n}\n\n.fixed-plugin .fa-cog {\n  color: #ffffff;\n  padding: 10px;\n  border-radius: 0 0 6px 6px;\n  width: auto;\n}\n\n.fixed-plugin .dropdown-menu {\n  right: 80px;\n  left: auto !important;\n  top: -52px !important;\n  width: 290px;\n  border-radius: 0.1875rem;\n  padding: 0 10px;\n  background: linear-gradient(#222a42, #1d253b);\n  display: none;\n}\n\n.fixed-plugin .dropdown .dropdown-menu .tim-icons {\n  top: 5px;\n}\n\n.fixed-plugin .dropdown-menu:after,\n.fixed-plugin .dropdown-menu:before {\n  right: 10px;\n  margin-left: auto;\n  left: auto;\n}\n\n.fixed-plugin .fa-circle-thin {\n  color: #ffffff;\n}\n\n.fixed-plugin .active .fa-circle-thin {\n  color: #00bbff;\n}\n\n.fixed-plugin .dropdown-menu > .active > a,\n.fixed-plugin .dropdown-menu > .active > a:hover,\n.fixed-plugin .dropdown-menu > .active > a:focus {\n  color: #777777;\n  text-align: center;\n}\n\n.fixed-plugin img {\n  border-radius: 0;\n  width: 100%;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.fixed-plugin .dropdown-menu li > a:hover,\n.fixed-plugin .dropdown-menu li > a:focus {\n  box-shadow: none;\n}\n\n.fixed-plugin .badge {\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  display: inline-block;\n  height: 23px;\n  margin-right: 5px;\n  position: relative;\n  width: 23px;\n}\n\n.fixed-plugin .badge.active,\n.fixed-plugin .badge:hover {\n  border-color: #1d253b;\n}\n\n.fixed-plugin .light-badge, .fixed-plugin .dark-badge {\n  margin: 0;\n  border: 1px solid #1d8cf8;\n}\n\n.fixed-plugin .light-badge:hover, .fixed-plugin .dark-badge:hover {\n  border: 1px solid #1d8cf8;\n}\n\n.fixed-plugin .light-badge {\n  background: #ffffff;\n}\n\n.fixed-plugin .light-badge:hover {\n  background: #ffffff;\n}\n\n.fixed-plugin .dark-badge {\n  background: #222a42;\n}\n\n.fixed-plugin .dark-badge:hover {\n  background: #222a42;\n}\n\n.fixed-plugin h5 {\n  margin: 10px;\n}\n\n.fixed-plugin .dropdown-menu li {\n  display: block;\n  padding: 18px 2px;\n  width: 25%;\n  float: left;\n}\n\n.fixed-plugin li.adjustments-line,\n.fixed-plugin li.header-title,\n.fixed-plugin li.button-container {\n  width: 100%;\n  height: 50px;\n  min-height: inherit;\n}\n\n.fixed-plugin li.button-container {\n  height: auto;\n}\n\n.fixed-plugin li.button-container div {\n  margin-bottom: 5px;\n}\n\n.fixed-plugin #sharrreTitle {\n  text-align: center;\n  padding: 10px 0;\n  height: 50px;\n}\n\n.fixed-plugin li.header-title {\n  color: #ffffff;\n  height: 30px;\n  line-height: 25px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.fixed-plugin .adjustments-line a {\n  color: transparent;\n}\n\n.fixed-plugin .adjustments-line a .badge-colors {\n  position: relative;\n  top: -2px;\n}\n\n.fixed-plugin .adjustments-line a a:hover,\n.fixed-plugin .adjustments-line a a:focus {\n  color: transparent;\n}\n\n.fixed-plugin .adjustments-line .togglebutton {\n  text-align: center;\n}\n\n.fixed-plugin .adjustments-line .togglebutton .label-switch {\n  position: relative;\n  left: -10px;\n  font-size: 0.62475rem;\n  color: #ffffff;\n}\n\n.fixed-plugin .adjustments-line .togglebutton .label-switch.label-right {\n  left: 10px;\n}\n\n.fixed-plugin .adjustments-line .togglebutton .toggle {\n  margin-right: 0;\n}\n\n.fixed-plugin .adjustments-line .color-label {\n  position: relative;\n  top: -7px;\n  font-size: 0.62475rem;\n  color: #ffffff;\n}\n\n.fixed-plugin .adjustments-line .dropdown-menu > li.adjustments-line > a {\n  padding-right: 0;\n  padding-left: 0;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  margin: 0;\n}\n\n.fixed-plugin .dropdown-menu > li > a.img-holder {\n  font-size: 1rem;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #ffffff;\n  border: 3px solid #ffffff;\n  padding-left: 0;\n  padding-right: 0;\n  opacity: 1;\n  cursor: pointer;\n  display: block;\n  max-height: 100px;\n  overflow: hidden;\n  padding: 0;\n}\n\n.fixed-plugin .dropdown-menu > li > a.img-holder img {\n  margin-top: auto;\n}\n\n.fixed-plugin .dropdown-menu > li a.switch-trigger:hover,\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:focus {\n  background-color: transparent;\n}\n\n.fixed-plugin .dropdown-menu > li:hover > a.img-holder, .fixed-plugin .dropdown-menu > li:focus > a.img-holder {\n  border-color: rgba(0, 187, 255, 0.53);\n}\n\n.fixed-plugin .dropdown-menu > .active > a.img-holder,\n.fixed-plugin .dropdown-menu > .active > a.img-holder {\n  border-color: #00bbff;\n  background-color: #ffffff;\n}\n\n.fixed-plugin .btn-social {\n  width: 50%;\n  display: block;\n  width: 48%;\n  float: left;\n  font-weight: 600;\n}\n\n.fixed-plugin .btn-social i {\n  margin-right: 5px;\n}\n\n.fixed-plugin .btn-social:first-child {\n  margin-right: 2%;\n}\n\n.fixed-plugin .dropdown .dropdown-menu {\n  -webkit-transform: translateY(-15%);\n  -moz-transform: translateY(-15%);\n  -o-transform: translateY(-15%);\n  -ms-transform: translateY(-15%);\n  transform: translateY(-15%);\n  top: 27px;\n  opacity: 0;\n  transform-origin: 0 0;\n}\n\n.fixed-plugin .dropdown .dropdown-menu:before {\n  border-bottom: 0.4em solid rgba(0, 0, 0, 0);\n  border-left: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-top: 0.4em solid rgba(0, 0, 0, 0);\n  right: -16px;\n  top: 46px;\n}\n\n.fixed-plugin .dropdown .dropdown-menu:after {\n  border-bottom: 0.4em solid rgba(0, 0, 0, 0);\n  border-left: 0.4em solid #222a42;\n  border-top: 0.4em solid rgba(0, 0, 0, 0);\n  right: -16px;\n}\n\n.fixed-plugin .dropdown .dropdown-menu:before, .fixed-plugin .dropdown .dropdown-menu:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 74px;\n  width: 16px;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n}\n\n.fixed-plugin .dropdown.show .dropdown-menu {\n  opacity: 1;\n  -webkit-transform: translateY(-13%);\n  -moz-transform: translateY(-13%);\n  -o-transform: translateY(-13%);\n  -ms-transform: translateY(-13%);\n  transform: translateY(-13%);\n  display: block;\n  transform-origin: 0 0;\n}\n\n.fixed-plugin .bootstrap-switch {\n  margin: 0;\n}\n\n/* Animations */\n.nav-pills .nav-link,\n.navbar,\n.nav-tabs .nav-link,\n.sidebar .nav a,\n.sidebar .nav a i,\n.sidebar .nav p,\n.navbar-collapse .navbar-nav .nav-link,\n.animation-transition-general,\n.sidebar .nav p,\n.off-canvas-sidebar .nav p,\n.sidebar .logo a.logo-mini,\n.sidebar .logo a.logo-normal,\n.off-canvas-sidebar .logo a.logo-mini,\n.off-canvas-sidebar .logo a.logo-normal,\n.sidebar .user .photo,\n.off-canvas-sidebar .user .photo,\n.sidebar .user a,\n.off-canvas-sidebar .user a,\n.sidebar .user .info > a > span,\n.off-canvas-sidebar .user .info > a > span,\n.tag,\n.tag [data-role=\"remove\"],\n.animation-transition-general,\n.sidebar .nav p,\n.off-canvas-sidebar .nav p,\n.sidebar .logo a.logo-mini,\n.sidebar .logo a.logo-normal,\n.off-canvas-sidebar .logo a.logo-mini,\n.off-canvas-sidebar .logo a.logo-normal,\n.sidebar .user .photo,\n.off-canvas-sidebar .user .photo,\n.sidebar .user a,\n.off-canvas-sidebar .user a,\n.sidebar .user .info > a > span,\n.off-canvas-sidebar .user .info > a > span {\n  -webkit-transition: all 300ms ease 0s;\n  -moz-transition: all 300ms ease 0s;\n  -o-transition: all 300ms ease 0s;\n  -ms-transition: all 300ms ease 0s;\n  transition: all 300ms ease 0s;\n}\n\n.bootstrap-switch-label:before,\n.caret {\n  -webkit-transition: all 150ms ease 0s;\n  -moz-transition: all 150ms ease 0s;\n  -o-transition: all 150ms ease 0s;\n  -ms-transition: all 150ms ease 0s;\n  transition: all 150ms ease 0s;\n}\n\n.dropdown-toggle[aria-expanded=\"true\"]:after,\na[data-toggle=\"collapse\"][aria-expanded=\"true\"] .caret,\n.card-collapse .card a[data-toggle=\"collapse\"][aria-expanded=\"true\"] i,\n.card-collapse .card a[data-toggle=\"collapse\"].expanded i {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.caret {\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n  margin-top: -5px;\n  position: absolute;\n  top: 30px;\n  margin-left: 5px;\n}\n\n.pull-left {\n  float: left;\n}\n\n.pull-right {\n  float: right;\n}\n\n.card form label + .form-control {\n  margin-bottom: 20px;\n}\n\n.card .map-title {\n  color: #ffffff;\n}\n\n.card.card-chart .gmnoprint,\n.card.card-chart .gm-style-cc {\n  display: none !important;\n}\n\n.bd-docs h1, .bd-docs h2, .bd-docs h3, .bd-docs h4, .bd-docs h5, .bd-docs h6, .bd-docs p, .bd-docs ul li, .bd-docs ol li {\n  color: #2c2c2c;\n}\n\n.bd-docs .bd-content > table > thead > tr > th {\n  color: #222a42;\n}\n\n.bd-docs .blockquote, .bd-docs .blockquote p, .bd-docs .card p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs .bd-example {\n  background: linear-gradient(#1e1e2f, #1e1e24);\n}\n\n.bd-docs .navbar {\n  border-top: none;\n}\n\n.bd-docs .navbar .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n.bd-docs .bd-example .btn {\n  margin: 4px 0;\n}\n\n.bd-docs .bd-example .btn .badge {\n  display: inline-block;\n}\n\n.bd-docs .bd-example .tim-icons {\n  color: #ffffff;\n}\n\n.bd-docs .bd-example .popover .popover-header {\n  color: rgba(181, 181, 181, 0.6);\n}\n\n.bd-docs .bd-example .popover-body p {\n  color: #212529;\n}\n\n.bd-docs .bd-example.tooltip-demo p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs .card.card-body,\n.bd-docs .card .card-body {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs label,\n.bd-docs .form-check {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs .form-check + .btn {\n  margin-top: 20px;\n}\n\n.bd-docs .bd-example thead th,\n.bd-docs table thead th {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs .bd-example h1, .bd-docs .bd-example h2, .bd-docs .bd-example h3, .bd-docs .bd-example h4, .bd-docs .bd-example h5, .bd-docs .bd-example h6,\n.bd-docs .bd-example .h1, .bd-docs .bd-example .h2, .bd-docs .bd-example .h3, .bd-docs .bd-example .h4, .bd-docs .bd-example .h5, .bd-docs .bd-example .h6,\n.bd-docs table h1,\n.bd-docs table h2,\n.bd-docs table h3,\n.bd-docs table h4,\n.bd-docs table h5,\n.bd-docs table h6,\n.bd-docs table .h1,\n.bd-docs table .h2,\n.bd-docs table .h3,\n.bd-docs table .h4,\n.bd-docs table .h5,\n.bd-docs table .h6 {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bd-docs .bd-example .datepicker thead th, .bd-docs .bd-example .datepicker table thead th, .bd-docs .bd-example .datepicker .tim-icons,\n.bd-docs table .datepicker thead th,\n.bd-docs table .datepicker table thead th,\n.bd-docs table .datepicker .tim-icons {\n  color: #e14eca;\n}\n\n.bd-docs .bd-example .picker-switch .tim-icons,\n.bd-docs table .picker-switch .tim-icons {\n  color: #e14eca;\n}\n\n.bd-docs .footer .container-fluid > nav {\n  display: inline-block;\n}\n\n.modal.show .modal-dialog {\n  -webkit-transform: translate(0, 30%);\n  transform: translate(0, 30%);\n}\n\ncode {\n  color: #f3a4b5;\n}\n\n@media screen and (max-width: 991px) {\n  .profile-photo .profile-photo-small {\n    margin-left: -2px;\n  }\n  .button-dropdown {\n    display: none;\n  }\n  #searchModal .modal-dialog {\n    margin: 20px;\n  }\n  #minimizeSidebar {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .landing-page .section-story-overview .image-container:nth-child(2) {\n    margin-left: 0;\n    margin-bottom: 30px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .page-header .container h6.category-absolute {\n    width: 90%;\n  }\n  .form-horizontal .col-form-label, .form-horizontal .label-on-right {\n    text-align: inherit;\n    padding-top: 0;\n  }\n  .form-horizontal .col-form-label code, .form-horizontal .label-on-right code {\n    padding: 0 10px;\n  }\n}\n\n.rtl .sidebar,\n.rtl .bootstrap-navbar {\n  right: 0;\n  left: auto;\n  margin-right: 20px;\n  margin-left: 0;\n}\n\n.rtl .sidebar .nav i,\n.rtl .bootstrap-navbar .nav i {\n  float: right;\n  margin-left: 15px;\n  margin-right: 0;\n}\n\n.rtl .sidebar .nav p,\n.rtl .bootstrap-navbar .nav p {\n  margin-right: 45px;\n  text-align: right;\n}\n\n.rtl .sidebar .nav .caret,\n.rtl .bootstrap-navbar .nav .caret {\n  left: 11px;\n  right: auto;\n}\n\n.rtl .sidebar .logo a.logo-mini,\n.rtl .bootstrap-navbar .logo a.logo-mini {\n  float: right;\n  margin-right: 20px;\n  margin-left: 10px;\n}\n\n.rtl .sidebar .logo .simple-text,\n.rtl .bootstrap-navbar .logo .simple-text {\n  text-align: right;\n}\n\n.rtl .sidebar .sidebar-wrapper .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.rtl .sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.rtl .bootstrap-navbar .sidebar-wrapper .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.rtl .bootstrap-navbar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon {\n  float: right;\n  margin-left: 15px;\n  margin-right: 0;\n}\n\n.rtl .sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.rtl .sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.rtl .bootstrap-navbar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.rtl .bootstrap-navbar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal {\n  text-align: right;\n}\n\n.rtl .sidebar:before,\n.rtl .bootstrap-navbar:before {\n  right: 30px;\n  left: auto;\n}\n\n.rtl .main-panel .content {\n  padding: 80px 280px 30px 30px;\n}\n\n.rtl .footer {\n  padding: 24px 300px 24px 0;\n}\n\n.rtl .dropdown-toggle:after {\n  margin-right: .255em;\n  margin-left: 0;\n}\n\n.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar {\n  right: -220px !important;\n  left: auto;\n}\n\n.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar:before {\n  right: auto;\n  left: 35px;\n}\n\n.rtl .notification {\n  left: 40px;\n  right: auto;\n}\n\n.rtl .dropdown-menu {\n  right: auto;\n  left: 0;\n}\n\n.rtl .minimize-sidebar {\n  float: right;\n}\n\n.rtl .alert {\n  left: 0;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.rtl .alert button.close {\n  left: 10px !important;\n  right: auto !important;\n}\n\n.rtl .alert span[data-notify=\"icon\"] {\n  right: 15px;\n  left: auto;\n}\n\n.rtl .alert.alert-with-icon {\n  padding-right: 65px;\n  padding-left: 15px;\n}\n\n.rtl .alert.alert-with-icon i[data-notify=\"icon\"] {\n  right: 15px;\n  left: auto;\n}\n\n.rtl .search-bar {\n  margin-left: 0;\n}\n\n.rtl .modal-search .modal-header .close {\n  margin-right: auto;\n  left: 10px;\n}\n\n@media (min-width: 991px) {\n  .rtl.sidebar-mini .main-panel .content {\n    padding-right: 130px;\n    padding-left: 50px;\n  }\n  .rtl.sidebar-mini footer {\n    padding-right: 130px;\n    padding-left: 50px;\n  }\n  .rtl .navbar-minimize button {\n    margin-right: -5px;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .rtl .sidebar {\n    margin-right: 0;\n  }\n  .rtl .main-panel .content {\n    padding-right: 50px;\n  }\n  .rtl #bodyClick {\n    right: 260px;\n    left: auto;\n  }\n  .rtl .footer {\n    padding-right: 15px;\n  }\n}\n\n.rtl .navbar .navbar-nav {\n  padding-right: 0;\n}\n\n.rtl .navbar .navbar-nav a.nav-link {\n  text-align: right;\n}\n\n.rtl .navbar .navbar-nav a.nav-link p {\n  margin-right: 7px;\n}\n\n.rtl .navbar .navbar-nav .btn {\n  margin-right: 0;\n  padding: 0;\n}\n\n.rtl .navbar .navbar-nav .btn i {\n  margin-left: 4px;\n  margin-right: 5px;\n}\n\n.rtl .navbar .navbar-nav .search-bar span {\n  margin-right: 10px;\n}\n\n.rtl .ps__rail-y {\n  right: auto !important;\n  left: 0;\n}\n\n.rtl .main-panel {\n  position: fixed;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.rtl .fixed-plugin {\n  border-radius: 0 8px 8px 0;\n  left: 0;\n  right: unset;\n}\n\n.rtl .fixed-plugin .dropdown-menu {\n  left: 80px !important;\n  right: auto !important;\n}\n\n.rtl .fixed-plugin .dropdown-menu:before, .rtl .fixed-plugin .dropdown-menu:after {\n  left: 10px;\n  margin-right: auto;\n  right: auto;\n}\n\n.rtl .fixed-plugin .dropdown-menu:before {\n  right: unset;\n  left: -16px;\n  border-left: unset;\n  border-right: 0.4em solid rgba(0, 0, 0, 0.2);\n}\n\n.rtl .fixed-plugin .dropdown-menu:after {\n  right: unset;\n  left: -16px;\n  border-left: unset;\n  border-right: 0.4em solid #222a42;\n}\n\n.rtl .sidebar .nav li.active > a:not([data-toggle=\"collapse\"]):before, .rtl .off-canvas-sidebar .nav li.active > a:not([data-toggle=\"collapse\"]):before {\n  left: unset;\n  right: -4px;\n}\n\n@media screen and (max-width: 768px) {\n  .rtl .main-panel .content {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n.form-group.has-danger .error,\n.input-group.has-danger .error {\n  color: #ec250d;\n}\n\n.form-group.has-success .error,\n.input-group.has-success .error {\n  color: #00f2c3;\n}\n\n.form-group.no-border.form-control-lg .input-group-append .input-group-text,\n.input-group.no-border.form-control-lg .input-group-append .input-group-text {\n  padding: 15px 0 15px 19px;\n}\n\n.form-group.no-border.form-control-lg .form-control,\n.input-group.no-border.form-control-lg .form-control {\n  padding: 15px 19px;\n}\n\n.form-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text,\n.form-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text,\n.input-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text,\n.input-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text {\n  padding: 15px 19px 15px 0;\n}\n\n.form-group.form-control-lg .form-control,\n.input-group.form-control-lg .form-control {\n  padding: 14px 18px;\n  height: 100%;\n}\n\n.form-group.form-control-lg .form-control + .input-group-prepend .input-group-text,\n.form-group.form-control-lg .form-control + .input-group-append .input-group-text,\n.input-group.form-control-lg .form-control + .input-group-prepend .input-group-text,\n.input-group.form-control-lg .form-control + .input-group-append .input-group-text {\n  padding: 14px 18px 14px 0;\n}\n\n.form-group.form-control-lg .input-group-prepend .input-group-text,\n.form-group.form-control-lg .input-group-append .input-group-text,\n.input-group.form-control-lg .input-group-prepend .input-group-text,\n.input-group.form-control-lg .input-group-append .input-group-text {\n  padding: 14px 0 15px 18px;\n}\n\n.form-group.form-control-lg .input-group-prepend .input-group-text + .form-control,\n.form-group.form-control-lg .input-group-append .input-group-text + .form-control,\n.input-group.form-control-lg .input-group-prepend .input-group-text + .form-control,\n.input-group.form-control-lg .input-group-append .input-group-text + .form-control {\n  padding: 15px 18px 15px 16px;\n}\n\n.form-group.no-border .form-control,\n.input-group.no-border .form-control {\n  padding: 11px 19px;\n}\n\n.form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.form-group.no-border .form-control + .input-group-append .input-group-text,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.input-group.no-border .form-control + .input-group-append .input-group-text {\n  padding: 11px 19px 11px 0;\n}\n\n.form-group.no-border .input-group-prepend .input-group-text,\n.form-group.no-border .input-group-append .input-group-text,\n.input-group.no-border .input-group-prepend .input-group-text,\n.input-group.no-border .input-group-append .input-group-text {\n  padding: 11px 0 11px 19px;\n}\n\n.form-group .form-control,\n.input-group .form-control {\n  padding: 10px 18px 10px 18px;\n}\n\n.form-group .form-control + .input-group-prepend .input-group-text,\n.form-group .form-control + .input-group-append .input-group-text,\n.input-group .form-control + .input-group-prepend .input-group-text,\n.input-group .form-control + .input-group-append .input-group-text {\n  padding: 10px 18px 10px 0;\n}\n\n.form-group .input-group-prepend .input-group-text,\n.form-group .input-group-append .input-group-text,\n.input-group .input-group-prepend .input-group-text,\n.input-group .input-group-append .input-group-text {\n  padding: 10px 0 10px 18px;\n}\n\n.form-group .input-group-prepend .input-group-text + .form-control,\n.form-group .input-group-prepend .input-group-text ~ .form-control,\n.form-group .input-group-append .input-group-text + .form-control,\n.form-group .input-group-append .input-group-text ~ .form-control,\n.input-group .input-group-prepend .input-group-text + .form-control,\n.input-group .input-group-prepend .input-group-text ~ .form-control,\n.input-group .input-group-append .input-group-text + .form-control,\n.input-group .input-group-append .input-group-text ~ .form-control {\n  padding: 10px 19px 11px 16px;\n}\n\n.form-group.no-border .form-control,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.form-group.no-border .form-control + .input-group-append .input-group-text,\n.input-group.no-border .form-control,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: #242c45;\n  border: medium none;\n}\n\n.form-group.no-border .form-control:focus, .form-group.no-border .form-control:active, .form-group.no-border .form-control:active,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.input-group.no-border .form-control:focus,\n.input-group.no-border .form-control:active,\n.input-group.no-border .form-control:active,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.input-group.no-border .form-control + .input-group-append .input-group-text:active {\n  border: medium none;\n  background-color: #252e49;\n}\n\n.form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: #252e49;\n}\n\n.form-group.no-border .input-group-prepend .input-group-text,\n.form-group.no-border .input-group-append .input-group-text,\n.input-group.no-border .input-group-prepend .input-group-text,\n.input-group.no-border .input-group-append .input-group-text {\n  background-color: #242c45;\n  border: none;\n}\n\n.has-error .form-control-feedback, .has-error .control-label {\n  color: #ec250d;\n}\n\n.has-success .form-control-feedback, .has-success .control-label {\n  color: #00f2c3;\n}\n\n.input-group-append .input-group-text,\n.input-group-prepend .input-group-text {\n  background-color: transparent;\n  border: 1px solid #2b3553;\n  border-radius: 0.4285rem;\n  color: #ffffff;\n  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n}\n\n.input-group-append .input-group-text i,\n.input-group-prepend .input-group-text i {\n  opacity: .5;\n}\n\n.has-danger.input-group-focus .input-group-append .input-group-text, .has-danger.input-group-focus\n.input-group-prepend .input-group-text {\n  background-color: transparent;\n}\n\n.has-success .input-group-append .input-group-text, .has-success\n.input-group-prepend .input-group-text {\n  background-color: transparent;\n}\n\n.has-danger .form-control:focus + .input-group-append .input-group-text, .has-danger .form-control:focus +\n.input-group-prepend .input-group-text {\n  color: #ec250d;\n}\n\n.has-success .form-control:focus + .input-group-append .input-group-text, .has-success .form-control:focus +\n.input-group-prepend .input-group-text {\n  color: #00f2c3;\n}\n\n.input-group-append .input-group-text + .form-control,\n.input-group-append .input-group-text ~ .form-control,\n.input-group-prepend .input-group-text + .form-control,\n.input-group-prepend .input-group-text ~ .form-control {\n  padding: -0.5rem 0.7rem;\n  padding-left: 18px;\n}\n\n.input-group-append .input-group-text i,\n.input-group-prepend .input-group-text i {\n  width: 17px;\n}\n\n.input-group-append,\n.input-group-prepend .input-group-text,\n.input-group-prepend .input-group-text {\n  background-color: transparent;\n  border: 1px solid #2b3553;\n  border-radius: 0.4285rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.input-group-append .input-group-text {\n  border-left: none;\n}\n\n.input-group-prepend .input-group-text {\n  border-right: none;\n}\n\n.input-group-focus .input-group-prepend .input-group-text,\n.input-group-focus .input-group-append .input-group-text {\n  background-color: #ffffff;\n  border-color: #e14eca;\n  background-color: transparent;\n  border-color: #e14eca;\n}\n\n.input-group-focus.no-border .input-group-prepend .input-group-text,\n.input-group-focus.no-border .input-group-append .input-group-text {\n  background-color: #252e49;\n}\n\n.input-group,\n.form-group {\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.input-group .form-control-static,\n.form-group .form-control-static {\n  margin-top: 9px;\n}\n\n.input-group[disabled] .input-group-prepend .input-group-text,\n.input-group[disabled] .input-group-append .input-group-text {\n  background-color: #E3E3E3;\n}\n\n.input-group .form-control:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {\n  border-radius: 0.4285rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0 none;\n}\n\n.input-group .form-control:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none;\n}\n\n.input-group .form-control:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none;\n}\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #1d253b;\n  color: #344675;\n  cursor: not-allowed;\n}\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 11px 0.7rem;\n}\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD;\n}\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0;\n}\n\ntextarea.form-control {\n  max-width: 100%;\n  max-height: 80px;\n  padding: 10px 10px 0 0;\n  resize: none;\n  line-height: 2;\n}\n\n.has-success.form-group .form-control,\n.has-success.form-group.no-border .form-control,\n.has-danger.form-group .form-control,\n.has-danger.form-group.no-border .form-control {\n  padding-right: 40px;\n}\n\n.form.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px;\n}\n\n.input-group .input-group-btn {\n  padding: 0 12px;\n}\n\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n\n.form-text {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.form-control-lg {\n  padding: 0;\n  font-size: inherit;\n  line-height: 0;\n  border-radius: 0;\n}\n\n.form-control-lg .form-control {\n  height: calc(2.875rem + 2px);\n}\n\n.form-horizontal .col-form-label, .form-horizontal .label-on-right {\n  padding: 10px 5px 0 15px;\n  text-align: right;\n  max-width: 180px;\n}\n\n.form-horizontal .checkbox-radios {\n  margin-bottom: 15px;\n}\n\n.form-horizontal .checkbox-radios .form-check:first-child {\n  margin-top: 8px;\n}\n\n.form-horizontal .label-on-right {\n  text-align: left;\n  padding: 10px 15px 0 5px;\n}\n\n.form-horizontal .form-check-inline {\n  margin-top: 6px;\n}\n\n.form-horizontal .form-check-inline .form-check-label {\n  margin-right: 1.5rem;\n}\n\n.search-bar {\n  margin-left: 30px;\n}\n\n.search-bar .btn {\n  margin: 0;\n}\n\n.search-bar.input-group {\n  border-radius: 25px;\n  z-index: 4;\n  margin-bottom: 0;\n  height: 43px;\n  padding-right: 5px;\n}\n\n.search-bar.input-group .input-group-addon {\n  padding: 10px;\n  background: transparent;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.search-bar.input-group i {\n  font-size: 20px;\n  color: #ffffff;\n  margin-top: 0 !important;\n}\n\n.search-bar.input-group input {\n  background: transparent;\n  border: none !important;\n  border-radius: 0;\n  padding: 12px !important;\n  font-size: 12px;\n  opacity: 0.5;\n}\n\n.search-bar.input-group input:focus {\n  background: transparent;\n}\n\n.search-bar.input-group .form-control {\n  opacity: 1;\n  color: #ffffff;\n}\n\n.search-bar.input-group .form-control::placeholder {\n  color: white;\n}\n\n.modal-search .modal-dialog {\n  max-width: 1000px;\n  margin: 20px auto;\n}\n\n.modal-search .modal-dialog .form-control {\n  border: none;\n  color: #222a42;\n}\n\n.modal-search .modal-dialog .form-control::placeholder {\n  color: #222a42;\n}\n\n.input-group-prepend {\n  margin-right: 0;\n}\n\n.input-group-prepend .tim-icons,\n.input-group-append .tim-icons {\n  font-size: 1rem;\n}\n\n/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n.react-notification-alert-container {\n  z-index: 1051;\n  position: fixed;\n}\n\n.card {\n  background: #27293d;\n  border: 0;\n  position: relative;\n  width: 100%;\n  box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n\n.card label {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.card .card-title {\n  margin-bottom: .75rem;\n}\n\n.card .card-body {\n  padding: 15px;\n}\n\n.card .card-body.table-full-width {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.card .card-body .card-title {\n  color: #ffffff;\n  text-transform: inherit;\n  font-weight: 300;\n  margin-bottom: .75rem;\n}\n\n.card .card-body .card-description, .card .card-body .card-category {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.card .card-header {\n  padding: 15px 15px 0;\n  border: 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.card .card-header:not([data-background-color]) {\n  background-color: transparent;\n}\n\n.card .card-header .card-title {\n  color: #ffffff;\n  font-weight: 100;\n}\n\n.card .card-header .card-category {\n  color: #9A9A9A;\n  margin-bottom: 5px;\n  font-weight: 300;\n}\n\n.card .map {\n  border-radius: 0.2857rem;\n}\n\n.card .map.map-big {\n  height: 420px;\n}\n\n.card.card-white {\n  background: #ffffff;\n}\n\n.card.card-white .card-title {\n  color: #222a42;\n}\n\n.card.card-white .card-category, .card.card-white .stats {\n  color: #808080;\n}\n\n.card.card-white .form-control::-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card.card-white .form-control:-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card.card-white .form-control::-webkit-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card.card-white .form-control:-ms-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card.card-white .has-danger .form-control, .card.card-white .has-danger .input-group-prepend .input-group-text {\n  border-color: #ec250d;\n}\n\n.card.card-white .input-group-prepend .input-group-text {\n  border-color: rgba(29, 37, 59, 0.2);\n  color: #1d253b;\n}\n\n.card.card-white .form-control {\n  color: #222a42;\n  border-color: rgba(29, 37, 59, 0.2);\n}\n\n.card.card-white .form-control:focus {\n  border-color: #e14eca;\n}\n\n.card.card-white label:not(.btn) {\n  color: #344675;\n}\n\n.card.card-white .form-group.no-border .form-control,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text,\n.card.card-white .form-group.no-border .input-group-append .input-group-text,\n.card.card-white .input-group.no-border .form-control,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text,\n.card.card-white .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.3);\n}\n\n.card.card-white .form-group.no-border .form-control:focus, .card.card-white .form-group.no-border .form-control:active, .card.card-white .form-group.no-border .form-control:active,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text:focus,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text:active,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text:active,\n.card.card-white .form-group.no-border .input-group-append .input-group-text:focus,\n.card.card-white .form-group.no-border .input-group-append .input-group-text:active,\n.card.card-white .form-group.no-border .input-group-append .input-group-text:active,\n.card.card-white .input-group.no-border .form-control:focus,\n.card.card-white .input-group.no-border .form-control:active,\n.card.card-white .input-group.no-border .form-control:active,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text:focus,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text:active,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text:active,\n.card.card-white .input-group.no-border .input-group-append .input-group-text:focus,\n.card.card-white .input-group.no-border .input-group-append .input-group-text:active,\n.card.card-white .input-group.no-border .input-group-append .input-group-text:active {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n\n.card.card-white .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.card.card-white .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.card.card-white .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.card.card-white .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: transparent;\n}\n\n.card.card-white .input-group[disabled] .input-group-prepend .input-group-text,\n.card.card-white .input-group[disabled] .input-group-append .input-group-text {\n  background-color: #222a42;\n}\n\n.card.card-white .form-control[disabled], .card.card-white .form-control[readonly], .card.card-white fieldset[disabled] .form-control {\n  background: #E3E3E3;\n  border-color: rgba(29, 37, 59, 0.3);\n}\n\n.card.card-white .input-group-focus .input-group-prepend .input-group-text,\n.card.card-white .input-group-focus .input-group-append .input-group-text,\n.card.card-white .input-group-focus .form-control {\n  background-color: #ffffff;\n  border-color: #e14eca;\n}\n\n.card.card-white .input-group-focus.no-border .input-group-prepend .input-group-text,\n.card.card-white .input-group-focus.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n\n.card.card-white .input-group-prepend .input-group-text {\n  border-right: none;\n}\n\n.card.card-white .input-group-append .input-group-text {\n  border-left: none;\n}\n\n.card.card-white .has-danger .form-control:focus, .card.card-white .has-success.input-group-focus .input-group-append .input-group-text, .card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {\n  border-color: #ec250d;\n}\n\n.card.card-white .has-success .form-control:focus, .card.card-white .has-success.input-group-focus .input-group-append .input-group-text, .card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {\n  border-color: #00bf9a;\n}\n\n.card.card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n\n.card .image {\n  overflow: hidden;\n  height: 200px;\n  position: relative;\n}\n\n.card .avatar {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-bottom: 15px;\n}\n\n.card label {\n  font-size: 0.75rem;\n  margin-bottom: 5px;\n}\n\n.card .card-footer {\n  background-color: transparent;\n  border: 0;\n  padding: 15px;\n}\n\n.card .card-footer .stats i {\n  margin-right: 5px;\n  position: relative;\n}\n\n.card .card-footer h6 {\n  margin-bottom: 0;\n  padding: 7px 0;\n}\n\n.card-body {\n  padding: 1.25rem;\n}\n\n@media (max-width: 767.98px) {\n  .card.card-chart .card-header .btn-group-toggle .tim-icons {\n    font-size: .875rem;\n    top: -1px;\n  }\n}\n\n.card-chart {\n  overflow: hidden;\n}\n\n.card-chart .card-header .card-title i {\n  font-size: 16px;\n  margin-right: 5px;\n  margin-bottom: 3px;\n}\n\n.card-chart .card-header .card-category {\n  margin-bottom: 5px;\n}\n\n.card-chart .card-body {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.card-chart .card-body .tab-space {\n  padding: 0;\n}\n\n.card-chart .table {\n  margin-bottom: 0;\n}\n\n.card-chart .table td {\n  border-top: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.card-chart .card-progress {\n  margin-top: 30px;\n  padding: 0 10px;\n}\n\n.card-chart .chart-area {\n  height: 220px;\n  width: 100%;\n}\n\n.card-chart .card-footer {\n  margin-top: 15px;\n}\n\n.card-chart .card-footer .stats {\n  color: #9A9A9A;\n}\n\n.card-chart .dropdown {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n.card-chart .dropdown .btn {\n  margin: 0;\n}\n\n.card-chart.card-chart-pie .chart-area {\n  padding: 10px 0 25px;\n  height: auto;\n}\n\n.card-chart.card-chart-pie .card-title {\n  margin-bottom: 10px;\n}\n\n.card-chart.card-chart-pie .card-title i {\n  font-size: 1rem;\n}\n\n.map {\n  height: 500px;\n}\n\n.card-user {\n  overflow: hidden;\n}\n\n.card-user .image {\n  height: 120px;\n}\n\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: 25px;\n}\n\n.card-user .author a + p.description {\n  margin-top: -7px;\n}\n\n.card-user .author .block {\n  position: absolute;\n  height: 100px;\n  width: 250px;\n}\n\n.card-user .author .block.block-one {\n  background: rgba(225, 78, 202, 0.6);\n  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  -webkit-transform: rotate(150deg);\n  -moz-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  -o-transform: rotate(150deg);\n  transform: rotate(150deg);\n  margin-top: -90px;\n  margin-left: -50px;\n}\n\n.card-user .author .block.block-two {\n  background: rgba(225, 78, 202, 0.6);\n  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  -webkit-transform: rotate(30deg);\n  -moz-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  -o-transform: rotate(30deg);\n  transform: rotate(30deg);\n  margin-top: -40px;\n  margin-left: -100px;\n}\n\n.card-user .author .block.block-three {\n  background: rgba(225, 78, 202, 0.6);\n  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  -webkit-transform: rotate(170deg);\n  -moz-transform: rotate(170deg);\n  -ms-transform: rotate(170deg);\n  -o-transform: rotate(170deg);\n  transform: rotate(170deg);\n  margin-top: -70px;\n  right: -45px;\n}\n\n.card-user .author .block.block-four {\n  background: rgba(225, 78, 202, 0.6);\n  background: -webkit-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -o-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: -moz-linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  -webkit-transform: rotate(150deg);\n  -moz-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  -o-transform: rotate(150deg);\n  transform: rotate(150deg);\n  margin-top: -25px;\n  right: -45px;\n}\n\n.card-user .avatar {\n  width: 124px;\n  height: 124px;\n  border: 5px solid #2b3553;\n  border-bottom-color: transparent;\n  background-color: transparent;\n  position: relative;\n}\n\n.card-user .card-body {\n  min-height: 240px;\n}\n\n.card-user hr {\n  margin: 5px 15px;\n}\n\n.card-user .button-container {\n  margin-bottom: 6px;\n  text-align: center;\n}\n\n.card-user .card-description {\n  margin-top: 30px;\n}\n\n.card-tasks {\n  height: 473px;\n}\n\n.card-tasks .table-full-width {\n  max-height: 410px;\n  position: relative;\n}\n\n.card-tasks .card-header .title {\n  margin-right: 20px;\n  font-weight: 400;\n}\n\n.card-tasks .card-header .dropdown {\n  float: right;\n  color: #cccccc;\n}\n\n.card-tasks .card-body i {\n  color: #9A9A9A;\n  font-size: 1.4em;\n}\n\n.card-tasks .card-body i:hover {\n  color: #ffffff;\n}\n\n.card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n\n.card-plain .card-header,\n.card-plain .card-footer {\n  margin-left: 0;\n  margin-right: 0;\n  background-color: transparent;\n}\n\n.card-plain:not(.card-subcategories).card-body {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.card-category {\n  text-transform: inherit;\n}\n\n.dropdown-menu {\n  border: 0;\n  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 0.1428rem;\n  -webkit-transition: all 150ms linear;\n  -moz-transition: all 150ms linear;\n  -o-transition: all 150ms linear;\n  -ms-transition: all 150ms linear;\n  transition: all 150ms linear;\n}\n\n.dropdown-menu.dropdown-menu-right:before, .dropdown-menu.dropdown-menu-right:after {\n  left: auto;\n  right: 10px;\n}\n\n.dropdown-menu.dropdown-black {\n  background: linear-gradient(to bottom, #222a42 0%, #1d253b 100%);\n  border: 1px solid #344675;\n}\n\n.dropdown-menu.dropdown-black .dropdown-item {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.dropdown-menu.dropdown-black .dropdown-divider {\n  border-color: #344675;\n}\n\n.dropdown-menu.dropdown-black:before {\n  color: #222a42;\n  z-index: 2;\n}\n\n.dropdown-menu.dropdown-black:after {\n  display: inline-block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  z-index: 1;\n  vertical-align: middle;\n  content: \"\";\n  top: -6px;\n  left: 10px;\n  right: auto;\n  color: #344675;\n  border-bottom: .4em solid;\n  border-right: .4em solid transparent;\n  border-left: .4em solid transparent;\n}\n\n.dropdown-menu.dropdown-black.dropdown-menu-right:after {\n  left: auto;\n  right: 10px;\n}\n\n.dropup .dropdown-menu.dropdown-black:after {\n  color: #1d253b;\n  z-index: 2;\n}\n\n.dropup .dropdown-menu.dropdown-black:before {\n  display: inline-block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  top: auto;\n  bottom: -6px;\n  right: auto;\n  left: 10px;\n  color: #555555;\n  border-top: .4em solid;\n  border-right: .4em solid transparent;\n  border-left: .4em solid transparent;\n  border-bottom: none;\n  z-index: 1;\n}\n\n.dropdown-menu i {\n  margin-right: 5px;\n  position: relative;\n  top: 1px;\n}\n\n.dropdown-menu .tim-icons {\n  margin-right: 10px;\n  position: relative;\n  top: 4px;\n  font-size: 18px;\n  margin-top: -5px;\n  opacity: .5;\n}\n\n.dropdown-menu .dropdown-item.active, .dropdown-menu .dropdown-item:active {\n  color: inherit;\n}\n\n.dropup .dropdown-menu:before {\n  display: none;\n}\n\n.dropup .dropdown-menu:after {\n  display: inline-block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  top: auto;\n  bottom: -5px;\n  right: auto;\n  left: 10px;\n  color: #ffffff;\n  border-top: .4em solid;\n  border-right: .4em solid transparent;\n  border-left: .4em solid transparent;\n  border-bottom: none;\n}\n\n.dropup .dropdown-menu.dropdown-menu-right:after, .dropup .dropdown-menu.dropdown-menu-right:before {\n  right: 10px;\n  left: auto;\n}\n\n.dropdown-menu:before {\n  display: inline-block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  top: -5px;\n  left: 10px;\n  right: auto;\n  color: #ffffff;\n  border-bottom: .4em solid;\n  border-right: .4em solid transparent;\n  border-left: .4em solid transparent;\n}\n\n.dropdown-menu.dropdown-menu-right {\n  right: 0 !important;\n  left: auto !important;\n}\n\n.dropdown-menu .dropdown-item,\n.bootstrap-select .dropdown-menu.inner li a {\n  font-size: 0.75rem;\n  padding-top: .6rem;\n  padding-bottom: .6rem;\n  margin-top: 5px;\n  -webkit-transition: all 150ms linear;\n  -moz-transition: all 150ms linear;\n  -o-transition: all 150ms linear;\n  -ms-transition: all 150ms linear;\n  transition: all 150ms linear;\n}\n\n.dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus,\n.bootstrap-select .dropdown-menu.inner li a:hover,\n.bootstrap-select .dropdown-menu.inner li a:focus {\n  background-color: rgba(222, 222, 222, 0.3);\n}\n\n.dropdown-menu .dropdown-item.disabled, .dropdown-menu .dropdown-item:disabled,\n.bootstrap-select .dropdown-menu.inner li a.disabled,\n.bootstrap-select .dropdown-menu.inner li a:disabled {\n  color: rgba(182, 182, 182, 0.6);\n}\n\n.dropdown-menu .dropdown-item.disabled:hover, .dropdown-menu .dropdown-item.disabled:focus, .dropdown-menu .dropdown-item:disabled:hover, .dropdown-menu .dropdown-item:disabled:focus,\n.bootstrap-select .dropdown-menu.inner li a.disabled:hover,\n.bootstrap-select .dropdown-menu.inner li a.disabled:focus,\n.bootstrap-select .dropdown-menu.inner li a:disabled:hover,\n.bootstrap-select .dropdown-menu.inner li a:disabled:focus {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.dropdown-menu .dropdown-divider {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n\n.dropdown-menu .dropdown-header:not([href]) {\n  color: rgba(182, 182, 182, 0.6);\n  font-size: 0.62475rem;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\n.dropdown-menu.dropdown-primary {\n  background-color: #df41c6;\n}\n\n.dropdown-menu.dropdown-primary:before {\n  color: #df41c6;\n}\n\n.dropdown-menu.dropdown-primary .dropdown-header:not([href]):not([tabindex]) {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.dropdown-menu.dropdown-primary .dropdown-item {\n  color: #ffffff;\n}\n\n.dropdown-menu.dropdown-primary .dropdown-item:hover, .dropdown-menu.dropdown-primary .dropdown-item:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-primary .dropdown-divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-info {\n  background-color: #0e84f8;\n}\n\n.dropdown-menu.dropdown-info:before {\n  color: #0e84f8;\n}\n\n.dropdown-menu.dropdown-info .dropdown-header:not([href]):not([tabindex]) {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.dropdown-menu.dropdown-info .dropdown-item {\n  color: #ffffff;\n}\n\n.dropdown-menu.dropdown-info .dropdown-item:hover, .dropdown-menu.dropdown-info .dropdown-item:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-info .dropdown-divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-danger {\n  background-color: #fd4e89;\n}\n\n.dropdown-menu.dropdown-danger:before {\n  color: #fd4e89;\n}\n\n.dropdown-menu.dropdown-danger .dropdown-header:not([href]):not([tabindex]) {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.dropdown-menu.dropdown-danger .dropdown-item {\n  color: #ffffff;\n}\n\n.dropdown-menu.dropdown-danger .dropdown-item:hover, .dropdown-menu.dropdown-danger .dropdown-item:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-danger .dropdown-divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-success {\n  background-color: #00e3b7;\n}\n\n.dropdown-menu.dropdown-success:before {\n  color: #00e3b7;\n}\n\n.dropdown-menu.dropdown-success .dropdown-header:not([href]):not([tabindex]) {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.dropdown-menu.dropdown-success .dropdown-item {\n  color: #ffffff;\n}\n\n.dropdown-menu.dropdown-success .dropdown-item:hover, .dropdown-menu.dropdown-success .dropdown-item:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-success .dropdown-divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-warning {\n  background-color: #ff8163;\n}\n\n.dropdown-menu.dropdown-warning:before {\n  color: #ff8163;\n}\n\n.dropdown-menu.dropdown-warning .dropdown-header:not([href]):not([tabindex]) {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.dropdown-menu.dropdown-warning .dropdown-item {\n  color: #ffffff;\n}\n\n.dropdown-menu.dropdown-warning .dropdown-item:hover, .dropdown-menu.dropdown-warning .dropdown-item:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown-menu.dropdown-warning .dropdown-divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.dropdown .dropdown-menu,\n.dropup:not(.bootstrap-select) .dropdown-menu,\n.bootstrap-select .dropdown-menu:not(.inner), .dropdown-menu.bootstrap-datetimepicker-widget.bottom {\n  -webkit-transform: translate3d(0, -20px, 0) !important;\n  -moz-transform: translate3d(0, -20px, 0) !important;\n  -o-transform: translate3d(0, -20px, 0) !important;\n  -ms-transform: translate3d(0, -20px, 0) !important;\n  transform: translate3d(0, -20px, 0) !important;\n  visibility: hidden;\n  display: block;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  top: 100% !important;\n}\n\n.dropdown-menu.bootstrap-datetimepicker-widget.top {\n  -webkit-transform: translate3d(0, -20px, 0) !important;\n  -moz-transform: translate3d(0, -20px, 0) !important;\n  -o-transform: translate3d(0, -20px, 0) !important;\n  -ms-transform: translate3d(0, -20px, 0) !important;\n  transform: translate3d(0, -20px, 0) !important;\n  visibility: hidden;\n  display: block;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.dropdown-menu.bootstrap-datetimepicker-widget.top, .dropdown-menu.bootstrap-datetimepicker-widget.bottom {\n  -webkit-transform: translate3d(0, -20px, 0) !important;\n  -moz-transform: translate3d(0, -20px, 0) !important;\n  -o-transform: translate3d(0, -20px, 0) !important;\n  -ms-transform: translate3d(0, -20px, 0) !important;\n  transform: translate3d(0, -20px, 0) !important;\n}\n\n.bootstrap-select.dropup .dropdown-menu:not(.inner) {\n  -webkit-transform: translate3d(0, 25px, 0) !important;\n  -moz-transform: translate3d(0, 25px, 0) !important;\n  -o-transform: translate3d(0, 25px, 0) !important;\n  -ms-transform: translate3d(0, 25px, 0) !important;\n  transform: translate3d(0, 25px, 0) !important;\n}\n\n.dropup:not(.bootstrap-select) .dropdown-menu {\n  -webkit-transform: translate3d(0, 20px, 0) !important;\n  -moz-transform: translate3d(0, 20px, 0) !important;\n  -o-transform: translate3d(0, 20px, 0) !important;\n  -ms-transform: translate3d(0, 20px, 0) !important;\n  transform: translate3d(0, 20px, 0) !important;\n  top: auto !important;\n  bottom: 100%;\n}\n\n.dropdown.show .dropdown-menu,\n.bootstrap-select.show .dropdown-menu:not(.inner), .dropdown-menu.bootstrap-datetimepicker-widget.top.open, .dropdown-menu.bootstrap-datetimepicker-widget.bottom.open,\n.dropup.show:not(.bootstrap-select) .dropdown-menu,\n.navbar .dropdown.show .dropdown-menu {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  visibility: visible;\n  -webkit-transform: translate3d(0, 1px, 0) !important;\n  -moz-transform: translate3d(0, 1px, 0) !important;\n  -o-transform: translate3d(0, 1px, 0) !important;\n  -ms-transform: translate3d(0, 1px, 0) !important;\n  transform: translate3d(0, 1px, 0) !important;\n}\n\n.dropdown-menu.bootstrap-datetimepicker-widget.top.open, .dropdown-menu.bootstrap-datetimepicker-widget.bottom.open {\n  -webkit-transform: translate3d(0, 0px, 0) !important;\n  -moz-transform: translate3d(0, 0px, 0) !important;\n  -o-transform: translate3d(0, 0px, 0) !important;\n  -ms-transform: translate3d(0, 0px, 0) !important;\n  transform: translate3d(0, 0px, 0) !important;\n}\n\n.dropup.show:not(.bootstrap-select) .dropdown-menu {\n  -webkit-transform: translate3d(0, -2px, 0) !important;\n  -moz-transform: translate3d(0, -2px, 0) !important;\n  -o-transform: translate3d(0, -2px, 0) !important;\n  -ms-transform: translate3d(0, -2px, 0) !important;\n  transform: translate3d(0, -2px, 0) !important;\n}\n\n.dropdown-menu.dropdown-navbar {\n  left: -80px;\n}\n\n.dropdown-menu.dropdown-navbar:before, .dropdown-menu.dropdown-navbar:after {\n  left: auto;\n  right: 17px;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn.dropdown-toggle[data-toggle=\"dropdown\"] {\n  padding: 10px;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\n.btn.dropdown-toggle[data-toggle=\"dropdown\"]:after {\n  content: \"\";\n  margin-left: 5px;\n}\n\n.btn span.bs-caret {\n  display: none;\n}\n\n.btn.btn-link.dropdown-toggle {\n  height: 22px;\n  padding: 0;\n  margin-right: 5px;\n}\n\n.dropdown-toggle:after {\n  content: unset;\n}\n\n.btn:not(:disabled):not(.disabled).active:focus,\n.btn:not(:disabled):not(.disabled):active:focus,\n.show > .btn.dropdown-toggle:focus {\n  box-shadow: none;\n}\n\n.dropdown-menu-sm {\n  min-width: 100px;\n  border: 0.4285rem;\n}\n\n.dropdown-menu-lg {\n  min-width: 260px;\n  border-radius: 0.4285rem;\n}\n\n.dropdown-menu-xl {\n  min-width: 450px;\n  border-radius: 0.4285rem;\n}\n\n@media screen and (max-width: 991px) {\n  .navbar-toggler {\n    background: transparent !important;\n  }\n  .dropdown-toggle:after {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: .255em;\n    vertical-align: .255em;\n    content: \"\";\n    border-top: .3em solid;\n    border-right: .3em solid transparent;\n    border-bottom: 0;\n    border-left: .3em solid transparent;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .dropdown-menu .dropdown-item {\n    color: #9A9A9A;\n  }\n}\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.wrapper.wrapper-full-page {\n  min-height: 100vh;\n  height: auto;\n}\n\n.sidebar-wrapper ul li div.collapse ul li div.collapse ul li a,\n.sidebar-wrapper ul li div.collapse ul li div.collapsing ul li a,\n.sidebar-wrapper ul li div.collapsing ul li div.collapse ul li a {\n  margin-left: 25px;\n}\n\n.sidebar,\n.off-canvas-sidebar {\n  background: #ba54f5;\n  background: -webkit-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);\n  background: -o-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);\n  background: -moz-linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);\n  background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);\n  height: calc(100vh - 90px);\n  width: 230px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-size: cover;\n  background-position: center center;\n  display: block;\n  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.6);\n  margin-top: 80px;\n  margin-left: 20px;\n  border-radius: 5px;\n  transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.sidebar .sidebar-wrapper,\n.off-canvas-sidebar .sidebar-wrapper {\n  width: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - 705px);\n  z-index: 4;\n  position: relative;\n  overflow: auto;\n}\n\n.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,\n.off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop {\n  display: none !important;\n}\n\n.sidebar .sidebar-wrapper .navbar-form,\n.off-canvas-sidebar .sidebar-wrapper .navbar-form {\n  border: none;\n}\n\n.sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a span,\n.sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a span,\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a span,\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a span {\n  display: inline-block;\n}\n\n.sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n  line-height: 23px;\n  z-index: 1;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon {\n  text-transform: uppercase;\n  width: 34px;\n  margin-right: 10px;\n  margin-left: 0px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 25px;\n  position: relative;\n  float: left;\n  z-index: 1;\n  display: inherit;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a i,\n.sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a i,\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a i,\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a i {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n\n.sidebar .sidebar-wrapper [data-toggle=\"collapse\"] ~ div > ul > li:hover > a .sidebar-mini-icon, .sidebar .sidebar-wrapper [data-toggle=\"collapse\"] ~ div > ul > li:hover > a .sidebar-normal,\n.off-canvas-sidebar .sidebar-wrapper [data-toggle=\"collapse\"] ~ div > ul > li:hover > a .sidebar-mini-icon,\n.off-canvas-sidebar .sidebar-wrapper [data-toggle=\"collapse\"] ~ div > ul > li:hover > a .sidebar-normal {\n  color: #ffffff;\n}\n\n.sidebar .sidebar-wrapper .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon,\n.off-canvas-sidebar .sidebar-wrapper .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon {\n  opacity: 0;\n}\n\n.sidebar .navbar-minimize,\n.off-canvas-sidebar .navbar-minimize {\n  position: absolute;\n  right: 20px;\n  top: 2px;\n  opacity: 1;\n}\n\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n\n.sidebar .nav,\n.off-canvas-sidebar .nav {\n  margin-top: 20px;\n  display: block;\n}\n\n.sidebar .nav .caret,\n.off-canvas-sidebar .nav .caret {\n  top: 14px;\n  position: absolute;\n  right: 10px;\n}\n\n.sidebar .nav li > a + div .nav,\n.off-canvas-sidebar .nav li > a + div .nav {\n  margin-top: 5px;\n}\n\n.sidebar .nav li > a + div .nav li > a,\n.off-canvas-sidebar .nav li > a + div .nav li > a {\n  margin-top: 0px;\n  padding: 8px 8px;\n}\n\n.sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  margin: 10px 15px 0;\n  border-radius: 30px;\n  color: #ffffff;\n  display: block;\n  text-decoration: none;\n  position: relative;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-size: 0.62475rem;\n  padding: 10px 8px;\n  line-height: 1.625rem;\n}\n\n.sidebar .nav li:first-child > a,\n.off-canvas-sidebar .nav li:first-child > a {\n  margin: 0 15px;\n}\n\n.sidebar .nav li:hover:not(.active) > a p, .sidebar .nav li:hover:not(.active) > a i,\n.sidebar .nav li:focus:not(.active) > a p,\n.sidebar .nav li:focus:not(.active) > a i,\n.off-canvas-sidebar .nav li:hover:not(.active) > a p,\n.off-canvas-sidebar .nav li:hover:not(.active) > a i,\n.off-canvas-sidebar .nav li:focus:not(.active) > a p,\n.off-canvas-sidebar .nav li:focus:not(.active) > a i {\n  color: #ffffff;\n}\n\n.sidebar .nav li:hover:not(.active) > a i,\n.sidebar .nav li:focus:not(.active) > a i,\n.off-canvas-sidebar .nav li:hover:not(.active) > a i,\n.off-canvas-sidebar .nav li:focus:not(.active) > a i {\n  color: #ffffff;\n}\n\n.sidebar .nav li.active > a:not([data-toggle=\"collapse\"]),\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=\"collapse\"]) {\n  background: transparent;\n}\n\n.sidebar .nav li.active > a:not([data-toggle=\"collapse\"]) i, .sidebar .nav li.active > a:not([data-toggle=\"collapse\"]) p,\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=\"collapse\"]) i,\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=\"collapse\"]) p {\n  color: white;\n}\n\n.sidebar .nav li.active > a:not([data-toggle=\"collapse\"]):before,\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=\"collapse\"]):before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 22px;\n  left: -4px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"],\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] {\n  background: transparent;\n  box-shadow: none;\n  color: #ffffff;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"] i,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] i {\n  color: #ffffff;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a {\n  box-shadow: none;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a .sidebar-mini-icon, .sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a .sidebar-normal,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a .sidebar-mini-icon,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a .sidebar-normal {\n  color: #ffffff;\n  font-weight: 400;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a:before,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"] + div .nav .active a:before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 17px;\n  left: -4px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n\n.sidebar .nav li.active > a[data-toggle=\"collapse\"]:before,\n.off-canvas-sidebar .nav li.active > a[data-toggle=\"collapse\"]:before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 22px;\n  left: -4px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 50%;\n}\n\n.sidebar .nav p,\n.off-canvas-sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  position: relative;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n}\n\n.sidebar .nav i,\n.off-canvas-sidebar .nav i {\n  font-size: 20px;\n  float: left;\n  margin-right: 12px;\n  line-height: 30px;\n  width: 34px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  position: relative;\n}\n\n.sidebar .logo,\n.off-canvas-sidebar .logo {\n  position: relative;\n  padding: 0.5rem 0.7rem;\n  z-index: 4;\n}\n\n.sidebar .logo a.logo-mini,\n.off-canvas-sidebar .logo a.logo-mini {\n  opacity: 1;\n  float: left;\n  width: 34px;\n  text-align: center;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.sidebar .logo a.logo-mini img,\n.off-canvas-sidebar .logo a.logo-mini img {\n  border-radius: 50%;\n  width: 30px;\n}\n\n.sidebar .logo a.logo-normal,\n.off-canvas-sidebar .logo a.logo-normal {\n  display: block;\n  opacity: 1;\n  -webkit-transform: translate3d(0px, 0, 0);\n  -moz-transform: translate3d(0px, 0, 0);\n  -o-transform: translate3d(0px, 0, 0);\n  -ms-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n}\n\n.sidebar .logo:after,\n.off-canvas-sidebar .logo:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar .logo p,\n.off-canvas-sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #ffffff;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.sidebar .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 0.5rem 0;\n  display: block;\n  white-space: nowrap;\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n}\n\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n\n.sidebar.info,\n.off-canvas-sidebar.info {\n  background: #3358f4;\n  background: -webkit-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);\n  background: -o-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);\n  background: -moz-linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);\n  background: linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);\n}\n\n.sidebar.success,\n.off-canvas-sidebar.success {\n  background: #0098f0;\n  background: -webkit-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);\n  background: -o-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);\n  background: -moz-linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);\n  background: linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);\n}\n\n.sidebar .user,\n.off-canvas-sidebar .user {\n  padding-bottom: 20px;\n  margin: 20px auto 0;\n  position: relative;\n}\n\n.sidebar .user:after,\n.off-canvas-sidebar .user:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar .user .photo,\n.off-canvas-sidebar .user .photo {\n  width: 34px;\n  height: 34px;\n  overflow: hidden;\n  float: left;\n  z-index: 5;\n  margin-right: 10px;\n  border-radius: 50%;\n  margin-left: 23px;\n  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);\n}\n\n.sidebar .user .photo img,\n.off-canvas-sidebar .user .photo img {\n  width: 100%;\n}\n\n.sidebar .user a,\n.off-canvas-sidebar .user a {\n  color: #ffffff;\n  text-decoration: none;\n  padding: 0.5rem 15px;\n  white-space: nowrap;\n}\n\n.sidebar .user .info > a,\n.off-canvas-sidebar .user .info > a {\n  display: block;\n  line-height: 18px;\n}\n\n.sidebar .user .info > a > span,\n.off-canvas-sidebar .user .info > a > span {\n  display: block;\n  position: relative;\n  opacity: 1;\n}\n\n.sidebar .user .info .caret,\n.off-canvas-sidebar .user .info .caret {\n  position: absolute;\n  top: 8px;\n  right: 18px;\n}\n\n.visible-on-sidebar-regular {\n  display: inline-block !important;\n}\n\n.visible-on-sidebar-mini {\n  display: none !important;\n}\n\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #ffffff;\n}\n\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel {\n  position: relative;\n  float: right;\n  width: 100%;\n  min-height: 100vh;\n  border-top: 2px solid #e14eca;\n  background: linear-gradient(#1e1e2f, #1e1e24);\n  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.main-panel.info {\n  border-top: 2px solid #1d8cf8;\n}\n\n.main-panel.success {\n  border-top: 2px solid #00f2c3;\n}\n\n.main-panel.primary {\n  border-top: 2px solid #e14eca;\n}\n\n.main-panel > .content {\n  padding: 78px 30px 0 280px;\n  min-height: calc(100vh - 70px);\n}\n\n.main-panel > .navbar {\n  margin-bottom: 0;\n}\n\n.main-panel .header {\n  margin-bottom: 50px;\n}\n\n.perfect-scrollbar-on .main-panel {\n  height: 100%;\n  max-height: 100%;\n}\n\n.sidebar,\n.main-panel,\n.sidebar-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n@media (min-width: 991px) {\n  .sidebar,\n  .main-panel,\n  .sidebar-wrapper {\n    -webkit-transition-property: top,bottom,width;\n    transition-property: top,bottom, width;\n    -webkit-transition-duration: .2s,.2s, .35s;\n    transition-duration: .2s,.2s, .35s;\n    -webkit-transition-timing-function: linear,linear,ease;\n    transition-timing-function: linear,linear,ease;\n  }\n  .sidebar-mini .visible-on-sidebar-regular {\n    display: none !important;\n  }\n  .sidebar-mini .visible-on-sidebar-mini {\n    display: inline-block !important;\n  }\n  .sidebar-mini .sidebar {\n    width: 80px;\n  }\n  .sidebar-mini .sidebar .sidebar-wrapper {\n    width: 100% !important;\n  }\n  .sidebar-mini .sidebar {\n    display: block;\n    z-index: 1030;\n    box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.2), 0px 2px 30px 0 rgba(0, 0, 0, 0.35);\n  }\n  .sidebar-mini .sidebar .logo a.logo-normal {\n    opacity: 0;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    -moz-transform: translate3d(-25px, 0, 0);\n    -o-transform: translate3d(-25px, 0, 0);\n    -ms-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n  .sidebar-mini .sidebar .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n  .sidebar-mini .sidebar .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n  .sidebar-mini .sidebar .sidebar-wrapper .user .info > a > span,\n  .sidebar-mini .sidebar .sidebar-wrapper > .nav li > a p {\n    -webkit-transform: translate3d(-25px, 0, 0);\n    -moz-transform: translate3d(-25px, 0, 0);\n    -o-transform: translate3d(-25px, 0, 0);\n    -ms-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n    opacity: 0;\n  }\n  .sidebar-mini .sidebar .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon {\n    opacity: 1;\n  }\n  .sidebar-mini .sidebar:hover {\n    width: 260px;\n  }\n  .sidebar-mini .sidebar:hover .logo a.logo-normal {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  .sidebar-mini .sidebar:hover .navbar-minimize {\n    opacity: 1;\n  }\n  .sidebar-mini .sidebar:hover .sidebar-wrapper {\n    width: 260px;\n  }\n  .sidebar-mini .sidebar:hover .sidebar-wrapper > .nav li > a p,\n  .sidebar-mini .sidebar:hover .sidebar-wrapper > .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n  .sidebar-mini .sidebar:hover .sidebar-wrapper .user .info [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-normal,\n  .sidebar-mini .sidebar:hover .sidebar-wrapper .user .info > a > span {\n    -webkit-transform: translate3d(0px, 0, 0);\n    -moz-transform: translate3d(0px, 0, 0);\n    -o-transform: translate3d(0px, 0, 0);\n    -ms-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    opacity: 1;\n  }\n  .sidebar-mini .sidebar:hover .nav [data-toggle=\"collapse\"] ~ div > ul > li > a .sidebar-mini-icon {\n    opacity: 0;\n  }\n  .sidebar-mini .main-panel > .content {\n    padding-left: 130px;\n  }\n  .sidebar-mini footer {\n    padding-left: 130px;\n  }\n  .navbar-minimize button {\n    margin-left: 10px;\n  }\n  .navbar-minimize button i {\n    color: #ffffff;\n    font-size: 20px;\n  }\n}\n\n.panel-header {\n  height: 260px;\n  padding-top: 80px;\n  padding-bottom: 45px;\n  background: #141E30;\n  /* fallback for old browsers */\n  background: -webkit-gradient(linear, left top, right top, from(#0c2646), color-stop(60%, #204065), to(#2a5788));\n  background: linear-gradient(to right, #0c2646 0%, #204065 60%, #2a5788 100%);\n  position: relative;\n  overflow: hidden;\n}\n\n.panel-header .header .title {\n  color: #ffffff;\n}\n\n.panel-header .header .category {\n  max-width: 600px;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 auto;\n  font-size: 13px;\n}\n\n.panel-header .header .category a {\n  color: #ffffff;\n}\n\n.panel-header-sm {\n  height: 135px;\n}\n\n.panel-header-lg {\n  height: 380px;\n}\n\n@media screen and (max-width: 991px) {\n  .sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 260px;\n    right: auto;\n    left: 0;\n    margin: 0;\n    border-radius: 0;\n    z-index: 1032;\n    visibility: visible;\n    overflow-y: visible;\n    padding: 0;\n    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    -webkit-transform: translate3d(-260px, 0, 0);\n    -moz-transform: translate3d(-260px, 0, 0);\n    -o-transform: translate3d(-260px, 0, 0);\n    -ms-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0);\n  }\n}\n\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n  .sidebar {\n    transition: none;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .wrapper {\n    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n}\n\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n  .wrapper {\n    transition: none;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .main-panel {\n    width: 100%;\n  }\n  .main-panel .content {\n    padding-left: 30px;\n  }\n  .nav-open .main-panel {\n    right: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    -moz-transform: translate3d(260px, 0, 0);\n    -o-transform: translate3d(260px, 0, 0);\n    -ms-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n  }\n  .nav-open .sidebar {\n    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    -webkit-transform: translate3d(0px, 0, 0);\n    -moz-transform: translate3d(0px, 0, 0);\n    -o-transform: translate3d(0px, 0, 0);\n    -ms-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n}\n\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n  .nav-open .sidebar {\n    transition: none;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .nav-open .sidebar:before {\n    content: unset;\n  }\n  .nav-open body {\n    position: relative;\n    overflow-x: hidden;\n  }\n  .nav-open .menu-on-right .main-panel {\n    -webkit-transform: translate3d(-260px, 0, 0);\n    -moz-transform: translate3d(-260px, 0, 0);\n    -o-transform: translate3d(-260px, 0, 0);\n    -ms-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0);\n  }\n  .nav-open .menu-on-right .navbar-collapse,\n  .nav-open .menu-on-right .sidebar {\n    -webkit-transform: translate3d(0px, 0, 0);\n    -moz-transform: translate3d(0px, 0, 0);\n    -o-transform: translate3d(0px, 0, 0);\n    -ms-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n  .nav-open .menu-on-right #bodyClick {\n    right: 260px;\n    left: auto;\n  }\n  .nav-open .fixed-plugin {\n    display: none;\n  }\n  .menu-on-right .sidebar {\n    left: auto;\n    right: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    -moz-transform: translate3d(260px, 0, 0);\n    -o-transform: translate3d(260px, 0, 0);\n    -ms-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n  }\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 1;\n    top: 0;\n    right: 0;\n    left: 260px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    background-color: transparent;\n    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n}\n\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n  #bodyClick {\n    transition: none;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .navbar .dropdown-menu {\n    position: static !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .main-panel .content {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n.white-content {\n  background: #f5f6fa;\n}\n\n.white-content .navbar.navbar-transparent .navbar-brand {\n  color: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .navbar-toggler-bar {\n  background: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) {\n  color: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) i {\n  color: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .navbar-minimize button i {\n  color: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .search-bar.input-group i {\n  color: #1d253b;\n}\n\n.white-content .navbar.navbar-transparent .search-bar.input-group .form-control {\n  color: #344675;\n}\n\n.white-content .navbar.navbar-transparent .search-bar.input-group .form-control::placeholder {\n  color: #9A9A9A;\n}\n\n.white-content .sidebar {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);\n}\n\n.white-content .sidebar p {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.white-content .main-panel {\n  background: #f5f6fa;\n}\n\n.white-content h1, .white-content h2, .white-content h3, .white-content h4, .white-content h5, .white-content h6, .white-content p, .white-content ol li, .white-content ul li, .white-content pre {\n  color: #1d253b;\n}\n\n.white-content .font-icon-detail i {\n  color: #222a42;\n}\n\n.white-content .btn:not([data-action]):hover {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.white-content .btn-neutral.btn-link {\n  color: rgba(34, 42, 66, 0.7);\n}\n\n.white-content .form-control::-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.white-content .form-control:-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.white-content .form-control::-webkit-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.white-content .form-control:-ms-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.white-content .has-danger .form-control, .white-content .has-danger .input-group-prepend .input-group-text {\n  border-color: #ec250d;\n}\n\n.white-content .input-group-prepend .input-group-text {\n  border-color: rgba(29, 37, 59, 0.5);\n  color: #1d253b;\n}\n\n.white-content .form-control {\n  color: #222a42;\n  border-color: rgba(29, 37, 59, 0.5);\n}\n\n.white-content .form-control:focus {\n  border-color: #e14eca;\n}\n\n.white-content .form-group.no-border .form-control,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text,\n.white-content .form-group.no-border .input-group-prepend .input-group-text,\n.white-content .form-group.no-border .input-group-append .input-group-text,\n.white-content .input-group.no-border .form-control,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text,\n.white-content .input-group.no-border .input-group-prepend .input-group-text,\n.white-content .input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.3);\n}\n\n.white-content .form-group.no-border .form-control:focus, .white-content .form-group.no-border .form-control:active, .white-content .form-group.no-border .form-control:active,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n.white-content .form-group.no-border .input-group-prepend .input-group-text:focus,\n.white-content .form-group.no-border .input-group-prepend .input-group-text:active,\n.white-content .form-group.no-border .input-group-prepend .input-group-text:active,\n.white-content .form-group.no-border .input-group-append .input-group-text:focus,\n.white-content .form-group.no-border .input-group-append .input-group-text:active,\n.white-content .form-group.no-border .input-group-append .input-group-text:active,\n.white-content .input-group.no-border .form-control:focus,\n.white-content .input-group.no-border .form-control:active,\n.white-content .input-group.no-border .form-control:active,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n.white-content .input-group.no-border .input-group-prepend .input-group-text:focus,\n.white-content .input-group.no-border .input-group-prepend .input-group-text:active,\n.white-content .input-group.no-border .input-group-prepend .input-group-text:active,\n.white-content .input-group.no-border .input-group-append .input-group-text:focus,\n.white-content .input-group.no-border .input-group-append .input-group-text:active,\n.white-content .input-group.no-border .input-group-append .input-group-text:active {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n\n.white-content .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.white-content .form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.white-content .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.white-content .input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: transparent;\n}\n\n.white-content .input-group[disabled] .input-group-prepend .input-group-text,\n.white-content .input-group[disabled] .input-group-append .input-group-text {\n  background-color: #222a42;\n}\n\n.white-content .form-control[disabled], .white-content .form-control[readonly], .white-content fieldset[disabled] .form-control {\n  background: #E3E3E3;\n  border-color: rgba(29, 37, 59, 0.3);\n}\n\n.white-content .input-group-focus .input-group-prepend .input-group-text,\n.white-content .input-group-focus .input-group-append .input-group-text,\n.white-content .input-group-focus .form-control {\n  border-color: #e14eca;\n}\n\n.white-content .input-group-focus.no-border .input-group-prepend .input-group-text,\n.white-content .input-group-focus.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n\n.white-content .input-group-prepend .input-group-text {\n  border-right: none;\n}\n\n.white-content .input-group-append .input-group-text {\n  border-left: none;\n}\n\n.white-content .has-danger .form-control:focus, .white-content .has-success.input-group-focus .input-group-append .input-group-text, .white-content .has-success.input-group-focus .input-group-prepend .input-group-text {\n  border-color: #ec250d;\n}\n\n.white-content .has-success .form-control:focus, .white-content .has-success.input-group-focus .input-group-append .input-group-text, .white-content .has-success.input-group-focus .input-group-prepend .input-group-text {\n  border-color: #00bf9a;\n}\n\n.white-content .btn.btn-link:hover, .white-content .btn.btn-link:active, .white-content .btn.btn-link:focus {\n  color: #9A9A9A !important;\n}\n\n.white-content .btn-group .btn.active {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.white-content .card:not(.card-white) {\n  background: #ffffff;\n  box-shadow: 0 1px 15px 0 rgba(123, 123, 123, 0.05);\n}\n\n.white-content .card:not(.card-white) .card-header {\n  color: #222a42;\n}\n\n.white-content .card:not(.card-white) .card-header a[data-toggle=\"collapse\"] {\n  color: #222a42;\n}\n\n.white-content .card:not(.card-white) .card-header .card-title, .white-content .card:not(.card-white) .card-body .card-title {\n  color: #1d253b;\n}\n\n.white-content .card:not(.card-white) .card-body .card-category, .white-content .card:not(.card-white) .card-body .card-description {\n  color: #1d253b;\n}\n\n.white-content .card:not(.card-white) label:not(.btn) {\n  color: #344675;\n}\n\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link {\n  color: #444444;\n  background-color: rgba(222, 222, 222, 0.3);\n}\n\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link:not(.active):hover {\n  background: rgba(222, 222, 222, 0.5);\n}\n\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link.active {\n  color: #ffffff;\n}\n\n.white-content .card:not(.card-white) .tab-content .tab-pane {\n  color: #444444;\n}\n\n.white-content .card:not(.card-white) .card {\n  box-shadow: none;\n}\n\n.white-content .card:not(.card-white).card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n\n.white-content .card:not(.card-white).card-tasks .card-body i {\n  color: rgba(34, 42, 66, 0.7);\n}\n\n.white-content .card:not(.card-white).card-tasks .card-body i:hover {\n  color: #222a42;\n}\n\n.white-content .table > tbody > tr > td {\n  color: rgba(34, 42, 66, 0.7) !important;\n}\n\n.white-content .table > thead > tr > th,\n.white-content .table > tbody > tr > th,\n.white-content .table > tfoot > tr > th,\n.white-content .table > thead > tr > td,\n.white-content .table > tbody > tr > td,\n.white-content .table > tfoot > tr > td {\n  border-color: rgba(34, 42, 66, 0.2);\n  padding: 12px 7px;\n  vertical-align: middle;\n}\n\n.white-content .table > thead > tr > th, .white-content .table button.btn-neutral.btn-link {\n  color: rgba(34, 42, 66, 0.7);\n}\n\n.white-content .footer ul li a {\n  color: #1d253b;\n}\n\n.white-content .footer .copyright {\n  color: #1d253b;\n}\n\n.white-content .progress-container .progress, .white-content .progress-container.progress.sm .progress {\n  background: rgba(34, 42, 66, 0.1);\n  box-shadow: 0 0 0 3px rgba(34, 42, 66, 0.1);\n}\n\n.white-content .progress-container .progress .progress-value, .white-content .progress-container.progress.sm .progress .progress-value {\n  color: #344675;\n}\n\n.white-content .progress-container .progress-badge, .white-content .progress-container.progress.sm .progress-badge {\n  color: #1d253b;\n}\n\n.white-content .full-page {\n  background: #f5f6fa;\n}\n\n.white-content .full-page h1, .white-content .full-page h2, .white-content .full-page h3, .white-content .full-page h4, .white-content .full-page h5, .white-content .full-page h6, .white-content .full-page p, .white-content .full-page ol li, .white-content .full-page ul li, .white-content .full-page pre {\n  color: #1d253b;\n}\n\n.white-content .full-page .description {\n  color: #9A9A9A;\n}\n\n.white-content .full-page .footer ul li a {\n  color: #1d253b;\n}\n\n.white-content .full-page .footer .copyright {\n  color: #1d253b;\n}\n\n.white-content .nav-pills .nav-item .nav-link:not(.active) {\n  background: #d3d7e9;\n  color: #1d253b;\n}\n\n.white-content .nav-pills .nav-item .nav-link:not(.active):hover {\n  background: #cccccc;\n}\n\n.white-content .breadcrumb-item.active {\n  color: #212529;\n}\n\n.white-content .breadcrumb-item + .breadcrumb-item::before {\n  color: #212529;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/assets/css/nucleo-icons.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/assets/css/nucleo-icons.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n@font-face {\n  font-family: 'Nucleo';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/nucleo.eot */ "./resources/js/assets/fonts/nucleo.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../fonts/nucleo.eot */ "./resources/js/assets/fonts/nucleo.eot")) + ") format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../fonts/nucleo.woff2 */ "./resources/js/assets/fonts/nucleo.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ../fonts/nucleo.woff */ "./resources/js/assets/fonts/nucleo.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../fonts/nucleo.ttf */ "./resources/js/assets/fonts/nucleo.ttf")) + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/*------------------------\n\tbase class definition\n-------------------------*/\n\n.tim-icons {\n  display: inline-block;\n  font: normal normal normal 1em/1 'Nucleo';\n  vertical-align: middle;\n  speak: none;\n  text-transform: none;\n  /* Better Font Rendering */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.font-icon-detail {\n  text-align: center;\n  padding: 45px 0 30px;\n  border: 1px solid #e44cc4;\n  border-radius: .1875rem;\n  margin: 15px 0;\n  min-height: 168px;\n}\n\n.font-icon-detail i {\n  color: #FFFFFF;\n  font-size: 1.5em;\n}\n\n.font-icon-detail p {\n  color: #e44cc4 !important;\n  margin-top: 30px;\n  padding: 0 10px;\n  font-size: .7142em;\n}\n\n/*------------------------\n  change icon size\n-------------------------*/\n\n.tim-icons-sm {\n  font-size: 0.8em;\n}\n\n.tim-icons-lg {\n  font-size: 1.2em;\n}\n\n/* absolute units */\n\n.tim-icons-16 {\n  font-size: 16px;\n}\n\n.tim-icons-32 {\n  font-size: 32px;\n}\n\n/*----------------------------------\n  add a square/circle background\n-----------------------------------*/\n\n.tim-icons-bg-square,\n.tim-icons-bg-circle {\n  padding: 0.35em;\n}\n\n.tim-icons-bg-circle {\n  border-radius: 50%;\n}\n\n/*------------------------\n  list icons\n-------------------------*/\n\n/*------------------------\n  spinning icons\n-------------------------*/\n\n.tim-icons-is-spinning {\n  -webkit-animation: tim-icons-spin 2s infinite linear;\n  -moz-animation: tim-icons-spin 2s infinite linear;\n  animation: tim-icons-spin 2s infinite linear;\n}\n\n@-webkit-keyframes tim-icons-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@-moz-keyframes tim-icons-spin {\n  0% {\n    -moz-transform: rotate(0deg);\n  }\n  100% {\n    -moz-transform: rotate(360deg);\n  }\n}\n\n@keyframes tim-icons-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/*------------------------\n  rotated/flipped icons\n-------------------------*/\n\n/*------------------------\n\ticons\n-------------------------*/\n\n.icon-alert-circle-exc::before {\n  content: \"\\EA02\";\n}\n\n.icon-align-center::before {\n  content: \"\\EA03\";\n}\n\n.icon-align-left-2::before {\n  content: \"\\EA04\";\n}\n\n.icon-app::before {\n  content: \"\\EA05\";\n}\n\n.icon-atom::before {\n  content: \"\\EA06\";\n}\n\n.icon-attach-87::before {\n  content: \"\\EA07\";\n}\n\n.icon-badge::before {\n  content: \"\\EA08\";\n}\n\n.icon-bag-16::before {\n  content: \"\\EA09\";\n}\n\n.icon-bank::before {\n  content: \"\\EA0A\";\n}\n\n.icon-basket-simple::before {\n  content: \"\\EA0B\";\n}\n\n.icon-bell-55::before {\n  content: \"\\EA0C\";\n}\n\n.icon-bold::before {\n  content: \"\\EA0D\";\n}\n\n.icon-book-bookmark::before {\n  content: \"\\EA0E\";\n}\n\n.icon-bulb-63::before {\n  content: \"\\EA0F\";\n}\n\n.icon-bullet-list-67::before {\n  content: \"\\EA10\";\n}\n\n.icon-bus-front-12::before {\n  content: \"\\EA11\";\n}\n\n.icon-button-pause::before {\n  content: \"\\EA12\";\n}\n\n.icon-button-power::before {\n  content: \"\\EA13\";\n}\n\n.icon-calendar-60::before {\n  content: \"\\EA14\";\n}\n\n.icon-camera-18::before {\n  content: \"\\EA15\";\n}\n\n.icon-caps-small::before {\n  content: \"\\EA16\";\n}\n\n.icon-cart::before {\n  content: \"\\EA17\";\n}\n\n.icon-chart-bar-32::before {\n  content: \"\\EA18\";\n}\n\n.icon-chart-pie-36::before {\n  content: \"\\EA19\";\n}\n\n.icon-chat-33::before {\n  content: \"\\EA1A\";\n}\n\n.icon-check-2::before {\n  content: \"\\EA1B\";\n}\n\n.icon-cloud-download-93::before {\n  content: \"\\EA1C\";\n}\n\n.icon-cloud-upload-94::before {\n  content: \"\\EA1D\";\n}\n\n.icon-coins::before {\n  content: \"\\EA1E\";\n}\n\n.icon-compass-05::before {\n  content: \"\\EA1F\";\n}\n\n.icon-controller::before {\n  content: \"\\EA20\";\n}\n\n.icon-credit-card::before {\n  content: \"\\EA21\";\n}\n\n.icon-delivery-fast::before {\n  content: \"\\EA22\";\n}\n\n.icon-double-left::before {\n  content: \"\\EA23\";\n}\n\n.icon-double-right::before {\n  content: \"\\EA24\";\n}\n\n.icon-email-85::before {\n  content: \"\\EA25\";\n}\n\n.icon-gift-2::before {\n  content: \"\\EA26\";\n}\n\n.icon-globe-2::before {\n  content: \"\\EA27\";\n}\n\n.icon-headphones::before {\n  content: \"\\EA28\";\n}\n\n.icon-heart-2::before {\n  content: \"\\EA29\";\n}\n\n.icon-html5::before {\n  content: \"\\EA2A\";\n}\n\n.icon-image-02::before {\n  content: \"\\EA2B\";\n}\n\n.icon-istanbul::before {\n  content: \"\\EA2C\";\n}\n\n.icon-key-25::before {\n  content: \"\\EA2D\";\n}\n\n.icon-laptop::before {\n  content: \"\\EA2E\";\n}\n\n.icon-light-3::before {\n  content: \"\\EA2F\";\n}\n\n.icon-link-72::before {\n  content: \"\\EA30\";\n}\n\n.icon-lock-circle::before {\n  content: \"\\EA31\";\n}\n\n.icon-map-big::before {\n  content: \"\\EA32\";\n}\n\n.icon-minimal-down::before {\n  content: \"\\EA33\";\n}\n\n.icon-minimal-left::before {\n  content: \"\\EA34\";\n}\n\n.icon-minimal-right::before {\n  content: \"\\EA35\";\n}\n\n.icon-minimal-up::before {\n  content: \"\\EA36\";\n}\n\n.icon-mobile::before {\n  content: \"\\EA37\";\n}\n\n.icon-molecule-40::before {\n  content: \"\\EA38\";\n}\n\n.icon-money-coins::before {\n  content: \"\\EA39\";\n}\n\n.icon-notes::before {\n  content: \"\\EA3A\";\n}\n\n.icon-palette::before {\n  content: \"\\EA3B\";\n}\n\n.icon-paper::before {\n  content: \"\\EA3C\";\n}\n\n.icon-pencil::before {\n  content: \"\\EA3D\";\n}\n\n.icon-pin::before {\n  content: \"\\EA3E\";\n}\n\n.icon-planet::before {\n  content: \"\\EA3F\";\n}\n\n.icon-puzzle-10::before {\n  content: \"\\EA40\";\n}\n\n.icon-satisfied::before {\n  content: \"\\EA41\";\n}\n\n.icon-scissors::before {\n  content: \"\\EA42\";\n}\n\n.icon-send::before {\n  content: \"\\EA43\";\n}\n\n.icon-settings-gear-63::before {\n  content: \"\\EA44\";\n}\n\n.icon-settings::before {\n  content: \"\\EA45\";\n}\n\n.icon-simple-add::before {\n  content: \"\\EA46\";\n}\n\n.icon-simple-delete::before {\n  content: \"\\EA47\";\n}\n\n.icon-simple-remove::before {\n  content: \"\\EA48\";\n}\n\n.icon-single-02::before {\n  content: \"\\EA49\";\n}\n\n.icon-single-copy-04::before {\n  content: \"\\EA4A\";\n}\n\n.icon-sound-wave::before {\n  content: \"\\EA4B\";\n}\n\n.icon-spaceship::before {\n  content: \"\\EA4C\";\n}\n\n.icon-square-pin::before {\n  content: \"\\EA4D\";\n}\n\n.icon-support-17::before {\n  content: \"\\EA4E\";\n}\n\n.icon-tablet-2::before {\n  content: \"\\EA4F\";\n}\n\n.icon-tag::before {\n  content: \"\\EA50\";\n}\n\n.icon-tap-02::before {\n  content: \"\\EA51\";\n}\n\n.icon-tie-bow::before {\n  content: \"\\EA52\";\n}\n\n.icon-time-alarm::before {\n  content: \"\\EA53\";\n}\n\n.icon-trash-simple::before {\n  content: \"\\EA54\";\n}\n\n.icon-triangle-right-17::before {\n  content: \"\\EA55\";\n}\n\n.icon-trophy::before {\n  content: \"\\EA56\";\n}\n\n.icon-tv-2::before {\n  content: \"\\EA57\";\n}\n\n.icon-upload::before {\n  content: \"\\EA58\";\n}\n\n.icon-user-run::before {\n  content: \"\\EA59\";\n}\n\n.icon-vector::before {\n  content: \"\\EA5A\";\n}\n\n.icon-video-66::before {\n  content: \"\\EA5B\";\n}\n\n.icon-volume-98::before {\n  content: \"\\EA5C\";\n}\n\n.icon-wallet-43::before {\n  content: \"\\EA5D\";\n}\n\n.icon-watch-time::before {\n  content: \"\\EA5E\";\n}\n\n.icon-wifi::before {\n  content: \"\\EA5F\";\n}\n\n.icon-world::before {\n  content: \"\\EA60\";\n}\n\n.icon-zoom-split::before {\n  content: \"\\EA61\";\n}\n\n.icon-refresh-01::before {\n  content: \"\\EA62\";\n}\n\n.icon-refresh-02::before {\n  content: \"\\EA63\";\n}\n\n.icon-shape-star::before {\n  content: \"\\EA64\";\n}\n\n.icon-components::before {\n  content: \"\\EA65\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/assets/css/nucleo-icons.css":
/*!**************************************************!*\
  !*** ./resources/js/assets/css/nucleo-icons.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/src??ref--5-2!./nucleo-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/assets/css/nucleo-icons.css");

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

/***/ "./resources/js/assets/fonts/nucleo.eot":
/*!**********************************************!*\
  !*** ./resources/js/assets/fonts/nucleo.eot ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/nucleo.eot?03ef1918e505c3e3471f9369ef7a638f";

/***/ }),

/***/ "./resources/js/assets/fonts/nucleo.ttf":
/*!**********************************************!*\
  !*** ./resources/js/assets/fonts/nucleo.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/nucleo.ttf?b17a118e13e53558658b681a0ebdad82";

/***/ }),

/***/ "./resources/js/assets/fonts/nucleo.woff":
/*!***********************************************!*\
  !*** ./resources/js/assets/fonts/nucleo.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/nucleo.woff?f0b489a5dbbff08833d21024f9fcbd4e";

/***/ }),

/***/ "./resources/js/assets/fonts/nucleo.woff2":
/*!************************************************!*\
  !*** ./resources/js/assets/fonts/nucleo.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/nucleo.woff2?5987dd12fea78ce5f97ae601b08ec03c";

/***/ }),

/***/ "./resources/js/assets/scss/black-dashboard-react.scss":
/*!*************************************************************!*\
  !*** ./resources/js/assets/scss/black-dashboard-react.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/lib/loader.js??ref--6-3!./black-dashboard-react.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/assets/scss/black-dashboard-react.scss");

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

/***/ "./resources/js/components/admin/Chart.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/admin/Chart.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _utils_ChartService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ChartService */ "./resources/js/utils/ChartService.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Chart(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      chart = _useState2[0],
      setChart = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function gen() {
      var chart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function gen$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].get(props.api));

            case 2:
              chart = _context.sent;
              setChart(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].generate(chart, props.color, props.type));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    gen();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card-chart"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "card-category"
  }, chart ? chart.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: props.icon
  }), " ", chart ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["separateHundreds"])(chart.total) + ' ' + chart.sign : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "chart-area"
  }, chart && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.chart, {
    data: chart.data,
    options: chart.options
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./resources/js/components/admin/ChartDynamic.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/ChartDynamic.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _utils_ChartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ChartService */ "./resources/js/utils/ChartService.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");






function ChartDynamic(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card-chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-category"
  }, props.data ? props.data.title : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h2"
  }, props.data ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["separateHundreds"])(props.data.total) + ' ' + props.data.sign : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-area"
  }, props.data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: props.data.data,
    options: props.data.options
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartDynamic);

/***/ }),

/***/ "./resources/js/components/admin/ChartMultiple.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/ChartMultiple.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _utils_ChartService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ChartService */ "./resources/js/utils/ChartService.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ChartMultiple(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      chart = _useState2[0],
      setChart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function gen() {
      var chart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function gen$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].get(props.api[0].url));

            case 2:
              chart = _context.sent;
              setChart(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].generate(chart, props.color, props.type));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    gen();
  }, []);

  function changeData(url, color, index) {
    var chart;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function changeData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].get(url));

          case 2:
            chart = _context2.sent;
            setChart(_utils_ChartService__WEBPACK_IMPORTED_MODULE_4__["default"].generate(chart, color, props.type));
            setCurrent(index);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  var buttons = props.api.map(function (button, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: index,
      tag: "label",
      color: "info",
      id: "0",
      size: "sm",
      className: "btn-simple",
      onClick: function onClick() {
        return changeData(button.url, button.color, index);
      },
      active: current === index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      defaultChecked: true,
      className: "d-none",
      name: "options",
      type: "radio"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "d-none d-sm-block d-md-block d-lg-block d-xl-block"
    }, button.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "d-block d-sm-none"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: button.icon
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card-chart"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "text-left",
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "card-category"
  }, chart ? chart.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: props.api[current].icon,
    style: {
      color: props.api[current].color
    }
  }), " ", chart ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["separateHundreds"])(chart.total) + ' ' + chart.sign : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "btn-group-toggle float-md-right",
    "data-toggle": "buttons"
  }, buttons)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "chart-area",
    style: props.height && {
      height: props.height
    }
  }, chart && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.chart, {
    data: chart.data,
    options: chart.options
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartMultiple);

/***/ }),

/***/ "./resources/js/components/admin/DiscountsList.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/DiscountsList.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");





function DiscountsList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "text-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Percent off"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Product price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Final price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Ends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Added at"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.data && props.data.length > 0 ? props.data.map(function (product, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: product.discount.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.discount.percent_off, " %"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.price, " USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.final_price, " USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.discount.ends), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.discount.created_at), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "btn btn-danger",
      onClick: function onClick() {
        return props.deleteDiscount(product.discount);
      }
    }, "Delete")));
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (DiscountsList);

/***/ }),

/***/ "./resources/js/components/admin/FixedPlugin/FixedPlugin.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/FixedPlugin/FixedPlugin.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


var FixedPlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(FixedPlugin, _Component);

  function FixedPlugin(props) {
    var _this;

    _classCallCheck(this, FixedPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FixedPlugin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.state.classes === "dropdown show-dropdown") {
        _this.setState({
          classes: "dropdown show-dropdown show"
        });
      } else {
        _this.setState({
          classes: "dropdown show-dropdown"
        });
      }
    });

    _this.state = {
      classes: "dropdown show-dropdown"
    };
    return _this;
  }

  _createClass(FixedPlugin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fixed-plugin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.classes
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cog fa-2x"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "dropdown-menu show"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "header-title"
      }, "SIDEBAR BACKGROUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "adjustments-line"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "badge-colors text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.bgColor === "primary" ? "badge filter badge-primary active" : "badge filter badge-primary",
        "data-color": "primary",
        onClick: function onClick() {
          _this2.props.handleBgClick("primary");
        }
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.bgColor === "blue" ? "badge filter badge-info active" : "badge filter badge-info",
        "data-color": "blue",
        onClick: function onClick() {
          _this2.props.handleBgClick("info");
        }
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.bgColor === "green" ? "badge filter badge-success active" : "badge filter badge-success",
        "data-color": "green",
        onClick: function onClick() {
          _this2.props.handleBgClick("success");
        }
      }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "adjustments-line text-center color-change"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-label"
      }, "LIGHT MODE"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge light-badge mr-2",
        onClick: function onClick() {
          return _this2.props.handleDarkModeClick("light");
        }
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge dark-badge ml-2",
        onClick: function onClick() {
          return _this2.props.handleDarkModeClick("dark");
        }
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-label"
      }, "DARK MODE"), " "))));
    }
  }]);

  return FixedPlugin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FixedPlugin);

/***/ }),

/***/ "./resources/js/components/admin/Footer/Footer.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/Footer/Footer.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
 // reactstrap components



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright"
      }, "\xA9 ", new Date().getFullYear(), " | Layout created by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "danger"
      }, "Creative Tim"), ", developed and implemented by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "success"
      }, "Damian Chojnacki"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/components/admin/Navbars/AdminNavbar.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/Navbars/AdminNavbar.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/AuthService */ "./resources/js/utils/AuthService.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // nodejs library that concatenates classes

 // reactstrap components





function AdminNavbar(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapseOpen = _useState2[0],
      setCollapseOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalSearch = _useState4[0],
      setModalSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("navbar-transparent"),
      _useState6 = _slicedToArray(_useState5, 2),
      color = _useState6[0],
      setColor = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", updateColor);
    return function () {
      return window.removeEventListener("resize", updateColor);
    };
  }, []);

  var handleLogout = function handleLogout(e) {
    e.preventDefault();
    _utils_AuthService__WEBPACK_IMPORTED_MODULE_4__["default"].logout();
    dispatch({
      type: "logout"
    });
  }; // function that adds color white/transparent to the navbar on resize (this is for the collapse)


  var updateColor = function updateColor() {
    window.innerWidth < 993 && collapseOpen ? setColor("bg-white") : setColor("navbar-transparent");
  }; // this function opens and closes the collapse on small devices


  var toggleCollapse = function toggleCollapse() {
    collapseOpen ? setColor("navbar-transparent") : setColor("bg-white");
    setCollapseOpen(!collapseOpen);
  };

  var toggleModalSearch = function toggleModalSearch() {
    setModalSearch(!modalSearch);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("navbar-absolute", color),
    expand: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("navbar-toggle d-inline", {
      toggled: props.sidebarOpened
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: props.toggleSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar bar1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar bar2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar bar3"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, props.brandText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-expanded": false,
    "aria-label": "Toggle navigation",
    className: "navbar-toggler",
    "data-target": "#navigation",
    "data-toggle": "collapse",
    id: "navigation",
    type: "button",
    onClick: toggleCollapse
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar navbar-kebab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar navbar-kebab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-bar navbar-kebab"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    navbar: true,
    isOpen: collapseOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto",
    navbar: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "search-bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "link",
    "data-target": "#searchModal",
    "data-toggle": "modal",
    id: "search-button",
    onClick: toggleModalSearch
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "tim-icons icon-zoom-split"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-lg-none d-md-block"
  }, "Search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
    nav: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    caret: true,
    color: "default",
    "data-toggle": "dropdown",
    nav: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notification d-none d-lg-block d-xl-block"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "tim-icons icon-sound-wave"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "d-lg-none"
  }, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: "dropdown-navbar",
    right: true,
    tag: "ul"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item"
  }, "Mike John responded to your email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item"
  }, "You have 5 more tasks")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item"
  }, "Your friend Michael is in town")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item"
  }, "Another notification")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item"
  }, "Another one")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
    nav: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    caret: true,
    color: "default",
    "data-toggle": "dropdown",
    nav: true,
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "photo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "tim-icons icon-single-02"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "d-lg-none"
  }, "Log out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: "dropdown-navbar",
    right: true,
    tag: "ul"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    tag: "li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "nav-item",
    onClick: handleLogout
  }, "Log out")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "separator d-lg-none"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    modalClassName: "modal-search",
    isOpen: modalSearch,
    toggle: toggleModalSearch
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "inlineFormInputGroup",
    placeholder: "SEARCH",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Close",
    className: "close",
    "data-dismiss": "modal",
    type: "button",
    onClick: toggleModalSearch
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "tim-icons icon-simple-remove"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (AdminNavbar);

/***/ }),

/***/ "./resources/js/components/admin/OrdersList.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/OrdersList.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function OrdersList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "text-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Purchase date"), props.fields.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Customer email"), props.fields.value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Value"), props.fields.status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Order status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.data && props.data.length > 0 ? props.data.map(function (order, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: order.id
    }, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.id), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.created_at), props.fields.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.user.email), props.fields.value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, order.value, " USD"), props.fields.status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.status.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "btn btn-".concat(props.bgColor),
      to: "/admin/orders/".concat(order.id)
    }, "Details")));
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (OrdersList);

/***/ }),

/***/ "./resources/js/components/admin/ProductsList.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/ProductsList.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");





function ProductsList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "text-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), props.fields.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), props.fields.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Type"), props.fields.price && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Price"), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Added at"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.data && props.data.length > 0 ? props.data.map(function (product, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: product.id,
      className: props.product === product.id ? "table-warning" : null
    }, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.id), props.fields.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.name), props.fields.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.type.name_display), props.fields.price && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, product.price, " USD"), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, product.created_at), props.add ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "success",
      onClick: function onClick() {
        return props.add(product);
      }
    }, "Select")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "btn btn-".concat(props.bgColor),
      to: "/admin/products/".concat(product.id)
    }, "Details")));
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductsList);

/***/ }),

/***/ "./resources/js/components/admin/ProductsListComplex.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/ProductsListComplex.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function ProductsListComplex(props) {
  return props.data && props.data.length > 0 ? props.data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: product.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h3"
    }, product.name), product.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "rounded mx-auto mw-100 d-block",
      style: {
        maxHeight: '200px'
      },
      src: product.image.url,
      alt: product.name
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-weight-bold"
    }, "Price: "), product.price, " $"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-weight-bold"
    }, "Quantity: "), product.pivot.quantity))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "btn btn-".concat(props.bgColor),
      to: "/admin/products/".concat(product.id)
    }, "Details")));
  }) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductsListComplex);

/***/ }),

/***/ "./resources/js/components/admin/Sidebar/Sidebar.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/Sidebar/Sidebar.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/

 // nodejs library to set properties for components

 // javascript plugin used to create scrollbars on windows

 // reactstrap components


var ps;

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "linkOnClick", function () {
      document.documentElement.classList.remove("nav-open");
    });

    _this.activeRoute.bind(_assertThisInitialized(_this));

    return _this;
  } // verifies if routeName is the one active (in browser input)


  _createClass(Sidebar, [{
    key: "activeRoute",
    value: function activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](this.refs.sidebar, {
          suppressScrollX: true,
          suppressScrollY: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          bgColor = _this$props.bgColor,
          routes = _this$props.routes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar ".concat(bgColor)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-wrapper",
        ref: "sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], null, routes.map(function (prop, key) {
        if (prop.redirect) return null;
        return !prop.hidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: _this2.activeRoute(prop.path) + (prop.pro ? " active-pro" : ""),
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: prop.layout + prop.path,
          className: "nav-link",
          activeClassName: "active",
          onClick: _this2.props.toggleSidebar
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: prop.icon
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, prop.name)));
      }))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Sidebar.defaultProps = {
  bgColor: "primary",
  routes: [{}]
};
Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].oneOf(["primary", "success", "info"]),
  routes: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].object),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string,
    // the text of the logo
    text: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].node,
    // the image src of the logo
    imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/components/admin/UsersList.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/UsersList.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function UsersList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "text-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Register date"), props.fields.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), props.fields.value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Name"), props.fields.status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.data && props.data.length > 0 ? props.data.map(function (user, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: user.id
    }, props.fields.index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1), props.fields.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.id), props.fields.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.created_at), props.fields.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.email), props.fields.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1), props.fields.country && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.country.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "btn btn-".concat(props.bgColor),
      to: "/admin/users/".concat(user.id)
    }, "Details")));
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (UsersList);

/***/ }),

/***/ "./resources/js/layouts/Admin.jsx":
/*!****************************************!*\
  !*** ./resources/js/layouts/Admin.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_Navbars_AdminNavbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin/Navbars/AdminNavbar.jsx */ "./resources/js/components/admin/Navbars/AdminNavbar.jsx");
/* harmony import */ var _components_admin_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin/Footer/Footer.jsx */ "./resources/js/components/admin/Footer/Footer.jsx");
/* harmony import */ var _components_admin_Sidebar_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin/Sidebar/Sidebar.jsx */ "./resources/js/components/admin/Sidebar/Sidebar.jsx");
/* harmony import */ var _components_admin_FixedPlugin_FixedPlugin_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin/FixedPlugin/FixedPlugin.jsx */ "./resources/js/components/admin/FixedPlugin/FixedPlugin.jsx");
/* harmony import */ var _routes_admin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes/admin.js */ "./resources/js/routes/admin.js");
/* harmony import */ var _assets_scss_black_dashboard_react_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/scss/black-dashboard-react.scss */ "./resources/js/assets/scss/black-dashboard-react.scss");
/* harmony import */ var _assets_scss_black_dashboard_react_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_black_dashboard_react_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/nucleo-icons.css */ "./resources/js/assets/css/nucleo-icons.css");
/* harmony import */ var _assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/AuthService */ "./resources/js/utils/AuthService.js");
/* harmony import */ var _utils_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/AuthContext */ "./resources/js/utils/AuthContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


 // core components












function Admin(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_utils_AuthContext__WEBPACK_IMPORTED_MODULE_12__["AuthContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(localStorage.getItem('background')),
      _useState2 = _slicedToArray(_useState, 2),
      backgroundColor = _useState2[0],
      setBackgroundColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(localStorage.getItem('darkMode')),
      _useState4 = _slicedToArray(_useState3, 2),
      darkMode = _useState4[0],
      setDarkMode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(document.documentElement.className.indexOf("nav-open") !== -1),
      _useState6 = _slicedToArray(_useState5, 2),
      sidebarOpened = _useState6[0],
      setSidebarOpened = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      redirectBack = _useState8[0],
      setRedirectBack = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    state.authenticated ? _utils_AuthService__WEBPACK_IMPORTED_MODULE_11__["default"].getUser().then(function (res) {
      dispatch({
        type: "login",
        payload: res.data
      });
    })["catch"](function () {
      dispatch({
        type: "logout"
      });
    })["finally"](function () {
      setLoading(false);
    }) : setLoading(false);
    darkMode === 'light' ? document.body.classList.add("white-content") : document.body.classList.remove("white-content");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !loading && (!state.authenticated || state.user.name !== 'admin') && setRedirectBack(true);
    var tables = document.querySelectorAll(".table-responsive");

    for (var i = 0; i < tables.length; i++) {
      new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["default"](tables[i]);
    }
  });

  var toggleSidebar = function toggleSidebar() {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpened(!sidebarOpened);
  };

  var handleBgClick = function handleBgClick(color) {
    localStorage.setItem('background', color);
    setBackgroundColor(color);
  };

  var handleDarkModeClick = function handleDarkModeClick(color) {
    localStorage.setItem('darkMode', color);
    setDarkMode(color);
    color === 'light' ? document.body.classList.add("white-content") : document.body.classList.remove("white-content");
  };

  var getRoutes = function getRoutes(routes) {
    return routes.map(function (prop, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: prop.layout + prop.path,
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(prop.component, _extends({}, props, {
            name: prop.name,
            bgColor: backgroundColor
          }));
        },
        key: key
      });
    });
  };

  var getBrandText = function getBrandText(path) {
    for (var i = 0; i < _routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"].length; i++) {
      if (props.location.pathname.indexOf(_routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"][i].layout + _routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"][i].path) !== -1) {
        return _routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"][i].name;
      }
    }

    return "Brand";
  };

  return redirectBack ? window.location = '/' : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_notify_toast__WEBPACK_IMPORTED_MODULE_2___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper black-dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin_Sidebar_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    routes: _routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    bgColor: backgroundColor,
    toggleSidebar: toggleSidebar
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-panel ".concat(backgroundColor)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin_Navbars_AdminNavbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    brandText: getBrandText(props.location.pathname),
    toggleSidebar: toggleSidebar,
    sidebarOpened: sidebarOpened
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, getRoutes(_routes_admin_js__WEBPACK_IMPORTED_MODULE_7__["default"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    from: "/admin",
    to: "admin/dashboard"
  })), // we don't want the Footer to be rendered on map page
  props.location.pathname.indexOf("maps") !== -1 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fluid: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin_FixedPlugin_FixedPlugin_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bgColor: backgroundColor,
    handleBgClick: handleBgClick,
    handleDarkModeClick: handleDarkModeClick
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./resources/js/routes/admin.js":
/*!**************************************!*\
  !*** ./resources/js/routes/admin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_admin_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/admin/Dashboard */ "./resources/js/views/admin/Dashboard.jsx");
/* harmony import */ var _views_admin_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/admin/Product */ "./resources/js/views/admin/Product.jsx");
/* harmony import */ var _views_admin_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/admin/Order */ "./resources/js/views/admin/Order.jsx");
/* harmony import */ var _views_admin_Resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/admin/Resource */ "./resources/js/views/admin/Resource.jsx");
/* harmony import */ var _views_admin_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/admin/User */ "./resources/js/views/admin/User.jsx");
/* harmony import */ var _views_admin_Analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/admin/Analytics */ "./resources/js/views/admin/Analytics.jsx");
/* harmony import */ var _views_admin_Discounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/admin/Discounts */ "./resources/js/views/admin/Discounts.jsx");
/* harmony import */ var _views_admin_DiscountsNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/admin/DiscountsNew */ "./resources/js/views/admin/DiscountsNew.jsx");
/* harmony import */ var _views_admin_ProductNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/admin/ProductNew */ "./resources/js/views/admin/ProductNew.jsx");
/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/









/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "/dashboard",
  name: "Dashboard",
  icon: "tim-icons icon-chart-pie-36",
  component: _views_admin_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/admin"
}, {
  path: "/products",
  name: "Products",
  icon: "tim-icons icon-laptop",
  component: _views_admin_Resource__WEBPACK_IMPORTED_MODULE_3__["default"],
  layout: "/admin"
}, {
  path: "/products/new",
  component: _views_admin_ProductNew__WEBPACK_IMPORTED_MODULE_8__["default"],
  layout: "/admin",
  hidden: true
}, {
  path: "/products/:id",
  component: _views_admin_Product__WEBPACK_IMPORTED_MODULE_1__["default"],
  layout: "/admin",
  hidden: true
}, {
  path: "/orders",
  name: "Orders",
  icon: "tim-icons icon-basket-simple",
  component: _views_admin_Resource__WEBPACK_IMPORTED_MODULE_3__["default"],
  layout: "/admin"
}, {
  path: "/orders/:id",
  component: _views_admin_Order__WEBPACK_IMPORTED_MODULE_2__["default"],
  layout: "/admin",
  hidden: true
}, {
  path: "/users",
  name: "Users",
  icon: "tim-icons icon-single-02",
  component: _views_admin_Resource__WEBPACK_IMPORTED_MODULE_3__["default"],
  layout: "/admin"
}, {
  path: "/users/:id",
  component: _views_admin_User__WEBPACK_IMPORTED_MODULE_4__["default"],
  layout: "/admin",
  hidden: true
}, {
  path: "/analytics",
  name: "Analytics",
  icon: "tim-icons icon-chart-bar-32",
  component: _views_admin_Analytics__WEBPACK_IMPORTED_MODULE_5__["default"],
  layout: "/admin"
}, {
  path: "/discounts",
  name: "Discounts",
  icon: "tim-icons icon-money-coins",
  component: _views_admin_Discounts__WEBPACK_IMPORTED_MODULE_6__["default"],
  layout: "/admin"
}, {
  path: "/discounts/new",
  component: _views_admin_DiscountsNew__WEBPACK_IMPORTED_MODULE_7__["default"],
  layout: "/admin",
  hidden: true
}]);

/***/ }),

/***/ "./resources/js/utils/ChartService.js":
/*!********************************************!*\
  !*** ./resources/js/utils/ChartService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./resources/js/utils/helpers.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ChartService =
/*#__PURE__*/
function () {
  function ChartService() {
    _classCallCheck(this, ChartService);
  }

  _createClass(ChartService, null, [{
    key: "get",
    value: function get(name) {
      var chart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/charts/".concat(name)));

            case 2:
              chart = _context.sent;
              return _context.abrupt("return", chart.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "dynamic",
    value: function dynamic(resource, group, range) {
      var chart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function dynamic$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/charts/dynamic/".concat(resource, "/").concat(group, "/").concat(range)));

            case 2:
              chart = _context2.sent;
              return _context2.abrupt("return", chart.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "generate",
    value: function generate(_data) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#1D8CF8';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'line';
      var options = {
        line: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a",
                min: 0
              }
            }],
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(color, 0.1),
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }]
          }
        },
        bar: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
                padding: 20,
                fontColor: "#9e9e9e",
                callback: function callback(value) {
                  return _data.sign ? value + ' ' + _data.sign : value;
                }
              }
            }],
            xAxes: [{
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }]
          }
        },
        pie: {
          segmentShowStroke: true,
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true
        }
      };
      return {
        total: _data.total,
        title: _data.title,
        sign: _data.sign ? _data.sign : '',
        data: function data(canvas) {
          var ctx = canvas.getContext("2d");
          var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
          gradientStroke.addColorStop(1, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(color, 0.2));
          gradientStroke.addColorStop(0.4, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(color, 0.0));
          gradientStroke.addColorStop(0, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(color, 0)); //blue colors

          if (type === 'pie') {
            gradientStroke = _helpers__WEBPACK_IMPORTED_MODULE_1__["colors"];
            color = 'transparent';
          }

          return {
            labels: _data.labels,
            datasets: [{
              label: _data.title,
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: color,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: color,
              pointHoverRadius: 6,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: _data.values
            }]
          };
        },
        options: options[type]
      };
    }
  }]);

  return ChartService;
}();



/***/ }),

/***/ "./resources/js/utils/ImageService.js":
/*!********************************************!*\
  !*** ./resources/js/utils/ImageService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageService =
/*#__PURE__*/
function () {
  function ImageService() {
    _classCallCheck(this, ImageService);
  }

  _createClass(ImageService, null, [{
    key: "upload",
    value: function upload(data) {
      var formData = new FormData();
      formData.append('img', data);
      return window.axios.post("/api/images", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  }]);

  return ImageService;
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/orders/page/".concat(page)));

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
    key: "edit",
    value: function edit(data) {
      return window.axios.put("/api/orders", data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return window.axios["delete"]("/api/orders/".concat(id));
    }
  }]);

  return OrderService;
}();



/***/ }),

/***/ "./resources/js/utils/UserService.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/UserService.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, null, [{
    key: "all",
    value: function all(page) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function all$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/users/page/".concat(page)));

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
    key: "get",
    value: function get(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/users/".concat(id)));

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
    value: function search(email) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function search$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get("/api/users/search/".concat(email)));

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
    key: "edit",
    value: function edit(data) {
      return window.axios.put("/api/users", data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return window.axios["delete"]("/api/users/".concat(id));
    }
  }]);

  return UserService;
}();



/***/ }),

/***/ "./resources/js/views/admin/Analytics.jsx":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Analytics.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/OrderService */ "./resources/js/utils/OrderService.js");
/* harmony import */ var _components_admin_ProductsListComplex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admin/ProductsListComplex */ "./resources/js/components/admin/ProductsListComplex.jsx");
/* harmony import */ var _utils_ChartService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ChartService */ "./resources/js/utils/ChartService.js");
/* harmony import */ var _components_admin_ChartDynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/admin/ChartDynamic */ "./resources/js/components/admin/ChartDynamic.jsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // reactstrap components










function Analytics(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      range = _useState4[0],
      setRange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      group = _useState6[0],
      setGroup = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      resource = _useState8[0],
      setResource = _useState8[1];

  var getThemeColor = function getThemeColor(theme) {
    var style = getComputedStyle(document.body);
    var color;
    theme === 'green' ? color = style.getPropertyValue('--success') : theme === 'green' ? color = style.getPropertyValue('--info') : color = style.getPropertyValue('--primary');
    return color;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function gen() {
      var chart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function gen$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ChartService__WEBPACK_IMPORTED_MODULE_7__["default"].dynamic(resource, group, range));

            case 2:
              chart = _context.sent;
              setData(_utils_ChartService__WEBPACK_IMPORTED_MODULE_7__["default"].generate(chart, getThemeColor(props.bgColor), 'line'));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    range && group && resource && gen();
  }, [range, group, resource]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - Analytics")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, data && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_ChartDynamic__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title text-center"
  }, "Resource")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('orders');
    },
    block: true,
    disabled: resource === 'orders'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-cart"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Orders made")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('orders-value');
    },
    block: true,
    disabled: resource === 'orders-value'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-money-coins"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Value of orders")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('orders-productsCount');
    },
    block: true,
    disabled: resource === 'orders-products'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-laptop"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Purchased products")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('users');
    },
    block: true,
    disabled: resource === 'users'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-single-02"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "New users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('views-views');
    },
    block: true,
    disabled: resource === 'views-views'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-tap-02"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Views")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setResource('views-views_unique');
    },
    block: true,
    disabled: resource === 'views-views_unique'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "tim-icons icon-tap-02"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Unique views"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title text-center"
  }, "Range")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setRange('week');
    },
    block: true,
    disabled: range === 'week'
  }, "Week"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setRange('month');
    },
    block: true,
    disabled: range === 'month'
  }, "Month"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setRange('year');
    },
    block: true,
    disabled: range === 'year'
  }, "Year")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title text-center"
  }, "Group by")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setGroup('day');
    },
    block: true,
    disabled: group === 'day'
  }, "Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setGroup('week');
    },
    block: true,
    disabled: group === 'week'
  }, "Week"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setGroup('month');
    },
    block: true,
    disabled: group === 'month'
  }, "Month")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Analytics);

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.jsx":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ChartService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ChartService */ "./resources/js/utils/ChartService.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _utils_OrderService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/OrderService */ "./resources/js/utils/OrderService.js");
/* harmony import */ var _components_admin_Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/admin/Chart */ "./resources/js/components/admin/Chart.jsx");
/* harmony import */ var _components_admin_ChartMultiple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/admin/ChartMultiple */ "./resources/js/components/admin/ChartMultiple.jsx");
/* harmony import */ var _components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admin/OrdersList */ "./resources/js/components/admin/OrdersList.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


 // reactstrap components










var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));
    _this.state = {
      orders: [],
      loading: true
    };
    _this.chartMultiple = [{
      title: 'Orders',
      url: 'orders',
      color: '#1D8CF8',
      icon: 'tim-icons icon-delivery-fast'
    }, {
      title: 'Views',
      url: 'views',
      color: '#ffee00',
      icon: 'tim-icons icon-tap-02'
    }, {
      title: 'Unique views',
      url: 'views-unique',
      color: '#00ddcc',
      icon: 'tim-icons icon-single-02'
    }];
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var orders;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_OrderService__WEBPACK_IMPORTED_MODULE_8__["default"].recent());

            case 2:
              orders = _context.sent;
              this.setState({
                orders: orders,
                loading: false
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_ChartMultiple__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "line",
        chart: react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"],
        api: this.chartMultiple
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "bar",
        chart: react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Bar"],
        api: "orders/countries",
        icon: "tim-icons icon-world text-warning",
        color: "#ff8d72"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "bar",
        chart: react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Bar"],
        api: "orders/values",
        icon: "tim-icons icon-money-coins text-danger",
        color: "#fd5d93"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-plain card"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "card-title"
      }, "Recent orders"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "card-category"
      }, "(only after payment)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "table-responsive ps"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: this.state.orders,
        bgColor: this.props.bgColor,
        fields: {
          id: true,
          date: true,
          email: true,
          value: true
        }
      }))))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/views/admin/Discounts.jsx":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Discounts.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_admin_DiscountsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/admin/DiscountsList */ "./resources/js/components/admin/DiscountsList.jsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Discounts(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      discounts = _useState2[0],
      setDiscounts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getDiscounts();
  }, []);

  var getDiscounts = function getDiscounts() {
    var discounts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDiscounts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].discounts.all());

          case 2:
            discounts = _context.sent;
            setDiscounts(discounts);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var handleDelete = function handleDelete(discount) {
    _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].discounts["delete"](discount.id).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_6__["notify"].show(res.data, 'success');
      getDiscounts();
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_6__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - Discounts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "card-plain"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    className: "row justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "col-md-3 col-12"
  }, "All discounts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/admin/discounts/new",
    className: "col-md-3 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: props.bgColor,
    className: "px-3",
    block: true
  }, "New discount"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_DiscountsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: discounts,
    bgColor: props.bgColor,
    deleteDiscount: handleDelete
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Discounts);

/***/ }),

/***/ "./resources/js/views/admin/DiscountsNew.jsx":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/DiscountsNew.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_admin_DiscountsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/admin/DiscountsList */ "./resources/js/components/admin/DiscountsList.jsx");
/* harmony import */ var _components_admin_ProductsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/admin/ProductsList */ "./resources/js/components/admin/ProductsList.jsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function DiscountsNew(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      id = _useState4[0],
      setId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      percentOff = _useState6[0],
      setPercentOff = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      ends = _useState8[0],
      setEnds = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getProducts();
  }, []);

  var getProducts = function getProducts() {
    var products;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProducts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].discounts.without());

          case 2:
            products = _context.sent;
            setProducts(products);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      product_id: id,
      percent_off: percentOff,
      ends: ends
    };
    _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].discounts.add(data).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_6__["notify"].show(res.data, 'success');
      getProducts();
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_6__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - New Discount")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-6 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title"
  }, "New discount")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Percent off"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "number",
    onChange: function onChange(e) {
      return setPercentOff(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Ends at"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "datetime-local",
    onChange: function onChange(e) {
      return setEnds(e.target.value);
    },
    className: props.bgColor,
    required: true
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-fill",
    color: "success",
    type: "submit"
  }, "Add"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-6 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: ""
  }, "Products:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_ProductsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: products,
    bgColor: props.bgColor,
    fields: {
      name: true,
      price: true
    },
    add: function add(product) {
      return setId(product.id);
    },
    product: id
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (DiscountsNew);

/***/ }),

/***/ "./resources/js/views/admin/Order.jsx":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Order.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/OrderService */ "./resources/js/utils/OrderService.js");
/* harmony import */ var _components_admin_ProductsListComplex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admin/ProductsListComplex */ "./resources/js/components/admin/ProductsListComplex.jsx");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // reactstrap components






function Order(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      products = _useState4[0],
      setProducts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      statuses = _useState8[0],
      setStatuses = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      redirect = _useState10[0],
      setRedirect = _useState10[1];

  var getOrders = function getOrders() {
    var order;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getOrders$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_OrderService__WEBPACK_IMPORTED_MODULE_5__["default"].get(props.match.params.id));

          case 2:
            order = _context.sent;
            setProducts(order.products);
            setStatus(order.status.id);
            setOrder(order);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var getOrdersStatuses = function getOrdersStatuses() {
    var statuses, options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getOrdersStatuses$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get('/api/orders/statuses'));

          case 2:
            statuses = _context2.sent;
            options = statuses.data.map(function (status) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                key: status.id,
                value: status.id
              }, status.name);
            });
            setStatuses(options);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getOrders();
    getOrdersStatuses();
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      id: order.id,
      status: status,
      products: products
    };
    _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__["default"].edit(data).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  var handleDelete = function handleDelete() {
    _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](order.id).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
      setRedirect(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/admin/orders"
      }));
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content"
  }, redirect, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title"
  }, "Order")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: order.id,
    type: "text",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Customer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: order.user && order.user.email,
    type: "text",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Data zakupu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: order.created_at,
    type: "text",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Value"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: order.value,
    type: "number",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Status"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    value: status,
    onChange: function onChange(e) {
      return setStatus(e.target.value);
    },
    className: props.bgColor,
    required: true
  }, statuses)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: props.bgColor,
    type: "submit"
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: "danger",
    type: "button",
    onClick: handleDelete
  }, "Delete"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Products:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_ProductsListComplex__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    data: products,
    bgColor: props.bgColor
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./resources/js/views/admin/Product.jsx":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Product.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // reactstrap components





function Product(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      price = _useState6[0],
      setPrice = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      redirect = _useState8[0],
      setRedirect = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function get() {
      var product;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].get(props.match.params.id));

            case 2:
              product = _context.sent;
              setProduct(product);
              setName(product.name);
              setPrice(product.price);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    get();
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      id: product.id,
      name: name,
      price: price
    };
    _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"].edit(data).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  var handleDelete = function handleDelete() {
    _utils_ProductService__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](product.id).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
      setRedirect(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/admin/products"
      }));
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content"
  }, redirect, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title"
  }, "Product")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: product.id,
    type: "text",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: product.name,
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Price"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: product.price,
    type: "number",
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    className: props.bgColor,
    required: true
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: props.bgColor,
    type: "submit"
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: "danger",
    type: "button",
    onClick: handleDelete
  }, "Delete"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4",
    className: "justify-content-center align-items-center",
    style: {
      display: "flex"
    }
  }, product.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: product.image.url,
    alt: product.name
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/views/admin/ProductNew.jsx":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/ProductNew.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var _utils_ImageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ImageService */ "./resources/js/utils/ImageService.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // reactstrap components






function ProductNew(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      price = _useState4[0],
      setPrice = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      redirect = _useState8[0],
      setRedirect = _useState8[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      name: name,
      price: price,
      img: image.url
    };
    _utils_ProductService__WEBPACK_IMPORTED_MODULE_4__["default"].add(data).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show("".concat(name, " has been added."), 'success');
      setRedirect(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/admin/products/".concat(res.data.id)
      }));
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show(error.response.data.message, 'error');
    });
  };

  var uploadImage = function uploadImage(image) {
    _utils_ImageService__WEBPACK_IMPORTED_MODULE_5__["default"].upload(image).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show("Image has been uploaded.", 'success');
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, redirect, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "card-title"
  }, "New product")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    className: props.bgColor,
    required: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn-fill",
    color: "success",
    type: "submit"
  }, "Add"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4",
    className: "justify-content-center align-items-center",
    style: {
      display: "flex"
    }
  }, image.url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image.url,
    alt: name
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "file",
    onChange: function onChange(e) {
      return uploadImage(e.target.files[0]);
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductNew);

/***/ }),

/***/ "./resources/js/views/admin/Resource.jsx":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Resource.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/admin/OrdersList */ "./resources/js/components/admin/OrdersList.jsx");
/* harmony import */ var _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/OrderService */ "./resources/js/utils/OrderService.js");
/* harmony import */ var _utils_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/UserService */ "./resources/js/utils/UserService.js");
/* harmony import */ var _utils_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ProductService */ "./resources/js/utils/ProductService.js");
/* harmony import */ var _components_admin_UsersList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/admin/UsersList */ "./resources/js/components/admin/UsersList.jsx");
/* harmony import */ var _components_admin_ProductsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/admin/ProductsList */ "./resources/js/components/admin/ProductsList.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











window['OrderService'] = _utils_OrderService__WEBPACK_IMPORTED_MODULE_5__["default"];
window['UserService'] = _utils_UserService__WEBPACK_IMPORTED_MODULE_6__["default"];
window['ProductService'] = _utils_ProductService__WEBPACK_IMPORTED_MODULE_7__["default"];

function Resource(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchField = _useState6[0],
      setSearchField = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchFieldBy = _useState8[0],
      setSearchFieldBy = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      service = _useState10[0],
      setService = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    initialLoad();
    service && getResource();
  }, [page, searchField, service]);

  var getResource = function getResource() {
    var found, newData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getResource$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(searchField && searchField !== "")) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window[service].search(searchField));

          case 3:
            found = _context.sent;
            setData(found);
            _context.next = 17;
            break;

          case 7:
            if (!(searchField === "")) {
              _context.next = 13;
              break;
            }

            setData([]);
            setPage(1);
            setSearchField(null);
            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window[service].all(page));

          case 15:
            newData = _context.sent;
            setData(data.concat(newData));

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
      setData([]);
      setPage(1);
    } else setPage(page + 1);
  };

  var initialLoad = function initialLoad() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.name;
    var field, classname;

    switch (name) {
      case 'Users':
        field = 'email';
        classname = 'UserService';
        break;

      case 'Orders':
        field = 'ID';
        classname = 'OrderService';
        break;

      case 'Products':
        field = 'name';
        classname = 'ProductService';
        break;
    }

    setSearchFieldBy(field);
    setService(classname);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Shop | Admin - ", props.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card-plain"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    className: "row justify-content-between align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "col-md-3 col-12 m-0"
  }, "All ", props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-3 col-12 my-md-0 my-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    className: props.bgColor,
    onChange: function onChange(e) {
      setSearchField(e.target.value);
    },
    placeholder: "Search by ".concat(searchFieldBy)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    to: "/admin/".concat(props.name.toLowerCase(), "/new"),
    className: "col-md-3 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success",
    className: "px-3",
    block: true
  }, "New ", props.name.slice(0, -1)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, props.name === "Orders" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    bgColor: props.bgColor,
    fields: {
      index: true,
      id: true,
      date: true,
      status: true
    }
  }), props.name === "Users" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_UsersList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    bgColor: props.bgColor,
    fields: {
      index: true,
      date: true,
      email: true
    }
  }), props.name === "Products" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_ProductsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    bgColor: props.bgColor,
    fields: {
      index: true,
      name: true,
      type: true,
      price: true
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-block",
    onClick: showMoreOrReload
  }, searchField ? "Reload" : "Show more"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Resource);

/***/ }),

/***/ "./resources/js/views/admin/User.jsx":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/User.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/UserService */ "./resources/js/utils/UserService.js");
/* harmony import */ var _components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admin/OrdersList */ "./resources/js/components/admin/OrdersList.jsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // reactstrap components






function User(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      country = _useState8[0],
      setCountry = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      countries = _useState10[0],
      setCountries = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState12 = _slicedToArray(_useState11, 2),
      redirect = _useState12[0],
      setRedirect = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_UserService__WEBPACK_IMPORTED_MODULE_5__["default"].get(props.match.params.id));

            case 2:
              user = _context.sent;
              setUser(user);
              setName(user.name);
              setEmail(user.email);
              setCountry(user.country.id);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    })();

    (function _callee2() {
      var countries, options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(window.axios.get('/api/countries'));

            case 2:
              countries = _context2.sent;
              options = countries.data.map(function (country) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  key: country.id,
                  value: country.id
                }, country.name);
              });
              setCountries(options);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    })();
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      id: user.id,
      name: name,
      email: email,
      country: country
    };
    _utils_UserService__WEBPACK_IMPORTED_MODULE_5__["default"].edit(data).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  var handleDelete = function handleDelete() {
    _utils_UserService__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](user.id).then(function (res) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(res.data, 'success');
      setRedirect(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/admin/users"
      }));
    })["catch"](function (error) {
      react_notify_toast__WEBPACK_IMPORTED_MODULE_4__["notify"].show(error.response.data.message, 'error');
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content"
  }, redirect, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "card-title"
  }, "User")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: user.id,
    type: "text",
    disabled: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: user.name,
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    defaultValue: user.email,
    type: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: props.bgColor,
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Country"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    value: country,
    onChange: function onChange(e) {
      return setCountry(e.target.value);
    },
    className: props.bgColor,
    required: true
  }, countries)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: props.bgColor,
    type: "submit"
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn-fill",
    color: "danger",
    type: "button",
    onClick: handleDelete
  }, "Delete"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    tag: "h2"
  }, "User orders"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: user.orders,
    bgColor: props.bgColor,
    fields: {
      index: true,
      date: true,
      status: true
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

}]);