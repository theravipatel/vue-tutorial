<template>
<HelloWorld msg="Hello Vue!!" />
<HomePage />
<AboutPage />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        HomePage,
        AboutPage
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
}
hr{
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
