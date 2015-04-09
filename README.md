# showcase-angular1.3-route-bug-ie9
A show case of angular1.3 route bug in ie9, which creates more than 10 digest

# Reproduce the bug
## Install 
`npm install`
## Run app
- `$ node app`
- open IE9, open the console(shortcut F12), or open the IE9 mode in IE10 or IE11.
- go to `http://localhost:3000`
- click the button "Accéder"
- Here comes the error :  

Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
Watchers fired in the last 5 iterations: []
http://errors.angularjs.org/1.3.15/$rootScope/infdig?p0=10&p1=%5B%5D 
SCRIPT5022: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
Watchers fired in the last 5 iterations: []
http://errors.angularjs.org/1.3.15/$rootScope/infdig?p0=10&p1=%5B%5D 
angular.js, line 14346 character 13

