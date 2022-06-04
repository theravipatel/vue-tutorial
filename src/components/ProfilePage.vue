<template>
<h1>{{ profile_name }}'s Profile Page</h1>    
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    name: 'ProfilePage',
    data(){
        return {
            profile_name: '',
        }
    },
    mounted() {
        const route = useRoute();
        this.profile_name = route.params.name;
    },
}
</script>