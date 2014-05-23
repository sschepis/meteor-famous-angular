# Meteor + Famo.us + Angular = Splendsome

Splendsome brings Famo.us/Angular and Meteor together. Using Splendsome, you get:

* Famo.us seamless cross-device rendering.
* AngularJS modules, directives, controllers, services and scope.
* Meteor distributed realtime collections.

Therefore, you can:

* Create Famo.us components and animations using AngularJS directives.
* Make AngularJS models synchronized worldwide through Meteor's client/cloud platform.
* Focus in the application instead of boilerplate Ajax / REST management using $http, $resource or other.

### Read more on the project pages:

- [Famo.us/Angular](http://famo.us/angular)
- [Famo.us](http://famo.us)
- [AngularJS](http://angularjs.org)
- [Meteor](http://meteor.com)

These libraries are under active development.
While it is possible to create powerful and stable apps,
some things are expected to change as they move forward.

## Quick start

1. Install [git](http://git-scm.com/downloads) <code>sudo apt-get install npm</code> in Debian/Ubuntu or [follow their instructions](http://git-scm.com/downloads)
2. Install [Meteor](http://docs.meteor.com/#quickstart) <code>curl https://install.meteor.com | /bin/sh</code>
3. Install [Meteorite](https://github.com/oortcloud/meteorite#installing-meteorite) <code>npm install -g meteorite</code>
4. Create a new meteor app using <code>meteor create myapp</code> or navigate to the root of your existing app.
5. Add [ngMeteor](https://atmospherejs.com/package/ngMeteor) package <code>mrt add ngMeteor</code>
6. Add [famono](https://atmospherejs.com/package/famono) package <code>mrt add famono</code>

## Running (using Splendsome in your Meteor app)

Having a Meteor app with ngMeteor and famono packages included, you can require Splendsome at any point of your client-side code:

    require("splendsome");

Famono will install Famo.us/Angular and make it available for your app automatically (even in a live reload).
