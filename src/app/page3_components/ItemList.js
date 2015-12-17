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
var ItemList = (function () {
    function ItemList() {
        this.switchStatus = new angular2_1.EventEmitter();
    }
    ItemList.prototype.update = function (value, name) {
        this.switchStatus.emit({ value: event.target.checked, name: name });
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "title");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "items");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "state");
    ItemList = __decorate([
        angular2_1.Component({
            selector: "item-list",
            template: "\n        <div style=\"border:2px solid blue;\">\n            <h3>{{ title }} </h3>\n            <ul>\n                <li *ng-for=\"#p of items\">\n                    <label><input type=\"checkbox\" (click)=\"update($event, p)\" [checked]=\"state==='y'\"/>{{ p }}</label>\n                </li>\n            </ul>\n        </div>\n    ",
            inputs: ['title', 'items', 'state'],
            outputs: ['switchStatus: statusChange'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemList);
    return ItemList;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemList;
//# sourceMappingURL=ItemList.js.map