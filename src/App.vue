<template>
   <div>
      <NavBar />
      <router-view></router-view>
   </div>
</template>

<script>
import NavBar from "./components/NavBar"
export default {
   name: "App",
   components: {
      NavBar,
   },
}
</script>

<style>
.btn {
   color: white !important;
}

a:hover,
a:active {
   color: white !important;
}
.navbar {
   padding: 0 !important;
}
</style>
