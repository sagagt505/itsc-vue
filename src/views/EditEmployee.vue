<template>
  <div class="edit-employee container">
    <h2 class="center-align indigo-text">Add New Employee</h2>

    <div class="row">
      <form class="col s12" @submit="EditEmployee">
        <div class="row">
          <div class="field col s6">
            <input id="firstname" type="text" />
            <label for="firstname">First Name</label>
          </div>
          <div class="field col s6">
            <input id="lastname" type="text" class="validate" />
            <label for="lastname">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="field col s12">
            <input id="birthday" type="date" />
            <label for="birthday">Birthday</label>
          </div>
        </div>
        <div class="row">
          <div class="field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn">Add Employee</button>
          <router-link :to="{ name: 'Index' }"><a class="waves-effect waves-light red btn">Cancel</a></router-link>

        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditEmployee",
  data() {
    return {
      employee: null,
      feedback: null
    };
  },
  methods: {
    EditEmployee() {
      axios
        .post("https://dummy-api.cm.edu/employees", {
          firstname: this.firstname,
          lastname: this.lastname,
          birthday: this.birthday,
          email: this.email
        })
        .then(this.$router.push({ name: "Index" }))
        .catch(err => console.log(err));
    }
 

  }
};
</script>

<style></style>
