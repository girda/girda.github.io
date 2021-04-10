(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-account-user-account-module"],{

/***/ "3lit":
/*!************************************************************!*\
  !*** ./src/modules/user-account/user-account.component.ts ***!
  \************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserAccountComponent.ɵfac = function UserAccountComponent_Factory(t) { return new (t || UserAccountComponent)(); };
UserAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAccountComponent, selectors: [["app-user-account"]], decls: 4, vars: 0, consts: [[1, "user-account"], ["routerLink", "/"]], template: function UserAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hello from user-account!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: \"Gilroy\";\n  src: url('Gilroylight.woff') format(\"woff\"), url('Gilroylight.woff') format(\"woff2\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Gilroy\";\n  src: url('Gilroyextrabold.woff') format(\"woff\"), url('Gilroyextrabold.woff2') format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXHVzZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQTtFQUNFLHFCQUFBO0VBQ0EsNkZBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoidXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xyXG4gIHNyYzogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvZ2lscm95L0dpbHJveWxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvZ2lscm95L0dpbHJveWxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xyXG4gIHNyYzogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvZ2lscm95L0dpbHJveWV4dHJhYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2dpbHJveS9HaWxyb3lleHRyYWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2dpbHJveS9HaWxyb3lsaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9naWxyb3kvR2lscm95bGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9naWxyb3kvR2lscm95ZXh0cmFib2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2dpbHJveS9HaWxyb3lleHRyYWJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn0iXX0= */"] });


/***/ }),

/***/ "Gd/V":
/*!*********************************************************!*\
  !*** ./src/modules/user-account/user-account.routes.ts ***!
  \*********************************************************/
/*! exports provided: UserAccountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountRoutes", function() { return UserAccountRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-account.component */ "3lit");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _user_account_component__WEBPACK_IMPORTED_MODULE_1__["UserAccountComponent"] }
];
class UserAccountRoutes {
}
UserAccountRoutes.ɵfac = function UserAccountRoutes_Factory(t) { return new (t || UserAccountRoutes)(); };
UserAccountRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserAccountRoutes });
UserAccountRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserAccountRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Nyya":
/*!*********************************************************!*\
  !*** ./src/modules/user-account/user-account.module.ts ***!
  \*********************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _user_account_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-account.routes */ "Gd/V");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "uQzi");
/* harmony import */ var _user_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-account.component */ "3lit");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserAccountModule {
}
UserAccountModule.ɵfac = function UserAccountModule_Factory(t) { return new (t || UserAccountModule)(); };
UserAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserAccountModule });
UserAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _user_account_routes__WEBPACK_IMPORTED_MODULE_0__["UserAccountRoutes"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserAccountModule, { declarations: [_user_account_component__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"]], imports: [_user_account_routes__WEBPACK_IMPORTED_MODULE_0__["UserAccountRoutes"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=user-account-user-account-module.js.map