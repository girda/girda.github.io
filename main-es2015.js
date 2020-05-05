(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/am-charts/am-charts.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/am-charts/am-charts.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"charts\">\n\t<div class=\"chart-debit\"></div>\n\t<div class=\"chart-credit\"></div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help-page/help-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help-page/help-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>help-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"form\"\n  (ngSubmit)=\"onSubmit()\"\n  class=\"auth\">\n  <h2 class=\"auth__title\">Войти в систему</h2>\n  <div class=\"input\">\n    <label for=\"login\">Логин</label>\n    <input\n      formControlName=\"login\"\n      type=\"text\"\n      id=\"login\"\n    >\n    <span\n      *ngIf=\"form.get('login').invalid && form.get('login').touched\"\n    >\n      <span *ngIf=\"form.get('login').errors['required']\">Обязательное поле.</span>\n      <span *ngIf=\"form.get('login').errors['email']\">Некорректный емейл.</span>\n    </span>\n  </div>\n\n  <div class=\"input\">\n    <label for=\"pass\">Пароль</label>\n    <input\n      formControlName=\"pass\"\n      type=\"password\"\n      id=\"pass\"\n    >\n    <span\n      *ngIf=\"form.get('pass').invalid && form.get('pass').touched\"\n    >\n      <span *ngIf=\"form.get('pass').errors['required']\">Обязательное поле.</span>\n      <span *ngIf=\"form.get('pass').errors['minlength']\">Пароль должен состоять минимум из {{form.get('pass').errors['minlength']['requiredLength']}}. Сейчас - {{form.get('pass').errors['minlength']['actualLength']}}</span>\n    </span>\n  </div>\n\n\n  <button\n    [disabled]=\"form.invalid || form.disabled\"\n    type=\"submit\"\n    class=\"btn\"\n  >Войти</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companies-page/companies-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companies-page/companies-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"board\">-->\n<!--\t<div-->\n\n<!--\t\t*ngFor=\"let indicator of indicators\"-->\n<!--\t\tid=\"{{indicator.id}}\"-->\n<!--\t\tclass=\"indicators\"-->\n<!--\t>-->\n<!--\t\t<div class=\"indicators__title\">{{indicator.title}}</div>-->\n\n<!--\t\t<div-->\n<!--\t\t\t*ngFor=\"let child of indicator.children\"-->\n<!--\t\t\tclass=\"indicators__item\"-->\n<!--\t\t>-->\n<!--\t\t\t<input-->\n<!--          #indicator-->\n<!--\t\t\t\t\t(change)=\"onChangeIndicators($event)\"-->\n<!--\t\t\t\t\t[checked]=\"child.checked\"-->\n<!--\t\t\t\t\ttype=\"checkbox\"-->\n<!--\t\t\t\t\tid=\"{{child.id}}\">-->\n<!--\t\t\t<label for=\"{{child.id}}\">{{child.title}} {{bla}}</label>-->\n<!--\t\t</div>-->\n\n<!--\t</div>-->\n<!--</div>-->\n\n<div class=\"companies-content\">\n\t<app-am-charts></app-am-charts>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-page/register-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-page/register-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>register-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"header__in\">\n      <a routerLink=\"/\">\n        <div class=\"logo\">Никмас</div>\n      </a>\n\n\n      <nav>\n        <ul class=\"nav\">\n          <li\n            routerLinkActive=\"is-active\"\n            class=\"nav__item\">\n            <a\n              routerLink=\"/login\"\n              class=\"nav__link\"\n            >Вход</a>\n          </li>\n          <li class=\"nav__item\">\n            <a routerLink=\"/register\" class=\"nav__link\">Регистрация</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n\n  </div>\n\n</header>\n\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/main-layout/main-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/main-layout/main-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n\t<div class=\"header__in\">\n\t\t<a routerLink=\"/\">\n\t\t\t<div class=\"logo\">Никмас</div>\n\t\t</a>\n\n\t</div>\n</header>\n\n<main class=\"main\">\n\t<div class=\"sidebar\">\n\t\t<div class=\"location-business\">\n\t\t\t<div\n\t\t\t\t*ngFor=\"let country of locationBusiness\"\n\t\t\t\tclass=\"location-business__item\"\n\t\t\t>\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\tid=\"{{country.id}}\"\n\t\t\t\t\t\t(change)=\"onChangeBusiness($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t<label for=\"{{country.id}}\">\n\t\t\t\t\t\t<img src=\"assets/img/{{country.imgSrc}}\" alt=\"\">\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<nav>\n\t\t\t<ul class=\"nav\">\n\t\t\t\t<li\n\t\t\t\t\t*ngFor=\"let link of menu\"\n\t\t\t\t\tclass=\"nav__item\">\n\t\t\t\t\t<a\n\t\t\t\t\t\t(click)=\"toggleAccordion(menu, link)\"\n\t\t\t\t\t\trouterLink=\"/{{link.link}}\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{link.title}}\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\t[class.active]=\"link.active\"\n\t\t\t\t\t\tclass=\"nav__content\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"link.id === 'companies'; else other\">\n\t\t\t\t\t\t\t<div class=\"company\"\n\t\t\t\t\t\t\t\t*ngFor=\"let company of activeCompanies\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label class=\"switch\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\tid=\"{{company.id}}\"\n\t\t\t\t\t\t\t\t\t\t[checked]=\"company.active\"\n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t(change)=\"toggleActiveCompany($event)\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t{{company.title}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ng-template #other>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngFor=\"let item of link.children\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{item.title}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t</div>\n\t<div class=\"content\">\n\t\t<div class=\"board\">\n\t\t\t<div\n\n\t\t\t\t*ngFor=\"let indicator of indicators\"\n\t\t\t\tid=\"{{indicator.id}}\"\n\t\t\t\tclass=\"indicators\"\n\t\t\t>\n\t\t\t\t<div class=\"indicators__title\">{{indicator.title}}</div>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngFor=\"let child of indicator.children\"\n\t\t\t\t\tclass=\"indicators__item\"\n\t\t\t\t\t[class.disabled]=\"child.id !== 'debit' && child.id !== 'credit'\"\n\t\t\t\t>\n\t\t\t\t\t<input\n              #indicator\n\t\t\t\t\t\t\t(change)=\"onChangeIndicators($event)\"\n\t\t\t\t\t\t\t[checked]=\"child.checked\"\n\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\tid=\"{{child.id}}\">\n\t\t\t\t\t<label for=\"{{child.id}}\">{{child.title}} <span><span *ngIf=\"child.total\">$ </span>{{child.total}}</span></label>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</main>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/am-charts/am-charts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/am-charts/am-charts.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart-debit, .chart-credit {\n  height: 500px;\n  width: 50%;\n}\n\n.charts {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW0tY2hhcnRzL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbmlrbWFzL3NyY1xcYXBwXFxhbS1jaGFydHNcXGFtLWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW0tY2hhcnRzL2FtLWNoYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hbS1jaGFydHMvYW0tY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWRlYml0LCAuY2hhcnQtY3JlZGl0IHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNoYXJ0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iLCIuY2hhcnQtZGViaXQsIC5jaGFydC1jcmVkaXQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4uY2hhcnRzIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/am-charts/am-charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/am-charts/am-charts.component.ts ***!
  \**************************************************/
/*! exports provided: AmChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartsComponent", function() { return AmChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _shared_services_am_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/am-charts.service */ "./src/app/shared/services/am-charts.service.ts");





