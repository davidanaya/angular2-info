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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var ComboComponent = (function () {
    function ComboComponent() {
        this.type = 'data';
        this.disabled = false;
        this.update = new core_1.EventEmitter();
        this.selectedName = 'All'; // display label of the selected option
        this.addItemAll = false; // if true, adds option 'All' to the array options
        this.isTypeSports = false; // type of dropdown, used to display images for every item
    }
    // lifecycle hooks
    ComboComponent.prototype.ngOnInit = function () {
        this.isTypeSports = this.type ? this.type === 'sports' : false;
    };
    ComboComponent.prototype.ngOnChanges = function (changes) {
        if (changes['options']) {
            this.selectedName = 'All';
            this.selectedId = undefined;
        }
        this.dropLayout = this.getBlocksClass();
    };
    // methods
    ComboComponent.prototype.getBlocksClass = function () {
        // update class depending on number of elements	
        if (this.options) {
            var allOption = this.addItemAll ? 1 : 0;
            var blocks = (this.options.length + allOption) / 6;
            var mod = (this.options.length + allOption) % 6;
            if (blocks < 1 || (blocks === 1 && mod === 0))
                return 'dropdown-list-6';
            else if (blocks < 2 || (blocks === 2 && mod === 0))
                return 'dropdown-list-12';
            else if (blocks < 3 || (blocks === 3 && mod === 0))
                return 'dropdown-list-18';
            else
                return 'dropdown-list-more';
        }
    };
    ComboComponent.prototype.isSelection = function () {
        return this.selectedId ? true : false;
    };
    ComboComponent.prototype.select = function (item) {
        this.selectedId = item ? item['id'] : undefined;
        this.selectedName = item ? item['name'] : 'All';
        this.update.emit({
            selected: item ? item['id'] : ''
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ComboComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComboComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ComboComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComboComponent.prototype, "update", void 0);
    ComboComponent = __decorate([
        core_1.Component({
            selector: 'ao-combo',
            templateUrl: 'app/shared/components/combo/combo.component.html',
            directives: [ng_bootstrap_1.NGB_DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ComboComponent);
    return ComboComponent;
}());
exports.ComboComponent = ComboComponent;
