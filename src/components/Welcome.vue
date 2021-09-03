<template>
  <div>
    <div class="mt-1">
      <Banner />
    </div>
    <div class="h-screen w-full">
      <h1 class="mt-5 mx-5 flex text-4xl">Recommended</h1>
      <div class="ml-5 mt-5 mb-5 flex flex-wrap p-5 min-w-min">
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
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="py-3 px-6 justify-center text-white rounded-lg bg-purple-600 shadow-lg mt-10">Go</button>
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
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="py-3 px-6 justify-center text-white rounded-lg bg-purple-600 shadow-lg mt-10">Go</button>
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
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="py-3 px-6 justify-center text-white rounded-lg bg-purple-600 shadow-lg mt-10">Go</button>
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
        >
          <div id="header" class="flex">
            <img
              alt="mountain"
              class="w-full h-full rounded-md border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <p id="job" class="text-gray-800 mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="py-3 px-6 justify-center text-white rounded-lg bg-purple-600 shadow-lg mt-10">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  name: "HelloWorld",
  components: {
    Banner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
