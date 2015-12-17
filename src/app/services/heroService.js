var heroService = (function () {
    function heroService() {
        this.heroes = [];
    }
    heroService.prototype.addHero = function (hero) {
        this.heroes.push(hero);
    };
    return heroService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heroService;
//# sourceMappingURL=heroService.js.map