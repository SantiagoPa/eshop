<template>
  <!-- component -->
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
     <IconAdmin/>
     <NavAdmin/>
    </div>
    <MainAdmin/>
  </div>
</template>

<script>
import IconAdmin from "../components/components-admin/IconAdmin.vue";
import NavAdmin from "../components/components-admin/NavAdmin.vue";
import MainAdmin from "../components/components-admin/MainAdmin.vue";
export default {
  name: "Admin",
  components:{
    IconAdmin,
    NavAdmin,
    MainAdmin,
  }
};
</script>

