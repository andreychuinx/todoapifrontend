<template>
  <admin-template>
    
    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered">
        <counter :total="countTasks" judul="Tasks"/>
        <counter :total="countTodos" judul="Todos"/>        
        
      </div>
    </section>
  </admin-template>
</template>
<script>
import adminTemplate from "./adminLayout"
import counter from "./counter"
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { adminTemplate, counter },
  computed : {
    ...mapGetters(['countTasks', 'countTodos'])
  },
  mounted() {
      this.$store.dispatch('dataTasks')
      this.$store.dispatch('dataTodos')
    }

};
</script>
