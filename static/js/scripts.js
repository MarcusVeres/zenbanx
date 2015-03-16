// avoid collisions
(function(){

    "use strict";


    // handles the coordinates and positioning of dom elements
    // it is used to manage the behavior and animations of the phone and text
    
    var coordinates = function(){

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
        _this.margin_from_top = 160;        // distance from top of browser that phone "snaps" to 
        _this.buffer = 200;                 // distance from transition point that the animation switches

        // getter and setter methods

        return {
            get: function ( var_name ) {
                return _this[var_name];
            },
            set: function( var_name , value ) {
                //console.log("setting" , var_name , "to" , value);
                _this[var_name] = value;
            },
            get_init_phone_pos: function() {
                return _this.init_phone_pos;
            },
        };

    })();

    // -------------------------------------
    // extracted from: navigation controller 

        // for compressing header

        doc_scope.is_ribbon_compressed = function(){
            return doc_scope.ribbon_compressed;
        };

        doc_scope.compress_the_ribbon = function() {
            doc_scope.ribbon_compressed = true;
        };

        doc_scope.expand_the_ribbon = function() {
            doc_scope.ribbon_compressed = false;
        }


        // determines which phone animation will be on top of the others ( visible )

        doc_scope.set_animation = function( number ) {
            doc_scope.which_animation = number;
        }


        // compress the scrollbar
       
        doc_scope.compress_ribbon = false;


        // determines visibility of the overlay/underlay dropdown menu

        doc_scope.menu_visible = false;

        doc_scope.hide_menu = function() {
            doc_scope.menu_visible = false;
        }

        doc_scope.show_menu = function() {
            doc_scope.menu_visible = true;
        }

        doc_scope.toggle_menu = function() {
            if( doc_scope.menu_visible ) {
                doc_scope.hide_menu();
                return;
            } 
            doc_scope.show_menu();
        }


        // close the menu if the user clicks on a link or changes location
       
        /* 
        doc_scope.$on('$routeChangeSuccess', function () 
        {
            // hide the dropdown menu
            doc_scope.hide_menu();

            // scroll the window to the top of the page (people complained about this)
            window.scrollTo(0,0);

            // reset the mega phone margin
            var mega_phone = document.getElementById("mega-phone");
            if( mega_phone ){
                //console.log("RESETTING");
                mega_phone.style.marginTop = "1px";

            }

        });
        */

        // track window position to manage display of dom elements

        window.onscroll = function (event) {

            // get scroll position
            var screen_top = window.pageYOffset || document.documentElement.scrollTop; 

            // for ribbon
            if( screen_top < 100 ){
                doc_scope.expand_the_ribbon();
            } else {
                doc_scope.compress_the_ribbon();
            }

            // update the dom to affect the header
            // TODO : update only the header .. i think scope.apply is overkill
            doc_scope.$apply();

            // hide the dropdown on scroll down
            doc_scope.hide_menu();


            // for phone sticky
            // if we are not on a cell-phone page, don't apply this code
            // not the cleanest way to do this, but again, in a huge rush
            if( !document.getElementById("mega-phone") ){
                return;
            }

            var margin = coordinates.get('margin_from_top');

            var buffer = coordinates.get('buffer');
            var t1 = coordinates.get('t1');
            var t2 = coordinates.get('t2');
            var t3 = coordinates.get('t3');
            var end = coordinates.get('end');

            var top_limit = t1.y;
            var bottom_limit = end.y;

            // compensate for header n' shit
            screen_top += coordinates.get('margin_from_top');

            if( screen_top > top_limit && screen_top < bottom_limit ){
                document.getElementById("mega-phone").style.marginTop = ( screen_top - coordinates.get_init_phone_pos() ) + "px";
            }

            // animation shifts
            if( screen_top < t2.y - buffer )
            {
                //console.log("first");
                doc_scope.set_animation(1);
            }
            else if ((screen_top > t2.y - buffer) && (screen_top < t3.y - buffer))
            {
                //console.log("second");
                doc_scope.set_animation(2);
            }
            else if ( screen_top > t3.y - buffer )
            {
                //console.log("third");
                doc_scope.set_animation(3);
            }
            else {
                doc_scope.which_animation = 0;
            }

            
            // interstitials
            var fade = document.getElementById("interstitial"); 
            if( screen_top < t1.y + 200 )
            {
                var opacity = (t1.y - screen_top) / 100;
                //console.log("O:", opacity);
                fade.style.opacity = opacity;
            }
            else if(( screen_top > t2.y - 800 ) && (screen_top < t2.y - 400 ))
            {
                var opacity = (screen_top - t2.y + 800) / 100;
                //console.log("O:", opacity);
                fade.style.opacity = opacity; 
            }
            else if(( screen_top > t2.y - 400 ) && (screen_top < t2.y))
            {
                var opacity = (t2.y - screen_top - 200) / 100;
                //console.log("O:", opacity);
                fade.style.opacity = opacity; 
            }
            else if(( screen_top > t3.y - 800 ) && (screen_top < t3.y - 400 ))
            {
                var opacity = (screen_top - t3.y + 800) / 100;
                //console.log("O:", opacity);
                fade.style.opacity = opacity; 
            }
            else if(( screen_top > t3.y - 400 ) && (screen_top < t3.y))
            {
                var opacity = (t3.y - screen_top - 200) / 100;
                //console.log("O:", opacity);
                fade.style.opacity = opacity; 
            } 
            else {
                fade.style.opacity = 0; 
            }
            
        }

    // ends: navigation controller 
    // -------------------------------------


    // -------------------------------------
    // extracted from: landing controller 

            // make phones position fixed
            doc_scope.which_sticky = 0;

            doc_scope.is_sticky = function( number ){
                if( doc_scope.which_sticky == number ){
                    return true;
                } else {
                    return false;
                }
            }


            // determines which animation should be visible
            doc_scope.which_animation = 0;

            doc_scope.is_animation = function( number ){
                if( doc_scope.which_animation == number ){
                    return true;
                } else {
                    return false;
                }
            }

    // ends: landing controller 
    // -------------------------------------

    // once the document has loaded, call this

    $(document).ready(function(){

        console.log("we has query");

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


})($);




(function(){
    return;


    // landing page
    appControllers.controller( 'LandingController' , [
                 'doc_scope','$http','coordinates',
        function( doc_scope , $http , coordinates )
        {
            //console.log("loading landing controller");


            //console.log(doc_scope);
        }
    ]);


    // faq controller 
    appControllers.controller( 'FaqController' , [
                 'doc_scope','$http',
        function( doc_scope , $http )
        {
            //console.log("loading faq controller");

            // this is going to pull all frequently asked questions
            $http({
                method: 'GET',
                url: '/assets/data/faqs.json'
            })
            .success( function( data )
            {
                //console.log("the faq data that we got is:", data);

                // assign the data to a scope variable that we can use in the dom
                doc_scope.faq_questions = data;
            })
            .error( function( error )
            {
                //console.log("something went wrong:", error);
            });

        }
    ]);


    // news controller 
    appControllers.controller( 'NewsController' , [
                 'doc_scope','$http',
        function( doc_scope , $http )
        {
            //console.log("loading news controller");

            // this is going to pull all frequently asked questions
            $http({
                method: 'GET',
                url: '/assets/data/news.json'
            })
            .success( function( data )
            {
                //console.log("the faq data that we got is:", data);

                // assign the data to a scope variable that we can use in the dom
                doc_scope.posts = data;
            })
            .error( function( error )
            {
                //console.log("something went wrong:", error);
            });

        }
    ]);


    //
    appControllers.controller(
        'ModalDemoCtrl', 
        function( doc_scope , $modal , $log )
        {
            //console.log("loading modal controller");

            doc_scope.items = ['item1', 'item2', 'item3'];

            doc_scope.open = function (size) {

                var modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    size: size,
                    resolve: {
                        items: function () {
                            return doc_scope.items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    doc_scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
            
        }
    );

    appControllers.controller(
        'ModalInstanceCtrl', 
        function (doc_scope, $modalInstance, items) 
        {

            doc_scope.items = items;
            doc_scope.selected = {
                item: doc_scope.items[0]
            };

            doc_scope.ok = function () {
                $modalInstance.close(doc_scope.selected.item);
            };

            doc_scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    );

})();

