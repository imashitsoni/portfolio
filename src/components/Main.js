

function Main() {
    return (
      <>
        {/* <video class="body-overlay" muted autoplay loop>
            <source src="./assets/images/video1.mp4" type="video/mp4"/>
        </video> */}

        {/* <!-- Preloader --> */}
        <div class="page-loader">
            <div class="bounceball"></div>
        </div>

        <span class="icon-menu">
            <span class="bar"></span>
            <span class="bar"></span>
        </span>

        {/* <!-- Side Menu Bar --> */}
        <div class="responsive-sidebar-menu">
            <div class="overlay"></div>
            <div class="sidebar-menu-inner">
                <div class="menu-wrap">
                    <p>Menu</p>
                    <ul class="menu scroll-nav-responsive d-flex">
                        <li>
                            <a class="scroll-to" href="#home">
                                <i class="las la-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#about">
                                <i class="lar la-user"></i> <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#experience">
                                <i class="las la-briefcase"></i> <span>Experience</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#education">
                                <i class="las la-book"></i> <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#services">
                                <i class="las la-stream"></i> <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#skills">
                                <i class="las la-shapes"></i> <span>Skills</span>
                            </a>
                        </li>
                        {/* <!-- <li>
                            <a class="scroll-to" href="#portfolio">
                                <i class="las la-grip-vertical"></i> <span>Portfolios</span>
                            </a>
                        </li>
                        <li>
                            <a class="scroll-to" href="#testimonial">
                                <i class="lar la-comment"></i> <span>Testimonial</span>
                            </a>
                        </li> --> */}
                        <li>
                            <a class="scroll-to" href="#contact">
                                <i class="las la-envelope"></i> <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="sidebar-social">
                    <p>Social</p>
                    <ul class="social-links d-flex align-items-center">
                        <li>
                            <a href="https://twitter.com/imashitsoni" target="_blank" rel="noreferrer"><i class="lab la-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ul class="menu scroll-nav d-flex">
            <li>
                <a class="scroll-to" href="#home">
                    <span>Home</span> <i class="las la-home"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#about">
                    <span>About</span> <i class="lar la-user"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#experience">
                    <span>Experience</span> <i class="las la-briefcase"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#education">
                    <span>Education</span> <i class="las la-book"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#services">
                    <span>Services</span> <i class="las la-stream"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#skills">
                    <span>Skills</span> <i class="las la-shapes"></i>
                </a>
            </li>
            {/* <!-- <li>
                <a class="scroll-to" href="#portfolio">
                    <span>Portfolios</span> <i class="las la-grip-vertical"></i>
                </a>
            </li>
            <li>
                <a class="scroll-to" href="#testimonial">
                    <span>Testimonial</span> <i class="lar la-comment"></i>
                </a>
            </li> --> */}
            <li>
                <a class="scroll-to" href="#contact">
                    <span>Contact</span> <i class="las la-envelope"></i>
                </a>
            </li>
        </ul>

        <div class="left-sidebar">
            <div class="sidebar-header d-flex align-items-center justify-content-between">
                {/* <!-- <img src="./assets/images/logo.png" alt="Logo"> --> */}
                <h1 class="box-title">Ashit</h1>
                <span class="designation">React & Shopify Developer</span>
            </div>
            <img class="me" src="./assets/images/My Profile Pic-circle.png" alt="Me"/>
            <h2 class="email">imashitsoni@gmail.com</h2>
            <h2 class="address">Indore, India</h2>
            <ul class="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://twitter.com/imashitsoni" target="_blank" rel="noreferrer"><i class="lab la-twitter"></i></a> 
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-instagram"></i></a>
                </li>
                <li>
                    <a href="https://github.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-github"></i></a>
                </li>
            </ul>
            <a href="./resume.pdf" target="_blank" rel="noreferrer" class="theme-btn">
                <i class="las la-file-pdf"></i> Resume
            </a>
            <p class="copyright">&copy; 2024 Ashit Soni. All Rights Reserved</p>
        </div>
        {/* <!-- Main Section --> */}
        <main class="drake-main">
            <div id="smooth-wrapper">
                <div id="smooth-content">

                    <div class="left-sidebar">
                        <div class="sidebar-header d-flex align-items-center justify-content-between">
                            {/* <!-- <img src="./assets/images/logo.png" alt="Logo"> --> */}
                            <h1 class="box-title">Ashit Soni</h1>
                            {/* <!-- <span class="designation">React & Shopify Developer</span> --> */}
                        </div>
                        <img class="me" src="./assets/images/My Profile Pic-circle.png" alt="Me"/>
                        <h2 class="email">imashitsoni@gmail.com</h2>
                        <h2 class="address">Indore, India</h2>
                        <ul class="social-profile d-flex align-items-center flex-wrap justify-content-center">
                            <li>
                                <a href="https://twitter.com/imashitsoni" target="_blank" rel="noreferrer"><i class="lab la-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/imashitsoni/" target="_blank" rel="noreferrer"><i class="lab la-github"></i></a>
                            </li>
                        </ul>
                        <a href="./resume.pdf" target="_blank" rel="noreferrer" class="theme-btn">
                            <i class="las la-file-pdf"></i> Resume
                        </a>
                        {/* <!-- <p class="copyright">&copy; 2024 Ashit Soni. All Rights Reserved</p> --> */}
                    </div>

                    {/* <!-- Hero Section --> */}
                    <section class="hero-section page-section scroll-to-page" id="home">

                        <div class="custom-container">
                            <div class="hero-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-home"></i> Introduce
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">
                                        Say Hi from <span>Ashit</span>, React & Shopify Developer
                                    </h1>
                                </div>
                                <p class="scroll-animation" data-animation="fade_from_bottom">
                                    I'm an experienced front-end software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                                    Currently, I'm focused on building accessible, human-centered products at <a href="https://techinfini.in/" target="_blank" rel="noreferrer">Techinfini Solutions</a>.
                                </p>
                                {/* <!-- <a href="#portfolio" 
                                    class="go-to-project-btn scroll-to scroll-animation" 
                                    data-animation="rotate_up">
                                    <img src="./assets/images/round-text.png" alt="Rounded Text">
                                    <i class="las la-arrow-down"></i>
                                </a> --> */}
            
                                <div class="facts d-flex">
                                    <div class="left scroll-animation" data-animation="fade_from_left">
                                        <h1>6+</h1>
                                        <p>Years of <br/>Experience</p>
                                    </div>
                                    <div class="right scroll-animation" data-animation="fade_from_right">
                                        <h1>50+</h1>
                                        <p>projects completed on <br/>5 countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            
                    {/* <!-- About Section --> */}
                    <section class="about-area page-section scroll-to-page" id="about">
                        <div class="custom-container">
                            <div class="about-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="lar la-user"></i> About
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Personal <span>Overview</span></h1>
                                </div>
                                <p class="scroll-animation" data-animation="fade_from_bottom">
                                    Greetings! I'm Ashit, a passionate creator fascinated by crafting digital entities within the realm of the internet. 
                                    My journey in web development commenced in 2017, ignited by the exploration of customizing WordPress themes, 
                                    a venture that bestowed me with invaluable insights into HTML and CSS.
                                    <br/><br/>
                                    My professional trajectory has been enriched by stints at a startup and a technology consulting agency. 
                                    Presently, I channel my expertise at Techinfini Solutions, dedicating my efforts to curate accessible and 
                                    inclusive digital products and experiences for a diverse clientele.
                                    <br/><br/>
                                    Beyond the screen, I cherish moments with my family and canine companion. Exploring the vibrant streets of Indore
                                    in search of culinary delights is a favorite pastime, enriching my life beyond the realm of technology.    
                                </p>
                            </div>
                        </div>
                    </section>
            
                    {/* <!-- Experience Section --> */}
                    <section class="resume-area page-section scroll-to-page" id="experience">
                        <div class="custom-container">
                            <div class="resume-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-briefcase"></i> experience
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Work <span>Experience</span></h1>
                                </div>
            
                                <div class="resume-timeline">
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">May 2023 - Present</span>
                                        <h2>Lead Engineer</h2>
                                        <p>Techinfini Solutions</p>
                                    </div>
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">May 2022 - Apr 2023</span>
                                        <h2>Sr. Software Engineer</h2>
                                        <p>Techinfini Solutions</p>
                                    </div>
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">May 2021 - Apr 2022</span>
                                        <h2>Software Engineer</h2>
                                        <p>Techinfini Solutions</p>
                                    </div>
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">July 2017 - Mar 2021</span>
                                        <h2>Software Engineer</h2>
                                        <p>Rama Technologies</p>
                                        <h2>Web Developer</h2>
                                        <p>Rama Technologies</p>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section>

                    {/* <!-- Education Section --> */}
                    <section class="resume-area page-section scroll-to-page" id="education">
                        <div class="custom-container">
                            <div class="resume-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-book"></i> Education
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Education & <span>Certifications</span></h1>
                                </div>
            
                                <div class="resume-timeline">
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">2016 - Present</span>
                                        <h2>React Developer</h2>
                                        <p>Udemy</p>
                                        <h2>GNIIT Certified</h2>
                                        <p>NIIT University</p>
                                    </div>
                                    <div class="item scroll-animation" data-animation="fade_from_right">
                                        <span class="date">2012 - 2015</span>
                                        <h2>Bachelor of Science in Biotechnology</h2>
                                        <p>APS University</p>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section>
            
                    {/* <!-- Services Section --> */}
                    <section class="services-area page-section scroll-to-page" id="services">
                        <div class="custom-container">
                            <div class="services-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-stream"></i> Services
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">My <span>Specializations</span></h1>
                                </div>
            
                                <div class="services-items">
                                    <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-bezier-curve"></i>
                                        <h2>Website Design & Development</h2>
                                        <p>I have successfully designed and developed numerous websites using the Shopify platform.</p>
                                        <span class="projects">35+ Projects</span>
                                    </div>
                                    <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-bezier-curve"></i>
                                        <h2>SEO & Speed Improvements</h2>
                                        <p>I specialize in enhancing Search Engine Optimization (SEO) strategies and optimizing website speed to elevate digital performance.</p>
                                        <span class="projects">5+ Projects</span>
                                    </div>
                                    <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-bezier-curve"></i>
                                        <h2>Pixel Tracking Integration - Facebook & Tiktok</h2>
                                        <p>Orchestrated seamless integration of Facebook and TikTok pixel tracking into various websites.</p>
                                        <span class="projects">4+ Projects</span>
                                    </div>
                                    <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-bezier-curve"></i>
                                        <h2>A/B Testing Experiences</h2>
                                        <p>Formulated and executed tailored experiences for A/B testing across diverse e-commerce platforms.</p>
                                        <span class="projects">3+ Projects</span>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section>
            
                    {/* <!-- Skills Section --> */}
                    <section class="skills-area page-section scroll-to-page" id="skills">
                        <div class="custom-container">
                            <div class="skills-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-shapes"></i> my skills
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">My <span>Advantages</span></h1>
                                </div>
            
                                <div class="row skills text-center">
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/react.png" alt="Figma"/>
                                                <h1 class="percent">React</h1>
                                            </div>
                                            {/* <!-- <p class="name">React</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/shopify.png" alt="Framer"/>
                                                <h1 class="percent">Shopify</h1>
                                            </div>
                                            {/* <!-- <p class="name">Shopify</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/javascript.png" alt="Webflow"/>
                                                <h1 class="percent">Javascript</h1>
                                            </div>
                                            {/* <!-- <p class="name">Javascript</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/html.png" alt="React"/>
                                                <h1 class="percent">HTML</h1>
                                            </div>
                                            {/* <!-- <p class="name">HTML</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/css.png" alt="WordPress"/>
                                                <h1 class="percent">CSS</h1>
                                            </div>
                                            {/* <!-- <p class="name">CSS</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/sass.png" alt="Laravel/PHP"/>
                                                <h1 class="percent">Sass</h1>
                                            </div>
                                            {/* <!-- <p class="name">Sass</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/bootstrap.png" alt="Laravel/PHP"/>
                                                <h1 class="percent">Bootstrap</h1>
                                            </div>
                                            {/* <!-- <p class="name">Bootstrap</p> --> */}
                                        </div>
                                    </div>
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="skill">
                                            <div class="skill-inner">
                                                <img src="./assets/images/jquery.png" alt="Laravel/PHP"/>
                                                <h1 class="percent">Jquery</h1>
                                            </div>
                                            {/* <!-- <p class="name">Jquery</p> --> */}
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section>
            
                    {/* <!-- Portfolio Section --> */}
                    {/* <!-- <section class="portfolio-area page-section scroll-to-page" id="portfolio">
                        <div class="custom-container">
                            <div class="portfolio-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-grip-vertical"></i> portfolio
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Featured <span>Projects</span></h1>
                                </div>
            
                                <div class="row portfolio-items">
                                    <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="portfolio-item portfolio-full">
                                            <div class="portfolio-item-inner">
                                                <a href="./assets/images/portfolio1.jpg" data-lightbox="example-1">
                                                    <img src="./assets/images/portfolio1.jpg" alt="Portfolio">
                                                </a>
            
                                                <ul class="portfolio-categories">
                                                    <li>
                                                        <a href="">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="">WordPress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2><a href="">Bureau - Architecture Studio Website</a></h2>
                                        </div>
                                    </div>
            
                                    <div class="col-md-6 scroll-animation" data-animation="fade_from_left">
                                        <div class="portfolio-item portfolio-half">
                                            <div class="portfolio-item-inner">
                                                <a href="./assets/images/portfolio2.jpg" data-lightbox="example-1">
                                                    <img src="./assets/images/portfolio2.jpg" alt="Portfolio">
                                                </a>

                                                <img src="./assets/images/portfolio2.jpg" alt="Portfolio">
            
                                                <ul class="portfolio-categories">
                                                    <li>
                                                        <a href="">WordPress</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Larevel/PHP</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2><a href="">Moonex WordPress Theme</a></h2>
                                        </div>
                                    </div>
            
                                    <div class="col-md-6 scroll-animation" data-animation="fade_from_right">
                                        <div class="portfolio-item portfolio-half">
                                            <div class="portfolio-item-inner">
                                                <a href="./assets/images/portfolio3.jpg" data-lightbox="example-1">
                                                    <img src="./assets/images/portfolio3.jpg" alt="Portfolio">
                                                </a>
            
                                                <ul class="portfolio-categories">
                                                    <li>
                                                        <a href="">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2><a href="">Taskly Dashboard</a></h2>
                                        </div>
                                    </div>
            
                                    <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="portfolio-item portfolio-half">
                                            <div class="portfolio-item-inner">
                                                <a href="./assets/images/portfolio4.jpg" data-lightbox="example-1">
                                                    <img src="./assets/images/portfolio4.jpg" alt="portfolio">
                                                </a>
            
                                                <ul class="portfolio-categories">
                                                    <li>
                                                        <a href="">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="">React</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2><a href="">Hinterland - Real Estate Site Redesign</a></h2>
                                        </div>
                                    </div>
            
                                    <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                        <div class="portfolio-item portfolio-half">
                                            <div class="portfolio-item-inner">
                                                <a href="./assets/images/portfolio5.jpg" data-lightbox="example-1">
                                                    <img src="./assets/images/portfolio5.jpg" alt="portfolio">
                                                </a>
            
                                                <ul class="portfolio-categories">
                                                    <li>
                                                        <a href="">Framer</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2><a href="">Lewis Portfolio Framer Template</a></h2>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section> -->
            
                    <!-- Testimonial Section -->
                    <!-- <section class="testimonial-area page-section scroll-to-page" id="testimonial">
                        <div class="custom-container">
                            <div class="testimonial-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="lar la-comment"></i> testimonial
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Trusted by <span>Hundered Clients</span></h1>
                                </div>
            
                                <div class="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                                    <div class="owl-carousel testimonial-slider owl-theme">
                                        <div class="testimonial-item">
                                            <div class="testimonial-item-inner">
                                                <div class="author d-flex align-items-center">
                                                    <img src="./assets/images/testimonial-1.jpg" alt="portfolio">
                                                    <div class="right">
                                                        <h3>Paublo Dybala</h3>
                                                        <p class="designation">CEO of <span>IBM Global</span></p>
                                                    </div>
                                                </div>
                                                <p>“Drake - A Developer with the creativity, professional and 
                                                    master of code. Much more than what i'm expect. 
                                                    High quality product & flexiable price. Recommended!.”</p>
            
                                                <a href="" class="project-btn">Project</a>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <div class="testimonial-item-inner">
                                                <div class="author d-flex align-items-center">
                                                    <img src="./assets/images/testimonial-2.jpg" alt="portfolio">
                                                    <div class="right">
                                                        <h3>Christina Morillo</h3>
                                                        <p class="designation">Product Management of <span>Invision App Inc</span></p>
                                                    </div>
                                                </div>
                                                <p>“Drake was a real pleasure to work with and we look 
                                                    forward to working with him again. He's definitely the kind of 
                                                    designer that you can trust with any project from A-Z.”</p>
            
                                                <a href="" class="project-btn">Project</a>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <div class="testimonial-item-inner">
                                                <div class="author d-flex align-items-center">
                                                    <img src="./assets/images/testimonial-3.jpg" alt="portfolio">
                                                    <div class="right">
                                                        <h3>Phil Foden</h3>
                                                        <p class="designation">Director of <span>Envato LLC</span></p>
                                                    </div>
                                                </div>
                                                <p>“Extremely profressional and fast service!. Drake is a master
                                                    of code and he also very creative. We done 3 projects with
                                                    him and certain will continue.”</p>
            
                                                <a href="" class="project-btn">Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-footer-nav">
                                        <div class="testimonial-nav d-flex align-items-center">
                                            <button class="prev"><i class="las la-angle-left"></i></button>
                                            <div id="testimonial-slide-count"></div>
                                            <button class="next"><i class="las la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="clients-logos">
                                    <h4 class="scroll-animation" data-animation="fade_from_bottom">work with 60+ brands worldwide</h4>
                                    <div class="row align-items-center">
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                            <img src="./assets/images/client-1.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                            <img src="./assets/images/client-2.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                            <img src="./assets/images/client-3.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                            <img src="./assets/images/client-4.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                            <img src="./assets/images/client-5.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                            <img src="./assets/images/client-6.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                            <img src="./assets/images/client-7.png" alt="client">
                                        </div>
                                        <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                            <img src="./assets/images/client-8.png" alt="client">
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </section> -->
            
                    <!-- Pricing Section -->
                    <!-- <section class="pricing-area page-section scroll-to-page" id="pricing">
                        <div class="custom-container">
                            <div class="pricing-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-dollar-sign"></i> pricing
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span></h1>
                                </div>
            
                                <div class="pricing-table-items">
                                    <div class="row">
                                        <div class="col-md-6 scroll-animation" data-animation="fade_from_left">
                                            <div class="pricing-table">
                                                <div class="pricing-table-header">
                                                    <div class="top d-flex justify-content-between align-items-start">
                                                        <h4>basic</h4>
                                                        <p class="text-right">Have design ready to build?<br>
                                                            or small budget</p>
                                                    </div>
                                                    <h1>$69 <span>/ hour</span></h1>
                                                </div>
                                                <ul class="feature-lists">
                                                    <li>Need your wireframe</li>
                                                    <li>Design with Figma, Framer</li>
                                                    <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                                    <li>Remote/Online</li>
                                                    <li>Work in business days, no weekend.</li>
                                                    <li>Support 6 months</li>
                                                </ul>
                                                <a href="" class="theme-btn">pick this package</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6 scroll-animation" data-animation="fade_from_right">
                                            <div class="pricing-table">
                                                <div class="pricing-table-header">
                                                    <div class="top d-flex justify-content-between align-items-start">
                                                        <h4>premium</h4>
                                                        <p class="text-right">Not have any design?<br>
                                                            Leave its for me</p>
                                                    </div>
                                                    <h1>$129 <span>/ hour</span></h1>
                                                </div>
                                                <ul class="feature-lists">
                                                    <li>Don't need wireframe or anything</li>
                                                    <li>Design with Figma, Framer from scratch</li>
                                                    <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                                    <li>Remote/Online</li>
                                                    <li>Work with both weekend</li>
                                                    <li>Support 12 months</li>
                                                    <li>Your project alway be priority</li>
                                                    <li>Customer care gifts</li>
                                                </ul>
                                                <a href="" class="theme-btn">pick this package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="info scroll-animation" data-animation="fade_from_bottom">
                                        Don't find any package match with your plan!<br>
                                        Want to setup a new tailor-made package for only you?. <a href="">Contact Us</a>
                                    </p>
                                </div>
            
                            </div>
                        </div>
                    </section> --> */}

                    {/* <!-- Contact Section --> */}
                    <section class="contact-area page-section scroll-content" id="contact">
                        <div class="custom-container">
                            <div class="contact-content content-width">
                                <div class="section-header">
                                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                        <i class="las la-envelope"></i> contact
                                    </h4>
                                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Get in <span>touch</span></h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                            <br/><br/>
                                        </p>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="mailto:imashitsoni@gmail.com" class="theme-btn" >Say Hello</a>
                                        <br/><br/><br/><br/>
                                    </div>
                                </div>
                                {/* <!-- <p id="required-msg">* Marked fields are required to fill.</p> --> */}

                                {/* <!-- <form class="contact-form scroll-animation" data-animation="fade_from_bottom" method="POST" action="mailer.php">
                                    <div class="alert alert-success messenger-box-contact__msg" style="display: none" role="alert">
                                        Your message was sent successfully.
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label for="full-name">full Name <sup>*</sup></label>
                                                <input type="text" name="full-name" id="full-name" placeholder="Your Full Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label for="email">Email <sup>*</sup></label>
                                                <input type="email" name="email" id="email" placeholder="Your email adress">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label for="phone-number">phone <span>(optional)</span></label>
                                                <input type="text" name="phone-number" id="phone-number" placeholder="Your number phone">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label for="subject">subject <sup>*</sup></label>
                                                <select name="subject" id="subject">
                                                    <option value="">Select a subject</option>
                                                    <option value="subject1">Subject 1</option>
                                                    <option value="subject2">Subject 2</option>
                                                    <option value="subject3">Subject 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <label for="budget">your budget <span>(optional)</span></label>
                                                <input type="number" name="budget" id="budget" placeholder="A range budget for your project">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <label for="message">message</label>
                                                <textarea name="message" id="message" placeholder="Wrire your message here ..."></textarea>
                                            </div>
                                        </div> 
                                        <div class="col-md-12">
                                            <div class="input-group upload-attachment">
                                                <div>
                                                    <label for="upload-attachment">
                                                        <i class="las la-cloud-upload-alt"></i> add an attachment
                                                        <input type="file" name="file" id="upload-attachment">
                                                    </label>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="input-group submit-btn-wrap">
                                                <button class="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form> --> */}

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    

      </>
    );
  }
  
export default Main;
  
