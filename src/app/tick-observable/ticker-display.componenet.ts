import {Component, Input} from "angular2/core";
import Ticker from "./ticker.service";
import {OnInit} from "angular2/core";
import "rxjs/operator/throttleTime";

@Component({
    selector: 'ticker-display',
    template: `
        Here is the tick {{ tick }}
    `
})
export default class TickerDisplay implements OnInit{
    @Input() delay;
    tick:number;
    constructor(private ticker:Ticker) {

    }
    ngOnInit() {
        this.ticker.tick
            .throttleTime(this.delay)
            .take(10)
            .do(x=>console.log(`delay:${this.delay} tick:${x}`))
            .subscribe((x)=>this.tick=x);
    }
}