_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
let AmChartsComponent = class AmChartsComponent {
    constructor(zone, amCharts) {
        this.zone = zone;
        this.amCharts = amCharts;
    }
    ngOnInit() {
    }
};
AmChartsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _shared_services_am_charts_service__WEBPACK_IMPORTED_MODULE_4__["AmChartsService"] }
];
AmChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-am-charts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./am-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/am-charts/am-charts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./am-charts.component.scss */ "./src/app/am-charts/am-charts.component.scss")).default]
    })
], AmChartsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "./src/app/shared/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_companies_page_companies_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/companies-page/companies-page.component */ "./src/app/pages/companies-page/companies-page.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help-page/help-page.component */ "./src/app/help-page/help-page.component.ts");










const routes = [
    {
        path: '', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
            { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], children: [
            { path: 'companies', component: _pages_companies_page_companies_page_component__WEBPACK_IMPORTED_MODULE_7__["CompaniesPageComponent"] },
            { path: 'settings', component: _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPageComponent"] },
            { path: 'help', component: _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_9__["HelpPageComponent"] },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'nikmas';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_services_companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/companies.service */ "./src/app/shared/services/companies.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "./src/app/shared/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _pages_companies_page_companies_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/companies-page/companies-page.component */ "./src/app/pages/companies-page/companies-page.component.ts");
/* harmony import */ var _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help-page/help-page.component */ "./src/app/help-page/help-page.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _am_charts_am_charts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./am-charts/am-charts.component */ "./src/app/am-charts/am-charts.component.ts");
/* harmony import */ var _shared_services_am_charts_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/am-charts.service */ "./src/app/shared/services/am-charts.service.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
            _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
            _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_12__["RegisterPageComponent"],
            _pages_companies_page_companies_page_component__WEBPACK_IMPORTED_MODULE_14__["CompaniesPageComponent"],
            _help_page_help_page_component__WEBPACK_IMPORTED_MODULE_15__["HelpPageComponent"],
            _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_16__["SettingsPageComponent"],
            _am_charts_am_charts_component__WEBPACK_IMPORTED_MODULE_17__["AmChartsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _shared_services_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"], _shared_services_am_charts_service__WEBPACK_IMPORTED_MODULE_18__["AmChartsService"], _pages_companies_page_companies_page_component__WEBPACK_IMPORTED_MODULE_14__["CompaniesPageComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/help-page/help-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/help-page/help-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAtcGFnZS9oZWxwLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/help-page/help-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/help-page/help-page.component.ts ***!
  \**************************************************/
/*! exports provided: HelpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageComponent", function() { return HelpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpPageComponent = class HelpPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help-page/help-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help-page.component.scss */ "./src/app/help-page/help-page.component.scss")).default]
    })
], HelpPageComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 50px;\n  color: white;\n  background-color: #2C3849;\n  box-shadow: 0 2px 10px -5px #fff;\n}\n.auth__title {\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.input {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.input input {\n  width: 375px;\n  margin: 0;\n  padding: 10px 20px;\n  border: none;\n}\n.input label {\n  font-size: 18px;\n}\n.btn {\n  font-size: 18px;\n  color: white;\n  width: 375px;\n  background-color: #39485E;\n  margin-top: 40px;\n}\n.btn:disabled {\n  background-color: #cccccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXG5pa21hcy9zcmNcXGFwcFxcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXG5pa21hcy9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUVBLFlBQUE7RUFDQSx5QkNWUztFRFdULGdDQUFBO0FFRkY7QUZJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVGSjtBRk1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUVIRjtBRktFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUVISjtBRk1FO0VBQ0UsZUFBQTtBRUpKO0FGVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FFUEY7QUZRRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRU5KIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG4uYXV0aCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgcGFkZGluZzogNTBweDtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrQmx1ZTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IC01cHggI2ZmZjtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzc1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDM3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ4NUU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIiRkYXJrQmx1ZTogIzJDMzg0OTtcclxuJGJsdWU6ICMzOTQ4NUU7XHJcbiRncmF5OiAjYWFhYWFhO1xyXG4iLCIuYXV0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzg0OTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAtNXB4ICNmZmY7XG59XG4uYXV0aF9fdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAzNzVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbnB1dCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ4NUU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgY3Vyc29yOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPageComponent = class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
        });
        // this.route.queryParams.subscribe((params: Params) => {
        //   if (params['registered']) {
        //     // login success
        //   } else if (params['accessDenied']) {
        //     // login error
        //   }
        // });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        const user = {
            login: this.form.value.login,
            pass: this.form.value.pass
        };
        this.aSub = this.auth.login(user).subscribe(() => {
            console.log('login success');
        }, error => {
            console.log(error);
            this.router.navigate(['/companies']).then(r => {
                console.log(r);
            });
            this.form.enable();
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/companies-page/companies-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/companies-page/companies-page.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  display: flex;\n  justify-content: space-around;\n}\n\n[role=tooltip] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzLXBhZ2UvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuaWttYXMvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW5pZXMtcGFnZVxcY29tcGFuaWVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy1wYWdlL2NvbXBhbmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMtcGFnZS9jb21wYW5pZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuW3JvbGU9XCJ0b29sdGlwXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5bcm9sZT10b29sdGlwXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/companies-page/companies-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/companies-page/companies-page.component.ts ***!
  \******************************************************************/
/*! exports provided: CompaniesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageComponent", function() { return CompaniesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompaniesPageComponent = class CompaniesPageComponent {
    // indicators: any[] = [
    //   {
    //     title: 'Финансы',
    //     id: 'finance',
    //     children: [
    //       {id: 'debit', title: 'На рахунках', checked: true},
    //       {id: 'credit', title: 'Ми винні', checked: false},
    //       {id: 30, title: 'Нам винні', checked: false}
    //     ]
    //   },
    //   {
    //     title: 'Персонал на',
    //     id: 'staff',
    //     children: [
    //       {id: 40, title: 'Кількість, осіб', checked: false},
    //       {id: 50, title: 'Фонд з/п', checked: false},
    //       {id: 60, title: 'Фонд з/п + нарахування', checked: false}
    //     ]
    //   },
    //   {
    //     title: 'Активы на',
    //     id: 'assets',
    //     children: [
    //       {id: 70, title: 'Основні засоби', checked: false},
    //       {id: 80, title: 'Нематеріальні активи', checked: false},
    //       {id: 90, title: 'Залишки на складах', checked: false}
    //     ]
    //   }
    // ];
    // @ViewChildren('indicator', null) indicatorElements;
    //
    // constructor(private companiesService: CompaniesService,
    //             private amCharts: AmChartsService) {
    // }
    //
    ngOnInit() {
        // this.companiesService.updateCompaniesIndicators(this.indicators);
    }
};
CompaniesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companies-page/companies-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies-page.component.scss */ "./src/app/pages/companies-page/companies-page.component.scss")).default]
    })
], CompaniesPageComponent);



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterPageComponent = class RegisterPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-page/register-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/register-page/register-page.component.scss")).default]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsPageComponent = class SettingsPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/pages/settings-page/settings-page.component.scss")).default]
    })
], SettingsPageComponent);



