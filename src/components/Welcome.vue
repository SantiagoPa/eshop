<template>
  <div>
    <div class="mt-1">
      <Banner />
    </div>
    <div class="h-screen w-full">
      <h1 class="mt-5 mx-5 flex text-4xl">Recommended</h1>
      <div class="ml-5 mt-5 mb-5 flex flex-wrap p-5 min-w-min" >
        <div
          class="
            my-5
            mx-5
            max-w-2xl
            bg-white
            border-2 border-gray-300
            p-5
            rounded-md
            tracking-wide
            shadow-lg
          "
          v-if="products[1]"
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              :src="products[1].urlimg"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-3xl font-semibold mb-2">
               {{products[1].nameproduct}}
              </h4>
              <p id="job" class="text-green-800 text-3xl mt-6">
                  {{products[1].price}}
              </p>
              <p class="text-gray-600 mt-2">
                go to the similar products
              </p>
              <router-link to="/category">
                <button
                  class="
                    py-3
                    px-6
                    justify-center
                    text-white
                    rounded-lg
                    bg-purple-600
                    shadow-lg
                    mt-10
                  "
                >
                  Go to products
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <!--CARD-->
         <div
          class="
            my-5
            mx-5
            max-w-2xl
            bg-white
            border-2 border-gray-300
            p-5
            rounded-md
            tracking-wide
            shadow-lg
          "
           v-if="products[4]"
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              :src="products[4].urlimg"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-3xl font-semibold mb-2">
               {{products[4].nameproduct}}
              </h4>
              <p id="job" class="text-green-800 text-3xl mt-6">
                  {{products[4].price}}
              </p>
              <p class="text-gray-600 mt-2">
                go to the similar products
              </p>
              <router-link to="/category">
                <button
                  class="
                    py-3
                    px-6
                    justify-center
                    text-white
                    rounded-lg
                    bg-purple-600
                    shadow-lg
                    mt-10
                  "
                >
                  Go to products
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <!--CARD-->
         <div
          class="
            my-5
            mx-5
            max-w-2xl
            bg-white
            border-2 border-gray-300
            p-5
            rounded-md
            tracking-wide
            shadow-lg
          "
           v-if="products[7]"
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              :src="products[7].urlimg"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-3xl font-semibold mb-2">
               {{products[7].nameproduct}}
              </h4>
              <p id="job" class="text-green-800 text-3xl mt-6">
                  {{products[7].price}}
              </p>
              <p class="text-gray-600 mt-2">
                go to the similar products
              </p>
              <router-link to="/category">
                <button
                  class="
                    py-3
                    px-6
                    justify-center
                    text-white
                    rounded-lg
                    bg-purple-600
                    shadow-lg
                    mt-10
                  "
                >
                  Go to products
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <!--CARD-->
         <div
          class="
            my-5
            mx-5
            max-w-2xl
            bg-white
            border-2 border-gray-300
            p-5
            rounded-md
            tracking-wide
            shadow-lg
          "
           v-if="products[13]"
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              :src="products[13].urlimg"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-3xl font-semibold mb-2">
               {{products[13].nameproduct}}
              </h4>
              <p id="job" class="text-green-800 text-3xl mt-6">
                  {{products[13].price}}
              </p>
              <p class="text-gray-600 mt-2">
                go to the similar products
              </p>
              <router-link to="/category">
                <button
                  class="
                    py-3
                    px-6
                    justify-center
                    text-white
                    rounded-lg
                    bg-purple-600
                    shadow-lg
                    mt-10
                  "
                >
                  Go to products
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <!--CARD-->
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  name: "Welcome",
  props: ["products"],
  components: {
    Banner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
