app.component('header-element', {
    props: {
        page: {
            type: String,
            required: true
        }
    }, data() {
        return {}
    }, computed: {
        projectScope() {
            return this.inScope("projects") ? './projects' : '../projects';
        },
        hobbiesScope() {
            return this.inScope("hobbies") ? './hobbies' : '../hobbies';
        },
        resumeScope() {
            return this.inScope("resume") ? './resume' : '../resume';
        },
        homeScope() {
            return this.inScope("home") ? './' : '../';
        }
    }, methods: {
        inScope(option) {
            if (this.page !== "home") {
                return option === this.page;
            }
            if (this.page === "home" && option !== "home") {
                return option !== this.page;
            }
            return true;
        },
    }, template:
        `
<header id="header">
    <nav class="navbar navbar-expand-lg primary">
            <div class="container">
                <a class="navbar-brand poppins-medium header primary" :href="homeScope">Turner</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto float-right text-right pr-3">
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'projects' }"  :href="projectScope">Projects</a>
                        </li>
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'hobbies' }" :href="hobbiesScope">Hobbies</a>
                        </li>
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'resume' }" :href="resumeScope">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</header>
        `
});