app.component('hero-element', {
    props: {

    }, data() {
        return {

        }
    }, template:
         `
         <div class="container col-xxl-8 px-4 py-5 ">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero">
                <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 hero-image-container">
                    <picture>
                        <source srcset="resources/images/hero/Mobile.jpg" media="(max-width: 991px)">
                        <img src="resources/images/hero/Desktop.jpg" class="d-block mx-lg-auto img-fluid hero-image" loading="lazy">
                    </picture>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">Lorem ipsum</h1>
                    <p class="lead poppins-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Temp</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Other</button>
                    </div>
                </div>
            </div>
        </div>
        `
});