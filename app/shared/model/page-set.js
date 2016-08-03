"use strict";
exports.PAGE_SIZE = 10;
var PageSet = (function () {
    function PageSet() {
        this.page = 1;
        this.size = 0;
        this.totalPages = 1;
        this.from = 1;
        this.to = 0;
    }
    PageSet.prototype.update = function (results, page, totalResults) {
        this.page = page;
        this.size = totalResults;
        this.totalPages = Math.floor(this.size / exports.PAGE_SIZE) + 1;
        this.from = ((this.page - 1) * exports.PAGE_SIZE) + 1;
        this.to = this.from + (results - 1);
    };
    return PageSet;
}());
exports.PageSet = PageSet;
