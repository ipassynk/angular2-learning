import {Component, ChangeDetectionStrategy} from "angular2/core";
import { Observable} from "rxjs/Rx";
import {Subscriber} from "rxjs/Subscriber";

@Component({
    selector: 'websocket',
    template: `
        <div>
            <h2>WebSocket</h2>
            <input #name placeholder="Your name" />
            <button (click)="sendMessage(name.value)">Send</button>
            {{ observer | async }}
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPushObserve
})
export default class WebSocketTest {
    observer:Subscriber<any>;
    ws:WebSocket;

    ngOnInit() {
        const BASE_URL = 'ws://echo.websocket.org';
        this.ws = new WebSocket(BASE_URL);

        let observable = Observable.create(observer => {
            console.log('aaa');
            this.observer = observer;

            this.ws.onmessage = (evt) => this.observer.next(evt.data);
            this.ws.onerror = (evt) => console.error(`Error: ${evt}`);
            this.ws.onclose = (evt) => console.log("WebSocket closed");
            this.ws.onopen = (evt) => console.log("WebSocket opened");
        });
    }

    sendMessage(name) {
        this.ws.send(name);
    }
}