/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\n  display: flex;\n  height: 100%;\n}\n.nav__item {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.nav__link {\n  font-size: 18px;\n  color: white;\n}\n.main {\n  position: relative;\n  min-height: calc(100vh - 56px);\n  background-color: #39485E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aC1sYXlvdXQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuaWttYXMvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0c1xcYXV0aC1sYXlvdXRcXGF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0o7QURHQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFFQSx5QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAmX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICB9XHJcbiAgJl9fbGluayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDg1RTtcclxufVxyXG4iLCIubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm5hdl9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5uYXZfX2xpbmsge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDg1RTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/shared/layouts/auth-layout/auth-layout.component.scss")).default]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  position: relative;\n  min-height: calc(100vh - 56px);\n}\n\n.location-business {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 30px;\n  background-color: #39485E;\n}\n\n.location-business input {\n  margin-right: 5px;\n}\n\n.location-business img {\n  width: 44px;\n  height: 44px;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav__item a {\n  display: block;\n  padding: 15px 30px;\n  font-size: 18px;\n  color: white;\n  background-color: #2C3849;\n  border-bottom: 2px solid #39485E;\n}\n\n.nav__content {\n  display: none;\n}\n\n.nav__content.active {\n  display: block;\n}\n\n.sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 340px;\n  background-color: #39485E;\n  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.content {\n  margin-left: 340px;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 30px;\n  background-color: white;\n  transition: transform 0.3s ease;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: #aaaaaa;\n  transition: 0.4s;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n  background-color: #39485E;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.company {\n  display: flex;\n  align-items: center;\n  padding: 24px 30px;\n  color: white;\n  border-bottom: 2px solid #2C3849;\n}\n\n.company .switch {\n  margin-right: 20px;\n  flex-shrink: 0;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  padding: 20px 0;\n  margin-bottom: 40px;\n  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.board label {\n  display: flex;\n  justify-content: space-between;\n  width: 240px;\n}\n\n.indicators__item {\n  display: flex;\n  align-items: center;\n}\n\n.indicators__item input {\n  margin-right: 15px;\n}\n\n.indicators__item.disabled {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuaWttYXMvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0c1xcbWFpbi1sYXlvdXRcXG1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dHMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuaWttYXMvc3JjXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkVYSztBRFVQOztBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FETUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJFbENLO0VGbUNMLGdDQUFBO0FDSk47O0FET0U7RUFDRSxhQUFBO0FDTEo7O0FET0k7RUFDRSxjQUFBO0FDTE47O0FEVUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkVwREs7RUZxREwsd0NBQUE7QUNQRjs7QURXQTtFQUNFLGtCQUFBO0FDUkY7O0FEV0EsMkNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSRjs7QURVQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRTNGSztFRjRGTCxnQkFBQTtBQ05GOztBRFdBO0VBQ0UsMkJBQUE7RUFDQSx5QkVwR0s7QUQ0RlA7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ1RKOztBRFlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUNURjs7QURVRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNSSjs7QURjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURhSTtFQUNFLFlBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG4ubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxufVxyXG5cclxuLmxvY2F0aW9uLWJ1c2luZXNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrQmx1ZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICBib3gtc2hhZG93OiAycHggMCAycHggcmdiYSgwLDAsMCwuMSk7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0MHB4O1xyXG59XHJcblxyXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG4uc3dpdGNoIGlucHV0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG4vL2lucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbi8vICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbi8vfVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb21wYW55IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjRweCAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmtCbHVlO1xyXG5cclxuICAmIC5zd2l0Y2gge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG59XHJcbi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3gtc2hhZG93OiAwcHggLTJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaW5kaWNhdG9ycyB7XHJcbiAgJl9faXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG5cbi5sb2NhdGlvbi1idXNpbmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDg1RTtcbn1cbi5sb2NhdGlvbi1idXNpbmVzcyBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxvY2F0aW9uLWJ1c2luZXNzIGltZyB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdl9faXRlbSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzM4NDk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzk0ODVFO1xufVxuLm5hdl9fY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2X19jb250ZW50LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDg1RTtcbiAgYm94LXNoYWRvdzogMnB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ4NUU7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29tcGFueSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJDMzg0OTtcbn1cbi5jb21wYW55IC5zd2l0Y2gge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3gtc2hhZG93OiAwcHggLTJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uYm9hcmQgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmluZGljYXRvcnNfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmluZGljYXRvcnNfX2l0ZW0gaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uaW5kaWNhdG9yc19faXRlbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbn0iLCIkZGFya0JsdWU6ICMyQzM4NDk7XHJcbiRibHVlOiAjMzk0ODVFO1xyXG4kZ3JheTogI2FhYWFhYTtcclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/companies.service */ "./src/app/shared/services/companies.service.ts");
/* harmony import */ var _services_am_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/am-charts.service */ "./src/app/shared/services/am-charts.service.ts");





let MainLayoutComponent = class MainLayoutComponent {
    constructor(http, companiesServices, amCharts) {
        this.http = http;
        this.companiesServices = companiesServices;
        this.amCharts = amCharts;
        this.menu = [
            {
                link: 'companies',
                title: 'Компании',
                id: 'companies',
                active: true,
                children: []
            },
            {
                link: 'settings',
                title: 'Настройки',
                id: 'settings',
                active: false,
                children: [
                    { title: 'child settings 1' },
                    { title: 'child settings 2' }
                ]
            },
            {
                link: 'help',
                title: 'Помощь',
                id: 'help',
                active: false,
                children: [
                    { title: 'child help 1' },
                    { title: 'child help 2' }
                ]
            },
        ];
        this.locationBusiness = [
            {
                id: 'ua',
                title: 'UA',
                imgSrc: 'ua.png'
            },
            {
                id: 'ru',
                title: 'RU',
                imgSrc: 'ru.png'
            },
            {
                id: 'by',
                title: 'BY',
                imgSrc: 'by.png'
            }
        ];
        this.activeCompanies = [];
        this.indicators = [
            {
                title: 'Финансы',
                id: 'finance',
                children: [
                    { id: 'debit', title: 'На рахунках', checked: true },
                    { id: 'credit', title: 'Ми винні', checked: false },
                    { id: 30, title: 'Нам винні', checked: false }
                ]
            },
            {
                title: 'Персонал',
                id: 'staff',
                children: [
                    { id: 40, title: 'Кількість, осіб', checked: false },
                    { id: 50, title: 'Фонд з/п', checked: false },
                    { id: 60, title: 'Фонд з/п + нарахування', checked: false }
                ]
            },
            {
                title: 'Активы',
                id: 'assets',
                children: [
                    { id: 70, title: 'Основні засоби', checked: false },
                    { id: 80, title: 'Нематеріальні активи', checked: false },
                    { id: 90, title: 'Залишки на складах', checked: false }
                ]
            }
        ];
    }
    ngOnInit() {
        this.companiesServices.updateCompaniesIndicators(this.indicators);
        this.companiesServices.getCompanies().then(comp => {
            this.companies = comp;
            this.companies.forEach(company => {
                if (company.active) {
                    this.activeCompanies.push(company);
                }
            });
        });
    }
    onChangeBusiness(event) {
        this.companiesServices.getCompanies().then((companies) => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < companies.length; i++) {
                if (event.target.id === companies[i].parent && !event.target.checked) {
                    for (let j = 0; j < this.activeCompanies.length; j++) {
                        if (this.activeCompanies[j].parent === event.target.id) {
                            this.activeCompanies.splice(j, 1);
                            this.companiesServices.updateActiveCompanies(this.activeCompanies);
                        }
                    }
                }
                else if (event.target.id === companies[i].parent) {
                    this.activeCompanies.push(companies[i]);
                    this.companiesServices.updateActiveCompanies(this.activeCompanies);
                }
            }
            let debit = 0;
            let credit = 0;
            this.activeCompanies.forEach(company => {
                debit += company.finance.debit;
                credit += company.finance.credit;
            });
            this.indicators.forEach(parent => {
                parent.children.forEach(indicator => {
                    if (indicator.id === 'debit') {
                        if (debit === 0) {
                            indicator.total = '';
                        }
                        else {
                            indicator.total = debit;
                        }
                    }
                    if (indicator.id === 'credit') {
                        if (credit === 0) {
                            indicator.total = '';
                        }
                        else {
                            indicator.total = credit;
                        }
                    }
                });
            });
            console.log(this.indicators);
        }, error => console.log(error));
    }
    toggleAccordion(menu, link) {
        // menu.forEach(item => {
        //   if (item !== link) { item.active = false; }
        // });
        link.active ? link.active = false : link.active = true;
    }
    toggleActiveCompany(event) {
        this.activeCompanies.forEach(company => {
            if (+event.target.id === company.id && event.target.checked) {
                company.active = true;
            }
            else if (+event.target.id === company.id && !event.target.checked) {
                company.active = false;
            }
        });
        for (let i = 0; i < this.activeCompanies.length; i++) {
            if (this.activeCompanies[i].active) {
                this.amCharts.render();
                break;
            }
            else if (i === this.activeCompanies.length - 1) {
                this.amCharts.destroy();
            }
        }
    }
    onChangeIndicators(event) {
        this.indicatorElements._results.forEach(input => {
            this.indicators.forEach(indicator => {
                indicator.children.forEach(child => {
                    if (child.id === input.nativeElement.id) {
                        child.checked = input.nativeElement.checked;
                    }
                });
            });
        });
        this.companiesServices.updateCompaniesIndicators(this.indicators);
        let exitFlag = false;
        for (let i = 0; i < this.indicators.length; i++) {
            for (let j = 0; j < this.indicators[i].children.length; j++) {
                if (this.indicators[i].children[j].checked) {
                    this.amCharts.render();
                    exitFlag = true;
                    break;
                }
                else if (i === this.indicators.length - 1 && j === this.indicators[i].children.length - 1) {
                    this.amCharts.destroy();
                }
            }
            if (exitFlag) {
                break;
            }
        }
    }
};
MainLayoutComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] },
    { type: _services_am_charts_service__WEBPACK_IMPORTED_MODULE_4__["AmChartsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('indicator', null)
], MainLayoutComponent.prototype, "indicatorElements", void 0);
MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/main-layout/main-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/shared/layouts/main-layout/main-layout.component.scss")).default]
    })
], MainLayoutComponent);



