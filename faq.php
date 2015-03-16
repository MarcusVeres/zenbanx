<?php include('header.php'); ?>

<section class="banner main la">

    <video autoplay loop muted poster="/assets/img/header/LA.png" id="bgvid">
        <source src="/assets/video/LA.webmhd.webm" type="video/webm">
        <source src="/assets/video/LA.mp4" type="video/mp4">
    </video>

</section>


<section>
<div class="content-wrapper">

    <h2 class="title">Frequently Asked Questions</h2>
    <p class="copy">
        Here is where you will find answers to any questions about your mobile multi-currency account.<br>
        If you need any other answers, please contact us <a href="/contact">here</a>.
    </p>

    <div class="filterbox row">
        <div class="col-xs-12">
            <div class="input-group">
                <input type="text" class="form-control larger" placeholder="I'm looking for..." ng-model="faq_filter">
                <span class="input-group-btn">
                    <button class="btn btn-default gray" type="button">Search</button>
                </span>
            </div>
        </div>
    </div>

</div>
</section>


<section class="toc">
<div class="content-wrapper">
    <ul class="table-of-contents">
        <li><a href="#">The Basics</a></li>
        <li><a href="#">Accounts</a></li>
        <li><a href="#">Fees</a></li>
        <li><a href="#">Transfers</a></li>
        <li><a href="#">Debit Card</a></li>
        <li><a href="#">What About...</a></li>
    </ul>
</div>
</section>


<section id="faq-fundamentals" class="legal">
<div class="content-wrapper">

    <div ng-repeat="category in faq_questions">
        <h3 ng-bind-html="category.category_name"></h3>

        <div class="row question-wrapper">
            <div class="faq-question col-xs-12 col-sm-4 col-md-3" ng-repeat="faq in category.questions | filter: faq_filter" >
                <h4>{{ faq.question }}</h4>
                <div ng-bind-html="faq.answer"></div>
            </div>
        </div>

    </div>

    <!--
    <h4>What is ZenBanx?</h4>
    <p></p>

    <h4>Why is my Social Insurance Number (SIN) required to open a  ZenBanx Account?</h4>
    Simplicity, security, and saving money are a few good reasons to join ZenBanx.</p><ul><li>Simple: You have instant access to the currencies of your life.</li><li>Secure: We take security very seriously (in fact, we have a special FAQ dedicated to Security, see below)</li><li>Save Money: You can send money internationally for as low as $0.95.</li></ul>

    <h4>What is ZenBanx?</h4>
    <p>ZenBanx is a multi-currency bank account for Citizens of the World. The ZenBanx Account allows you to hold up to five currencies! You can save, exchange, or send them domestically or internationally all from your smartphone.</p>

    <h4>What is ZenBanx?</h4>
    <p>ZenBanx is a multi-currency bank account for Citizens of the World. The ZenBanx Account allows you to hold up to five currencies! You can save, exchange, or send them domestically or internationally all from your smartphone.</p>
    -->


</div>
</section>

<?php include('footer.php'); ?>
