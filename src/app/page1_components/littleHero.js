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
var heroService_1 = require("./../services/heroService");
var hero_1 = require("./../model/hero");
var heroRender_1 = require("./heroRender");
var LittleTour = (function () {
    function LittleTour(heroService) {
        this.heroService = heroService;
        this.hidden = true;
    }
    LittleTour.prototype.addHero = function (newHero) {
        this.hidden = false;
        if (newHero.value) {
            var hero = new hero_1.default(1, newHero.value, "strong");
            this.heroService.addHero(hero);
            newHero.value = null;
        }
    };
    LittleTour = __decorate([
        angular2_1.Component({
            selector: 'little-tour',
            template: "\n        <div [hidden]=\"hidden\" class=\"alert alert-success\">New hero is added!</div>\n        <input #new-hero (keyup.enter)=\"addHero(newHero)\">\n        <button class=\"btn btn-primary\" (click)=\"addHero(newHero)\">Add Hero</button>\n        <ul>\n            <li *ng-for=\"#hero of heroService.heroes\"><hero-render [hero]=\"hero\"></hero-render></li>\n        </ul>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES, heroRender_1.default]
        }), 
        __metadata('design:paramtypes', [heroService_1.default])
    ], LittleTour);
    return LittleTour;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LittleTour;
//# sourceMappingURL=littleHero.js.map