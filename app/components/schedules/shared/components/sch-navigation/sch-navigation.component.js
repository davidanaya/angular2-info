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
var router_1 = require('@angular/router');
var shared_1 = require('../../../../../shared');
var SchNavigationComponent = (function () {
    function SchNavigationComponent(commonCodesService) {
        this.commonCodesService = commonCodesService;
        this.update = new core_1.EventEmitter();
        this.sport = '';
        this.event = '';
    }
    // lifecycle hooks
    SchNavigationComponent.prototype.ngOnInit = function () {
        this.sportsList = this.commonCodesService.getSportList();
    };
    // on events
    SchNavigationComponent.prototype.onSelect = function (updateEvents) {
        this.update.emit({
            sport: this.sport,
            event: this.event
        });
        if (updateEvents) {
            this.eventsInSport = this.commonCodesService.getEventsList(this.sport);
        }
    };
    SchNavigationComponent.prototype.isSelected = function (state) {
        return state === this.selected;
    };
    SchNavigationComponent.prototype.onSelectSport = function (event) {
        this.sport = event.selected;
        this.event = '';
        this.eventsInSport = [];
        this.onSelect(true);
    };
    SchNavigationComponent.prototype.onSelectEvent = function (event) {
        this.event = event.selected;
        this.onSelect(false);
    };
    // methods
    SchNavigationComponent.prototype.isSportSelected = function () {
        return this.sport ? this.sport !== '' : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchNavigationComponent.prototype, "selected", void 0);
    __decorate([
        // selected state in the component
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SchNavigationComponent.prototype, "update", void 0);
    SchNavigationComponent = __decorate([
        core_1.Component({
            selector: 'ao-sch-navigation',
            templateUrl: 'app/components/schedules/shared/components/sch-navigation/sch-navigation.component.html',
            directives: [shared_1.ComboComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [shared_1.CommonCodesService])
    ], SchNavigationComponent);
    return SchNavigationComponent;
}());
exports.SchNavigationComponent = SchNavigationComponent;
