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
var hero_1 = require("./../model/hero");
var HeroRender = (function () {
    function HeroRender() {
    }
    HeroRender.prototype.getHeroClass = function () {
        return this.hero.name === 'Julia' ? "hero-red" : "hero-green";
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', hero_1.default)
    ], HeroRender.prototype, "hero");
    HeroRender = __decorate([
        angular2_1.Component({
            selector: 'hero-render',
            styles: ["\n    .hero-red {\n        background-color: red;\n        text-decoration: line-through;\n        text-line-through-color: black;\n    }\n    .hero-green {\n        background-color: #42A948;\n    }\n    .hero {\n        padding: 20px 0;\n    }\n    "],
            template: "\n        <div [ng-class]=\"getHeroClass()\" class=\"hero\">\n            {{ hero.name }} | {{ hero.power }}\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeroRender);
    return HeroRender;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroRender;
//# sourceMappingURL=heroRender.js.map