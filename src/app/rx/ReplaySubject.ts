import {ReplaySubject} from 'rxjs'

var subject =  new ReplaySubject(2);

subject.next('a');
subject.next('b');
subject.next('c');

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

subject.next('d');