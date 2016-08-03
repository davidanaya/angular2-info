"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var shared_1 = require('../../../shared');
var SchedulesScreenComponentBase = (function (_super) {
    __extends(SchedulesScreenComponentBase, _super);
    function SchedulesScreenComponentBase(schedulesService, commonCodesService) {
        _super.call(this, commonCodesService);
        this.schedulesService = schedulesService;
        // sorting and filtering
        this.order = 'byTime';
        this.reverse = false;
    }
    // lifecycle hooks
    SchedulesScreenComponentBase.prototype.ngOnInit = function () {
        //console.log('onInit, loadSchedules');
        this.loadSchedules();
        this.isDataReady = true;
    };
    SchedulesScreenComponentBase.prototype.ngOnDestroy = function () {
        //console.log('cancel subSchedules');
        this.subSchedules.unsubscribe();
    };
    // abstract
    SchedulesScreenComponentBase.prototype.loadSchedules = function () {
        var _this = this;
        this.subSchedules = this.schedulesService
            .loadSchedules()
            .subscribe(function () { return _this.updateSchedules(_this.pageSet.page); });
    };
    // on events
    SchedulesScreenComponentBase.prototype.onResultsOrderChanged = function () {
        this.updateSchedules(1);
    };
    SchedulesScreenComponentBase.prototype.onResultsPageUpdated = function () {
        this.updateSchedules(this.pageSet.page);
    };
    // methods
    SchedulesScreenComponentBase.prototype.getMedalIcon = function (medal) {
        switch (medal) {
            case '1': return 'goldMedalEventIcon';
            case '2': return 'bronzeMedalEventIcon';
            default: return 'noMedalEventIcon';
        }
    };
    return SchedulesScreenComponentBase;
}(shared_1.ScreenComponentBase));
exports.SchedulesScreenComponentBase = SchedulesScreenComponentBase;
