import {configure} from "@storybook/vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';

configure(() => {
    require('../src/stories');
}, module);