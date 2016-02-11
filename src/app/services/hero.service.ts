import Hero from './../model/hero';

export default class heroService {
    public heroes:Hero[] = [];

    addHero(hero:Hero) {
        this.heroes.push(hero);
    }
}
