"use strict";
var router_1 = require('@angular/router');
var _1 = require('./');
var shared_1 = require('../../shared');
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'schedules',
        component: _1.SchedulesComponent,
        canActivate: [shared_1.CommonCodesService],
        children: [
            {
                path: '',
                redirectTo: 'competitionSchedule',
                pathMatch: 'full'
            },
            {
                path: 'competitionSchedule',
                component: _1.CompetitionScheduleComponent
            },
            {
                path: 'bySportAndDate',
                component: _1.BySportAndDateComponent
            },
            {
                path: 'scheduleByNoc',
                component: _1.ScheduleByNocComponent
            },
            {
                path: 'activityList',
                component: _1.ActivityListComponent
            },
            {
                path: 'nonCompetition',
                component: _1.NonCompetitionComponent
            }
        ]
    }
]);
