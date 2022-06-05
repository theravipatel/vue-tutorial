<template>
<div>
    <h1>Test 1</h1>
    <h1>Test 2</h1>
    <h1 v-bind="$attrs">Test 2</h1>
</div>
</template>

<script>
export default {
    name: 'NonPropsPage',
    inheritAttrs: false,
    props: {
        prop_data: String
    }
}
</script>