"use strict";
var shared_1 = require('../../shared');
var ResultSet = (function () {
    function ResultSet() {
        this.results = [];
        this.pageSet = new shared_1.PageSet();
    }
    ResultSet.prototype.update = function (results, page, totalResults) {
        this.results = results;
        this.pageSet.update(results.length, page, totalResults);
    };
    return ResultSet;
}());
exports.ResultSet = ResultSet;
