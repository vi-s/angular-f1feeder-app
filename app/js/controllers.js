'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

angular.module('F1FeederApp.controllers', [])
  .controller('driversController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
    
    // $scope.driversList = [
    //   {
    //       Driver: {
    //           givenName: 'Sebastian',
    //           familyName: 'Vettel'
    //       },
    //       points: 322,
    //       nationality: "German",
    //       Constructors: [
    //           {name: "Red Bull"}
    //       ]
    //   },
    //   {
    //       Driver: {
    //       givenName: 'Fernando',
    //           familyName: 'Alonso'
    //       },
    //       points: 207,
    //       nationality: "Spanish",
    //       Constructors: [
    //           {name: "Ferrari"}
    //       ]
    //   }    
    // ];
  });