<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4" v-if="profile">ยินดีต้อนรับ คุณ {{ profile?.name }}</h1>
    <h3 class="mt-4">Dashboard</h3>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card bg-primary text-white mb-4">
          <div class="card-body">Primary Card</div>
          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" href="#">View Details</a>
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-warning text-white mb-4">
          <div class="card-body">Warning Card</div>
          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" href="#">View Details</a>
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-success text-white mb-4">
          <div class="card-body">Success Card</div>
          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" href="#">View Details</a>
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-danger text-white mb-4">
          <div class="card-body">Danger Card</div>
          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" href="#">View Details</a>
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
  setup() {
    const store = useStore();
    const profile = computed(() => store.state.profile);
    return {
      profile,
    };
  },
};
</script>
