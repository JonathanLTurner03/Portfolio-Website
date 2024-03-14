app.component('footer-element', {
    props: {
        github: {
            type: String,
            required: true
        },
        linkedin: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }, data() {
        return {}
    }, computed: {
        githubLink() {
            return "https://github.com/" + this.github;
        },
        linkedinLink() {
            return "https://www.linkedin.com/in/" + this.linkedin;
        },
        emailLink() {
            return "mailto:" + this.email;
        }
    },template:
        `
         <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-baseline">
                    <a href="#" class="poppins-regular footer mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        Turner
                    </a>
                    <span class="mb-3 mb-md-0 text-muted poppins-regular">Licensed under
                        <a href="https://opensource.org/license/mit" class="text-decoration-none mit">MIT</a>
                    </span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex mr-3">
                    <li class="ms-3"><a class="text-muted" :href="githubLink" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                    <li class="ms-3"><a class="text-muted" :href="linkedinLink" target="_blank"><i class="fa-brands fa-linkedin-in fa-2xl"></i></a></li>
                    <li class="ms-3"><a class="text-muted" :href="emailLink" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></li>
                </ul>
            </footer>
        </div>
        `
});