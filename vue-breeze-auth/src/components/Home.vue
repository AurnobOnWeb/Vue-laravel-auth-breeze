<template>
  <div v-if="auth.user">
    <h1>{{ auth.user.name }}</h1>
   <h1>{{auth.user.email }}</h1>
  </div>
  <div v-else> 
    Go and login
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
onMounted (async () => {
    auth.getUser();
})
</script>
