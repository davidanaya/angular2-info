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
var common_1 = require('@angular/common');
var schedules_1 = require('../../../schedules');
var shared_1 = require('../../../../shared');
var ScheduleByNocComponent = (function (_super) {
    __extends(ScheduleByNocComponent, _super);
    function ScheduleByNocComponent(schedulesService, commonCodesService) {
        _super.call(this, schedulesService, commonCodesService);
    }
    // on events
    ScheduleByNocComponent.prototype.onUpdateFilter = function (event) {
        // not implemented
    };
    ScheduleByNocComponent.prototype.updateSchedules = function (page) {
        // not implemented
    };
    ScheduleByNocComponent = __decorate([
        core_1.Component({
            selector: 'ao-schedule-by-noc',
            templateUrl: 'app/components/schedules/components/schedule-by-noc/schedule-by-noc.component.html',
            styleUrls: ['app/components/schedules/schedules.component.css'],
            directives: [shared_1.SportIconComponent, shared_1.PaginationComponent, shared_1.DateFormatterComponent, common_1.NgClass, schedules_1.SchNavigationComponent]
        }), 
        __metadata('design:paramtypes', [schedules_1.SchedulesService, shared_1.CommonCodesService])
    ], ScheduleByNocComponent);
    return ScheduleByNocComponent;
}(schedules_1.SchedulesScreenComponentBase));
exports.ScheduleByNocComponent = ScheduleByNocComponent;
