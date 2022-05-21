<template>
    <h1>Home Page</h1>
    <h2>Interpolation</h2>
    <h3>Name: {{ "Ravi Patel" }}</h3>
    <hr>
    <h2>Property Define</h2>
    <h3>Email: {{ email }}</h3>
    <h3>Value from Function getValue(): {{ getValue() }}</h3>
    <h3>Pass value to Function getValue("Hello"): {{ getValue("Hello") }}</h3>
    <hr>
    <h2>Methods</h2>
    <h3>{{ getData("Hello") }}</h3>
    <h3>{{ getData2().name }}</h3>
    <h3>{{ getData3() }}</h3>
    <hr>
    <h2>Events</h2>
    <button v-on:click="getClickData('Single Clicked');">Single Click</button> 
    <button v-on:dblclick="getClickData('Double Clicked');">Double Click</button> 
    <button v-on:click="increaseCounter()">Click to Increase Counter == {{ counter }}</button>
    <hr>
    <h2>Two Way Binding</h2>
    <input type="text" v-model="bind_val"> - {{ bind_val }}
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            counter: 0,
            bind_val: 0,
            email: 'ravi@test.com',
            getValue:function(val='') {
                return val+" Test";
            }
        }
    },
    methods: {
        getData(val) {
            return val;
        },
        getData2() {
            return 'Ravi Patel';
        },
        getData3() {
            return {
                name: 'Ravi Patel',
                email: 'ravi@test.com',
            }
        },
        getClickData(val) {
            alert(val);
        },
        increaseCounter() {
            this.counter = this.counter+1;
        }
    },
}
</script>

<style scoped>
h1 {
    color: darkslateblue;
}
h2 {
    color: crimson;
}
</style>