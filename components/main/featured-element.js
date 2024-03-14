app.component("featured-element", {
   props: {
       featured: {
           type: Array,
           required: true
       }
   }, data() {
       return {
       }
   }, template:
        `
        <div class="container col-xxl-8 px-4 py-5">
            <h2 id="featuredProjects" class="poppins-extrabold pb-2 border-bottom">Featured Projects</h2>
            <div class="row featured">
                <div class="col-lg-6">
                    <div class="mx-lg-2">
                        <h4 class="poppins-medium featuredTitle">Lorem ipsum</h4>
                        <p class="poppins-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <a href="projects" class="btn btn-secondary desktopFeaturedButton mx-lg-2">More</a>
                </div>
                <img src="resources/images/projects/placeholder.png" alt="Placeholder" class="col-lg-6 featuredImg">
                <a href="projects" class="btn btn-outline-secondary mobileFeaturedButton my-4">More</a>
            </div>
            <div class="row featured">
                <img src="resources/images/projects/placeholder.png" alt="Placeholder" class="col-lg-6 featuredImg featuredReverseImg">
                <div class="col-lg-6">
                    <div class="mx-lg-3 featuredReverseMessage">
                        <h4 class="poppins-medium featuredTitle">Lorem ipsum</h4>
                        <p class="poppins-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <a href="projects" class="btn btn-secondary desktopFeaturedButton mx-lg-3">More</a>
                </div>
                <a href="projects" class="btn btn-outline-secondary mobileFeaturedButton my-4">More</a>
            </div>
        </div>
        `
});