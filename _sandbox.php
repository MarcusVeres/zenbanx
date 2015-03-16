<section class="headspace"></section>


<section class="banner main thailand">

    <xmp>
        <section class="banner main thailand">
            <video autoplay loop muted poster="/assets/img/header/Thailand.png" id="bgvid">
                <source src="/assets/video/Thailand.webmhd.webm" type="video/webm">
                <source src="/assets/video/Thailand.mp4" type="video/mp4">
            </video>
        </section>
    </xmp>

</section>


<section>
<div class="content-wrapper">

    <xmp>
        <section>
        <div class="content-wrapper">
            ...code...
        </div>
        </section>
    </xmp>

    <hr>

    <h2 class="title">
        Heading 2 
    </h2>
    <xmp><h2 class="title"></h2></xmp>

    <p class="copy">
        Paragraph Copy <br>
    </p>
    <xmp><p class="copy">This is some text.</p></xmp>

    <hr>

</div>
</section>


<section class="divider">
<div class="content-wrapper">

    <p class="review">
        This is a review inside a divider.
    </p>
    <xmp><p class="review"></p></xmp>

    <p class="reviewer">
        This is the reviewer class.
    </p>
    <xmp><p class="reviewer"></p></xmp>

</div>
</section>


<section class="padded">
<div class="content-wrapper">

    <ul class="team">
        <li>
            <img src="/assets/img/team/arkadi.png" />
            <h4 class="name">
                <i class="fa fa-fw fa-linkedin-square"></i> 
                Arkadi Kuhlmann
            </h4>
            <h5 class="title">
                CEO
            </h5>
        </li>
        <li>
            <img src="/assets/img/team/richard.png" />
            <h4 class="name">
                <i class="fa fa-fw fa-linkedin-square"></i> 
                Richard Senechal
            </h4>
            <h5 class="title">
                CEO DUCA
            </h5>
        </li>
    </ul>

    <xmp>
    <ul class="team">
        <li>
            <img src="/assets/img/team/arkadi.png" />
            <h4 class="name">
                <i class="fa fa-fw fa-linkedin-square"></i> 
                Arkadi Kuhlmann
            </h4>
            <h5 class="title">
                CEO
            </h5>
        </li>
        ...
    </ul>
    </xmp>

</div>
</section>


<section class="divider inverse">
<div class="content-wrapper">

    <p class="review">
        This is a review inside a divider.
    </p>
    <xmp><p class="review"></p></xmp>

    <p class="reviewer">
        This is the reviewer class.
    </p>
    <xmp><p class="reviewer"></p></xmp>

</div>
</section>


<section id="faq-fundamentals" class="legal">
<div class="content-wrapper">

    <div>
        <h3>Faq Question Category</h3>
        <div class="row question-wrapper">
            <div class="faq-question col-xs-12 col-sm-4 col-md-3">
                <h4>Faq Question</h4>
                <div>Faq Answer</div>
            </div>
            <div class="faq-question col-xs-12 col-sm-4 col-md-3">
                <h4>Faq Question</h4>
                <div>Faq Answer</div>
            </div>
        </div>
    </div>

    <xmp>

        <section class="legal">
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

        </div>
        </section>

    </xmp>

</div>
</section>


<section class="">
<div class="content-wrapper">

    <div class="editor">
        <p class="name">
            Some Name
        </p>
        <p class="contact">
            Contact info and <a href="mailto:somewhere">email</a>
        </p>
    </div>

    <xmp>
        <div class="editor">
            <p class="name">
                Some Name
            </p>
            <p class="contact">
                Contact info and <a href="mailto:somewhere">email</a>
            </p>
        </div>
    </xmp>

    <hr>

    <ul class="posts">
        <li class="col-xs-12 col-sm-6">
            <p>
                <span class="source">Post Source</span>
                Title of the piece
            </p>
            <p class="date">Post Date</p>
            <a class="media" href="some_url" target="_blank">
                Call to action &raquo;
            </a>
        </li>
    </ul>

    <xmp>

        <section class="legal">
        <div class="content-wrapper">

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

        </div>
        </section>

    </xmp>

</div>
</section>


<section class="">
<div class="content-wrapper">

</div>
</section>

