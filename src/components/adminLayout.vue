<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../">
            Todo Fancy
          </a>
        </div>

      </div>
    </nav>
    <!-- END NAV -->
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li>
                <router-link to="dashboard">Dashboard</router-link>
              </li>
            </ul>
            <p class="menu-label">User</p>
            <ul class="menu-list">
            
              <li>
                <a @click="methodLogout()">Logout</a>
              </li>
            </ul>
            <p class="menu-label">
              Task
            </p>
            <ul class="menu-list">
              <li>
                <router-link to="task">Task List</router-link>
              </li>
             
            </ul>
            <p class="menu-label">
              Todo
            </p>
            <ul class="menu-list">
              <router-link to="todo">Todo List</router-link>
              
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Hello, {{user.userName}}
                </h1>
                <h2 class="subtitle">
                  I hope you are having a great day!
                </h2>
              </div>
            </div>
          </section>
          <modal-logout title="Logout" data="token" v-if="showLogoutModal" @close="showLogoutModal = false">
          </modal-logout>
          <!-- child dimari -->
          <slot></slot>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import modalLogout from "../components/modalLogout";
export default {
  name: "adminLayout",
  components: {
    modalLogout
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      showLogoutModal: false
    };
  },
  methods: {
    methodLogout() {
      this.showLogoutModal = true;
    }
  }
  // methods: {
  //   dataUser() {
  //     this.$store.dispatch("dataUser", {
  //       token : localStorage.getItem('token')
  //     });
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch('dataUser', {
  //     token : localStorage.getItem('token')
  //   })
  // },
  // computed: {
  //   ...mapGetters(['throwUser']),
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  font-family: "Open Sans", serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ecf0f3;
}
nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item,
.navbar-link {
  font-size: 14px;
  font-weight: 700;
}
.columns {
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
}

.menu-label {
  color: #8f99a3;
  letter-spacing: 1.3;
  font-weight: 700;
}
.menu-list a {
  color: #0f1d38;
  font-size: 14px;
  font-weight: 700;
}
.menu-list a:hover {
  background-color: transparent;
  color: #276cda;
}
.menu-list a.is-active {
  background-color: transparent;
  color: #276cda;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8f99a3;
  font-weight: 400;
}
.info-tiles {
  margin: 1rem 0;
}
.info-tiles .subtitle {
  font-weight: 300;
  color: #8f99a3;
}
.hero.welcome.is-info {
  background: #36d1dc;
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #5b86e5, #36d1dc);
}
.hero.welcome .title,
.hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}
.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8f99a3;
}
.card-footer-item:hover {
}
.card-table .table {
  margin-bottom: 0;
}
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>