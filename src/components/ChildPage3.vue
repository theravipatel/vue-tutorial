<template>
<h2 ref="page_title">Child Page 3</h2>
</template>

<script>
export default {
    name: 'ChildPage3',
    beforeUnmount() {
        console.warn("beforeUnmount method called.",this.$refs['page_title']);
    },
    unmounted() {
        console.warn("unmounted method called.",this.$refs['page_title']);
    }
}
</script>