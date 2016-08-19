"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cross_country_routing_1 = require('./cross-country.routing');
var cross_country_1 = require('../cross-country');
var CrossCountryModule = (function () {
    function CrossCountryModule() {
    }
    CrossCountryModule = __decorate([
        core_1.NgModule({
            imports: [
                cross_country_routing_1.routing
            ],
            declarations: [
                cross_country_1.CrossCountryComponent,
                cross_country_1.CcsBrk01Component,
                cross_country_1.CcsRes03Component,
                cross_country_1.CcsCls01Component
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrossCountryModule);
    return CrossCountryModule;
}());
exports.CrossCountryModule = CrossCountryModule;
