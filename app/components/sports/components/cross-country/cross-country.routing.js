"use strict";
var router_1 = require('@angular/router');
var _1 = require('./');
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'results/CCS/:rsc',
        component: _1.CrossCountryComponent,
        children: [
            {
                path: '',
                redirectTo: 'CCS_RES03',
                pathMatch: 'full'
            },
            {
                path: 'CCS_RES03',
                component: _1.CcsRes03Component
            },
            {
                path: 'CCS_CLS01',
                component: _1.CcsCls01Component
            },
            {
                path: 'CCS_BRK01',
                component: _1.CcsBrk01Component
            }
        ]
    }
]);
