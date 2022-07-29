"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuwq1HulMchJDkh9SPs6rhaPyrA4iTXf1Rw&usqp=CAU) no-repeat;\n  background-size: cover;\n  padding: 2% 10%;\n  min-height: 100vh;\n}\n\nli {\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 3%;\n}\n\n.head-nav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 1rem;\n  border-radius: 5px;\n  background-color: #b8c6db;\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n}\n\n.nav-text {\n  text-decoration: none;\n  color: black;\n  font-size: 1rem;\n  font-weight: bolder;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 0;\n}\n\n.navbar-nav {\n  gap: 5%;\n}\n\n.spot-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3px;\n}\n\n.spotlight {\n  display: flex;\n  background-color: #ffcb05;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  max-height: 25px;\n  font-size: 1rem;\n}\n\n#home {\n  padding: 1rem;\n  border-radius: 10px;\n  background-color: #b8c6db;\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n  max-height: 700px;\n  min-height: 700px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: baseline;\n  gap: 10px;\n}\n\nselect {\n  border-radius: 10px;\n  border: none;\n}\n\nselect:focus,\nselect:focus-visible {\n  border: none;\n  outline: none;\n}\n\n.container {\n  width: 100%;\n}\n\n#row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 350px));\n  justify-content: center;\n  gap: 20px;\n}\n\n.single-card {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2%;\n  box-shadow: #89d4cf 0 0 20px;\n  border-radius: 10px;\n  padding: 15px;\n  min-width: 248px;\n  max-width: 318px;\n}\n\n.col img {\n  width: 15rem;\n  height: 8rem;\n}\n\n.img-card {\n  height: 10rem;\n  width: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.img-card:hover {\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  transform-origin: bottom;\n  cursor: pointer;\n}\n\n.bounce-3 {\n  animation-name: bounce-3;\n  animation-timing-function: ease;\n}\n\n.bounce-4 {\n  animation-name: bounce-3;\n  animation-timing-function: ease;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  transform-origin: bottom;\n}\n\n@keyframes bounce-3 {\n  0% { transform: translateY(0); }\n  30% { transform: translateY(-60px); }\n  50% { transform: translateY(0); }\n  100% { transform: translateY(0); }\n}\n\n.description {\n  padding-top: 2rem;\n  display: flex;\n  gap: 50px;\n}\n\n.description .pokemon-name {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.poke-action {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nfooter {\n  width: 100%;\n  height: 10%;\n}\n\n.modal-wrapper {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -webkit-backdrop-filter: blur(10px); /* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */\n  backdrop-filter: blur(10px); /* Supported in Chrome 76 */\n}\n\n.modal {\n  padding: 20px 0;\n  background-color: #d5fefd;\n  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);\n  border-radius: 10%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: max-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: modalAnimation 1s;\n  animation-timing-function: ease-in-out;\n}\n\n.modal.comments {\n  padding: 3%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  animation: none;\n}\n\n.modal * {\n  width: 80%;\n  text-align: center;\n}\n\n.modal-information {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.modal-information * {\n  width: 80%;\n  margin: 0;\n  text-align: start;\n}\n\n.comments form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  gap: 12px;\n}\n\n.modal-ul {\n  height: 250px;\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.modal-ul li {\n  width: 100%;\n  padding: 8px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  border-bottom: 2px solid #000;\n}\n\n.modal-ul li * {\n  text-align: start;\n  width: 45%;\n  height: max-content;\n  margin: 0;\n}\n\n.ul-date {\n  width: 100%;\n}\n\n.form-p {\n  font-size: 1.2rem;\n  font-weight: 900;\n}\n\n.form-textarea {\n  height: 100px;\n  background: inherit;\n  border: none;\n  border-bottom: 2px solid rgb(208, 22, 22);\n}\n\n.form-input {\n  width: 50%;\n  background: inherit;\n  border: none;\n  border-bottom: 2px solid rgb(208, 22, 22);\n}\n\n.form-submit {\n  width: min-content;\n  background-color: #52a7c1;\n  background-image: linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%);\n  border: none;\n  border-radius: 10px;\n  font-weight: 900;\n  padding: 0.3rem 1.5rem;\n  letter-spacing: 0.2em;\n}\n\n.notDisplay {\n  display: none;\n}\n\n@keyframes modalAnimation {\n  0% {\n    transform: translate(-50%, -50%) scale(0) rotate3d(0, 2, 0, 60deg);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) scale(1) rotate3d(0, 2, 0, 360deg);\n  }\n}\n\n@keyframes shake {\n  0% { transform: translate(1px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0) rotate(1deg); }\n  30% { transform: translate(3px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(3px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(1px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@media screen and (min-width: 768px) {\n  .col {\n    min-width: calc(100% / 4);\n    max-width: 318px;\n  }\n\n  .modal-img {\n    max-width: 350px;\n    transform: scale(1.2);\n    animation: shake 0.5s;\n    animation-iteration-count: 4;\n  }\n\n  .modal {\n    max-width: 30%;\n    min-height: 60%;\n  }\n\n  .on-mobile {\n    display: none;\n  }\n\n  .on-desktop {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 10px;\n    gap: 10%;\n  }\n\n  .on-desktop a {\n    width: 30%;\n  }\n\n  .nav-list {\n    width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: center;\n    text-align: center;\n    gap: 15px;\n    margin: 0;\n  }\n\n  .desktop-a {\n    color: #555;\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .on-desktop {\n    display: none;\n  }\n\n  .on-mobile {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    gap: 10%;\n  }\n\n  .default {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    padding: 1% 2% 1% 2%;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 5px;\n    background-color: #b8c6db;\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n  }\n\n  .popup-menu {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #b8c6db;\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    padding: 5%;\n    gap: 3%;\n  }\n\n  .hamburger {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .close {\n    width: 100%;\n    display: flex;\n    justify-content: end;\n  }\n\n  .mobile-a {\n    color: #555;\n    font-size: 2em;\n  }\n}\n\n/* class active */\n.active {\n  display: flex;\n}\n\n.non-active {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuwq1HulMchJDkh9SPs6rhaPyrA4iTXf1Rw&usqp=CAU) no-repeat;\n  background-size: cover;\n  padding: 2% 10%;\n  min-height: 100vh;\n}\n\nli {\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 3%;\n}\n\n.head-nav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 1rem;\n  border-radius: 5px;\n  background-color: #b8c6db;\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n}\n\n.nav-text {\n  text-decoration: none;\n  color: black;\n  font-size: 1rem;\n  font-weight: bolder;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 0;\n}\n\n.navbar-nav {\n  gap: 5%;\n}\n\n.spot-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3px;\n}\n\n.spotlight {\n  display: flex;\n  background-color: #ffcb05;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  max-height: 25px;\n  font-size: 1rem;\n}\n\n#home {\n  padding: 1rem;\n  border-radius: 10px;\n  background-color: #b8c6db;\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n  max-height: 700px;\n  min-height: 700px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: baseline;\n  gap: 10px;\n}\n\nselect {\n  border-radius: 10px;\n  border: none;\n}\n\nselect:focus,\nselect:focus-visible {\n  border: none;\n  outline: none;\n}\n\n.container {\n  width: 100%;\n}\n\n#row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 350px));\n  justify-content: center;\n  gap: 20px;\n}\n\n.single-card {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2%;\n  box-shadow: #89d4cf 0 0 20px;\n  border-radius: 10px;\n  padding: 15px;\n  min-width: 248px;\n  max-width: 318px;\n}\n\n.col img {\n  width: 15rem;\n  height: 8rem;\n}\n\n.img-card {\n  height: 10rem;\n  width: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.img-card:hover {\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  transform-origin: bottom;\n  cursor: pointer;\n}\n\n.bounce-3 {\n  animation-name: bounce-3;\n  animation-timing-function: ease;\n}\n\n.bounce-4 {\n  animation-name: bounce-3;\n  animation-timing-function: ease;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  transform-origin: bottom;\n}\n\n@keyframes bounce-3 {\n  0% { transform: translateY(0); }\n  30% { transform: translateY(-60px); }\n  50% { transform: translateY(0); }\n  100% { transform: translateY(0); }\n}\n\n.description {\n  padding-top: 2rem;\n  display: flex;\n  gap: 50px;\n}\n\n.description .pokemon-name {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.poke-action {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nfooter {\n  width: 100%;\n  height: 10%;\n}\n\n.modal-wrapper {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -webkit-backdrop-filter: blur(10px); /* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */\n  backdrop-filter: blur(10px); /* Supported in Chrome 76 */\n}\n\n.modal {\n  padding: 20px 0;\n  background-color: #d5fefd;\n  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);\n  border-radius: 10%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: max-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: modalAnimation 1s;\n  animation-timing-function: ease-in-out;\n}\n\n.modal.comments {\n  padding: 3%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  animation: none;\n}\n\n.modal * {\n  width: 80%;\n  text-align: center;\n}\n\n.modal-information {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.modal-information * {\n  width: 80%;\n  margin: 0;\n  text-align: start;\n}\n\n.comments form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  gap: 12px;\n}\n\n.modal-ul {\n  height: 250px;\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.modal-ul li {\n  width: 100%;\n  padding: 8px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  border-bottom: 2px solid #000;\n}\n\n.modal-ul li * {\n  text-align: start;\n  width: 45%;\n  height: max-content;\n  margin: 0;\n}\n\n.ul-date {\n  width: 100%;\n}\n\n.form-p {\n  font-size: 1.2rem;\n  font-weight: 900;\n}\n\n.form-textarea {\n  height: 100px;\n  background: inherit;\n  border: none;\n  border-bottom: 2px solid rgb(208, 22, 22);\n}\n\n.form-input {\n  width: 50%;\n  background: inherit;\n  border: none;\n  border-bottom: 2px solid rgb(208, 22, 22);\n}\n\n.form-submit {\n  width: min-content;\n  background-color: #52a7c1;\n  background-image: linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%);\n  border: none;\n  border-radius: 10px;\n  font-weight: 900;\n  padding: 0.3rem 1.5rem;\n  letter-spacing: 0.2em;\n}\n\n.notDisplay {\n  display: none;\n}\n\n@keyframes modalAnimation {\n  0% {\n    transform: translate(-50%, -50%) scale(0) rotate3d(0, 2, 0, 60deg);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) scale(1) rotate3d(0, 2, 0, 360deg);\n  }\n}\n\n@keyframes shake {\n  0% { transform: translate(1px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0) rotate(1deg); }\n  30% { transform: translate(3px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(3px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(1px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@media screen and (min-width: 768px) {\n  .col {\n    min-width: calc(100% / 4);\n    max-width: 318px;\n  }\n\n  .modal-img {\n    max-width: 350px;\n    transform: scale(1.2);\n    animation: shake 0.5s;\n    animation-iteration-count: 4;\n  }\n\n  .modal {\n    max-width: 30%;\n    min-height: 60%;\n  }\n\n  .on-mobile {\n    display: none;\n  }\n\n  .on-desktop {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 10px;\n    gap: 10%;\n  }\n\n  .on-desktop a {\n    width: 30%;\n  }\n\n  .nav-list {\n    width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: center;\n    text-align: center;\n    gap: 15px;\n    margin: 0;\n  }\n\n  .desktop-a {\n    color: #555;\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .on-desktop {\n    display: none;\n  }\n\n  .on-mobile {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    gap: 10%;\n  }\n\n  .default {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    padding: 1% 2% 1% 2%;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 5px;\n    background-color: #b8c6db;\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n  }\n\n  .popup-menu {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #b8c6db;\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    padding: 5%;\n    gap: 3%;\n  }\n\n  .hamburger {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .close {\n    width: 100%;\n    display: flex;\n    justify-content: end;\n  }\n\n  .mobile-a {\n    color: #555;\n    font-size: 2em;\n  }\n}\n\n/* class active */\n.active {\n  display: flex;\n}\n\n.non-active {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-card.js */ "./src/modules/create-card.js");
/* harmony import */ var _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pokemon-api.js */ "./src/modules/pokemon-api.js");




