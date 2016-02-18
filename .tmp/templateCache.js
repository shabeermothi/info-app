angular.module('managecrisisApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/contact-details.html',
    "<h2>Contact Details</h2>"
  );


  $templateCache.put('views/contacts.html',
    "<h2>Contacts</h2> <div class=\"row\"> <div class=\"col-md-3 well\" style=\"margin-left: 10px\" ng-repeat=\"contact in contacts\"> <a href=\"#/contacts/{{contact.id}}\"> <div class=\"row\"> <h2>{{contact.name}}</h2> </div> </a> </div> </div>"
  );


  $templateCache.put('views/home.html',
    "<h2>Home</h2> <div class=\"row\"> Try the contacts page. </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"../../static/images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/stories.html',
    "<h2>Stories Page</h2>"
  );

}]);
