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
var shared_1 = require('../../../shared');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.update = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.prevPage = function () {
        this.pageSet.page--;
        this.update.emit({
            page: this.pageSet.page
        });
    };
    PaginationComponent.prototype.nextPage = function () {
        this.pageSet.page++;
        this.update.emit({
            page: this.pageSet.page
        });
    };
    PaginationComponent.prototype.isLastPage = function () {
        return this.pageSet.page === this.pageSet.totalPages;
    };
    PaginationComponent.prototype.isFirstPage = function () {
        return this.pageSet.page === 1;
    };
    PaginationComponent.prototype.getResultsInfo = function () {
        switch (this.pageSet.size) {
            case 0: return '';
            case 1: return 'Item 1 of 1';
            default:
                return this.pageSet.totalPages === 1 ? "Items " + this.pageSet.from + " to " + this.pageSet.to :
                    "Items " + this.pageSet.from + " to " + this.pageSet.to + " from " + this.pageSet.size;
        }
    };
    PaginationComponent.prototype.getPaginationInfo = function () {
        switch (this.pageSet.totalPages) {
            case 0:
            case 1: return '';
            default: return "Page " + this.pageSet.page + " of " + this.pageSet.totalPages;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', shared_1.PageSet)
    ], PaginationComponent.prototype, "pageSet", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "update", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'ao-pagination',
            templateUrl: 'app/shared/components/pagination/pagination.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
