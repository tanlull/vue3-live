<template>
  <div class="container-fluid px-4">
    <h1>Edit Category Data</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="name" class="form-label"> ซื่อประเภทสินค้า</label>
            <input v-model="name" type="text" class="form-control" id="name" />
            {{ name }}
          </div>
          <button type="submit" class="btn btn-primary">แก้ไขรายการ</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import Swal from 'sweetalert2';
import {BASE_API_URL} from '../../constants'


export default {
  name: "CategoryEdit",
  setup() {
    const name = ref("");
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      id.value = route.params.id;
      //alert(id.value);
      getCategoryByID(id.value);
    });

    const getCategoryByID = async (id) =>{
      const response = await axios.get(`${BASE_API_URL}/api/category/${id}`);
      name.value = response.data.name;
    }
    const onSubmit = async () => {
      const response = await axios.put(
        `${BASE_API_URL}/api/category`,
        {
          id: id.value,
          name: name.value,
        }
      );
      //alert(response.data.message);
      await Swal.fire({
        title: 'Good Job!',
        text: response.data.message,
        icon: 'success',
      });

      router.replace("/category");
    };

    return { name, onSubmit };
  },
};
</script>

<style></style>
