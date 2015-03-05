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

            // for compressing header

            $scope.is_ribbon_compressed = function(){
                return $scope.ribbon_compressed;
            };

            $scope.compress_the_ribbon = function() {
                $scope.ribbon_compressed = true;
            };

            $scope.expand_the_ribbon = function() {
                $scope.ribbon_compressed = false;
            }

            // 

            $scope.set_animation = function( number ) {
                $scope.which_animation = number;
            }

            // 

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


            // get starting coordinates of stop-points

            var first_start = 1525;
            var first_stop = 3280;

            var second_start = 3460;
            var second_stop = 3840;

            var third_start = 4135;
            var third_stop = 7050;

            // check to make sticky
            window.onscroll = function (event) {
            // called when the window is scrolled.

                // get scroll position
                var top = window.pageYOffset || document.documentElement.scrollTop; 
                //console.log(top);

                // for ribbon
                if( top < 100 ){
                    $scope.expand_the_ribbon();
                } else {
                    $scope.compress_the_ribbon();
                }

                // hide the dropdown on scroll down
                $scope.hide_menu();

                // for phone sticky
                if( top > first_start && top < third_stop ){
                    document.getElementById("mega-phone").style.marginTop = (top - first_start) + "px";
                }

                // animation shifts
                if( top > first_start && top < first_stop ){
                    console.log("first");
                    $scope.set_animation(1);
                }
                else if ( top > second_start && top < second_stop ) {
                    console.log("second");
                    $scope.set_animation(2);
                }
                else if ( top > third_start && top < third_stop ) {
                    console.log("third");
                    $scope.set_animation(3);
                }
                else {
                    $scope.which_animation = 0;
                }


                // old method: three phones

                /*
                if( top > first_start && top < first_stop ){
                    $scope.which_sticky = 1;
                    document.getElementById("first-phone").style.marginTop = (top - first_start) + "px";
                }
                else if ( top > third_start && top < third_stop ) {
                    $scope.which_sticky = 3;
                    document.getElementById("third-phone").style.marginTop = (top - third_start) + "px";
                }
                else {
                    $scope.which_sticky = 0;
                }
                */

                // make the dom FEEL IT
                $scope.$apply();

            }

            // 

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


            //Here your view content is fully loaded !!
            $scope.$on('$viewContentLoaded', function(){

                // try the wow js
                new WOW().init();

                // get the y offset of the transition points (used by the animation) once dom is loaded
                $scope.transition_1 = document.getElementById('transition-1').getBoundingClientRect().top;
                $scope.transition_2 = document.getElementById('transition-2').getBoundingClientRect().top;
                $scope.transition_3 = document.getElementById('transition-3').getBoundingClientRect().top;

            });


            var _this = this;

            // compress the scrollbar
            $scope.compress_ribbon = false;


            // make phones position fixed
            $scope.which_sticky = 0;

            $scope.is_sticky = function( number ){
                if( $scope.which_sticky == number ){
                    return true;
                } else {
                    return false;
                }
            }


            // determines which animation should be visible
            _this.which_animation = 0;

            _this.is_animation = function( number ){
                if( $scope.which_animation == number ){
                    return true;
                } else {
                    return false;
                }
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


    // news controller 
    appControllers.controller( 'NewsController' , [
                 '$scope','$http',
        function( $scope , $http )
        {
            console.log("loading news controller");

            // this is going to pull all frequently asked questions
            $http({
                method: 'GET',
                url: '/assets/data/news.json'
            })
            .success( function( data )
            {
                console.log("the faq data that we got is:", data);

                // assign the data to a scope variable that we can use in the dom
                $scope.posts = data;
            })
            .error( function( error )
            {
                console.log("something went wrong:", error);
            });

        }
    ]);


})(angular);

