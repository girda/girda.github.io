(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-catalog-module"],{

/***/ "9fF1":
/*!**************************************************!*\
  !*** ./src/modules/catalog/catalog.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CatalogComponent {
    constructor() { }
    ngOnInit() {
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(); };
CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 2, vars: 0, consts: [[1, "catalog"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello from catalog!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "TcUO":
/*!***********************************************!*\
  !*** ./src/modules/catalog/catalog.routes.ts ***!
  \***********************************************/
/*! exports provided: CatalogRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogRoutes", function() { return CatalogRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog.component */ "9fF1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _catalog_component__WEBPACK_IMPORTED_MODULE_1__["CatalogComponent"] }
];
class CatalogRoutes {
}
CatalogRoutes.ɵfac = function CatalogRoutes_Factory(t) { return new (t || CatalogRoutes)(); };
CatalogRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CatalogRoutes });
CatalogRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CatalogRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "qdmN":
/*!***********************************************!*\
  !*** ./src/modules/catalog/catalog.module.ts ***!
  \***********************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var _catalog_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog.routes */ "TcUO");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "uQzi");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog.component */ "9fF1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CatalogModule {
}
CatalogModule.ɵfac = function CatalogModule_Factory(t) { return new (t || CatalogModule)(); };
CatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CatalogModule });
CatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _catalog_routes__WEBPACK_IMPORTED_MODULE_0__["CatalogRoutes"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CatalogModule, { declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]], imports: [_catalog_routes__WEBPACK_IMPORTED_MODULE_0__["CatalogRoutes"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=catalog-catalog-module.js.map