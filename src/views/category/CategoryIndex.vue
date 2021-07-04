<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>หมวดหมู่สินค้า</h1>
        <router-link to="/category/add" class="btn btn-primary">
          เพิ่มข้อมูล</router-link
        >

        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div class="spinner-border text-success" role="status" v-if="loading">
          <span class="visually-hidden">Loading...</span>
        </div>
        <table class="table" v-if="categories.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name }}</td>
              <td>Edit | Delete</td>
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
import {BASE_API_URL} from '../../constants'

export default {
  name: "CategoryIndex",
  setup() {
    const categories = ref([]); // array of products
    const errorMessage = ref("");
    const loading = ref(false);
    const getData = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `${BASE_API_URL}/api/category`,
        );
        categories.value = response.data; // array of data
        //console.log(products.value);
      } catch (error) {
        console.log(error);
        errorMessage.value = "Error Please try again";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      getData();
    });

    return { categories, errorMessage, loading };
  },
};
</script>

<style></style>
