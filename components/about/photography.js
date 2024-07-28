app.component('photography', {
    props: {

    }, data() {
        return {

        }
    }, mounted() {
        document.addEventListener('visibilitychange', function () {
            const scrollingContainer = document.querySelector('.scrolling-container');
            if (document.hidden) {
                scrollingContainer.style.animationPlayState = 'paused';
            } else {
                scrollingContainer.style.animationPlayState = 'running';
            }
        });
    }, template:
        `
         <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about border-top">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 photography-imgs">
                <div class="scrolling-container">
                    <picture>
                        <img src="/resources/images/about-me/stars.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/stars%20w%20moon.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/birb.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/birbtakeoff.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/birb%20flying.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/still.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/sun-lens-flare.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/stars 2.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <!-- Repeating for animation -->
                    <picture>
                        <img src="/resources/images/about-me/stars.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/stars%20w%20moon.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/birb.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/birbtakeoff.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/still.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/sun-lens-flare.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/stars 2.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
                        // Photography
                    </h1>
                    <p class="lead poppins-regular">
                        Beyond my academic pursuits, a long standing hobby and interest of mine is 
                        drones, particularly for the unique perspectives they offer. This fascination has grown over 
                        the years, as drones provide a way to explore and capture views that are otherwise inaccessible. 
                        Whether it's an aerial view of a landscape, a dive down a mountain, or a bird's eye view of a 
                        city, I enjoy discovering new angles and vistas. 
                    </p>
                    <br>
                    <p class="lead poppins-regular">
                        Drones have not only been a source of entertainment and exploration, but have also led into
                        professional interests in the use of drones in various industries. I am particularly interested
                        in the use of drones in data collection, such as surveying, mapping, and monitoring various 
                        environments. It has created a strong interest to applying my skills and knowledge in 
                        Machine/Deep Learning to develop ways of processing and categorizing the data that could be 
                        easily collected by drones in difficult to navigate environments. 
                    </p>
                </div>
            </div>
        </div>
        `
});