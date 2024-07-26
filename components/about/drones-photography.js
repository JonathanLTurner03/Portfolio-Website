app.component('drones-photography', {
    props: {

    }, data() {
        return {

        }
    },template:
        `
         <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont">
            <div class="row flex-lg-row align-items-center g-5 py-5 about">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 about-img">
                    <picture>
                        <source srcset="/" media="(max-width: 991px)">
                        <img src="/resources/images/about-me/self-portrait.jpg" class="d-block mx-md-auto img-fluid self-portrait" 
                        loading="lazy">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
                        // Drones & Photography
                    </h1>
                    <p class="lead poppins-regular">
                        For the longest I could remember, I have always had a fascination with perspective. I have always
                        been interested in the way things look from different, whether it is how the sun refracts off 
                        the water, or how the clouds look from above. This sparked my interest in drones and photography.
                        Photography has always been a hobby of mine, and I have always enjoyed long exposure shots of the
                        night sky and the stars. This hobby has allowed me to explore new places and capture moments that
                        I would not have been able to see otherwise. 
                        <br>
                        From this love of photography, spawned a new interest of mine, drones. Drones have allowed me to
                        not only capture unique perspectives of the world around me 
                    </p>
                </div>
            </div>
        </div>
        `
});