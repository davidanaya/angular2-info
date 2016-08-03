"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, sortFields, reverse) {
        var _this = this;
        array.sort(function (a, b) {
            var comparison = 0; // to force while
            var bothAreEqual = true;
            var iField = 0;
            while (bothAreEqual && (iField < sortFields.length)) {
                //console.log(`compare for ${ a[sortFields[iField]] } and ${ b[sortFields[iField]] } with reverse ${ reverse }`);
                comparison = _this.compare(a, b, sortFields[iField], reverse);
                iField++;
                bothAreEqual = (comparison === 0);
            }
            //console.log(`comparison is ${ comparison }`);
            return comparison;
        });
        return array;
    };
    OrderByPipe.prototype.compare = function (a, b, sortField, reverse) {
        if (a[sortField] < b[sortField]) {
            return reverse ? 1 : -1;
        }
        else if (a[sortField] > b[sortField]) {
            return reverse ? -1 : 1;
        }
        return 0;
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
