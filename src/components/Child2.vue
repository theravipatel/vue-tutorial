<template>
<h2>Child 2 Page</h2>
<button v-on:click="parentFunction2(childName)">Call Parent Function 2</button>   
</template>

<script>
export default {
    name: 'ChildPage',
    data() {
        return {
            childName: 'Test 1',
        }
    },
    props: {
        parentFunction2: Function
    }
}
</script>