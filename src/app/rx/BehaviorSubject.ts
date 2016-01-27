import {BehaviorSubject} from 'rxjs'

var subject = new BehaviorSubject(42);

subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);

subject.next(56);


subject.subscribe(
    function (x) {
        console.log('Next2: ' + x.toString());
    },
    function (err) {
        console.log('Error2: ' + err);
    },
    function () {
        console.log('Completed2');
    }
);


subject.next(57);