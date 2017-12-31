<template>
  <admin-template>

    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered">
        <counter :total="countTasks" judul="Tasks"/>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <router-link :to="{ path: 'add'}" exact>
                <p class="title">Add</p>
              </router-link>
          </article>
        </div>
      </div>
    </section>
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
          <td>{{data.name}}</td>
          <td>{{data.description}}</td>
          <td>{{data.statusCompleted}}</td>
          <td>
            <a class="button is-warning is-small">Edit</a>
            <a class="button is-danger is-small">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </admin-template>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import adminTemplate from "./adminLayout"
  import counter from "./counter"
  export default {
    components: { adminTemplate, counter },
    computed : {
      ...mapGetters(['throwTasks','countTasks'])
    }
  };
</script>
<style>
  .table{
    width: 100%;
  }
</style>