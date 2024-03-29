document.addEventListener("DOMContentLoaded", function() {
    var headerHTML = `
        <header role="banner">
            <ul id="wb-tphp">
                <li class="wb-slc">
                    <a class="wb-sl" href="#wb-content">Skip to main content</a>
                </li>
                <li class="wb-slc visible-sm visible-md visible-lg">
                    <a class="wb-sl" href="#wb-info">Skip to "About this site"</a>
                </li>
                <li class="wb-slc">
                    <a class="wb-sl" href="#wb-lng">Skip to Language Toggle</a>
                </li>
            </ul>

            <nav role="navigation" class="pre-nav">
                <div class="container">
                    <section class="pre-nav__items">
                        <a href="https://canada.ca" target="_blank" tabindex="0"><img class="back-to-canada" src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/img/GoC-fip-en.svg" alt="Government of Canada logo"></a>
                        <a id="wb-lng" lang="fr" hreflang="fr" href="#!"><span class="sr-only">Toggle language</span>Français</a>
                    </section>
                </div>
            </nav>
        </header>
        <nav role="navigation" class="navigation-bar">
            <div class="container">
                <section class="navigation__items">
                    <div class="branding">
                        <a href="./" class="to-the-homepage">
                            <img class="logo" src="./img/2020/logo-2020-ondark.svg" alt="Impact Canada Home" style="margin-top:-5px">
                            <!--                        <img class="logo" src="./img/logo-header.svg" alt="Impact Canada Home">-->
                            <span class="sr-only">Impact Canada</span>
                        </a>
                        <a class="mobile-menu-bars visible-xs" id="toggle-menu"><i class="fas fa-bars" aria-hidden></i> &nbsp;Menu</a>
                    </div>
                    <div class="menu">
                        <h2 class="sr-only">Topics menu</h2>
                        <a href="./about.html" aria-posinset="1" aria-setsize="4">About</a>
                        <a href="./challenges/" aria-posinset="2" aria-setsize="4">Challenges</a>
                        <a href="./behavioural-science/" aria-posinset="3" aria-setsize="4">Behavioural Insights</a>
                        <a href="./fellowship/" aria-posinset="4" aria-setsize="4">Fellowship</a>
                    </div>
                </section>
            </div>
        </nav>
    `;

    var footerHTML = `
        <footer role="contentinfo" id="wb-info">
            <nav role="navigation">
                <div class="footer__left">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <h3><a href="./index.html"><img class="footer-logo" src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/img/logo-footer.svg" alt="Impact Canada logo"></a></h3>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#!">About</a></li>
                                <li><a href="./about.html">Challenges</a></li>
                                <li><a href="./how-it-works.html">Behavioural insights</a></li>
                                <li><a href="./news.html">Fellowship</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <h3>Get in touch</h3>
                            <ul>
                                <li><a href="mailto:christopher.soueidan@pco-bcp.gc.ca">Contact</a></li>
                                <li><a href="./partner-with-us.html">Partner with us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-offset-4 col-md-8">
                            <p class="small">© 2018 Impact Canada Initiative</p>
                        </div>
                    </div>
                </div>
                <div class="footer__right">
                    <div class="row">
                        <span class="circle circle-teal"></span>
                        <span class="circle circle-red"></span>
                        <img class="wink" src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/img/kiss-wink-heart-solid.svg" alt="Website and brand created by Chris Soueidan">
                        <div class="col-sm-6">

                            <h3>Legal</h3>
                            <ul>
                                <li><a href="./terms.html">Terms</a></li>
                                <li><a href="./privacy.html">Privacy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <h3>Social media</h3>
                            <ul>
                                <li><a href="https://twitter.com/impact_innoven" target="_blank"><i class="fab fa-twitter" aria-hidden></i> Twitter</a></li>
                                <li><a href="https://twitter.com/impact_innoven" target="_blank"><i class="fab fa-facebook" aria-hidden></i> Facebook</a></li>
                                <li><a href="https://www.linkedin.com/company/impact-and-innovation-unit/" target="_blank"><i class="fab fa-linkedin" aria-hidden></i> LinkedIn</a></li>
                                <li><a href="https://www.youtube.com/channel/UC6iz9z05o0bXlLxCTbI9xiA" target="_blank"><i class="fab fa-youtube" aria-hidden></i> Youtube</a></li>
                                <li><a href="https://www.youtube.com/channel/UC6iz9z05o0bXlLxCTbI9xiA" target="_blank"><i class="fab fa-medium" aria-hidden></i> Medium</a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
            <div class="sub-footer"><img class="sub-footer__logo" src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/img/canada-wordmark-white.svg" alt="Canada wordmark"></div>

        </footer>

        <!--[if gte IE 9 | !IE ]><!-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/wet-boew/js/wet-boew.min.js"></script>
        <!--<![endif]-->
        <!--[if lt IE 9]>
            <script src="./wet-boew/js/ie8-wet-boew2.min.js"></script>
            <![endif]-->
        <script src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/custom-js/rellax.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/custom-js/scrollreveal.min.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
            AOS.init();

        </script>
        <script src="https://cdn.jsdelivr.net/gh/loogart/impact-canada/custom-js/scripts.js"></script>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
