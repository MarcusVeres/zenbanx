<?php include('header.php'); ?>

<section class="headspace">
    <!-- used in place of a graphic banner -->
</section>


<section class="lightbox padded">
<div class="content-wrapper">

    <h2>Sign in</h2>

    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">

            <form class="contact-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="username" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-default">Sign in</button>
            </form>

        </div>
    </div>

    <p class="larger">Forget your password? <a href="#">Click here</a> to reset it.</p>

</div>
</section>

<?php include('footer.php'); ?>

