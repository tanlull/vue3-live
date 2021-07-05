import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../../constants";

export function useAdd() {
  const name = ref("");
  const router = useRouter();

  const onSubmit = async () => {
    const response = await axios.post(`${BASE_API_URL}/api/category`, {
      name: name.value,
    });
    //alert(response.data.message);
    Swal.fire({
      title: "Good Job!",
      text: response.data.message,
      icon: "success",
    });

    router.replace("/category");
  };

  return { name, onSubmit };
}

export function useEdit() {
  const name = ref("");
  const id = ref(0);
  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
    id.value = route.params.id;
    //alert(id.value);
    getCategoryByID(id.value);
  });

  const getCategoryByID = async (id) => {
    const response = await axios.get(`${BASE_API_URL}/api/category/${id}`);
    name.value = response.data.name;
  };
  const onSubmit = async () => {
    const response = await axios.put(`${BASE_API_URL}/api/category`, {
      id: id.value,
      name: name.value,
    });
    //alert(response.data.message);
    await Swal.fire({
      title: "Good Job!",
      text: response.data.message,
      icon: "success",
    });

    router.replace("/category");
  };

  return { name, onSubmit };
}

export function useIndex() {
  const categories = ref([]); // array of products
  const errorMessage = ref("");
  const loading = ref(false);
  const page = ref(1);
  const totalPage = ref(0);

  const getData = async (page) => {
    try {
      loading.value = true;
      const response = await axios.get(
        `${BASE_API_URL}/api/category?page=${page}&page_size=10`
      );
      categories.value = response.data.data; // array of data
      totalPage.value = response.data.last_page;
      //console.log(products.value);
    } catch (error) {
      console.log(error);
      errorMessage.value = "Error Please try again";
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getData(page.value);
  });

  const deleteCategoryById = async (id) => {
    const isConfirm = window.confirm("Are you sure to delete ?");
    if (isConfirm) {
      const response = await axios.delete(`${BASE_API_URL}/api/category/${id}`);
      //alert (response.data.message);
      Swal.fire({
        title: "Good Job!",
        text: response.data.message,
        icon: "success",
      });
      history.go(0);
    }
  };
  return {
    categories,
    errorMessage,
    loading,
    deleteCategoryById,
    page,
    totalPage,
    getData,
  };
}
