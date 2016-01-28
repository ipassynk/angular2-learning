/**
 * Created by passynko on 1/28/2016.
 */
import {Component, ChangeDetectionStrategy} from "angular2/core";
import { Observable, DOM, Observer } from "rxjs/Rx";

@Component({
    selector: 'websocket',
    template:`
        <div>
            <h2>websocket</h2>
            {{ socket | async }}
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
})
export default class Websocket {
    socket:Observable<any>;
    constructor() {

        this.socket = DOM.fromWebSocket(
            'ws://echo.websockets.org',
            null, // no protocol
            openObserver,
            closingObserver);

        var openObserver = Observer.create(function(e) {
            console.info('socket open');
            // Now it is safe to send a message
            this.socket.next('test');
        });

        var closingObserver = Observer.create(function() {
            console.log('socket is about to close');
        });
    }
}