const spotlight = document.querySelector('.spotlight');
const row = document.getElementById('row');
const selection = document.querySelector('#type-selection');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchApi)(selection.value);
  const pokemonResult = res.pokemon;
  const lessPokemon = [];
  for (let i = 0; i < _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.end; i += 1) {
    lessPokemon.push(pokemonResult[i]);
  }
  lessPokemon.forEach(async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    (0,_modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemonJson);
    spotlight.innerText = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.calculateNumberOfItems)(row.childElementCount, _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.end);
  });
});

selection.addEventListener('change', async () => {
  document.querySelector('#row').innerHTML = '';
  const res = await (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchApi)(selection.value);
  const pokemonResult = res.pokemon;
  const lessPokemon = [];
  const end = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.randomNumber)();
  for (let i = 0; i < end; i += 1) {
    lessPokemon.push(pokemonResult[i]);
  }
  lessPokemon.forEach(async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    (0,_modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemonJson);
    spotlight.innerText = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.calculateNumberOfItems)(row.childElementCount, end);
  });
});

const menu = document.querySelector('.menu');
const popMenu = document.querySelector('.popup-menu');

menu.addEventListener('click', () => {
  popMenu.classList.remove('non-active');
  popMenu.classList.add('active');
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  popMenu.classList.remove('active');
  popMenu.classList.add('non-active');
});

/***/ }),

