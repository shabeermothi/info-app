'use strict';

/**
 * @ngdoc overview
 * @name managecrisisApp
 * @description
 * # managecrisisApp
 *
 * Main module of the application.
 */
angular
  .module('SampleInfoApp', [
    'ngAnimate'
    ,'ngCookies'
    ,'ngMessages'
    ,'ngResource'
    ,'ngSanitize'
    ,'ngTouch'
    ,'ui.bootstrap'
    ,'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'views/contacts.html',
        controller: ['$scope', 'app.contact.service', function ($scope, ContactService) {
          $scope.contacts = ContactService.getAllContacts();
        }]
      })
      .state('details', {
        url: '/contacts/:contactId',
        templateUrl: 'views/contact-details.html',
        controller: ['$scope', '$stateParams', 'app.contact.service', function ($scope, $stateParams, ContactService) {
          $scope.contactDetails = ContactService.getContactDetails($stateParams.contactId);
        }]
      });
  });
