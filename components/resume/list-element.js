app.component('list-element', {
    props: {
        title: {
            type: String,
            required: true
        },
        elements: {
            type: Array,
            required: true
        }
    }, computed: {
        header() {
            return this.title.charAt(0).toUpperCase() + this.title.slice(1);
        }
    }, template:
        `
          <div :id="title">
            <h4 class="poppins-bold resumeSubtitle">{{ header }}</h4>
            <p class="poppins-regular" v-for="value in elements">{{ value }}</p>
          </div>
        `
});