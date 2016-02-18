(function () {
  'use strict';

  angular.module('SampleInfoApp')
    .factory('app.contact.service', ContactService);

  function ContactService () {
    var contacts = [
      {
        "id": "1",
        "firstname": "John",
        "lastname": "Doe",
        "image": "http://lorempixel.com/600/700/business/",
        "thumb": "http://lorempixel.com/100/100/business/",
        "position": "CEO",
        "email": "john.doe@gmail.com",
        "phone": "123456789",
        "lastcontacted": "February 10 2016",
        "lifecyclestage": "Lead",
        "hubspotowner": "Yes",
        "twitter": "john doe"
      },
      {
        "id": "2",
        "firstname": "John",
        "lastname": "Doe 1",
        "image": "http://lorempixel.com/600/700/business/",
        "thumb": "http://lorempixel.com/100/100/business/",
        "position": "CTO",
        "email": "john.doe1@gmail.com",
        "phone": "1467839786",
        "lastcontacted": "February 12 2016",
        "lifecyclestage": "Lead",
        "hubspotowner": "No",
        "twitter": "John Doe 1"
      }
    ];

    return {
      getAllContacts: getAllContacts,
      getContactDetails: getContactDetails
    };

    function getAllContacts () {
      return contacts;
    }

    function  getContactDetails (contactId){
      for (var i=0; i<contacts.length; i++) {
        if (contacts[i].hasOwnProperty("id") && contacts[i].id === contactId) {
          return contacts[i];
        }
      }
    }
  }

})();
