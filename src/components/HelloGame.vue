<template>
  <section class="hello center">
    <h1 class="hello__title">Welcome!</h1>
    <p class="hello__text">
      You’ll get 15 seconds to bust <br />
      as many ghosts as you can. <br />Colored ghosts score more <br />
      points!
    </p>
    <!-- <a class="hello__link" href="../components/GameComponent.vue">Start</a> -->
    <router-link
      class="hello__link"
      v-for="link in Arr"
      :key="link.id"
      :to="link.url"
    >
      {{ link.name }}
    </router-link>
    <img
      class="hello__img"
      src="../assets/img/hello__ghost_gif.gif"
      alt="animation ghost"
    />
  </section>
</template>

<script>
export default {
  name: "HelloGame",
  props: {
    msg: String,
  },
  data() {
    return {
      Arr: [{ id: 0, name: "Start", url: "/game" }],
    };
  },
};
</script>
