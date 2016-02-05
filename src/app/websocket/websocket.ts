import {Component, ChangeDetectionStrategy, EventEmitter} from "angular2/core";
import { Observable} from "rxjs/Rx";
import {Subscriber} from "rxjs/Subscriber";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";

@ComponentDescriptionDecorator("WebSocket for Angular2")
@Component({
    selector: 'websocket',
    template: `
        <div>
            <h2>WebSocket</h2>
            <div class="row">
                <div class="col-sm-4">
                    <input #phrase placeholder="Your phrase" />
                    <button (click)="sendMessage(phrase)" class="btn btn-primary">Send</button>
                 </div>
                 <div class="col-sm-4">
                        Echo from WebSocket: {{ observer | async }}
                 </div>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPushObserve
})
export default class WebSocketTest {
    observer:EventEmitter<any> = new EventEmitter<any>();
    ws:WebSocket;

    ngOnInit() {
        const BASE_URL = 'ws://echo.websocket.org';
        this.ws = new WebSocket(BASE_URL);

        this.ws.onmessage = (evt) => this.observer.emit(evt.data);
        this.ws.onerror = (evt) => console.error(`Error: ${evt}`);
        this.ws.onclose = (evt) => console.log("WebSocket closed");
        this.ws.onopen = (evt) => console.log("WebSocket opened");
    }

    sendMessage({value}) {
        this.ws.send(value);
    }
}