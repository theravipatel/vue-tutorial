<template>
<h2>Child Page</h2>
<h3>Passed Static String: {{ title }}</h3>    
<h3>Passed Object: {{ fruit }}</h3> 
<button v-on:click="parentFunction()">Call Parent Function</button>   
</template>

<script>
export default {
    name: 'ChildPage',
    props: {
        title: String,
        fruit: Object,
        parentFunction: Function
    }
}
</script>