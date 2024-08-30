app.component('hero-element', {
    props: {

    }, data() {
        return {

        }
    }, methods: {
        scrollTo(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
    },template:
         `
         <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 hero-cont">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 hero-image-container">
                    <picture>
                        <source srcset="/resources/images/hero/Mobile.jpg" media="(max-width: 991px)">
                        <img src="/resources/images/hero/Desktop.jpg" class="d-block mx-lg-auto img-fluid hero-image" 
                        loading="lazy">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">Hi, I'm Jonathan</h1>
                    <p class="lead poppins-regular">
                        I am a Computer Science student at Kennesaw State University with a concentration in Artificial
                        Intelligence. I am aspiring software developer with a focus Machine Learning looking for new 
                        opportunities to learn and develop my skills within the industry. I have a strong foundation 
                        in Java, JavaFX, and growing interest in Python, PHP, and various Web-based frameworks. 
                        I am currently seeking internships for the Fall of 2024 semester to allow for growth and 
                        development with current skills and new skills.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2" 
                            @click="scrollTo('featuredProjects')" title="In Development">Featured Projects</button>
                        <a href="./resume"><button type="button" class="btn btn-outline-secondary btn-lg px-4"
                            style="width: 100%">Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
        `
});