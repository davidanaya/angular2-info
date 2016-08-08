"use strict";
var router_1 = require('@angular/router');
//import { SchedulesComponent } from 'schedules';
//import { MedalsComponent } from 'medals';
var schedules_1 = require('./components/schedules');
var medals_1 = require('./components/medals');
var cross_country_1 = require('./components/sports/components/cross-country');
var shared_1 = require('./shared');
var routes = [
    {
        path: '',
        redirectTo: 'schedules',
        pathMatch: 'full'
    },
    {
        path: 'schedules',
        component: schedules_1.SchedulesComponent,
        children: [
            {
                path: '',
                redirectTo: 'competitionSchedule',
                pathMatch: 'full'
            },
            {
                path: 'competitionSchedule',
                component: schedules_1.CompetitionScheduleComponent,
                canActivate: [shared_1.CommonCodesService]
            },
            {
                path: 'bySportAndDate',
                component: schedules_1.BySportAndDateComponent,
                canActivate: [shared_1.CommonCodesService]
            },
            {
                path: 'scheduleByNoc',
                component: schedules_1.ScheduleByNocComponent,
                canActivate: [shared_1.CommonCodesService]
            },
            {
                path: 'activityList',
                component: schedules_1.ActivityListComponent,
                canActivate: [shared_1.CommonCodesService]
            },
            {
                path: 'nonCompetition',
                component: schedules_1.NonCompetitionComponent,
                canActivate: [shared_1.CommonCodesService]
            }
        ]
    },
    {
        path: 'results/CCS/:rsc',
        component: cross_country_1.CrossCountryComponent,
        children: [
            {
                path: '',
                redirectTo: 'CCS_RES03',
                pathMatch: 'full'
            },
            {
                path: 'CCS_RES03',
                component: cross_country_1.CcsRes03Component
            },
            {
                path: 'CCS_CLS01',
                component: cross_country_1.CcsCls01Component
            },
            {
                path: 'CCS_BRK01',
                component: cross_country_1.CcsBrk01Component
            }
        ]
    },
    {
        path: 'medals',
        component: medals_1.MedalsComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
