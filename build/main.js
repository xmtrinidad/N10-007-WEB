webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="darkNav">\n    <ion-title text-center>\n      N10-007\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="home-container">\n    <home-header></home-header>\n    <domains></domains>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objective_detail_objective_detail__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DomainPage = /** @class */ (function () {
    function DomainPage(domainServie, navCtrl, navParams) {
        this.domainServie = domainServie;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.objectiveDetailPage = __WEBPACK_IMPORTED_MODULE_3__objective_detail_objective_detail__["a" /* ObjectiveDetailPage */];
    }
    DomainPage.prototype.ngOnInit = function () {
        this.domain = this.navParams.data;
        this.section = this.domainServie.getSection(this.domain);
        this.domainTitle = this.domain.title.slice(4).toLowerCase();
    };
    DomainPage.prototype.objectiveSelected = function (objective, color) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__objective_detail_objective_detail__["a" /* ObjectiveDetailPage */], { domain: this.domainTitle, objective: objective, color: color });
    };
    DomainPage.prototype.getColor = function () {
        return this.domainTitle;
    };
    DomainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domain',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\domain\domain.html"*/'\n<script src="domain.module.ts"></script>\n<ion-header>\n\n  <ion-navbar [color]="getColor()">\n    <ion-title>N10-007</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngStyle]="{\'background-color\': domain.color}" class="Domain">\n    <div class="Domain__icon">\n      <i [class]="domain.icon"></i>\n    </div>\n  </div>\n  <h2 [ngStyle]="{\'color\': domain.color}" class="Domain__title">{{domain.title}}</h2>\n  <ion-list text-wrap>\n    <button\n      ion-item *ngFor="let objective of section.objectives"\n      (click)="objectiveSelected(objective, domain.color)">\n      <span\n        class="Domain__section-number"\n        [ngStyle]="{\'background-color\': domain.color}"\n        item-end>{{objective.sectionNumber}}</span>\n      <span class="Domain__section-title" item-end>{{objective.title}}</span>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\domain\domain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_domain_service__["a" /* DomainService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DomainPage);
    return DomainPage;
}());

//# sourceMappingURL=domain.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectiveDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_resource_service__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ObjectiveDetailPage = /** @class */ (function () {
    function ObjectiveDetailPage(modalCtrl, domainService, resourceService, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.domainService = domainService;
        this.resourceService = resourceService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObjectiveDetailPage.prototype.ngOnInit = function () {
        this.getObjectiveInfo();
    };
    ObjectiveDetailPage.prototype.getObjectiveInfo = function () {
        this.domainTitle = this.navParams.data.domain;
        this.objective = this.navParams.data.objective;
        this.color = this.navParams.data.color;
        this.bullets = this.domainService.getBullets(this.objective.sectionNumber);
    };
    ObjectiveDetailPage.prototype.onHomeClick = function () {
        this.navCtrl.popToRoot();
    };
    ObjectiveDetailPage.prototype.onResourcesClick = function () {
        var objective = this.objective.sectionNumber.toString();
        var resources = this.resourceService.getResources(objective);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__resources_resources__["a" /* ResourcesPage */], { resources: resources, domain: this.domainTitle });
        modal.present();
    };
    ObjectiveDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-objective-detail',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\objective-detail\objective-detail.html"*/'<!--\n  Generated template for the ObjectiveDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar [color]="domainTitle">\n    <ion-title>{{objective.sectionNumber}} {{ domainTitle }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="Objective-detail">\n    <span [ngStyle]="{\'background-color\': color}" class="Objective-detail__number">{{ objective.sectionNumber }}</span>\n    <p class="Objective-detail__title">{{ objective.title }}</p>\n  </div>\n  <div class="Objective-detail__bullets">\n    <ion-item-group *ngFor="let bullet of bullets.bullets">\n      <ion-item-divider color="light">\n        <div class="bullet-title">\n          {{ bullet.title}}\n        </div>\n      </ion-item-divider>\n      <ion-item no-lines *ngFor="let subBullet of bullet.subBullets">- {{subBullet}}</ion-item>\n    </ion-item-group>\n  </div>\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar [color]="domainTitle">\n    <ion-buttons padding>\n      <button navPop ion-button>\n        <div>\n          <ion-icon name="list"></ion-icon><br>\n          <label>Sections</label>\n        </div>\n      </button>\n      <button (click)="onHomeClick()" ion-button>\n        <div>\n          <ion-icon name="home"></ion-icon><br>\n          <label>Home</label>\n        </div>\n      </button>\n      <button (click)="onResourcesClick()" ion-button>\n        <div>\n          <ion-icon name="logo-youtube"></ion-icon><br>\n          <label>Resources</label>\n        </div>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\objective-detail\objective-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_service__["a" /* DomainService */],
            __WEBPACK_IMPORTED_MODULE_4__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ObjectiveDetailPage);
    return ObjectiveDetailPage;
}());

//# sourceMappingURL=objective-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourcesPage = /** @class */ (function () {
    function ResourcesPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resources = [];
    }
    ResourcesPage.prototype.ionViewDidLoad = function () {
        this.resources = this.navParams.get('resources');
        this.domainTitle = this.navParams.get('domain');
        console.log(this.resources.length === 0);
    };
    ResourcesPage.prototype.onModalClose = function () {
        this.viewCtrl.dismiss();
    };
    ResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\resources\resources.html"*/'<ion-header>\n  <ion-navbar [color]="domainTitle">\n    <ion-title>Resources</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="onModalClose()" class="my-style-for-modal">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="resources.length === 0" padding>\n  <div class="no-resources" text-center>\n    <ion-icon name="archive"></ion-icon>\n    <p>No resources currently available</p>\n  </div>\n  <button (click)="viewCtrl.dismiss()" ion-button full>Back to Objective List</button>\n</ion-content>\n\n<ion-content *ngIf="resources.length > 0" padding>\n  <ion-card *ngFor="let resource of resources">\n    <img [src]="resource.img"/>\n    <ion-card-header>\n      {{ resource.title }}\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{ resource.description }}</p>\n    </ion-card-content>\n    <a [href]="resource.link" ion-button icon-left clear>\n      <ion-icon name="eye"></ion-icon>\n      <div>Watch</div>\n    </a>\n  </ion-card>\n  <button class="Resources__back-btn" (click)="viewCtrl.dismiss()" ion-button full>Back to Objective List</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\resources\resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ResourcesPage);
    return ResourcesPage;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_resources__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResourceService = /** @class */ (function () {
    function ResourceService() {
    }
    ResourceService.prototype.getResources = function (objectiveNumber) {
        return __WEBPACK_IMPORTED_MODULE_1__data_resources__["a" /* RESOURCES */].filter(function (resource) { return resource.objectiveNumber === objectiveNumber; });
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ResourceService);
    return ResourceService;
}());

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcronymsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_acronym_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_popover_sort_popover__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcronymsPage = /** @class */ (function () {
    function AcronymsPage(popoverCtrl, toastCtrl, acronymService) {
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.acronymService = acronymService;
        this.sort = 'Ascending';
    }
    AcronymsPage.prototype.ngOnInit = function () {
        this.getAcronymsList();
    };
    AcronymsPage.prototype.presentSortPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sort_popover_sort_popover__["a" /* SortPopoverPage */]);
        popover.present({
            ev: myEvent,
        });
        popover.onDidDismiss(function (sort) { return _this.sortData(sort); });
    };
    AcronymsPage.prototype.sortData = function (sortSelected) {
        // Do nothing if same sort
        if (sortSelected === this.sort || sortSelected === null)
            return;
        this.sort = sortSelected;
        this.acronyms.sort(function (a, b) {
            // Sort ascending
            if (sortSelected === 'Ascending') {
                return a.acronym.localeCompare(b.acronym);
            }
            else {
                return b.acronym.localeCompare(a.acronym);
            }
        });
    };
    /**
     * Convert acronym list txt file to object and push
     * onto acronyms
     */
    AcronymsPage.prototype.getAcronymsList = function () {
        var _this = this;
        this.acronymService.getAcronyms()
            .subscribe(function (data) {
            _this.acronyms = data;
        });
    };
    AcronymsPage.prototype.presentToast = function (fullAcronym) {
        var toast = this.toastCtrl.create({
            message: fullAcronym,
            duration: 4000,
            showCloseButton: true
        });
        toast.present();
    };
    AcronymsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acronyms',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\acronyms\acronyms.html"*/'<!--\n  Generated template for the AcronymsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="acronyms">\n    <ion-title>Acronyms</ion-title>\n    <ion-buttons end>\n      <button right ion-button icon-only (click)="presentSortPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button (click)="presentToast(acronym.full)" ion-item *ngFor="let acronym of acronyms">\n      {{acronym.acronym}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\acronyms\acronyms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__services_acronym_service__["a" /* AcronymService */]])
    ], AcronymsPage);
    return AcronymsPage;
}());

