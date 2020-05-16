import {configure} from "@storybook/vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

configure(() => {
    require('../src/stories');
}, module);