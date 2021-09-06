<template>
  <div
    class="w-full lg:inline-flex lg:flex-grow lg:w-auto"
    :class="{ none: !isActive, no_none: isActive }"
    id="navigation"
  >
    <div
      class="
        lg:inline-flex
        lg:flex-row
        lg:ml-auto
        flex flex-col
        py-2
        items-center
      "
    >
      <div>
        <div class="flex items-center px-4">
          <div class="ml-2">
            <router-link to="/category-auth/cart">
              <button class="block h-8 w-8  focus:outline-none hover:text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height='32'
                  width='32'
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style>
.class{
  height: 0cm;
  width: 0cm;
}
</style>