<?php include('header.php'); ?>

<section class="banner main paris">

    <video autoplay loop muted poster="/static/img/header/Paris.png" id="bgvid">
        <source src="/static/video/Paris.webmhd.webm" type="video/webm">
        <source src="/static/video/Paris.mp4" type="video/mp4">
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

    <?php 
        $root = $_SERVER['DOCUMENT_ROOT']; 
        $json = file_get_contents( $root . '/static/data/news.json' );
        $posts = json_decode($json);
    ?>

    <ul class="posts">
        <?php foreach($posts as $post): ?>
        <li class="col-xs-12 col-sm-6">
            <p>
                <span class="source"><?php echo $post->source; ?></span>
                <?php echo $post->title ?>
            </p>
            <p class="date"><?php echo $post->date ?></p>
            <a class="media" href="<?php echo $post->url ?>" target="_blank">
                <?php echo $post->call_to_action ?> &raquo;
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
        
    <div class="clearfix"></div>

</div>
</section>

<?php include('footer.php'); ?>

