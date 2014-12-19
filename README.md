Angular app
====================

AngularJS is a JavaScript MVC framework developed by Google.<br/>
I decided to write my own AngularJS app. For this demo I was using locale translate, storage, node.js server, grunt and bower task runners, karma & jasmine (unit testing) and protractor (e2e testing). <br/>
All config files you may find in the root folder.

### Getting Started
To begin we need [npm](https://www.npmjs.com/) (Node.js package manager) for install task runners [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/). <br/>
Before setting up Grunt ensure that your npm is up-to-date by running *npm update -g npm* (this might require sudo on certain systems). <br/>
After that install Grunt and Bower globaly
```html
npm install -g grunt-cli
```
```html
npm install -g bower
```
In *.json* files we have all packages what we need for work app. This command installs a package, and any packages that it depends on
```html
npm install
```
```html
bower install
```
Thats all. All packages installed. Go to root folder from console and run server
```html
node server.js

Static file server running at http://localhost:8888
```
Go ahead http://localhost:8888 and check app.

Information
============
If you have some questions, problems or improvement for this app, create issues and we will discuss.<br/>
Thank you!

License
========
[MIT License](http://opensource.org/licenses/mit-license.php)



