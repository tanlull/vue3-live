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
                <router-link
                  :to="{ name: 'CategoryEdit', params: { id: category.id } }"
                >
                  Edit</router-link
                >
                |
                <a href="#" @click.prevent="deleteCategoryById(category.id)">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div v-if="categories.length > 0">
          <v-pagination
            v-model="page"
            :pages="totalPage"
            :range-size="1"
            active-color="#DCEDFF"
            @update:modelValue="getData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import { useIndex } from "./use/crud-category";

export default {
  name: "CategoryIndex",
  components: {
    VPagination,
  },
  setup() {
    const {
      categories,
      errorMessage,
      loading,
      deleteCategoryById,
      page,
      totalPage,
      getData,
    } = useIndex();

    return {
      categories,
      errorMessage,
      loading,
      deleteCategoryById,
      page,
      totalPage,
      getData,
    };
  },
};
</script>

<style></style>