/***/ }),

/***/ "./src/app/shared/services/am-charts.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/am-charts.service.ts ***!
  \******************************************************/
/*! exports provided: AmChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartsService", function() { return AmChartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies.service */ "./src/app/shared/services/companies.service.ts");






_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
let AmChartsService = class AmChartsService {
    constructor(companiesServices) {
        this.companiesServices = companiesServices;
    }
    destroy() {
        if (this.debit) {
            this.debit.dispose();
        }
        if (this.credit) {
            this.credit.dispose();
        }
    }
    render() {
        if (this.debit) {
            this.debit.dispose();
        }
        if (this.credit) {
            this.credit.dispose();
        }
        let activeCompaniesFlag = false;
        const companies = this.companiesServices.getActiveCompanies();
        const indicators = this.companiesServices.getCompaniesIndicators();
        console.log(companies);
        console.log(indicators);
        companies.forEach(company => {
            if (company.active) {
                activeCompaniesFlag = true;
            }
        });
        if (companies && companies.length && activeCompaniesFlag) {
            indicators.forEach(parent => {
                parent.children.forEach(indicator => {
                    if (indicator.checked) {
                        switch (indicator.id) {
                            case 'debit':
                                this._renderDebit(companies, indicator);
                                break;
                            case 'credit':
                                this._renderCredit(companies, indicator);
                                break;
                        }
                    }
                });
            });
        }
    }
    _renderDebit(companies, indicator) {
        this.debit = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]('chart-debit', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // some extra padding for range labels
        this.debit.paddingBottom = 50;
        // this.debit.cursor = new am4charts.XYCursor();
        // chart.scrollbarX = new am4core.Scrollbar();
        // will use this to store colors of the same items
        let colors = {};
        let categoryAxis = this.debit.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataItems.template.text = '{realName}';
        categoryAxis.adapter.add('tooltipText', function (tooltipText, target) {
            return categoryAxis.tooltipDataItem.dataContext.realName;
        });
        let valueAxis = this.debit.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        valueAxis.min = 0;
        // single column series for all data
        let columnSeries = this.debit.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        columnSeries.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](30);
        columnSeries.tooltipText = '{realName}, {valueY}';
        columnSeries.dataFields.categoryX = 'category';
        columnSeries.dataFields.valueY = 'value';
        // second value axis for quantity
        let valueAxis2 = this.debit.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis2.renderer.opposite = true;
        valueAxis2.syncWithAxis = valueAxis;
        valueAxis2.tooltip.disabled = true;
        // quantity line series
        let lineSeries = this.debit.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        lineSeries.tooltipText = '{valueY}';
        lineSeries.dataFields.categoryX = 'category';
        lineSeries.dataFields.valueY = 'quantity';
        lineSeries.yAxis = valueAxis2;
        lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        lineSeries.stroke = this.debit.colors.getIndex(13);
        lineSeries.fill = lineSeries.stroke;
        lineSeries.strokeWidth = 2;
        lineSeries.snapTooltip = true;
        // when data validated, adjust location of data item based on count
        lineSeries.events.on('datavalidated', function () {
            lineSeries.dataItems.each(function (dataItem) {
                // if count divides by two, location is 0 (on the grid)
                if (dataItem.dataContext.count / 2 == Math.round(dataItem.dataContext.count / 2)) {
                    dataItem.setLocation('categoryX', 0);
                }
                // otherwise location is 0.5 (middle)
                else {
                    dataItem.setLocation('categoryX', 0.5);
                }
            });
        });
        // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
        // columnSeries.columns.template.adapter.add("fill", function(fill, target) {
        //   let name = target.dataItem.dataContext.realName;
        //   if (!colors[name]) {
        //     colors[name] = chart.colors.next();
        //   }
        //   target.stroke = colors[name];
        //   return colors[name];
        // })
        // let rangeTemplate = categoryAxis.axisRanges.template;
        // rangeTemplate.tick.disabled = false;
        // rangeTemplate.tick.location = 0;
        // rangeTemplate.tick.strokeOpacity = 0.6;
        // rangeTemplate.tick.length = 60;
        // rangeTemplate.grid.strokeOpacity = 0.5;
        // rangeTemplate.label.tooltip = new am4core.Tooltip();
        // rangeTemplate.label.tooltip.dy = -10;
        // rangeTemplate.label.cloneTooltip = false;
        ///// DATA
        let chartData = [];
        let lineSeriesData = [];
        let data = {};
        // indicator.forEach(parent => {
        //   console.log(parent);
        //   parent.children.forEach(indicator => {
        //     if (indicator.checked) {
        //
        //
        //     }
        //   });
        // });
        data[indicator.title] = {};
        companies.forEach(company => {
            if (company.active) {
                data[indicator.title][`${company.title.slice(0, 9)}...`] = company.finance.debit;
            }
        });
        console.log(data);
        // process data ant prepare it for the chart
        for (const providerName in data) {
            let providerData = data[providerName];
            // add data of one provider to temp array
            let tempArray = [];
            let count = 0;
            // add items
            for (let itemName in providerData) {
                if (itemName != 'quantity') {
                    count++;
                    // we generate unique category for each column (providerName + "_" + itemName) and store realName
                    tempArray.push({
                        category: providerName + '_' + itemName,
                        realName: itemName,
                        value: providerData[itemName],
                        provider: providerName
                    });
                }
            }
            // sort temp array
            // tempArray.sort(function(a, b) {
            // 	if (a.value > b.value) {
            // 		return 1;
            // 	}
            // 	else if (a.value < b.value) {
            // 		return -1
            // 	}
            // 	else {
            // 		return 0;
            // 	}
            // })
            // add quantity and count to middle data item (line series uses it)
            let lineSeriesDataIndex = Math.floor(count / 2);
            tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
            tempArray[lineSeriesDataIndex].count = count;
            // push to the final data
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["array"].each(tempArray, function (item) {
                chartData.push(item);
            });
            // create range (the additional label at the bottom)
            let range = categoryAxis.axisRanges.create();
            range.category = tempArray[0].category;
            range.endCategory = tempArray[tempArray.length - 1].category;
            range.label.text = tempArray[0].provider;
            range.label.dy = 30;
            range.label.truncate = true;
            range.label.fontWeight = 'bold';
            range.label.tooltipText = tempArray[0].provider;
            range.label.adapter.add('maxWidth', function (maxWidth, target) {
                let range = target.dataItem;
                let startPosition = categoryAxis.categoryToPosition(range.category, 0);
                let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
                let startX = categoryAxis.positionToCoordinate(startPosition);
                let endX = categoryAxis.positionToCoordinate(endPosition);
                return endX - startX;
            });
        }
        this.debit.data = chartData;
        // last tick
        let range = categoryAxis.axisRanges.create();
        range.category = this.debit.data[this.debit.data.length - 1].category;
        range.label.disabled = true;
        range.tick.location = 1;
        range.grid.location = 1;
    }
    _renderCredit(companies, indicator) {
        this.credit = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]('chart-credit', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // some extra padding for range labels
        this.credit.paddingBottom = 50;
        // chart.cursor = new am4charts.XYCursor();
        // chart.scrollbarX = new am4core.Scrollbar();
        // will use this to store colors of the same items
        let colors = {};
        let categoryAxis = this.credit.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataItems.template.text = '{realName}';
        categoryAxis.adapter.add('tooltipText', function (tooltipText, target) {
            return categoryAxis.tooltipDataItem.dataContext.realName;
        });
        let valueAxis = this.credit.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        valueAxis.min = 0;
        // single column series for all data
        let columnSeries = this.credit.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        columnSeries.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](30);
        columnSeries.tooltipText = '{realName}, {valueY}';
        columnSeries.dataFields.categoryX = 'category';
        columnSeries.dataFields.valueY = 'value';
        // second value axis for quantity
        let valueAxis2 = this.credit.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis2.renderer.opposite = true;
        valueAxis2.syncWithAxis = valueAxis;
        valueAxis2.tooltip.disabled = true;
        // quantity line series
        let lineSeries = this.credit.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        lineSeries.tooltipText = '{valueY}';
        lineSeries.dataFields.categoryX = 'category';
        lineSeries.dataFields.valueY = 'quantity';
        lineSeries.yAxis = valueAxis2;
        lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        lineSeries.stroke = this.credit.colors.getIndex(13);
        lineSeries.fill = lineSeries.stroke;
        lineSeries.strokeWidth = 2;
        lineSeries.snapTooltip = true;
        // when data validated, adjust location of data item based on count
        lineSeries.events.on('datavalidated', function () {
            lineSeries.dataItems.each(function (dataItem) {
                // if count divides by two, location is 0 (on the grid)
                if (dataItem.dataContext.count / 2 == Math.round(dataItem.dataContext.count / 2)) {
                    dataItem.setLocation('categoryX', 0);
                }
                // otherwise location is 0.5 (middle)
                else {
                    dataItem.setLocation('categoryX', 0.5);
                }
            });
        });
        // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
        // columnSeries.columns.template.adapter.add("fill", function(fill, target) {
        //   let name = target.dataItem.dataContext.realName;
        //   if (!colors[name]) {
        //     colors[name] = chart.colors.next();
        //   }
        //   target.stroke = colors[name];
        //   return colors[name];
        // })
        let rangeTemplate = categoryAxis.axisRanges.template;
        rangeTemplate.tick.disabled = false;
        rangeTemplate.tick.location = 0;
        rangeTemplate.tick.strokeOpacity = 0.6;
        rangeTemplate.tick.length = 60;
        rangeTemplate.grid.strokeOpacity = 0.5;
        rangeTemplate.label.tooltip = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]();
        rangeTemplate.label.tooltip.dy = -10;
        rangeTemplate.label.cloneTooltip = false;
        ///// DATA
        let chartData = [];
        let lineSeriesData = [];
        let data = {};
        // indicators.forEach(parent => {
        //   console.log(parent);
        //   parent.children.forEach(indicator => {
        //     if (indicator.checked) {
        //       data[indicator.title] = {};
        //       companies.forEach(company => {
        //         if (company.active) {
        //           data[indicator.title][company.title] = company.finance.debit;
        //         }
        //       });
        //     }
        //   });
        // });
        data[indicator.title] = {};
        companies.forEach(company => {
            if (company.active) {
                data[indicator.title][`${company.title.slice(0, 9)}...`] = company.finance.credit;
            }
        });
        console.log(data);
        // process data ant prepare it for the chart
        for (const providerName in data) {
            let providerData = data[providerName];
            // add data of one provider to temp array
            let tempArray = [];
            let count = 0;
            // add items
            for (let itemName in providerData) {
                if (itemName != 'quantity') {
                    count++;
                    // we generate unique category for each column (providerName + "_" + itemName) and store realName
                    tempArray.push({
                        category: providerName + '_' + itemName,
                        realName: itemName,
                        value: providerData[itemName],
                        provider: providerName
                    });
                }
            }
            // sort temp array
            // tempArray.sort(function(a, b) {
            // 	if (a.value > b.value) {
            // 		return 1;
            // 	}
            // 	else if (a.value < b.value) {
            // 		return -1
            // 	}
            // 	else {
            // 		return 0;
            // 	}
            // })
            // add quantity and count to middle data item (line series uses it)
            let lineSeriesDataIndex = Math.floor(count / 2);
            tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
            tempArray[lineSeriesDataIndex].count = count;
            // push to the final data
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["array"].each(tempArray, function (item) {
                chartData.push(item);
            });
            // create range (the additional label at the bottom)
            let range = categoryAxis.axisRanges.create();
            range.category = tempArray[0].category;
            range.endCategory = tempArray[tempArray.length - 1].category;
            range.label.text = tempArray[0].provider;
            range.label.dy = 30;
            range.label.truncate = true;
            range.label.fontWeight = 'bold';
            range.label.tooltipText = tempArray[0].provider;
            range.label.adapter.add('maxWidth', function (maxWidth, target) {
                let range = target.dataItem;
                let startPosition = categoryAxis.categoryToPosition(range.category, 0);
                let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
                let startX = categoryAxis.positionToCoordinate(startPosition);
                let endX = categoryAxis.positionToCoordinate(endPosition);
                return endX - startX;
            });
        }
        this.credit.data = chartData;
        // last tick
        let range = categoryAxis.axisRanges.create();
        range.category = this.credit.data[this.credit.data.length - 1].category;
        range.label.disabled = true;
        range.tick.location = 1;
        range.grid.location = 1;
    }
};
AmChartsService.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"] }
];
AmChartsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AmChartsService);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(user) {
        return this.http.post('url', user);
    }
    register() { }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/companies.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/companies.service.ts ***!
  \******************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompaniesService = class CompaniesService {
    constructor(http) {
        this.http = http;
        this.companies = [];
    }
    updateActiveCompanies(companies) {
        this.activeCompanies = companies;
    }
    updateCompaniesIndicators(indicators) {
        this.companiesIndicators = indicators;
    }
    getActiveCompanies() {
        return this.activeCompanies;
    }
    getCompanies() {
        return new Promise((resole, reject) => {
            if (this.companies.length) {
                resole(this.companies);
            }
            else {
                return this.http.get('/assets/companies.json').subscribe(res => {
                    this.companies = res;
                    resole(this.companies);
                }, error => {
                    reject(error);
                });
            }
        });
    }
    getCompaniesIndicators() {
        return this.companiesIndicators;
    }
};
CompaniesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompaniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CompaniesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\nikmas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map