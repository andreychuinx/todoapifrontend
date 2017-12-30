<template>
  <admin-template>

    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered">
        <counter :total="countTodos" judul="Todos"/>
        <div class="tile is-parent">
            <article class="tile is-child box">
              <button id="show-modal" class="button is-primary is-large" @click="showAddModal = true">Add</button>
            </article>
          </div>
      </div>
    </section>
    <modal-add title="add Todo" v-if="showAddModal" @close="showAddModal = false">
    </modal-add>
    <modal-detail title="Detail Todo" :data="dataDetailModal" v-if="showDetailModal" @close="showDetailModal = false">
    </modal-detail>
    <modal-delete title="Delete Todo" :data="dataDetailModal" v-if="showDeleteModal" @close="showDeleteModal = false">
    </modal-delete>
    <modal-edit title="Edit Todo" :data="dataDetailModal" v-if="showEditModal" @close="showEditModal = false">
    </modal-edit>
    <table class="table">
      <thead>
        <tr>
          <th style="width : 5%">No</th>
          <th style="width : 15%">Todo</th>
          <th style="width : 20%">Task</th>
          <th style="width : 30%">Description</th>
          <th style="width : 15%">Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in throwTodos">
          <td>{{index + 1}}</td>
          <td><a @click="methodDetailModal(data)">
            {{data.name}}
          </a></td>
          <td>{{data.taskId.name}}</td>
          <td>{{data.description}}</td>
          <td>{{data.statusCompleted}}</td>
          <td>
            <a @click="methodEditModal(data)" class="button is-warning is-small">Edit</a>
            <a @click="methodDeleteModal(data)" class="button is-danger is-small">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </admin-template>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import adminTemplate from "../adminLayout"
  import counter from "../counter"
  import modalAdd from "../todo/modalAdd"
  import modalDetail from "../todo/modalDetail"
  import modalDelete from "../todo/modalDelete"
  import modalEdit from "../todo/modalEdit"
  export default {
    data() {
      return {
        showAddModal: false,
        showDetailModal: false,
        showDeleteModal: false,
        showEditModal: false,
        dataDetailModal: ''
      }
    },
    methods: {
      methodDetailModal(data) {
        this.showDetailModal = true
        this.dataDetailModal = data
      },
      methodDeleteModal(data) {
        this.showDeleteModal = true
        this.dataDetailModal = data
      },
      methodEditModal(data) {
        this.showEditModal = true
        this.dataDetailModal = data
      }
    },
    components: {
      adminTemplate,
      counter,
      modalAdd,
      modalDetail,
      modalDelete,
      modalEdit
    },
    mounted() {
      this.$store.dispatch('dataTodos')
      this.$store.dispatch('dataTasks')
      this.$store.dispatch('dataUsers')
    },
    computed : {
      ...mapGetters(['throwTodos', 'countTodos'])
    }
  };
</script>
<style>
  .table{
    width: 100%;
  }
</style>