/***/ "./src/modules/card-style.js":
/*!***********************************!*\
  !*** ./src/modules/card-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const chooseStyle = (type, modal) => {
  switch (type) {
    case 'fighting':
      modal.style.background = '#7B3C1388';
      break;
    case 'flying':
      modal.style.background = '#F1F1F188';
      break;
    case 'poison':
      modal.style.background = '#AC62C388';
      break;
    case 'ground':
      modal.style.background = '#DC6C3388';
      break;
    case 'rock':
      modal.style.background = '#BEAD7F88';
      break;
    case 'ghost':
      modal.style.background = '#4865A988';
      break;
    case 'bug':
      modal.style.background = '#7CB90088';
      break;
    case 'steel':
      modal.style.background = '#55879A88';
      break;
    case 'fire':
      modal.style.background = '#F28F3E88';
      break;
    case 'water':
      modal.style.background = '#338BD188';
      break;
    case 'grass':
      modal.style.background = '#35B54788';
      break;
    case 'electric':
      modal.style.background = '#EEC60088';
      break;
    case 'psychic':
      modal.style.background = '#F2616F88';
      break;
    case 'ice':
      modal.style.background = '#48C6B688';
      break;
    case 'dragon':
      modal.style.background = '#0069BF88';
      break;
    case 'dark':
      modal.style.background = '#62695F88';
      break;
    case 'fairy':
      modal.style.background = '#EE82DF88';
      break;

    default:
      modal.style.background = '#8A929A88';
      break;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseStyle);

/***/ }),

/***/ "./src/modules/comment-popup.js":
/*!**************************************!*\
  !*** ./src/modules/comment-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateUl": () => (/* binding */ updateUl)
/* harmony export */ });
/* harmony import */ var _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involment-comment.js */ "./src/modules/involment-comment.js");


const updateUl = (data, ul, h3) => {
  ul.innerHTML = '';
  if (data.length > 0) {
    data.forEach((child) => {
      const commentLi = document.createElement('li');
      commentLi.classList.add('comment-li');

      const usernameP = document.createElement('p');
      usernameP.textContent = `user: ${child.username}`;

      const commentP = document.createElement('p');
      commentP.textContent = `coment: ${child.comment}`;

      const dateP = document.createElement('p');
      dateP.classList.add('ul-date');
      dateP.textContent = `${child.creation_date}`;

      commentLi.appendChild(usernameP);
      commentLi.appendChild(commentP);
      commentLi.appendChild(dateP);
      ul.appendChild(commentLi);
    });
  }
  h3.textContent = `coments (${data.length})`;
};

const createCommentPopup = async (pokemon) => {
  const commentWrapper = document.querySelector('.modal-wrapper');
  commentWrapper.style.zIndex = 99;

  const commentModal = document.createElement('div');
  commentModal.classList.add('modal', 'comments');

  const h3 = document.createElement('h3');
  h3.classList.add('modal-h3');
  h3.textContent = 'coments';

  const commentsData = await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComment(pokemon.id);
  const commentUl = document.createElement('ul');
  commentUl.classList.add('modal-ul');
  if (commentsData.error) {
    h3.textContent = 'coments (0)';
  } else {
    updateUl(commentsData, commentUl, h3);
  }
  // create comments

  // create form
  const form = document.createElement('form');
  const p = document.createElement('p');
  p.textContent = 'Add your comment';
  p.classList.add('form-p');
  form.appendChild(p);

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.placeholder = 'Your name';
  inputName.classList.add('form-input');
  form.appendChild(inputName);

  const inputComments = document.createElement('textArea');
  inputComments.placeholder = 'Your comment of the pokemon';
  inputComments.classList.add('form-textarea');
  form.appendChild(inputComments);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.value = 'Submit';
  inputSubmit.classList.add('form-submit');
  form.appendChild(inputSubmit);

  inputSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (inputName.value.trim() === '') {
      inputName.placeholder = 'please enter your name';
    } else if (inputComments.value.trim() === '') {
      inputComments.placeholder = 'please enter your descripion or comment';
    } else {
      await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment({
        item_id: pokemon.id,
        username: inputName.value,
        comment: inputComments.value,
      });
      const newData = await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComment(pokemon.id);
      updateUl(newData, commentUl, h3);

      inputComments.value = '';
      inputName.value = '';
    }
  });

  // delete the modal
  window.addEventListener('click', (e) => {
    if (e.target === commentWrapper) {
      commentWrapper.style.zIndex = -1;
      commentModal.remove();
    }
  });

  // appending the childs in order

  commentModal.appendChild(h3);
  commentModal.appendChild(commentUl);
  commentModal.appendChild(form);
  commentWrapper.appendChild(commentModal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommentPopup);

/***/ }),

/***/ "./src/modules/create-card.js":
/*!************************************!*\
  !*** ./src/modules/create-card.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _involvement_post_likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement-post-likes.js */ "./src/modules/involvement-post-likes.js");
/* harmony import */ var _involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement-fetch-likes.js */ "./src/modules/involvement-fetch-likes.js");
/* harmony import */ var _get_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-values.js */ "./src/modules/get-values.js");
/* harmony import */ var _popup_creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-creator.js */ "./src/modules/popup-creator.js");
/* harmony import */ var _comment_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-popup.js */ "./src/modules/comment-popup.js");
/* eslint-disable no-console, radix */






const creatCard = (pokemon) => {
  const row = document.getElementById('row');
  const col = document.createElement('div');
  col.classList.add('single-card');

  const cardImg = document.createElement('div');
  cardImg.style.backgroundImage = `url(${pokemon.sprites.other['official-artwork'].front_default})`;
  cardImg.classList.add('img-card', 'bounce-3');
  col.appendChild(cardImg);

  const description = document.createElement('div');
  description.classList.add('description');

  const cardName = document.createElement('h2');
  cardName.classList.add('pokemon-name');
  cardName.innerText = pokemon.forms[0].name;
  description.appendChild(cardName);

  const like = document.createElement('div');
  like.classList.add('like');

  const aTag = document.createElement('a');
  aTag.href = '#';

  const iTag = document.createElement('i');
  iTag.classList.add('fa-solid', 'fa-heart');
  iTag.id = pokemon.id;

  aTag.appendChild(iTag);
  like.appendChild(aTag);

  col.appendChild(description);

  const likeCount = document.createElement('p');
  likeCount.classList.add('like-count');
  likeCount.innerText = '0 likes';

  like.appendChild(likeCount);
  description.appendChild(like);

  const pokeAction = document.createElement('div');
  pokeAction.classList.add('poke-action');

  const pokeActionBtnInfo = document.createElement('button');
  pokeActionBtnInfo.attributes.type = 'button';
  pokeActionBtnInfo.innerText = 'Information';
  pokeActionBtnInfo.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnInfo);

  const pokeActionBtnComments = document.createElement('button');
  pokeActionBtnComments.attributes.type = 'button';
  pokeActionBtnComments.innerText = 'Comments';
  pokeActionBtnComments.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnComments);

  // * create infoPopup
  pokeActionBtnInfo.addEventListener('click', () => {
    (0,_popup_creator_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_get_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon));
  });

  // * create commentPopup
  pokeActionBtnComments.addEventListener('click', () => {
    (0,_comment_popup_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_get_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon));
  });

  col.appendChild(description);
  col.appendChild(pokeAction);

  row.appendChild(col);

  setTimeout(() => (0,_involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemon.id.toString(), likeCount)
    .catch((error) => {
      console.log(error);
    }), 1000);

  iTag.addEventListener('click', (e) => {
    const likes = parseInt(likeCount.innerText.split(' ')[0]);
    likeCount.innerText = `${likes + 1} likes`;
    (0,_involvement_post_likes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, likeCount.innerText.split(' ')[0])
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
    (0,_involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.id, likeCount)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creatCard);

/***/ }),

