(function() {

  'use strict';

  angular
    .module('rateAndDate.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService'];

  function authController(authService) {
    const that = this;
    that.user = {};
    that.newUser = initFormObj();
    that.onSubmit = () => {
      authService.login(that.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      that.user = {};
    };
    that.register = () => {
      authService.register(that.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      that.newUser = {};
    };
  }

  function initFormObj() {
    const newUser = {
      active: true,
      username: 'Ho0dLuM',
      names: {
        firstName: 'Jh0',
        lastName: 'Keil'
      },
      description: 'You could find someone more worth your time.',
      avatar: '../../assets/avatar.jpg',
      email: 'H@mail.com',
      password: 'secretPass',
      dob: '1888-08-08',
      phone: '123-456-7890',
      address: {
        zipcode: '80128',
        geo: {
          lng: 0,
          lat: 0
        },
        suite: 'D',
        city: 'Littleton',
        street: 'Chatfield Ave'
      },
      website: 'https://github.com/Ho0dLuM',
      company: {
        bs: 'Awesome',
        catchPhrase: 'We only produce Awesome',
        name: 'Awesome Co'
      },
      slug: '8888',
      gender: 0,
      interestedIn: [
        0
      ],
      _matches: [
        {
          _id: '5719234249f05f11000fdb62',
          _id: '5719234249f05f11000fdeb0'
        }
      ]
    }
    return newUser;
  }

})();
/*
{
    "__v": 0,
    "_id": "5811192ffff5051100cee96a",
    "_matches": [
        "5719234249f05f11000fdeb0"
    ],
    "active": true,
    "address": {
        "city": "Littleton",
        "geo": {
            "lat": 0,
            "lng": 0
        },
        "street": "Chatfield Ave",
        "suite": "D",
        "zipcode": "80128"
    },
    "admin": false,
    "avatar": "../../assets/avatar.jpg",
    "company": {
        "bs": "Awesome",
        "catchPhrase": "We only produce Awesome",
        "name": "Awesome Co"
    },
    "description": "You could find someone more worth your time.",
    "dob": "1888-08-08T00:00:00.000Z",
    "email": "h@mail.com",
    "gender": 0,
    "interestedIn": [
        0
    ],
    "names": {
        "firstName": "Jh0",
        "lastName": "Keil"
    },
    "password": "$2a$10$WjEYjpIFlUCO6wrQPUM4y.r06ju6WB6iSCa705Y34aSK3x4uEfTb2",
    "phone": "123-456-7890",
    "slug": "8888",
    "username": "ho0dlum",
    "website": "https://github.com/Ho0dLuM"
},
*/
