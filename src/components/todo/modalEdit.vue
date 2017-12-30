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
              <input v-model="name" name="name" class="input" type="text" placeholder="Name"></input>
            </div>
          </div>

          <div class="field">
            <label class="label">Task</label>
            <div class="control">
              <div class="select">
                <select v-model="taskId">
                  <option v-for="task in throwTasks" :value="task._id" :selected="task._id == data.taskId._id ? 'selected' : ''">{{task.name}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Assign Users</label>
            <div class="control">
              <div class="select is-multiple">
                <select multiple size="3" v-model="assignUsers">
                  <option v-for="user in throwUsers" :value="user._id" :selected="user._id == data.assignUsers._id ? 'selected' : ''">{{user.name}}

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
          <div class="field">
            <label class="label">Status</label>
            <div class="control">
              <div class="select">
                <select v-model="statusCompleted">
                  <option value="unCompleted">unCompleted</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

            </div>

          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" @click="editTodoMethod()">Save changes</a>
        <a class="button" @click="$emit('close')">Cancel</a>
      </footer>
    </div>

  </div>

</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: this.data.name,
      description: this.data.description,
      statusCompleted: this.data.statusCompleted,
      taskId: this.data.taskId._id,
      assignUsers : this.data.assignUsers.map(function (obj) {
        var idObj = ''
        idObj = obj._id
        return idObj
      })
    };
  },
  name: "modalEdit",
  props: ["title", "data"],
  methods: {
    editTodoMethod() {
      this.$store.dispatch("editTodo", {
        id: this.data._id,
        name: this.name,
        description: this.description,
        taskId: this.taskId,
        statusCompleted: this.statusCompleted,
        assignUsers : this.assignUsers
      });
      this.$emit("close");
    }
  },
  computed: {
    ...mapGetters(["throwEditTask", "throwTasks", "throwUsers"])
  }
};
</script>