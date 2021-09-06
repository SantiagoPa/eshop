<template>
  <div>
    <Nav />
  </div>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-200
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <img
      style="
        border: 20px;
        margin: 50px;
        float: left;
        width: 500px;
        height: 500px;
      "
      class="object-cover rounded-md"
      src="../assets/img/reactjs.jpg"
    />
    <div class="max-w-md w-full h-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-md text-gray-600">
          Or
          <router-link
            to="/sign-in"
            href="create.html"
            class="font-medium text-lg text-blue-600 hover:text-blue-400"
          >
            Create new account
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="p-5">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              type="email"
              required
              class="
                appearance-none
                rounded-md
                relative
                block
                w-full
                h-16
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-blue-500
                focus:border-blue-500
                focus:z-10
                sm:text-sm
              "
              v-model="user"
              placeholder="Email address"
            />
          </div>
          <div class="p-5">
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              required
              class="
                appearance-none
                relative
                h-16
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-md
                focus:outline-none
                focus:ring-blue-500
                focus:border-blue-500
                focus:z-10
                sm:text-sm
              "
              v-model="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-lg
              font-medium
              rounded-md
              text-white
              bg-blue-600
              hover:bg-lightblue-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50
            "
            aria-required="true"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg
                class="h-5 w-5 text-blue-50 group-hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Login
          </button>
        </div>
      </form>
      {{ userAuth }}
      {{ userAdmin }}
    </div>
  </div>
</template>
<script>
import axios from "axios";

import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import Nav from "@/components/Nav.vue";

let url = "http://localhost:4000/login";

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      user: "",
      password: "",
      loginAuth: false,
    };
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getUserAdmin");
    });
    const userAdmin = computed(() => store.state.userAdmin);
    const userAuth = computed(() => store.state.userAuth);
    return { userAdmin, userAuth };
  },
  mounted() {

  },
  methods: {
    async loginPost() {
      try {
        let res = await axios.post(url, {
          emailcostumer: this.user,
          passwordcostumer: this.password,
        });
        //let data = await res.data;
        let user = await res.data;
        console.log(user);
        
        sessionStorage.setItem("my-token", user.token);
        sessionStorage.setItem("id-user", user.dataVec[0].idcostumer);
        sessionStorage.setItem("name-user", user.dataVec[0].namecostumer);

        if (res.status == 200) {
          console.log("login successfully");
          this.loginAuth = true;
          if (!this.userAuth) {
            this.$store.commit("setUserAuth", this.loginAuth);
            console.log(this.userAuth);
          }
          this.$router.push('/home-auth')
        } else {
          console.log("invalid login");
        }
      } catch (error) {
        console.log(error);
        alert("wrong credentials");
      }
    },

    login() {
      if (this.user && this.password) {
        if (
          this.user === this.userAdmin.user &&
          this.password === this.userAdmin.password
        ) {
          this.$router.push("/admin");
        } else {
          this.loginPost();
        }
      }
    },
  },
};
</script>