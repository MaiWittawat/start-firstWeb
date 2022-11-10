<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
  import ProfilePage from "./layouts/profilePage.vue"
  import Default from "./layouts/default.vue";
  export default {
    components:{
      ProfilePage,
      Default
    },
    computed:{
      layout(){
        return this.$route.meta.layout || Default;
      }
    }
  }
</script>
