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
          <h4>Are you sure wanna delete it?</h4>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" v-on:click="deleteTaskMethod()">
          Sure
        </a>
        <a class="button" @click="$emit('close')">Cancel</a>
        <label :v-if="throwDeleteTask.status">{{throwDeleteTask.result}}</label>
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
    name: 'modaldelete',
    props: ['title', 'data'],
    methods: {
      deleteTaskMethod() {
        console.log('dari modal delete')
        this.$store.dispatch('deleteTask', {
          id: this.data._id
        })
        this.$emit('close')
      }
    },
    computed: {
      ...mapGetters(['throwDeleteTask'])
    }
  }
</script>