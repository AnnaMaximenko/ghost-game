<template>
  <div class="home">
    <HelloGame msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloGame from "@/components/HelloGame.vue";

export default {
  name: "HomeView",
  components: {
    HelloGame,
  },
};
</script>
