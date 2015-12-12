import Hero from "./hero";

export default class heroService {
    public heroes:Hero[] = [];

    addHero(hero:Hero) {
        this.heroes.push(hero);
    }
}
