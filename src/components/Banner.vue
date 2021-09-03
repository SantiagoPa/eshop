<template>
<div class="w-full h-96">
  <div
    class="bg-cover bg-center h-full text-white py-24 px-10 object-fill pt-5 "
    style="
      background-image: url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
    "
  >
    <div class="md:w-1/2 mt-12">
      <p class="font-bold text-sm uppercase">Welcome!!</p>
      <p class="text-3xl font-bold">to Eshop</p>
      <p class="text-2xl mb-10 leading-none">
        buy your products here
      </p>
      <router-link to="/category"
        class="
          bg-purple-800
          py-4
          px-8
          text-white
          font-bold
          uppercase
          text-xs
          rounded
          hover:bg-gray-200
          hover:text-gray-800
        "
        >
        Go to produtcs
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Banner",
};
</script>
