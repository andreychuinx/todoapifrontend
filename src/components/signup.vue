<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">TODO Fancy</h3>
          <p class="subtitle has-text-grey">Come join with us</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input v-model="name" class="input is-normal" name="email" type="name" placeholder="Your Name" autofocus="">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="email" class="input is-normal" name="email" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input v-model="password" class="input is-normal" name="password" type="password" placeholder="Your Password">
                </div>
              </div>
              <a v-on:click="signup()" class="button is-block is-info is-large">Signup</a>

            </form>
          </div>
          <p class="has-text-grey">
            <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      fbSignInParams: {
        scope: "public_profile, email",
        return_scopes: true
      }
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        name : this.name,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>