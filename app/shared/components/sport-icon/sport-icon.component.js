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
var SportIconComponent = (function () {
    function SportIconComponent(commonCodesService) {
        this.commonCodesService = commonCodesService;
        this.fullName = false;
    }
    SportIconComponent.prototype.ngOnChanges = function (changes) {
        if (changes['sport']) {
            this.sportName = this.fullName ? this.commonCodesService.getValue('discipline', this.sport) : this.sport;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SportIconComponent.prototype, "sport", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SportIconComponent.prototype, "fullName", void 0);
    SportIconComponent = __decorate([
        core_1.Component({
            selector: 'ao-sport-icon',
            templateUrl: 'app/shared/components/sport-icon/sport-icon.component.html'
        }), 
        __metadata('design:paramtypes', [shared_1.CommonCodesService])
    ], SportIconComponent);
    return SportIconComponent;
}());
exports.SportIconComponent = SportIconComponent;
