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
    },
    {
        path: 'results/CCS',
        loadChildren: 'app/components/sports/components/cross-country/cross-country.module#CrossCountryModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
