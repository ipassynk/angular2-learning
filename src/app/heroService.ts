export default class heroService {
    public heroes:Array<string> = ['Julia', 'Eugene'];

    addHero(hero:string) {
        this.heroes.push(hero);

    }
}