/***/ "./src/modules/get-values.js":
/*!***********************************!*\
  !*** ./src/modules/get-values.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValues = (pokemon) => {
  const heldItems = [];
  if (pokemon.held_items.length === 0) {
    heldItems.push('cannot drop any items');
  } else {
    for (let index = 0; index < 1; index += 1) {
      heldItems.push(`${pokemon.held_items[index].item.name}`);
    }
  }

  const types = [];
  pokemon.types.forEach((element) => types.push(`${element.type.name}`));

  const games = [];
  if (pokemon.game_indices.length === 0) {
    games.push('has not appear yet or is on new games');
  } else {
    for (let index = 0; index < 2; index += 1) {
      games.push(`${pokemon.game_indices[index].version.name}`);
    }
  }

  const arr = {
    img: pokemon.sprites.other['official-artwork'].front_default,
    name: pokemon.name,
    items: heldItems.join(', '),
    type: types.join(', '),
    games: games.join(', '),
    exp: pokemon.base_experience,
    id: pokemon.id,
  };
  return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValues);


/***/ }),

/***/ "./src/modules/involment-comment.js":
/*!******************************************!*\
  !*** ./src/modules/involment-comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const key = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/`;

const involvementPostComments = (data) => fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

const involvementFetchLikes = async (id) => {
  try {
    return await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/?item_id=${id}`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  postComment: involvementPostComments,
  getComment: involvementFetchLikes,
});

/***/ }),

/***/ "./src/modules/involvement-fetch-likes.js":
/*!************************************************!*\
  !*** ./src/modules/involvement-fetch-likes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementFetchLikes = (pokemonId, likeCount) => fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pokemon) => {
      if (pokemon.item_id === pokemonId) {
        likeCount.innerText = `${pokemon.likes} likes`;
      }
    });
  });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementFetchLikes);

/***/ }),

/***/ "./src/modules/involvement-post-likes.js":
/*!***********************************************!*\
  !*** ./src/modules/involvement-post-likes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-console, consistent-return */
const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementPostLikes = async (e, likes) => {
  try {
    return await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: e.target.id,
        likes,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementPostLikes);

/***/ }),

/***/ "./src/modules/pokemon-api.js":
/*!************************************!*\
  !*** ./src/modules/pokemon-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateNumberOfItems": () => (/* binding */ calculateNumberOfItems),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "fetchApi": () => (/* binding */ fetchApi),
/* harmony export */   "randomNumber": () => (/* binding */ randomNumber),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* eslint-disable no-console */
// generate random number betweenn 20 and 50
const randomNumber = () => Math.floor(Math.random() * (50 - 20 + 1)) + 20;

const start = randomNumber();
const end = randomNumber();

// a promise function to make a fetch request to the API
const fetchApi = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  return response.json();
};

const calculateNumberOfItems = (count, end) => {
  if (count === end) {
    return count;
  }
  return 0;
};


/***/ }),

/***/ "./src/modules/popup-creator.js":
/*!**************************************!*\
  !*** ./src/modules/popup-creator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-style.js */ "./src/modules/card-style.js");


