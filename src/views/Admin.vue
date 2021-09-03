<template>
  <!-- component -->
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <div class="flex space-2 items-center border-b-2 pb-4">
        <div class="w-full h-full">
          <img src="../assets/img/vuetify.svg" alt="logo" />
        </div>
        <div class="ml-3">
          <h1 class="text-3xl font-bold text-indigo-600">Eshop</h1>
          <p class="text-center text-sm text-indigo-600 mt-1 font-serif">
            Dashboard
          </p>
        </div>
      </div>
      <div
        class="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
        </div>
        <div>
          <p class="text-lg text-white font-semibold">Dashboard</p>
        </div>
      </div>
      <div class="mt-8">
        <ul class="space-y-10">
          <li>
            <router-link
              to="/admin"
              href="#"
              class="
                flex
                items-center
                text-sm
                font-semibold
                text-gray-500
                hover:text-indigo-600
                transition
                duration-200
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="
                  bi bi-clipboard-plus
                  h-6
                  w-6
                  mr-4
                  text-gray-400
                  hover:text-indigo-600
                  transition
                  duration-200
                "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                />
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                />
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                />
              </svg>
              Products
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex mt-20 space-x-4 items-center">
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
              text-gray-400
              hover:text-indigo-600
              transition
              duration-200
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <router-link
            to="/"
            class="
              ml-4
              block
              font-semibold
              text-gray-500
              hover:text-indigo-600
              transition
              duration-200
            "
          >
            Logout
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <div class="flex justify-between">
        <div>
          <h4 class="text-sm font-bold text-indigo-600">Hi Admin,</h4>
          <h1 class="text-4xl font-bold text-indigo-900 mt-">
            Welcome to Eshop dashboard!
          </h1>
        </div>
      </div>
      <div>
        <div class="flex space-x-10">
          <div
            class="
              flex
              items-center
              justify-around
              p-6
              bg-white
              w-64
              rounded-xl
              space-x-2
              mt-10
              shadow-lg
            "
          >
            <div>
              <span class="text-sm font-semibold text-gray-400"
                >Spent this month</span
              >
              <h1 class="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex mt-10 space-x-10">
          <div
            class="
              bg-white
              w-2/3
              p-8
              flex
              items-center
              justify-around
              rounded-xl
              shadow-lg
            "
          >
            <div class="space-y-2">
              <h3 class="text-sm font-semibold text-gray-400">Total Spent</h3>
              <h1 class="text-4xl font-bold text-indigo-600">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-40 w-40 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <div class="flex-grow bg-white rounded-xl shadow-lg">Other</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>

