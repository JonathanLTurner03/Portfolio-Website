app.component('education-element', {
    props: {
        education: {
            type: Object,
            required: true
        }
    }, template:
        `
            <div id="education">
                <h4 class="poppins-bold resumeSubtitle">Education</h4>
                <p class="poppins-regular mb-1">{{ education.school }}</p>
                <p class="poppins-bold mb-1">{{ education.gradDate }}</p>
                <p class="poppins-regular mb-1">
                  {{ education.degreeType }} in {{ education.degree }}
                </p>
                <p class="poppins-regular mb-1">
                  Concentration in {{ education.concentration }}
                </p>
                <p class="poppins-regular mb-1">
                  Minor in {{ education.minor }}
                </p>
            </div>
        `
});