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

            // close the menu if the user clicks on a link or changes location
            $scope.$on('$routeChangeSuccess', function () {
                $scope.hide_menu();
                window.scrollTo(0,0);
            });
        }
    ]);

    // landing page
    appControllers.controller( 'LandingController' , [
                 '$scope','$http',/*'CountryList',*/
        function( $scope , $http /*, CountryList*/ )
        {

            // wowjs animations
            new WOW().init();
            //$scope.apply();

            console.log("loading landing controller");

            /*
            CountryList.success( function( data ){
                $scope.country_list = data;
            })
            */

            $scope.$on('$viewContentLoaded', function(){
                //Here your view content is fully loaded !!
                //alert("all content is loaded");

                // try the wow js
                new WOW().init();
            });

            // make phones sticky
            //
            var _this = this;
            _this.which_sticky = 0;

            _this.is_sticky = function( number ){
                if( _this.which_sticky == number ){
                    return true;
                } else {
                    return false;
                }
            }

            // check to make sticky
            window.onscroll = function (event) {
            // called when the window is scrolled.
            
                // get scroll position
                var top = window.pageYOffset || document.documentElement.scrollTop; 
                //console.log(top);

                if( top > 1460 && top < 2980 ){
                    _this.which_sticky = 1;
                    document.getElementById("first-phone").style.marginTop = (top - 1460) + "px";
                }
                else if ( top > 3925 && top < 4280 ) {
                    _this.which_sticky = 3;
                }
                else {
                    _this.which_sticky = 0;
                }

                // make the dom FEEL IT
                $scope.$apply();

            }

            //console.log($scope);

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

