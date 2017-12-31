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
          <h4>do you wanna leave us?</h4>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" v-on:click="LOGOUT">
          Sure
        </a>
        <a class="button" @click="$emit('close')">Cancel</a>
      </footer>
    </div>

  </div>

</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        name: null,
        description: null
      }
    },
    name: 'modallogout',
    props: ['title', 'data'],
    methods: {
      ...mapMutations(['LOGOUT'])
    },
    computed: {
    }
  }
</script>