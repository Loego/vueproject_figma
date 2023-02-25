<template>
    <nav class="navbar navbar-expand-lg navbar-dark pt-5 pl-5 pr-5">
      <!--    Logo-->
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img id="logo" src="../assets/icon.png" />
      </router-link>
  
      <!--    Burger Button-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!--      DropDowns-->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link text-primary dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Discover
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'Home' }"
                >Home</router-link
              >
              <router-link class="dropdown-item" :to="{ name: 'Product' }"
                >Product</router-link
              >
              <router-link class="dropdown-item" :to="{ name: 'Category' }"
                >Category</router-link
              >
            </div>
          </li>
  
          <li class="nav-item dropdown">
            <a
              class="nav-link text-primary dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Build
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" v-else :to="{ name: 'Wishlist' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" :to="{ name: 'Admin' }"
                >Admin</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Log In</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signup' }"
                >Sign Up</router-link
              >
              <a class="dropdown-item" v-if="token" href="#" @click="signout"
                >Sign Out</a
              >
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link text-primary dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" v-else :to="{ name: 'Wishlist' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" :to="{ name: 'Admin' }"
                >Admin</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Log In</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signup' }"
                >Sign Up</router-link
              >
              <a class="dropdown-item" v-if="token" href="#" @click="signout"
                >Sign Out</a
              >
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link text-primary dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" v-else :to="{ name: 'Wishlist' }"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" :to="{ name: 'Admin' }"
                >Admin</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signin' }"
                >Log In</router-link
              >
              <router-link
                class="dropdown-item"
                v-if="!token"
                :to="{ name: 'Signup' }"
                >Sign Up</router-link
              >
              <a class="dropdown-item" v-if="token" href="#" @click="signout"
                >Sign Out</a
              >
            </div>
          </li>
  
          <li class="nav-item">
            <router-link class="nav-link text-primary" :to="{ name: 'Order' }"
              >Impact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-primary" :to="{ name: 'Order' }"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-primary" :to="{ name: 'Order' }"
              >Explorer</router-link
            >
          </li>
          <li class="nav-item">
            <div id="cart">
              <router-link class="btn btn-light text-primary" :to="{ name: 'Cart' }"
                >HUMAN App
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    props: ["cartCount"],
    data() {
      return {
        token: null,
      };
    },
    methods: {
      signout() {
        localStorage.removeItem("token");
        this.token = null;
        this.$emit("resetCartCount");
        this.$router.push({ name: "Home" });
        swal({
          text: "Logged you out. Visit Again",
          icon: "success",
          closeOnClickOutside: false,
        });
      },
    },
    mounted() {
      this.token = localStorage.getItem("token");
    },
  };
  </script>
  
  <style scoped>
  #logo {
    width: 150px;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .nav-link {
    color: rgba(255, 255, 255);
  }
  
  #search-button-navbar {
    background-color: #febd69;
    border-color: #febd69;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  #nav-cart-count {
    background-color: red;
    color: white;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    font-size: 15px;
    margin-left: 10px;
  }
  #cart {
    position: relative;
  }
  </style>
  