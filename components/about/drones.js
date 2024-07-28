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
                        // Drones
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