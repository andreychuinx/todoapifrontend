<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">{{total}}</p>
      <p class="subtitle">{{judul}}</p>
    </article>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name : 'Counter',
    props : ['total', 'judul'],
    computed : {
      ...mapGetters(['countTasks', 'countTodos'])
    }
  }
</script>