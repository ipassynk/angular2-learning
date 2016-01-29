import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: 'letterPipe'})
export default class LetterPipe implements PipeTransform {
    transform(items:any[], args:any[]):any {
        return items.filter(item => item != args[0]);
    }
}
