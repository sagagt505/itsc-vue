<template>
  <div class="login container">
    <h2 class="center-align indigo-text">Login</h2>

    <div class="row">
      <form class="col s12" @submit.prevent="Login">
        <div class="row">
          <div class="field col s12">
            <input id="username" type="text" />
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="field col s12">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>
        </div>

        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn">Login</button>
          <router-link :to="{ name: 'Index' }">
            <a class="waves-effect waves-light red btn">Cancel</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            feedback: null
        }
    },
    methods: {
        Login(){

        }
    }
};
</script>

<style>
</style>