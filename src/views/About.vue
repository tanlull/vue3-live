<template>
  <div class="about">
    <h1>About Page</h1>
    <p>{{ email }}</p>
    <a :href="googleurl">google</a>
    <img :src="imgUrl.url" :alt="imgUrl.alt" v-if="isShow" />

    <button class="btn btn-info" @click="greet">Click</button>
    <p />
    <Logo />

  <h1> upload </h1>
  <form @submit.prevent="onSubmit" enctype="multipart/form-data">
    <input type="file" name = "picture" ref="file" />
    <button type="submit">Upload</button>
  </form>

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
const file = ref(null);

    const greet = () => {
      //alert("Greeting");
      email.value = "BINGO@hotmail.com"; // prop in JS must use .value
      isShow.value = !isShow.value;
    };

    onMounted(() => {
      //alert("Hello About Page");
    });

    onUnmounted(() => {
      //alert("Bye About Page");
    });

    const onSubmit = () => {
        console.log(file.value.files[0]);
        const fileUpload = file.value.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(fileUpload);

        reader.onload = (e) => {
          const base64Image = e.target.result;
          console.log(base64Image);
        }
    }
    return { email, googleurl, imgUrl, isShow, greet , onSubmit,file};
  },
};
</script>

<style scoped>
.about {
  color: red;
}
</style>
