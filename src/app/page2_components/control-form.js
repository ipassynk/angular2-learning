var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ControlFormComponent = (function () {
    function ControlFormComponent() {
        this.form = new angular2_1.ControlGroup({
            rate: new angular2_1.Control(),
            location: new angular2_1.Control(),
            address: new angular2_1.Control()
        });
    }
    Object.defineProperty(ControlFormComponent.prototype, "selectedField", {
        get: function () {
            var _this = this;
            return Object.keys(this.form.controls)
                .filter(function (key) { return _this.form.controls[key].value; });
        },
        enumerable: true,
        configurable: true
    });
    ControlFormComponent = __decorate([
        angular2_1.Component({
            selector: 'control-form',
            template: "\n       <form [ng-form-model]=\"form\">\n           <label>Rate <input type=\"checkbox\" ng-control=\"rate\"></label>\n           <label>Location <input type=\"checkbox\" ng-control=\"location\"></label>\n           <label>Address <input type=\"text\" ng-control=\"location\"></label>\n       </form>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ControlFormComponent);
    return ControlFormComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControlFormComponent;
//# sourceMappingURL=control-form.js.map