"use strict";
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        redirectTo: 'schedules',
        pathMatch: 'full'
    },
    {
        path: 'medals',
        loadChildren: 'app/components/medals/medals.module#MedalsModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
