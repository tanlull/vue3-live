<template>
  <div class="about">
    <h1>About Page</h1>
    <p>{{ email }}</p>
    <a :href="googleurl">google</a>
    <img :src="imgUrl.url" :alt="imgUrl.alt" v-if="isShow" />

    <button class="btn btn-info" @click="greet">Click</button>
    <p />
    <Logo />
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { ref, reactive, onMounted, onUnmounted } from "vue";
export default {
  name: "About",
  components: {
    Logo,
  },
  setup() {
    const email = ref("tanlull@gmail.com");
    const googleurl = ref("https://google.com");
    const imgUrl = reactive({
      url: "https://via.placeholder.com/100",
      alt: "My Picture",
    });
    const isShow = ref(false);
    const greet = () => {
      //alert("Greeting");
      email.value = "BINGO@hotmail.com"; // prop in JS must use .value
      isShow.value = !isShow.value;
    };

    onMounted(() => {
      alert("Hello About Page");
    });

    onUnmounted(() => {
      alert("Bye About Page");
    });
    return { email, googleurl, imgUrl, isShow, greet };
  },
};
</script>

<style scoped>
.about {
  color: red;
}
</style>
