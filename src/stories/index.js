import {storiesOf} from "@storybook/vue";

// storybook components
import AtomButton from "./components/AtomButton";

storiesOf('Button', module)
    .add('default', () => ({
        components: {AtomButton},
        template: '<AtomButton color="default"/>'
    }))
    .add('secondary', () => ({
        components: {AtomButton},
        template: '<AtomButton color="secondary"/>'
    }))
    .add('primary', () => ({
        components: {AtomButton},
        template: '<AtomButton color="primary"/>'
    }))
    .add('warning', () => ({
        components: {AtomButton},
        template: '<AtomButton color="warning"/>'
    }))
    .add('danger', () => ({
        components: {AtomButton},
        template: '<AtomButton color="danger"/>'
    }))
    .add('info', () => ({
        components: {AtomButton},
        template: '<AtomButton color="info"/>'
    }))
    .add('light', () => ({
        components: {AtomButton},
        template: '<AtomButton color="light"/>'
    }))
    .add('dark', () => ({
        components: {AtomButton},
        template: '<AtomButton color="dark"/>'
    }));
