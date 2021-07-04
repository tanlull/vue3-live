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
              <td>
                <router-link :to="{name: 'CategoryEdit',params : {id: category.id}}">
                Edit</router-link>
                | 
                <a href="#" @click.prevent="deleteCategoryById(category.id)"> Delete </a>
                </td>
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
import {BASE_API_URL} from '../../constants';
import Swal from 'sweetalert2';


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

  const deleteCategoryById = async (id) => {

    const isConfirm = window.confirm("Are you sure to delete ?");
    if(isConfirm) {
      const response = await axios.delete(`${BASE_API_URL}/api/category/${id}`);
      //alert (response.data.message);
       Swal.fire({
        title: 'Good Job!',
        text: response.data.message,
        icon: 'success',
      });
      history.go(0);
    }
  }
    return { categories, errorMessage, loading,deleteCategoryById };
  },
};
</script>

<style></style>
