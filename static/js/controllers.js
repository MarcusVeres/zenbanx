(function(){

    "use strict";


    // module used for controllers
    var appControllers = angular.module('appControllers' , [
        'results'   // the graph builder stuff
    ]);


    // create a position service to share coordinates between controllers
    // i am not super happy with this code, but it works and i am in a rush

    appControllers.service('coordinates', function () {

        var _this = this;

        // these are the transitions
        // a transition point is a dom element that is parallel to the scrolling phone
        // at the time of an animation switch
        _this.t1 = 'unset'; 
        _this.t2 = 'unset';
        _this.t3 = 'unset';

        // start and end points of animation / scrolling
        _this.start = 'unset';
        _this.end = 'unset'; 

        _this.init_phone_pos = 'unset';     // y coordinate of phone before any animations are applied
        _this.margin_from_top = 200         // distance from top of browser that phone "snaps" to 

        // getter and setter methods

        return {
            get: function ( var_name ) {
                return _this[var_name];
            },
            set: function( var_name , value ) {
                console.log("setting" , var_name , "to" , value);
                _this[var_name] = value;
            },
            get_init_phone_pos: function() {
                return _this.init_phone_pos;
            },
            get_margin: function() {
                return _this.margin_from_top;
            }
        };

    });


    // main navigation (in header)
    appControllers.controller( 'MainNavigationController' , [
                 '$scope','coordinates',
        function( $scope , coordinates )
        {
            console.log("loading main navigation controller");

            console.log("prop:" , coordinates.get('t1') );
            console.log("prop:" , coordinates.get('t2') );
            console.log("prop:" , coordinates.get('t3') );


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


            // determines which phone animation will be on top of the others ( visible )

            $scope.set_animation = function( number ) {
                $scope.which_animation = number;
            }


            // determines visibility of the overlay/underlay dropdown menu

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


            // track window position to manage display of dom elements

            window.onscroll = function (event) {

                // get scroll position
                var screen_top = window.pageYOffset || document.documentElement.scrollTop; 

                // for ribbon
                if( screen_top < 100 ){
                    $scope.expand_the_ribbon();
                } else {
                    $scope.compress_the_ribbon();
                }

                // hide the dropdown on scroll down
                $scope.hide_menu();


                // for phone sticky
                // TODO: if( not landing page, don't apply this code

                var t1 = coordinates.get('t1');
                var t2 = coordinates.get('t2');
                var t3 = coordinates.get('t3');
                var end = coordinates.get('end');

                var top_limit = t1.y + coordinates.get_margin();
                var bottom_limit = end.y;

                if( screen_top > top_limit && screen_top < bottom_limit ){
                    document.getElementById("mega-phone").style.marginTop = ( screen_top - coordinates.get_init_phone_pos() ) + "px";
                }

                // animation shifts
                if( screen_top < t1.y )
                {
                    console.log("first");
                    $scope.set_animation(1);
                }
                else if ((screen_top > t2.y - 400) && (screen_top < t3 - 400))
                {
                    console.log("second");
                    $scope.set_animation(2);
                }
                else if ( screen_top > (t3.y + t3.height))
                {
                    console.log("third");
                    $scope.set_animation(3);
                }
                else {
                    $scope.which_animation = 0;
                }

                // make the dom FEEL IT
                $scope.$apply();

            }

        }
    ]);


    // landing page
    appControllers.controller( 'LandingController' , [
                 '$scope','$http','coordinates',
        function( $scope , $http , coordinates )
        {
            console.log("loading landing controller");

            // wowjs animations
            new WOW().init();


            //Here your view content is fully loaded !!
            $scope.$on('$viewContentLoaded', function(){

                // try the wow js
                new WOW().init();

                // update the transitions 
                // refer to the 'coordinates' service for more information
                
                var t1 = document.getElementById('transition-1');
                var t2 = document.getElementById('transition-2');
                var t3 = document.getElementById('transition-3');
                var end = document.getElementById('transition-end');

                // set the coordinates 
                coordinates.set('t1', {
                    'y': t1.getBoundingClientRect().top,
                    'height': t1.offsetHeight
                });
                coordinates.set('t2', {
                    'y': t2.getBoundingClientRect().top,
                    'height': t2.offsetHeight
                });
                coordinates.set('t3', {
                    'y': t3.getBoundingClientRect().top,
                    'height': t3.offsetHeight
                });
                coordinates.set('end', {
                    'y': end.getBoundingClientRect().top,
                    'height': end.offsetHeight
                });

                // get the original position of the mega phone
                coordinates.set( "init_phone_pos" , document.getElementById('mega-phone').getBoundingClientRect().top );

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

