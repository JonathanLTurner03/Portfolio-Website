app.component('about-me', {
    props: {

    }, data() {
        return {

        }
    },template:
        `
         <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 about-img">
                    <picture>
                        <source srcset="/" media="(max-width: 991px)">
                        <img src="/resources/images/self-portrait.jpg" class="d-block mx-md-auto img-fluid self-portrait" 
                        loading="lazy">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
                        /Drones/Photography/Audio 
                    </h1>
                    <p class="lead poppins-regular">
                        I am a Computer Science student at Kennesaw State University with a concentration in Artificial
                        Intelligence. I am aspiring software developer with a focus Machine Learning looking for new 
                        opportunities to learn and develop my skills within the industry. I have a strong foundation 
                        in Java, JavaFX, and growing interest in Python, PHP, and various Web-based frameworks. 
                        I am currently seeking internships for the Fall of 2024 semester to allow for growth and 
                        development with current skills and new skills.
                    </p>
                </div>
            </div>
        </div>
        `
});