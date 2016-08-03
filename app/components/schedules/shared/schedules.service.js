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
var shared_1 = require('../../../shared');
var SchedulesService = (function () {
    function SchedulesService(dataService, commonCodesService) {
        this.dataService = dataService;
        this.commonCodesService = commonCodesService;
        this.url = "//localhost" + shared_1.Constants.CONTEXT_PATH + shared_1.Constants.DATA_PATH + "/CAT/CAT-------------------------------/SCHEDULES.json";
    }
    SchedulesService.prototype.getPaginated = function (filter, page, order, reverse) {
        var filtered = filter ? this.filterBySportAndDate(filter, order, reverse) : this.schedules;
        var sorted = this.sort(filtered, order, reverse);
        var paginated = sorted.slice((page - 1) * shared_1.PAGE_SIZE, (page * shared_1.PAGE_SIZE));
        var resultSet = new shared_1.ResultSet();
        resultSet.update(paginated, page, filtered.length);
        return resultSet;
    };
    SchedulesService.prototype.getCompetitionSchedule = function () {
        var sportsList = this.commonCodesService.getSportList();
        var byHours = {};
        byHours['CER'] = { sport: this.commonCodesService.getValue('discipline', 'CER'), sportCode: 'CER', days: '' };
        for (var isport in sportsList) {
            byHours[sportsList[isport].id] = { sport: sportsList[isport].name, sportCode: sportsList[isport].id, days: '' };
        }
        for (var s in this.schedules) {
            if (this.commonCodesService.isPhaseType(this.schedules[s].rsc) && this.schedules[s].status !== 'UNSCHEDULED') {
                var compDate = this.parseDate(this.schedules[s].startDate);
                var isMedal = this.schedules[s].medal === '1' || this.schedules[s].medal === '2';
                var day = isMedal ? compDate.getDate() + '#' + this.schedules[s].medal : compDate.getDate();
                var isFirstDay = byHours[this.schedules[s].sport].days === '';
                day = isFirstDay ? day : ',' + day;
                byHours[this.schedules[s].sport].days += day;
            }
        }
        //console.log(`byHours: ${ JSON.stringify(byHours) }`);
        // convert into array
        var competitionSchedule = Object.keys(byHours).map(function (key) { return byHours[key]; });
        var resultSet = new shared_1.ResultSet();
        resultSet.update(competitionSchedule, 1, competitionSchedule.length);
        return resultSet;
    };
    SchedulesService.prototype.loadSchedules = function () {
        var _this = this;
        if (this.schedulesObservable) {
            //console.log('schedules already loaded, return observable');
            return this.schedulesObservable;
        }
        this.schedulesObservable = this.dataService
            .getJson(this.url, shared_1.Constants.UPDATE_INTERVAL_DATA)
            .map(function (data) {
            _this.schedules = data.schedules.list.map(function (item) {
                item.dStartDate = _this.parseDate(item.startDate, item.startTime);
                item.dEndDate = _this.parseDate(item.endDate, item.endTime);
                item.statusName = _this.commonCodesService.getValue('schedulestatus', item.status);
                item.locName = _this.commonCodesService.getValue('location', item.location);
                item.eventName = _this.commonCodesService.getValue('eventunit', item.rsc);
                return item;
            });
            return true;
        });
        return this.schedulesObservable;
    };
    SchedulesService.prototype.getOrderCriteria = function (order) {
        var sortByArray;
        switch (order) {
            case 'byTime':
                /*if (sport && sport !== '') {
                    sortByArray = ['startDate', 'location', 'unit', 'startTime', 'eventName'];
                } else { */
                sortByArray = ['startDate', 'startTime', 'sport', 'location', 'unit', 'eventName'];
                //}
                break;
            case 'bySport':
                sortByArray = ['sport', 'startDate', 'startTime', 'location', 'eventName'];
                break;
            case 'byEvent':
                sortByArray = ['eventName', 'startDate', 'startTime', 'sport', 'location'];
                break;
            case 'byLocation':
                sortByArray = ['locName', 'startDate', 'startTime', 'unit', 'eventName'];
                break;
            case 'byStatus':
                sortByArray = ['status', 'startDate', 'startTime', 'location', 'sport', 'eventName'];
                break;
            default:
                break;
        }
        return sortByArray;
    };
    SchedulesService.prototype.filterBySportAndDate = function (filter, order, reverse) {
        //console.log(`filtering... with ${ JSON.stringify(filter)}`);
        return this.schedules.filter(function (item) {
            //console.log(`item with ${ item.gender } ${ item.sport } ${ item.event }`);
            if (filter.gender !== '' && item.gender !== filter.gender)
                return false;
            if (filter.sport !== '' && item.sport !== filter.sport)
                return false;
            if (filter.event !== '' && item.event !== filter.event)
                return false;
            return true;
        });
    };
    SchedulesService.prototype.parseDate = function (date, time) {
        var dSplit = date.split('-');
        if (time) {
            var tSplit = time.split(':');
            return new Date(Number(dSplit[0]), Number(dSplit[1]), Number(dSplit[2]), Number(tSplit[0]), Number(tSplit[1]));
        }
        else {
            return new Date(Number(dSplit[0]), Number(dSplit[1]), Number(dSplit[2]));
        }
    };
    SchedulesService.prototype.sort = function (filtered, order, reverse) {
        var orderCriteria = this.getOrderCriteria(order);
        //console.log(`sorting... with ${ orderCriteria }`);
        return new shared_1.OrderByPipe().transform(filtered, orderCriteria, reverse);
    };
    SchedulesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared_1.DataService, shared_1.CommonCodesService])
    ], SchedulesService);
    return SchedulesService;
}());
exports.SchedulesService = SchedulesService;
