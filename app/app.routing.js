"use strict";
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        redirectTo: 'schedules',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
