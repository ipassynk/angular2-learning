# Angular 2 Learning. 

I am learning angular 2 now. The repo contains the folloiwng examples:
- Reflection to build list of routes
- Custom decorator of angular components
- Observable from button click combine with Observable.interval
- Use observable for bind to input and display data from the observable
- Aka Angular 1 Transclude
- Observable that emits ticks on in a service and two components subscribe to the observable and debounce ticks based provided configuration
- Simple Templates
- Form
- Two lists moves data between each other. Shows input/output parameters interaction
- List managemenet using Observable. Thanks to  http://victorsavkin.com/post/137821436516/managing-state-in-angular-2-applications
- Child/Parent Input/Output communication
- Shows pub/sub for sibling components
- Pipe examples
- WebSocket with Observable
- Child/Parent nested routes
- Async collection filter example. Use rxjs to filter valueChanges
- Button state is controlled using combination of observables
- Timer with expiration
- Try http with all rxjs stuff like catch, retry, join several observable
- Immutable data example with ChangeDetectionStrategy.OnPush

## Running

```
$ npm install
```

You need to run two processes separately. The first will compile your TypeScript:

```
$ npm run tsc
```

To run the app locally with live reload enabled, use `npm start`:

```
$ npm start
```

This will run the app on port 8080 and open a new browser tab.
