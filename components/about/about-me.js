app.component('about-me', {
    props: {

    }, data() {
        return {

        }
    },template:
        `
         <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont" style="height: 90vh; justify-content: center">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about" style="height: 100%">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 about-img">
                    <picture>
                        <source srcset="/" media="(max-width: 991px)">
                        <img src="/resources/images/about-me/self-portrait.jpg" class="d-block mx-md-auto img-fluid self-portrait" 
                        loading="lazy">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
                        // About Me
                    </h1>
                    <p class="lead poppins-regular">
                        My name is Jonathan, and I am a Computer Science student at Kennesaw State University with a
                        concentration in Artificial Intelligence. I have a love for learning, always trying to apply
                        new ideas and concepts in my work. I am always looking to learn new languages and frameworks
                        to expand my knowledge and skill set. I currently have a strong foundation in Java and JavaFX.
                        However, I am developing my skills in many other areas of software development, such as Python,
                        PHP, JS/VueJS, HTML/CSS, and Bootstrap. I am always looking for new opportunities to learn
                        and develop my skills within the industry and various hobbies. 
                    </p>
                </div>
            </div>
            <div class="floating poppins-regular-italic">
                <p class="notice text-center">
                     Scroll to learn more about my hobbies and interests
                </p>
            </div>
        </div>
        `
});