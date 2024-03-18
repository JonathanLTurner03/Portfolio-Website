app.component('coursework-element', {
    props: {
        coursework: {
            type: Array,
            required: true
        }
    }, template:
        `
            <div id="coursework">
              <h4 class="poppins-bold resumeSubtitle">Relevant Coursework</h4>
                <ul class="coursework-content">
                    <li class="poppins-regular" v-for="course in coursework" :key="course">{{ course }}</li>
                </ul>
            </div>
        `
});