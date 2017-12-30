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
                  <label class="label">Task</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="taskId" >
                        <option v-for="task in throwTasks" :value="task._id" >{{task.name}}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Assign Users</label>
                  <div class="control">
                    <div class="select is-multiple">
                      <select multiple size="3" v-model="assignUsers">
                        <option v-for="user in throwUsers" :value="user._id">{{user.name}}

                        </option>
                      </select>
                    </div>
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
          <a class="button is-success" v-on:click="addTodoMethod()">Save changes</a>
          <a class="button" @click="$emit('close')">Cancel</a>
          <label :v-if="throwAddUser.status">{{throwAddUser.result}}</label>
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
        description : null,
        taskId : null,
        assignUsers : []
      }
    },
    name: 'modalAdd',
    props: ['title'],
    methods : {
      addTodoMethod(){
        this.$store.dispatch('addTodo', {
          name : this.name,
          taskId : this.taskId,
          assignUsers : this.assignUsers,
          description : this.description
        })
        this.$emit('close')
      }
    },
    computed : {
      ...mapGetters(['throwTasks', 'throwAddUser', 'throwUsers'])
    }
  }
</script>