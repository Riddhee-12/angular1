//Define Angular app
var app = angular.module("studentApp", []);

//Define Controller
app.controller("StudentController", function ($scope){
    $scope.student = {
        name:'Riddhee Tingare',
        roll:'101',
        course:'Computer Science'
    };
});