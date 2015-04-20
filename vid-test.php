<?php include('header.php'); ?>


<!--
<section class="banner main zenbanx">

    <video autoplay loop muted poster="/static/img/header/Zenbanx.png" id="bgvid">
        <source src="/static/video/Zenbanx.webmhd.webm" type="video/webm">
        <source src="/static/video/Zenbanx.mp4" type="video/mp4">
    </video>

</section>
-->


<section class="banner main">
    <video id="bgvid" class="video-js"
      controls autoplay loop preload="auto"
      poster="/static/img/header/Zenbanx.png"
      data-setup='{ "example_option":true , "autoplay":true, "loop":true, "width":"100%", "height":"auto" }'>
        <source src="/static/video/Zenbanx.mp4" type='video/mp4' />
        <source src="/static/video/Zenbanx.webmhd.webm" type='video/webm' />
        <source src="/static/video/Zenbanx.oggtheora.ogv" type='video/ogg' />
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that 
            <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
    </video>
</section>


<section class="propped-up sub-main">
<div class="content-wrapper">

    <!--<h1 class="slogan">ZenBanx - the mobile multi currency bank account for Citizens of the World</h1>-->
    <h1 class="slogan">ZenBanx - the mobile bank account for everyone that lives in multiple currencies</h1>
    <ul class="features">
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/currency-icon.png" />
                    </span>
                </div>
                <p class="caption">
                    Multiple currencies, one account
                </p>
            </div>
        </li>
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/send-money-icon.png" />
                    </span>
                </div>
                <p class="caption">
                    Send money to family &amp; friends anywhere cheaper
                </p>
            </div>
        </li>
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/secure-icon.png" />
                    </span>
                </div>
                <p class="caption">
                    Your money is secure
                </p>
            </div>
        </li>
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/mobile-icon.png" />
                    </span>
                </div>
                <p class="caption">
                    Mobile banking re-imagined
                </p>
            </div>
        </li>
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/social-icon.png" />
                    </span>
                </div>
                <p class="caption">
                    Your life is social, and so is ZenBanx
                </p>
            </div>
        </li>
        <li class="col-xs-12 col-sm-4 col-md-2">
            <div class="proposition">
                <div class="image-wrapper">
                    <span class="image">
                        <img src="/static/img/home_icons/atm-icon.png" />
                    </span>
                </div>
                <p class="caption">
                     Access your money at any ATM
                </p>
            </div>
        </li>
        <div class="clearfix"></div>
    </ul>

</div>
</section>


<section class="banner">
<div class="content-wrapper">

    <ul class="features extra">
        <li class="col-xs-12 col-sm-6 col-md-3">Earn interest on all your currencies</li>
        <li class="col-xs-12 col-sm-6 col-md-3">No fees converting different currencies</li>
        <li class="col-xs-12 col-sm-6 col-md-3">Simple drag and drop functionality</li>
        <li class="col-xs-12 col-sm-6 col-md-3">Send and receive a photo and note with money transfer </li>
        <div class="clearfix"></div>
    </ul>

</div>
</section>


<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- because our close button is outside of a header, we have to add our own code to close the modal -->
            <div class="lightbox-close" data-dismiss-target="#basicModal" aria-hidden="true">
                <i class="fa fa-fw fa-close"></i>
            </div>
            <div class="modal-body">
                <?php include('get-zenbanx-form.php'); ?>
            </div>
        </div>
    </div>
</div>

<section class="get-zen">
    <button class="zen-button" data-toggle="modal" data-target="#basicModal">Get ZenBanx</button>
</section>


<?php include('footer.php'); ?>

