<template>
  <div
    class="w-full lg:inline-flex lg:flex-grow lg:w-auto hidden"
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
            <button
              @click="dropdown"
              class="
                block
                h-8
                w-8
                rounded-full
                overflow-hidden
                border-2 border-gray-600
                focus:outline-none
                focus:border-purple-400
              "
              id="btn-profile"
            >
              <img
                src="../assets/img/profile.png"
                alt="avatar"
                class="h-full w-full object-cover"
              />
            </button>
            <div
              class="
                hidden
                origin-top-right
                absolute
                right-0
                mt-3
                w-56
                rounded-md
                shadow-lg
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              id="dropdown"
            >
              <router-link
                to="/home-auth/account"
                class="
                  block
                  px-4
                  py-2
                  w-full
                  text-indigo-400
                  hover:bg-gray-100
                  hover:text-purple-600
                "
              >
                <button>
                  Account settings
                </button>
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-indigo-400 hover:bg-gray-100 hover:text-purple-600"
              >
              <button @click="logout">
                Log out
              </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "IconUser",

  data() {
    return {
      isActive: true,
      logoutUser: false,
    };
  },

  setup() {
    const store = useStore();
    const userAuth = computed(() => store.state.userAuth);
    return { userAuth };
  },
  methods: {
    nav() {
      if (this.isActive) {
        this.isActive = false;
        console.log(this.isActive);
      } else if (!this.isActive) {
        this.isActive = true;
        console.log(this.isActive);
      }
    },
    dropdown() {
      const dropdown = document.querySelector("#dropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex-row");
    },
    logout() {
      
      sessionStorage.clear();
      if (this.userAuth) {
        this.$store.commit("setUserAuth", this.logoutUser);
        console.log(this.userAuth);
        alert('we recommend closing the browser')
        console.log('logout successfully');
      }
    },
  },
};
</script>
<style scoped>
.none {
  display: none;
}
.no_none {
  display: flex;
  flex-direction: column;
}
</style>
