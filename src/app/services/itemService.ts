export default class ItemService {
    public activeItems:Array<string> = ["bluberry", "banana"];
    public passiveItems:Array<string> = ["apple", "orange"];

    pStatus(val) {
        this.passiveItems = this.passiveItems.filter((n)=> n !== val.name);
        this.activeItems.push(val.name);
    }

    aStatus(val) {
        this.activeItems = this.activeItems.filter((n)=> n !== val.name);
        this.passiveItems.push(val.name);
    }
}