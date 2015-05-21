// avoid collisions
(function(){

    "use strict";


    // handles the coordinates and positioning of dom elements
    // it is used to manage the behavior and animations of the phone and text
   
    var coordinates = new (function(){

        var _this = this;

        // these are the transitions
        // a transition point is a dom element that is parallel to the scrolling phone
        // at the time of an animation switch
        this.t1 = 'unset'; 
        this.t2 = 'unset';
        this.t3 = 'unset';

        // start and end points of animation / scrolling
        this.start = 'unset';
        this.end = 'unset'; 

        this.init_phone_pos = 'unset';     // y coordinate of phone before any animations are applied
        this.margin_from_top = 160;        // distance from top of browser that phone "snaps" to 
        this.buffer = 200;                 // distance from transition point that the animation switches

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

    // the doc_scope is a replacement for angular's $scope
    // it was necessary to keep it to simplify the transition from angular to jquery

    var doc_scope = {};


    // for compressing header

    doc_scope.is_ribbon_compressed = function(){
        // console.log("checking ribbon");
        return doc_scope.ribbon_compressed;
    };

    doc_scope.compress_the_ribbon = function() {
        $('.main-menu-header').addClass('solid');
        $('.ribbon-section').addClass('solid');
        $('.main-menu-underlay').addClass('solid');
        doc_scope.ribbon_compressed = true;
    };

    doc_scope.expand_the_ribbon = function() {
        $('.main-menu-header').removeClass('solid');
        $('.ribbon-section').removeClass('solid');
        $('.main-menu-underlay').removeClass('solid');
        doc_scope.ribbon_compressed = false;
    }


    // determines which phone animation will be on top of the others ( visible )

    doc_scope.set_animation = function( number ) {
        // remove any top class
        $('.top').removeClass('top');

        // determine the new top class
        var selector = ".animation-" + number;
        $( selector ).addClass('top');
    }


    // determines visibility of the overlay/underlay dropdown menu

    doc_scope.menu_visible = false;

    doc_scope.hide_menu = function() {
        if ( $('.main-menu-underlay').is(':hidden') ){
            return;
        }
        $('.main-menu-underlay').hide();
        doc_scope.menu_visible = false;
    }

    doc_scope.show_menu = function() {
        $('.main-menu-underlay').show();
        doc_scope.menu_visible = true;
    }

    doc_scope.toggle_menu = function() {
        if( doc_scope.menu_visible ) {
            doc_scope.hide_menu();
            return;
        } 
        doc_scope.show_menu();
    }


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


        if( screen_top > top_limit && screen_top < bottom_limit )
        {
            // the phone is fixed to the top of the screen and there is no top margin
            $('#mega-phone').addClass('fixed');
            $('#mega-phone').removeClass('static');
            // document.getElementById("mega-phone").style.marginTop = "0px";
        } 
        else if ( screen_top > top_limit && screen_top >= bottom_limit )
        {
            // the phone has moved past the max limit. it needs to stap static at the bottom of the page
            $('#mega-phone').removeClass('fixed');
            $('#mega-phone').addClass('static');
            // document.getElementById("mega-phone").style.marginTop = ( screen_top - coordinates.get_init_phone_pos() ) + "px";
        } 
        else 
        {
            // we are at the top of the screen :: nothing is happening
            $('#mega-phone').removeClass('fixed');
            $('#mega-phone').removeClass('static');
            // document.getElementById("mega-phone").style.marginTop = "0px";
        }

        /*
        if( screen_top > top_limit && screen_top < bottom_limit ){
            document.getElementById("mega-phone").style.marginTop = ( screen_top - coordinates.get_init_phone_pos() ) + "px";
        }
        */

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
            doc_scope.set_animation(0);
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


    // once the document has loaded, call this

    $(document).ready(function(){

        // try wow js
        new WOW().init();

        // hide the dropdown menu
        doc_scope.hide_menu();

        // scroll the window to the top of the page (people complained about this)
        window.scrollTo(0,0);

        // reset the mega phone top margin, if it exists
        var mega_phone = document.getElementById("mega-phone");
        if( mega_phone ){
            //console.log("RESETTING");
            mega_phone.style.marginTop = "1px";
        }

        // main menu 
        $('#toggle-menu').on('tap click', function(){
            doc_scope.toggle_menu();
        });

        // modals
        $('.lightbox-close').on('tap click', function( event ){
            var clicked = $(this);
            var target = clicked.attr('data-dismiss-target');
            $( target ).modal('hide');
        });

        // avoid executing the rest of the animation code if we have no animations
        if( !document.getElementById('transition-1') ){
            return;
        }

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


        // megaphone
        var megaphone = document.getElementById('mega-phone');

        // get the original position of the mega phone
        coordinates.set( "init_phone_pos" , megaphone.getBoundingClientRect().top );

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
                url: '/static/data/faqs.json'
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
                url: '/static/data/news.json'
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

