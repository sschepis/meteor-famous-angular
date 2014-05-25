Package.describe({
  summary: "Seamless Famous animations in any device and super-heroic AngularJS front-end MVW framework in your Meteor realtime distributed app"
});

Package.on_use(function(api) {
    api.use('ngMeteor');
    api.use('famono');

    api.add_files('famous-angular.css', 'client');
    api.add_files('requirements.js', 'client');
});
