import Hero from './../model/hero';

export default class HeroService {
    public heroes: Hero[] = [];

    addHero(hero: Hero) {
        this.heroes.push(hero);
    }
}
