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
var Rx_1 = require("rxjs/Rx");
//import { DataService } from 'shared';
var shared_1 = require('../../shared');
var CommonCodesService = (function () {
    function CommonCodesService(dataService) {
        this.dataService = dataService;
        this.url = "//localhost" + shared_1.Constants.CONTEXT_PATH + shared_1.Constants.DATA_PATH + "/CCO/CCO-------------------------------/CC_ENG.json";
        this.commonCodes = [];
        this.isLoaded = false; // true if common codes have already been loaded
    }
    // before the user gets in, this has to return true
    CommonCodesService.prototype.canActivate = function () {
        // get common codes and return true when got them
        return this.loadCommonCodes()
            .map(function (loaded) {
            if (loaded) {
                console.log('common codes loaded');
            }
            else {
                console.log('common codes already loaded');
            }
            return true;
        });
    };
    CommonCodesService.prototype.compare = function (a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    };
    CommonCodesService.prototype.getValue = function (category, code) {
        if (code && category) {
            // if no code or category returns code
            if (this.commonCodes[category]) {
                if (this.commonCodes[category][code]) {
                    return this.commonCodes[category][code]['ShortName'];
                }
            }
        }
        return code;
    };
    CommonCodesService.prototype.loadCommonCodes = function () {
        var _this = this;
        if (this.isLoaded) {
            // already loaded, no need to read again
            return Rx_1.Observable.of(false);
        }
        else {
            return this.dataService.getJson(this.url, -1)
                .map(function (data) {
                for (var key in data) {
                    if (!data.hasOwnProperty(key)) {
                        continue;
                    }
                    // code, rsc and version are no common codes
                    if (key !== 'code' && key !== 'rsc' && key !== 'version') {
                        _this.commonCodes[key.toLowerCase()] = data[key].values;
                    }
                }
                _this.isLoaded = true;
                console.log(_this.commonCodes);
                return true;
            });
        }
    };
    CommonCodesService.prototype.getSportList = function () {
        var ccDisciplines = this.commonCodes['discipline'];
        var sportList = [];
        for (var d in ccDisciplines) {
            if (Object.prototype.hasOwnProperty.call(ccDisciplines, d)) {
                var val = ccDisciplines[d];
                if (val.isSport === 'Y') {
                    var discipline = { id: d, name: val.ShortName };
                    sportList.push(discipline);
                }
            }
        }
        return sportList.sort(this.compare);
    };
    CommonCodesService.prototype.getEventsList = function (sport) {
        var ccEvents = this.commonCodes['event'];
        var eventList = [];
        for (var e in ccEvents) {
            if (Object.prototype.hasOwnProperty.call(ccEvents, e)) {
                var val = ccEvents[e];
                var evSport = e.substring(0, 3);
                var event_1 = { id: e, name: val.ShortName };
                if (!sport) {
                    if (!eventList[evSport]) {
                        eventList[evSport] = [];
                    }
                    eventList[evSport].push(event_1);
                }
                else if (sport === evSport) {
                    eventList.push(event_1);
                }
            }
        }
        return eventList.sort(this.compare);
    };
    CommonCodesService.prototype.isPhaseType = function (rsc) {
        var phaseTypeValues = '1,3';
        if (this.commonCodes['phase']) {
            if (!rsc)
                return false;
            var phase = rsc.substring(0, 26);
            if (this.commonCodes['phase'][phase]) {
                var phaseType = this.commonCodes['phase'][phase].type;
                if (phaseTypeValues.indexOf(phaseType) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    CommonCodesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared_1.DataService])
    ], CommonCodesService);
    return CommonCodesService;
}());
exports.CommonCodesService = CommonCodesService;
