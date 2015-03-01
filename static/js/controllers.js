(function(){

    "use strict";

    // module used for controllers
    var appControllers = angular.module('appControllers' , [
        'results'   // the graph builder stuff
    ]);

    // main navigation (in header)
    appControllers.controller( 'MainNavigationController' , [
        function()
        {
            console.log("loading main navigation controller");
        }
    ]);

    // landing page
    appControllers.controller( 'LandingController' , [
                 '$scope','$http',/*'CountryList',*/
        function( $scope , $http /*, CountryList*/ )
        {
            console.log("loading landing controller");

            /*
            CountryList.success( function( data ){
                $scope.country_list = data;
            })
            */

            console.log($scope);
        }
    ]);

    //
    appControllers.controller( 'TestController' , [
        function()
        {
            console.log("loading test controller");
        }
    ]);


})(angular);

