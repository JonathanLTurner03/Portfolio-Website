app.component("featured-element", {
   props: {
       featured: {
           type: Array,
           required: false
       }
   }, data() {
       return {
       }
   }, template: // First one is IcarusEye second one is StyxMix
        `
        <div class="container col-xxl-8 px-sm-4 py-2 pt-4">
            <h2 id="featuredProjects" class="poppins-extrabold pb-2 border-bottom">Featured Projects</h2>
            <div class="row featured mt-lg-4">
                <div class="col-lg-6">
                    <div class="mx-lg-2">
                        <h4 class="poppins-medium featuredTitle">IcarusEye - CV</h4>
                        <h5 class="poppins-light-italic featuredSubTitle mb-2 pb-2 border-bottom">Real-Time Object Detection and Tracking Program</h5>

                        <p class="poppins-regular">
                            A program built to perform classification tasks from an arial drones camera perspective.
                            The focus of this project was to allow for dynamic and customizable controls of a ML classification model for use in realtime applications.
                            This project utilizes a custom Ultralytics YOLOv8s model train on the VisDrone2019-DET dataset. This project was written
                            in Python with the PyTorch Library and utilizes PyQt6 for the custom UI and rendering.
                        </p>
                    </div>
                    <a href="https://github.com/JonathanLTurner03/IcarusEye" target="_blank" class="btn btn-secondary desktopFeaturedButton mx-lg-2">Project Repo <i class="fa-brands fa-github fa-xl"></i></a>
                    <a class="btn btn-outline-secondary desktopFeaturedButton mx-lg-2 demo-cancelled">Demo <i class="fa-brands fa-youtube fa-xl"></i></a>
                </div>
                <img src="/resources/images/projects/IcarusEye-Hero-Banner.svg" alt="IcarusEye Banner" class="col-lg-6 featuredImg">
                <a href="https://github.com/JonathanLTurner03/IcarusEye" target="_blank" class="btn btn-secondary mobileFeaturedButton mt-4 mb-2">Github Project Repo</a>
                <a href="/projects" class="btn btn-outline-secondary mobileFeaturedButton mb-4">Video Demo - Coming Soon</a>
            </div>
            <div class="row featured mt-lg-4">
                <img src="/resources/images/projects/StyxMix-Hero-Banner.png" alt="Placeholder" class="col-lg-6 featuredImg featuredReverseImg">
                <div class="col-lg-6">
                    <div class="mx-lg-3 featuredReverseMessage">
                        <h4 class="poppins-medium featuredTitle">StyxMix - <em>WIP</em></h4>
                        <h5 class="poppins-light-italic featuredSubTitle mb-2 pb-2 border-bottom">Windows Mixer Mapping & Controller</h5>
                        <p class="poppins-regular">
                            A program built to manage Windows Core Audio remotely and wirelessly. This project focuses on grouping individual application audio streams 
                            and maintaining consistent volume levels across them, whether in software or through a motorized fader mixer. StyxMix is written in Python 
                            and leverages pycaw for Core Audio control, pyzmq (ZeroMQ) for a publish-subscribe messaging layer, and zeroconf for zero-configuration 
                            network pairing. It uses a Raspberry Pi Zero 2 W as the hardware endpoint, enabling real-time audio balancing in multi-application environments.
                        </p>
                    </div>
                    <a href="https://github.com/JonathanLTurner03/StyxMix" target="_blank" class="btn btn-secondary desktopFeaturedButton mx-lg-2">Project Repo <i class="fa-brands fa-github fa-xl"></i></a>
                    <a class="btn btn-outline-secondary desktopFeaturedButton mx-lg-2 demo-cancelled">Demo <i class="fa-brands fa-youtube fa-xl"></i></a>
                </div>
                <a href="https://github.com/JonathanLTurner03/StyxMix" class="btn btn-secondary mobileFeaturedButton mt-4 mb-2">Github Project Repo</a>
                <a href="/projects" class="btn btn-outline-secondary mobileFeaturedButton mb-4">Video Demo - Coming Soon</a>
            </div>
        </div>
        `
});