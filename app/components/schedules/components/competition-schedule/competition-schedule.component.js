"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var schedules_1 = require('../../../schedules');
var shared_1 = require('../../../../shared');
var CompetitionScheduleComponent = (function (_super) {
    __extends(CompetitionScheduleComponent, _super);
    function CompetitionScheduleComponent(schedulesService, commonCodesService, helperService) {
        _super.call(this, schedulesService, commonCodesService);
        this.helperService = helperService;
        this.filter = new schedules_1.Filter();
        // X selection
        // onmouseover
        this.row = '';
        this.column = '';
    }
    CompetitionScheduleComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.competitionDaysDates = this.helperService.getCompetitionDaysList();
        this.competitionMonth = this.helperService.getCompetitionMonth();
        this.competitionDaysNumber = this.helperService.getNumberOfCompetitionDays() + 1;
    };
    // on events
    CompetitionScheduleComponent.prototype.onUpdateFilter = function (event) {
        // not implemented
    };
    CompetitionScheduleComponent.prototype.onMouseOver = function (row, column) {
        this.row = row;
        this.column = column;
    };
    CompetitionScheduleComponent.prototype.isXSelection = function (row, column) {
        if (column === '') {
            return row === this.row;
        }
        return row === this.row || column === this.column;
    };
    CompetitionScheduleComponent.prototype.resetXSelection = function () {
        this.row = null;
        this.column = null;
    };
    // methods
    CompetitionScheduleComponent.prototype.getCompetitionDayStyles = function (competitionDays, date) {
        var CURRENT_DAY = '16'; // TODO esto sera una fecha de configuracion
        var day = date.split(' ')[1];
        var competitionDay = competitionDays.split(',');
        var hasCompetition = false;
        var isCurrentDay = CURRENT_DAY === day ? true : false;
        for (var d in competitionDay) {
            var dayAndMedal = competitionDay[d].split('#');
            if (day === dayAndMedal[0]) {
                if (dayAndMedal[1]) {
                    return isCurrentDay ? 'currentDay hasCompetition hasMedalEvent' : 'hasCompetition hasMedalEvent';
                }
                else {
                    hasCompetition = true;
                }
            }
        }
        if (hasCompetition) {
            return isCurrentDay ? 'currentDay hasCompetition' : 'hasCompetition';
        }
        return isCurrentDay ? 'currentDay' : '';
    };
    CompetitionScheduleComponent.prototype.updateSchedules = function (page) {
        console.log("updating schedules for competitionSchedule");
        //console.log(`filter is ${ JSON.stringify(this.filter) }`);
        //console.log(`competitionDaysDates is ${ JSON.stringify(this.competitionDaysDates) }`);
        var resultSet = this.schedulesService.getCompetitionSchedule();
        this.schedules = resultSet.results;
        this.pageSet = resultSet.pageSet;
        //console.log(`schedules is ${ JSON.stringify(this.schedules) }`);
    };
    CompetitionScheduleComponent = __decorate([
        core_1.Component({
            selector: 'ao-competition-schedule',
            templateUrl: 'app/components/schedules/components/competition-schedule/competition-schedule.component.html',
            styleUrls: ['app/components/schedules/schedules.component.css']
        }), 
        __metadata('design:paramtypes', [schedules_1.SchedulesService, shared_1.CommonCodesService, shared_1.HelperService])
    ], CompetitionScheduleComponent);
    return CompetitionScheduleComponent;
}(schedules_1.SchedulesScreenComponentBase));
exports.CompetitionScheduleComponent = CompetitionScheduleComponent;
