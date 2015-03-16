<section class="ribbon-section">
    <!-- note:  eventually the ribbon will reside inside "ribbon wrapper", 
                but we need to figure out how the sides will be rectangular over a certain width -->
    <div class="ribbon">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style="background:none" fill="none">
            <polygon points="0,0 32,5 100,1.1 100,9.2 74,5.6 32,6.4 0,10" style="margin-top: 20px;"></polygon>
        </svg>
    </div>
</section>


<section class="main-menu-header">
<div class="ribbon-wrapper">

    <div class="menu-wrapper">
        <a href="/" class="logo-wrapper">
            <h1 class="wordmark">
                <img src="/assets/img/wordmark.png" alt="ZenBanx :: Around the corner, around the world." />
            </h1>
        </a>
        <div class="pull-right context-menu">
            <ul class="menu-group">
                <li>
                    <div class="menu-button">
                        <a href="/sign-in">Sign In</a>
                    </div>
                </li>
                <li>
                    <div class="menu-icon open-menu" id="toggle-menu">
                        <i class="fa fa-bars"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>

</div>
</section>


<section class="main-menu-underlay" ng-class="{solid: is_ribbon_compressed()}" >
<div class="content-wrapper">

    <ul class="main-menu">
        <li><a href="/get-zenbanx">Get ZenBanx</a></li>
        <li><a href="/about">Who We Are</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>

</div>
</section>

