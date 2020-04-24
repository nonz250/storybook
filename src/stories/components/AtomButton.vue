<template>
    <button
            :class="buttonClass"
    >Button
    </button>
</template>

<script>
    export default {
        name: "AtomButton",
        props: {
            color: {
                type: String,
                required: true,
                default: 'default',
            }
        },
        computed: {
            buttonClass() {
                return 'btn btn-' + this.color;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/stories/sass/button";
</style>