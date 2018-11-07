app.controller('detailsController',function($scope,myService){
    console.log('all ok here');
    $scope.details = myService.details;
    $scope.message = details.full_name;
});