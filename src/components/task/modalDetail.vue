<template>
  <div id="modal-ter" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <h1>{{data.name}}</h1>
          <p>{{data.description}}</p>
          <h3>Status</h3>
          <p>{{data.statusCompleted}}</p>
          <h3>Todo List</h3>
          <ol>
            <li v-for="dataTodo in throwTaskTodos">
              {{dataTodo.name}} <button class="button" @click="deleteTodos(dataTodo._id)">Delete</button>
            </li>
          </ol>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button" @click="$emit('close')">Cancel</a>
      </footer>
    </div>

  </div>

</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        name: null,
        description: null
      }
    },
    name: 'modalDetail',
    props: ['title', 'data'],
    mounted() {
      this.$store.dispatch('dataTaskTodos', {
        taskId : this.data._id
      })
    },
    methods : {
      deleteTodos(id){
        this.$store.dispatch('deleteTodo', {
          id: id
        })
        this.$emit('close')
      }
    },
    computed: {
      ...mapGetters(['throwTaskTodos'])
    }
  }
</script>