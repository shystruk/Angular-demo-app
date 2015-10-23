Angular app
====================

[![Join the chat at https://gitter.im/shystruk/Angular-demo-app](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/shystruk/Angular-demo-app?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
***database***<br/>
You have to install [MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/) on your PC.
MongoDB requires a data directory to store all data. Create folder where you will store data.
```html
C:\mongo\db
```
Go to MongoDB directory from a Command Prompt (for example):
```html
C:\Program Files\MongoDB\Server\***version***\bin\
```
run (you will see message "waiting for connections on port ***** ")
```html
mongod --dbpath C:/mongo/db
```
than you need to create database. Go to MongoDB directory from a new window Command Prompt again and create db (you will see message "connectiong to: angular_demo"):  
```html
mongo angular_demo
```
DB has been created and connection to DB has opened and you will see message "connection accepted from 127.0.0.1:*****" on first Command Prompt window. For more details see page [MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

Thats all. All packages installed. Go to root folder from console and run server
```html
node server.js
```

Static file server running at http://localhost:8888
```html
Go ahead http://localhost:8888 and check app.
```

Information
============
If you have some questions, problems or improvement for this app, create issues and we will discuss.<br/>
Thank you!

License
========
[MIT License](http://opensource.org/licenses/mit-license.php)



