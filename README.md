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
5. Add [splendsome](https://atmospherejs.com/package/splendsome) package <code>mrt add splendsome</code>

## Running (using Splendsome in your Meteor app)

To unleash the power of this fantastic combo, you need to:

- Require `splendsome`
- Use the angular module `famous.angular` as a dependency of your own angular module
- Push your module into ngMeteor

Super easy:

    if (Meteor.isClient)
    {
      require('splendsome');
      angular.module('myModule', ['famous.angular']);
      ngMeteor.requires.push('myModule');
    }

And you can start coding like this right away in your templates:

    <template name="hello">

      <h1>Hello World!</h1>
      <p>{{ greeting }}</p>

      <input ng-model="text" />
      <p>[[ text ]]</p>

      <fa-app style="height: 200px">
          <fa-surface fa-background-color="'red'" fa-size="[108, 108]">
              Hello world
          </fa-surface>
      </fa-app>

    </template>

In this example you have:

1. a common Blaze / Spacebars live data template ([read more](http://docs.meteor.com/#livehtmltemplates))
2. a simple usage of ngModel directive providing 2-way data binding ([read more](https://github.com/loneleeandroo/ngMeteor/#new-data-binding-to-avoid-conflict))
3. a Famo.us/Angular Surface directive with 'Hello world' on a red background ([read more](http://famo.us/integrations/angular/docs/api/))

## Have fun!
