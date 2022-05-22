<template>
<h5>{{ item.name }}</h5>
<button v-on:click="getClickData(item.name)">Alert Name</button>
</template>

<script>
export default {
    name: 'UserPage',
    props: {
        item: Object,
        getClickData: Function
    }
}
</script>