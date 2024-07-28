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
                <div class="col-sm-10 col-sm-8 col-lg-6 pr-sm-5 photography-imgs">
                <div class="scrolling-container">
                    <picture>
                        <img src="/resources/images/about-me/photography/stars.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/stars%20w%20moon.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birb.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birbtakeoff.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birb%20flying.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/still.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/sun-lens-flare.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/stars%202.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <!-- Repeating for animation -->
                    <picture>
                        <img src="/resources/images/about-me/photography/stars.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/stars%20w%20moon.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birb.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birbtakeoff.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/birb%20flying.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/still.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/sun-lens-flare.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                    <picture>
                        <img src="/resources/images/about-me/photography/stars%202.jpg" class="d-block mx-md-auto img-fluid p-img"
                        loading="lazy">
                    </picture>
                </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
                        // Photography & Nature
                    </h1>
                    <p class="lead poppins-regular">
                        In addition to my interest in drones, I am an avid hiker. Photography is a significant part of 
                        my hikes, as I love capturing the essence of the places I visit. From breathtaking landscapes 
                        to hidden gems in nature, I enjoy documenting my journeys through my camera lens. Long exposure 
                        photography allows me to capture the stunning night sky and mesmerizing sunsets, providing a 
                        unique way to remember the places I've been. This hobby has taken me to various locations, both 
                        familiar and remote, and has increased my appreciation for the world around us.
                    </p>
                </div>
            </div>
        </div>
        `
});