"use strict";
var shared_1 = require('../../shared');
var ScreenComponentBase = (function () {
    function ScreenComponentBase(commonCodesService) {
        this.commonCodesService = commonCodesService;
        this.isDataReady = false;
        this.reverse = false;
        this.pageSet = new shared_1.PageSet();
    }
    // lifecycle hooks
    ScreenComponentBase.prototype.ngOnInit = function () {
    };
    ScreenComponentBase.prototype.ngOnDestroy = function () {
    };
    ScreenComponentBase.prototype.onUpdatePage = function (event) {
        this.pageSet.page = event.page;
        this.onResultsPageUpdated();
    };
    ;
    ScreenComponentBase.prototype.getCommonCodeValue = function (commonCodeCategory, code) {
        return this.commonCodesService.getValue(commonCodeCategory, code);
    };
    ScreenComponentBase.prototype.isUpSort = function (p) {
        return this.order === p && !this.reverse;
    };
    ScreenComponentBase.prototype.isDownSort = function (p) {
        return this.order === p && this.reverse;
    };
    ScreenComponentBase.prototype.setOrder = function (order) {
        this.reverse = order === this.order ? !this.reverse : false;
        this.order = order;
        this.onResultsOrderChanged();
    };
    return ScreenComponentBase;
}());
exports.ScreenComponentBase = ScreenComponentBase;
