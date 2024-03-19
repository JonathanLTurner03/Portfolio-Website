app.component('header-element', {
    props: {
        page: {
            type: String,
            required: true
        }
    }, data() {
        return {}
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
                <a class="navbar-brand poppins-medium header primary" href="/">Jonathan Turner</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto float-right text-right pr-3">
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'about' }" href="/about">About</a>
                        </li>
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'projects' }"  href="/projects">Projects</a>
                        </li>
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'hobbies' }" href="/hobbies">Hobbies</a>
                        </li>
                        <li class="nav-item collapsed-nav-item">
                            <a class="nav-link primary poppins-regular" :class="{ currentPage: page === 'resume' }" href="/resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</header>
        `
});