app.controller('myController', function($scope, $http, myService) {    
    $scope.arrays = '';
    $scope.searchStarted = false;
    $scope.search = function(){        
        if($scope.arrays){
            $scope.arrays.splice(0,$scope.arrays.length);
        }
        if ($scope.queryParameter){
            $scope.searchStarted = true;
            $http.get('https://api.github.com/search/repositories?q='+$scope.queryParameter)
            .then(function(response){
                $scope.arrays = response.data.items;                
            });
        }else{            
            alert('Please pass the search item');
        }
    };
    $scope.sortBy = function(propertyName) {
        $scope.propertyName = propertyName;
      };
    $scope.resetFilters = function(){
        $scope.filterText = '';
    };
    $scope.resetSearch = function(){
        $scope.queryParameter = '';
        $scope.searchStarted = false;
    };
    $scope.getDetails = function(item){   
        console.log(item);
        alert(item);
        myService.details = item;
    }
    
});