<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <router-link class="nav-link" to="/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            หน้าหลัก
          </router-link>
          <router-link class="nav-link" to="/about">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            About
          </router-link>

          <div class="sb-sidenav-menu-heading">Addons</div>
          <router-link class="nav-link" to="/product">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            สินค้า
          </router-link>
          <router-link class="nav-link" to="/category">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            หมวดหมู่สินค้า
          </router-link>
          <a class="nav-link" href="charts.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            Charts
          </a>
          <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
            Tables
          </a>
        </div>
      </div>
      <div class="sb-sidenav-footer" v-if="profile">
        <div class="small">Logged in as: {{ profile?.name }}</div>
        Email : {{ profile?.email }}
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "SideNav",
  setup() {
    const store = useStore();
    const profile = computed(() => store.state.profile);
    return {
      profile,
    };
  },
};
</script>

<style></style>
