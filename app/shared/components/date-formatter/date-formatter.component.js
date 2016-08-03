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
var DateFormatterComponent = (function () {
    function DateFormatterComponent(helperService) {
        this.helperService = helperService;
    }
    DateFormatterComponent.prototype.ngOnChanges = function (changes) {
        if (changes['date']) {
            this.date = changes['date'].currentValue;
        }
        if (changes['pattern']) {
            this.pattern = changes['pattern'].currentValue;
        }
        this.outDate = this.helperService.dateToString(new Date(this.date), this.pattern);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DateFormatterComponent.prototype, "date", void 0);
    __decorate([
        // Date.getTime() ms representing the date
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateFormatterComponent.prototype, "pattern", void 0);
    DateFormatterComponent = __decorate([
        core_1.Component({
            selector: 'ao-date-formatter',
            template: '<span>{{ outDate }}</span>'
        }), 
        __metadata('design:paramtypes', [shared_1.HelperService])
    ], DateFormatterComponent);
    return DateFormatterComponent;
}());
exports.DateFormatterComponent = DateFormatterComponent;
