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
var common_1 = require('@angular/common');
var shared_1 = require('../../shared');
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.dateToString = function (d, format) {
        if (format === void 0) { format = 'yyyy-MM-dd'; }
        return new common_1.DatePipe().transform(d, format);
    };
    HelperService.prototype.getCompetitionDaysList = function () {
        var competitionDays = [];
        var iDate = new Date(shared_1.Constants.START_DATE.getTime());
        while (iDate.getTime() !== shared_1.Constants.END_DATE.getTime()) {
            var value = [];
            value[0] = new common_1.DatePipe().transform(iDate, 'EEE') + ' ' + iDate.getDate();
            value[1] = this.dateToString(iDate);
            competitionDays.push(value);
            iDate.setDate(iDate.getDate() + 1);
        }
        //console.log(`competitionDays ${ JSON.stringify(competitionDays) }`);
        return competitionDays;
    };
    HelperService.prototype.getCompetitionMonth = function () {
        var months = {};
        var iDate = new Date(shared_1.Constants.START_DATE.getTime());
        while (iDate.getTime() !== shared_1.Constants.END_DATE.getTime()) {
            months[iDate.getMonth()] = new common_1.DatePipe().transform(iDate, 'MMMM');
            iDate.setDate(iDate.getDate() + 1);
        }
        var month = '';
        for (var m in months) {
            month = month === '' ? months[m] : month + ',' + months[m];
        }
        return month;
    };
    HelperService.prototype.getNumberOfCompetitionDays = function () {
        var numberOfDays = 0;
        var iDate = new Date(shared_1.Constants.START_DATE.getTime());
        while (iDate.getTime() !== shared_1.Constants.END_DATE.getTime()) {
            numberOfDays++;
            iDate.setDate(iDate.getDate() + 1);
        }
        return numberOfDays;
    };
    HelperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