//# sourceMappingURL=acronyms.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcronymService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AcronymService = /** @class */ (function () {
    function AcronymService(http) {
        this.http = http;
    }
    AcronymService.prototype.getAcronyms = function () {
        return this.http.get('assets/acronyms/acronyms.json', { responseType: 'json' });
    };
    AcronymService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AcronymService);
    return AcronymService;
}());

//# sourceMappingURL=acronym.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortPopoverPage = /** @class */ (function () {
    function SortPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.sortOptions = ['Ascending', 'Descending'];
    }
    SortPopoverPage.prototype.onSortClick = function (sortType) {
        this.viewCtrl.dismiss(sortType);
    };
    SortPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sort-popover',
            template: "\n    <ion-list>\n      <ion-list-header>Sort Acronyms</ion-list-header>\n      <button \n        *ngFor=\"let sortOption of sortOptions\" \n        ion-item \n        (click)=\"onSortClick(sortOption)\">{{ sortOption }}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SortPopoverPage);
    return SortPopoverPage;
}());

//# sourceMappingURL=sort-popover.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_domain_domain__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_objective_detail_objective_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acronyms_acronyms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sort_popover_sort_popover__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_header_home_header__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_domains_domains__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_domain_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_resource_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_acronym_service__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_domain_domain__["a" /* DomainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_objective_detail_objective_detail__["a" /* ObjectiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_header_home_header__["a" /* HomeHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_domains_domains__["a" /* DomainsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acronyms_acronyms__["a" /* AcronymsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sort_popover_sort_popover__["a" /* SortPopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_domain_domain__["a" /* DomainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_objective_detail_objective_detail__["a" /* ObjectiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_header_home_header__["a" /* HomeHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_domains_domains__["a" /* DomainsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acronyms_acronyms__["a" /* AcronymsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sort_popover_sort_popover__["a" /* SortPopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__services_domain_service__["a" /* DomainService */],
                __WEBPACK_IMPORTED_MODULE_16__services_resource_service__["a" /* ResourceService */],
                __WEBPACK_IMPORTED_MODULE_17__services_acronym_service__["a" /* AcronymService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAINS; });
var DOMAINS = [
    { id: 0, icon: 'fas fa-laptop', title: '1.0 Concepts', color: '#5E35B1' },
    { id: 1, icon: 'far fa-list-alt', title: '2.0 Infrastructure', color: '#43A047' },
    { id: 2, icon: 'fas fa-power-off', title: '3.0 Operations', color: '#3949AB' },
    { id: 3, icon: 'fas fa-lock', title: '4.0 Security', color: '#0288D1' },
    { id: 4, icon: 'fas fa-wrench', title: '5.0 Troubleshooting', color: '#00897B' },
    { id: 5, icon: 'fas fa-book', title: 'Acronym List', color: '#607D8B' },
];
//# sourceMappingURL=domains.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
var SECTIONS = [
    {
        domainId: 0,
        objectives: [
            { sectionNumber: 1.1, title: 'Explain the purposes and uses of ports and protocols.' },
            { sectionNumber: 1.2, title: 'Explain devices, applications, protocols and \n' +
                    'services at their appropriate OSI layers.' },
            { sectionNumber: 1.3, title: 'Explain the concepts and characteristics of routing and switching.' },
            { sectionNumber: 1.4, title: 'Given a scenario, configure the appropriate IP addressing components.' },
            { sectionNumber: 1.5, title: 'Compare and contrast the characteristics of \n' +
                    'network topologies, types and technologies.' },
            { sectionNumber: 1.6, title: 'Given a scenario, implement the appropriate \n' +
                    'wireless technologies and configurations.' },
            { sectionNumber: 1.7, title: 'Summarize cloud concepts and their purposes.' },
            { sectionNumber: 1.8, title: 'Explain the functions of network services.' },
        ]
    },
    {
        domainId: 1,
        objectives: [
            { sectionNumber: 2.1, title: 'Given a scenario, deploy the appropriate cabling solution.' },
            { sectionNumber: 2.2, title: 'Given a scenario, determine the appropriate placement of \n' +
                    'networking devices on a network and install/configure them.' },
            { sectionNumber: 2.3, title: 'Explain the purposes and use cases for advanced networking devices.' },
            { sectionNumber: 2.4, title: 'Explain the purposes of virtualization and \n' +
                    'network storage technologies.' },
            { sectionNumber: 2.5, title: 'Compare and contrast WAN technologies.' },
        ]
    },
    {
        domainId: 2,
        objectives: [
            { sectionNumber: 3.1, title: 'Given a scenario, use appropriate documentation \n' +
                    'and diagrams to manage the network.' },
            { sectionNumber: 3.2, title: 'Compare and contrast business continuity \n' +
                    'and disaster recovery concepts.' },
            { sectionNumber: 3.3, title: 'Explain common scanning, monitoring and patching \n' +
                    'processes and summarize their expected outputs.' },
            { sectionNumber: 3.4, title: 'Given a scenario, use remote access methods.' },
            { sectionNumber: 3.5, title: 'Identify policies and best practices.' }
        ]
    },
    {
        domainId: 3,
        objectives: [
            { sectionNumber: 4.1, title: 'Summarize the purposes of physical security devices.' },
            { sectionNumber: 4.2, title: 'Explain authentication and access controls.' },
            { sectionNumber: 4.3, title: 'Given a scenario, secure a basic wireless network.' },
            { sectionNumber: 4.4, title: 'Summarize common networking attacks.' },
            { sectionNumber: 4.5, title: 'Given a scenario, implement network device hardening.' },
            { sectionNumber: 4.6, title: 'Explain common mitigation techniques and their purposes.' },
        ]
    },
    {
        domainId: 4,
        objectives: [
            { sectionNumber: 5.1, title: 'Explain the network troubleshooting methodology.' },
            { sectionNumber: 5.2, title: 'Given a scenario, use the appropriate tool.' },
            { sectionNumber: 5.3, title: 'Given a scenario, troubleshoot common wired \n' +
                    'connectivity and performance issues.' },
            { sectionNumber: 5.4, title: 'Given a scenario, troubleshoot common wireless \n' +
                    'connectivity and performance issues.' },
            { sectionNumber: 5.5, title: 'Given a scenario, troubleshoot common network service issues.' },
        ]
    }
];
//# sourceMappingURL=sections.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BULLETS; });
/**
 * DOMAIN: 1.0 Concepts
 */
var DOMAIN_ONE_ONE = {
    objectiveNumber: 1.1,
    bullets: [
        { title: 'Protocols and ports',
            subBullets: [
                'SSH 22, DNS 53, SMTP 25', 'SFTP 22, FTP 20, 21', 'TFTP 69, TELNET 23',
                'DHCP 67, 68, NTP 123', 'HTTP 80, HTTPS 443', 'SNMP 161, RDP 3389',
                'SIP 5060, 5061', 'SMB 445, POP 110', 'IMAP 143, LDAP 389',
                'H.323 1720, LDAPS 636'
            ]
        },
        {
            title: 'Protocol types',
            subBullets: ['ICMP', 'UDP', 'TCP', 'IP']
        },
        {
            title: 'Connection-oriented vs connectionless'
        }
    ],
};
var DOMAIN_ONE_TWO = {
    objectiveNumber: 1.2,
    bullets: [
        { title: 'Layer 1 - Physical' },
        { title: 'Layer 2 - Data link' },
        { title: 'Layer 3 - Network' },
        { title: 'Layer 4 - Transport' },
        { title: 'Layer 5 - Session' },
        { title: 'Layer 6 - Presentation' },
        { title: 'Layer 7 - Application' },
    ]
};
var DOMAIN_ONE_THREE = {
    objectiveNumber: 1.3,
    bullets: [
        {
            title: 'Properties of network traffic',
            subBullets: [
                'Broadcast domains', 'CSMA/CD', 'CSMA/CA', 'Collision domains',
                'Protocol data units', 'MTU', 'Broadcast', 'Multicast', 'Unicast'
            ]
        },
        {
            title: 'Segmentation and interface properties',
            subBullets: [
                'VLANs', 'Trunking (802.1q)', 'Tagging and untagging ports',
                'Port mirroring', 'Switching loops/spanning tree', 'PoE and PoE+',
                '802.3af', '802.3at', 'DMZ', 'MAC address table', 'ARP table'
            ]
        },
        {
            title: 'Routing',
            subBullets: [
                'Routing protocols (IPv4 & IPv6)', 'Distance-vector (RIP, EIGRP)',
                'Link-state (OSPF)', 'Hybrid (BGP)', 'Routing types (Static/Dynamic)',
            ]
        },
        {
            title: 'IPv6 Concepts',
            subBullets: [
                'Addressing', 'Tunneling', 'Dual stack', 'Router advertisement',
                'Neighbor discovery'
            ]
        },
        {
            title: 'Performance concepts',
            subBullets: [
                'Traffic shaping', 'QoS', 'Diffserv', 'CoS'
            ]
        },
        { title: 'NAT/PAT' },
        { title: 'Port forwarding' },
        { title: 'Access control list' },
        { title: 'Distributed switching' },
        { title: 'Packet-switched vs circuit-switched network' },
        { title: 'Software-defined networking' },
    ]
};
var DOMAIN_ONE_FOUR = {
    objectiveNumber: 1.4,
    bullets: [
        { title: 'Private vs public' },
        { title: 'Loopback and reserved' },
        { title: 'Default gateway' },
        { title: 'Virtual IP' },
        { title: 'Subnet mask' },
        {
            title: 'Subnetting',
            subBullets: ['Classful: A, B, C, D and E', 'Classless: VLSM, CIDR']
        },
        {
            title: 'Address assignments',
            subBullets: ['DHCP', 'DHCPv6', 'Static', 'APIPA', 'EUI64', 'IP reservations']
        }
    ]
};
var DOMAIN_ONE_FIVE = {
    objectiveNumber: 1.5,
    bullets: [
        {
            title: 'Wired topologies',
            subBullets: [
                'Logical vs. physical', 'Star', 'Ring', 'Mesh', 'Bus'
            ]
        },
        {
            title: 'Wireless topologies',
            subBullets: [
                'Mesh', 'Ad hoc', 'Infrastructure'
            ]
        },
        {
            title: 'Types',
            subBullets: [
                'LAN, WLAN', 'MAN, WAN', 'CAN, SAN, PAN'
            ]
        },
        {
            title: 'IoT Technologies',
            subBullets: [
                'Z-Wave, Ant+', 'Bluetooth', 'NFC, IR', 'RFID, 802.11'
            ]
        },
    ]
};
var DOMAIN_ONE_SIX = {
    objectiveNumber: 1.6,
    bullets: [
        { title: '802.11 standards', subBullets: ['a, b, g, n, ac'] },
        { title: 'Cellular', subBullets: ['GSM', 'TDMA', 'CDMA'] },
        { title: 'Frequencies', subBullets: ['2.4GHz', '5.0GHz'] },
        { title: 'Speed and distance requirements' },
        { title: 'Channel bandwidth' },
        { title: 'Channel bonding' },
        { title: 'MIMO/MU-MIMO' },
        { title: 'Unidirectional/omnidirectional' },
        { title: 'Site surveys' },
    ]
};
var DOMAIN_ONE_SEVEN = {
    objectiveNumber: 1.7,
    bullets: [
        { title: 'Types of services', subBullets: ['SaaS', 'PaaS', 'IaaS'] },
        { title: 'Cloud delivery methods', subBullets: ['Private', 'Public', 'Hybrid'] },
        { title: 'Connectivity methods' },
        { title: 'Security implications/considerations' },
        { title: 'Relationship between local and cloud resources' }
    ]
};
var DOMAIN_ONE_EIGHT = {
    objectiveNumber: 1.8,
    bullets: [
        {
            title: 'DNS service & Record Types',
            subBullets: [
                'A, AAA, TXT, SRV, MX, CNAME, NS, PTR',
                'Internal vs. external DNS', '3rd party/cloud hosted DNS',
                'Hierarchy', 'Forward vs. reverse zone'
            ]
        },
        {
            title: 'DHCP service',
            subBullets: [
                'MAC reservations', 'Pools', 'IP exclusions', 'Scope options',
                'Lease time, TTL', 'DHCP relay/IP helper'
            ]
        },
        { title: 'NTP' },
        { title: 'IPAM' },
    ]
};
var CONCEPTS = [
    DOMAIN_ONE_ONE, DOMAIN_ONE_TWO, DOMAIN_ONE_THREE, DOMAIN_ONE_FOUR,
    DOMAIN_ONE_FIVE, DOMAIN_ONE_SIX, DOMAIN_ONE_SEVEN, DOMAIN_ONE_EIGHT
];
/**
 * DOMAIN: 2.0 Infrastructure
 */
var DOMAIN_TWO_ONE = {
    objectiveNumber: 2.1,
    bullets: [
        {
            title: 'Media types',
            subBullets: ['Copper: UTP, STP, Coaxial', 'Fiber: Single-mode, Multimode']
        },
        { title: 'Plenum vs PVC' },
        {
            title: 'Connector types',
            subBullets: [
                'Copper: RJ-45, RJ-11, BNC, DB-9, DB-25, F-Type',
                'Fiber: LC, ST, SC (APC, UPC, MTRJ)'
            ]
        },
        {
            title: 'Transceivers',
            subBullets: [
                'SFP, GBIC', 'SFP+, QSFP', 'Charateristics of fiber transceivers',
            ]
        },
        {
            title: 'Termination points',
            subBullets: [
                '66 block, 110 block', 'Patch panel', 'Fiber distribution panel'
            ]
        },
        {
            title: 'Copper cable standards',
            subBullets: [
                'Cat 3, Cat5, Cat5e', 'Cat 6, Cat6a, Cat 7', 'RG-6, RG-59'
            ]
        },
        {
            title: 'Copper termination standards',
            subBullets: [
                'TIA/EIA 568a', 'TIA/EIA 568b', 'Crossover', 'Straight-through'
            ]
        },
        {
            title: 'Ethernet deployment standards',
            subBullets: [
                '100BaseT, 1000BaseT', '1000BaseLX, 1000BaseSX, 10GBaseT'
            ]
        }
    ]
};
var DOMAIN_TWO_TWO = {
    objectiveNumber: 2.2,
    bullets: [
        { title: 'Firewall' },
        { title: 'Router' },
        { title: 'Switch' },
        { title: 'Hub' },
        { title: 'Bridge' },
        { title: 'Modems' },
        { title: 'Wireless access point' },
        { title: 'Media converter' },
        { title: 'Wireless range extender' },
        { title: 'VoIP endpoint' },
    ]
};
var DOMAIN_TWO_THREE = {
    objectiveNumber: 2.3,
    bullets: [
        { title: 'Multilayer switch' },
        { title: 'Wireless controller' },
        { title: 'Load balancer' },
        { title: 'IDS/IPS' },
        { title: 'Proxy server' },
        { title: 'VPN concentrator' },
        { title: 'AAA/RADIUS server' },
        { title: 'UTM appliance' },
        { title: 'NGFW/Layer 7 firewall' },
        { title: 'VoIP PBX' },
        { title: 'VoIP gateway' },
        { title: 'Content filter' },
    ]
};
var DOMAIN_TWO_FOUR = {
    objectiveNumber: 2.4,
    bullets: [
        {
            title: 'Virtual networking components',
            subBullets: [
                'Virtual switch', 'Virtual firewall', 'Virtual NIC',
                'Virtual router', 'Hypervisor'
            ]
        },
        {
            title: 'Network storage types',
            subBullets: [
                'NAS', 'SAN'
            ]
        },
        {
            title: 'Connection type',
            subBullets: [
                'FCoE',
                'Fibre Channel',
                'iSCSI',
                'InfiniBand'
            ]
        },
        { title: 'Jumbo frame' }
    ]
};
var DOMAIN_TWO_FIVE = {
    objectiveNumber: 2.5,
    bullets: [
        {
            title: 'Service type',
            subBullets: [
                'ISDN', 'T1/T3, E1/E3', 'OC-3 - OC-192', 'DSL, Dial-up, PRI',
                'Metropolitan Ethernet', 'Cable broadband'
            ]
        },
        {
            title: 'Transmission mediums',
            subBullets: [
                'Satellite, Copper', 'Fiber, Wireless'
            ]
        },
        {
            title: 'Characteristics of service',
            subBullets: [
                'MPLS, ATM', 'Frame relay', 'PPPoE, PPP', 'DMVPN, SIP trunk'
            ]
        },
        {
            title: 'Termination',
            subBullets: [
                'Demarcation point', 'CSU/DSU', 'Smart jack'
            ]
        }
    ]
};
var INFRASTRUCTURE = [
    DOMAIN_TWO_ONE, DOMAIN_TWO_TWO, DOMAIN_TWO_THREE,
    DOMAIN_TWO_FOUR, DOMAIN_TWO_FIVE
];
/**
 * DOMAIN: 3.0 Operations
 */
var DOMAIN_THREE_ONE = {
    objectiveNumber: 3.1,
    bullets: [
        { title: 'Diagram symbols' },
        { title: 'Standard operating procedures' },
        { title: 'Logical vs. physical diagrams' },
        { title: 'Rack diagrams' },
        { title: 'Change management documentation' },
        { title: 'Wiring and port locations' },
        { title: 'IDF/MDF documentation' },
        { title: 'Labeling' },
        { title: 'Networking configuration' },
        { title: 'Performance baselines' },
        { title: 'Inventory management' },
    ]
};
var DOMAIN_THREE_TWO = {
    objectiveNumber: 3.2,
    bullets: [
        {
            title: 'Availability concepts',
            subBullets: [
                'Fault tolerance', 'High availability', 'Load balancing',
                'NIC teaming', 'Port aggregation', 'Clustering'
            ]
        },
        {
            title: 'Power management',
            subBullets: [
                'Battery backups/UPS', 'Power generators', 'Dual power supplies',
                'Redundant circuits'
            ]
        },
        {
            title: 'Recovery',
            subBullets: [
                'Cold, Warm, Hot sites', 'Backups: Full, differential, incremental',
                'Snapshots'
            ]
        },
        { title: 'MTT' },
        { title: 'MTBF' },
        { title: 'SLA requirements' }
    ]
};
var DOMAIN_THREE_THREE = {
    objectiveNumber: 3.3,
    bullets: [
        {
            title: 'Processes',
            subBullets: [
                'Log reviewing', 'Port scanning', 'Vulnerability scanning',
                'Patch management: Rollback', 'Reviewing baselines',
                'Packet/traffic analysis'
            ]
        },
        {
            title: 'Event management',
            subBullets: [
                'Notifications', 'Alerts', 'SIEM'
            ]
        },
        {
            title: 'SNMP monitors',
            subBullets: [
                'MIB'
            ]
        },
        {
            title: 'Metrics',
            subBullets: [
                'Error rate', 'Utilization', 'Packet drops',
                'Bandwidth/throughput'
            ]
        }
    ]
};
var DOMAIN_THREE_FOUR = {
    objectiveNumber: 3.4,
    bullets: [
        {
            title: 'VPN',
            subBullets: [
                'IPSec, SSL/TLS/DTLS', 'Site-to-site, Client-to-site'
            ]
        },
        {
            title: 'Remote file access',
            subBullets: [
                'FTP/FTPS', 'SFTP, TFTP'
            ]
        },
        {
            title: 'Out-of-band management',
            subBullets: [
                'Modem', 'Console router'
            ]
        },
        { title: 'HTTPS/management URL' },
        { title: 'RDP' },
        { title: 'SSH' },
        { title: 'VNC' },
        { title: 'Telnet' },
    ]
};
var DOMAIN_THREE_FIVE = {
    objectiveNumber: 3.5,
    bullets: [
        { title: 'Privileged user agreement' },
        { title: 'Password policy' },
        { title: 'On-boarding/off-boarding' },
        { title: 'Licensing restrictions' },
        { title: 'International export controls' },
        { title: 'Data loss prevention' },
        { title: 'Remote access policies' },
        { title: 'Incident response policies' },
        { title: 'BYOD' },
        { title: 'AUP' },
        { title: 'NDA' },
        { title: 'System life-cycle', subBullets: ['Asset disposal'] },
        { title: 'Safety procedures' }
    ]
};
var OPERATIONS = [
    DOMAIN_THREE_ONE, DOMAIN_THREE_TWO, DOMAIN_THREE_THREE,
    DOMAIN_THREE_FOUR, DOMAIN_THREE_FIVE
];
/**
 * DOMAIN: 4.0 Security
 */
var DOMAIN_FOUR_ONE = {
    objectiveNumber: 4.1,
    bullets: [
        {
            title: 'Detection',
            subBullets: [
                'Motion detection', 'Video surveillance',
                'Asset tracking tags', 'Tamper detection'
            ]
        },
        {
            title: 'Prevention',
            subBullets: [
                'Badges, Biometrics', 'Smart cards',
                'Key fob, Locks'
            ]
        }
    ]
};
var DOMAIN_FOUR_TWO = {
    objectiveNumber: 4.2,
    bullets: [
        {
            title: 'Authorization, authentication, and Accounting',
            subBullets: [
                'RADIUS, TACACS+', 'Kerberos', 'Single sign-on',
                'Local authentication', 'LDAP', 'Certificates',
                'Auditing and logging'
            ]
        },
        {
            title: 'Multifactor authentication',
            subBullets: [
                'Something you know', 'Something you have',
                'Something you are', 'Somewhere you are',
                'Something you do'
            ]
        },
        {
            title: 'Access control',
            subBullets: [
                '802.1X, NAC', 'Port security', 'MAC filtering',
                'Captive portal', 'Access control lists'
            ]
        }
    ]
};
var DOMAIN_FOUR_THREE = {
    objectiveNumber: 4.3,
    bullets: [
        { title: 'WPA, WPA2' },
        { title: 'TKIP-RC4' },
        { title: 'CCMP-AES' },
        { title: 'Geofencing' },
        {
            title: 'Authentication and authorization',
            subBullets: [
                'EAP/PEAP: EAP-FAST, EAP-TLS', 'Shared to open',
                'Preshared key', 'MAC filtering'
            ]
        }
    ]
};
var DOMAIN_FOUR_FOUR = {
    objectiveNumber: 4.4,
    bullets: [
        {
            title: 'DoS',
            subBullets: [
                'Reflective', 'Amplified', 'Distributed'
            ]
        },
        { title: 'Social engineering' },
        { title: 'Insider threat' },
        { title: 'Logic bomb' },
        { title: 'Rogue access point' },
        { title: 'Evil twin' },
        { title: 'War driving' },
        { title: 'Phishing' },
        { title: 'Ransomware' },
        { title: 'DNS/ARP poisoning' },
        { title: 'Spoofing' },
        { title: 'Deauthentication' },
        { title: 'Brute force' },
        { title: 'VLAN hopping' },
        { title: 'Man-in-the-middle' },
        { title: 'Exploits vs vulnerabilities' },
    ]
};
var DOMAIN_FOUR_FIVE = {
    objectiveNumber: 4.5,
    bullets: [
        { title: 'Changing default credentials' },
        { title: 'Avoiding common passwords' },
        { title: 'Upgrading firmware' },
        { title: 'Patching and updates' },
        { title: 'File hashing' },
        { title: 'Disabling unnecessary services' },
        { title: 'Using secure protocols' },
        { title: 'Generating new keys' },
        {
            title: 'Disabling unused ports',
            subBullets: [
                'IP ports', 'Device ports (physical and virtual)'
            ]
        }
    ]
};
var DOMAIN_FOUR_SIX = {
    objectiveNumber: 4.6,
    bullets: [
        { title: 'Signature management' },
        { title: 'Device hardening' },
        { title: 'Change native VLAN' },
        {
            title: 'Switch port protection',
            subBullets: [
                'Spanning tree', 'Flood guard', 'BPDU guard',
                'Root guard', 'DHCP snooping'
            ]
        },
        {
            title: 'Network segmentation',
            subBullets: [
                'DMZ, VLAN'
            ]
        },
        { title: 'Privileged user account' },
        { title: 'File integrity monitoring' },
        { title: 'Role separation' },
        { title: 'Restricting access via ACLs' },
        { title: 'Honeypot/honeynet' },
        { title: 'Penetration testing' },
    ]
};
var SECURITY = [
    DOMAIN_FOUR_ONE, DOMAIN_FOUR_TWO, DOMAIN_FOUR_THREE,
    DOMAIN_FOUR_FOUR, DOMAIN_FOUR_FIVE, DOMAIN_FOUR_SIX
];
/**
 * DOMAIN: 5.0 Troubleshooting
 */
var DOMAIN_FIVE_ONE = {
    objectiveNumber: 5.1,
    bullets: [
        {
            title: 'Identify the problem',
            subBullets: [
                'Gather information', 'Duplicate if possible',
                'Question users', 'Identify symptoms',
                'Determine if anything has changed',
                'Approach multiple problems differently'
            ]
        },
        {
            title: 'Establish a theory of probable cause',
            subBullets: [
                'Question the obvious',
                'Consider multiple approaches',
            ]
        },
        {
            title: 'Test the theory to determine the cause',
            subBullets: [
                'Once confirmed, determine next steps',
                'Establish new theories or escalate'
            ]
        },
        {
            title: 'Establish a plan of action',
            subBullets: [
                'Identify potential effects'
            ]
        },
        { title: 'Implement the solution or escalate' },
        {
            title: 'Verify full system functionality',
            subBullets: [
                'If applicable, implement preventive measures'
            ]
        },
        { title: 'Document findings, actions and outcomes' }
    ]
};
var DOMAIN_FIVE_TWO = {
    objectiveNumber: 5.2,
    bullets: [
        {
            title: 'Hardware tools',
            subBullets: [
                'Crimper, Cable tester', 'Punchdown tool',
                'OTDR, Light meter', 'Tone generator', 'Loopback adapter',
                'Multimeter', 'Spectrum analyzer'
            ]
        },
        {
            title: 'Software tools',
            subBullets: [
                'Packet sniffer, Port scanner',
                'Protocol analyzer', 'WiFi analyzer',
                'Bandwidth speed tester'
            ]
        },
        {
            title: 'Command line',
            subBullets: [
                'ipconfig, ifconfig', 'iptables, netstat',
                'tcpdump, pathping', 'nmap, route', 'arp, dig'
            ]
        }
    ]
};
var DOMAIN_FIVE_THREE = {
    objectiveNumber: 5.3,
    bullets: [
        { title: 'Attenuation' },
        { title: 'Latency' },
        { title: 'Jitter' },
        { title: 'Crosstalk' },
        { title: 'EMI' },
        { title: 'Open/short' },
        { title: 'Incorrect pin-out' },
        { title: 'Incorrect cable type' },
        { title: 'Bad port' },
        { title: 'Transceiver mismatch' },
        { title: 'TX/RX reverse' },
        { title: 'Duplex/speed mismatch' },
        { title: 'Damaged cables' },
        { title: 'Bent pins' },
        { title: 'Bottlenecks' },
        { title: 'VLAN mismatch' },
        { title: 'Network connection LED status indicators' },
    ]
};
var DOMAIN_FIVE_FOUR = {
    objectiveNumber: 5.4,
    bullets: [
        { title: 'Reflection/Refraction' },
        { title: 'Absorption' },
        { title: 'Latency' },
        { title: 'Jitter' },
        { title: 'Attenuation' },
        { title: 'Incorrect antenna type' },
        { title: 'Interference' },
        { title: 'Incorrect antenna placement' },
        { title: 'Channel overlap' },
        { title: 'Overcapacity' },
        { title: 'Distance limitations' },
        { title: 'Frequency mismatch' },
        { title: 'Wrong SSID' },
        { title: 'Wrong passphrase' },
        { title: 'Security type mismatch' },
        { title: 'Power levels' },
        { title: 'Signal-to-noise ratio' },
    ]
};
var DOMAIN_FIVE_FIVE = {
    objectiveNumber: 5.5,
    bullets: [
        { title: 'Names not resolving' },
        { title: 'Incorrect gateway/netmask' },
        { title: 'Duplicate IP addresses' },
        { title: 'Duplicate MAC addresses' },
        { title: 'Expired IP addresses' },
        { title: 'Rogue DHCP server' },
        { title: 'Untrusted SSL certificate' },
        { title: 'Incorrect time' },
        { title: 'Exhausted DHCP scope' },
        { title: 'Blocked TCP/UDP ports' },
        { title: 'Incorrect host-based firewall settings' },
        { title: 'Incorrect ACL settings' },
        { title: 'Unresponsive service' },
        { title: 'Hardware failure' },
    ]
};
var TROUBLESHOOTING = [
    DOMAIN_FIVE_ONE, DOMAIN_FIVE_TWO, DOMAIN_FIVE_THREE,
    DOMAIN_FIVE_FOUR, DOMAIN_FIVE_FIVE
];
var BULLETS = CONCEPTS.concat(INFRASTRUCTURE, OPERATIONS, SECURITY, TROUBLESHOOTING);
//# sourceMappingURL=bullets.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESOURCES; });
var RESOURCES = [
    {
        "objectiveNumber": "1.1",
        "title": "Introduction to IP",
        "description": "We rely on IP as the fundamental protocol on today’s networks. In this video, you’ll learn about the fundamentals of IP, TCP, UDP, and ICMP.",
        "img": "https://i.ytimg.com/vi/M5c9HdaQqh0/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=M5c9HdaQqh0"
    },
    {
        "objectiveNumber": "1.1",
        "title": "Common Ports",
        "description": "As you manage your network devices, you’ll notice that certain port numbers will be commonly used. In this video, you’ll learn about these common TCP and UDP ports and how to recognize applications that are using these well-known port numbers.",
        "img": "https://i.ytimg.com/vi/vp_ZxQ0CTJk/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=vp_ZxQ0CTJk"
    },
    {
        "objectiveNumber": "1.2",
        "title": "Understanding the OSI Model",
        "description": "The OSI model is one of the most common methods of describing application data flows. In this video, you’ll learn about the seven layers of the OSI model and how they are associated with real-world hardware and software components.",
        "img": "https://i.ytimg.com/vi/G7aVKgGUe9c/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=G7aVKgGUe9c"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Introduction to Ethernet",
        "description": "Ethernet is the most common network topology in the world. In this video, you’ll learn the fundamentals of how Ethernet communicates from one device to another and how half-duplex and full-duplex configuration can effect this data transfer.",
        "img": "https://i.ytimg.com/vi/iXfBbs9SSFQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=iXfBbs9SSFQ"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Network Switching Overview",
        "description": "The network switch is perhaps the most common piece of networking equipment in use today. In this video, you’ll learn how the switch makes forwarding decisions, how the switch reacts when it doesn’t know the destination of a frame, and how the ARP command can be used to validate a switch’s forwarding table.",
        "img": "https://i.ytimg.com/vi/jR3VoKZWJyc/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=jR3VoKZWJyc"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Broadcast Domains and Collision Domains",
        "description": "A foundational knowledge of network architecture starts with the concepts of broadcast domains and collision domains. In this video, you’ll learn how modern network design has eliminated collision domains and how you can minimize the impact of broadcasts through the use of properly engineered broadcast domains.",
        "img": "https://i.ytimg.com/vi/SGbtLjIEVeo/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=SGbtLjIEVeo"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Unicasts, Broadcasts, and Multicasts",
        "description": "There are many different ways to communicate across the network. In this video, you’ll compare the differences between unicasts, broadcasts, and multicasts.",
        "img": "https://i.ytimg.com/vi/jotgabyT-uI/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=jotgabyT-uI"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Protocol Data Units",
        "description": "PDUs are the building blocks of network communication. In this video, you’ll learn about protocol data units and how they are used at different layers of the OSI model.",
        "img": "https://i.ytimg.com/vi/3RQW9s-aB6k/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=3RQW9s-aB6k"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Network Segmentation",
        "description": "We commonly use network segmentation technologies to provide security and separation between logical areas of the network. In this video, you’ll learn about physical segmentation, logical VLAN segmentation, and 802.1Q VLAN trunking.",
        "img": "https://i.ytimg.com/vi/9L4qDmvKPjQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=9L4qDmvKPjQ"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Spanning Tree Protocol",
        "description": "We rely on STP to prevent loops on our switched networks. In this video, you’ll learn the fundamentals of Spanning Tree Protocol and how STP reacts when changes occur to the network.",
        "img": "https://i.ytimg.com/vi/mLCpdsOZM9c/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=mLCpdsOZM9c"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Switch Interface Properties",
        "description": "There are many different options available when configuring an interface on a switch. In this video, you’ll learn about basic interface settings, VLAN configurations, power over Ethernet, and much more.",
        "img": "https://i.ytimg.com/vi/dqQny4UXiX0/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=dqQny4UXiX0"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Static and Dynamic Routing",
        "description": "A network administrator has many options for configuring and maintaining the routing table between layer 3 devices. In this video, you’ll learn about static routing, dynamic routing, and default routes.",
        "img": "https://i.ytimg.com/vi/YRzr56cwgCg/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=YRzr56cwgCg"
    },
    {
        "objectiveNumber": "1.3",
        "title": "IGP and EGP",
        "description": "Choosing a dynamic routing protocol is an important network design consideration. In this video, you’ll learn about autonomous systems, interior gateway protocols, and exterior gateway protocols.",
        "img": "https://i.ytimg.com/vi/14s-M01m1fQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=14s-M01m1fQ"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Dynamic Routing Protocols",
        "description": "Different dynamic routing protocols use different criteria to determine which route is really the best. In this video, you’ll learn the differences between distance-vector, link-state, and hybrid routing protocols.",
        "img": "https://i.ytimg.com/vi/9390huk39mU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=9390huk39mU"
    },
    {
        "objectiveNumber": "1.3",
        "title": "IPv4 and IPv6 Addressing",
        "description": "You’ll be working with IPv4 and IPv6 throughout your networking career. In this video, you’ll learn about the structure of an IPv4 address and an IPv6 address, and you’ll learn how to compress and uncompress IPv6 addresses.",
        "img": "https://i.ytimg.com/vi/U2IxdEYgoEg/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=U2IxdEYgoEg"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Configuring IPv6",
        "description": "IPv6 has a number of differences from traditional IPv4. In this video, you’ll learn about dual-stack routing, IPv6 tunneling protocols, and the many uses of the IPv6 Neighbor Discovery Protocol.",
        "img": "https://i.ytimg.com/vi/NhRjwjt2Aog/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=NhRjwjt2Aog"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Prioritizing Traffic",
        "description": "Most organizations are using many different applications, and certain applications will have a higher priority than others. In this video, you’ll learn how to prioritize this traffic as it traverses the network using packet shaping and quality of service options in your routers and switches.",
        "img": "https://i.ytimg.com/vi/uEKDZqI5osA/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=uEKDZqI5osA"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Network Address Translation",
        "description": "We rely on NAT for our Internet access and to allow external access to our internal services. In this video, you’ll learn about private IP addresses, port address translation, and port forwarding.",
        "img": "https://i.ytimg.com/vi/JAYpfBvGVI8/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=JAYpfBvGVI8"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Access Control Lists",
        "description": "Access control lists are used as packet filtering mechanisms on our enterprise networks. In this video, you’ll learn about ACLs and how they can be used to protect services on our networks.",
        "img": "https://i.ytimg.com/vi/6Yj1-pZmHvY/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=6Yj1-pZmHvY"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Circuit Switching and Packet Switching",
        "description": "There are many different ways to get data from one end of the network to the other. In this video, you’ll learn about some of the popular technologies that use circuit switching and packet switching.",
        "img": "https://i.ytimg.com/vi/uBpacYBwYwM/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=uBpacYBwYwM"
    },
    {
        "objectiveNumber": "1.3",
        "title": "Softwar",
        "description": "SDN has changed the way we design and implement services on modern networks. In this video, you’ll get an overview of SDN and how you can use distributed switching to virtualize your network.",
        "img": "https://i.ytimg.com/vi/EdVOeGDYHCU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=EdVOeGDYHCU"
    },
    {
        "objectiveNumber": "1.4",
        "title": "Binary Math",
        "description": "You’ll work with binary throughout your career, and you’ll often need to convert between binary and decimal values. In this video, you’ll learn my shortcut for quickly performing binary to decimal conversions.",
        "img": "https://i.ytimg.com/vi/mIbNZzoWE3k/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=mIbNZzoWE3k"
    },
    {
        "objectiveNumber": "1.4",
        "title": "IPv4 Addresses",
        "description": "Configuring IPv4 is more than just a single IP address. In this video, you’ll learn about the structure of an IPv4 address and the important configuration options to use IPv4 on your network.",
        "img": "https://i.ytimg.com/vi/aEMtAFvouNU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=aEMtAFvouNU"
    },
    {
        "objectiveNumber": "1.4",
        "title": "Classful Subnetting",
        "description": "The first step in learning to subnet IPv4 is to understand the starting point. In this video, you’ll learn about IP classes and how to quickly calculate network values from an IP address and subnet mask.",
        "img": "https://i.ytimg.com/vi/GxE395bCANM/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=GxE395bCANM"
    },
    {
        "objectiveNumber": "1.4",
        "title": "IPv4 Subnet Masks",
        "description": "An important skill when working with IP subnets is the ability to quickly translate between dotted-decimal notation and CIDR-block notation. In this video, you’ll learn how to quickly calculate these subnet mask notations.",
        "img": "https://i.ytimg.com/vi/L3dsWxn5RBU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=L3dsWxn5RBU"
    },
    {
        "objectiveNumber": "1.4",
        "title": "IPv6 Subnet Masks",
        "description": "Subnetting an IPv6 network is a bit less involved than IPv4. In this video, you’ll learn how to quickly configure IPv6 subnets for your network.",
        "img": "https://i.ytimg.com/vi/8IqXQ88QXfc/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=8IqXQ88QXfc"
    },
    {
        "objectiveNumber": "1.4",
        "title": "Calculating IPv4 Subnets and Hosts",
        "description": "The process of subnetting an IPv4 address can be calculated quickly with powers of two. In this video, you’ll learn how to quickly calculate the number of IP subnets and hosts per IP subnet.",
        "img": "https://i.ytimg.com/vi/qQEaAb_p8_E/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=qQEaAb_p8_E"
    },
    {
        "objectiveNumber": "Seven Second Subnetting",
        "title": "Professor Messer",
        "description": "",
        "img": "https://i.ytimg.com/vi/ZxAwQB8TZsM/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=ZxAwQB8TZsM"
    },
    {
        "objectiveNumber": "1.4",
        "title": "Assigning IPv4 Addresses",
        "description": "There are many different ways to configure a device with an IPv4 address. In this video, you’ll learn about DHCP, manual addressing, DHCP reservations, and APIPA.",
        "img": "https://i.ytimg.com/vi/Q0Aq_cYBcR0/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=Q0Aq_cYBcR0"
    },
    {
        "objectiveNumber": "1.4",
        "title": "Assigning IPv6 Addresses",
        "description": "The IPv6 addressing of a device has similarities to IPv4, but there are also some significant differences. In this video, you’ll learn about DHCPv6 and how to modify a MAC address for use as a static IP address.",
        "img": "https://i.ytimg.com/vi/lfCFsniHsPk/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=lfCFsniHsPk"
    },
    {
        "objectiveNumber": "1.5",
        "title": "Network Topologies",
        "description": "We often reference our network topologies as standard types, such as star, ring, and mesh. In this video, you’ll learn about physical and logical network documentation using these standard network topologies.",
        "img": "https://i.ytimg.com/vi/4nPnQVaRj4k/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4nPnQVaRj4k"
    },
    {
        "objectiveNumber": "1.5",
        "title": "Common Network Types",
        "description": "We use a number of different network types throughout our day. In this video, you’ll learn about the different network types that are used to get our data across the Internet.",
        "img": "https://i.ytimg.com/vi/BrGirZH0FzQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=BrGirZH0FzQ"
    },
    {
        "objectiveNumber": "1.5",
        "title": "Internet of Things Topologies",
        "description": "We’re connecting an increasing number of devices to the Internet. These Internet of Things topologies are similar to traditional networks, but there are some important differences when compared to traditional networks. In this video, you’ll learn about some of the more popular IoT topologies, such as Z-Wave, ANT+, NFC, and more.",
        "img": "https://i.ytimg.com/vi/g9F5FauEWL4/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=g9F5FauEWL4"
    },
    {
        "objectiveNumber": "1.6",
        "title": "Wireless Standards",
        "description": "There have been many 802.11 wireless standards through the years. In this video, you’ll learn about the differences between 802.11a, 802.11b, 802.11g, 802.11n, and 802.11ac.",
        "img": "https://i.ytimg.com/vi/r3pZ0WYSk9g/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=r3pZ0WYSk9g"
    },
    {
        "objectiveNumber": "1.6",
        "title": "Cellular Network Standards",
        "description": "Cellular networks are complex technologies that have been made easy enough for everyone to use. In this video, you’ll learn about GSM, CDMA and LTE cellular technologies.",
        "img": "https://i.ytimg.com/vi/GShWfJH6p2c/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=GShWfJH6p2c"
    },
    {
        "objectiveNumber": "1.6",
        "title": "Wireless Network Technologies",
        "description": "802.11 wireless network technologies are many and varied. In this video, you’ll learn about 802.11 frequency use, MIMO, MU-MIMO, power levels, antenna types, and more.",
        "img": "https://i.ytimg.com/vi/eV9Mu3njz_M/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=eV9Mu3njz_M"
    },
    {
        "objectiveNumber": "1.7",
        "title": "Cloud Services and Delivery Models",
        "description": "The cloud has become an integrated part of today’s networks. In this video, you’ll learn about various cloud delivery models and how to manage cloud security policies.",
        "img": "https://i.ytimg.com/vi/iiUbTb3s1xc/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=iiUbTb3s1xc"
    },
    {
        "objectiveNumber": "1.8",
        "title": "An Overview of DNS",
        "description": "Domain Name Services provide an important conversion between FQDN and IP address. In this video, you’ll learn about the process that DNS uses to resolve a fully-qualified domain name to an IP address.",
        "img": "https://i.ytimg.com/vi/VqQQMXNhZBM/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=VqQQMXNhZBM"
    },
    {
        "objectiveNumber": "1.8",
        "title": "DNS Record Types",
        "description": "DNS uses many different resource record types for network name services. In this video, you’ll learn about the DNS forward lookup file and some of the most common DNS record types.",
        "img": "https://i.ytimg.com/vi/D37RhTJ0ALY/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=D37RhTJ0ALY"
    },
    {
        "objectiveNumber": "1.8",
        "title": "DHCP Addressing Overview",
        "description": "We rely on DHCP for the automatic configuration of our network devices. In this video, you’ll learn about the four steps of the DHCP process and how a DHCP relay can provide flexibility with DHCP services.",
        "img": "https://i.ytimg.com/vi/uLJpp8HFNBc/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=uLJpp8HFNBc"
    },
    {
        "objectiveNumber": "1.8",
        "title": "Configuring DHCP",
        "description": "There are many options when configuring a DHCP server. In this video, you’ll learn about DHCP scopes, address allocation options, address reservations, and DHCP lease timers.",
        "img": "https://i.ytimg.com/vi/pEDFFH0Y4C4/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pEDFFH0Y4C4"
    },
    {
        "objectiveNumber": "1.8",
        "title": "An Overview of NTP",
        "description": "We rely on NTP to synchronize the clocks on all of our network-connected devices. In this video, you’ll learn about NTP servers, NTP clients, and how to configure NTP options on your workstation.",
        "img": "https://i.ytimg.com/vi/1GtySPUW-XA/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=1GtySPUW-XA"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Copper Cabling",
        "description": "Copper cables are the foundation of our networks, but not every copper cable is the same. In this video, you’ll learn about unshielded and shielded twisted pair, network cabling standards, and different types of network cabling.",
        "img": "https://i.ytimg.com/vi/v9m6uBaKD2s/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=v9m6uBaKD2s"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Copper Connectors",
        "description": "There are many different ways to connect copper cable to your networking equipment. In this video, you’ll learn about RJ11, RJ45, BNC, DB-9/DB-25, and F connectors.",
        "img": "https://i.ytimg.com/vi/_MF8oQdTCgo/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=_MF8oQdTCgo"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Optical Fiber",
        "description": "Optical fiber operates with very different physics than copper cabling. In this video, you’ll learn about multimode fiber, single-mode fiber, and the difference between UPC and APC connections.",
        "img": "https://i.ytimg.com/vi/_AnY7JMKVCg/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=_AnY7JMKVCg"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Optical Fiber Connectors",
        "description": "The connector types between fiber-connected devices can vary. In this video, you’ll learn about ST, SC, LC, and MT-RJ fiber connectors.",
        "img": "https://i.ytimg.com/vi/WyMNUdi0ZRM/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=WyMNUdi0ZRM"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Copper Termination Standards",
        "description": "Once you’ve picked your copper cabling, you’ll need to terminate it properly. In this video, you’ll learn about the different standards associated with copper cabling.",
        "img": "https://i.ytimg.com/vi/jaUww4A8LeU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=jaUww4A8LeU"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Network Termination Points",
        "description": "Most network designs follow similar methods to connect the end stations to the network. In this video, you’ll learn about patch panels, punch-down blocks, patch panels, and fiber distribution panels.",
        "img": "https://i.ytimg.com/vi/QYdYnF-YUG8/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=QYdYnF-YUG8"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Network Transceivers",
        "description": "Transceivers can provide options when connecting infrastructure equipment to the network. In this video, you’ll learn about transceiver technology, duplex and bi-directional transceivers, GBICs, SFP/SFP+, and QSFP transceivers.",
        "img": "https://i.ytimg.com/vi/UTu5bz6qgkw/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=UTu5bz6qgkw"
    },
    {
        "objectiveNumber": "2.1",
        "title": "Ethernet Standards",
        "description": "The IEEE maintains Ethernet standards that apply to many different speeds and media. In this video, you’ll learn about 100BASE-TX, 1000BASE-T, 1000BASE-SX, 1000BASE-LX, and 10GBASE-T standards.",
        "img": "https://i.ytimg.com/vi/X8MofnwqOSI/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=X8MofnwqOSI"
    },
    {
        "objectiveNumber": "2.2",
        "title": "Networking Devices",
        "description": "If you walk into multiple data centers, you’ll probably start to see some similarities. In this video, you’ll learn about some of the most common network devices on today’s networks.",
        "img": "https://i.ytimg.com/vi/kKKm5InEmH8/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=kKKm5InEmH8"
    },
    {
        "objectiveNumber": "2.3",
        "title": "Advanced Networking Devices",
        "description": "Some networking environments are highly specialized. In this video, you’ll learn about devices that provide unique solutions for today’s networks.",
        "img": "https://i.ytimg.com/vi/5i3yxEksaiU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=5i3yxEksaiU"
    },
    {
        "objectiveNumber": "2.4",
        "title": "Virtual Networking",
        "description": "Now that we’ve virtualized the data center, what happens to the network? In this video, you’ll learn about network virtualization deployment strategies.",
        "img": "https://i.ytimg.com/vi/CQsGjPWasAI/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=CQsGjPWasAI"
    },
    {
        "objectiveNumber": "2.4",
        "title": "Network Storage",
        "description": "There are many ways to provide access to storage across the network. In this video, you’ll learn about Fibre Channel, iSCSI, InfiniBand, and more.",
        "img": "https://i.ytimg.com/vi/41OgCdAjLI4/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=41OgCdAjLI4"
    },
    {
        "objectiveNumber": "2.5",
        "title": "WAN Services",
        "description": "You have many options when connecting WAN services. In this video, you’ll learn about T1, ISDN, DSL, and other WAN connectivity options.",
        "img": "https://i.ytimg.com/vi/7JUpUDYUSxY/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=7JUpUDYUSxY"
    },
    {
        "objectiveNumber": "2.5",
        "title": "WAN Transmission Mediums",
        "description": "Which WAN medium are you using? In this video, you’ll learn about satellite, copper, fiber, and wireless WAN options.",
        "img": "https://i.ytimg.com/vi/aCoSDXdg68A/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=aCoSDXdg68A"
    },
    {
        "objectiveNumber": "2.5",
        "title": "WAN Technologies",
        "description": "Our choice of wide area network technologies can depend on the type of connection. In this video, you’ll learn about Frame Relay, ATM, MPLS, DMVPN, SIP trunking, and much more.",
        "img": "https://i.ytimg.com/vi/byENdIkwBpA/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=byENdIkwBpA"
    },
    {
        "objectiveNumber": "2.5",
        "title": "WAN Termination",
        "description": "Once a WAN connection has made it’s way across the country or the world, it needs a place to terminate. In this video, you’ll learn about demarcation points, CSU/DSU connectivity, and smartjacks.",
        "img": "https://i.ytimg.com/vi/LYzvM6i14wI/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=LYzvM6i14wI"
    }
];
//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeHeaderComponent = /** @class */ (function () {
    function HomeHeaderComponent() {
    }
    HomeHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-header',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\home-header\home-header.html"*/'<header class="Header">\n  <div>\n    <img src="assets/svgs/netpluslogo.svg" alt="network plus logo" class="Header__logo">\n  </div>\n</header>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\home-header\home-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomeHeaderComponent);
    return HomeHeaderComponent;
}());

