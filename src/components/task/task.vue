<template>
  <admin-template>

    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered">
        <counter :total="countTasks" judul="Tasks" />
        <div class="tile is-parent">
          <article class="tile is-child box">
            <button id="show-modal" class="button is-primary is-large" @click="showAddModal = true">Add</button>
          </article>
        </div>
      </div>
    </section>
    <modal-add title="add Task" v-if="showAddModal" @close="showAddModal = false">
    </modal-add>
    <modal-edit title="Edit Task" :data="dataDetailModal" v-if="showEditModal" @close="showEditModal = false">
    </modal-edit>
    <modal-detail title="Detail Task" :data="dataDetailModal" v-if="showDetailModal" @close="showDetailModal = false">
    </modal-detail>
    <modal-delete title="Delete Task" :data="dataDetailModal" v-if="showDeleteModal" @close="showDeleteModal = false">
    </modal-delete>
    <table class="table">
      <thead>
        <tr>
          <th style="width : 5%">No</th>
          <th style="width : 25%">Name</th>
          <th style="width : 35%">Description</th>
          <th style="width : 20%">Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in throwTasks">
          <td>{{index + 1}}</td>
          <td>
            <a @click="methodDetailModal(data)">
              {{data.name}}
            </a>
          </td>
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
  import modalAdd from "../task/modalAdd"
  import modalDetail from "../task/modalDetail"
  import modalDelete from "../task/modalDelete"
  import modalEdit from "../task/modalEdit"

  export default {
    components: {
      adminTemplate,
      counter,
      modalAdd,
      modalDetail,
      modalDelete,
      modalEdit
    },
    computed: {
      ...mapGetters(['throwTasks', 'countTasks'])
    },
    mounted() {
      this.$store.dispatch('dataTasks')
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
    data() {
      return {
        showAddModal: false,
        showDetailModal: false,
        showDeleteModal: false,
        showEditModal: false,
        dataDetailModal: ''
      }
    }
  };

</script>
<style>
  .table {
    width: 100%;
  }
</style>