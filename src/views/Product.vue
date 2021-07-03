<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>สินค้า</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">detail</th>
              <th scope="col">view</th>
              <th scope="col">picture</th>
              <th scope="col">date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.detail }}</td>
              <td>{{ item.view }}</td>
              <td><img :src="item.picture" width="50" /></td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Product",
  setup() {
    const products = ref([]); // array of products
    const getData = async () => {
      const response = await axios.get(
        "https://api.codingthailand.com/api/course"
      );
      products.value = response.data.data; // array of data
      //console.log(products.value);
    };

    onMounted(() => {
      getData();
    });

    return { products };
  },
};
</script>

<style></style>
