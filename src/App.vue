<template>
  <div id="app">
    <router-view/>
    <notifications/>
    
  </div>
  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app',
    methods :{
      notif(){
        this.$notify({
          title: this.isNotify.status,
          text: this.isNotify.message,
          type : this.isNotify.type
        });
      }
    },
    watch: {
      isNotify : {
        deep : true,
        handler : function () {
          this.notif()

        }
      }
    },
    computed: {
      ...mapGetters(['isNotify'])
    },
    
  }
</script>

<style>
  #app {
    font-family: 'Open Sans', serif;
    font-size: 14px;
    font-weight: 300;
  }
</style>