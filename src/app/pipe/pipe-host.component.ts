import {Component, EventEmitter, Input, Output} from 'angular2/core';
import LetterPipe from './letter-pipe.component';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

@ComponentDescriptionDecorator('Pipe examples')
@Component({
  selector: 'pipe-host',
  template: `
        <div>
            <h3>{{ currentDate | date | uppercase }}</h3>
            <ul>
                <li *ngFor="#item of items | letterPipe:'apple'">{{ item }}</li>
            </ul>
        </div>
    `,
  pipes: [LetterPipe]
})
export default class PipeHost {
  currentDate = new Date();
  items = ['apple', 'banana', 'cookie'];
}
