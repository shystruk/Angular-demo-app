Angular app
====================

AngularJS is a JavaScript MVC framework developed by Google.<br/>
I have decided to write my own AngularJS app where I will be use:<br/>
- Nodejs for server side;
- MongoDB (database);
- Karma + Jasmine for BDD testing;
- Protractor + Selenium WebDriver for e2e testing.<br/>

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
***database***
You have to install MongoDB on your PC [MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/) and run it.
```html
mongod --dbpath /mongo/db
```
than create database
```html
mongo angular_demo
```
Thats all. All packages installed. Go to root folder from console and run server
```html
node server.js
```

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



