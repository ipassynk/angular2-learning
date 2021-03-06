import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

@ComponentDescriptionDecorator('WebSocket with Observable')
@Component({
  selector: 'websocket',
  template: `
        <div>
            <h3>WebSocket</h3>
            <div class="row">
                <div class="col-sm-4">
                    <input #phrase placeholder="Your phrase" />
                    <button (click)="sendMessage(phrase)" class="btn btn-primary-outline">Send</button>
                 </div>
                 <div class="col-sm-4">
                        Received echo from WebSocket: {{ observer | async }}
                 </div>
            </div>
        </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPushObserve
})
export default class WebSocketTest {
  observer:Subject<any> = new Subject<any>();
  ws:WebSocket;

  ngOnInit() {
    const BASE_URL = 'ws://echo.websocket.org';
    this.ws = new WebSocket(BASE_URL);

    this.ws.onmessage = (evt) => this.observer.next(evt.data);
    this.ws.onerror = (evt) => console.error(`Error: ${evt}`);
    this.ws.onclose = (evt) => console.log('WebSocket closed');
    this.ws.onopen = (evt) => console.log('WebSocket opened');
  }

  sendMessage({value}) {
    this.ws.send(value);
  }
}
