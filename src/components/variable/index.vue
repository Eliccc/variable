<template>
    <div class="variable">
        <!-- <component v-bind:is="currentComponent"></component> -->
        <HelloWorld2/>
    </div>
</template>

<script>
export default {
    name: 'variable',

 
    computed: {
        currentComponent: function () {
            return 'HelloWorld'
        },
    },
}
</script>