//# sourceMappingURL=home-header.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_domain__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__acronyms_acronyms__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DomainsComponent = /** @class */ (function () {
    function DomainsComponent(navCtrl, domainService) {
        this.navCtrl = navCtrl;
        this.domainService = domainService;
    }
    DomainsComponent.prototype.ngOnInit = function () {
        this.domains = this.domainService.getDomains();
    };
    DomainsComponent.prototype.onDomainClick = function (domainClicked) {
        if (domainClicked.id === 5) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__acronyms_acronyms__["a" /* AcronymsPage */], domainClicked);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__domain_domain__["a" /* DomainPage */], domainClicked);
        }
    };
    DomainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'domains',template:/*ion-inline-start:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\domains\domains.html"*/'<div class="Domains">\n  <div\n    [ngStyle]="{\'background-color\': domain.color}"\n    *ngFor="let domain of domains"\n    class="Domain"\n    (click)="onDomainClick(domain)">\n    <div class="Domain__icon">\n      <i [class]="domain.icon"></i>\n    </div>\n    <h5 class="Domain__title">{{domain.title}}</h5>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\Xavier Trinidad\Desktop\N10-007\src\pages\home\domains\domains.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_service__["a" /* DomainService */]])
    ], DomainsComponent);
    return DomainsComponent;
}());

//# sourceMappingURL=domains.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_domains__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sections__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_bullets__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DomainService = /** @class */ (function () {
    function DomainService() {
    }
    DomainService.prototype.getDomains = function () {
        return __WEBPACK_IMPORTED_MODULE_1__data_domains__["a" /* DOMAINS */];
    };
    DomainService.prototype.getSection = function (domain) {
        return __WEBPACK_IMPORTED_MODULE_2__data_sections__["a" /* SECTIONS */].find(function (section) { return section.domainId === domain.id; });
    };
    DomainService.prototype.getBullets = function (objectiveNumber) {
        return __WEBPACK_IMPORTED_MODULE_3__data_bullets__["a" /* BULLETS */].find(function (el) { return el.objectiveNumber === objectiveNumber; });
    };
    DomainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DomainService);
    return DomainService;
}());

//# sourceMappingURL=domain.service.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map