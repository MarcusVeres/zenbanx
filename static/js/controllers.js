(function(){

    "use strict";

    // module used for controllers
    var appControllers = angular.module('appControllers' , [
        'results'   // the graph builder stuff
    ]);

    // main navigation (in header)
    appControllers.controller( 'MainNavigationController' , [
                 '$scope',
        function( $scope )
        {
            console.log("loading main navigation controller");

            $scope.menu_visible = false;

            $scope.hide_menu = function() {
                $scope.menu_visible = false;
            }

            $scope.show_menu = function() {
                $scope.menu_visible = true;
            }

            $scope.toggle_menu = function() {
                if( $scope.menu_visible ) {
                    $scope.hide_menu();
                    return;
                } 
                $scope.show_menu();
            }

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

