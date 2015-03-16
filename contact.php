<?php include('header.php'); ?>

<section class="banner main contact">

    <video autoplay loop muted poster="/assets/img/header/Bogota.png" id="bgvid">
        <source src="/assets/video/Bogota.webmhd.webm" type="video/webm">
        <source src="/assets/video/Bogota.mp4" type="video/mp4">
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

