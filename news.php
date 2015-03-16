<?php include('header.php'); ?>

<section class="banner main paris">

    <video autoplay loop muted poster="/assets/img/header/Paris.png" id="bgvid">
        <source src="/assets/video/Paris.webmhd.webm" type="video/webm">
        <source src="/assets/video/Paris.mp4" type="video/mp4">
    </video>

</section>


<section class="padded">
<div class="content-wrapper">

    <h2 class="title">News &amp; Reviews</h2>

    <div class="editor">
        <p class="name">
            Cathy MacFarlane, VP Public Affairs, ZenBanx
        </p>
        <p class="contact">
            302-766-1631 <a href="mailto:cathy@zenbanx.ca">email</a>
        </p>
    </div>

    <hr>

    <ul class="posts">
        <li class="col-xs-12 col-sm-6" ng-repeat="post in posts">
            <p>
                <span class="source">{{ post.source }}</span>
                {{ post.title }}
            </p>
            <p class="date">{{ post.date }}</p>
            <a class="media" href="{{ post.url }}" target="_blank">
                {{ post.call_to_action }} &raquo;
            </a>
        </li>
    </ul>
        

    <div class="clearfix"></div>

</div>
</section>

<?php include('footer.php'); ?>

