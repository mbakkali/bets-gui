(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"landing-header\"> \r\n  <p class=\"logo\">GRADUS</p>\r\n  <p class=\"intro-text\">Angular 8 Material Design Admin Template</p>            \r\n  <p class=\"desc m-0\">Start creating your app with GRADUS template</p>\r\n  <p class=\"desc\"> 8 layouts, 6 color styles, 35+ pages</p>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n     <button mat-raised-button color=\"primary\" (click)=\"scrollToDemos()\">View demos</button>\r\n     <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729\" target=\"blank\">Purchase now</a>\r\n  </div> \r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"muted-text\">Check out our demo styles</h2>\r\n  <p class=\"muted-text desc\">Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-default.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-compact.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-compact.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-mini.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-mini.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-rtl.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-rtl.jpg\">        \r\n        </a>\r\n    </div>\r\n  </div> \r\n  <h2 class=\"muted-text\">Skins</h2> \r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('indigo-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('teal-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/teal-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('red-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/red-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('blue-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/blue-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('green-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/green-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('pink-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/pink-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n  </div>     \r\n</div>\r\n\r\n<div class=\"bg-primary w-100\">\r\n  <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"landing-footer\">\r\n    <span>Copyright ©2018 All Rights Reserved</span>\r\n    <span>made by <a mat-button href=\"https://themeforest.net/user/theme_season/portfolio\" target=\"blank\">ThemeSeason</a></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-header {\n  position: relative;\n  color: #fff;\n  height: 520px;\n  text-align: center;\n}\n.landing-header:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 520px;\n  background-color: #242424;\n  background-image: url('header.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: center;\n  z-index: -1;\n}\n.landing-header p {\n  margin-bottom: 1rem;\n}\n.landing-header .logo {\n  font-size: 48px;\n}\n.landing-header .intro-text {\n  font-size: 36px;\n}\n.landing-header .desc {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: 0.03rem;\n}\n.landing-header .mat-raised-button {\n  margin: 0 14px;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 32px;\n  text-align: center;\n}\n.container h2 {\n  font-size: 2rem;\n}\n.container .desc {\n  font-size: 1.25rem;\n}\n.container .demo {\n  padding: 16px;\n}\n.container .demo .text {\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.container .demo .link {\n  display: block;\n}\n.container .demo .link img {\n  width: 100%;\n  box-shadow: 0px 1px 5px 1px #999;\n  transition: 0.2s;\n}\n.container .demo .link img:hover {\n  box-shadow: 0px 1px 5px 5px #999;\n}\n.landing-footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n}\n@media (max-width: 767px) {\n  .landing-header .logo {\n    font-size: 36px;\n  }\n  .landing-header .intro-text {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaWJha2thbGkvcHJvamVjdHMvYmV0cy1ndWkvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDR1o7QUREUTtFQUNJLGNBQUE7QUNHWjtBREZZO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNJaEI7QURIZ0I7RUFDSSxnQ0FBQTtBQ0twQjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUE7RUFFTztJQUNLLGVBQUE7RUNBVjtFREVNO0lBQ0ksZUFBQTtFQ0FWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sYW5kaW5nL2hlYWRlci5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAubG9nb3sgXHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW50cm8tdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAuZGVzY3tcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wM3JlbTtcclxuICAgIH1cclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDAgMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmRlc2N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmRlbW97XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3tcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDVweCAjOTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGFuZGluZy1mb290ZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAubGFuZGluZy1oZWFkZXJ7XHJcbiAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW50cm8tdGV4dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgfVxyXG59IiwiLmxhbmRpbmctaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhbmRpbmctaGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbGFuZGluZy9oZWFkZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgei1pbmRleDogLTE7XG59XG4ubGFuZGluZy1oZWFkZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubGFuZGluZy1oZWFkZXIgLmxvZ28ge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4ubGFuZGluZy1oZWFkZXIgLmludHJvLXRleHQge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4ubGFuZGluZy1oZWFkZXIgLmRlc2Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xufVxuLmxhbmRpbmctaGVhZGVyIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxNHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uY29udGFpbmVyIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLmNvbnRhaW5lciAuZGVtbyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGFpbmVyIC5kZW1vIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNvbnRhaW5lciAuZGVtbyAubGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciAuZGVtbyAubGluayBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4ICM5OTk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5kZW1vIC5saW5rIGltZzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDVweCAjOTk5O1xufVxuXG4ubGFuZGluZy1mb290ZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubGFuZGluZy1oZWFkZXIgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICAubGFuZGluZy1oZWFkZXIgLmludHJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.settings.rtl = false;
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LandingComponent.prototype.scrollToDemos = function () {
        setTimeout(function () { window.scrollTo(0, 520); });
    };
    LandingComponent.prototype.changeLayout = function (menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    };
    LandingComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/pages/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' }
];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es5.js.map