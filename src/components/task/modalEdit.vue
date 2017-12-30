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
        <a class="button is-success" @click="editTaskMethod()">Save changes</a>
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
        name: this.data.name,
        description: this.data.description,
        statusCompleted: this.data.statusCompleted
      }
    },
    name: 'modalEdit',
    props: ['title', 'data'],
    methods: {
      editTaskMethod() {
        this.$store.dispatch('editTask', {
          id: this.data._id,
          name: this.name,
          description: this.description,
          statusCompleted: this.statusCompleted
        })
        this.$emit('close')
      }
    },
    computed: {
      ...mapGetters(['throwEditTask'])
    }
  }
</script>