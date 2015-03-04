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
            console.log("loading landing controller");

            // wowjs animations
            new WOW().init();

            $scope.$on('$viewContentLoaded', function(){
                //Here your view content is fully loaded !!

                // try the wow js
                new WOW().init();
            });


            var _this = this;

            // make phones position fixed
            _this.which_sticky = 0;

            _this.is_sticky = function( number ){
                if( _this.which_sticky == number ){
                    return true;
                } else {
                    return false;
                }
            }


            // determines which animation should be visible
            _this.which_animation = 1;

            _this.is_animation = function( number ){
                if( _this.which_animation == number ){
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


                var first_start = 1350;
                var first_stop = 3150;

                var second_start = 3160;
                var second_stop = 4215;

                var third_start = 4325;
                var third_stop = 4780;


                // new method: animation toggling

                // for phone sticky
                if( top > first_start && top < third_stop ){
                    document.getElementById("mega-phone").style.marginTop = (top - first_start) + "px";
                }

                // animation shifts
                if( top > first_start && top < first_stop ){
                    _this.which_animation = 1;
                }
                else if ( top > second_start && top < second_stop ) {
                    _this.which_animation = 2;
                }
                else if ( top > third_start && top < third_stop ) {
                    _this.which_animation = 3;
                }
                else {
                    _this.which_animation = 0;
                }


                // old method: three phones

                /*
                if( top > first_start && top < first_stop ){
                    _this.which_sticky = 1;
                    document.getElementById("first-phone").style.marginTop = (top - first_start) + "px";
                }
                else if ( top > third_start && top < third_stop ) {
                    _this.which_sticky = 3;
                    document.getElementById("third-phone").style.marginTop = (top - third_start) + "px";
                }
                else {
                    _this.which_sticky = 0;
                }
                */

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


    // faq controller 
    appControllers.controller( 'FaqController' , [
                 '$scope','$http',
        function( $scope , $http )
        {
            console.log("loading faq controller");

            // this is going to pull all frequently asked questions
            $http({
                method: 'GET',
                url: '/assets/data/faqs.json'
            })
            .success( function( data )
            {
                console.log("the faq data that we got is:", data);

                // assign the data to a scope variable that we can use in the dom
                $scope.faq_questions = data;
            })
            .error( function( error )
            {
                console.log("something went wrong:", error);
            });

        }
    ]);


})(angular);

