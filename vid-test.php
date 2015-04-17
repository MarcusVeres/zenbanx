<?php include('header.php'); ?>


<!--
<section class="banner main contact">

    <video autoplay loop muted poster="/assets/img/header/Bogota.png" id="bgvid">
        <source src="/assets/video/Bogota.webmhd.webm" type="video/webm">
        <source src="/assets/video/Bogota.mp4" type="video/mp4">
    </video>

</section>
-->

<!-- html5 shiv for video -->
<script type="text/javascript">
    document.createElement('video');document.createElement('audio');document.createElement('track');
</script>

<!-- video stuff -->
<link href="//vjs.zencdn.net/4.12/video-js.css" rel="stylesheet">
<script src="//vjs.zencdn.net/4.12/video.js"></script>


<section class="banner main">

    <style>
        .video-js .vjs-tech {
            min-width: 100%;
            height: auto;
            width: 100%;
        }

        section.banner.main {
            height: auto;
            min-height: 330px;
        }

        @media screen and (min-width: 1080px ){
            section.banner.main {
                height: 440px;
            }
        }

        @media screen and (max-width: 768px ){
            #bgvid {
                display: none;
            }
        }

        .banner.main {
            background: teal;
        }

    </style>

    <!--<video id="example_video_1" class="video-js vjs-default-skin"-->
    <video id="bgvid" class="video-js"
      controls autoplay loop preload="auto"
      poster="/assets/img/header/Bogota.png"
      data-setup='{ "example_option":true , "autoplay":true, "loop":true, "width":"100%", "height":"auto" }'>
        <source src="/assets/video/Bogota.mp4" type='video/mp4' />
        <source src="/assets/video/Bogota.webm" type='video/webm' />
        <source src="/assets/video/Bogota.ogg" type='video/ogg' />
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
    </video>

</section>


<section class="lightbox">
<div class="content-wrapper">

    <h2 class="title">Contact Us</h2>

    <p class="larger">Send us a love letter, or any questions you may have</p>

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">

            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" id="contact_name" placeholder="Jane Doe">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="contact_email" placeholder="your.name@mail.com">
                </div>
                <div class="form-group">
                    <label for="email">Message</label>
                    <textarea class="form-control" id="contact_message" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
                <p class="fineprint">
                    At ZenBanx, we never sell any of your information to a third party.
                </p>
            </form>

        </div>
    </div>

    <p class="larger">You can also phone us at 877-ZENBANX (877-936-2269)</p>

</div>
</section>

<?php include('footer.php'); ?>

