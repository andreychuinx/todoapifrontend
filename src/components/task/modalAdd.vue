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
              <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input v-model="name" class="input" type="text" placeholder="Name">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Description</label>
                  <div class="control">
                    <input v-model="description" class="input" type="text" placeholder="Description">
                  </div>
                </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" v-on:click="addTaskMethod()">Save changes</a>
          <a class="button" @click="$emit('close')">Cancel</a>
          <label :v-if="throwAddTask.status">{{throwAddTask.result}}</label>
        </footer>
      </div>
      
    </div>

</template>
<script>
  import {mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data(){
      return {
        name : null,
        description : null
      }
    },
    name: 'modalAdd',
    props: ['title'],
    methods : {
      addTaskMethod(){
        this.$store.dispatch('addTask', {
          name : this.name,
          description : this.description
        })
        this.$emit("close")
      }
    },
    computed : {
      ...mapGetters(['throwAddTask'])
    }
  }
</script>