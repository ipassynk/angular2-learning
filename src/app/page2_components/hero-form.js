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
var heroService_1 = require("./../services/heroService");
var HeroFormComponent = (function () {
    function HeroFormComponent(heroService) {
        this.heroService = heroService;
        this.powers = ['Smart', 'Flexible', 'Hot', 'Strong'];
        this.model = new hero_1.default(18, 'Julia', this.powers[1], 'Meee');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.heroService.addHero(new hero_1.default(1, this.model.name, this.powers[1]));
    };
    HeroFormComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-form',
            templateUrl: 'src/app/page2_components/hero-form.html'
        }), 
        __metadata('design:paramtypes', [heroService_1.default])
    ], HeroFormComponent);
    return HeroFormComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroFormComponent;
//# sourceMappingURL=hero-form.js.map