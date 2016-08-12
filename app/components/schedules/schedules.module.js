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
var shared_1 = require('../../shared');
var schedules_routing_1 = require('./schedules.routing');
var schedules_1 = require('../schedules');
var SchedulesModule = (function () {
    function SchedulesModule() {
    }
    SchedulesModule = __decorate([
        core_1.NgModule({
            imports: [
                schedules_routing_1.routing,
                shared_1.SharedModule.forRoot()
            ],
            declarations: [
                schedules_1.SchedulesComponent,
                schedules_1.SchNavigationComponent,
                schedules_1.ActivityListComponent,
                schedules_1.BySportAndDateComponent,
                schedules_1.CompetitionScheduleComponent,
                schedules_1.NonCompetitionComponent,
                schedules_1.ScheduleByNocComponent
            ],
            providers: [schedules_1.SchedulesService]
        }), 
        __metadata('design:paramtypes', [])
    ], SchedulesModule);
    return SchedulesModule;
}());
exports.SchedulesModule = SchedulesModule;
