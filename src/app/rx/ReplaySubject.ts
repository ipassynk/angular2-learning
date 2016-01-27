import {Rx} from 'rx'

var subject =  new Rx.ReplaySubject(2);

subject.onNext('a');
subject.onNext('b');
subject.onNext('c');

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: b
// => Next: c

subject.onNext('d');