const createPopup = (item) => {
  // get modal wrapper and create modal individually
  const modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.style.zIndex = 99;
  const modal = document.createElement('div');
  modal.classList.add('modal');
  (0,_card_style_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item.type.split(',')[0], modal);
  // create img
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', item.img);
  img.setAttribute('alt', `img of ${item.name}`);
  img.classList.add('modal-img');
  divImg.appendChild(img);

  // create title
  const title = document.createElement('h2');
  title.textContent = item.name;
  // create info div
  const divInfo = document.createElement('div');
  divInfo.classList.add('modal-information');
  // create info p
  const infoItem = document.createElement('p');
  infoItem.classList.add('information-item');
  infoItem.innerHTML = `<b>items:</b> ${item.items}`;
  divInfo.appendChild(infoItem);

  const infoType = document.createElement('p');
  infoType.classList.add('information-games');
  infoType.innerHTML = `<b>type: </b>${item.type}`;
  divInfo.appendChild(infoType);

  const infoBasicExp = document.createElement('p');
  infoBasicExp.classList.add('information-games');
  infoBasicExp.innerHTML = `<b>base exp:</b> ${item.exp}`;
  divInfo.appendChild(infoBasicExp);

  const infoGames = document.createElement('p');
  infoGames.classList.add('information-games');
  infoGames.innerHTML = `<b>games:</b> ${item.games}`;
  divInfo.appendChild(infoGames);

  modal.appendChild(divImg);
  modal.appendChild(title);
  modal.appendChild(divInfo);
  modalWrapper.appendChild(modal);

  window.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
      modalWrapper.style.zIndex = -1;
      modal.remove();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZ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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY2FyZC1zdHlsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY29tbWVudC1wb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2dldC12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2ludm9sbWVudC1jb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudC1mZXRjaC1saWtlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnQtcG9zdC1saWtlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvcG9rZW1vbi1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3BvcHVwLWNyZWF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUQXV3cTFIdWxNY2hKRGtoOVNQczZyaGFQeXJBNGlUWGYxUncmdXNxcD1DQVUpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiAyJSAxMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcbn1cXG5cXG4uaGVhZC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxufVxcblxcbi5uYXYtdGV4dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2YmFyLW5hdiB7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4uc3BvdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnNwb3RsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNob21lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzZkYjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5zZWxlY3Q6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLXZpc2libGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMzUwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2luZ2xlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIGJveC1zaGFkb3c6ICM4OWQ0Y2YgMCAwIDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1pbi13aWR0aDogMjQ4cHg7XFxuICBtYXgtd2lkdGg6IDMxOHB4O1xcbn1cXG5cXG4uY29sIGltZyB7XFxuICB3aWR0aDogMTVyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbi5pbWctY2FyZCB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaW1nLWNhcmQ6aG92ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm91bmNlLTMge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS0zO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG59XFxuXFxuLmJvdW5jZS00IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtMztcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLTMge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7IH1cXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gLnBva2Vtb24tbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9rZS1hY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4ubW9kYWwtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBVc2UgZm9yIFNhZmFyaSA5KywgRWRnZSAxNysgKG5vdCBhIG1pc3Rha2UpIGFuZCBpT1MgU2FmYXJpIDkuMisgKi9cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogU3VwcG9ydGVkIGluIENocm9tZSA3NiAqL1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsLmNvbW1lbnRzIHtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbmltYXRpb246IG5vbmU7XFxufVxcblxcbi5tb2RhbCAqIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1pbmZvcm1hdGlvbiAqIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNvbW1lbnRzIGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLm1vZGFsLXVsIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtdWwgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5tb2RhbC11bCBsaSAqIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bC1kYXRlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1wIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm0tdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXG59XFxuXFxuLmZvcm0tc3VibWl0IHtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3YzE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTJhN2MxIDAlLCAjYjNmNmQ4IDc0JSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxufVxcblxcbi5ub3REaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSByb3RhdGUzZCgwLCAyLCAwLCA2MGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgcm90YXRlM2QoMCwgMiwgMCwgMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDApIHJvdGF0ZSgxZGVnKTsgfVxcbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wge1xcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcbiAgICBtYXgtd2lkdGg6IDMxOHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLWltZyB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXG4gIH1cXG5cXG4gIC5vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm9uLWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTAlO1xcbiAgfVxcblxcbiAgLm9uLWRlc2t0b3AgYSB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmRlc2t0b3AtYSB7XFxuICAgIGNvbG9yOiAjNTU1O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5vbi1kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTAlO1xcbiAgfVxcblxcbiAgLmRlZmF1bHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjNmRiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxuICB9XFxuXFxuICAucG9wdXAtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiAzJTtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5jbG9zZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtYSB7XFxuICAgIGNvbG9yOiAjNTU1O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gIH1cXG59XFxuXFxuLyogY2xhc3MgYWN0aXZlICovXFxuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubm9uLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4SEFBOEg7RUFDOUgsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7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V0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUNGOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUQXV3cTFIdWxNY2hKRGtoOVNQczZyaGFQeXJBNGlUWGYxUncmdXNxcD1DQVUpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiAyJSAxMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcbn1cXG5cXG4uaGVhZC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxufVxcblxcbi5uYXYtdGV4dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2YmFyLW5hdiB7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4uc3BvdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnNwb3RsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNob21lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzZkYjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5zZWxlY3Q6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLXZpc2libGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMzUwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2luZ2xlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIGJveC1zaGFkb3c6ICM4OWQ0Y2YgMCAwIDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1pbi13aWR0aDogMjQ4cHg7XFxuICBtYXgtd2lkdGg6IDMxOHB4O1xcbn1cXG5cXG4uY29sIGltZyB7XFxuICB3aWR0aDogMTVyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbi5pbWctY2FyZCB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaW1nLWNhcmQ6aG92ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm91bmNlLTMge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS0zO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG59XFxuXFxuLmJvdW5jZS00IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtMztcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLTMge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7IH1cXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gLnBva2Vtb24tbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9rZS1hY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4ubW9kYWwtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBVc2UgZm9yIFNhZmFyaSA5KywgRWRnZSAxNysgKG5vdCBhIG1pc3Rha2UpIGFuZCBpT1MgU2FmYXJpIDkuMisgKi9cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogU3VwcG9ydGVkIGluIENocm9tZSA3NiAqL1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsLmNvbW1lbnRzIHtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbmltYXRpb246IG5vbmU7XFxufVxcblxcbi5tb2RhbCAqIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1pbmZvcm1hdGlvbiAqIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNvbW1lbnRzIGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLm1vZGFsLXVsIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtdWwgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5tb2RhbC11bCBsaSAqIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51bC1kYXRlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1wIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm0tdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXG59XFxuXFxuLmZvcm0tc3VibWl0IHtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3YzE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTJhN2MxIDAlLCAjYjNmNmQ4IDc0JSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxufVxcblxcbi5ub3REaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSByb3RhdGUzZCgwLCAyLCAwLCA2MGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgcm90YXRlM2QoMCwgMiwgMCwgMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDApIHJvdGF0ZSgxZGVnKTsgfVxcbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wge1xcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcbiAgICBtYXgtd2lkdGg6IDMxOHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLWltZyB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXG4gIH1cXG5cXG4gIC5vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm9uLWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTAlO1xcbiAgfVxcblxcbiAgLm9uLWRlc2t0b3AgYSB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmRlc2t0b3AtYSB7XFxuICAgIGNvbG9yOiAjNTU1O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5vbi1kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5vbi1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTAlO1xcbiAgfVxcblxcbiAgLmRlZmF1bHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjNmRiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxuICB9XFxuXFxuICAucG9wdXAtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiAzJTtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5jbG9zZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtYSB7XFxuICAgIGNvbG9yOiAjNTU1O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gIH1cXG59XFxuXFxuLyogY2xhc3MgYWN0aXZlICovXFxuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubm9uLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0Q2FyZCBmcm9tICcuL21vZHVsZXMvY3JlYXRlLWNhcmQuanMnO1xuaW1wb3J0IHtcbiAgZmV0Y2hBcGksIGNhbGN1bGF0ZU51bWJlck9mSXRlbXMsIHJhbmRvbU51bWJlciwgZW5kLFxufSBmcm9tICcuL21vZHVsZXMvcG9rZW1vbi1hcGkuanMnO1xuXG5jb25zdCBzcG90bGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGxpZ2h0Jyk7XG5jb25zdCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93Jyk7XG5jb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3Rpb24nKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoc2VsZWN0aW9uLnZhbHVlKTtcbiAgY29uc3QgcG9rZW1vblJlc3VsdCA9IHJlcy5wb2tlbW9uO1xuICBjb25zdCBsZXNzUG9rZW1vbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZDsgaSArPSAxKSB7XG4gICAgbGVzc1Bva2Vtb24ucHVzaChwb2tlbW9uUmVzdWx0W2ldKTtcbiAgfVxuICBsZXNzUG9rZW1vbi5mb3JFYWNoKGFzeW5jIChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHBva2Vtb24ucG9rZW1vbjtcbiAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgcG9rZW1vbkpzb24gPSBhd2FpdCBwb2tlbW9uRGF0YS5qc29uKCk7XG4gICAgY3JlYXRDYXJkKHBva2Vtb25Kc29uKTtcbiAgICBzcG90bGlnaHQuaW5uZXJUZXh0ID0gY2FsY3VsYXRlTnVtYmVyT2ZJdGVtcyhyb3cuY2hpbGRFbGVtZW50Q291bnQsIGVuZCk7XG4gIH0pO1xufSk7XG5cbnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3cnKS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoc2VsZWN0aW9uLnZhbHVlKTtcbiAgY29uc3QgcG9rZW1vblJlc3VsdCA9IHJlcy5wb2tlbW9uO1xuICBjb25zdCBsZXNzUG9rZW1vbiA9IFtdO1xuICBjb25zdCBlbmQgPSByYW5kb21OdW1iZXIoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmQ7IGkgKz0gMSkge1xuICAgIGxlc3NQb2tlbW9uLnB1c2gocG9rZW1vblJlc3VsdFtpXSk7XG4gIH1cbiAgbGVzc1Bva2Vtb24uZm9yRWFjaChhc3luYyAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgdXJsIH0gPSBwb2tlbW9uLnBva2Vtb247XG4gICAgY29uc3QgcG9rZW1vbkRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHBva2Vtb25Kc29uID0gYXdhaXQgcG9rZW1vbkRhdGEuanNvbigpO1xuICAgIGNyZWF0Q2FyZChwb2tlbW9uSnNvbik7XG4gICAgc3BvdGxpZ2h0LmlubmVyVGV4dCA9IGNhbGN1bGF0ZU51bWJlck9mSXRlbXMocm93LmNoaWxkRWxlbWVudENvdW50LCBlbmQpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IHBvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbWVudScpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3BNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1hY3RpdmUnKTtcbiAgcG9wTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIHBvcE1lbnUuY2xhc3NMaXN0LmFkZCgnbm9uLWFjdGl2ZScpO1xufSk7IiwiY29uc3QgY2hvb3NlU3R5bGUgPSAodHlwZSwgbW9kYWwpID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZmlnaHRpbmcnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjN0IzQzEzODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmx5aW5nJzpcbiAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSAnI0YxRjFGMTg4JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BvaXNvbic6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBQzYyQzM4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91bmQnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjREM2QzMzODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncm9jayc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNCRUFEN0Y4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdnaG9zdCc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM0ODY1QTk4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdidWcnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjN0NCOTAwODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3RlZWwnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjNTU4NzlBODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlyZSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGMjhGM0U4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3YXRlcic6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzMzhCRDE4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncmFzcyc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNUI1NDc4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbGVjdHJpYyc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNFRUM2MDA4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwc3ljaGljJzpcbiAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSAnI0YyNjE2Rjg4JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ljZSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM0OEM2QjY4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmFnb24nOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDA2OUJGODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGFyayc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM2MjY5NUY4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmYWlyeSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNFRTgyREY4OCc7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM4QTkyOUE4OCc7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlU3R5bGU7IiwiaW1wb3J0IGNvbW1lbnRBUEkgZnJvbSAnLi9pbnZvbG1lbnQtY29tbWVudC5qcyc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVbCA9IChkYXRhLCB1bCwgaDMpID0+IHtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBkYXRhLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29tbWVudExpLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtbGknKTtcblxuICAgICAgY29uc3QgdXNlcm5hbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdXNlcm5hbWVQLnRleHRDb250ZW50ID0gYHVzZXI6ICR7Y2hpbGQudXNlcm5hbWV9YDtcblxuICAgICAgY29uc3QgY29tbWVudFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb21tZW50UC50ZXh0Q29udGVudCA9IGBjb21lbnQ6ICR7Y2hpbGQuY29tbWVudH1gO1xuXG4gICAgICBjb25zdCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ3VsLWRhdGUnKTtcbiAgICAgIGRhdGVQLnRleHRDb250ZW50ID0gYCR7Y2hpbGQuY3JlYXRpb25fZGF0ZX1gO1xuXG4gICAgICBjb21tZW50TGkuYXBwZW5kQ2hpbGQodXNlcm5hbWVQKTtcbiAgICAgIGNvbW1lbnRMaS5hcHBlbmRDaGlsZChjb21tZW50UCk7XG4gICAgICBjb21tZW50TGkuYXBwZW5kQ2hpbGQoZGF0ZVApO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQoY29tbWVudExpKTtcbiAgICB9KTtcbiAgfVxuICBoMy50ZXh0Q29udGVudCA9IGBjb21lbnRzICgke2RhdGEubGVuZ3RofSlgO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudFBvcHVwID0gYXN5bmMgKHBva2Vtb24pID0+IHtcbiAgY29uc3QgY29tbWVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xuICBjb21tZW50V3JhcHBlci5zdHlsZS56SW5kZXggPSA5OTtcblxuICBjb25zdCBjb21tZW50TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2NvbW1lbnRzJyk7XG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oMycpO1xuICBoMy50ZXh0Q29udGVudCA9ICdjb21lbnRzJztcblxuICBjb25zdCBjb21tZW50c0RhdGEgPSBhd2FpdCBjb21tZW50QVBJLmdldENvbW1lbnQocG9rZW1vbi5pZCk7XG4gIGNvbnN0IGNvbW1lbnRVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbW1lbnRVbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC11bCcpO1xuICBpZiAoY29tbWVudHNEYXRhLmVycm9yKSB7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnY29tZW50cyAoMCknO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZVVsKGNvbW1lbnRzRGF0YSwgY29tbWVudFVsLCBoMyk7XG4gIH1cbiAgLy8gY3JlYXRlIGNvbW1lbnRzXG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBjb21tZW50JztcbiAgcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXAnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICBjb25zdCBpbnB1dENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKTtcbiAgaW5wdXRDb21tZW50cy5wbGFjZWhvbGRlciA9ICdZb3VyIGNvbW1lbnQgb2YgdGhlIHBva2Vtb24nO1xuICBpbnB1dENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dGFyZWEnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dENvbW1lbnRzKTtcblxuICBjb25zdCBpbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgaW5wdXRTdWJtaXQudmFsdWUgPSAnU3VibWl0JztcbiAgaW5wdXRTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zdWJtaXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFN1Ym1pdCk7XG5cbiAgaW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaW5wdXROYW1lLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9ICdwbGVhc2UgZW50ZXIgeW91ciBuYW1lJztcbiAgICB9IGVsc2UgaWYgKGlucHV0Q29tbWVudHMudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgaW5wdXRDb21tZW50cy5wbGFjZWhvbGRlciA9ICdwbGVhc2UgZW50ZXIgeW91ciBkZXNjcmlwaW9uIG9yIGNvbW1lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBjb21tZW50QVBJLnBvc3RDb21tZW50KHtcbiAgICAgICAgaXRlbV9pZDogcG9rZW1vbi5pZCxcbiAgICAgICAgdXNlcm5hbWU6IGlucHV0TmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogaW5wdXRDb21tZW50cy52YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IGNvbW1lbnRBUEkuZ2V0Q29tbWVudChwb2tlbW9uLmlkKTtcbiAgICAgIHVwZGF0ZVVsKG5ld0RhdGEsIGNvbW1lbnRVbCwgaDMpO1xuXG4gICAgICBpbnB1dENvbW1lbnRzLnZhbHVlID0gJyc7XG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGRlbGV0ZSB0aGUgbW9kYWxcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGNvbW1lbnRXcmFwcGVyKSB7XG4gICAgICBjb21tZW50V3JhcHBlci5zdHlsZS56SW5kZXggPSAtMTtcbiAgICAgIGNvbW1lbnRNb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGFwcGVuZGluZyB0aGUgY2hpbGRzIGluIG9yZGVyXG5cbiAgY29tbWVudE1vZGFsLmFwcGVuZENoaWxkKGgzKTtcbiAgY29tbWVudE1vZGFsLmFwcGVuZENoaWxkKGNvbW1lbnRVbCk7XG4gIGNvbW1lbnRNb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29tbWVudE1vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbW1lbnRQb3B1cDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCByYWRpeCAqL1xuaW1wb3J0IGludm9sdmVtZW50UG9zdExpa2VzIGZyb20gJy4vaW52b2x2ZW1lbnQtcG9zdC1saWtlcy5qcyc7XG5pbXBvcnQgaW52b2x2ZW1lbnRGZXRjaExpa2VzIGZyb20gJy4vaW52b2x2ZW1lbnQtZmV0Y2gtbGlrZXMuanMnO1xuaW1wb3J0IGdldFZhbHVlcyBmcm9tICcuL2dldC12YWx1ZXMuanMnO1xuaW1wb3J0IGNyZWF0ZVBvcHVwIGZyb20gJy4vcG9wdXAtY3JlYXRvci5qcyc7XG5pbXBvcnQgY3JlYXRlQ29tbWVudFBvcHVwIGZyb20gJy4vY29tbWVudC1wb3B1cC5qcyc7XG5cbmNvbnN0IGNyZWF0Q2FyZCA9IChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3cnKTtcbiAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbC5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtY2FyZCcpO1xuXG4gIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cG9rZW1vbi5zcHJpdGVzLm90aGVyWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdH0pYDtcbiAgY2FyZEltZy5jbGFzc0xpc3QuYWRkKCdpbWctY2FyZCcsICdib3VuY2UtMycpO1xuICBjb2wuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24tbmFtZScpO1xuICBjYXJkTmFtZS5pbm5lclRleHQgPSBwb2tlbW9uLmZvcm1zWzBdLm5hbWU7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcblxuICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZScpO1xuXG4gIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFUYWcuaHJlZiA9ICcjJztcblxuICBjb25zdCBpVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpVGFnLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWhlYXJ0Jyk7XG4gIGlUYWcuaWQgPSBwb2tlbW9uLmlkO1xuXG4gIGFUYWcuYXBwZW5kQ2hpbGQoaVRhZyk7XG4gIGxpa2UuYXBwZW5kQ2hpbGQoYVRhZyk7XG5cbiAgY29sLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxpa2VDb3VudC5jbGFzc0xpc3QuYWRkKCdsaWtlLWNvdW50Jyk7XG4gIGxpa2VDb3VudC5pbm5lclRleHQgPSAnMCBsaWtlcyc7XG5cbiAgbGlrZS5hcHBlbmRDaGlsZChsaWtlQ291bnQpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsaWtlKTtcblxuICBjb25zdCBwb2tlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBva2VBY3Rpb24uY2xhc3NMaXN0LmFkZCgncG9rZS1hY3Rpb24nKTtcblxuICBjb25zdCBwb2tlQWN0aW9uQnRuSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwb2tlQWN0aW9uQnRuSW5mby5hdHRyaWJ1dGVzLnR5cGUgPSAnYnV0dG9uJztcbiAgcG9rZUFjdGlvbkJ0bkluZm8uaW5uZXJUZXh0ID0gJ0luZm9ybWF0aW9uJztcbiAgcG9rZUFjdGlvbkJ0bkluZm8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1vdXRsaW5lLWRhcmsnKTtcbiAgcG9rZUFjdGlvbi5hcHBlbmRDaGlsZChwb2tlQWN0aW9uQnRuSW5mbyk7XG5cbiAgY29uc3QgcG9rZUFjdGlvbkJ0bkNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBva2VBY3Rpb25CdG5Db21tZW50cy5hdHRyaWJ1dGVzLnR5cGUgPSAnYnV0dG9uJztcbiAgcG9rZUFjdGlvbkJ0bkNvbW1lbnRzLmlubmVyVGV4dCA9ICdDb21tZW50cyc7XG4gIHBva2VBY3Rpb25CdG5Db21tZW50cy5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLW91dGxpbmUtZGFyaycpO1xuICBwb2tlQWN0aW9uLmFwcGVuZENoaWxkKHBva2VBY3Rpb25CdG5Db21tZW50cyk7XG5cbiAgLy8gKiBjcmVhdGUgaW5mb1BvcHVwXG4gIHBva2VBY3Rpb25CdG5JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZVBvcHVwKGdldFZhbHVlcyhwb2tlbW9uKSk7XG4gIH0pO1xuXG4gIC8vICogY3JlYXRlIGNvbW1lbnRQb3B1cFxuICBwb2tlQWN0aW9uQnRuQ29tbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlQ29tbWVudFBvcHVwKGdldFZhbHVlcyhwb2tlbW9uKSk7XG4gIH0pO1xuXG4gIGNvbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbC5hcHBlbmRDaGlsZChwb2tlQWN0aW9uKTtcblxuICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IGludm9sdmVtZW50RmV0Y2hMaWtlcyhwb2tlbW9uLmlkLnRvU3RyaW5nKCksIGxpa2VDb3VudClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSksIDEwMDApO1xuXG4gIGlUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGxpa2VzID0gcGFyc2VJbnQobGlrZUNvdW50LmlubmVyVGV4dC5zcGxpdCgnICcpWzBdKTtcbiAgICBsaWtlQ291bnQuaW5uZXJUZXh0ID0gYCR7bGlrZXMgKyAxfSBsaWtlc2A7XG4gICAgaW52b2x2ZW1lbnRQb3N0TGlrZXMoZSwgbGlrZUNvdW50LmlubmVyVGV4dC5zcGxpdCgnICcpWzBdKVxuICAgICAgLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIGludm9sdmVtZW50RmV0Y2hMaWtlcyhlLnRhcmdldC5pZCwgbGlrZUNvdW50KVxuICAgICAgLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0Q2FyZDsiLCJjb25zdCBnZXRWYWx1ZXMgPSAocG9rZW1vbikgPT4ge1xuICBjb25zdCBoZWxkSXRlbXMgPSBbXTtcbiAgaWYgKHBva2Vtb24uaGVsZF9pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICBoZWxkSXRlbXMucHVzaCgnY2Fubm90IGRyb3AgYW55IGl0ZW1zJyk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE7IGluZGV4ICs9IDEpIHtcbiAgICAgIGhlbGRJdGVtcy5wdXNoKGAke3Bva2Vtb24uaGVsZF9pdGVtc1tpbmRleF0uaXRlbS5uYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHR5cGVzID0gW107XG4gIHBva2Vtb24udHlwZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdHlwZXMucHVzaChgJHtlbGVtZW50LnR5cGUubmFtZX1gKSk7XG5cbiAgY29uc3QgZ2FtZXMgPSBbXTtcbiAgaWYgKHBva2Vtb24uZ2FtZV9pbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIGdhbWVzLnB1c2goJ2hhcyBub3QgYXBwZWFyIHlldCBvciBpcyBvbiBuZXcgZ2FtZXMnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjsgaW5kZXggKz0gMSkge1xuICAgICAgZ2FtZXMucHVzaChgJHtwb2tlbW9uLmdhbWVfaW5kaWNlc1tpbmRleF0udmVyc2lvbi5uYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFyciA9IHtcbiAgICBpbWc6IHBva2Vtb24uc3ByaXRlcy5vdGhlclsnb2ZmaWNpYWwtYXJ0d29yayddLmZyb250X2RlZmF1bHQsXG4gICAgbmFtZTogcG9rZW1vbi5uYW1lLFxuICAgIGl0ZW1zOiBoZWxkSXRlbXMuam9pbignLCAnKSxcbiAgICB0eXBlOiB0eXBlcy5qb2luKCcsICcpLFxuICAgIGdhbWVzOiBnYW1lcy5qb2luKCcsICcpLFxuICAgIGV4cDogcG9rZW1vbi5iYXNlX2V4cGVyaWVuY2UsXG4gICAgaWQ6IHBva2Vtb24uaWQsXG4gIH07XG4gIHJldHVybiBhcnI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRWYWx1ZXM7XG4iLCJjb25zdCBrZXkgPSAnMHJ1Y0JOeFlYWTE3dGpITjA2enknO1xuY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7a2V5fS9jb21tZW50cy9gO1xuXG5jb25zdCBpbnZvbHZlbWVudFBvc3RDb21tZW50cyA9IChkYXRhKSA9PiBmZXRjaChhcGlVcmwsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbn0pO1xuXG5jb25zdCBpbnZvbHZlbWVudEZldGNoTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7a2V5fS9jb21tZW50cy8/aXRlbV9pZD0ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9zdENvbW1lbnQ6IGludm9sdmVtZW50UG9zdENvbW1lbnRzLFxuICBnZXRDb21tZW50OiBpbnZvbHZlbWVudEZldGNoTGlrZXMsXG59OyIsImNvbnN0IGdldEFwcEtleSA9ICcwcnVjQk54WVhZMTd0akhOMDZ6eSc7XG5jb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtnZXRBcHBLZXl9L2xpa2VzL2A7XG5cbmNvbnN0IGludm9sdmVtZW50RmV0Y2hMaWtlcyA9IChwb2tlbW9uSWQsIGxpa2VDb3VudCkgPT4gZmV0Y2goYXBpVXJsKVxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgocG9rZW1vbikgPT4ge1xuICAgICAgaWYgKHBva2Vtb24uaXRlbV9pZCA9PT0gcG9rZW1vbklkKSB7XG4gICAgICAgIGxpa2VDb3VudC5pbm5lclRleHQgPSBgJHtwb2tlbW9uLmxpa2VzfSBsaWtlc2A7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnZvbHZlbWVudEZldGNoTGlrZXM7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgY29uc2lzdGVudC1yZXR1cm4gKi9cbmNvbnN0IGdldEFwcEtleSA9ICcwcnVjQk54WVhZMTd0akhOMDZ6eSc7XG5jb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtnZXRBcHBLZXl9L2xpa2VzL2A7XG5cbmNvbnN0IGludm9sdmVtZW50UG9zdExpa2VzID0gYXN5bmMgKGUsIGxpa2VzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBlLnRhcmdldC5pZCxcbiAgICAgICAgbGlrZXMsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludm9sdmVtZW50UG9zdExpa2VzOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIGdlbmVyYXRlIHJhbmRvbSBudW1iZXIgYmV0d2Vlbm4gMjAgYW5kIDUwXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwIC0gMjAgKyAxKSkgKyAyMDtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gcmFuZG9tTnVtYmVyKCk7XG5leHBvcnQgY29uc3QgZW5kID0gcmFuZG9tTnVtYmVyKCk7XG5cbi8vIGEgcHJvbWlzZSBmdW5jdGlvbiB0byBtYWtlIGEgZmV0Y2ggcmVxdWVzdCB0byB0aGUgQVBJXG5leHBvcnQgY29uc3QgZmV0Y2hBcGkgPSBhc3luYyAodHlwZSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3R5cGUvJHt0eXBlfS9gKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVOdW1iZXJPZkl0ZW1zID0gKGNvdW50LCBlbmQpID0+IHtcbiAgaWYgKGNvdW50ID09PSBlbmQpIHtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuIiwiaW1wb3J0IGNob29zZVN0eWxlIGZyb20gJy4vY2FyZC1zdHlsZS5qcyc7XG5cbmNvbnN0IGNyZWF0ZVBvcHVwID0gKGl0ZW0pID0+IHtcbiAgLy8gZ2V0IG1vZGFsIHdyYXBwZXIgYW5kIGNyZWF0ZSBtb2RhbCBpbmRpdmlkdWFsbHlcbiAgY29uc3QgbW9kYWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcbiAgbW9kYWxXcmFwcGVyLnN0eWxlLnpJbmRleCA9IDk5O1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBjaG9vc2VTdHlsZShpdGVtLnR5cGUuc3BsaXQoJywnKVswXSwgbW9kYWwpO1xuICAvLyBjcmVhdGUgaW1nXG4gIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaXRlbS5pbWcpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBgaW1nIG9mICR7aXRlbS5uYW1lfWApO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1nJyk7XG4gIGRpdkltZy5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIC8vIGNyZWF0ZSB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAvLyBjcmVhdGUgaW5mbyBkaXZcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZJbmZvLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWluZm9ybWF0aW9uJyk7XG4gIC8vIGNyZWF0ZSBpbmZvIHBcbiAgY29uc3QgaW5mb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9JdGVtLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLWl0ZW0nKTtcbiAgaW5mb0l0ZW0uaW5uZXJIVE1MID0gYDxiPml0ZW1zOjwvYj4gJHtpdGVtLml0ZW1zfWA7XG4gIGRpdkluZm8uYXBwZW5kQ2hpbGQoaW5mb0l0ZW0pO1xuXG4gIGNvbnN0IGluZm9UeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvVHlwZS5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbi1nYW1lcycpO1xuICBpbmZvVHlwZS5pbm5lckhUTUwgPSBgPGI+dHlwZTogPC9iPiR7aXRlbS50eXBlfWA7XG4gIGRpdkluZm8uYXBwZW5kQ2hpbGQoaW5mb1R5cGUpO1xuXG4gIGNvbnN0IGluZm9CYXNpY0V4cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb0Jhc2ljRXhwLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLWdhbWVzJyk7XG4gIGluZm9CYXNpY0V4cC5pbm5lckhUTUwgPSBgPGI+YmFzZSBleHA6PC9iPiAke2l0ZW0uZXhwfWA7XG4gIGRpdkluZm8uYXBwZW5kQ2hpbGQoaW5mb0Jhc2ljRXhwKTtcblxuICBjb25zdCBpbmZvR2FtZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9HYW1lcy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbi1nYW1lcycpO1xuICBpbmZvR2FtZXMuaW5uZXJIVE1MID0gYDxiPmdhbWVzOjwvYj4gJHtpdGVtLmdhbWVzfWA7XG4gIGRpdkluZm8uYXBwZW5kQ2hpbGQoaW5mb0dhbWVzKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGRpdkluZm8pO1xuICBtb2RhbFdyYXBwZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbFdyYXBwZXIpIHtcbiAgICAgIG1vZGFsV3JhcHBlci5zdHlsZS56SW5kZXggPSAtMTtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3B1cDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=