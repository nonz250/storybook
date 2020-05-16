import {configure} from "@storybook/vue";
import 'bootstrap/dist/css/bootstrap.css';

configure(() => {
    require('../src/stories');
}, module);