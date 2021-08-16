<template>
  <div id="nav" class="p-4">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'projects' }">Projects</router-link> |
    <router-link :to="{ name: 'posts' }">Posts</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <div class="p-4">
    <router-view />
  </div>
  <footer class="text-center bg-gray-50 py-4 mt-auto">
    &copy; {{ new Date().getFullYear() }}
    <a
      href="https://github.com/sixpeteunder"
      target="_blank"
      class="font-semibold hover:underline"
    >
      sixpeteunder
    </a>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
